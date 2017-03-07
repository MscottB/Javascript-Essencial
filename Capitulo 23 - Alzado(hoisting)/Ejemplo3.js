//Ejercicio 3

//Que numero devolvera la funcion?

function obtenerNumero(){

    return retornarNumero();

    var retornarNumero = function(){
        return 80;
    }

    var retornarNumero = function(){
        return 50;
    }
}

obtenerNumero();

//Como lo interpreta JS

function obtenerNumero(){

    var retornarNumero = undefined;
    var retornarNumero = undefined;//aqui aparece type error

    return retornarNumero();
/**
 * las 2 expresiones funcionales son INALCANZABLES  ya que estan despues del return
 */

    retornarNumero = function(){
        return 80;
    }

    retornarNumero = function(){
        return 50;
    }

}