//ejercicio 2

//Que numero devolvera la funcion?

function obtenerNumero(){

    var retornarNumero = function(){
        return 80;
    }

    return retornarNumero();

    var retornarNumero = function(){
        return 50;
    }
}

obtenerNumero();

//Como lo interpreta JS

function obtenerNumero(){
    /**
     * Las expresiones funcionales nunca son alzadas, SON TRATADAS COMO ASIGNACIONES.
     */
    var retornarNumero = undefined;
    var retornarNumero = undefined;

    retornarNumero = function(){
        return 80;
    }

    return retornarNumero;
/**
 * En este caso, la segunda expresion duncional es INALCANZABLE ya que esta despues del return
 */
    retornarNumero = function(){
        return 50;
    }
}
obtenerNumero();