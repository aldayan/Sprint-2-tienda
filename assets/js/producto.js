import { service } from "./service.js";


//creando tarjeta para administracion 
const crearNuevaTarjeta = (url, nombreProducto, costo, id) => {


    const linea = document.createElement('div');


    const contenido = `
    <div class="caja-motos articulo" style="background-image:url(${url}); background-position: center; ">
    <div class="caja-contenido">
        <h3>${nombreProducto}</h3>
        <p class="costo">$${costo}</p>
        <hr>
        <div class="icons">
            <a href="editar.html?id=${id}" class="editar"><i class="fas fa-pen"></i></a>
            <i class="fas fa-trash-alt trashIcon icon" id="${id}" data-btn></i>
        </div>
    </div>
</div>
`

    linea.innerHTML = contenido;

    const btn = linea.querySelector('[data-btn]');
    btn.addEventListener('click', () => {

        const id = btn.id;

        service.eliminarProducto(id).then((respuesta) => {

            console.log(respuesta);

        }).catch((error) => alert('ocurrio un error'));

    });
    return linea;
};


//agreganado producto a la tarjeta
const contenedor = document.querySelector('[data-contenedor]');


service.listaProducto().then((data) => {

    data.forEach(({ url, nombreProducto, costo, id }) => {

        const nuevaTarjeta = crearNuevaTarjeta(url, nombreProducto, costo, id);

        contenedor.appendChild(nuevaTarjeta);
    });

}).catch((error) => alert('ocurrio un error'));