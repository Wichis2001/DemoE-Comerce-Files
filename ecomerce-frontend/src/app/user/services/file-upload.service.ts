import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private baseUrl: string = environment.baseUrl;

  constructor() { }

  async actualizarFoto(
    archivo: File,
    tipo: 'usuarios' | 'productos',
    id: string
  ) {
    try{
      
    } catch( err ){
      console.log( err );
      return false;
    }
  }
}
