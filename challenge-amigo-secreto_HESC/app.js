// Clase SorteoAmigos maneja la lógica del sorteo entre amigos
class SorteoAmigos {
  constructor() {
    // Inicializa las propiedades del objeto
    this.nombres = [];  // Lista de nombres de los amigos
    this.inputNombre = document.getElementById("amigo");  // Input donde se escribe el nombre
    this.listaAmigos = document.getElementById("listaAmigos");  // Elemento para mostrar la lista de amigos
    this.resultado = document.getElementById("resultado");  // Elemento para mostrar los resultados del sorteo
    this.botonSortear = document.querySelector(".button-draw");  // Botón para iniciar el sorteo
    this.botonAgregar = document.querySelector(".button-add");  // Botón para agregar un nuevo amigo

    this.botonSortear.disabled = true;  // Deshabilita el botón de sorteo si no hay suficientes amigos
    this.init();  // Inicializa los eventos
  }

  // Método que configura los eventos de los botones y el input
  init() {
    // Detecta cuando se presiona Enter en el campo de texto y agrega el nombre
    this.inputNombre.addEventListener("keypress", (event) => {
      if (event.key === "Enter") this.agregarNombre();
    });
    // Agrega un nombre al hacer clic en el botón de agregar
    this.botonAgregar.addEventListener("click", () => this.agregarNombre());
    // Inicia el sorteo cuando se hace clic en el botón de sortear
    this.botonSortear.addEventListener("click", () => this.iniciarSorteo());
  }

  // Método que agrega un nombre a la lista si no está vacío y no se repite
  agregarNombre = () => {
    const nombre = this.inputNombre.value.trim();  // Obtiene el nombre ingresado y lo limpia de espacios
    if (nombre && !this.nombres.includes(nombre)) {  // Si el nombre no está vacío y no se repite
      this.nombres.push(nombre);  // Lo agrega a la lista de nombres
      this.actualizarLista();  // Actualiza la lista mostrada
      this.inputNombre.value = "";  // Limpia el campo de texto
    }
    this.actualizarBotonSortear();  // Actualiza el estado del botón de sorteo
  };

  // Método que actualiza la lista de amigos mostrada en el DOM
  actualizarLista = () => {
    this.listaAmigos.innerHTML = "";  // Limpia la lista antes de actualizarla
    this.nombres.forEach((nombre) => {
      const li = document.createElement("li");  // Crea un nuevo elemento de lista
      li.textContent = nombre;  // Asigna el nombre al contenido del elemento
      this.listaAmigos.appendChild(li);  // Lo agrega a la lista en el DOM
    });
  };

  // Método que habilita o deshabilita el botón de sorteo dependiendo de la cantidad de amigos
  actualizarBotonSortear = () => {
    this.botonSortear.disabled = this.nombres.length <= 1;  // Si hay un solo amigo o menos, deshabilita el sorteo
  };

  // Método que inicia el sorteo si hay nombres disponibles
  iniciarSorteo = () => {
    if (!this.nombres.length) return;  // Si no hay nombres, no hace nada
    this.sortearTodos();  // Inicia el proceso de sorteo
  };

  // Método recursivo que realiza el sorteo de todos los amigos
  sortearTodos = () => {
    if (this.nombres.length === 0) {  // Si ya no quedan nombres
      this.mostrarMensajeFinal();  // Muestra el mensaje final
      return;
    }
    setTimeout(() => {
      this.sortearAmigo();  // Realiza el sorteo de un amigo
      this.sortearTodos();  // Llama a la función nuevamente para continuar con el sorteo
    }, 5000);  // Espera 5 segundos antes de realizar otro sorteo
  };

  // Método que sortea un amigo aleatoriamente y lo marca como "ya sorteado"
  sortearAmigo = () => {
    const indiceAleatorio = Math.floor(Math.random() * this.nombres.length);  // Selecciona un índice aleatorio
    const nombreSeleccionado = this.nombres.splice(indiceAleatorio, 1)[0];  // Elimina el amigo de la lista y lo obtiene

    const li = document.createElement("li");  // Crea un nuevo elemento de lista
    li.textContent = nombreSeleccionado;  // Asigna el nombre sorteado al elemento
    li.style.textDecoration = "line-through";  // Marca el nombre como "sorteado" con un tachado
    this.resultado.appendChild(li);  // Agrega el nombre al listado de resultados

    this.actualizarLista();  // Actualiza la lista de amigos disponibles
    this.actualizarBotonSortear();  // Actualiza el estado del botón de sorteo
  };

  // Método que muestra un mensaje final cuando el sorteo ha terminado
  mostrarMensajeFinal = () => {
    setTimeout(() => {
      alert("¡Buena Suerte! 😎🤘🏼 Y que gane el mejor regalo");  // Muestra un mensaje de buena suerte
    }, 500);  // Muestra el mensaje medio segundo después de finalizar el sorteo
  };
}

// Inicializa la funcionalidad del sorteo cuando el DOM está completamente cargado
document.addEventListener("DOMContentLoaded", () => new SorteoAmigos());
