import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  agregar() {
    if (this.pendientes.value && this.fecha.value) {
      this.items.push({ pendientes: this.pendientes.value, fecha: this.fecha.value });
      this.pendientes.setValue('');
      this.fecha.setValue('');
    }
  }


  constructor() { }
  pendientes = new FormControl('');
  fecha = new FormControl('');
  items: any = [];

}