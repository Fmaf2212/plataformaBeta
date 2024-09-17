//DEFINIR VARIABLES
var tabla;
sendDataAjax();

//LISTADO
function addRowDT(obj) {
    tabla = $("#tbl_serie").DataTable();
    tabla.fnClearTable();

    for (var i = 0; i < obj.length; i++) {
        tabla.fnAddData([
            obj[i].IdSerie,
            obj[i].dniCDR,
            obj[i].apodoCDR,
            obj[i].Serie,
            '<button id="Actualizar" value="Actualizar" title="Actualizar" class="btn btn-primary btn-update" data-toggle="modal" data-target="#exampleModal"><i class="far fa-edit"></i></button>'
        ]);
    }
}

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "GestionSerieCDR.aspx/ListaSerieCDR",
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

//CARGAR DATOS EN MODAL
function fillModalData() {

    $("#txtDNICDR").val(data[1]);
    $("#txtApodoCDR").val(data[2]);
    $("#txtSerie").val(data[3]);
}

//FUNCIONES PARA ACTUALIZAR
$(document).on('click', '.btn-update', function (e) {
    $("#btnActualizar").show();
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    data = tabla.fnGetData(row);
    fillModalData();
});

function updateDataAjax() {

    var serie, idSerie;

    serie = $("#txtSerie").val();
    idSerie = data[0];

    var obj = JSON.stringify({
        idSerieSend: idSerie, serieSend: serie
    });

    $.ajax({
        type: "POST",
        url: "GestionSerieCDR.aspx/ActualizarSerieCDR",
        data: obj,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            console.log(response);
            Swal.fire({
                title: 'Perfecto!',
                text: 'Serie Actualizada',
                type: "success"
            }).then(function () {
                window.location = "GestionSerieCDR.aspx";
            });
        }
    });
}

$("#btnActualizar").click(function (e) {
    e.preventDefault();
    updateDataAjax();
});

$("#btnInicioSerie").click(function (e) {
    e.preventDefault();
    GenerarSeriesCDR();
});

function GenerarSeriesCDR() {

    $.ajax({
        type: "POST",
        url: "GestionSerieCDR.aspx/InicioSerieCDR",
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

//ALERTAS
function alertme() {
    Swal.fire({
        title: 'Perfecto!',
        text: 'Periodo Registrado',
        type: "success"
    }).then(function () {
        window.location = "GestionSerieCDR.aspx";
    });
}
function FaltaNombre() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró el Nombre del Periodo',
        type: "error"
    });
}