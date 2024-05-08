import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterLandingComponent } from './register-landing/register-landing.component';
import { RegisterComponent } from './register/register.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';

const routes: Routes = [
  {
    path: '', component: RegisterLandingComponent, children: [
      { path: '', title: 'UiBank-Register', component: RegisterComponent },
      { path: 'success/:username', title: 'UiBank-Register success', component: RegisterSuccessComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterModuleRoutingModule { }
