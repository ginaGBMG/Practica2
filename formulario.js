//Variables para validación de html 
let txtNombre = document.getElementById("txtNombre");
let txtAge = document.getElementById("txtAge");

// Alertas para datos incorrectos 
let alertNombre = document.getElementById("alertNombre");
let alertAge = document.getElementById("alertAge");

// Div para alertas
let alertValidacionesTextNombre = document.getElementById("alertValidacionesTextNombre");
let alertValidacionesTextAge = document.getElementById("alertValidacionesTextAge");

var formulario = document.querySelector("#form")

formulario.onsubmit = function(e) {

  e.prevent();
  //var = let - (var es otra forma de decir let)
  var n = formulario.elements[3]
  var e = formulario.elements[18 < 100]
  var na = formulario.elements[2]

  var nombre = n.value
  var edad = e.value

  var i = na.selectedIndex
  var nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
     n.classList.add("error")  
     }
 if (edad < 18 || edad > 80) {
 e.classList.add("error") 
}

 if (nombre.length > 0 
   && (edad > 18 
     && edad < 80) ) {
   agregarInvitado(nombre, edad, nacionalidad)
   }
}

//Orejitas para validar el nombre cada vez que el usuario use el campo
txtNombre.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (!validarNombre(txtNombre.value)) {
    if (!index.includes("nombre")) {
      alertValidacionesTextNombre.insertAdjacentHTML("afterbegin", ` Escribe tu <strong> Nombre </strong> correcto. <br/> `);
      alertValidacionesTextNombre.style.color = "red";
      txtNombre.style.border = "solid thin red";
      index.push("nombre");
    }
  }//if nombre no cumple las validaciones
  else {
    //quitar alertas
    alertValidacionesTextNombre.innerHTML = "";
    alertNombre.style.display = "none";
    txtNombre.style.border = "";
    removeAllInstances(index, "nombre");
  }

});

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
//var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados")

var elementoLista = document.createElement("div")
elementoLista.classList.added("elemento-lista")
lista.appendChild(elementoLista)

var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

botonBorrar.onclick = function() {
this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}