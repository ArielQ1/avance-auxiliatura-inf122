# Flexbox: Guía Práctica

**Docente:** Ph.D. Marisol Tellez Ramírez  
**Auxiliar:** Ariel Quizaya Callisaya

## Introducción a Flexbox

Flexbox es un modelo de diseño unidimensional que se utiliza en CSS para alinear y distribuir elementos dentro de un contenedor. Flexbox facilita la creación de layouts flexibles y adaptables a diferentes tamaños de pantalla, sin la necesidad de usar flotar o posicionamiento complicado.

## Características Principales

1. **Contenedor Flex:** Es el elemento padre que tiene la propiedad `display: flex;`. Los hijos dentro de este contenedor se comportan como elementos flexibles.
2. **Eje Principal y Eje Secundario:** Flexbox organiza los elementos en dos ejes:
   - El **eje principal** (main axis) es el eje en el que los elementos flex se distribuyen.
   - El **eje secundario** (cross axis) es perpendicular al eje principal.
3. **Propiedades del Contenedor Flex:**
   - `flex-direction`: Define la dirección de los elementos hijos
        - row 
            ![Ejemplo-row](https://github.com/ArielQ1/avance-auxiliatura-inf122/blob/main/02-clase-10-09(flexbox)/imagenes/row.PNG)
            ```
            <div class="flex-container">
                <div class="flex-item">1</div>
                <div class="flex-item">2</div>
                <div class="flex-item">3</div>
                <div class="flex-item">4</div>
                <div class="flex-item">5</div>
            </div>
      
            <style>
                .flex-container {
                    display: flex;
                    flex-direction: row;
                }
                .flex-item {
                  width: 100px;
                  height: 100px;
                  background-color: lightblue;
                  margin: 1px;
                }
            </style>
            ```
        - row-reverse
            ![Ejemplo-row-reverse](https://github.com/ArielQ1/avance-auxiliatura-inf122/blob/main/02-clase-10-09(flexbox)/imagenes/row-reverse.PNG)
            ```
            <div class="flex-container">
                <div class="flex-item">1</div>
                <div class="flex-item">2</div>
                <div class="flex-item">3</div>
                <div class="flex-item">4</div>
                <div class="flex-item">5</div>
            </div>
      
            <style>
                .flex-container {
                    display: flex;
                    flex-direction: row-reverse;
                }
                .flex-item {
                  width: 100px;
                  height: 100px;
                  background-color: lightblue;
                  margin: 1px;
                }
            </style>
            ```
        - column
            ![Ejemplo-column](https://github.com/ArielQ1/avance-auxiliatura-inf122/blob/main/02-clase-10-09(flexbox)/imagenes/column.PNG)
            ```
            <div class="flex-container">
                <div class="flex-item">1</div>
                <div class="flex-item">2</div>
                <div class="flex-item">3</div>
                <div class="flex-item">4</div>
                <div class="flex-item">5</div>
            </div>
      
            <style>
                .flex-container {
                    display: flex;
                    flex-direction: column;
                }
                .flex-item {
                  width: 100px;
                  height: 100px;
                  background-color: lightblue;
                  margin: 1px;
                }
            </style>
            ```
        - column-reverse
            ![Ejemplo-column-reverse](https://github.com/ArielQ1/avance-auxiliatura-inf122/blob/main/02-clase-10-09(flexbox)/imagenes/column-reverse.PNG)
            ```
            <div class="flex-container">
                <div class="flex-item">1</div>
                <div class="flex-item">2</div>
                <div class="flex-item">3</div>
                <div class="flex-item">4</div>
                <div class="flex-item">5</div>
            </div>
      
            <style>
                .flex-container {
                    display: flex;
                    flex-direction: column-reverse;
                }
                .flex-item {
                  width: 100px;
                  height: 100px;
                  background-color: lightblue;
                  margin: 1px;
                }
            </style>
            ```
            
   - `justify-content`: Alinea los elementos a lo largo del eje principal (start, center, space-between, etc.).
   - `align-items`: Alinea los elementos a lo largo del eje secundario.
   - `flex-wrap`: Permite que los elementos se envuelvan en varias líneas si es necesario.
4. **Propiedades de los Elementos Flexibles (hijos):**
   - `flex-grow`: Controla cuánto crece un elemento en relación con los demás.
   - `flex-shrink`: Determina cuánto puede reducirse el tamaño de un elemento.
   - `flex-basis`: Define el tamaño base de un elemento antes de aplicar el crecimiento o encogimiento.
   - `align-self`: Permite modificar el alineamiento de un elemento individual dentro del contenedor.


## Ventajas de Flexbox

- Facilita la creación de layouts responsivos.
- Evita el uso excesivo de floats y posicionamiento.
- Mejor manejo del espacio disponible dentro del contenedor.
- Alineación más precisa y controlada de los elementos.

---

Espero que este README te sea útil para repasar y entender el manejo de `flexbox` en CSS. Si tienes alguna pregunta o necesitas más detalles, no dudes en preguntar en el grupo de Telegram de Auxiliatura.
