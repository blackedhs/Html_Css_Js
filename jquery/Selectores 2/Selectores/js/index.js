$(function(){
    $("#btnEnviar").click(function(){
        alert("Click en el boton btnEnviar");
    });

    $("p").hover(
    function(e)
    {
        console.log("pusiste el mouse encima");
    },
    function(e)
    {
        console.log("sacaste el mouse");
    });
    //cuando se le de click a los parrafo
    $("p").on("click", function()
    {

    })

    $("p").on({
        "click": function(){},
    "mouseenter": function(){},
    "mouseleave": function(){}
    
    })
    $("p").off("click");
})