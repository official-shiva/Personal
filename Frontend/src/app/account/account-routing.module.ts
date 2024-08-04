import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LoginAccountComponent, SignupAccountComponent } from './components';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: LoginAccountComponent, },
      { path: 'login', component: LoginAccountComponent, },
      { path: 'signup', component: SignupAccountComponent, },

    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AccountRoutingModule { }