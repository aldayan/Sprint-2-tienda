import { service } from "./service.js";


//editando producto
const formulario = document.querySelector('[data-form-descripcion]');



const crearNueva = (url) => {


    const tarjeta = document.createElement('div');


    const conten = `
    <div class="caja-motos" style="background-image:url(${url}); background-position: center; ">`

    tarjeta.innerHTML = conten;

    return tarjeta;
};


const obtenerInformacion = () => {

    const ur = new URL(window.location);
    const id = ur.searchParams.get("id");


    if (id == null) {
        window.location.href = "/index.html";
    }


    const nombreProducto = document.querySelector('[data-nombre]');
    const descripcion = document.querySelector('[data-descripcion]');


    service.detalleProducto(id).then((perfil) => {


        nombreProducto.value = perfil.nombreProducto;
        descripcion.value = perfil.descripcion;


    });


};

obtenerInformacion();


formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const ur = new URL(window.location);
    const id = ur.searchParams.get("id");

    const nombreProducto = document.querySelector('[data-nombre]').value;
    const descripcion = document.querySelector('[data-descripcion]').value;


    service.actualizarProducto(url, nombreProducto, descripcion, id).then(() => {
        window.location.href = '/administracion/administracion.html';
    })
});