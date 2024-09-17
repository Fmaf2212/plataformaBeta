var tabla;
tabla = $("#tbl_horas").DataTable();
sendDataAjax();

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "LimiteHoras_YW.aspx/Lista_Horas_Limite_YW",
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
    tabla.fnClearTable();
    for (var i = 0; i < obj.length; i++) {
        tabla.fnAddData([
            obj[i].Id,
            obj[i].NombreYW,
            '<input id="Limite' + obj[i].Id + '" type="text" class="form-control solo-numero" value="' + obj[i].Horas + '">',
            '<button title="UpdateE" type="button" class="btn btn-primary btn-updt"><i class="fas fa-sync-alt"></i></button>',
            '<button title="DeleteE" type="button" class="btn btn-danger btn-dlt"><i class="far fa-minus-square"></i></button>',
        ]);
    }
    $('.solo-numero').numeric();
}

// ABRIR MODAL
$("#btnModals").click(function (e) {
    $("#btnRegistrar").show();
    $("#btnActualizar").hide();
    $("#exampleModal input").val("");
    lstYW();
});

function lstYW() {
    $.ajax({
        type: "POST",
        url: "GestionarStock.aspx/ListadoCDRCombo",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#cboYachaiWasi").empty();
            $("#cboYachaiWasi").append("<option value='0'>--Select--</option>");
            $.each(result.d, function (key, value) {
                $("#cboYachaiWasi").append($("<option></option>").val(value.DNICDR).html(value.CDRPS));
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
}

/*Registrar*/
$("#btnRegistrar").click(function (e) {
    var horas = $("#txtHoras").val();

    e.preventDefault();

    if (horas == "") {
        alertError("Debe rellenar el campo Horas");
    } else {
        RegistroLimite();
    }
});

function RegistroLimite() {

    var obj = {};
    obj['DocumentoYW'] = $("#cboYachaiWasi").val();
    obj['NombreYW'] = $("#cboYachaiWasi option:selected").text();
    obj['Horas'] = $("#txtHoras").val();

    var obja = JSON.stringify({
        obj
    });

    $.ajax({
        type: "POST",
        url: "LimiteHoras_YW.aspx/RegistrarLimite",
        data: obja,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            var msg = response.d;

            if (msg == "OK") {
                $('#btnCancelar').click();
                $('.modal-backdrop').remove();
                alertG("Registro exitoso");
                sendDataAjax();
            } else if (msg == "EXISTE") {
                alertError("No se ha podido registrar, el YW ya tiene registrado un limite de horas");
            } else {
                alertError("Ocurrió un error en el servidor, vuelva a intentar más tarde");
            }
        }
    });
}

/*Actualizar*/
$(document).on('click', '.btn-updt', function (e) {
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    var datax = tabla.fnGetData(row);
    var horas = $("#Limite" + datax[0] + "").val();
    ActualizarLimite(datax[0], horas, datax[1]);
});

function ActualizarLimite(idLimite, horas, nombreYW) {

    var obj = {};
    obj['Id'] = idLimite;
    obj['NombreYW'] = nombreYW;
    obj['Horas'] = horas;


    var objL = JSON.stringify({ obj });
    $.ajax({
        type: "POST",
        url: "LimiteHoras_YW.aspx/ActualizarLimite",
        data: objL,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data4) {
            alertme();
            sendDataAjax();
        }
    });
}

/*Eliminar*/
$(document).on('click', '.btn-dlt', function (e) {
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    var datax = tabla.fnGetData(row);
    var horas = $("#Limite" + datax[0] + "").val();
    EliminarLimite(datax[0], horas, datax[1]);
});

function EliminarLimite(idLimite, horas, nombreYW) {

    var obj = {};
    obj['Id'] = idLimite;
    obj['NombreYW'] = nombreYW;
    obj['Horas'] = horas;


    var objL = JSON.stringify({ obj });
    $.ajax({
        type: "POST",
        url: "LimiteHoras_YW.aspx/EliminarLimite",
        data: objL,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function () {
            alertG("Limite Eliminado");
            sendDataAjax();
        }
    });
}

function alertme() {
    Swal.fire({
        title: 'Perfecto!',
        text: 'Limite actualizado',
        type: "success"
    }).then(function () {
    });
}

function alertG(text) {
    Swal.fire({
        title: 'Perfecto!',
        text: text,
        type: "success"
    }).then(function () {
    });
}

function alertError(text) {
    Swal.fire({
        title: 'Ooooops!',
        text: text,
        type: "error"
    }).then(function () {
    });
}