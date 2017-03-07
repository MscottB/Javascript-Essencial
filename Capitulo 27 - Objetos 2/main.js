/**
 * un objeto es la coleccion de informacion(propiedades y metodos), relacionada de alguna forma.
 * 
 */

var opinion = "buen libro";

var libro = {
    titulo: "IT",
    autor: "stephen king",
    genero:"terror",
    valoracion: 9,
    tags: ["pennywise", "floating", "payaso", "derry"],
    opinion: opinion,
    "critica general": "positiva de forma unanime",    
};
console.log(libro.tags[1],"<-separador->", libro.opinion);
//se llama a valoracion
console.log(libro.valoracion);
//se elimina valoracion
delete(libro.valoracion);
//se vuelve a llamar a valoracion y aparece undefined ya que se ha elimiando
console.log(libro.valoracion);
 /**
  * segundo metodo de acceso braked(asi se escucho xD)
  */
  console.log(libro["opinion"]);
//otra manera
var propiedades = "opinion";
console.log(libro[propiedades]);

//intentando acceder a critica general
console.log(libro["critica general"]);

//typeof muestra que una matriz es un objeto y no un array por consola
var matriz = [1,2,3,4,5];
console.log("muestra que es la matriz declara anteriormente ->", typeof matriz);

//for in es un bucle especial hecho para recorrer una matriz
console.log("=recorrido bucle especial acesso propiedad=");
for (var propiedad in libro){
    console.log(propiedad);
}
console.log("=recorrido bucle especial acesso a propiedad y valor=");
for (var propiedad in libro){
    console.log(propiedad + " : " + libro[propiedad]);
}