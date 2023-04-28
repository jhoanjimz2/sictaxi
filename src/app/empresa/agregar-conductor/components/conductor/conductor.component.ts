import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.scss']
})
export class ConductorComponent {
  @ViewChild('myInput') input!: ElementRef;
  img: string = '';
  file!: File;
  imgsubir!:File;
  constructor( private loading: LoadingService ) {}
  addimg(event: any) {
    if (event.target.files.length === 0) return;
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) return this.loading.error('texto');
    if (event.target.files[0].size > 2000000) return this.loading.error('texto');
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.file = event.target.files[0];
      this.imgsubir = this.file;
      this.img = reader.result!.toString();
      return;
    }
    this.input.nativeElement.disabled = true;
  }
  abrirImg () {
    this.input.nativeElement.disabled = false;
    this.input.nativeElement.click()
  }
}
