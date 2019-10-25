$(function(){
    $("#btnEnviar").click(function()
    {
        console.log($("p.rojo").text());
        console.log($("p.rojo").html());
        console.log($("#btnEnviar").val());
        console.log($("#btnEnviar").attr("id"));
    })
    $("#btnCambiar").click(function(){
        $("p.rojo").text("Este es el nuevo texto");
        $("p:last").html("<strong>Este parrafo va como strong(negrita)</strong>");
        $("p:last").html(function(i,prevHTML)
        {
            return prevHTML + i + " agrego mais HTML";
        });
        
        $("#btnCambiar").val("nuevo valorrrr");
        //O así:

        $("#btnCambiar").attr("class", "azul");
        $("#btnCambiar").attr({
            "class":"azul", 
            "miAtributo":"miValor"
        });
        $("#btnCambiar").attr("class", function(i, prevValue){
            console.log("Clase anterior: " + prevValue)
            return "rojo";
        });
        var boton=$("<input>").val("Nuevo Boton").attr("type", "button");
        $("#btnCambiar").after(boton);
        //$("#btnCambiar").before(boton);


    })
})