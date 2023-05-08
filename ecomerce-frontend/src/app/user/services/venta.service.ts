import { Producto } from './../interfaces/producto.intarface';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DetalleVenta } from '../interfaces/venta.intarface';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  private baseUrl: string = environment.baseUrl;
  private _detalleVenta: DetalleVenta[] = [];

  private _total: number = 0;
  private _cantidad: number = 0;



  get total(){
    this._total = 0;
    this.detalleVenta.forEach( (detalle )=> {
      this._total += detalle.sub_total
    })
    return this._total;
  }

  get cantidad(){
    this._cantidad = this.detalleVenta.length;
    return this._cantidad;
  }

  get detalleVenta() {
    return this._detalleVenta;
  }

  agregarDetalleVenta(producto: Producto, subTotal: number, cantidad: number) {
    const detalleExistente = this.detalleVenta.find(detalle => detalle.producto._id === producto._id);

    if ( detalleExistente ) {
      detalleExistente.sub_total = subTotal;
      detalleExistente.cantidad = cantidad;
    } else {
      const detalleVentaAsignado: DetalleVenta = { producto, sub_total: subTotal, cantidad };
      this.detalleVenta.push(detalleVentaAsignado);
    }
  }

  eliminarDetalleVenta(detalle: DetalleVenta) {
    const index = this._detalleVenta.findIndex(d => d === detalle);
    if (index !== -1) {
      this.detalleVenta.splice(index, 1);
    }

  }

  vaciarCarrito(){
    this.detalleVenta.splice(0, this.detalleVenta.length);

  }

}
