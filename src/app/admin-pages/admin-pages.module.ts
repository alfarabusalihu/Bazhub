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
import { RouterModule } from '@angular/router';


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
    // RouterModule,
    AdminPagesRoutingModule,
  ],
  exports:[]
})
export class AdminPagesModule { }
