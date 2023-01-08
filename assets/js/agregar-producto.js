import { service } from "./service.js";

const formulario = document.querySelector('[data-form-agregar]');

//agregando producto
formulario.addEventListener('submit', (evento) => {

    evento.preventDefault();

    const url = document.querySelector('[data-url]').value;
    const categoria = document.querySelector('[data-categoria]').value;
    const nombreProducto = document.querySelector('[data-nombre]').value;
    const costo = document.querySelector('[data-costo]').value;
    const descripcion = document.querySelector('[data-descripcion]').value;


    service.crearProducto(url, categoria, nombreProducto, costo, descripcion).then(() => {
        window.location.href = 'administracion.html';
    }).catch(err => console.log(err))
});