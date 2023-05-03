import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../interfaces/producto.intarface';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'productoImagen'
})
export class ProductoImagenPipe implements PipeTransform {

  transform( producto: Producto ): string {

    if ( !producto._id && !producto.imagen ) {
      return 'assets/images/no-image.jpg';
    }

    if ( producto.imagen ) return `${ environment.baseUrl }/upload/productos/${ producto.imagen }`; // https:///google.com/flash.png

    return 'assets/images/no-image.jpg';
  }

}
