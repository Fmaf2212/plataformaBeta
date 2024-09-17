//DEFINIR VARIABLES
var tabla, aaf, data, estados, filtrado = 0, periodo = 0, listaDetalles;

$.ajax({
    type: "POST",
    url: "Bonificaciones.aspx/ComboPeriodoComision",
    data: "{}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    async: false,
    success: function (result) {
        $("#cboPeriodo").empty();
        $("#cboPeriodo").append("<option value='0'>--Select--</option>");
        $.each(result.d, function (key, value) {
            $("#cboPeriodo").append($("<option></option>").val(value.idPeriodo).html(value.nombrePeriodo));
        });
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus + ": " + XMLHttpRequest.responseText);
    }
});

//FUNCIONES PARA LISTAR
$("#btnFiltrar").click(function (e) {
    e.preventDefault();
    filtrado = 1;
    if ($("#cboPeriodo").val() = 0) {
        SeleccionesPeriodo();
    }
    else {
        periodo = $("#cboPeriodo").val();
        sendDataAjax();
    }
}); 

function sendDataAjax() {
    if (filtrado = 0) { periodo = 0; }
    var obj = JSON.stringify({
        periodoS: periodo
    });
    $.ajax({
        type: "POST",
        url: "ListaSociosFacturacionPendiente.aspx/ListaSociosPendientes",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (dataS) {
            console.log(dataS.d);
            addRowDT(dataS.d);
        }
    });
}

function addRowDT(obj) {
    tabla = $("#tbl_lista").DataTable();
    tabla.fnClearTable();
    for (var i = 0; i < obj.length; i++) {
        tabla.fnAddData([
            obj[i].IdCliente,
            obj[i].DniCliente,
            obj[i].Nombres,
            obj[i].Celular,
            obj[i].Correo,
            '<button value="red" title="red" class="btn btn-success btn-red"><i class="fa fa-network-wired"></i></button>',
            obj[i].IdPeriodo
        ]);
    }
}

//FUNCIONES PARA LINEA MULTINIVEL
$(document).on('click', '.btn-red', function (e) {
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    data = tabla.fnGetData(row);
    const baseUrl = 'https://tienda.mundosantanatura.com/LineaMultinivelControlAbono.aspx?';
    const query = 'idcliente=' + data[0] + '&idperiodo=' + data[6];
    const encodedQuery = encodeURIComponent(query);
    const url = baseUrl + encodedQuery;
    window.open(url, '_blank');
});

function SeleccionesPeriodo() {
    Swal.fire({
        icon: 'error',
        title: 'Ooops...!',
        text: 'Debe seleccionar un periodo'
    });
}

sendDataAjax();