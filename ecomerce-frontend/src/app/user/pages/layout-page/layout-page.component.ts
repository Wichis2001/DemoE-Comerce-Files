import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/auth/interfaces/interfaces';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  usuario:Usuario = this.authService.usuario;

  public sidebarItems = [
    {
      label: 'Productos',
      icon: 'shopping_bag',
      url: './list'
    },
    {
      label: 'Buscar',
      icon: 'search',
      url: './search'
    },
    {
      label: 'Compras',
      icon: 'shopping_cart',
      url: './cart'
    },
    {
      label: 'Ventas',
      icon: 'paid',
      url: './new-sale'
    },
    {
      label: 'Pedidos',
      icon: 'flight',
      url: './order'
    }
  ]

  constructor( private authService: AuthService,
               private router: Router) {}

  logOut():void {
    this.authService.logOut();
    this.router.navigate(['/auth']);
  }
}
