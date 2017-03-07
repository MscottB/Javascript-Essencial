var persona = {
    //esto es una propiedad
    nombre: "michael",
    edad: "26",
    ocupacion: "web developer",
    color: "naranjo",
    ciudad: "machali",
    //Estos son metodos y no propiedad
    caminar: function(){
        console.log("estoy caminando");
    },
    saludar: function(){
        //este this hace referencia a var persona
        console.log("Hola, me llamo " + this.nombre);

        //hace alucion al ambito global al pedir el nombre, cosa que nose porque xuxa lo hace :D
        //por eso tira JIM pq se encuentra declarado en el ambito global.
        //function funcion(){
        //    console.log(this.nombre);
        //}
        // se crea una expresion funcinal que accede al nombre del objeto previamente declarado
        var funcion = function(){
            console.log(this.nombre);
        }.bind(this);
        funcion();
    },
};

//persona.caminar();
//persona.saludar();
console.log("==Separador==");

//ambito global de la variable
var nombre = "jim";

//2 maneras de llamar a saludar
//var otraFuncion = persona.saludar;
//otraFuncion();

persona.saludar();