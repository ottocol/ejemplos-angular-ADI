import { Component, signal, computed } from '@angular/core';
import { Lista } from '../lista/lista';
import { ItemCompra } from '../item-compra';

@Component({
  selector: 'app-lista-compra',
  imports: [Lista],
  template: `
    <h2>La lista de la compra</h2>
    <!-- ⑥ Capturamos el evento que sube desde Lista -->
    <app-lista [items]="items()" (toggleComprado)="toggleComprado($event)" />
    <p>Quedan {{ pendientes() }} por comprar</p>
  `,
})
export class ListaCompra {
  // Este componente es el "dueño" del estado
  items = signal<ItemCompra[]>([
    { nombre: 'Leche', comprado: true },
    { nombre: 'Pan', comprado: false },
    { nombre: 'Huevos', comprado: false },
  ]);

  pendientes = computed(() => this.items().filter(it => !it.comprado).length)

  // ⑦ El evento ya no sube más: se procesa aquí cambiando el estado,
  // y el "data down" vuelve a comenzar.
  toggleComprado(index: number) {
    // Actualización inmutable: creamos un array nuevo (y un objeto nuevo
    // para el item que cambia). Un signal compara por referencia, así que
    // si mutáramos el array en sitio NO se enteraría del cambio.
    this.items.update(items => {
      const item = items[index]
      const copia = [...items]
      copia[index] = { nombre: item.nombre, comprado: !item.comprado }
      return copia
    })
  }
}
