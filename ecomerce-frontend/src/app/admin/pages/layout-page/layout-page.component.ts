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
      label: 'Usuarios',
      icon: 'person',
      url: './user'
    },
    {
      label: 'Agregar',
      icon: 'group_add',
      url: './new-account'
    },
    {
      label: 'Reportes',
      icon: 'quick_reference_all',
      url: './reports'
    }
  ]

  constructor( private authService: AuthService,
               private router: Router) {}

  logOut():void {
    this.authService.logOut();
    this.router.navigate(['/auth']);
  }
}
