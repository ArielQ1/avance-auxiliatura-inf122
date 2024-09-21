# CSS Grid: Guía Práctica

**Docente:** Ph.D. Marisol Tellez Ramírez  
**Auxiliar:** Univ. Ariel Quizaya Callisaya

## Introducción a CSS Grid

CSS Grid es un sistema de diseño bidimensional que permite crear layouts complejos de manera sencilla y flexible. A diferencia de Flexbox, que trabaja principalmente en un eje, CSS Grid te permite trabajar tanto en filas como en columnas, lo que lo hace ideal para estructuras de diseño más avanzadas.

## Propiedades Principales de CSS Grid

### Propiedades del Contenedor Grid

1. **display: grid**  
   Esta propiedad convierte un elemento en un contenedor de grid. Dentro de este contenedor, los hijos se colocan en un sistema de filas y columnas.
    Ejemplo:
    ```html
    <section class="container">
      <header class="centro">Nombre del Sitio web</header>
      <main class="centro">Menu</main>
      <section class="centro">Area de Contenido</section>
      <aside class="centro">Anuncio</aside>
      <footer class="centro">Pie de Página</footer>
    </section>
    ```
    ```css
    *{
      margin: 0;
    }
    .container {
      display: grid;
      height: 100vh;
      gap: 2px;
    }
    section * {
      background: rgb(29, 211, 211);
    }
    ```
    
    ![ejemplo-grid](https://github.com/ArielQ1/avance-auxiliatura-inf122/blob/main/03-clase-17-09(grid)/clase/img/ejemplo-grid.PNG)


2. **grid-template-columns / grid-template-rows**  
   Estas propiedades definen cuántas columnas y filas tiene el grid, y el tamaño de cada una.  
   Ejemplo:
   ```css
   .container {
       display: grid;
       height: 100vh;
       grid-template-columns: 100px 200px auto;
       grid-template-rows: 50px 100px;
   }
   ```

    ![ejemplo-template-column-row](https://github.com/ArielQ1/avance-auxiliatura-inf122/blob/main/03-clase-17-09(grid)/clase/img/ejemplo-template-rc.PNG)

3. **grid-gap / row-gap / column-gap**  
   Define el espacio entre filas y columnas. `grid-gap` es un shorthand para `row-gap` y `column-gap`.  
   Ejemplo:
   ```css
    .container {
      display: grid;
      height: 100vh;
      grid-template-columns: 100px 200px auto;
      grid-template-rows: 50px 100px;
      row-gap: 10px;
      column-gap: 25px;
    }
   ```

    ![ejemplo-gap](https://github.com/ArielQ1/avance-auxiliatura-inf122/blob/main/03-clase-17-09(grid)/clase/img/ejemplo-gap.PNG)

4. **grid-template-areas**  
   Permite asignar nombres a diferentes áreas del grid para crear layouts más semánticos.  
   Ejemplo:
   ```css
    *{
      margin: 0;
    }
    .container {
      display: grid;
      height: 100vh;
      grid-template-columns: 100px 200px auto;
      grid-template-rows: 50px 100px 50px;
      row-gap: 10px;
      column-gap: 25px;
      grid-template-areas:
               "header header header"
               "sidebar content content"
               "aside footer footer";
    }
   ```

    ![ejemplo-areas](https://github.com/ArielQ1/avance-auxiliatura-inf122/blob/main/03-clase-17-09(grid)/clase/img/ejemplo-areas.PNG)

5. **grid-auto-rows / grid-auto-columns**  
   Define el tamaño de las filas o columnas que se crean automáticamente cuando se añaden más elementos de los esperados.

6. **justify-items / align-items**  
   Estas propiedades alinean los elementos dentro de sus celdas, tanto en el eje horizontal (`justify-items`) como en el eje vertical (`align-items`).  
   Ejemplo:
   ```css
    .container {
      display: grid;
      height: 100vh;
      grid-template-columns: 100px 200px auto;
      grid-template-rows: 50px 100px 50px;
      row-gap: 10px;
      column-gap: 25px;
      justify-items: flex-end;
      align-items: center;
    }
   ```

    ![ejemplo-items](https://github.com/ArielQ1/avance-auxiliatura-inf122/blob/main/03-clase-17-09(grid)/clase/img/ejemplo-items.PNG)

7. **justify-content / align-content**  
   Ajustan el espacio dentro del contenedor grid cuando el tamaño del grid es menor que el tamaño del contenedor, alineando todo el grid dentro del contenedor.
    Ejemplo:
    ```css
    .container {
      display: grid;
      height: 100vh;
      grid-template-columns: 100px 200px auto;
      grid-template-rows: 50px 100px 50px;
      row-gap: 10px;
      column-gap: 25px;
      justify-content: space-around;
      align-content: center;
    }
    ```

    ![ejemplo-content](https://github.com/ArielQ1/avance-auxiliatura-inf122/blob/main/03-clase-17-09(grid)/clase/img/ejemplo-contentrc.PNG)

### Propiedades de los Elementos Grid (Hijos)

1. **grid-column / grid-row**  
   Estas propiedades permiten que un elemento abarque varias filas o columnas.  
   Ejemplo:
   ```css
   .grid-item {
       grid-column: 1 / 3;
       grid-row: 2 / 4;
   }
   ```

2. **grid-area**  
   Define la posición de un elemento dentro de un área del grid, que previamente fue asignada con `grid-template-areas`.  
   Ejemplo:
   ```css
   .grid-item {
       grid-area: header;
   }
   ```

3. **justify-self / align-self**  
   Permiten alinear un elemento específico dentro de su celda, tanto horizontalmente (`justify-self`) como verticalmente (`align-self`).


## Ejemplo de CSS Grid

```html
<section class="container">
  <header class="centro">Nombre del Sitio web</header>
  <main class="centro">Menu</main>
  <section class="centro">Area de Contenido</section>
  <aside class="centro">Anuncio</aside>
  <footer class="centro">Pie de Página</footer>
</section>
```
```css
*{
  margin: 0;
}
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 4fr 1fr;
  height: 100vh;
  grid-template-areas:
  "nombre nombre nombre"
  "menu cont ads"
  "pie pie pie"
  ;
}
.centro {
  display: grid;
  align-items: center;
  justify-content: center;
}

.container header {
  background: #aca;
  grid-area: nombre;
}
.container main {
  background: #bcf;
  grid-area: menu;
}
.container section {
  background: #bbb;
  grid-area: cont;
  
}
.container aside {
  background: #8cc;
  grid-area: ads;
}
.container footer {
  background: #5dd;
  grid-area: pie;
}
```

## Visualización de CSS Grid

![CSS Grid Ejemplo](https://github.com/ArielQ1/avance-auxiliatura-inf122/blob/main/03-clase-17-09(grid)/clase/img/ejemplo1.PNG)

## Ventajas de CSS Grid

- Permite controlar tanto filas como columnas simultáneamente.
- Ideal para layouts complejos que requieren control preciso.
- Facilita la alineación y distribución de elementos en un layout bidimensional.

## Recursos Adicionales

- [Guía Completa de CSS Grid (CSS Tricks)](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Guía Completa de CSS Grid (lenguajecss)](https://lenguajecss.com/css/grid/que-es-grid/)
- [Documentación de MDN sobre CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

---

Espero que este README te sea útil para repasar y entender el manejo de `grid` en CSS. Si tienes alguna pregunta o necesitas más detalles, no dudes en preguntar en el grupo de Telegram de Auxiliatura 😎👌.
