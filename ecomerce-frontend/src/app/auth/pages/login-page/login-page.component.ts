import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: [ './login-page.component.css' ]
})
export class LoginPageComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre:   [ '', [Validators.required] ],
    password: [ '', [Validators.required, Validators.minLength( 6 )]]
  });

  constructor( private fb: FormBuilder,
               private router: Router ) {}

  login(){

  }
}
