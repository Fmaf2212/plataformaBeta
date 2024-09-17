//DEFINIR VARIABLES
var tabla, aaf, data, estados;

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
    tabla = $("#tbl_pdf").DataTable();
    tabla.fnClearTable();

    for (var i = 0; i < obj.length; i++) {

        tabla.fnAddData([
            obj[i].ID_DATOS,
            obj[i].Nombre,
            obj[i].Vigencia,
            obj[i].Archivo,
            obj[i].Pais,
            '<button value="Actualizar" title="Actualizar" class="btn btn-primary btn-update" data-toggle="modal" data-target="#exampleModal"><i class="far fa-edit"></i></button>',
            obj[i].CodPais
        ]);
    }
}

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "GestionarPromociones.aspx/ListarPromocionesPDF",
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

// ABRIR MODAL
$("#btnNuevoPDF").click(function (e) {
    $("#btnRegistrar").show();
    $("#btnActualizar").hide();
    $("#exampleModal input").val("");
    $('.file-upload').file_upload();
    $('.file-upload-text').text("Ingrese el archivo PDF ...");
});

//FUNCIONES PARA REGISTRAR
$("#btnRegistrar").click(function (e) {
    e.preventDefault();
    GuardarPDF();
});

function GuardarPDF() {
    var archivo, files, dataPDF;
    dataPDF = new FormData();
    archivo = $("#archivoPDF").get(0);
    files = archivo.files;
    dataPDF.append(files[0].name, files[0]);
    dataPDF.append("archivo", "promo");


    $.ajax({
        url: "FileUpload.ashx",
        type: "POST",
        data: dataPDF,
        contentType: false,
        processData: false,
        success: function (result) {
            if (result == "") {
                RegistrarDataPDF();
            } else {
                CambiarNombrePDF();
            }
        },
        error: function (err) {
            alert(err.statusText)
        }
    });
}

function RegistrarDataPDF() {
    var nombre, vigencia, archivo, pais;
    nombre = $("#txtNombre").val();
    vigencia = $("#txtVigencia").val();
    pais = $("#cboPais").val();
    archivo = document.getElementById('archivoPDF').files[0].name;

    var obja = JSON.stringify({
        nombreS: nombre, vigenciaS: vigencia, archivoS: archivo, paisS: pais
    });

    $.ajax({
        type: "POST",
        url: "GestionarPromociones.aspx/RegistroPromocionPDF",
        data: obja,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            console.log(response);
            alertme();
        }
    });
}

//FUNCIONES PARA ACTUALIZAR
$(document).on('click', '.btn-update', function (e) {
    $("#btnRegistrar").hide();
    $("#btnActualizar").show();
    $('.file-upload').file_upload();
    $("#archivoPDF").val("");
    $('.file-upload-text').text("Ingrese el archivo PDF ...");
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    data = tabla.fnGetData(row);
    console.log(data);
    fillModalData();
});

function fillModalData() {

    $("#txtNombre").val(data[1]);
    $("#txtVigencia").val(data[2]);
    $("#cboPais").val(data[6]);
}

$("#btnActualizar").click(function (e) {
    e.preventDefault();
    var valida = document.getElementById('archivoPDF').files.length;
    if (valida > 0) {
        UpdateFile();
    } else {
        updateDataAjax();
    }
});

function UpdateFile() {
    var fileUpload = $("#archivoPDF").get(0);
    var files = fileUpload.files;

    var dataPDF = new FormData();
    dataPDF.append(files[0].name, files[0]);
    dataPDF.append("archivo", "promo");

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
                CambiarNombrePDF();
            }
        },
        error: function (err) {
            alert(err.statusText)
        }
    });
}

function DeleteFile() {

    var obj = JSON.stringify({ archivo: data[3] });

    $.ajax({
        url: "GestionarPromociones.aspx/EliminarArchivo",
        type: "POST",
        data: obj,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            console.log(response);
            updateDataAjax();
        }
    });
}

function updateDataAjax() {

    var nombre, vigencia, id, archivo, valida, pais;

    nombre = $("#txtNombre").val();
    vigencia = $("#txtVigencia").val();
    pais = $("#cboPais").val();
    valida = document.getElementById('archivoPDF').files.length;
    if (valida > 0) { archivo = document.getElementById('archivoPDF').files[0].name;}
    else { archivo = data[3] }
    id = data[0];

    var obj = JSON.stringify({
        nombreS: nombre, vigenciaS: vigencia, archivoS: archivo, idS: id, paisS: pais
    });

    $.ajax({
        type: "POST",
        url: "GestionarPromociones.aspx/ActualizarPromocionPDF",
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
function CambiarNombrePDF() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'El nombre del archivo ya existe',
        type: "error"
    });
}

sendDataAjax();