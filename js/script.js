(function($){
    var typed = new Typed('span.txt-rotate', {
        strings: ["I'm a Web Developer", "I'm a Wordpress Developer", "I'm a Graphic Designer"],
        typeSpeed: 100,
        backSpeed: 100,
        fadeOut: false,
        smartBackspace: true,
        loop: true
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay : true,
        margin: 10,
        nav: false,
        dots: true,
        items: 2,
        autoWidth: false,
        center: false,
        mergeFit: true,
        responsive : {
            0: {
                items: 1,
                nav: false,
                loop: true,
            },
            576: {
                items: 1,
                loop: true,
                nav: false
            },
            768: {
                items: 2,
                loop: true,
                nav: false
            }
        }
    })

})(jQuery);

$(document).ready(function() {
    $('.projects-wrapper').isotope({
        filter: '*',
        layoutMode: 'masonry'
    });

    $('.list-filter a').click(function() {
        var selector = $(this).attr('data-filter');
        $('.list-filter a').removeClass('active');
        $(this).addClass('active');
        $('.projects-wrapper').isotope({
            filter: selector
        });
        return false;
    });

    $('.popup-image').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        gallery: {
            enabled: true,
            navigateByImgClick: true
        }
    });

});