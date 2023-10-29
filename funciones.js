//validacion de formulario

/**
 * La función event realiza las validaciones del formulario de contacto al presionar el botón "enviar"
 * @param {"formularioContacto"} - es el id designado al formulario completo
 * @param {"submit"} - es el evento que se desea escuchar (envío del form)
 * @param {function escuchar(event) { }} - 
 * @const {expReg} - una constante creada con las expresiones regulares que utilizamos para las validaciones
 * @var {nCompleto, tel, mail, city} - son los campos del formulario que obtenemos con los id designados en el html
 * se realizan las validaciones por medio de la estructura de control if
 * se muestra un alert en caso que la validación falle
 * event.preventDefault impide el envío del formulario si la validación falla
 * si la validación no falla se prosigue al siguiente campo
 * en caso que el formulario sea validdado por completo, se procede al envío
 */

document.getElementById("formularioContacto").addEventListener("submit", function escuchar(event) {

    const expReg = {
        nombreCompleto: /^[a-zA-Z\s]+$/,
        email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/,
        telefono: /^\d$/,
        ciudad: /^[a-zA-Z\s]+$/
    }
    
    var nCompleto = document.getElementById('nombreCompleto').value;
    var tel = document.getElementById('telefono').value;
    var mail = document.getElementById('email').value;
    var city = document.getElementById('ciudad').value;

    if (document.getElementById("seleccion").value === "--None--") {
        alert("Por favor, seleccione una situación impositiva.");
        event.preventDefault(); 
        return;
    }

    if (!expReg.nombreCompleto.test(nCompleto)) {
        alert("Por favor, ingrese su nombre completo utilizando solo letras y espacios");
        event.preventDefault();
        return;
    }

    if (!expReg.telefono.test(tel)) {
        alert("Por favor, ingrese solo números para su telefono");
        event.preventDefault();
        return;
    }

    if (!expReg.email.test(mail)) {
        alert("Por favor, ingrese un email válido");
        event.preventDefault();
        return;
    }

    if (!expReg.ciudad.test(city)) {
        alert("Por favor, ingrese su ciudad utilizando solo letras y espacios");
        event.preventDefault();
        return;
    }
   
});

