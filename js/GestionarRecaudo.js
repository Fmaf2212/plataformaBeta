sendDataAjax();
setInterval(function () { sendDataAjax();}, 5000);

$.ajax({
    type: "POST",
    url: "SociosRed.aspx/GetPais",
    data: "{}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    async: false,
    success: function (result) {
        $("#cboPais").empty();
        $("#cboPaisGenerate").empty();
        $.each(result.d, function (key, value) {
            $("#cboPais").append($("<option></option>").val(value.Codigo).html(value.Nombre));
            $("#cboPaisGenerate").append($("<option></option>").val(value.Codigo).html(value.Nombre));
        });
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus + ": " + XMLHttpRequest.responseText);
    }
});

$("#btnRegistrarGenerar").click(function (e) {
    if ($("#cboPaisGenerate").val() == null) {
        validation("Debe seleccionar el país!");
    } else {
        var obja = JSON.stringify({
            pais: $("#cboPaisGenerate").val()
        });
        $.ajax({
            type: "POST",
            url: "Autocompletado.asmx/CrearArchivoNPOI",
            data: obja,
            dataType: "json",
            contentType: 'application/json; charset=utf-8',
            error: function (xhr, ajaxOptions, throwError) {
                console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
            },
            success: function (response) {
                const nameFile = response.d[0];
                const date = response.d[1];
                RegisterData(nameFile, date, "DESCARGA", $("#cboPaisGenerate").val());

            }
        });
    }

});

$("#btnSubida").click(function (e) {

    $('.file-upload').file_upload();
    $("#archivoExcel").val("");
    $('.file-upload-text').text("Ingrese el archivo ...");
});

$("#btnRegistrar").click(function (e) {
    var cantFile = document.getElementById('archivoExcel').files.length;
    if ($("#cboPais").val() == null) {
        validation("Debe seleccionar el país!");
    } else if ($("#cboBanco").val() == null) {
        validation("Debe seleccionar el banco!");
    } else if (cantFile == 0) {
        validation("Debe agregar un archivo!");
    } else {
        GuardarArchivo();
    }
});

function GuardarArchivo() {
    var archivo, files, dataPDF;
    dataPDF = new FormData();
    archivo = $("#archivoExcel").get(0);
    files = archivo.files;
    dataPDF.append(files[0].name, files[0]);
    dataPDF.append("archivo", "recaudo");

    $.ajax({
        url: "FileUpload.ashx",
        type: "POST",
        data: dataPDF,
        contentType: false,
        processData: false,
        success: function (result) {
            const nameFile = result.fileNameR;
            const date = result.date;
            RegisterData(nameFile, date, "SUBIDA", $("#cboPais").val());
        },
        error: function (err) {
            alert(err.statusText)
        }
    });
}

function RegisterData(nameFile, date, accion, pais) {
    var DatosArray = {};
    var banco = (accion == "SUBIDA") ? $("#cboBanco").val(): "";
    DatosArray['Nombre'] = nameFile;
    DatosArray['Fecha'] = date;
    DatosArray['Accion'] = accion;
    DatosArray['Pais'] = pais;
    DatosArray['Banco'] = banco;

    var obja = JSON.stringify({
        objDatos: DatosArray
    });

    $.ajax({
        type: "POST",
        url: "Archivos_Recaudo.aspx/RegistroArchivosRecaudo",
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

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "Archivos_Recaudo.aspx/ListarArchivosRecaudo",
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

function addRowDT(obj) {
    tabla = $("#tbl_excel").DataTable();
    tabla.fnClearTable();

    for (var i = 0; i < obj.length; i++) {
        const display = (obj[i].Estado == "Pendiente") ? "" : "display:none;";
        const pais = (obj[i].Pais == "01") ? "Perú" : (obj[i].Pais == "02") ? "Bolivia" : "EEUU";
        tabla.fnAddData([
            obj[i].ID,
            obj[i].Nombre,
            obj[i].Fecha,
            obj[i].Banco,
            pais,
            obj[i].Accion,
            obj[i].Estado,
            '<a href="/recaudo/' + obj[i].Accion + '/' + obj[i].Nombre + '" download><button type="button" title="Descargar" class="btn btn-success btn-download"><i class="fas fa-download"></i></button></a>',
            '<button type="button" title="Eliminar" style="' + display + '" class="btn btn-danger btn-delete"><i class="far fa-minus-square"></i></button>'
        ]);
    }
}

$(document).on('click', '.btn-delete', function (e) {
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    data = tabla.fnGetData(row);
    EliminarArchivo(data[0], data[1], data[5]);
});

function EliminarArchivo(id, nombre, accion) {

    var obja = JSON.stringify({
        id: id, archivo: nombre, accion: accion
    });

    $.ajax({
        type: "POST",
        url: "Archivos_Recaudo.aspx/EliminarArchivoRecaudo",
        data: obja,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            eliminado();
        }
    });
}

function alertme() {
    Swal.fire({
        title: 'Perfecto!',
        text: 'Archivo Generado',
        type: "success"
    }).then(function () {
        $('#btnCancelar').click();
        $('#btnCancelarGenerar').click();
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
function validation(text) {
    Swal.fire({
        title: 'Ooops...!',
        text: text,
        type: "error"
    });
}
