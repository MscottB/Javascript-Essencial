var dias = ["lunes", "martes", "miercoles", "jueves", "viernes"];


//============ funciones shift & pop================

//var lunes = dias.shift(); //shift elimina la primera variable del array que es lunes, pero ese elemento 
                            //eliminado del array se guarda en la variable declarada.
                            //shift retorna(return) el valor eliminado.

//var viernes = dias.pop(); // lo mismo que shift pero esta vez eligiendo el ultimo elemento.

//dias.shift(); //elimina el primer elemento de una matriz, en este ejemplo lunes.
//dias.pop(); //elimina el ultimo elemento de una matriz

//console.log(dias);
//console.log(lunes);
//console.log(viernes);

//====================funcion push===============

//dias.push("sabado"); //push agrega un elemento mas al final de la matriz. y no retorna nada.
//console.log(dias);

//============funcion splice===========

dias.splice(1, 1); // elimina el lemento indicado, el primer dijito es donde inicia en el array y el segundo numero
                   // es cuantos elementos elimina del array.

console.log(dias);

dias.splice(1, 0, "martes2");//(donde inicia en el array, cuantos elementos quiero eliminar, el elemento que quiero agregar)
                             
console.log(dias);

dias.splice(5,0,"sabado");// selecciono un lugar inexistente que viene depues del 4 viernes y agrego el nuevo elemento.
console.log(dias);

dias.splice(5,1,"domingo");//reemplazo un elemento, selecciono con el 5, elimino un elemento(1) y agrego al final domingo.
