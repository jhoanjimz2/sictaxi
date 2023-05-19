import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import jsPDF from 'jspdf';
import { ConductorSearch, RespBuscarConductores } from 'src/app/interfaces';
import { ModalDesvincularComponent } from 'src/app/modals/modal-desvincular/modal-desvincular.component';
import { ModalPerfilTaxistaComponent } from 'src/app/modals/modal-perfil-taxista/modal-perfil-taxista.component';
import { DownloadService } from 'src/app/services/download.service';
import { LoadingService } from 'src/app/services/loading.service';
import { SearchCondutoresService } from 'src/app/services/search-condutores.service';

@Component({
  selector: 'app-buscar-conductores',
  templateUrl: './buscar-conductores.component.html',
  styleUrls: ['./buscar-conductores.component.scss']
})
export class BuscarConductoresComponent {
  
  conductores: ConductorSearch[] = [];
  totalPages: number = 0;
  paginaActual: number = 0;
  filtro: string = '';
  
  constructor( 
    private loading: LoadingService,
    public dialog: MatDialog,
    private sC: SearchCondutoresService,
    private download: DownloadService
  ) { this.pagina({ pagina: 1 }); }

  pagina({pagina}: any) {
    this.loading.show();
    this.paginaActual = pagina;
    this.sC.getConductoresGeneralEmpresa(pagina, this.filtro, JSON.parse(localStorage.getItem('user')!).idempresa).subscribe({
      next: (data: RespBuscarConductores) => {
        this.totalPages = data.pages;
        this.conductores = data.data;
        this.loading.hide();
      }, error: (error: any) => {
        this.totalPages = 0;
        this.conductores = [];
        this.loading.hide();
        this.loading.error(error.error.message);
      }
    })
  }
  buscar(busca: string) {
    this.filtro = busca;
    this.pagina({ pagina: 1 });
  }

  datosConductor(idVinculacion: string, idConductor: string) {
    const dialogRef = this.dialog.open(ModalPerfilTaxistaComponent, {
      data: { idConductor, idVinculacion, completo: true },
      height: '90%',
      width: '1000px',
    });
    dialogRef.afterClosed().subscribe(result => {});
  }

  desvincular(idVinculacion:string) {
    const dialogRef = this.dialog.open(ModalDesvincularComponent, {
      data: { idVinculacion },
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if ( result ) this.pagina({ pagina: 1 });
    });
  }

  exportar() {
    this.loading.show();
    let id = JSON.parse(localStorage.getItem('user')!).id;
    this.sC.getExcelConductoresListadoGeneralEmpresa(id).subscribe({
      next: (data: any) => {
        this.download.download(data, 'Conductores');
      }, error: (error: any) => {
        this.loading.hide();
        this.loading.error(error.error.message);
      }
    })
  }

  pdfExportar(id: string){
    this.loading.show();
    this.sC.descargarPdfProfileEmpresa(id).subscribe({
      next: (data: any) => {
        this.getBase64Image(data);
      }, error: (error: any) => {
        this.loading.hide();
        this.loading.error(error.error.message);
      }
    })
  }

  getBase64Image(data: any) {

    var img = new Image();
    var img2 = new Image();
    var factorx =0;
    var factory =0;
    var printer=data.tipoImpresion;  
    var numerocon=(4-data.consecutivo.length);
    var ceros='';
    if(numerocon>0){
      for(var i=0;i<numerocon;i++){
        ceros+="0";  
      }
    }      
    ceros+=data.consecutivo;

    if(data.tipoImpresion==2){
      factorx=2.5;
      factory=0;
    }else{
      factorx=0;
      factory=0;
    }

    if(data.imagen === null || data.imagen===''){
      img.src = '../assets/img/user.svg';
    }else{
      img.src = data.imagen;
    }
    img.style.height ="181px";
    img.style.width ="183px";
    img.crossOrigin ="Anonymous";
    if(data.imagenEmp === null || data.imagenEmp===''){
      img2.src = '../assets/img/company.svg';
    }else{
      img2.src = data.imagenEmp;
    }
    img2.style.height ="181px";
    img2.style.width ="183px";
    img2.crossOrigin ="Anonymous";    

    img.onload=()=>{
      img.crossOrigin ="Anonymous";            
      var canvas = <HTMLCanvasElement> document.createElement('canvas');
      var context = canvas.getContext('2d');
      context!.fillStyle = '#fff'
      context!.drawImage(img,0,0);
      var dataURL = canvas.toDataURL("image/png");        
      document.body.appendChild(img);

      img2.crossOrigin ="Anonymous";            
      var canvas2 = <HTMLCanvasElement> document.createElement('canvas');
      var context2 = canvas2.getContext('2d');
      context2!.fillStyle = '#fff'
      context2!.drawImage(img2,0,0);
      var dataURL = canvas2.toDataURL("image/png");        
      document.body.appendChild(img2);

      var doc = new jsPDF('landscape','cm','legal');
      doc.setFont("TimesNewRomanPS", "", "bold");

      doc.setFontSize(11);
      doc.addImage(img,'PNG',1+factorx,3.4+factory,5.3,6.7); //FOTO DEL CONDUCTOR
      img.remove();   
      doc.setFontSize(12);                    
      doc.text(ceros, 16.6+factorx, 2.79+factory);        
      doc.setFontSize(11);
      doc.text(data.datos.fechaLicenciaConduccion, 15+factorx, 5+factory);    
      doc.setFontSize(10);
      doc.text(data.datos.nombres+' '+data.datos.apellidos, 10.6+factorx, 4.38+factory);
      doc.setFontSize(11);
      doc.text(data.datos.licenciaConduccion, 10.6+factorx, 5+factory);
      doc.setFontSize(12);
      doc.text(data.datos.categoriaPase, 10.6+factorx, 5.75+factory);   
      if(data.Eps!==null){
        doc.setFontSize(10);  
        doc.text(data.Eps.nombre, 8+factorx, 6.5+factory);   
      }   
      if(data.Arl!==null){
        doc.setFontSize(6);  
        doc.text(data.Arl.nombre, 15+factorx, 6.4+factory);   
      }    
      if(data.Afp!==null){
        doc.setFontSize(10);  
        doc.text(data.Afp.nombre, 10.6+factorx, 7.18+factory);   
      }     
      doc.setFontSize(12);
      doc.text(data.datos.tipoSangre, 10.6+factorx, 7.8+factory);
      doc.text(data.datos.rh, 15+factorx, 7.8+factory); 
      doc.setFontSize(8);
      doc.text(data.datos.razonSocial, 10.6+factorx, 9.6+factory);        
      doc.text(data.datos.nit, 10.6+factorx, 10.3+factory);
      doc.text(data.datos.direccione, 10.6+factorx, 11.1+factory);    
      doc.text(data.datos.tele, 10.6+factorx, 11.8+factory);
      doc.setFontSize(6);
      doc.text(data.datos.emaile, 10.6+factorx, 12.3+factory);

      doc.addImage(img2,'PNG',15+factorx,9.7+factory,2,2.8); //LOGO DE LA EMPRESA
      img2.remove();   

      doc.setFontSize(35);
      doc.text(data.datos.placa, 0.8+factorx,13.68+factory)
      doc.setFontSize(10);
      doc.text(data.datos.numeroMotor, 5.8+factorx,15.6+factory)
      doc.setFontSize(12);
      doc.text(data.datos.marca, 5.8+factorx,16.35+factory)
      doc.text(data.datos.tarjetaOperacion, 5.8+factorx,17.08+factory)
      doc.text(data.datos.numeroSOAT, 2.2+factorx,17.76+factory)
      doc.setFontSize(12);
      doc.text(data.datos.numeroRCC, 5.8+factorx,18.40+factory)
      doc.text(data.datos.numeroRCE, 5.8+factorx,19.1+factory)
      doc.text(data.datos.numeroTecnoMecanica, 5.8+factorx,19.81+factory)
      doc.setFontSize(6);
      doc.text(data.datos.nombreaseguradora, 9.4+factorx,17.76+factory)
      doc.setFontSize(10);
      doc.text(data.datos.numeroChasis, 13+factorx,15.6+factory)
      doc.setFontSize(12);
      doc.text(data.datos.modelo, 13+factorx,16.35+factory)
      doc.text(data.datos.fechaTarjetaOperacionF, 14.6+factorx, 17.08+factory);
      doc.text(data.datos.fechaNumeroSOAT, 14.6+factorx, 17.76+factory);
      doc.text(data.datos.fechaNumeroRCC, 14.6+factorx, 18.38+factory); 
      doc.text(data.datos.fechaNumeroRCE, 14.6+factorx, 19.08+factory); 
      doc.text(data.datos.fechaNumeroTecnoMecanica, 14.6+factorx, 19.68+factory);   

      doc.save('Tarjeton de conductor'+" "+ data.datos.nombres+' '+data.datos.apellidos);    

    };
    this.loading.hide();
  }

}