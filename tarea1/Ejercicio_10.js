function sumaNumeros(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}

const numeros = [1, 2, 3, 4, 5];
const resultado = sumaNumeros(numeros);


console.log("La suma de los números es:", resultado);