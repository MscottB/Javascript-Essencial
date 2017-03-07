var colores = ["rojo", "verde", "blanco", "azul"];
console.log(colores);
function borrarElementoMatriz(elemento, matriz){

    var indice = matriz.indexOf(elemento);

    if(indice > -1){
        //el elemento existe
        matriz.splice(indice, 1);
        console.log("elemento encontrado y eliminado");
    }else{
        //el elemento no existe
        console.log("No se ha encontrado el elemento");
    }
return
};

borrarElementoMatriz("verde", colores);
console.log(colores);