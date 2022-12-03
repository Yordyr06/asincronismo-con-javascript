import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

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
    