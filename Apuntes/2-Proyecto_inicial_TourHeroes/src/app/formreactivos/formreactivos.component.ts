import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formreactivos',
  templateUrl: './formreactivos.component.html',
  styles: [],
})
export class FormreactivosComponent {
  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('Federico'),
  // });

  miFormulario: FormGroup = this.fb.group({
    nombre: ['Federico', Validators.required],
  });

  constructor(private fb: FormBuilder) {}
}
