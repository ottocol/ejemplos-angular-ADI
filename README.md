# Ejemplos Angular (ADI)

Los dos ejemplos del tema 5 ("Frameworks JS en el cliente") en Angular 21:
signals, `input()`/`output()`, control flow `@for` y modo zoneless (sin Zone.js),
que es lo que genera hoy el CLI por defecto.

- `src/app/tarjeta-visita/`: anatomía de un componente (estado, lógica, vista).
- `src/app/lista-compra/`, `lista/`, `item/`: "Data Down, Actions Up".
  Los comentarios ①–⑦ siguen la numeración de la transparencia "Actions up".

## Ejecutar

En StackBlitz: arrastrar la carpeta descomprimida a https://stackblitz.com
(o subir el proyecto a GitHub y abrir `stackblitz.com/github/usuario/repo`).

En local:

```
npm install
npm start
```
