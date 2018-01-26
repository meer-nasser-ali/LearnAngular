import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

    loginDetails: LoginModel = new LoginModel();

    constructor() { }

    ngOnInit() {
    }

    validateForm(form){
        console.log("Form submitted with: " + JSON.stringify(form.value));
        form.reset();
    }

    resetForm(){
        this.loginDetails = new LoginModel();
    }
}

class LoginModel {
    constructor(
        public userName: string = "", 
        public password: string = "", 
        public rememberMe: boolean = false
    ) { }
}