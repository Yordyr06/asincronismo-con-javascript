const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();

    // Códigos de estado de respuesta HTTP

    // Los códigos de estado de respuesta HTTP indican si se ha completado
    // satisfactoriamente una solicitud HTTP específica. Las respuestas se
    // agrupan en cinco clases:

    //      1. Respuestas informativas (100–199),
    //      2. Respuestas satisfactorias (200–299),
    //      3. Redirecciones (300–399),
    //      4. Errores de los clientes (400–499),
    //      5. Y errores de los servidores (500–599).


    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));    
            } else {
                const error = new Error('Error ' + urlApi);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

fetchData(`${API}/products`, function (error1, data1) {
    if (error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0]?.id}`, function (error2, data2) {
        if (error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
            if (error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2?.tittle);
            console.log(data3?.name);
        });
    });
}); 