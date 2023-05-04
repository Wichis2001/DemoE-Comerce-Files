import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackageRoutingModule } from './package-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { PedidosPageComponent } from './pages/pedidos-page/pedidos-page.component';
import { IngresosPageComponent } from './pages/ingresos-page/ingresos-page.component';
import { IngresoCardComponent } from './components/ingreso-card/ingreso-card.component';
import { PedidoCardComponent } from './components/pedido-card/pedido-card.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    LayoutPageComponent,
    PedidosPageComponent,
    IngresosPageComponent,
    IngresoCardComponent,
    PedidoCardComponent

  ],
  imports: [
    CommonModule,
    PackageRoutingModule,
    MaterialModule
  ]
})
export class PackageModule { }
