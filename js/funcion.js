
// funcion para agregar y quitar una clase de CSS en etiquetas de HTML
// efecto de quitar y agregar el logo en pantalla
$(function(){
    $(window).scroll(function(){
        var winTop = $(window).scrollTop();
        if(winTop >= 5){
            $("body").addClass("sticky-header");
        }else{
            $("body").removeClass("sticky-header");
        }
    });
});

// funciones de slider para que los botones se ejecuten
/////////// comienzo
$(document).ready(function(){

    var imgItems = $('.slider li').length;
    var imgPos = 1;
    // console.log(imgItems);

    // contador dinamico donde muestra los circulos dependiendo de las imagenes que se han agregado
    for (i = 1; i <= imgItems ; i++) {
        $(".paginacion").append('<li><span class="fa fa-circle"></span></li>'); 
    }

    $(".slider li").hide();
    $(".slider li:first").show();
    $(".paginacion li:first").css({'color': 'rgba(255, 255, 255, .5)'});

    // funcion de botones circulares
    $('.paginacion li').click(paginacion);
    
    // funcion de botones flechas
    $('.right span').click(nextSlider); //derecha funcion

    $('.left span').click(prevSlider);  //izquierda funcion

    ///Reproduccion automatica de Slider
    setInterval(function(){
        nextSlider();
    }, 5000)   // se reproduce a los milisegundos 

    // FUNCIONES DECLARADAS EN LOS EVENTOS CLICK

    function paginacion(){

        var paginacionPos = $(this).index() + 1;
        // console.log(paginacionPos);

        $('.slider li').hide();
        $('.slider li:nth-child('+ paginacionPos +')').fadeIn();

        // quita el color de seleccion en los circulos y solo mantiene el color de seleccion a un solo circulo
        $('.paginacion li').css({'color': 'rgba(0, 0, 0, .5)'});
        $(this).css({'color': 'rgba(255, 255, 255, .5)'});

        imgPos = paginacionPos;
    }

    function nextSlider(){
        if (imgPos >= imgItems ) {
            imgPos = 1;
        }else{
            imgPos++;
        }
        // imgPos++;
        // console.log(imgPos);
        $('.paginacion li').css({'color': 'rgba(0, 0, 0, .5)'});
        $('.paginacion li:nth-child('+imgPos+')').css({'color': 'rgba(255, 255, 255, .5)'});

        $('.slider li').hide();
        $('.slider li:nth-child('+imgPos+')').fadeIn();
    }

    function prevSlider(){
        if (imgPos <= 1 ) {
            imgPos = imgItems;
        }else{
            imgPos--;
        }
        // imgPos++;
        // console.log(imgPos);
        $('.paginacion li').css({'color': 'rgba(0, 0, 0, .5)'});
        $('.paginacion li:nth-child('+imgPos+')').css({'color': 'rgba(255, 255, 255, .5)'});

        $('.slider li').hide();
        $('.slider li:nth-child('+imgPos+')').fadeIn();
    }

});////////////// aqui termina las funciones slider 


function accion(){
    console.log("Esta funcionando mi boton");
    var menu  = document.getElementsByClassName('subMenu');
    var ancla = document.getElementsByClassName('nav-enlace');
    for (var i = 0; i < ancla.length; i++) {
        ancla[i].classList.toggle('desaparece');
    }
    
    for (var i = 0; i < menu.length; i++) {
        menu[i].classList.toggle('menu2');
    }
    
}

