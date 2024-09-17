var tabla, check;
sendDataAjax();

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "DiasPedidoLineaCredito.aspx/ListaDiasPedidoLineaCreditoCDR",
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

function addRowDT(obj) {
    tabla = $("#tbl_dias").DataTable();
    tabla.fnClearTable();
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].Estado == true) { check = 'checked'}
        tabla.fnAddData([
            obj[i].IDDias,
            obj[i].Nombre,
            '<input id="cantA' + obj[i].IDDias + '" type="checkbox" class="form-check-input"' + check +'>',
            '<button id="btnUpdateEstadoDia" value="UpdateE" title="UpdateE" type="button" class="btn btn-success btn-updt"><i class="fas fa-sync-alt"></i></button>'
        ]);
        check = '';
    }
}

$(document).on('click', '.btn-updt', function (e) {
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    var datax = tabla.fnGetData(row);
    var estado = document.getElementById("cantA" + datax[0] + "").checked;
    ActualizarEstadoDia(datax[0], estado);
});

function ActualizarEstadoDia(idDia, estado) {

    var obj = JSON.stringify({ idDiaS: idDia, estadoS: estado });
    $.ajax({
        type: "POST",
        url: "DiasPedidoLineaCredito.aspx/ActualizarEstadoDiasPedidoLC",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data4) {
            console.log(data4.d);
            alertme();
        }
    });
}

function alertme() {
    Swal.fire({
        title: 'Perfecto!',
        text: 'Día Actualizado para el pedido',
        type: "success"
    }).then(function () {
    });
}