📂 𝗖𝗹𝗮𝘀𝗲 #𝟭𝟮: 𝗙𝗲𝘁𝗰𝗵 𝗣𝗢𝗦𝗧 𝟭𝟮/𝟮𝟭 📂
.
Repasando algunas de las característica del protocolo http:
.

    Los verbos indican acciones, estás acciones están asociadas a peticiones y recursos. En línea general sirve para la manipulación de recursos cliente/servidor. Los códigos de estados, los códigos son valores números que tienen un valor semántico.

.
Algunos Verbos http son:
.
GET → Sirve para solicitar recurso.
POST → Sirve para la creación de recursos en el servidor.
PUT → Sirve actualizar por completo un recurso.
DELETE → Sirve para eliminar un recurso.
.
🔨 En el ejemplo de la clase se usa POST para guardar (enviar a la API) información en lugar de obtener con GET (recibir).
.
⚠️ Hay permisos que se deben tomar en cuenta para que el intercambio sea seguro, hay que especificar el modo (mode), aquí se indica si se permite solicitudes de origen cruzado.
.
🔀 ¿Qué es un origen cruzado?
.
Un origen tiene dominio/protocolo/puerto, un origen cruzado denominado “Cross Origin” es la palabra que se utiliza para denominar el tipo de peticiones que se realizan a un dominio diferente del dominio de origen desde donde se realiza la petición.
Así que si se coloca cors, indica que se permiten ciertas solicitudes predeterminadas de origen cruzado como GET y POST para salvaguardar y evitar manipulaciones maliciosas. En el enlace detallan más sobre el concepto de Cors: aquí
.

    Ir a VSC, en la ruta src/promise crear el archivo challenge-post.js
    El código queda así (está comentado):

import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
    //ya no se solicita informarción si no se guardará información
    const response = fetch(urlApi, {
        method: 'POST', //tiene que ir en mayúscula
        mode: 'cors', //cors es el permiso que va a tener, por defecto va estar siempre en cors
        credentials: 'same-origin', //es opcional
        headers:{
            'Content-Type': 'application/json' //necesario indicar que lo que se está enviando es de tipo json
        },
        body: JSON.stringify(data) //el método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON
    });
    return response;
}

//En https://fakeapi.platzi.com/doc/products se consigue la estructura de como debe ser el objeto que se quiere crear con POST
const data = {
    "title": "Nunca pares de aprender",
    "price": 2,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

//podemos usar el postData como una promesa y con .then obtener la respuesta como un objeto json y mostrarlo después en la consola
postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data));

.
🖥️ ¿Cómo ver la salida después del POST?

    En el OUTPUT de la consola de VSC si todo está OK no debería salir un 400 (Bad Request).
    Para ver el objeto creado en el navegador, copiamos la dirección: https://api.escuelajs.co/api/v1/products/ y colocamos al final el número arrojado por la id del OUTPUT, si el id es 271, sería: https://api.escuelajs.co/api/v1/products/271
    .

🎨 Ejemplo para actualizar un objeto con PUT:

//Con PUT para actualizar un objeto
function putData(urlApi, dataUpdate) {
    const response = fetch(urlApi, {
        method: 'PUT',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataUpdate)
    });
    return response;
}

const dataUpdate = {
    "title": "Se puede cambiar tambien otras caracteristicas",
    "price": 10 // no es necesario colocar todas las características del objeto, solo las que se cambiarán
}

putData(`${API}/products/271`, dataUpdate) //se debe colocar el id del objeto que se quiere modificar
    .then(response => response.json())
    .then(dataUpdate => console.log(dataUpdate));

.
🗑️ Ejemplo para eliminar un objeto con DELETE:

//Eliminar un objeto indicando el id con DELETE
function deleteData(urlApi) { //no es necesario pasar la data
    const response = fetch(urlApi, {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        } //no es necesario especificar el body
    });
    return response;
}

const idNumber = 271; //se debe colocar el id del objeto qu se quiere modificar

deleteData(`${API}/products/${idNumber}`) //no es necesario pasar data
    .then(() => {
        console.log(`Borrado ${idNumber}`); //es opcional imprimir en consola
    });
