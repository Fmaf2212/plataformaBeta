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
    tabla = $("#tbl_banner").DataTable();
    tabla.fnClearTable();

    for (var i = 0; i < obj.length; i++) {

        tabla.fnAddData([
            obj[i].ID_DATOS,
            obj[i].Nombre,
            obj[i].Archivo,
            obj[i].Pais,
            '<button value="Actualizar" title="Actualizar" class="btn btn-primary btn-update" data-toggle="modal" data-target="#exampleModal"><i class="far fa-edit"></i></button>',
            '<button value="Eliminar" title="Eliminar" class="btn btn-danger btn-delete"><i class="far fa-minus-square"></i></button>',
            obj[i].CodPais,
            obj[i].Socio,
            obj[i].Inteligente,
            obj[i].Consultor,
            obj[i].ConsultorMLM,
            obj[i].TipoPagina,
        ]);
    }
}

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "GestionarBanner.aspx/ListarImagenesBanner",
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
$("#btnNuevoBanner").click(function (e) {
    $("#btnRegistrar").show();
    $("#btnActualizar").hide();
    $("#exampleModal input").val("");
    $('.file-upload').file_upload();
    $("#archivoBanner").val("");
    $("#cboPais").val("01");
    $('.file-upload-text').text("Ingrese la imagen ...");
});

//FUNCIONES PARA REGISTRAR
$("#btnRegistrar").click(function (e) {
    e.preventDefault();
    GuardarImagen();
});

function GuardarImagen() {
    var archivo, files, dataPDF;
    dataPDF = new FormData();
    archivo = $("#archivoBanner").get(0);
    files = archivo.files;
    dataPDF.append(files[0].name, files[0]);
    dataPDF.append("archivo", "banner");


    $.ajax({
        url: "FileUpload.ashx",
        type: "POST",
        data: dataPDF,
        contentType: false,
        processData: false,
        success: function (result) {
            if (result == "") {
                RegistrarDataBanner();
            } else {
                CambiarNombrePDF();
            }
        },
        error: function (err) {
            alert(err.statusText)
        }
    });
}

function RegistrarDataBanner() {
    var DatosArray = {};
    DatosArray['Nombre'] = $("#txtNombre").val();
    DatosArray['Pais'] = $("#cboPais").val();
    DatosArray['TipoPagina'] = $("#cboPage").val();
    DatosArray['Archivo'] = document.getElementById('archivoBanner').files[0].name;
    DatosArray['Socio'] = document.getElementById("chkSocio").checked;
    DatosArray['Inteligente'] = document.getElementById("chkInteligente").checked;
    DatosArray['Consultor'] = document.getElementById("chkConsultor").checked;
    DatosArray['ConsultorMLM'] = document.getElementById("chkConsultorMLM").checked;

    var obja = JSON.stringify({
        Datos: DatosArray
    });

    $.ajax({
        type: "POST",
        url: "GestionarBanner.aspx/RegistroImagenesBanner",
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
    $('.file-upload-text').text("Ingrese la imagen ...");
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    data = tabla.fnGetData(row);
    console.log(data);
    fillModalData();
});

function fillModalData() {

    $("#txtNombre").val(data[1]);
    $("#cboPais").val(data[6]);
    $("#cboPage").val(data[11]);
    document.getElementById('chkSocio').checked = data[7];
    document.getElementById('chkInteligente').checked = data[8];
    document.getElementById('chkConsultor').checked = data[9];
    document.getElementById('chkConsultorMLM').checked = data[10];
}

$("#btnActualizar").click(function (e) {
    e.preventDefault();
    var valida = document.getElementById('archivoBanner').files.length;
    if (valida > 0) {
        UpdateFile();
    } else {
        updateDataAjax();
    }
});

function UpdateFile() {
    var fileUpload = $("#archivoBanner").get(0);
    var files = fileUpload.files;

    var dataPDF = new FormData();
    dataPDF.append(files[0].name, files[0]);
    dataPDF.append("archivo", "banner");

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

    var obj = JSON.stringify({ imagen: data[2] });

    $.ajax({
        url: "GestionarBanner.aspx/EliminarArchivo",
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
            else { EliminarBanner();}
        }
    });
}

function updateDataAjax() {

    var archivo, valida;
    valida = document.getElementById('archivoBanner').files.length;
    if (valida > 0) { archivo = document.getElementById('archivoBanner').files[0].name; }
    else { archivo = data[2] }

    var DatosArray = {};
    DatosArray['ID_DATOS'] = data[0];
    DatosArray['Nombre'] = $("#txtNombre").val();
    DatosArray['Pais'] = $("#cboPais").val();
    DatosArray['TipoPagina'] = $("#cboPage").val();
    DatosArray['Archivo'] = archivo;
    DatosArray['Socio'] = document.getElementById("chkSocio").checked;
    DatosArray['Inteligente'] = document.getElementById("chkInteligente").checked;
    DatosArray['Consultor'] = document.getElementById("chkConsultor").checked;
    DatosArray['ConsultorMLM'] = document.getElementById("chkConsultorMLM").checked;

    var obj = JSON.stringify({
        Datos: DatosArray
    });

    $.ajax({
        type: "POST",
        url: "GestionarBanner.aspx/ActualizarImagenesBanner",
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

//FUNCIONES PARA ELIMINAR

$(document).on('click', '.btn-delete', function (e) {
    e.preventDefault();
    eliminar = 1;
    var row = $(this).parent().parent()[0];
    data = tabla.fnGetData(row);
    DeleteFile();
});

function EliminarBanner() {

    var id = data[0];

    var obj = JSON.stringify({
        idS: id
    });

    $.ajax({
        type: "POST",
        url: "GestionarBanner.aspx/EliminarImagenesBanner",
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
        text: 'Banner Registrado',
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
        text: 'Banner Actualizado',
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
        text: 'Banner Eliminado',
        type: "success"
    }).then(function () {
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