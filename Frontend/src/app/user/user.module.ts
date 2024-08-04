import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";  
import { SharedModule } from "src/app/shared/shared.module"; 
import { UserRoutingModule } from "./user-routing.module";
import { UserManageComponent } from "./component/user-manage.component";

@NgModule({
  declarations: [ 
    UserManageComponent, 
  ],
  imports: [
    SharedModule,
    CommonModule,
    UserRoutingModule
  ],
  providers: [],
})

export class UserModule { }

