import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPagesRoutingModule } from './admin-pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    DashboardComponent,
    OrdersComponent,
    ProductsComponent,
    SettingsComponent,
    UsersComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AdminPagesRoutingModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),

  ],
  exports:[]
})
export class AdminPagesModule { }
