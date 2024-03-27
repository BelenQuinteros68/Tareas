let variableExterna = "Variable externa";

function miFuncion() {

    let variableInterna = "Variable interna";

    console.log("Dentro de la función:");
    console.log("variableInterna:", variableInterna); 
    console.log("variableExterna:", variableExterna); 
}

console.log("Fuera de la función:");
console.log("variableInterna:", typeof variableInterna); 
console.log("variableExterna:", variableExterna); 

miFuncion();