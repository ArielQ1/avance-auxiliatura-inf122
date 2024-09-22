# Media Queries en CSS: Guía Práctica

**Docente:** Ph.D. Marisol Tellez Ramírez  
**Auxiliar:** Univ. Ariel Quizaya Callisaya

## Introducción a Media Queries

Las media queries en CSS son una técnica para aplicar estilos específicos dependiendo de características del dispositivo o la ventana del navegador, como el ancho, la altura, la orientación y la resolución de la pantalla. Esto permite crear sitios web responsivos, que se adapten a diferentes tamaños y tipos de pantalla, proporcionando una mejor experiencia de usuario en dispositivos móviles, tabletas y pantallas de escritorio.

## Propiedades Principales de Media Queries

### 1. `@media`
La regla `@media` es la base de las media queries en CSS. Esta permite definir una condición que, si se cumple, aplicará un bloque de reglas CSS específico.  
Ejemplo básico:
```css
@media (max-width: 600px) {
    body {
        background-color: lightblue;
    }
}
```

![media basica](https://github.com/ArielQ1/avance-auxiliatura-inf122/blob/main/04-clase-media-queries/clase/img/ejemplo-media.gif)

En este ejemplo, si la ventana del navegador tiene un ancho de 600 píxeles o menos, el fondo del sitio cambiará a color azul claro.

### 2. `min-width` y `max-width`
- **min-width**: Aplica los estilos cuando el ancho de la ventana es mayor o igual al valor especificado.
- **max-width**: Aplica los estilos cuando el ancho de la ventana es menor o igual al valor especificado.  
Ejemplo:
```css
@media (min-width: 768px) {
    body {
        font-size: 16px;
    }
}
@media (max-width: 767px) {
    body {
        font-size: 14px;
    }
}
```
En este ejemplo, se ajusta el tamaño de la fuente dependiendo del ancho de la ventana.

### 3. `min-height` y `max-height`
- **min-height**: Aplica los estilos cuando la altura de la ventana es mayor o igual al valor especificado.
- **max-height**: Aplica los estilos cuando la altura de la ventana es menor o igual al valor especificado.  
Ejemplo:
```css
@media (min-height: 500px) {
    .sidebar {
        display: block;
    }
}
@media (max-height: 499px) {
    .sidebar {
        display: none;
    }
}
```
Esto oculta la barra lateral cuando la altura de la ventana es menor a 500 píxeles.

### 4. `orientation`
La propiedad `orientation` permite aplicar estilos basados en la orientación de la pantalla: vertical (portrait) u horizontal (landscape).  

![ejemplo portrait y landscape](https://github.com/ArielQ1/avance-auxiliatura-inf122/blob/main/04-clase-media-queries/clase/img/portrait-landscape.PNG)

Ejemplo:
```css
@media (orientation: landscape) {
    body {
        background-color: lightgreen;
    }
}
```
En este ejemplo, el fondo será verde si el dispositivo está en modo horizontal.

### 5. `resolution`
La propiedad `resolution` permite aplicar estilos basados en la densidad de píxeles de la pantalla. Se mide en "dppx" (dots per pixel) o "dpi" (dots per inch).  
Ejemplo:
```css
@media (min-resolution: 2dppx) {
    img {
        width: 100%;
    }
}
```
Este ejemplo ajusta las imágenes a un tamaño más adecuado para pantallas de alta resolución (como las pantallas Retina).

### 6. `aspect-ratio`
La propiedad `aspect-ratio` aplica estilos basados en la relación de aspecto de la ventana o pantalla.  
Ejemplo:
```css
@media (min-aspect-ratio: 16/9) {
    video {
        width: 100%;
    }
}
```
Aquí, el video se ajusta cuando la relación de aspecto es mayor o igual a 16:9.

### 7. Combinación de Condiciones
Las media queries permiten combinar múltiples condiciones utilizando los operadores lógicos `and`, `not`, y `only`.  
Ejemplo:
```css
@media (min-width: 768px) and (orientation: landscape) {
    body {
        background-color: orange;
    }
}
```
En este caso, el fondo será naranja si la ventana tiene un ancho mínimo de 768 píxeles y está en modo horizontal.

## Ejemplo Completo de Media Queries

```css
/* Estilos base para todos los dispositivos */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

/* Media query para dispositivos móviles (max-width: 600px) */
@media (max-width: 600px) {
    body {
        background-color: lightblue;
        font-size: 14px;
    }
}

/* Media query para tablets y dispositivos de mediano tamaño (min-width: 601px) */
@media (min-width: 601px) and (max-width: 1024px) {
    body {
        background-color: lightgreen;
        font-size: 16px;
    }
}

/* Media query para pantallas grandes (min-width: 1025px) */
@media (min-width: 1025px) {
    body {
        background-color: lightgray;
        font-size: 18px;
    }
}
```

## Visualización de Media Queries

![Media Queries Ejemplo](https://github.com/ArielQ1/avance-auxiliatura-inf122/blob/main/04-clase-media-queries/clase/img/ultimo-ejemplo.gif)

## Ventajas de Usar Media Queries

- Facilita la creación de sitios web responsivos.
- Permite adaptar el diseño a diferentes tipos de dispositivos (móviles, tablets, pantallas de escritorio).
- Mejora la experiencia del usuario al ajustarse a diferentes tamaños de pantalla.

## Recursos Adicionales

- [Guía de Media Queries (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)
- [Guía Completa de Media Queries (CSS Tricks)](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
-  [Guía de Media Queries (lenguajecss)](https://lenguajecss.com/css/responsive-web-design/media-queries/)