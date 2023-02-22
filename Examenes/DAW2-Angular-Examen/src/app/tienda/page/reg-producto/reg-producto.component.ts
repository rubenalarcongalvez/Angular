import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-reg-producto',
  templateUrl: './reg-producto.component.html',
  styles: [],
})
export class RegProductoComponent {
  registrado: boolean = false;

  constructor(private fb: FormBuilder, private service: DataService) {}

  formProducto: FormGroup = this.fb.group({
    nombre: [, [Validators.required]],
    precio: [, [Validators.required, Validators.min(1)]],
    cantidad: [, [Validators.required, Validators.min(1)]],
  });

  registrar() {
    if (this.formProducto.invalid) {
      this.formProducto.markAllAsTouched();
      this.registrado = false;
    } else {
      this.service.anadirProducto(this.formProducto.value);
      this.formProducto.reset();
      this.registrado = true;
    }
  }
}
