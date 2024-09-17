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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { TableComponent } from './shared/components/table/table.component';
import { ProductModalComponent } from './shared/components/product-modal/product-modal.component';
import { OrderModalComponent } from './shared/components/order-modal/order-modal.component';
import { UserModalComponent } from './shared/components/user-modal/user-modal.component';
import { ClientPagesModule } from '../client-pages/client-pages.module';
// import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    DashboardComponent,
    OrdersComponent,
    ProductsComponent,
    SettingsComponent,
    UsersComponent,
    LoginComponent,
    TableComponent,
    ProductModalComponent,
    OrderModalComponent,
    UserModalComponent,
  ],
  imports: [
    CommonModule,
    AdminPagesRoutingModule,
    ClientPagesModule,
    ReactiveFormsModule,
    FormsModule,
    // MatTableModule,
    ModalModule.forRoot(),

  ],
  exports:[],
})
export class AdminPagesModule { }
