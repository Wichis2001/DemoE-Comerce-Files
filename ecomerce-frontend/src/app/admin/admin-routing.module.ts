import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from '../auth/pages/layout-page/layout-page.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { UserComponent } from './pages/user/user.component';
import { ReportPageComponent } from './pages/report-page/report-page.component';

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
        path: 'edit/:id',
        component: AddPageComponent
      },
      {
        path: 'reports',
        component: ReportPageComponent
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
