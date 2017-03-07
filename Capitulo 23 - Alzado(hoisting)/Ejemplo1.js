/**
 * Ejemplo 1 alzado que valo devuelve
 */

//Que numero devolvera la funcion

function obtenerNumero(){
    
    function retornarNumero(){
            return 80;
        }
    return obtenerNumero();

    function retornarNumero(){
        return 50;
    }
    
}
obtenerNumero();

//Interpretado por JS
/**
 * Las funciones declaradas son alzadas antes de comenzar la ejecucion.
 * Como tienen el mismo nombre, LA SEGUNDA SOBRE-ESCRIBE A LA PRIMERA.
 */
function obtenerNumero(){
    function retornarNumero(){
        return 80;
    }

    function retornarNumero(){
        return 50;
    }

    return obtenerNumero();
}

obtenerNumero();