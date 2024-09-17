var tabla, check;
sendDataAjax();

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "GestionarLimiteSD_CDR.aspx/ListaLimiteSD",
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
    tabla = $("#tbl_Limite").DataTable();
    tabla.fnClearTable();
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].Estado == true) { check = 'checked' }
        tabla.fnAddData([
            obj[i].ID_limite,
            obj[i].DNI_CDR,
            obj[i].Apodo,
            '<input id="cantA' + obj[i].ID_limite + '" type="checkbox" class="form-check-input"' + check + '>',
            '<input id="Limite' + obj[i].ID_limite + '" type="text" class="form-control solo-numero" value="' + obj[i].Limite +'">',
            '<button title="UpdateE" type="button" class="btn btn-success btn-updt"><i class="fas fa-sync-alt"></i></button>'
        ]);
        check = '';
    }
    $('.solo-numero').numeric();
}

$(document).on('click', '.btn-updt', function (e) {
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    var datax = tabla.fnGetData(row);
    var estado = document.getElementById("cantA" + datax[0] + "").checked;
    var limite = $("#Limite" + datax[0] + "").val();
    ActualizarLimite(datax[0], estado, limite);
});

function ActualizarLimite(idLimite, estado, limite) {

    var obj = JSON.stringify({ idLimite: idLimite, estadoS: estado, limite: limite });
    $.ajax({
        type: "POST",
        url: "GestionarLimiteSD_CDR.aspx/ActualizarLimite",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data4) {
            alertme();
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