import { service } from "./service.js";


//editando producto
const formulario = document.querySelector('[data-form-editar]');

const obtenerInformacion = () => {

    const ur = new URL(window.location);
    const id = ur.searchParams.get("id");


    if (id == null) {
        window.location.href = "/index.html";
    }

    const url = document.querySelector('[data-url]');
    const categoria = document.querySelector('[data-categoria]');
    const nombreProducto = document.querySelector('[data-nombre]');
    const costo = document.querySelector('[data-costo]');
    const descripcion = document.querySelector('[data-descripcion]');


    service.detalleProducto(id).then((perfil) => {

        url.value = perfil.url;
        categoria.value = perfil.categoria;
        nombreProducto.value = perfil.nombreProducto;
        costo.value = perfil.costo;
        descripcion.value = perfil.descripcion;


    });


};

obtenerInformacion();