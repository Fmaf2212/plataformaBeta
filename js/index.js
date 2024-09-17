mostraRango();
function mostraRango() {
    
    $.ajax({
        type: "POST",
        url: "Index.aspx/Rango",
        data: {},
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data2) {
            console.log(data2.d);
            editarImagen(data2.d);
        }
    });
}

function editarImagen(obj) {
    if (obj == "BRONCE") {
        document.getElementById("rangoS").src = "imagenes/pines/1-Bronce-270x270.png";
    } else if (obj == "PLATA") {
        document.getElementById("rangoS").src = "imagenes/pines/2-Plata-270x270.png";
    } else if (obj == "ORO") {
        document.getElementById("rangoS").src = "imagenes/pines/3-Oro-270x270.png";
    } else if (obj == "ZAFIRO") {
        document.getElementById("rangoS").src = "imagenes/pines/4-Zafiro-270x270.png";
    } else if (obj == "RUBI") {
        document.getElementById("rangoS").src = "imagenes/pines/5-Rubí-270x270.png";
    } else if (obj == "DIAMANTE") {
        document.getElementById("rangoS").src = "imagenes/pines/6-Diamante-270x270.png";
    } else if (obj == "D. DIAMANTE") {
        document.getElementById("rangoS").src = "imagenes/pines/7-DDiamante-270x270.png";
    } else if (obj == "T. DIAMANTE") {
        document.getElementById("rangoS").src = "imagenes/pines/8-TDiamante-270x270.png";
    } else if (obj == "D. MILLONARIO") {
        document.getElementById("rangoS").src = "imagenes/pines/9-DiamanteMillonario-270x270.png";
    } else if (obj == "D.D. MILLONARIO") {
        document.getElementById("rangoS").src = "imagenes/pines/10-DDiamanteMillonario-270x270.png";
    } else if (obj == "T.D. MILLONARIO") {
        document.getElementById("rangoS").src = "imagenes/pines/11-TDiamanteMillonario-270x270.png";
    } else if (obj == "D. IMPERIAL") {
        document.getElementById("rangoS").src = "imagenes/pines/12-DiamanteImperial-270x270.png";
    }
}