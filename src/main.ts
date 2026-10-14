import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';

// Angular 21: las apps son zoneless por defecto (sin Zone.js).
// La vista solo se actualiza cuando la avisa una fuente reactiva:
// signals, inputs, eventos del template, async pipe...
bootstrapApplication(App).catch(err => console.error(err));
