import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-reg-cliente',
  templateUrl: './reg-cliente.component.html',
  styles: [
  ]
})
export class RegClienteComponent {

  registrado: boolean = false;
    
  constructor(private fb: FormBuilder, private service: DataService) {}

  formCliente: FormGroup = this.fb.group ({
    nombre: [ , [Validators.required]],
    edad: [ , [Validators.required, Validators.min(1)]],
    genero: [ , [Validators.required]],
    carrito: [[]] //Carrito vacío
  });

  registrar() {
    if (this.formCliente.invalid) {
      this.formCliente.markAllAsTouched();
      this.registrado = false;
    } else {
      this.service.anadirCliente(this.formCliente.value);
      this.formCliente.reset();
      this.registrado = true;
    }

  }

}
