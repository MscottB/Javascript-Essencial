var color = "rojo";
var matriz = [
        color,
        "michael",
        10*10,
        "michael "+color,
        function saludar(){console.log("funcion dentro de matriz");},
        ["lunes", "martes", "miercoles", "jueves", "viernes"],
        ["lunes", "martes", "miercoles", "jueves", "viernes",["sol","luna","tierra"] ]
    ];

//matriz[4]();//asi se llama a una funcion que esta dentro de una matriz

console.log(matriz[5]);//seleccionas los dias de las semanas
console.log(matriz[5][1]);//dentro de los dias de la semana selecciono el martes
console.log(matriz[6][5][2]);//para llegar al elemento numero 2, dentro de matriz^3