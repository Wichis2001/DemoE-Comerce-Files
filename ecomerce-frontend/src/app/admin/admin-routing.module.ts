import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddPageComponent } from './pages/add-page/add-page.component';
import { UserComponent } from './pages/user/user.component';
import { ProductosMasVendidosComponent } from './pages/productos-mas-vendidos/productos-mas-vendidos.component';
import { ClientesMasGananciasComponent } from './pages/clientes-mas-ganancias/clientes-mas-ganancias.component';
import { ClientesMasProductosVendidosComponent } from './pages/clientes-mas-productos-vendidos/clientes-mas-productos-vendidos.component';
import { ClientesMasPedidosComponent } from './pages/clientes-mas-pedidos/clientes-mas-pedidos.component';
import { ClientesMasProductosEnVentaComponent } from './pages/clientes-mas-productos-en-venta/clientes-mas-productos-en-venta.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'new-account',
        component: AddPageComponent
      },
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'produtos-vendidos',
        component: ProductosMasVendidosComponent
      },
      {
        path: 'clientes-ganancias',
        component: ClientesMasGananciasComponent
      },
      {
        path: 'clientes-ventas',
        component: ClientesMasProductosVendidosComponent
      },
      {
        path: 'clientes-pedidos',
        component: ClientesMasPedidosComponent
      },
      {
        path: 'clientes-productos',
        component: ClientesMasProductosEnVentaComponent
      },
      {
        path: 'edit/:id',
        component: AddPageComponent
      },
      {
        path: '**',
        redirectTo: 'user'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
