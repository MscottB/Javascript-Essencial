var colores = ["rojo", "verde", "blanco", "azul"];

console.log(colores.indexOf("verde"));//indexOf muestra el numero que posee en el array.

console.log(colores.indexOf("rosa"));//si no existe devuelve -1

colores.push("rosa");//agrego el nuevo elemento
console.log(colores.indexOf("rosa"));//busco nuevamente el elemento que estaba inexistente

console.log(colores);//listo el array con el nuevo elemento agregado.

