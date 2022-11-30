// Usar promesas

// Una Promise (promesa en castellano) es un objeto que representa la terminación
// o el fracaso de una operación asíncrona. Dado que la mayoría de las personas
// consumen promises ya creadas, esta guía explicará primero cómo consumirlas,
// y luego cómo crearlas.

// Esencialmente, una promesa es un objeto devuelto al cual se adjuntan funciones callback,
// en lugar de pasar callbacks a una función.

const promise = new Promise (function (resolve, reject) {
    resolve('Hey!')
});





const cows = 15;

const countCows = new Promise (function (resolve, reject) {
    if (cows > 10) {
        resolve (`We have ${cows} cows on the farm`);
    } else {
        reject (`There is no cows on the farm`);
    }
});

countCows.then((result) => {
    console.log(result);

}).catch((error) => {
    console.log(error);

}).finally(() => console.log(`Finally`));