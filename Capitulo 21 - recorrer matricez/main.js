var matriz = ["lunes", "martes", "miercoles", "jueves", "viernes"];

//Manera ñurda
//console.log(matriz[0]);
//console.log(matriz[1]);
//console.log(matriz[2]);
//console.log(matriz[3]);
//console.log(matriz[4]);


//parece que crea ciclo infinito? FOR tipico
/*var longitud = matriz.length, i=0;

for(i;i<longitud; i++){
    console.log(matriz[i]);
}*/

//forEach
/*matriz.forEach(function(elemento){
    console.log(elemento);
});*/

function mostrarElemento(elemento){
    console.log(elemento);
}
matriz.forEach(mostrarElemento);

console.log("================Separador=============");

matriz.forEach(function(elemento){
    console.log(elemento)
});
console.log("================Separador=============");
//esnext for...of    version ES6, la nueva.
for(var elemento of matriz){
    console.log(elemento);
}
console.log("================Separador=============");
//con variable let el lemento queda unicamente en el ciclo for
for(let elemento of matriz){
    console.log(elemento);
}






