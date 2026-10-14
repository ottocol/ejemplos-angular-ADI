import { Component, input, output } from '@angular/core';
import { Item } from '../item/item';
import { ItemCompra } from '../item-compra';

@Component({
  selector: 'app-lista',
  imports: [Item],
  template: `
    <ul>
      @for (item of items(); track item.nombre; let i = $index) {
        <li>
          <!-- Data down: pasamos cada item al hijo -->
          <!-- ④ Capturamos el evento del hijo y ⑤ emitimos otro, ahora con el índice -->
          <app-item [datos]="item" (toggleComprado)="toggleComprado.emit(i)" />
        </li>
      }
    </ul>
  `,
  styles: `ul { list-style: none; padding-left: 0; }`,
})
export class Lista {
  items = input.required<ItemCompra[]>();
  toggleComprado = output<number>();
}
