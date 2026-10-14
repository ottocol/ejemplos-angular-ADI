import { Component, input, output } from '@angular/core';
import { ItemCompra } from '../item-compra';

@Component({
  selector: 'app-item',
  template: `
    <label>
      <!-- ① El usuario hace clic -> ② el manejador de "change" emite el evento -->
      <input type="checkbox" [checked]="datos().comprado"
             (change)="toggleComprado.emit()">
      <span [class.tachado]="datos().comprado">{{ datos().nombre }}</span>
    </label>
  `,
  styles: `.tachado { text-decoration: line-through; color: #888; }`,
})
export class Item {
  // Data down: el padre nos pasa los datos (solo lectura para el hijo)
  datos = input.required<ItemCompra>();

  // Actions up: ③ evento definido por el desarrollador, no por el navegador.
  // El item no sabe en qué posición de la lista está, por eso no lleva parámetro.
  toggleComprado = output<void>();
}
