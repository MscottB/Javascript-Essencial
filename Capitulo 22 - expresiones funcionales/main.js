//esta es una funcion Declarada
function funcionDeclarada(){
    console.log("Declarada");
}
funcionDeclarada();

//========Esta es una expresion funcional, a una variable se le asigna una funcion y esta ultima no posee nombre==========
//variable es un contenedor de la funcion esta es anonima.
var expresionfuncional = function(){
    console.log("expresion");
};

//si se llama la funcion despues como esta no tiene problemas pero si se coloca antes de la variable, tira error
//ya que esta no es una funcion declarada, sino una expresion funcional...o la mierda que sea...2:34am ya no cunde la neurona.
//el navegador lo lee de esta manera
//primera linea del documento = var expresionfuncional = undefined; si se coloca primero esto.
expresionfuncional();

//====expresion funcional anonima, la funcion no posee nombre

var matriz = [1, 2, 3, 4, 5];

matriz.forEach(function(elemento){
    console.log("elemento: " + elemento);
});

//============expresion funcional que se autoinvocan de manera inmediata
(Function(){
    //IIFE=Inmediately invoked function expresion
    console.log("Hola IIFE");
})();
// se auto autoinvoca
//(funcion(){})(); = funcion(); referencia a que se llama la funcion 

//=========RMP patron de arquitectura JS======

var modulo = (function(){
    console.log("Hola");

    return{
        //puede retornar determinadas partes de la funcion
        function1: function2
    }
})();