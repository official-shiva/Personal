import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core"; 
import { LoginAccountComponent, SignupAccountComponent } from "./components";
import { AccountRoutingModule } from "./account-routing.module";
import { SharedModule } from "src/app/shared/shared.module"; 
import { UserService } from "./services";

@NgModule({
  declarations: [ 
    LoginAccountComponent, 
    SignupAccountComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    AccountRoutingModule,  
  ],
  providers: [UserService],
})

export class AccountModule { }

