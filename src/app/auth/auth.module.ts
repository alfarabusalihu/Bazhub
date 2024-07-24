import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    ResetPasswordComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    AuthRoutingModule
  ]
})
export class AuthModule { }
