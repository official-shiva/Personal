import { Component, ViewChild } from "@angular/core"; 
import { AccountLoginModel } from "../../models";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-login-account',
    templateUrl: './login-account.component.html',
})

export class LoginAccountComponent {  
  model: AccountLoginModel = new AccountLoginModel();

  submit(): void {
    console.log(this.model);
  }
}