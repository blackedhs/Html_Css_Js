$(function () {

    //tarda 4 segundos en esconderse:
    //$("p:last").hide(4000);

    //tarda 4 segundos en esconderse y 4 segundos en aparecer:
    // $("p:last").hide(4000, function(){
    //     $("p:last").show(4000);
    // });

    //si esta oculto lo muestra y si se muestra se oculta:
    $("#btnCambiar").toggle(1000, () => $("#btnCambiar").toggle(1000));
    $('#btnCambiar').click(() => {
        
        $('p').toggle(4000, () => {
            $('p#river:first').text('River');
            $('p#river:first').attr('class', 'rojo letraGrande');
            $('p#river:last').text('Plate                   3');
            $('p#river:last').attr('class', 'letraGrande');
            $('p#boca:first').text('Boca');
            $('p#boca:first').attr('class', 'azul letraGrande');
            $('p#boca:last').text('Juniors                   1');
            $('p#boca:last').attr('class', 'amarillo letraGrande');
            return $('p').toggle(4000);
        });


    });
    // $("#btnEnviar").click( () => {
    //     $("#btnEnviar").animate({
    //         height: '+=50px',
    //         wigth: '+=50px'
    //     }, 1000).animate({
    //         height: '-=50px',
    //         wigth: '-=50px'
    //     }, 1000)
    // });
    // $("#btnEnviar").click(() =>
    //otras animaciones
	/*
		slideDown(4000);
		slideUp(4000);
		slideToggle(4000);
		fadeIn(4000);
		fadeOut(4000);
		fadeToggle(4000);
    */

})