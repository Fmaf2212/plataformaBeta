var filtro = 0;

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

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "PremioSocios.aspx/ListaGanadoresPremio",
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

function sendDataAjaxCompresion() {
    $.ajax({
        type: "POST",
        url: "PremioSocios.aspx/ListaSociosCompresion",
        data: {},
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            console.log(data.d);
            addRowDTCompresion(data.d);
        }
    });
}

function sendDataAjaxFiltro(periodo) {

    var obj = JSON.stringify({ IDPPuntos: periodo });

    $.ajax({
        type: "POST",
        url: "PremioSocios.aspx/ListaGanadoresPremioFiltro",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            console.log(data.d);
            $("#example2 tbody tr").remove();
            addRowDT(data.d);
        }
    });
}

function addRowDT(obj) {
    $('#page_loader').show();
    for (var i = 0; i < obj.length; i++) {
        tabla = $("#example2").dataTable();
        tabla.fnAddData([
            obj[i].dni,
            obj[i].NombreSocio,
            obj[i].Celular,
            obj[i].Premio,
            obj[i].CDR

        ]);
    }
    $('#page_loader').hide();
    
}

function addRowDTCompresion(obj) {
    $('#page_loader').show();
    for (var i = 0; i < obj.length; i++) {
        tabla = $("#example1").dataTable();
        tabla.fnAddData([
            obj[i].dni,
            obj[i].NombreSocio,
            obj[i].Celular

        ]);
    }
    $('#page_loader').hide();
}

$("#btnObtenerPeriodo").click(function (e) {
    e.preventDefault();
    $('#page_loader').show();
    var periodo = $("#ddlPeriodo").val();
    filtro = 1;

    if (periodo == "0") {
        FaltaPeriodo();
    } else {
        sendDataAjaxFiltro(periodo);
    }

});

if (filtro == 0) {
    $('#page_loader').show();
    sendDataAjax();
    sendDataAjaxCompresion();
   
}

function FaltaPeriodo() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No seleccionó el Periodo',
        type: "error"
    }).then(function () {
    });
}