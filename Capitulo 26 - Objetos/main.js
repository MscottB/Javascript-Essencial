/**
 * La variable libro posee un objeto el cual a lo siguiente...o algo asi. 1:04 am...
 * esta cerrado entre {}
 * titulo autor, etc son propiedades del objeto libro, las cuales se encuentran reunidas en el objeto.
 * 
 *   Descripcion Ejemplo
 *     del Objeto 
 * =======================
 * |propiedad  | valor   |
 * |===========|=========|
 * |  titulo   |   IT    |
 * |  genero   |  terror |
 * ======================
 */
var libro = {
    titulo: "IT",
    autor: "stephen king",
    genero:"terror",
    valoracion: 9,
    tags: ["pennywise", "floating", "payaso", "derry"]
};

/**
 * para acceder a una propiedad de este objeto  es nombre de la variable en este caso LIBRO seguido
 * de un punto( . ) para obtener el valor de una de sus propiedades.
 */ 

console.log(libro.autor);
//para acceder a la matriz de tags se hace lo mismo que Ejemplo anteriores de matrizes se ocupa un []
console.log(libro.tags[3]);

/**
 * comparacion en la creacion de obgetos antes y ahora.
 * 
 * ====Antes=== ni puta idea como se llama pero me cago cuando aprendia esto.
 *  var libro = new object libro;
 * 
 * ===Ahora=== sintaxis object literal expresion
 * 
 * var libro = {};
 */

//===============Ejemplo 2 agregar una nueva propiedad de manera externa a un objeto ya creado====
//Nueva pripiedad a agregar.
var opinion = "Buen libro";

//Objeto ya creado
var libro = {
    titulo: "IT",
    autor: "stephen king",
    genero:"terror",
    valoracion: 9,
    tags: ["pennywise", "floating", "payaso", "derry"],
    //aqui se agrega la "opinion" anteriormente declarada
    opinion: opinion,
    //este ultimo no es una propiedad es un metodo ya que contiene una funcion.
    leer: function(){
        this
    }
};

console.log(libro.opinion);

//ejemplo propio sin metodo
var persona = {
    nombre: "michael",
    genero: "hombre",
    nacionalidad: "chile",
    gustos: ["cero", "uno", "dos", "tres", "cuatro"],
}

console.log(persona.genero,persona.gustos[3]);