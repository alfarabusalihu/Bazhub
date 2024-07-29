import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './client-pages/layout/layout.component';
import { AdminLayoutComponent } from './admin-pages/admin-layout/admin-layout.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    loadChildren: ()=> import('./admin-pages/admin-pages.module').then(x=> x.AdminPagesModule)
  },
  {
    path: '',
    component: LayoutComponent,
    loadChildren: ()=> import('./client-pages/client-pages.module').then(m=> m.ClientPagesModule)
  },
  // {
  //   path: 'auth',
  //   component: ResetPasswordComponent,
  //   loadChildren: ()=> import('./auth/auth.module').then(y=> y.AuthModule)
  // },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

