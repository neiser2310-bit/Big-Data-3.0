const formulario = document.getElementById("formulario");

const tablaDatos = document.getElementById("tablaDatos");


formulario.addEventListener("submit", function(e){

    e.preventDefault();

    let nombre = document.getElementById("nombre").value;

    let apellido = document.getElementById("apellido").value;

    let edad = document.getElementById("edad").value;

    let lugar = document.getElementById("Lugar de Procedencia").value;


    tablaDatos.innerHTML += `

        <tr>

            <td>${nombre}</td>

            <td>${apellido}</td>

            <td>${edad}</td>

            <td>${correo}</td>

        </tr>

    `;


    formulario.reset();

});
