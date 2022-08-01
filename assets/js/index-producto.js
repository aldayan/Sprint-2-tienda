import { service } from "./service.js";

//creando tarjeta para index
const crearNueva = (url, nombreProducto, costo, id) => {


    const tarjeta = document.createElement('div');


    const conten = `
    <div class="caja-motos" style="background-image:url(${url}); background-position: center; ">
    <div class="caja-contenido">
        <h3>${nombreProducto}</h3>
        <p class="costo">$${costo}</p>
        <hr>
        <a href="./decripcion/descripcion.html"  id="" class="enlace">Ver producto</a>
    </div>
</div>
`

    tarjeta.innerHTML = conten;

    return tarjeta;
};




//agreganado producto a la tarjeta
const contener = document.querySelector('[data-deportiva]');


service.listaProducto().then((data) => {

    data.forEach(({ url, nombreProducto, costo, id }) => {

        const Tarjeta = crearNueva(url, nombreProducto, costo, id);

        contener.appendChild(Tarjeta);
    });

}).catch((error) => alert('ocurrio un error'));