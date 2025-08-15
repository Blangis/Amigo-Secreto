// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let lista = [];
let amigo = document.getElementById("amigo");
let listado = document.querySelector(".name-list");
let resultado = document.getElementById("resultado");
let sorteado = document.createElement("li");
let btn_sorteo = document.querySelector(".button-draw");
let restartBtn = document.getElementById("button-restart");

function agregarAmigo() {
  let nombre = amigo.value;
  if (nombre) {
    lista.push(nombre);
    mostrarLista();
    amigo.value = "";
  } else {
    alert("Por favor, inserte un nombre.");
  }
}

function mostrarLista() {
  listado.innerHTML = "";
  for (let i = 0; i < lista.length; i++) {
    let li = document.createElement("li");
    li.textContent = lista[i];
    listado.append(li);
  }
}

function sortearAmigo() {
  if (lista.length > 0) {
    let numeroRandom = Math.floor(Math.random() * lista.length);
    console.log(numeroRandom);
    listado.innerHTML = "";
    mostrarResultado(`El nombre sorteado es: ${lista[numeroRandom]}`);
  } else {
    mostrarResultado("No hay nombres por sortear", 2000);
  }
}

function mostrarResultado(mensaje, tiempo = 0) {
  sorteado.textContent = mensaje;
  resultado.append(sorteado);

  if (tiempo > 0) {
    setTimeout(() => {
      sorteado.textContent = "";
    }, tiempo);
  }
}

function restablecer() {
  console.log("Clickeo restablecer");
  lista = [];
  listado.innerHTML = "";
  mostrarResultado("");
}
