import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenes'
})
export class ImagenesPipe implements PipeTransform {
  transform(img: string): any {
    if (!img) return 'assets/no-image.jpg';
    if (img.indexOf('https') >= 0) return img;
    return img;
  }
}
