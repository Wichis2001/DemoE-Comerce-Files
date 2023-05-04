import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { IngresosPageComponent } from './pages/ingresos-page/ingresos-page.component';
import { PedidosPageComponent } from './pages/pedidos-page/pedidos-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'ingresos',
        component: IngresosPageComponent
      },
      {
        path: 'pedidos',
        component: PedidosPageComponent
      },
      {
        path: '**',
        redirectTo: 'ingresos'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackageRoutingModule { }
