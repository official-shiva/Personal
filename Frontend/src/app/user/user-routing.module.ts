import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";  
import { UserManageComponent } from './component';

const routes: Routes = [
  {
    path: '', 
    children: [
      { path: 'manage', component: UserManageComponent, },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }