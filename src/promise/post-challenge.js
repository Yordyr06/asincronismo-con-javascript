import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';



// CORS

// CORS (Cross-Origin Resource Sharing o en español Intercambio de recursos de origen cruzado)
// es un sistema que consiste en transmitir HTTP headers (en-US), que determina si los navegadores
// bloquean el acceso del código JavaScript frontend a las respuestas de peticiones de origen cruzado.

// La política de seguridad del mismo origen prohíbe el acceso a los recursos de orígenes cruzados.
// Pero CORS brinda a los servidores web la capacidad de decir que desean optar por permitir el acceso
// de origen cruzado a sus recursos.



function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return response;
}

const data = {
    "title": "Yordy's Product",
    "price": 1,
    "description": "A description",
    "categoryId": 3,
    "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data))
    .then(() => {
        console.log('Hola Mundo');
    })
    .catch(error => console.log(error))
    .finally(() => console.log('Finally'))
    