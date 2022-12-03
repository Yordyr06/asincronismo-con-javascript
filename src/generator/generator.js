function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}


const it = iterate(['Yordy', 'Miranda', 'Farrasel', 'Hector', 'Angel']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


// Generador
// El objeto Generator es retornado por una función generator
// y es conformado tanto el protocolo iterable como el protocolo iterador.

// Constructor
// Este objeto no puede ser instanciado directamente. En su lugar,
// una instancia del objeto Generator puede ser devuelta por una función generator:

//     function* gen() {
//         yield 1;
//         yield 2;
//         yield 3;
//     }

//     var g = gen(); // "Generator { }"