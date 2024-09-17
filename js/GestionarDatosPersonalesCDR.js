//DEFINIR VARIABLES
var tabla, aaf, data, estados;
//LISTADO DE PUBLICACIONES
function addRowDT(obj) {
    tabla = $("#tbl_cdr").DataTable();
    tabla.fnClearTable();

    for (var i = 0; i < obj.length; i++) {

        tabla.fnAddData([
            obj[i].IdDatos,
            obj[i].DniCDR,
            obj[i].Apodo,
            '<button value="Actualizar" title="Actualizar" class="btn btn-primary btn-update" data-toggle="modal" data-target="#exampleModal"><i class="far fa-edit"></i></button>',
            obj[i].Nombres,
            obj[i].ApellidoPat,
            obj[i].ApellidoMat,
            obj[i].Documento,
            obj[i].DocExtorno,
            obj[i].RazonExtorno,
            obj[i].DirExtorno
        ]);
    }
}

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "GestionarDatosPersonalesCDR.aspx/ListarDatosCDR",
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

//FUNCIONES PARA ACTUALIZAR
$(document).on('click', '.btn-update', function (e) {
    $("#btnActualizar").show();
    $("#exampleModal input").val("");
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    data = tabla.fnGetData(row);
    fillModalData();
});

function fillModalData()
{
    $("#txtDocumento").val(data[7]);
    $("#txtNombres").val(data[4]);
    $("#txtApellidoPat").val(data[5]);
    $("#txtApellidoMat").val(data[6]);
    $("#txtDocumentoExt").val(data[8]);
    $("#txtRazonExt").val(data[9]);
    $("#txtDireccionExt").val(data[10]);
}

$("#btnActualizar").click(function (e) {
    e.preventDefault();
    UpdateDatos();
});

function UpdateDatos() {

    var documento, nombres, apellidoPat, apellidoMat, documentoExt, razonExt, direccionExt, idDatos;

    documento = $("#txtDocumento").val();
    nombres = $("#txtNombres").val();
    apellidoPat = $("#txtApellidoPat").val();
    apellidoMat = $("#txtApellidoMat").val();
    documentoExt = $("#txtDocumentoExt").val();
    razonExt = $("#txtRazonExt").val();
    direccionExt = $("#txtDireccionExt").val();
    idDatos = data[0];

    var obj = JSON.stringify({
        NombreS: nombres, ApellidoPatS: apellidoPat, ApellidoMatS: apellidoMat, documentoS: documento,
        docExtorno: documentoExt, razonExtorno: razonExt, dirExtorno: direccionExt, idDatos: idDatos
    });

    $.ajax({
        type: "POST",
        url: "GestionarDatosPersonalesCDR.aspx/ActualizarDatosPersonalesCDR",
        data: obj,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            console.log(response);
            actualizado();
        }
    });
}


//ALERTAS

function actualizado() {
    Swal.fire({
        title: 'Perfecto!',
        text: 'Datos Actualizados',
        type: "success"
    }).then(function () {
        $('#btnCancelar').click();
        $('.modal-backdrop').remove();
        sendDataAjax();
    });
}

sendDataAjax();