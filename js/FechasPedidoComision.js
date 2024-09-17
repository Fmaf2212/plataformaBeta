var tabla;
sendDataAjax();

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "FechasPedidoComisionCDR.aspx/ListaFechasPedidoComisionCDR",
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
    $('.daterange').each(function () {
        $(this).removeClass('hasdaterange').daterangepicker();
    });
    tabla = $("#tbl_Fechas").DataTable();
    tabla.fnClearTable();
    for (var i = 0; i < obj.length; i++) {
        tabla.fnAddData([
            obj[i].ID_Pedido,
            '<input type="text" id="cantFI' + obj[i].ID_Pedido + '" name="" class="form-control daterange" value="' + obj[i].FechaInicio + '">',
            '<input type="text" id="cantFF' + obj[i].ID_Pedido + '" name="" class="form-control daterange" value="' + obj[i].FechaFin + '">',
            '<button id="btnUpdateFechas" value="UpdateF" title="UpdateF" type="button" class="btn btn-success btn-updt"><i class="fas fa-sync-alt"></i></button>'
        ]);
        $('.daterange').daterangepicker({
            singleDatePicker: true,
            showDropdowns: true,
            locale: { format: "DD/MM/YYYY" },
            autoApply: true
        });
    }
}

$(document).on('click', '.btn-updt', function (e) {
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    var datax = tabla.fnGetData(row);
    var fechaInicio = $("#cantFI" + datax[0] + "").val();
    var fechaFin = $("#cantFF" + datax[0] + "").val();
    ActualizarEstadoDia(datax[0], fechaInicio, fechaFin);
});

function ActualizarEstadoDia(idPedido, fechaInicio, fechaFin) {

    var obj = JSON.stringify({ idPedidoS: idPedido, fechaInicioS: fechaInicio, fechaFinS: fechaFin });
    $.ajax({
        type: "POST",
        url: "FechasPedidoComisionCDR.aspx/ActualizarFechasPedidoComision",
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
        text: 'Fechas Actualizadas',
        type: "success"
    }).then(function () {
    });
}