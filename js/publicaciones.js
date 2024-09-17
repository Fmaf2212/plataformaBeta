//DEFINIR VARIABLES
var tabla, aaf, data, estados;
//LISTADO DE PUBLICACIONES
function addRowDT(obj) {
    tabla = $("#tbl_publicaciones").DataTable();
    tabla.fnClearTable();

    for (var i = 0; i < obj.length; i++) {

        if (obj[i].estado == true) {
            estados = "Activo";
        } else {
            estados = "Desactivado";
        }

        var imagenPubli = obj[i].imagen;
        tabla.fnAddData([
            obj[i].idPublicacion,
            obj[i].fecha,
            obj[i].titulo,
            '<img src="publis/' + imagenPubli + '" style="height: 80px">',
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
        url: "Publicaciones.aspx/ListaPublicaciones",
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
    $("#tooglePubli").prop('checked', estados).change();
}

// ABRIR MODAL
$("#btnNuevaPublicacion").click(function (e) {
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
    var valida = document.getElementById('imgPubli').files.length;
    e.preventDefault();
    if (mensaje == "") {
        FaltaMensaje();
    } else if (valida == "0") {
        FaltaImagen();
    } else {
        UploadFile();
    }
});

function RegistroPublicacion() {
    var estado, titulo, mensaje, enlace, imagenPubli, day;

    estado = document.getElementById("tooglePubli").checked;
    titulo = $("#txtTitulo").val();
    mensaje = $("#txtMensaje").val();
    enlace = $("#txtEnlace").val();
    day = moment().format("DD/MM/YYYY");
    var valida = document.getElementById('imgPubli').files.length;

    if (valida == 0) {
        imagenPubli = "";
    } else {
        imagenPubli = document.getElementById('imgPubli').files[0].name;
    }

    var obja = JSON.stringify({
        tituloPu: titulo, mensajePu: mensaje, enlacePu: enlace, imagenPu: imagenPubli,
        estadoPu: estado, fechaPu: day
    });



    $.ajax({
        type: "POST",
        url: "Publicaciones.aspx/RegistrarPublicacion",
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
    var fileUpload = $("#imgPubli").get(0);
    var files = fileUpload.files;

    var data = new FormData();
    for (var i = 0; i < files.length; i++) {
        data.append(files[i].name, files[i]);
    }

    $.ajax({
        url: "FileUploadPublicacion.ashx",
        type: "POST",
        data: data,
        contentType: false,
        processData: false,
        success: function (result) {
            var r = result;
            console.log(result.d);
            if (r == "") {
                RegistroPublicacion();
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

    var obj = JSON.stringify({ idPubli: dataid});

    $.ajax({
        type: "POST",
        url: "Publicaciones.aspx/EliminarFilaPublicacion",
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
                text: 'Publicacion Eliminada',
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
        url: "Publicaciones.aspx/EliminarImagen",
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

    var estado, titulo, mensaje, enlace, imagenPubli, day, idPub;

    estado = document.getElementById("tooglePubli").checked;
    titulo = $("#txtTitulo").val();
    mensaje = $("#txtMensaje").val();
    enlace = $("#txtEnlace").val();
    day = moment().format("DD/MM/YYYY");
    idPub = data[0];
    var valida = document.getElementById('imgPubli').files.length;

    if (valida == 0) {
        imagenPubli = data[7];
    } else {
        imagenPubli = document.getElementById('imgPubli').files[0].name;
    }

    var obj = JSON.stringify({
        idPubli: idPub, tituloPu: titulo, mensajePu: mensaje, enlacePu: enlace, imagenPu: imagenPubli,
        estadoPu: estado, fechaPu: day
    });

    $.ajax({
        type: "POST",
        url: "Publicaciones.aspx/ActualizarPublicacion",
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
                text: 'Publicacion Actualizada',
                type: "success"
            }).then(function () {
                window.location = "Publicaciones.aspx";
            });
        }
    });
}

$("#btnActualizar").click(function (e) {
    e.preventDefault();
    var valida = document.getElementById('imgPubli').files.length;
    var x = data[7];
    if (valida == 0) {
        updateDataAjax();
    } else {
        DeleteFile(x);
        UpdateFile();
    }

});

function UpdateFile() {
    var fileUpload = $("#imgPubli").get(0);
    var files = fileUpload.files;

    var data = new FormData();
    for (var i = 0; i < files.length; i++) {
        data.append(files[i].name, files[i]);
    }

    $.ajax({
        url: "FileUploadPublicacion.ashx",
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
        text: 'Publicacion Registrada',
        type: "success"
    }).then(function () {
        window.location = "Publicaciones.aspx";
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