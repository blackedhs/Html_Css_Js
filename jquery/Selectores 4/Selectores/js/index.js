$(function(){
    $("#btnCambiar").click(function(){
        var boton=$("<input>").val("Nuevo Boton").attr("type","button").addClass("azul")
        .css("margin", "2px")
        $("body").append(boton);
        //$("input:last").toggleClass("azul");
        $("#btnEnviar").toggleClass("azul");
        console.log($("input:last").toggleClass("margin"));
    });
    
})