var tabla;
sendDataAjax();

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "InversionInicialCDR.aspx/ListaInversionInicialCDR",
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
    tabla = $("#tbl_cdr").DataTable();
    tabla.fnClearTable();
    for (var i = 0; i < obj.length; i++) {
        tabla.fnAddData([
            obj[i].IdInversion,
            obj[i].DNICDR,
            obj[i].ApodoCDR,
            obj[i].PSCDR,
            '<input type="text" id="cantA' + obj[i].IdInversion + '" name="" class="form-control" style="background-color: lightgreen; width:90px" value="' + obj[i].Monto + '">',
            obj[i].MontoActual,
            '<button id="btnUpdateInversion" value="UpdateP" title="UpdateP" type="button" class="btn btn-success btn-updt"><i class="fas fa-sync-alt"></i></button>'
        ]);
    }
}

$(document).on('click', '.btn-updt', function (e) {
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    var datax = tabla.fnGetData(row);
    var monto = $("#cantA" + datax[0] + "").val();
    ActualizarInversionInicial(datax[0], monto);
});

function ActualizarInversionInicial(idInversion, monto) {

    var obj = JSON.stringify({ idInversionS: idInversion, montoS: monto });
    $.ajax({
        type: "POST",
        url: "InversionInicialCDR.aspx/ActualizarInversionInicialCDR",
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

$("#btnInicioInversion").click(function (e) {
    e.preventDefault();
    GenerarInicioInversionCDR();
});

function GenerarInicioInversionCDR() {

    $.ajax({
        type: "POST",
        url: "InversionInicialCDR.aspx/InicioInversionInicialCDR",
        data: "{}",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data4) {
            console.log(data4.d);
        }
    });
}

function alertme() {
    Swal.fire({
        title: 'Perfecto!',
        text: 'Inversion Inicial Actualizada',
        type: "success"
    }).then(function () {
    });
}