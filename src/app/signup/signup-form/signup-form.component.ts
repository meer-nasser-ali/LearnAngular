import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms/';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms/src/model';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
    // FORM CONTROLS
    // firstName = new FormControl('', [Validators.required]);
    // lastName = new FormControl('', [Validators.required]);
    // email = new FormControl('', [Validators.required, Validators.email]);

    // FORM GROUP
    signupForm : FormGroup;

    constructor(public fb: FormBuilder) { 
        this.createForm();
    }

    ngOnInit(): void {
    }

    createForm(){
        // using formGroup with controls decalred outside 
        // this.signupForm = new FormGroup({
        //     firstName: this.firstName,
        //     lastName: this.lastName,
        //     email: this.email
        // });

        // using formGroup with controls declared internally
        this.signupForm = new FormGroup({
            firstName: new FormControl('', [Validators.required]),
            lastName: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email])
        });

      
        // // using form builder
        // this.signupForm = this.fb.group({
        //     firstName: ['', Validators.required],
        //     lastName: ['', Validators.required],
        //     email: ['', Validators.required, Validators.email]
        // });
    }

    formSubmitted() {
        // console.log("form submitted with status: " + this.signupForm.status);
        // console.log(this.signupForm);
        console.log(this.signupForm.status);
    }

    resetForm(){
        // this.signupData = new UserData();
        this.createForm();
    }
}
