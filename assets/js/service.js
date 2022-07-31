const listaSesion = () => {
    return fetch('http://localhost:3000/sesion').then(respuesta => {
        return respuesta.json();
    });
};



const crearSesion = (email, contraseña) => {
    return fetch('http://localhost:3000/sesion', {
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


export const service = {
    listaSesion,
    crearSesion


};