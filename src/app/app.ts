import { Component } from '@angular/core';
import { TarjetaVisita } from './tarjeta-visita/tarjeta-visita';
import { ListaCompra } from './lista-compra/lista-compra';

@Component({
  selector: 'app-root',
  imports: [TarjetaVisita, ListaCompra],
  template: `
    <section>
      <h1>Ejemplo 1: tarjeta de visita</h1>
      <app-tarjeta-visita />
    </section>
    <section>
      <h1>Ejemplo 2: data down, actions up</h1>
      <app-lista-compra />
    </section>
  `,
})
export class App {}
