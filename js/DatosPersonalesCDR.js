var tabla, check;
sendDataAjax();
$("#btnActualizar").hide();

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "DatosPersonalesCDR.aspx/ListarDatosPersonalesCDR",
        data: {},
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            console.log(data.d);
            addDataForm(data.d);
        }
    });
}

function addDataForm(obj) {
    $("#txtDocumento").val(obj[0].Documento);
    $("#txtNombres").val(obj[0].Nombres);
    $("#txtApPaterno").val(obj[0].ApellidoPat);
    $("#txtApMaterno").val(obj[0].ApellidoMat);
    $("#txtApodo").val(obj[0].Apodo);
    $("#txtDocExtorno").val(obj[0].DocExtorno);
    $("#txtRazonExtorno").val(obj[0].RazonExtorno);
    $("#txtDireccionExtorno").val(obj[0].DirExtorno);
}

$("#btnActualizar").click(function (e) {
    e.preventDefault();
    //InicioDatosCDR();
    var documento = $("#txtDocumento").val();
    if ($("#txtDocumento").val() != "" && documento.match(/^\d+$/)) {
        ActualizarDatosPersonales();
    } else {
        DocumentoErroneo();
    }
});

function ActualizarDatosPersonales() {

    var obj = JSON.stringify({
        NombreS: $("#txtNombres").val(), ApellidoPatS: $("#txtApPaterno").val(),
        ApellidoMatS: $("#txtApMaterno").val(), documentoS: $("#txtDocumento").val(),
        docExtorno: $("#txtDocExtorno").val(), razonExtorno: $("#txtRazonExtorno").val(),
        dirExtorno: $("#txtDireccionExtorno").val()
    });
    $.ajax({
        type: "POST",
        url: "DatosPersonalesCDR.aspx/ActualizarDatosCDR",
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

function InicioDatosCDR() {
    $.ajax({
        type: "POST",
        url: "DatosPersonalesCDR.aspx/RegistroAutomaticoDatosCDR",
        data: "{}",
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
        text: 'Datos Personales Actualizados',
        type: "success"
    }).then(function () {
    });
}

function DocumentoErroneo() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'El DNI no tiene el formato correcto',
        type: "error"
    });
}