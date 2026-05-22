const formulario = document.getElementById("formulario");
const tabla = document.getElementById("tablaDatos");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    let correo = document.getElementById("correo").value;

    tabla.innerHTML += `
        <tr>
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${edad}</td>
            <td>${correo}</td>
        </tr>
    `;

    formulario.reset();
});
