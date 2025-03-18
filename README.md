# Sorteo de AMIGO SECRETO 
Curso de Desarrollo Web con Oracle Next Education y Alura Latam (G8)

Este proyecto te permite agregar los nombres de tus amigos, hacer un sorteo de forma aleatoria y ver los resultados en la pantalla. Es ideal para actividades como "Santa Secreto" o intercambios de regalos, donde el sorteo siempre debe de ser justo y aleatorio.

## Objetivo General

El objetivo de esta aplicación es permitir que los usuarios agreguen X cantidad de nombres, se realicen un sorteo aleatorio y vean los resultados de forma interactiva y dinámica. 

## Características Claves

- **Agregar Amigos:** Los usuarios pueden ingresar los nombres de sus amigos en un campo de texto.
- **Interfaz Interactiva:** Muestra tanto la lista de amigos como los resultados del sorteo de manera clara.
- **Botones Funcionales:** Hay botones para agregar amigos y para iniciar el sorteo.
- **Sorteo Aleatorio:** Los amigos se sortean de forma aleatoria, asegurando que cada uno quede asignado a otro.
- **Deshabilitación Automática de Botones:** El botón de sorteo solo se habilita si hay al menos dos amigos en la lista.
- **Mensaje Final:** Al terminar el sorteo, se muestra un mensaje con un toque divertido.

## Desglose de Funciones Principales

### 1. **`init()`**
   - **Descripción:** Inicializa los eventos de la aplicación. Configura los listeners para los botones de agregar amigo, sortear, y el evento de presionar "Enter" en el campo de texto.
   - **Propósito:** Prepara todo para que el usuario pueda interactuar con la aplicación de forma sencilla.

### 2. **`agregarNombre()`**
   - **Descripción:** Toma el nombre ingresado en el campo de texto, lo agrega a la lista si no está vacío y no se repite, y actualiza la lista en la interfaz.
   - **Propósito:** Permite al usuario agregar amigos a la lista para el sorteo.

### 3. **`actualizarLista()`**
   - **Descripción:** Refresca la lista de amigos en el DOM, mostrándola actualizada con los nuevos nombres agregados.
   - **Propósito:** Asegura que la interfaz siempre esté sincronizada con la lista de amigos.

### 4. **`actualizarBotonSortear()`**
   - **Descripción:** Habilita o deshabilita el botón de sorteo dependiendo de si hay al menos dos amigos en la lista.
   - **Propósito:** Evita que el sorteo se haga si no hay suficientes amigos.

### 5. **`iniciarSorteo()`**
   - **Descripción:** Comienza el sorteo solo si hay amigos en la lista. Llama a `sortearTodos()` para iniciar el proceso de sorteo.
   - **Propósito:** Asegura que el sorteo solo inicie si es posible realizarlo.

### 6. **`sortearTodos()`**
   - **Descripción:** Realiza el sorteo de forma recursiva, seleccionando un amigo aleatoriamente cada 5 segundos hasta que todos los amigos hayan sido sorteados.
   - **Propósito:** Realiza el sorteo de todos los amigos de forma continua.

### 7. **`sortearAmigo()`**
   - **Descripción:** Selecciona aleatoriamente un amigo, lo elimina de la lista y lo agrega a los resultados con un estilo de texto tachado.
   - **Propósito:** Asigna de forma aleatoria un amigo y marca su nombre como sorteado.

### 8. **`mostrarMensajeFinal()`**
   - **Descripción:** Muestra un mensaje final de "buena suerte" una vez que todos los amigos hayan sido sorteados.
   - **Propósito:** Finaliza el sorteo de manera divertida y optimista.

## Variables y Constantes Claves

- **`this.nombres`**
  - **Descripción:** Array que contiene los nombres de los amigos que participarán en el sorteo.
  - **Tipo:** `Array`
  - **Propósito:** Guardar los nombres de los amigos que el usuario agrega.

- **`this.inputNombre`**
  - **Descripción:** Referencia al campo de texto donde el usuario ingresa el nombre de un amigo.
  - **Tipo:** `HTMLElement`
  - **Propósito:** Permite que el usuario ingrese nombres de amigos en la interfaz.

- **`this.listaAmigos`**
  - **Descripción:** Referencia al elemento `ul` en el DOM donde se muestra la lista de amigos.
  - **Tipo:** `HTMLElement`
  - **Propósito:** Mostrar la lista actualizada de amigos en la interfaz.

- **`this.resultado`**
  - **Descripción:** Referencia al contenedor donde se muestran los resultados del sorteo.
  - **Tipo:** `HTMLElement`
  - **Propósito:** Mostrar los amigos sorteados con un estilo especial.

- **`this.botonSortear`**
  - **Descripción:** Referencia al botón que inicia el sorteo.
  - **Tipo:** `HTMLElement`
  - **Propósito:** Controlar el inicio del sorteo.

- **`this.botonAgregar`**
  - **Descripción:** Referencia al botón que agrega un nuevo nombre a la lista.
  - **Tipo:** `HTMLElement`
  - **Propósito:** Permitir agregar amigos a la lista para el sorteo.

## ¿Cómo usarlo?

1. **Agregar Amigos:** Ingresa los nombres de tus amigos en el campo de texto y presiona "Agregar" o la tecla "Enter".
2. **Iniciar el Sorteo:** Cuando haya al menos dos amigos en la lista, presiona el botón de "Sortear" para comenzar.
3. **Ver los Resultados:** Los amigos sorteados aparecerán con un estilo tachado en la lista de resultados.
4. **Mensaje Final:** Cuando todos los amigos hayan sido sorteados, se mostrará un mensaje final para concluir el sorteo.

## Tecnologías Usadas

- **HTML:** Para la estructura básica de la página.
- **CSS:** Para los estilos (no incluido en el código, pero necesario para la presentación).
- **JavaScript:** Para la lógica de la aplicación y la interacción con el DOM.

## Imagenes de referencia:
Pantalla de Inicio
<img width="1552" alt="1 Pantalla de Inicio_HESC" src="https://github.com/user-attachments/assets/4f8432c1-1bfc-4834-a41d-f9c530f67dff" />
Primera Parte del sorteo
<img width="1552" alt="2 Añadir nombres_HESC" src="https://github.com/user-attachments/assets/3c5bd897-6e0c-43ad-a65c-1d1634e7040a" />
Segunda Parte del sorteo
<img width="1552" alt="3 Selección Aleatoria de nombres_HESC" src="https://github.com/user-attachments/assets/601c9fb8-854c-418f-af13-c77d2b5201f7" />
Pantalla Final y mensaje
<img width="1552" alt="4 Pantalla Final_HESC" src="https://github.com/user-attachments/assets/e15f6865-14b3-4b79-9425-04a4ed417acb" />

---

Este archivo `README.md` está diseñado para ser claro y accesible, describiendo de manera detallada y amigable el funcionamiento de la aplicación y su código. ¡Espero que te
resulte útil!

