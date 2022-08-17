const listaProducto = () => {
    return fetch('http://localhost:3000/sesionYproductos').then(respuesta => {
        return respuesta.json();
    });
};


//creando sesion
const crearSesion = (email, contraseña) => {
    return fetch('http://localhost:3000/sesionYproductos', {
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
    return fetch('http://localhost:3000/sesionYproductos', {
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

    return fetch(`http://localhost:3000/sesionYproductos/${id}`, {

        method: 'DELETE'
    });
};



//detalle del producto

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/sesionYproductos/${id}`).then((respuesta) => respuesta.json()

    );
};



//actualizar producto

const actualizarProducto = (url, categoria, nombreProducto, costo, descripcion, id) => {
    return fetch(`http://localhost:3000/sesionYproductos/${id}`, {
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