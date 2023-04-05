import { Injectable } from '@angular/core';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor( private loading: LoadingService ) {}

  download(data: any, name: string) {
    const dataType = data.type;
    const binaryData = [];
    binaryData.push(data);
    
    const filtePath = window.URL.createObjectURL( new Blob(binaryData, { type: dataType }) );
    const downloadLink = document.createElement('a');
    downloadLink.href = filtePath;
    downloadLink.setAttribute('download', name);
    document.body.appendChild(downloadLink);
    downloadLink.click();
    this.loading.hide();
  }

}
