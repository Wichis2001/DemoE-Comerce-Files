import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { ReportPageComponent } from './pages/report-page/report-page.component';
import { UserComponent } from './pages/user/user.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    LayoutPageComponent,
    AddPageComponent,
    ReportPageComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }
