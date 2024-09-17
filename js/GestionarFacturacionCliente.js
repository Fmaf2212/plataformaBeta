var filtro = 0, procesoPDF = 0;

function comboPeriodo() {
    $.ajax({
        type: "POST",
        url: "HistorialFacturas.aspx/ListaPeriodoComisionFacturacion",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#ddlPeriodo").empty();
            $("#ddlPeriodo").append("<option value='0'>--Select--</option>");
            $.each(result.d, function (key, value) {
                $("#ddlPeriodo").append($("<option></option>").val(value.idPeriodo).html(value.nombrePeriodo));
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
}

function comboPeriodoModal() {
    var obja = JSON.stringify({
        idPeriodoS: data[14]
    });

    $.ajax({
        type: "POST",
        url: "HistorialFacturas.aspx/ListaPeriodoComisionFacturacionModal",
        data: obja,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#ddlPeriodo").empty();
            $("#ddlPeriodo").append("<option value='0'>--Select--</option>");
            $.each(result.d, function (key, value) {
                $("#ddlPeriodo").append($("<option></option>").val(value.idPeriodo).html(value.nombrePeriodo));
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
}

function mostrarRUC(ddl) {
    dropdown = ddl.options[ddl.selectedIndex].value;
    if (ddl.options[ddl.selectedIndex].value == "PROPIO") {
        $("#bloqRUC").hide();
    } else {
        $("#bloqRUC").show();
    }
}

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "HistorialFacturas.aspx/ListaFacturacionSocios",
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
    var tercero, saldo, display;
    $('#tbl_facturacion').dataTable().fnClearTable();
    for (var i = 0; i < obj.length; i++) {
        saldo = 0;
        if (obj[i].TipoCliente == "TERCERO") { tercero = "SI"; } else { tercero = "NO"; }
        if (obj[i].Correcion == "NO" || obj[i].Sellado == true ) { display = "none"; } else { display = ""; }
        saldo = obj[i].Comision - obj[i].MontoCanje;
        tabla = $("#tbl_facturacion").dataTable();
        tabla.fnAddData([
            obj[i].DniCliente,
            obj[i].Nombres,
            obj[i].Comision,
            obj[i].FechaS,
            tercero,
            obj[i].RUC,
            obj[i].Observacion,
            obj[i].MontoCanje,
            obj[i].NombrePeriodo,
            saldo,
            obj[i].EstadoCanje,
            obj[i].EstadoSaldoDisponible,
            '<button value="Actualizar" type="button" title="Actualizar" class="btn btn-ft btn-primary btn-update" style="display:' + display + '" data-toggle="modal" data-target="#exampleModal"><i class="far fa-edit"></i></button>',
            obj[i].TipoCliente,
            obj[i].IdPeriodo,
            obj[i].Archivo,
            obj[i].Id_Datos
        ]);
    }
}

$("#btnNuevaFacturacion").click(function (e) {
    comboPeriodo();
    $("#btnRegistrar").show();
    $("#btnActualizar").hide();
    $("#bloqPDF").show();
    $("#exampleModal select").val("0");
    $("#exampleModal input").val("");
    $('.file-upload').file_upload();
    $('.file-upload-text').text("Ingrese el archivo PDF ...");
});

//FUNCIONES PARA REGISTRAR
$("#btnRegistrar").click(function (e) {
    e.preventDefault();
    if ($("#ddlPeriodo").val() == "0" || $("#ddlCliente").val() == "0" ||
        ($("#txtRUC").val() == "" && $("#ddlCliente").val() == "TERCERO")|| document.getElementById('archivoPDF').files.length == 0) {
        FaltaDatos();
    } else {
        GuardarPDF();
    }
});

function GuardarPDF() {
    var archivo, files, dataPDF;
    dataPDF = new FormData();
    archivo = $("#archivoPDF").get(0);
    files = archivo.files;
    dataPDF.append(files[0].name, files[0]);
    dataPDF.append("archivo", "factura");


    $.ajax({
        url: "FileUpload.ashx",
        type: "POST",
        data: dataPDF,
        contentType: false,
        processData: false,
        success: function (result) {
            if (result == "") {
                if (procesoPDF == 0) { RegistrarDataPDF(); }
                else { ActualizarFacturacion();}
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
    var idPeriodo, tipoCliente, ruc;
    idPeriodo = $("#ddlPeriodo").val();
    tipoCliente = $("#ddlCliente").val();
    ruc = $("#txtRUC").val();
    archivo = document.getElementById('archivoPDF').files[0].name;

    var obja = JSON.stringify({
        idPeriodoS: idPeriodo, tipoClienteS: tipoCliente, RucS: ruc, archivoS: archivo
    });

    $.ajax({
        type: "POST",
        url: "HistorialFacturas.aspx/RegistrarFacturacionSocios",
        data: obja,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            if (response.d == false) { FaltaRUC(); }
            else { alertme();}
        }
    });
}

//FUNCIONES PARA ACTUALIZAR
$(document).on('click', '.btn-update', function (e) {
    $("#btnRegistrar").hide();
    $("#btnActualizar").show();
    $("#exampleModal select").val("0");
    $("#archivoPDF").val("");
    $('.file-upload').file_upload();
    $('.file-upload-text').text("Ingrese el archivo PDF ...");
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    data = tabla.fnGetData(row);
    comboPeriodoModal();
    RellenarDatosActualizar();
});

function RellenarDatosActualizar() {
    document.getElementById("ddlPeriodo").value = data[14];
    document.getElementById("ddlCliente").value = data[13];
    if (data[13] == "PROPIO") {
        $("#bloqRUC").hide();
    } else {
        $("#bloqRUC").show();
        $("#txtRUC").val(data[5]);
    }
    if (data[15] == "") {
        $("#bloqPDF").show();
    } else { $("#bloqPDF").hide(); }
}

$("#btnActualizar").click(function (e) {
    e.preventDefault();
    if ($("#ddlPeriodo").val() == "0" || $("#ddlCliente").val() == "0" ||
        ($("#txtRUC").val() == "" && $("#ddlCliente").val() == "TERCERO") ||
        (document.getElementById('archivoPDF').files.length == 0 && data[15] == "")) {
        FaltaDatos();
    } else {
        procesoPDF = 1;
        if (data[15] == "") { GuardarPDF(); }
        else { ActualizarFacturacion(); }
    }
});

function ActualizarFacturacion() {
    var idPeriodo, tipoCliente, ruc;
    idPeriodo = $("#ddlPeriodo").val();
    tipoCliente = $("#ddlCliente").val();
    ruc = $("#txtRUC").val();
    if (data[15] == "") { archivo = document.getElementById('archivoPDF').files[0].name; }
    else { archivo = data[15];}

    var obja = JSON.stringify({
        idDatos: data[16], idPeriodoS: idPeriodo, tipoClienteS: tipoCliente, RucS: ruc, archivoS: archivo
    });

    $.ajax({
        type: "POST",
        url: "HistorialFacturas.aspx/ActualizarFacturacionSocios",
        data: obja,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            procesoPDF = 0;
            if (response.d == false) { FaltaRUC(); }
            else { DatosActualizados(); }
        }
    });
}


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
function DatosActualizados() {
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
function FaltaDatos() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'Debe completar todos los datos porfavor',
        type: "error"
    });
}
function CambiarNombrePDF() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'El nombre del archivo ya existe',
        type: "error"
    });
}
function FaltaRUC() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'Porfavor actualice el RUC de su perfil',
        type: "error"
    });
}

sendDataAjax();
