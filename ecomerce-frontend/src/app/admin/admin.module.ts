import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { UserComponent } from './pages/user/user.component';
import { MaterialModule } from '../material/material.module';
import { ProductosMasVendidosComponent } from './pages/productos-mas-vendidos/productos-mas-vendidos.component';
import { ClientesMasGananciasComponent } from './pages/clientes-mas-ganancias/clientes-mas-ganancias.component';
import { ClientesMasProductosVendidosComponent } from './pages/clientes-mas-productos-vendidos/clientes-mas-productos-vendidos.component';
import { ClientesMasPedidosComponent } from './pages/clientes-mas-pedidos/clientes-mas-pedidos.component';
import { ClientesMasProductosEnVentaComponent } from './pages/clientes-mas-productos-en-venta/clientes-mas-productos-en-venta.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LayoutPageComponent,
    AddPageComponent,
    UserComponent,
    ProductosMasVendidosComponent,
    ClientesMasGananciasComponent,
    ClientesMasProductosVendidosComponent,
    ClientesMasPedidosComponent,
    ClientesMasProductosEnVentaComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
