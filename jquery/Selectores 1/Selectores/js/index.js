$(function(){

    //por id
    console.log($("#btnEnviar"));
    //#id
    //.clase
    //por tag
    console.log($("p"));
    //por clase
    console.log($(".rojo"));
    //---------------------------------------//
    //para todas las clases css que son .rojo
    console.log($(".rojo"));
    //para todas los parrafos rojos
    console.log($("p.rojo"));
    //para el ultimo elemento p(pseudoclase)
    console.log($("p:last"));
    //por atributo
    console.log($("p[class=rojo]"));



})