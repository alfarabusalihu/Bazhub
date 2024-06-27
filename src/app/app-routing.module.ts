import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './client-pages/layout/layout.component';
import { AuthModule } from './auth/auth.module';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: ()=> import('./client-pages/client-pages.module').then(m=> m.ClientPagesModule)
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    loadChildren: ()=> import('./auth/auth.module').then(m=> m.AuthModule)
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    loadChildren: ()=> import('./auth/auth.module').then(m=> m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

