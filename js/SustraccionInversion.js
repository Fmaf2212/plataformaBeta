$.ajax({
    type: "POST",
    url: "GestionarStock.aspx/ListadoCDRCombo",
    data: "{}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    async: false,
    success: function (result) {
        $("#cboCDR").empty();
        $("#cboCDR").append("<option value='0'>--Select--</option>");
        $.each(result.d, function (key, value) {
            $("#cboCDR").append($("<option></option>").val(value.DNICDR).html(value.CDRPS));
        });
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus + ": " + XMLHttpRequest.responseText);
    }
});

var datax;
sendDataAjax();

$("#btnModals").click(function (e) {
    e.preventDefault();
    var combo = $("#cboCDR").val();
    if (combo == "0") {
        $('#exampleModal').modal('hide');
        SeleccionaCDR();
    }
    else {
        $('#exampleModal').modal('show');
        $('#btnRegistrar').show();
        $('#btnActualizar').hide();
        $("#exampleModal input").val("");
        $("#exampleModal textarea").val("");
        var comboCDR = $("#cboCDR option:selected").text();
        $("#txtCDR").val(comboCDR);
        sendDataAjaxRegistrar();
    }
});

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "SustraccionInversion.aspx/ListaSustraccionInversion",
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
            obj[i].ID_sustraccion,
            obj[i].Apodo,
            obj[i].Fecha,
            obj[i].Sustraccion,
            '<button type="button" class="btn btn-primary btn-deta" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-search"></i></button>',
            obj[i].Observacion
        ]);
    }
}

$(document).on('click', '.btn-deta', function (e) {
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    datax = tabla.fnGetData(row);
    RellenarInfo(datax[1], datax[3], datax[5]);
});

function RellenarInfo(apodo, monto, obser) {
    $("#exampleModal input").val("");
    $("#exampleModal textarea").val("");
    $("#txtCDR").val(apodo);
    $("#txtMonto").val(monto);
    $("#txtObservacion").val(obser);
    $('#btnActualizar').show();
    $('#btnRegistrar').hide();
}

$("#btnRegistrar").click(function (e) {
    e.preventDefault();
    var monto = $("#txtMonto").val();
    var obser = $("#txtObservacion").val();

    if (monto != "" && obser != "") {
        RegistroSustraccion();
    } else {
        FaltanDatos();
    }
});

function RegistroSustraccion() {

    var monto = $("#txtMonto").val();
    var obser = $("#txtObservacion").val();
    var dniCDR = $("#cboCDR option:selected").val();

    var obj = JSON.stringify({ dniCDR: dniCDR, Monto: monto, observacion: obser });
    $.ajax({
        type: "POST",
        url: "SustraccionInversion.aspx/RegistroSustraccionInversion",
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
    var obser = $("#txtObservacion").val();

    if (monto != "" && obser != "") {
        ActualizarSustraccion();
    } else {
        FaltanDatos();
    }
});

function ActualizarSustraccion() {

    var monto = $("#txtMonto").val();
    var obser = $("#txtObservacion").val();

    var obj = JSON.stringify({ idSus: datax[0], Monto: monto, observacion: obser });
    $.ajax({
        type: "POST",
        url: "SustraccionInversion.aspx/ActualizarSustraccionInversion",
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

function SeleccionaCDR() {

    Swal.fire({
        title: 'Ooops...!',
        text: 'Debe seleccionar un CDR',
        type: "error"
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
        text: 'Sustraccion registrada',
        type: "success"
    }).then(function () {
        window.location = "SustraccionInversion.aspx";
    });
}
function ActualizarCorrecto() {
    Swal.fire({
        title: 'Perfecto!',
        text: 'Actualización registrada',
        type: "success"
    }).then(function () {
        window.location = "SustraccionInversion.aspx";
    });
}