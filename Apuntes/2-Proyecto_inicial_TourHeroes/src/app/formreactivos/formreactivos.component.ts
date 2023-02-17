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
  constructor(private fb: FormBuilder) {}

  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('Federico'),
  // });

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(4)]], //También podemos poner de primer parámetro "Federico" por ejemplo, que es el valor del campo
    nacimiento: [, [Validators.required, Validators.min(1920)]],
    tieneHijos: [ 'N' , Validators.required], //Podemos poner 'S' o 'N' para por defecto que cargue una u otra opción. O dejarlo vacío para que no esté checkeado nada
  });

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched(); //Cuando se pulse el botón de submit, se muestran todos los errores
      return;
    }

    // this.myService.guardarServicio(this.miFormulario.value); //Sirve para coger un service y ejecutar un método allí, con el fin de guardar en propiedades. También lo podemos guardar en la base de datos (pero por ahora no)
    console.log(this.miFormulario.value);
    this.miFormulario.reset({
      'tieneHijos': 'N' //Cuando reseteamos, la propiedad tieneHijos, se pondrá por defecto en N. Si no, se desmarca al hacer reset
    });
  }
}
