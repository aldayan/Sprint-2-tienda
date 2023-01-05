import { service } from "./service.js";



//creando tarjeta para ver
const crear = (url, nombreProducto, costo, id) => {


    const tarjet = document.createElement('div');


    const conte = `
    <div class="caja-motos" style="background-image:url(${url}); background-position: center; ">
    <div class="caja-contenido">
        <h3>${nombreProducto}</h3>
        <p class="costo">$${costo}</p>
        <hr>
        <a href="../../decripcion/descripcion.html?id=${id}" class="enlace">Ver producto</a>
    </div>
</div>
`

    tarjet.innerHTML = conte;

    return tarjet;
};




//agreganado producto a la tarjeta para ver
const cont = document.querySelector('[data-ver]');


service.listaProducto().then((data) => {

    data.forEach(({ url, nombreProducto, costo, id }) => {

        const Tarje = crear(url, nombreProducto, costo, id);

        cont.appendChild(Tarje);
    });

}).catch((error) => alert('ocurrio un error'));