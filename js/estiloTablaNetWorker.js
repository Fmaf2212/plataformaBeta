; (function ($) {
    "use strict";

    /*----------------------------------------------------*/
    /*  Explor Room Slider
    /*----------------------------------------------------*/
    function l_datosNetWorker_slider() {
        if ($('.l_datosNetWorker_slider').length) {
            $('.l_datosNetWorker_slider').owlCarousel({
                loop: true,
                margin: 30,
                items: 4,
                nav: true,
                autoplay: true,
                smartSpeed: 1500,
                dots: false,
                navContainerClass: 'l_datosNetWorker_slider',
                navText: ['<i class="arrow_carrot-left" aria-hidden="true"></i>', '<i class="arrow_carrot-right" aria-hidden="true"></i>'],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    575: {
                        items: 2,
                    },
                    992: {
                        items: 3,
                    },
                    1200: {
                        items: 4,
                    }
                }
            })
        }
    }
    l_datosNetWorker_slider();


})(jQuery)

