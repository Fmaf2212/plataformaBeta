function prueba(ddl) {
    var dropdown = ddl.options[ddl.selectedIndex].value;
    if (dropdown == "valor1") {
        //document.getElementById("circle02").hide;
        $("#circle02").hide();
        $("#circulito").text("02");
    }
    else {
        $("#circle02").show();
        $("#circulito").text("03"); }
}

$(".tablaSiguiente").click(function (e) {
    var StipoC = $("#STipoCompra").val();
    if (StipoC == "valor1") {
        var ordenCompletada = document.getElementById("ordenCompletada");
        var elemento = document.getElementById("circle03");
        $("#03ordenCompletada").fadeIn(300);
        $("#02afiliacion").slideUp(0);
        $("01carritoDeCompras").slideUp(0);
        $("#resumenDeLaCompra").slideUp(0);
        $("#tablaCompra").slideUp(0);
        elemento.className += " active"
        ordenCompletada.className += " active"
    } else {
        var afiliacion = document.getElementById("afiliacion");
        var elemento = document.getElementById("circle02");
        $("#tablaCompra").slideUp(0);
        $("#resumenDeLaCompra").slideUp(0);
        $("#02afiliacion").fadeIn(300);
        elemento.className += " active";
        afiliacion.className += " active";
    }

    
});

$(document).ready(function () {
    //deshabilitaRetroceso();


});

function deshabilitaRetroceso() {
    window.location.hash = "no-back-button";
    window.location.hash = "Again-No-back-button" //chrome
    window.onhashchange = function () { window.location.hash = "no-back-button"; }
}