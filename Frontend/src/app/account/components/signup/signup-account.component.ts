import { Component } from "@angular/core";
import { AccountSignupModel } from "src/app/account/models";
import { UserService } from "../../services";

@Component({
    selector: 'app-signup-account',
    templateUrl: './signup-account.component.html',
})

export class SignupAccountComponent {
    model: AccountSignupModel = new AccountSignupModel();

    constructor(private userService: UserService) { }

    submit(): void {
        this.userService.add(this.model).subscribe({
            next: () => {
                alert("User added.");
            }, 
            error: (error) => {
                alert(error);
            }
        })
    }
}