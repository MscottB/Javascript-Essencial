for (var i = 1; i<=5; i++) {

    (function (){
        var z = i;
          setTimeout(function(){
        console.log(z);
    },z * 1000);  
})();

}

//Es lo mismo que el ciclo for anterior
for (var i = 1; i<=5; i++) {

    (function (z){
          setTimeout(function(){
        console.log(z);
    },z * 1000);  
})(i);

}