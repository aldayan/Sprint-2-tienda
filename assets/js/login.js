import { service } from "./service.js";

const formulario = document.querySelector('[data-form]');

//registrando cliente
formulario.addEventListener('submit', (evento) => {

    evento.preventDefault();

    const email = document.querySelector('[data-email]').value;
    const contraseña = document.querySelector('[data-contraseña]').value;


    service.crearSesion(email, contraseña).then(() => {
        window.location.href = '/administracion/administracion.html'
    }).catch(err => console.log(err))
});