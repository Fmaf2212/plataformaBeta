//DEFINIR VARIABLES
var tabla, aaf, data, estados;

//LISTADO
function addRowDT(obj) {
    tabla = $("#tbl_periodo").DataTable();
    tabla.fnClearTable();

    for (var i = 0; i < obj.length; i++) {
        tabla.fnAddData([
            obj[i].IdPeriodo,
            obj[i].Descripcion,
            obj[i].FechaInicio,
            obj[i].FechaFin,
            '<button id="Actualizar" value="Actualizar" title="Actualizar" class="btn btn-primary btn-update" data-toggle="modal" data-target="#exampleModal"><i class="far fa-edit"></i></button>',
            '<button value="Eliminar" title="Eliminar" class="btn btn-danger btn-delete"><i class="far fa-minus-square"></i></button>'

        ]);
    }
}

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "PeriodoCDR.aspx/ListaPeriodoCDR",
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

    $("#txtNombrePeriodo").val(data[1]);
    $('.daterange').daterangepicker({
        singleDatePicker: true,
        startDate: data[2],
        showDropdowns: true,
        locale: { format: "DD/MM/YYYY" },
        autoApply: true
    });
    $("#fechaInicio").val(data[2]);
    $("#fechaFin").val(data[3]);
}

// ABRIR MODAL
$("#btnNuevoPeriodo").click(function (e) {
    $("#btnRegistrar").show();
    $("#btnActualizar").hide();
    $("#exampleModal input").val("");
    var day = moment().format("DD/MM/YYYY");
    $('#fechaInicio').val(day);
    $('.daterange').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        locale: { format: "DD/MM/YYYY" },
        autoApply: true
    });
});

//FUNCIONES PARA REGISTRAR
$("#btnRegistrar").click(function (e) {
    var nombre = $("#txtNombrePeriodo").val();
    var fecha = $("#fechaInicio").val();
    var fechafin = $("#fechaFin").val();
    var fecha1 = toDate(fecha);
    var fecha2 = toDate(fechafin);

    e.preventDefault();

    if (nombre == "") {
        FaltaNombre();
    } else if (fecha == "") {
        FaltaRango();
    } else if (fechafin == "") {
        FaltaRangoFin();
    } else if (fecha2 < fecha1) {
        FechaIncorrecta();
    } else {
        RegistroPeriodo();
    }
});

function toDate(dateStr) {
    var parts = dateStr.split("/")
    return new Date(parts[2], parts[1] - 1, parts[0])
}

function RegistroPeriodo() {
    var nombre, fecha, fechafin, estadoG;

    nombre = $("#txtNombrePeriodo").val();
    fecha = $("#fechaInicio").val();
    fechafin = $("#fechaFin").val();

    var obja = JSON.stringify({
        nom_periodoSend: nombre, fecInicioSend: fecha, fecFinSend: fechafin
    });



    $.ajax({
        type: "POST",
        url: "PeriodoCDR.aspx/RegistrarPeriodoCDR",
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
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    data = tabla.fnGetData(row);
    fillModalData();
});

function updateDataAjax() {

    var nombre, fecha, fechafin;

    nombre = $("#txtNombrePeriodo").val();
    fecha = $("#fechaInicio").val();
    fechafin = $("#fechaFin").val();
    idPeriodo = data[0];

    var obj = JSON.stringify({
        id_periodoSend: idPeriodo, nom_periodoSend: nombre, fecInicioSend: fecha, fecFinSend: fechafin
    });

    $.ajax({
        type: "POST",
        url: "PeriodoCDR.aspx/ActualizarPeriodoCDR",
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
                text: 'Periodo Actualizado',
                type: "success"
            }).then(function () {
                window.location = "PeriodoCDR.aspx";
            });
        }
    });
}

$("#btnActualizar").click(function (e) {
    e.preventDefault();
    updateDataAjax();
});

//ALERTAS
function alertme() {
    Swal.fire({
        title: 'Perfecto!',
        text: 'Periodo Registrado',
        type: "success"
    }).then(function () {
        window.location = "PeriodoCDR.aspx";
    });
}
function FaltaNombre() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró el Nombre del Periodo',
        type: "error"
    });
}
function FaltaRango() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró el rango del periodo',
        type: "error"
    });
}
function FaltaRangoFin() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró el rango de fin del periodo',
        type: "error"
    });
}
function FechaIncorrecta() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'El rango de fechas es incorrecto',
        type: "error"
    });
}
function PeriodoActivo() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'Ya tiene un periodo activo',
        type: "error"
    });
}

sendDataAjax();