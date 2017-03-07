//Object create
var bf = {
    titulo: "battlefield",
    genero: "FPS",
    jugar: function(){
        console.log("Estoy jugando " + this.titulo);
    }
};
//Object debe empezar con la "O" en mayuscula si o si, o va a tirar error.
var bf1 = Object.create(bf);

bf1["version"] = "battefield 1";
console.log(bf1);
//console.log(bf.isPrototypeOf(bf1));
//console.log(Object.prototype.isPrototypeOf(bf));

//estas 2 son lo mismo | syntax sugar for Object create
/*
var objeto1 = {}; //1
var objeto2 = Object.create(Object.prototype); //2

console.log(Object.prototype.isPrototypeOf(objeto1));
console.log(Object.prototype.isPrototypeOf(objeto2));
*/

//new "constructor" en js no existen los constructores y tener cuidado con el new a menos de que se sepa ocupar
//new no crea el constructor al ponerlo des pues de una funcion, crea un objeto con los valores anteriores

function COD(){
    this.titulo = "Call of Duty";
    this.genero = "FPS";
    this.jugar = function(){
        console.log("estoy jugando a " + this.titulo);
    };
}

COD.prototype.jugar = function(){
    console.log("Estoy jugando a " + this.titulo);
};

var IW = new COD();
IW["version"] = "infinite warfare";
//console.log(COD.isPrototypeOf(IW));
console.log(IW);