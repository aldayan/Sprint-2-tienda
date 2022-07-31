const listaProducto = () => {
    return fetch('http://localhost:3000/sesionYproductos').then(respuesta => {
        return respuesta.json();
    });
};


//creando sesion
const crearSesion = (email, contraseña) => {
    return fetch('http://localhost:3000/sesionYproductos', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
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



export const service = {
    listaProducto,
    crearSesion,
    crearProducto


};