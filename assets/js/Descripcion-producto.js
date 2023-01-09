import { service } from "./service.js";



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

        img.src = perfil.url;
        nombreProducto.value = perfil.nombreProducto;
        descripcion.value = perfil.descripcion;


    });


};

obtenerInformacion();