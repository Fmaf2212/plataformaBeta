//BEGIN VIDEOS DE LOS SOCIOS DESTACADOS
$(document).ready(function () {

    $('.btn-vertical-slider').on('click', function () {

        if ($(this).attr('data-slide') == 'next') {
            $('#myCarousel').carousel('next');
        }
        if ($(this).attr('data-slide') == 'prev') {
            $('#myCarousel').carousel('prev')
        }

    });
});
//END VIDEOS DE SOCIOS


let i = 2;


$(document).ready(function () {

    $(function () {
        function obtenerAncho(obj, ancho) {
            $("#anvent").text("El ancho de la " + obj + " es " + ancho + "px. (Width)");
        }

        function obtenerAlto(obj, alto) {
            $("#alvent").text("El alto de la " + obj + " es " + alto + "px. (Height)");
        }
        obtenerAlto("ventana", $(window).height());
        obtenerAncho("ventana", $(window).width());
        $(window).resize(function () {


            obtenerAlto("ventana", $(window).height());
            obtenerAncho("ventana", $(window).width());
        });
    });

    var radius = 200;
    var fields = $('.itemDot');
    var container = $('.dotCircle');
    var width = container.width();

    radius = width / 2.4;

    var height = container.height();
    var angle = 0, step = (2 * Math.PI) / fields.length;
    fields.each(function () {
        var x = Math.round(width / 2 + radius * Math.cos(angle) - $(this).width() / 2);
        var y = Math.round(height / 2 + radius * Math.sin(angle) - $(this).height() / 2);
        if (window.console) {
            //console.log($(this).text(), x, y);
        }

        $(this).css({
            left: x + 'px',
            top: y + 'px'
        });
        //console.log("VALOR DE X: " + x);
        //console.log("VALOR DE Y: " + y);
        angle += step;
    });

    $(window).resize(function () {
        if ($(window).width() < 768) {
            var radius = 200;
            var fields = $('.itemDot');
            var container = $('.dotCircle');
            var width = container.width();

            radius = width / 2.3;

            var height = container.height();
            var angle = 0, step = (2 * Math.PI) / fields.length;
            fields.each(function () {
                var x = Math.round(width / 2 + radius * Math.cos(angle) - $(this).width() / 2);
                var y = Math.round(height / 2 + radius * Math.sin(angle) - $(this).height() / 2);
                if (window.console) {
                    //console.log($(this).text(), x, y);
                }

                $(this).css({
                    left: x + 'px',
                    top: y + 'px'
                });
                //console.log("VALOR DE X: " + x);
                //console.log("VALOR DE Y: " + y);
                angle += step;
            });
        }

        if ($(window).width() >= 768) {
            var radius = 200;
            var fields = $('.itemDot');
            var container = $('.dotCircle');
            var width = container.width();

            radius = width / 2.3;

            var height = container.height();
            var angle = 0, step = (2 * Math.PI) / fields.length;
            fields.each(function () {
                var x = Math.round(width / 2 + radius * Math.cos(angle) - $(this).width() / 2);
                var y = Math.round(height / 2 + radius * Math.sin(angle) - $(this).height() / 2);
                if (window.console) {
                    //console.log($(this).text(), x, y);
                }

                $(this).css({
                    left: x + 'px',
                    top: y + 'px'
                });
                //console.log("VALOR DE X: " + x);
                //console.log("VALOR DE Y: " + y);
                angle += step;
            });
        }
    });


    $('.itemDot').click(function () {

        var dataTab = $(this).data("tab");
        $('.itemDot').removeClass('active');
        $(this).addClass('active');
        $('.CirItem').removeClass('active');
        $('.CirItem' + dataTab).addClass('active');
        i = dataTab;

        $('.dotCircle').css({
            "transform": "rotate(" + (360 - (i - 1) * 36) + "deg)",
            "transition": "2s"
        });
        $('.itemDot').css({
            "transform": "rotate(" + ((i - 1) * 36) + "deg)",
            "transition": "1s"
        });


    });

    setInterval(function () {
        var dataTab = $('.itemDot.active').data("tab");
        if (dataTab > 6 || i > 6) {
            dataTab = 1;
            i = 1;
        }
        $('.itemDot').removeClass('active');
        $('[data-tab="' + i + '"]').addClass('active');
        $('.CirItem').removeClass('active');
        $('.CirItem' + i).addClass('active');
        i++;


        $('.dotCircle').css({
            "transform": "rotate(" + (360 - (i - 2) * 36) + "deg)",
            "transition": "2s"
        });
        $('.itemDot').css({
            "transform": "rotate(" + ((i - 2) * 36) + "deg)",
            "transition": "1s"
        });

    }, 5000);

});
