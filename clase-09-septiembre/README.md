# Repaso de CSS y HTML: Manejo de `position`

## Introducción

En este documento repasaremos la propiedad `position` en CSS, fundamental para controlar la colocación de elementos en una página web. Veremos los diferentes valores que puede tomar y cómo afectan la disposición de los elementos.

## Propiedad `position`

La propiedad `position` se utiliza para especificar el método de posicionamiento de un elemento en el flujo del documento. Los valores principales son:

### 1. `static`

- **Descripción:** Este es el valor por defecto. Los elementos con `position: static` se colocan de acuerdo con el flujo normal del documento. Las propiedades `top`, `right`, `bottom` y `left` no tienen efecto.

### 2. `relative`

- **Descripción:** Un elemento con `position: relative` se posiciona en relación a su ubicación original en el flujo del documento. Puedes moverlo utilizando las propiedades `top`, `right`, `bottom` y `left`.

### 3. `absolute`

- **Descripción:** Un elemento con `position: absolute` se posiciona en relación a su contenedor más cercano que tenga una posición distinta de `static`. Si no hay tal contenedor, se posiciona en relación al `<html>`. Se mueve usando `top`, `right`, `bottom` y `left`.


### 4. `fixed`

- **Descripción:** Un elemento con `position: fixed` se posiciona en relación a la ventana del navegador. Permanecerá en la misma posición incluso cuando el usuario se desplace por la página. Se mueve usando `top`, `right`, `bottom` y `left`.



### 5. `sticky`

- **Descripción:** Un elemento con `position: sticky` se comporta como `relative` hasta que se desplaza a una posición definida, momento en el cual se comporta como `fixed`. Esto es útil para elementos que deben permanecer visibles en una sección mientras el usuario se desplaza.


## Ejemplo

A continuación se muestra un ejemplo que ilustra los diferentes valores de `position`:

![Ejemplo de Posicionamiento](https://internetingishard.netlify.app/css-positioning-schemes-790d5b.3d581d20.png)

## Conclusión

La propiedad `position` en CSS es esencial para controlar la disposición de los elementos en una página web. Comprender cómo funciona cada valor te ayudará a crear diseños más efectivos y adaptables. Experimenta con estos valores para ver cómo afectan la disposición de tus elementos.

---

Espero que este README te sea útil para repasar y entender el manejo de la propiedad `position` en CSS. Si tienes alguna pregunta o necesitas más detalles, no dudes en preguntar en el grupo de Telegram de Auxiliatura.
