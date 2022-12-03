// Función async

// La declaración de función async define una función asíncrona,
// la cual devuelve un objeto AsyncFunction.

// Es posible definir también funciones asíncronas a través de
// una expresión de función async.




const fnAsync = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => resolve('Async!!'), 2000);
        } else {
            reject(new Error('Error!'));
        };
    });
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello!!');
}

console.log('Before');
anotherFn();
console.log('After');