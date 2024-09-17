// Sticky Header
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".top-nav").addClass("light-header");
        $('#navbarsupportedcontent').addClass(' navBar');
    } else {
        $(".top-nav").removeClass("light-header");
        $('#navbarsupportedcontent').removeClass('navBar');
    }
});


