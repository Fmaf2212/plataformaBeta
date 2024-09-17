var filtro = 0;

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "Top10.aspx/ListaTop10VQActual",
        data: {},
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            console.log(data.d);
            addRowDT(data.d);
        }
    });
}

function sendDataAjaxFiltro(periodo) {

    var obj = JSON.stringify({ IDPPuntos: periodo });

    $.ajax({
        type: "POST",
        url: "Top10.aspx/ListaTop10VQFiltro",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            console.log(data.d);
            $("#tableTOP10VQ tbody tr").remove();
            addRowDT(data.d);
        }
    });
}

function sendDataAjaxComisiones() {
    $.ajax({
        type: "POST",
        url: "Top10.aspx/ListaTop10ComisionesActual",
        data: {},
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (dataC) {
            console.log(dataC.d);
            addRowDTComisiones(dataC.d);
        }
    });
}

function sendDataAjaxComisionesFiltro(periodo) {
    var obj = JSON.stringify({ IDPPuntos: periodo });

    $.ajax({
        type: "POST",
        url: "Top10.aspx/ListaTop10ComisionesFiltro",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (dataC) {
            console.log(dataC.d);
            $("#tableTOP10COMISIONES tbody tr").remove(); 
            addRowDTComisiones(dataC.d);
        }
    });
}

function addRowDT(obj) {
    var d = '';
    for (var i = 0; i < obj.length; i++) {
         d += '<tr>' +
            '<td>' + obj[i].NombreSocio + '</td>' +
            '<td>' + obj[i].VQ + '</td>' +
            '<td>' + obj[i].RangoDefinido + '</td>' +
            '<td>' + obj[i].Celular + '</td>' +
            '</tr>';
    }
    $("#tableTOP10VQ").append(d);
    $('#page_loader').hide();
}

function addRowDTComisiones(obj) {
    var d = '';
    for (var i = 0; i < obj.length; i++) {
        d += '<tr>' +
            '<td>' + obj[i].NombreSocio + '</td>' +
            '<td>' + obj[i].ComisionTotal + '</td>' +
            '<td>' + obj[i].RangoDefinido + '</td>' +
            '<td>' + obj[i].Celular + '</td>' +
            '</tr>';
    }
    $("#tableTOP10COMISIONES").append(d);
    $('#page_loader').hide();
}

$.ajax({
    type: "POST",
    url: "Bonificaciones.aspx/ComboPeriodoComision",
    data: "{}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    async: false,
    success: function (result) {
        $("#ddlPeriodo").empty();
        $("#ddlPeriodo").append("<option value='0'>--Select--</option>");
        $.each(result.d, function (key, value) {
            $("#ddlPeriodo").append($("<option></option>").val(value.idPeriodo).html(value.nombrePeriodo));
        });
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus + ": " + XMLHttpRequest.responseText);
    }
});

$.ajax({
    type: "POST",
    url: "MapaDeRed.aspx/ListaPeriodos",
    data: "{}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    async: false,
    success: function (result) {
        $("#dllPeriodoVQ").empty();
        $("#dllPeriodoVQ").append("<option value='0'>--Select--</option>");
        $.each(result.d, function (key, value) {
            $("#dllPeriodoVQ").append($("<option></option>").val(value.idPeriodo).html(value.nombre));
        });
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus + ": " + XMLHttpRequest.responseText);
    }
});

$("#btnObtenerPeriodoVQ").click(function (e) {
    e.preventDefault();
    $('#page_loader').show();
    var periodo = $("#dllPeriodoVQ").val();
    filtro = 1;

    if (periodo == "0") {
        FaltaPeriodo();
    } else {
        sendDataAjaxFiltro(periodo);
    }

});

$("#btnObtenerPeriodo").click(function (e) {
    e.preventDefault();
    $('#page_loader').show();
    var periodo = $("#ddlPeriodo").val();
    filtro = 1;

    if (periodo == "0") {
        FaltaPeriodo();
    } else {
        sendDataAjaxComisionesFiltro(periodo);
    }

});

if (filtro == 0) {
    $('#page_loader').show();
    sendDataAjax();
    sendDataAjaxComisiones();
}

function FaltaPeriodo() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No seleccionó el Periodo',
        type: "error"
    }).then(function () {
    });
}
