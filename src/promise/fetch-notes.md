💾 𝗖𝗹𝗮𝘀𝗲 #𝟭𝟭: 𝗙𝗲𝘁𝗰𝗵𝟭𝟭/𝟮𝟭 💾
.
Por medio de Fetch se puede realizar peticiones HTTP asíncronas de JavaScript (JS) con promesas. La API Fetch proporciona una interfaz JS más cómoda para acceder y manipular; fetch() es un método global.
.
🛠️ Para poder usar fetch, primero tenemos que instalarlo:
.

    Ir a la terminal e instalar fetch con: npm i node-fetch
    Para poder compilar desde VSC, debemos registrar el modulo en package.json, abrimos el archivo y al final se agrega:

"type": "module"

    Importante agregar una coma (,) a la llave que cierra a “dependencies”.
    En la ruta src/promise crear el archivo challenge.js
    En el archivo challenge.js inicialmente se debe importar lo que acabamos de instalar, agregando el código: import fetch from 'node-fetch';
    Dado que la API es una constante, nunca va a cambiar, por convección se coloca en letras mayúsculas: const API = 'https://api.escuelajs.co/api/v1';
    Ahora se crea la lógica con fetch, then y catch:

import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

//función que va a recibir como argumento la url que queremos llamar y esto retornará el llamado de fecth: una promesa
function fetchData(urlApi){
    return fetch(urlApi);
};
//el llamado
fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products);
    })
    .then(() => {
        console.log('hola');
    }) //se pueden anidar múltiples .then
    .catch(error => console.log(error));

    Para correrlo dentro de la consola de VSC, se selecciona el código, se da click derecho y se le da a Run Code. En la salida (OUTPUT) si no arroja error, sale una lista larga de elementos del llamado a la API.
    .

Continuando con la clase, para compilar el segundo ejemplo debemos comentar fetchData() para evitar problemas de compilación.
.
🖊️ ¿Cómo comentar en JavaScript?
.
En JS se comenta cada línea con doble slash // o se puede comentar todo un párrafo iniciando con slash + asterisco /* y finalizar con asterisco + slash */
.
Pero para ahorrar tiempo se puede usar los shortcuts de VSC, se pueden ver y editar en File>Preferences>Keyboard Shortcuts o pulsando las teclas Ctrl + K Ctrl + S:
.

    Para comentar con shortcut, seleccionar el texto que se quiere comentar y presionar las teclas Ctrl + K luego las sueltas y presionas las teclas Ctrl + C
    Para quitar los comentarios con shortcut, seleccionas el texto comentado, presionar las teclas Ctrl + K luego las sueltas y presionas las teclas Ctrl + U
    .

✏️ El código del segundo ejemplo queda:

fetchData(`${API}/products`)
    .then(response => response.json()) //se hace la conversión a un objeto json
    .then(products => {
        console.log(products);
        return fetchData(`${API}/products/${products[0].id}`) // solo se quiere mostrar el primer elemento de la primera solicitud
    })
    .then(response => response.json()) //se vuelve traer la data
    .then(product => {
        console.log(products.title);
        return fetchData(`${API}/categories/${product.category.id}`) //se quiere mostrar la categoria de un producto en particular
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(err => console.log(err)) //detectar un error
    .finally(() => console.log('Finally')); //es opcional para mostrar que se terminó la solicitud

.

    Al correrlo con Run Code, la salida muestra una lista larga con la última palabra impresa Finally