//DEFINIR VARIABLES
var tabla, aaf, data, estados, eliminar = 0, listaDetalles;
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
            '<button value="Actualizar" title="Actualizar" class="btn btn-primary btn-update" data-toggle="modal" data-target="#exampleModal"><i class="far fa-edit"></i></button>',
            '<button value="Eliminar" title="Eliminar" class="btn btn-danger btn-delete"><i class="far fa-minus-square"></i></button>'
        ]);
    }
}

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "GestionarDocumentosMarketing.aspx/ListarDocumentosMarketing",
        data: {},
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (dataL) {
            console.log(dataL.d);
            addRowDT(dataL.d);
        }
    });
}

function mostrarURL(ddl) {
    dropdown = ddl.options[ddl.selectedIndex].value;
    if (ddl.options[ddl.selectedIndex].value == "offer-info") {
        $("#divLink").show();
        $("#divPDF").hide();
    } else {
        $("#divLink").hide();
        $("#divPDF").show();
    }
}

// ABRIR MODAL
$("#btnNuevoArchivo").click(function (e) {
    $("#btnRegistrar").show();
    $("#btnActualizar").hide();
    $("#exampleModal input").val("");
    $("#exampleModal select").val("");
    $('.file-upload').file_upload();
    $('.file-upload-text').text("Ingrese el archivo ...");
    $("#exampleModal input[type='checkbox']").prop('checked', false).change();
});

//FUNCIONES PARA REGISTRAR
$("#btnRegistrar").click(function (e) {
    e.preventDefault();
    if ($("#cboTipoArchivo").val() == "offer-info") {
        RegistrarDataArchivo();
    }
    else { GuardarArchivo(); }
});

function GuardarArchivo() {
    var archivo, files, dataPDF;
    dataPDF = new FormData();
    archivo = $("#archivoDoc").get(0);
    files = archivo.files;
    dataPDF.append(files[0].name, files[0]);
    dataPDF.append("archivo", "marketing");


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
    var archivo;
    if ($("#cboTipoArchivo").val() == "offer-info") { archivo = $("#txtUrl").val(); }
    else { archivo = document.getElementById('archivoDoc').files[0].name; }
    var DatosArray = {};
    DatosArray['Nombre'] = $("#txtNombre").val();
    DatosArray['Archivo'] = archivo;
    DatosArray['TipoArchivo'] = $("#cboTipoArchivo option:selected").text();
    DatosArray['CodigoClass'] = $("#cboTipoArchivo").val();
    DatosArray['Paq_Basico'] = document.getElementById("chkBasico").checked;
    DatosArray['Paq_Profesional'] = document.getElementById("chkProfesional").checked;
    DatosArray['Paq_Empresarial'] = document.getElementById("chkEmpresarial").checked;
    DatosArray['Paq_Millonario'] = document.getElementById("chkMillonario").checked;
    DatosArray['Paq_Imperial'] = document.getElementById("chkImperial").checked;
    DatosArray['Paq_Networker'] = document.getElementById("chkNetworker").checked;
    DatosArray['Paq_Consultor'] = document.getElementById("chkConsultor").checked;
    DatosArray['Paq_ConsultorMLM'] = document.getElementById("chkConsultorMLM").checked;
    DatosArray['Paq_C_Inteligente'] = document.getElementById("chkInteligente").checked;
    DatosArray['Paq_20'] = document.getElementById("chkPaquete20").checked;
    DatosArray['Paq_25'] = document.getElementById("chkPaquete25").checked;
    DatosArray['Paq_30'] = document.getElementById("chkPaquete30").checked;

    var obja = JSON.stringify({
        objDatos: DatosArray
    });

    $.ajax({
        type: "POST",
        url: "GestionarDocumentosMarketing.aspx/RegistroDocumentosMarketing",
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
    $("#archivoDoc").val("");
    $('.file-upload-text').text("Ingrese el archivo ...");
    $("#exampleModal input[type='checkbox']").prop('checked', false).change();
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    data = tabla.fnGetData(row);
    ObtenerDetalle(data[0]);
});

function ObtenerDetalle(idDato) {
    var obj = JSON.stringify({
        idDatos: idDato
    });
    $.ajax({
        type: "POST",
        url: "GestionarDocumentosMarketing.aspx/ListarDetallesDocumentosMarketing",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (dataS) {
            fillModalData(dataS.d);
        }
    });
}

function fillModalData(listaDetalles) {

    $("#txtNombre").val(data[1]);
    document.getElementById('chkBasico').checked = listaDetalles[0].Paq_Basico;
    document.getElementById('chkProfesional').checked = listaDetalles[0].Paq_Profesional;
    document.getElementById('chkEmpresarial').checked = listaDetalles[0].Paq_Empresarial;
    document.getElementById('chkMillonario').checked = listaDetalles[0].Paq_Millonario;
    document.getElementById('chkImperial').checked = listaDetalles[0].Paq_Imperial;
    document.getElementById('chkNetworker').checked = listaDetalles[0].Paq_Networker;
    document.getElementById('chkConsultor').checked = listaDetalles[0].Paq_Consultor;
    document.getElementById('chkConsultorMLM').checked = listaDetalles[0].Paq_ConsultorMLM;
    document.getElementById('chkInteligente').checked = listaDetalles[0].Paq_C_Inteligente;
    document.getElementById('chkPaquete20').checked = listaDetalles[0].Paq_20;
    document.getElementById('chkPaquete25').checked = listaDetalles[0].Paq_25;
    document.getElementById('chkPaquete30').checked = listaDetalles[0].Paq_30;
    document.getElementById('cboTipoArchivo').value = listaDetalles[0].CodigoClass;
    if (listaDetalles[0].CodigoClass == "offer-info") {
        $("#txtUrl").val(data[3]);
        $("#divLink").show();
        $("#divPDF").hide();
    }
    else {
        $("#divLink").hide();
        $("#divPDF").show();
    }
}

$("#btnActualizar").click(function (e) {
    e.preventDefault();
    if ($("#cboTipoArchivo").val() == "offer-info") {
        updateDataAjax();
    } else {
        var valida = document.getElementById('archivoDoc').files.length;
        if (valida > 0) {
            UpdateFile();
        } else {
            updateDataAjax();
        }
    }
});

function UpdateFile() {
    var fileUpload = $("#archivoDoc").get(0);
    var files = fileUpload.files;

    var dataPDF = new FormData();
    dataPDF.append(files[0].name, files[0]);
    dataPDF.append("archivo", "marketing");

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
        url: "GestionarDocumentosMarketing.aspx/EliminarArchivo",
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

    var archivo, valida;
    if ($("#cboTipoArchivo").val() == "offer-info") {
        archivo = $("#txtUrl").val();
    }
    else {
        valida = document.getElementById('archivoDoc').files.length;
        if (valida > 0) { archivo = document.getElementById('archivoDoc').files[0].name; }
        else { archivo = data[3] }
    }
    var DatosArray = {};
    DatosArray['ID_DATOS'] = data[0];
    DatosArray['Nombre'] = $("#txtNombre").val();
    DatosArray['Archivo'] = archivo;
    DatosArray['TipoArchivo'] = $("#cboTipoArchivo option:selected").text();
    DatosArray['CodigoClass'] = $("#cboTipoArchivo").val();
    DatosArray['Paq_Basico'] = document.getElementById("chkBasico").checked;
    DatosArray['Paq_Profesional'] = document.getElementById("chkProfesional").checked;
    DatosArray['Paq_Empresarial'] = document.getElementById("chkEmpresarial").checked;
    DatosArray['Paq_Millonario'] = document.getElementById("chkMillonario").checked;
    DatosArray['Paq_Imperial'] = document.getElementById("chkImperial").checked;
    DatosArray['Paq_Networker'] = document.getElementById("chkNetworker").checked;
    DatosArray['Paq_Consultor'] = document.getElementById("chkConsultor").checked;
    DatosArray['Paq_ConsultorMLM'] = document.getElementById("chkConsultorMLM").checked;
    DatosArray['Paq_C_Inteligente'] = document.getElementById("chkInteligente").checked;
    DatosArray['Paq_20'] = document.getElementById("chkPaquete20").checked;
    DatosArray['Paq_25'] = document.getElementById("chkPaquete25").checked;
    DatosArray['Paq_30'] = document.getElementById("chkPaquete30").checked;

    var obj = JSON.stringify({
        objDatos: DatosArray
    });

    $.ajax({
        type: "POST",
        url: "GestionarDocumentosMarketing.aspx/ActualizarDocumentosMarketing",
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

function EliminarDocumento() {

    var id = data[0];

    var obj = JSON.stringify({
        idS: id, archivoS: data[3]
    });

    $.ajax({
        type: "POST",
        url: "GestionarDocumentosMarketing.aspx/EliminarDocumentosMarketing",
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

function RemoveClass() {
    var element = document.getElementById("chkBasico");
    element.classList.remove("icheckbox_minimal");
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
RemoveClass();