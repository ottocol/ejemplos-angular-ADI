import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BullshitService } from './bullshit.service';

@Component({
  selector: 'app-tarjeta-visita',
  imports: [FormsModule],                       // necesario para [(ngModel)]
  templateUrl: './tarjeta-visita.html',         // Vista: HTML
  styleUrl: './tarjeta-visita.css',             //        + CSS
})
export class TarjetaVisita {
  private bullshitService = inject(BullshitService);

  // Estado
  nombre = signal('');
  apellidos = signal('');
  bullshit = signal('');

  // Lógica: estado derivado (se recalcula solo cuando cambian sus dependencias)
  nombreCompleto = computed(() => `${this.nombre()} ${this.apellidos()}`);

  generarBullshit() {
    // La respuesta llega de forma asíncrona. Como 'puesto' es un signal,
    // Angular se entera del cambio y actualiza la vista (incluso sin Zone.js).
    // Si fuera un campo normal (this.puesto = p) la vista NO se refrescaría.
    this.bullshitService.generarPuesto().subscribe(p => this.bullshit.set(p));
  }
}
