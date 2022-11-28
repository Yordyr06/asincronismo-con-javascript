// Función Callback
// Una función de callback es una función que se pasa a otra función como un argumento,
// que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.



function sum(num1, num2) {
    return num1 + num2;
}

function calc(callback, num1, num2) {
    return callback(num1, num2);
}

// En este caso a sum no se le deben colocar los paréntesis porque la función generaría un error.
console.log(calc(sum, 5, 5));
