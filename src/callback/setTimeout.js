// WindowOrWorkerGlobalScope.setTimeout

// El método setTimeout() del mixin WindowOrWorkerGlobalScope establece
// un temporizador que ejecuta una función o una porción de código después
// de que transcurre un tiempo establecido.



setTimeout(function () {
    console.log('Hola Mundo');
}, 5000)



function greeting(name) {
    console.log(`Hola ${name}`);
}

// El orden en el que son pasados los argumentos es importante, hay que tenerlo en cuenta.
setTimeout(greeting, 2000, 'Yordy');