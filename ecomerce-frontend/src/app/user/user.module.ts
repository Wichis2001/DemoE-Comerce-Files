import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { UserRoutingModule } from './user-routing.module';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { ShoppingPageComponent } from './pages/shopping-page/shopping-page.component';
import { SalePageComponent } from './pages/sale-page/sale-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { CardComponent } from './components/card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { SellCardComponent } from './components/sell-card/sell-card.component';
import { AddPageComponent } from './pages/add-page/add-page.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    CartPageComponent,
    ListPageComponent,
    OrderPageComponent,
    ShoppingPageComponent,
    SalePageComponent,
    SearchPageComponent,
    CardComponent,
    ProductPageComponent,
    SellCardComponent,
    AddPageComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
