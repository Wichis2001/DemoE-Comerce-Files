import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { ShoppingPageComponent } from './pages/shopping-page/shopping-page.component';
import { SalePageComponent } from './pages/sale-page/sale-page.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    CartPageComponent,
    ListPageComponent,
    OrderPageComponent,
    ShoppingPageComponent,
    SalePageComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
