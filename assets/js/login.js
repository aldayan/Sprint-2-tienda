/*import { service } from "./service.js";

const formulario = document.querySelector('[data-form]');

//registrando cliente
formulario.addEventListener('submit', (evento) => {

    evento.preventDefault();

    const email = document.querySelector('[data-email]').value;
    const contraseña = document.querySelector('[data-contraseña]').value;

    var A = "aldayan";
    var C = 123;
    if (email.value == A && contraseña.value == C) {

        window.location = 'administracion/administracion.html';
    }



    service.crearSesion(email, contraseña).then(() => {
        window.location.href = '/administracion/administracion.html'
    }).catch(err => console.log(err))

}); */


function ir() {

    const email = document.querySelector('[data-email]').value;
    const contraseña = document.querySelector('[data-contraseña]').value;

    var A = "aldayan";
    var C = 123;

    if (email == A && contraseña == C) {

        window.location.href = '../administracion/administracion.html'

    } else {

        alert("usuario denegado")

    }
}