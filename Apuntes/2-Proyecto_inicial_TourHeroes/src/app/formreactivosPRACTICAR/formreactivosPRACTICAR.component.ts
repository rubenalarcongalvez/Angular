import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formreactivosPRACTICAR',
  templateUrl: './formreactivosPRACTICAR.component.html',
  styles: [],
})
export class FormreactivosPRACTICARComponent {
  constructor(private fb: FormBuilder) {}

  miFormulario: FormGroup = this.fb.group({
    nombre: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(25)],
    ],
    nacimiento: [
      '',
      [Validators.min(1920), Validators.max(new Date().getFullYear())],
    ],
    acepta: ['S', [Validators.required]],
  });

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
    } else {
      this.miFormulario.reset({
        acepta: 'S',
      });
    }
  }
}
