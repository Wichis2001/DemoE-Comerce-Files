import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto.intarface';
import { VentaService } from '../../services/venta.service';
import { DetalleVenta } from '../../interfaces/venta.intarface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styles: [
  ]
})
export class CartPageComponent implements OnInit{
  public detalles: DetalleVenta[] = [];

  constructor(private ventaService: VentaService,
              private snackbar: MatSnackBar) {}

  ngOnInit(): void {
    this.detalles = this.ventaService.detalleVenta;
  }

  vaciarCarrito(): void{
    this.ventaService.vaciarCarrito();
    this.showSnackbar('Carrito vaciado correctamente!')
  }

  showSnackbar( message: string ):void {
    this.snackbar.open( message, 'ok', {
      duration: 2500,
    })
  }

  validarBotones(): boolean {
    if( this.ventaService.detalleVenta.length > 0 ){
      return false;
    }
    return true;
  }

  get total(): number {
    return this.ventaService.total;
  }

  get cantidad(): number {
    return this.ventaService.cantidad;
  }



}
