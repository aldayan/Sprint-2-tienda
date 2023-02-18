const listaProducto = () => {
    return fetch('https://my-json-server.typicode.com/aldayan/sprint-2-tienda-virtual/sesionYproductos').then(respuesta => {
        return respuesta.json();
    });
};


//creando sesion
const crearSesion = (email, contraseña) => {
    return fetch('https://my-json-server.typicode.com/aldayan/sprint-2-tienda-virtual/sesionYproductos', {
        method: 'POST',

        body: JSON.stringify({
            email,
            contraseña,
            id: uuid.v4()
        }),
    });

};


//creando producto
const crearProducto = (url, categoria, nombreProducto, costo, descripcion) => {
    return fetch('https://my-json-server.typicode.com/aldayan/sprint-2-tienda-virtual/sesionYproductos', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            url,
            categoria,
            nombreProducto,
            costo,
            descripcion
        }),
    });

};


// eliminando producto

const eliminarProducto = (id) => {

    return fetch(`https://my-json-server.typicode.com/aldayan/sprint-2-tienda-virtual/sesionYproductos/${id}`, {

        method: 'DELETE'
    });
};



//detalle del producto

const detalleProducto = (id) => {
    return fetch(`https://my-json-server.typicode.com/aldayan/sprint-2-tienda-virtual/sesionYproductos/${id}`).then((respuesta) => respuesta.json()

    );
};



//actualizar producto

const actualizarProducto = (url, categoria, nombreProducto, costo, descripcion, id) => {
    return fetch(`https://my-json-server.typicode.com/aldayan/sprint-2-tienda-virtual/sesionYproductos/${id}`, {
        method: 'PUT',

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            url,
            categoria,
            nombreProducto,
            costo,
            descripcion
        }),

    }).then((respuesta) => respuesta).catch(err => console.log(err));

};



export const service = {
    listaProducto,
    crearSesion,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto


};