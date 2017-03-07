//funcion declarada se puede invocar desde un principio
declarada();

function declarada(){
    console.log("hola");
};

//expresion funcional
//No es posible invocar desde un principio, por el alzado
expresionFuncional();
var expresionFuncional = function(){
    console.log("hola");
};

//=========Alzado-hoisting================
//es importante conocer el orden de carga del codigo.
//JS prioriza el orden en el que carga funciones, asignaciones y codigo de ejecucion.
/**Orden de carga de JS:
 * 1.-Variables (inicalizadas) y funciones declaradas
 * 2.- Asignaciones, operaciones y codigo ejecutable.
 */

//Ejemplo de codigo.

/**
 * Escribimos asi nuestra funcion
 * 
 * function sumarCuadrados(a, b){
 *  var x = sumar(a * a, b * b);
 * return x;
 * 
 * funcion sumar(c, d){
 *      var a = c + d;
 *          return a;
 *  }
 * }
 */
//========Separador===========
/**
 * JS lo carga asi
 * 
 * funtion sumarCuadrados(a, b){
 * var x = undefined;
 * 
 * function sumar(c, d){
 *  var a = c + d;
 *      return a;
 *  }
 * x = sumar(a * a, b * b);
 * return x;
 *
 * }
 */