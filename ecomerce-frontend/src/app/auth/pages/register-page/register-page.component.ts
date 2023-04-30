import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: [ './register-page.component.css' ]
})
export class RegisterPageComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre:   [ '', [Validators.required] ],
    password: [ '', [Validators.required, Validators.minLength( 6 )]]
  });

  constructor( private fb: FormBuilder,
               private router: Router ) {}

  registro(){

  }
}
