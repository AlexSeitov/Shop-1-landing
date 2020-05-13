$(function() {

    // set background-image

    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    // owlcarousel

    $('.mainblock-slider').owlCarousel({
        loop:true,
        dots:false,
        nav:true,
        items: 1,
        autoplay:true,
        autoplaySpeed: 2000,
        autoplayTimeout:5000
    });

    $('.content-slider').owlCarousel({
        loop:true,
        dots:false,
        nav:true,
        autoplay:true,
        autoplaySpeed: 2000,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1,
           
            },
            576:{
                items:2,
             
            },
            768:{
                items:3,
            },
            992:{
                items:4,
            }
        }
   
    });  

    // show search-input

    $('.search__icon-wrap').on("click", function() {
        $('.search__form-wrap').toggleClass('search__form-wrap--active');
    })


    // Mobile menu

    $(".header-top__menu-toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("header-top__menu-toggle--active");
        $(".header-nav").toggleClass("header-nav--active");
    });

});