import { service } from "./service.js";



//editando producto
const formulario = document.querySelector('[data-form-descripcion]');

const obtenerInformacion = () => {

    const ur = new URL(window.location);
    const id = ur.searchParams.get("id");


    if (id == null) {
        window.location.href = "/index.html";
    }

    const img = document.querySelector('[data-img-descripcion]');
    const nombreProducto = document.querySelector('[data-nombre]');
    const descripcion = document.querySelector('[data-descripcion]');


    service.detalleProducto(id).then((perfil) => {

        img.value = perfil.url;
        nombreProducto.value = perfil.nombreProducto;
        descripcion.value = perfil.descripcion;


    });


};

obtenerInformacion();


formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const ur = new URL(window.location);
    const id = ur.searchParams.get("id");

    const img = document.querySelector('[data-img-descripcion]').value;
    const nombreProducto = document.querySelector('[data-nombre]').value;
    const descripcion = document.querySelector('[data-descripcion]').value;


    service.actualizarProducto(img, nombreProducto, descripcion, id).then(() => {
        window.location.href = '/administracion/administracion.html';
    })
});