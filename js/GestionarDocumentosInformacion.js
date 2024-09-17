//DEFINIR VARIABLES
var tabla, aaf, data, estados, eliminar = 0;

$.ajax({
    type: "POST",
    url: "SociosRed.aspx/GetPais",
    data: "{}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    async: false,
    success: function (result) {
        $("#cboPais").empty();
        $.each(result.d, function (key, value) {
            $("#cboPais").append($("<option></option>").val(value.Codigo).html(value.Nombre));
        });
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus + ": " + XMLHttpRequest.responseText);
    }
});

//LISTADO DE PUBLICACIONES
function addRowDT(obj) {
    tabla = $("#tbl_archivo").DataTable();
    tabla.fnClearTable();

    for (var i = 0; i < obj.length; i++) {

        tabla.fnAddData([
            obj[i].ID_DATOS,
            obj[i].Nombre,
            obj[i].TipoArchivo,
            obj[i].Archivo,
            obj[i].Pais,
            '<button value="Actualizar" title="Actualizar" class="btn btn-primary btn-update" data-toggle="modal" data-target="#exampleModal"><i class="far fa-edit"></i></button>',
            '<button value="Eliminar" title="Eliminar" class="btn btn-danger btn-delete"><i class="far fa-minus-square"></i></button>',
            obj[i].CodigoClass,
            obj[i].CodPais
        ]);
    }
}

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "GestionarDocumentosInformacion.aspx/ListarDocumentosInformacion",
        data: {},
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (dataL) {
            addRowDT(dataL.d);
        }
    });
}

// ABRIR MODAL
$("#btnNuevoArchivo").click(function (e) {
    $("#btnRegistrar").show();
    $("#btnActualizar").hide();
    $("#exampleModal input").val("");
    $("#exampleModal select").val("");
    $('.file-upload').file_upload();
    $('.file-upload-text').text("Ingrese el archivo ...");
});

//FUNCIONES PARA REGISTRAR
$("#btnRegistrar").click(function (e) {
    e.preventDefault();
    GuardarImagen();
});

function GuardarImagen() {
    var archivo, files, dataPDF;
    dataPDF = new FormData();
    archivo = $("#archivoDoc").get(0);
    files = archivo.files;
    dataPDF.append(files[0].name, files[0]);
    dataPDF.append("archivo", "documento");


    $.ajax({
        url: "FileUpload.ashx",
        type: "POST",
        data: dataPDF,
        contentType: false,
        processData: false,
        success: function (result) {
            if (result == "") {
                RegistrarDataArchivo();
            } else {
                CambiarNombreArchivo();
            }
        },
        error: function (err) {
            alert(err.statusText)
        }
    });
}

function RegistrarDataArchivo() {
    var nombre, archivo, tipoArchivo, codigo, pais;
    nombre = $("#txtNombre").val();
    tipoArchivo = $("#cboTipoArchivo option:selected").text();
    codigo = $("#cboTipoArchivo").val();
    pais = $("#cboPais").val();
    archivo = document.getElementById('archivoDoc').files[0].name;

    var obja = JSON.stringify({
        nombreS: nombre, archivoS: archivo, tipoArchivoS: tipoArchivo,
        codigoS: codigo, paisS: pais
    });

    $.ajax({
        type: "POST",
        url: "GestionarDocumentosInformacion.aspx/RegistroDocumentosInformacion",
        data: obja,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            alertme();
        }
    });
}

//FUNCIONES PARA ACTUALIZAR
$(document).on('click', '.btn-update', function (e) {
    $("#btnRegistrar").hide();
    $("#btnActualizar").show();
    $('.file-upload').file_upload();
    $("#archivoDoc").val("");
    $('.file-upload-text').text("Ingrese el archivo ...");
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    data = tabla.fnGetData(row);
    console.log(data);
    fillModalData();
});

function fillModalData() {

    $("#txtNombre").val(data[1]);
    $("#cboPais").val(data[8]);
    document.getElementById("cboTipoArchivo").value = data[7];
}

$("#btnActualizar").click(function (e) {
    e.preventDefault();
    var valida = document.getElementById('archivoDoc').files.length;
    if (valida > 0) {
        UpdateFile();
    } else {
        updateDataAjax();
    }
});

function UpdateFile() {
    var fileUpload = $("#archivoDoc").get(0);
    var files = fileUpload.files;

    var dataPDF = new FormData();
    dataPDF.append(files[0].name, files[0]);
    dataPDF.append("archivo", "documento");

    $.ajax({
        url: "FileUpload.ashx",
        type: "POST",
        data: dataPDF,
        contentType: false,
        processData: false,
        success: function (result) {
            if (result == "") {
                DeleteFile();
            } else {
                CambiarNombreArchivo();
            }
        },
        error: function (err) {
            alert(err.statusText)
        }
    });
}

function DeleteFile() {

    var obj = JSON.stringify({ archivo: data[2] });

    $.ajax({
        url: "GestionarDocumentosInformacion.aspx/EliminarArchivo",
        type: "POST",
        data: obj,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            console.log(response);
            if (eliminar == 0) { updateDataAjax(); }
            else { EliminarDocumento(); }
        }
    });
}

function updateDataAjax() {

    var nombre, id, archivo, valida, tipoArchivo, codigo, pais;

    pais = $("#cboPais").val();
    nombre = $("#txtNombre").val();
    valida = document.getElementById('archivoDoc').files.length;
    codigo = $("#cboTipoArchivo").val();
    tipoArchivo = $("#cboTipoArchivo option:selected").text();
    if (valida > 0) { archivo = document.getElementById('archivoDoc').files[0].name; }
    else { archivo = data[3] }
    id = data[0];

    var obj = JSON.stringify({
        nombreS: nombre, archivoS: archivo, tipoArchivoS: tipoArchivo, codigoS: codigo,
        IdS: id, paisS: pais
    });

    $.ajax({
        type: "POST",
        url: "GestionarDocumentosInformacion.aspx/ActualizarDocumentosInformacion",
        data: obj,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            actualizado();
        }
    });
}

//FUNCIONES PARA ELIMINAR

$(document).on('click', '.btn-delete', function (e) {
    e.preventDefault();
    eliminar = 1;
    var row = $(this).parent().parent()[0];
    data = tabla.fnGetData(row);
    DeleteFile();
});

function EliminarDocumento() {

    var id = data[0];

    var obj = JSON.stringify({
        idS: id, archivoS: data[3]
    });

    $.ajax({
        type: "POST",
        url: "GestionarDocumentosInformacion.aspx/EliminarDocumentosInformacion",
        data: obj,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            console.log(response);
            eliminar = 0;
            eliminado();
        }
    });
}


//ALERTAS
function alertme() {
    Swal.fire({
        title: 'Perfecto!',
        text: 'Archivo Registrado',
        type: "success"
    }).then(function () {
        $('#btnCancelar').click();
        $('.modal-backdrop').remove();
        sendDataAjax();
    });
}
function actualizado() {
    Swal.fire({
        title: 'Perfecto!',
        text: 'Archivo Actualizado',
        type: "success"
    }).then(function () {
        $('#btnCancelar').click();
        $('.modal-backdrop').remove();
        sendDataAjax();
    });
}
function eliminado() {
    Swal.fire({
        title: 'Perfecto!',
        text: 'Archivo Eliminado',
        type: "success"
    }).then(function () {
        sendDataAjax();
    });
}
function CambiarNombreArchivo() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'El nombre del archivo ya existe',
        type: "error"
    });
}

sendDataAjax();