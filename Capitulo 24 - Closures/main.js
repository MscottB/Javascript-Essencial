function funcion1(){
    var miVariable = 1;

    function functionInterna(){
        console.log(miVariable);
    }
    return functionInterna;
}

var variableExterna = funcion1();
//console.log(variableExterna); //Para mostrar la funcion que se toma
variableExterna();   //Muestra el valor que contiene mi miVariable

function funcion2(){
    var miVariable = 2;

    function funcionInterna2(){
        console.log(miVariable);
    }
    funcionExterna(funcionInterna2);
}

function funcionExterna(funcion){
    funcion();
}

funcion2(); //accede a la variable numero 2

function espera(mensaje){
    setTimeout(function(){
        console.log(mensaje);
    }, 500)
}
espera("HOLA");