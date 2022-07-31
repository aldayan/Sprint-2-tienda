import { service } from "./service.js";


//creando tema
const crearNuevaTarjeta = (url, nombreProducto, costo) => {


    const linea = document.createElement('div');


    const contenido = `
    <div class="caja-motos" style="background-image:url(${url}); background-position: center; ">
    <div class="caja-contenido">
        <h3>${nombreProducto}</h3>
        <p class="costo">$${costo}</p>
        <hr>
        <div class="icons">
            <a href="editar.html" class="editar"><i class="fas fa-pen"></i></a>
            <i class="fas fa-trash-alt trashIcon icon"></i>
        </div>
    </div>
</div>
`

    linea.innerHTML = contenido;

    return linea;
};




//agreganado producto a la tarjeta
const contenedor = document.querySelector('[data-contenedor]');


service.listaProducto().then((data) => {

    data.forEach(({ url, nombreProducto, costo }) => {

        const nuevaTarjeta = crearNuevaTarjeta(url, nombreProducto, costo);

        contenedor.appendChild(nuevaTarjeta);
    });

}).catch((error) => alert('ocurrio un error'));