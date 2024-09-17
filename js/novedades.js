﻿//DEFINIR VARIABLES
var tabla, aaf, data, estados;
//LISTADO DE PUBLICACIONES
function addRowDT(obj) {
    tabla = $("#tbl_novedades").DataTable();
    tabla.fnClearTable();

    for (var i = 0; i < obj.length; i++) {

        if (obj[i].estado == true) {
            estados = "Activo";
        } else {
            estados = "Desactivado";
        }

        var imagenPubli = obj[i].imagen;
        tabla.fnAddData([
            obj[i].idNovedades,
            obj[i].fecha,
            obj[i].titulo,
            '<img src="novedad/' + imagenPubli + '" style="height: 80px">',
            estados,
            '<button id="Actualizar" value="Actualizar" title="Actualizar" class="btn btn-primary btn-update" data-toggle="modal" data-target="#exampleModal"><i class="far fa-edit"></i></button>',
            '<button value="Eliminar" title="Eliminar" class="btn btn-danger btn-delete"><i class="far fa-minus-square"></i></button>',
            obj[i].imagen,
            obj[i].estado,
            obj[i].mensaje,
            obj[i].enlace
        ]);
    }
}

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "Novedades.aspx/ListaNovedad",
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
    var estados;

    if (data[4] == "Activo") {
        estados = true;
    } else {
        estados = false;
    }

    $("#txtTitulo").val(data[2]);
    $("#txtMensaje").val(data[9]);
    $("#txtEnlace").val(data[10]);
    $("#toogleNove").prop('checked', estados).change();
}

// ABRIR MODAL
$("#btnNuevaNovedad").click(function (e) {
    $("#btnRegistrar").show();
    $("#btnActualizar").hide();
    $("#exampleModal input").val("");
    $("#exampleModal textarea").val("");
    $('.file-upload').file_upload();
    $('.file-upload-text').text("Ingrese la imagen ...");
    $("#exampleModal input[type='checkbox']").prop('checked', false).change();
});

//FUNCIONES PARA REGISTRAR
$("#btnRegistrar").click(function (e) {
    var mensaje = $("#txtMensaje").val();
    var valida = document.getElementById('imgNove').files.length;
    e.preventDefault();
    if (mensaje == "") {
        FaltaMensaje();
    } else if (valida == "0") {
        FaltaImagen();
    } else {
        UploadFile();
    }
});

function RegistroNovedad() {
    var estado, titulo, mensaje, enlace, imagen, day;

    estado = document.getElementById("toogleNove").checked;
    titulo = $("#txtTitulo").val();
    mensaje = $("#txtMensaje").val();
    enlace = $("#txtEnlace").val();
    day = moment().format("DD/MM/YYYY");
    var valida = document.getElementById('imgNove').files.length;

    if (valida == 0) {
        imagen = "";
    } else {
        imagen = document.getElementById('imgNove').files[0].name;
    }

    var obja = JSON.stringify({
        tituloNove: titulo, mensajeNove: mensaje, enlaceNove: enlace, imagenNove: imagen,
        estadoNove: estado, fechaNove: day
    });



    $.ajax({
        type: "POST",
        url: "Novedades.aspx/RegistrarNovedad",
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

function UploadFile() {
    var fileUpload = $("#imgNove").get(0);
    var files = fileUpload.files;

    var data = new FormData();
    for (var i = 0; i < files.length; i++) {
        data.append(files[i].name, files[i]);
    }

    $.ajax({
        url: "FileUploadNovedad.ashx",
        type: "POST",
        data: data,
        contentType: false,
        processData: false,
        success: function (result) {
            var r = result;
            console.log(result.d);
            if (r == "") {
                RegistroNovedad();
            } else {
                alert(result);
            }
        },
        error: function (err) {
            alert(err.statusText)
        }
    });
}

//FUNCIONES PARA ELIMINAR
function deleteDataAjax(dataid) {

    var obj = JSON.stringify({ idNove: dataid });

    $.ajax({
        type: "POST",
        url: "Novedades.aspx/EliminarFilaNovedad",
        data: obj,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            console.log(response);
            sendDataAjax();
            Swal.fire({
                title: 'Perfecto!',
                text: 'Novedad Eliminada',
                type: "success"
            });
        }
    });
}

$(document).on('click', '.btn-delete', function (e) {
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    var dataRow = tabla.fnGetData(row);
    var dataid = dataRow[0];
    var x = dataRow[7];
    DeleteFile(x);
    deleteDataAjax(dataid);
    sendDataAjax();
});

function DeleteFile(x) {

    var obj = JSON.stringify({ imagen: x });

    $.ajax({
        url: "Novedades.aspx/EliminarImagen",
        type: "POST",
        data: obj,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            console.log(response);
        }
    });
}

//FUNCIONES PARA ACTUALIZAR
$(document).on('click', '.btn-update', function (e) {
    $("#btnRegistrar").hide();
    $("#btnActualizar").show();
    $("#exampleModal textarea").val("");
    $("#exampleModal input[type='checkbox']").prop('checked', false).change();
    $('.file-upload').file_upload();
    $('.file-upload-text').text("Ingrese la imagen ...");
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    data = tabla.fnGetData(row);
    console.log(data);
    fillModalData();
});

function updateDataAjax() {

    var estado, titulo, mensaje, enlace, imagen, day, idNov;

    estado = document.getElementById("toogleNove").checked;
    titulo = $("#txtTitulo").val();
    mensaje = $("#txtMensaje").val();
    enlace = $("#txtEnlace").val();
    day = moment().format("DD/MM/YYYY");
    idNov = data[0];
    var valida = document.getElementById('imgNove').files.length;

    if (valida == 0) {
        imagen = data[7];
    } else {
        imagen = document.getElementById('imgNove').files[0].name;
    }

    var obj = JSON.stringify({
        idNove: idNov, tituloNove: titulo, mensajeNove: mensaje, enlaceNove: enlace, imagenNove: imagen,
        estadoNove: estado, fechaNove: day
    });

    $.ajax({
        type: "POST",
        url: "Novedades.aspx/ActualizarNovedad",
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
                text: 'Novedad Actualizada',
                type: "success"
            }).then(function () {
                window.location = "Novedades.aspx";
            });
        }
    });
}

$("#btnActualizar").click(function (e) {
    e.preventDefault();
    var valida = document.getElementById('imgNove').files.length;
    var x = data[7];
    if (valida == 0) {
        updateDataAjax();
    } else {
        DeleteFile(x);
        UpdateFile();
    }

});

function UpdateFile() {
    var fileUpload = $("#imgNove").get(0);
    var files = fileUpload.files;

    var data = new FormData();
    for (var i = 0; i < files.length; i++) {
        data.append(files[i].name, files[i]);
    }

    $.ajax({
        url: "FileUploadNovedad.ashx",
        type: "POST",
        data: data,
        contentType: false,
        processData: false,
        success: function (result) {
            var r = result;
            console.log(result.d);
            if (r == "") {
                updateDataAjax();
            } else {
                alert(result);
            }
        },
        error: function (err) {
            alert(err.statusText)
        }
    });
}

//ALERTAS
function alertme() {
    Swal.fire({
        title: 'Perfecto!',
        text: 'Novedad Registrada',
        type: "success"
    }).then(function () {
        window.location = "Novedades.aspx";
    });
}
function FaltaMensaje() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró el campo Mensaje',
        type: "error"
    });
}
function FaltaImagen() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No insertó imagen',
        type: "error"
    });
}

sendDataAjax();