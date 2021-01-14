$('.owl-carousel').owlCarousel({
    loop:true, //efeito de loop
    margin:15, //margem entre as caixas
    nav:false, //
    responsive:{ //quantidade de elementos na tela
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})

