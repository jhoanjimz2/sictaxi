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
    var factorx = 0;
    var factory = 0;
    var printer = data.tipoImpresion;
    var numerocon = (4 - data.consecutivo.length);
    var units = data.units;
    var ceros = '';
    if (numerocon > 0) {
      for (var i = 0; i < numerocon; i++) {
        ceros += "0";
      }
    }
    ceros = data.datos.idMatricula;


    if (data.imagen === null || data.imagen === '') {
      img.src = '../assets/img/user.svg';
    } else {
      img.src = data.imagen;
    }
    img.style.height = "181px";
    img.style.width = "183px";
    img.crossOrigin = "Anonymous";
    if (data.imagenEmp === null || data.imagenEmp === '') {
      img2.src = '../assets/img/company.svg';
    } else {
      img2.src = data.imagenEmp;
    }
    img2.style.height = "181px";
    img2.style.width = "183px";
    img2.crossOrigin = "Anonymous";

    img.onload = () => {
      img.crossOrigin = "Anonymous";
      var canvas = <HTMLCanvasElement>document.createElement('canvas');
      var context = canvas.getContext('2d');
      context!.fillStyle = '#fff'
      context!.drawImage(img, 0, 0);
      var dataURL = canvas.toDataURL("image/png");
      document.body.appendChild(img);

      img2.crossOrigin = "Anonymous";
      var canvas2 = <HTMLCanvasElement>document.createElement('canvas');
      var context2 = canvas2.getContext('2d');
      context2!.fillStyle = '#fff'
      context2!.drawImage(img2, 0, 0);
      var dataURL = canvas2.toDataURL("image/png");
      document.body.appendChild(img2);

      var doc = new jsPDF('landscape', 'cm', 'legal');
      doc.setFont("TimesNewRomanPS", "", "bold");

      doc.setFontSize(11);
      doc.addImage(img, 'PNG', units.foto.x + factorx, units.foto.y + factory, 5.3, 6.7); //FOTO DEL CONDUCTOR
      img.remove();
      doc.setFontSize(12);
      doc.text(ceros, units.censo.x + factorx, units.censo.y + factory); //Número de censo


      //MODIFICADO
      doc.setFontSize(10);
      doc.text(data.datos.nombres + ' ' + data.datos.apellidos, units.nombres.x + factorx, units.nombres.y + factory);
      doc.setFontSize(11);
      doc.text(units.licencia.x + factorx, units.licencia.y + factory, data.datos.licenciaConduccion);
      doc.text(units.fechaLicenciaConduccion.x + factorx, units.fechaLicenciaConduccion.y + factory, data.datos.fechaLicenciaConduccion);
      doc.setFontSize(12);
      doc.text(units.categoriaPase.x + factorx, units.categoriaPase.y + factory, data.datos.categoriaPase);
      if (data.Eps !== null) {
        doc.setFontSize(10);
        doc.text(units.eps.x + factorx, units.eps.y + factory, data.Eps.nombre);
      }
      if (data.Arl !== null) {
        doc.setFontSize(6);
        doc.text(units.arl.x + factorx, units.arl.y + factory, data.Arl.nombre);
      }
      if (data.Afp !== null) {
        doc.setFontSize(10);
        doc.text(units.afp.x + factorx, units.afp.y + factory, data.Afp.nombre);
      }
      doc.setFontSize(12);
      doc.text(units.tipoSangre.x + factorx, units.tipoSangre.y + factory, data.datos.tipoSangre);
      doc.text(units.rh.x + factorx, units.rh.y + factory, data.datos.rh);


      //SIN MODIFICAR
      doc.setFontSize(8);
      doc.text(units.razonSocial.x + factorx, units.razonSocial.y + factory, data.datos.razonSocial);
      doc.text(units.nit.x + factorx, units.nit.y + factory, data.datos.nit);
      doc.text(units.direccion.x + factorx, units.direccion.y + factory, data.datos.direccione);
      doc.text(units.telefono.x + factorx, units.telefono.y + factory, data.datos.tele);
      doc.setFontSize(6);
      doc.text(units.email.x + factorx, units.email.y + factory, data.datos.emaile);
      doc.addImage(img2, 'PNG', units.logo.x + factorx, units.logo.y + factory, 2, 2.8); //LOGO DE LA EMPRESA
      img2.remove();

      //MODIFICADO
      doc.setFontSize(35);
      doc.text(units.placa.x + factorx, units.placa.y + factory, data.datos.placa)
      doc.setFontSize(10);


      //MODIFICADO
      doc.text(data.datos.consecutivo + " - " + data.datos.numeroMotor, units.numeroMotor.x + factorx, units.numeroMotor.y + factory)
      doc.setFontSize(12);
      doc.text(units.marca.x + factorx, units.marca.y + factory, data.datos.marca)
      doc.text(units.tarjetaOperacion.x + factorx, units.tarjetaOperacion.y + factory, data.datos.tarjetaOperacion)
      doc.text(units.numeroSOAT.x + factorx, units.numeroSOAT.y + factory, data.datos.numeroSOAT)
      doc.setFontSize(12);
      doc.text(units.numeroRCC.x + factorx, units.numeroRCC.y + factory, data.datos.numeroRCC)
      doc.text(units.numeroRCE.x + factorx, units.numeroRCE.y + factory, data.datos.numeroRCE)
      doc.text(units.numeroTecnoMecanica.x + factorx, units.numeroTecnoMecanica.y + factory, data.datos.numeroTecnoMecanica)


      //MODIFICADO
      doc.setFontSize(6);
      doc.text(units.nombreaseguradora.x + factorx, units.nombreaseguradora.y + factory, data.datos.nombreaseguradora)
      doc.setFontSize(10);

      //MODIFICADO
      doc.text(units.numeroChasis.x + factorx, units.numeroChasis.y + factory, data.datos.numeroChasis)
      doc.setFontSize(12);
      doc.text(units.modelo.x + factorx, units.modelo.y + factory, data.datos.modelo)

      //MODIFICADO
      doc.text(units.fechaTarjetaOperacionF.x + factorx, units.fechaTarjetaOperacionF.y + factory, data.datos.fechaTarjetaOperacionF);
      doc.text(units.fechaNumeroSOAT.x + factorx, units.fechaNumeroSOAT.y + factory, data.datos.fechaNumeroSOAT);
      doc.text(units.fechaNumeroRCC.x + factorx, units.fechaNumeroRCC.y + factory, data.datos.fechaNumeroRCC);
      doc.text(units.fechaNumeroRCE.x + factorx, units.fechaNumeroRCE.y + factory, data.datos.fechaNumeroRCE);
      doc.text(units.fechaNumeroTecnoMecanica.x + factorx, units.fechaNumeroTecnoMecanica.y + factory, data.datos.fechaNumeroTecnoMecanica);

      doc.save('Tarjeton de conductor' + " " + data.datos.nombres + ' ' + data.datos.apellidos);

    };
  }

}