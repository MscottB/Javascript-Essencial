/**
 * object prototype es el prototipo de mayor nivel del cual se hereda object.create()
 * 
 * array prototype->array.push()
 * 
 * String prototype->string.toUpperCase();
 * 
 * number prototype-> Number.toFixed();
 * 
 * function prototype-> function.toSource();
 */

/**
var persona = {
    nombre: "michael",
};
//console.log(persona.toString);
console.log("====Separador");
//console.log(persona.nombre);
console.log(persona.hasOwnProperty("nombre"));
console.log(persona.hasOwnProperty(toString));
*/

/**anti-pattern esto es demostracion y no debe hacerse, como ejemplo sirve pero 
 * no es recomendable realizar esto, ya que se asume que todos los obejetos de js tienen la propiedad
 * nombre
*/
Object.prototype.saludar = function(){
    console.log("hola soy " + this.nombre);
};

var michael = {
    nombre: "michael",
    profesion: "dev",
    ciudad: "machali",
    //saludar: function(){console.log("hola soy " + this.nombre);}
};
michael.saludar();
var scott = {
    nombre: "scott",
    profesion: "artes",
    ciudad: "santiago",

};
scott.saludar();

