// IMPORTAR FIREBASE
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getDatabase,
ref,
push
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";


// CONFIGURACIÓN FIREBASE
const firebaseConfig = {

apiKey: "TU_APIKEY",

authDomain: "TU_AUTHDOMAIN",

databaseURL: "TU_DATABASE_URL",

projectId: "TU_PROJECTID",

storageBucket: "TU_STORAGE",

messagingSenderId: "TU_SENDER",

appId: "TU_APPID"

};


// INICIALIZAR FIREBASE
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);


// ELEMENTOS HTML
const formulario = document.getElementById("formulario");

const tablaDatos = document.getElementById("tablaDatos");


// EVENTO FORMULARIO
formulario.addEventListener("submit", function(e){

e.preventDefault();

let nombre =
document.getElementById("nombre").value;

let apellido =
document.getElementById("apellido").value;

let edad =
document.getElementById("edad").value;

let correo =
document.getElementById("correo").value;


// GUARDAR EN FIREBASE
push(ref(db, "usuarios"), {

nombre: nombre,
apellido: apellido,
edad: edad,
correo: correo

});


// MOSTRAR EN TABLA
tablaDatos.innerHTML += `

<tr>

<td>${nombre}</td>

<td>${apellido}</td>

<td>${edad}</td>

<td>${correo}</td>

</tr>

`;


// LIMPIAR FORMULARIO
formulario.reset();

alert("Datos guardados correctamente");

});
