var datax;
sendDataAjax();

$("#btnModals").click(function (e) {
    e.preventDefault();

    $('#exampleModal').modal('show');
    $('#btnRegistrar').show();
    $('#btnActualizar').hide();
    $("#exampleModal input").val("");
    $("#exampleModal textarea").val("");
});

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "ValidacionMontosYW.aspx/ListaMontoValidacion_YW",
        data: {},
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            addRowDT(data.d);
        }
    });
}

function addRowDT(obj) {
    tabla = $("#tbl_cdr").DataTable();
    tabla.fnClearTable();
    for (var i = 0; i < obj.length; i++) {
        tabla.fnAddData([
            obj[i].Id,
            obj[i].Monto,
            obj[i].Descripcion,
            '<button type="button" class="btn btn-primary btn-updt" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-search"></i></button>'
        ]);
    }
}

$(document).on('click', '.btn-updt', function (e) {
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    datax = tabla.fnGetData(row);
    RellenarInfo(datax[1], datax[2]);
});

function RellenarInfo(monto, descripcion) {
    $("#exampleModal input").val("");
    $("#exampleModal textarea").val("");
    $("#txtMonto").val(monto);
    $("#txtDescripcion").val(descripcion);
    $('#btnActualizar').show();
    $('#btnRegistrar').hide();
}

$("#btnRegistrar").click(function (e) {
    e.preventDefault();
    var monto = $("#txtMonto").val();
    var desc = $("#txtDescripcion").val();

    if (monto != "" && desc != "") {
        RegistroValidacion();
    } else {
        FaltanDatos();
    }
});

function RegistroValidacion() {

    var monto = $("#txtMonto").val();
    var desc = $("#txtDescripcion").val();

    var obj = JSON.stringify({ monto: monto, descripcion: desc });
    $.ajax({
        type: "POST",
        url: "ValidacionMontosYW.aspx/Registro_Monto_Validacion_YW",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data4) {
            RegistroCorrecto();
        }
    });
}

$("#btnActualizar").click(function (e) {
    e.preventDefault();
    var monto = $("#txtMonto").val();
    var desc = $("#txtDescripcion").val();

    if (monto != "" && desc != "") {
        ActualizarValidacion();
    } else {
        FaltanDatos();
    }
});

function ActualizarValidacion() {

    var monto = $("#txtMonto").val();
    var desc = $("#txtDescripcion").val();

    var obj = JSON.stringify({ id: datax[0], monto: monto, descripcion: desc });
    $.ajax({
        type: "POST",
        url: "ValidacionMontosYW.aspx/Actualizar_Monto_Validacion_YW",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data4) {
            ActualizarCorrecto();
        }
    });
}

function FaltanDatos() {

    Swal.fire({
        title: 'Ooops...!',
        text: 'Debe rellenar toda la información',
        type: "error"
    });
}
function RegistroCorrecto() {
    Swal.fire({
        title: 'Perfecto!',
        text: 'Validación registrada',
        type: "success"
    }).then(function () {
        sendDataAjax();
    });
}
function ActualizarCorrecto() {
    Swal.fire({
        title: 'Perfecto!',
        text: 'Actualización registrada',
        type: "success"
    }).then(function () {
        sendDataAjax();
    });
}