import { service } from "./service.js";

//creando tarjeta para index
const crearNueva = (url, nombreProducto, costo, id) => {


    const tarjeta = document.createElement('div');
    const contenedor = `
    <div class="caja-motos" style="background-image:url(${url}); background-position: center;">
    <div class="caja-contenido" >
        <h3>${nombreProducto}</h3>
        <p class="costo" >$${costo}</p>
        <hr>
        <a href="./decripcion/descripcion.html?id=${id}" class="enlace" >Ver producto</a>
    </div>
</div>
`

    tarjeta.innerHTML = contenedor;

    return tarjeta;
};



const cards = [{

    category: "data-deportiva",
    value: 1

}, {

    category: "data-harley",
    value: 2
}, {

    category: "data-motocross",
    value: 3
}];







service.listaProducto().then((data) => {

    cards.forEach(c => {


        let parent = document.querySelectorAll(`[${c.category}]`)[0];

        const filtered = data.filter(ca => ca.categoria == c.value)

        filtered.forEach(({ url, nombreProducto, costo, id }) => {

            const Tarjeta = crearNueva(url, nombreProducto, costo, id);

            parent.appendChild(Tarjeta);
        });

    });


}).catch((error) => {
    alert('ocurrio un error');
});