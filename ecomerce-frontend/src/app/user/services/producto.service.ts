import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../interfaces/producto.intarface';
import { Imagen } from 'src/app/auth/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseUrl: string = environment.baseUrl;


  constructor( private http: HttpClient ) { }

  getProductos():Observable<Producto[]> {
    return this.http.get<Producto[]>(`${ this.baseUrl }/productos`);
  }

  getImgById( id: string ): Observable<Blob|undefined> {
    return this.http.get(`${this.baseUrl}/uploads/productos/${id}`, { responseType: 'blob' })
    .pipe(
      catchError(error => of(undefined))
    );
  }


}
