var mivalor = $("#ComboTienda").val();
if (mivalor != "") {
    if (screen.width < 499) {
        //console.log("fernandoputo");
        //$('.add_cart_btn').on('click', function (n) {
        $('.agregarAlCarrito').on('click', function (n) {


            //Scroll to top if cart icon is hidden on top
            $('html, body').animate({
                'scrollTop': $(".cart_anchor").position().top
            });

            //Select item image and pass to the function
            var itemImg = $(this).parent().find('img').eq(0);
            flyToElement($(itemImg), $('.cart_anchor'));

            //BloqueImagenProducto = $('#bloqueImagenProducto');
            //BloqueImagenProducto.addClass(' -opacity');


        });
    }
    else if (screen.width > 499) {
        //console.log("fernandoputo");
        //$('.add_cart_btn').on('click', function (n) {
        $('.agregarAlCarrito').on('click', function (n) {


            //Scroll to top if cart icon is hidden on top
            $('html, body').animate({
                'scrollTop': $("#MostrarSoloLogueado2").position().top
            });

            //Select item image and pass to the function
            var itemImg = $(this).parent().find('img').eq(0);
            flyToElement($(itemImg), $('#MostrarSoloLogueado2'));

            //BloqueImagenProducto = $('#bloqueImagenProducto');
            //BloqueImagenProducto.addClass(' -opacity');


        });
    }
}
console.log("este es mi valor: " + mivalor);