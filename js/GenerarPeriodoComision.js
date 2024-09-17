//DEFINIR VARIABLES
var tabla, aaf, data, estados;

$.ajax({
    type: "POST",
    url: "GenerarPeriodoComision.aspx/ListaPeriodoRango",
    data: "{}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    async: false,
    success: function (result) {
        $("#cboRango").empty();
        $("#cboRango").append("<option value='0'>--Select--</option>");
        $.each(result.d, function (key, value) {
            $("#cboRango").append($("<option></option>").val(value.idPeriodo).html(value.nombre));
        });
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus + ": " + XMLHttpRequest.responseText);
    }
});

//LISTADO DE PROMOCIONES
function addRowDT(obj) {
    tabla = $("#tbl_periodo").DataTable();
    tabla.fnClearTable();

    for (var i = 0; i < obj.length; i++) {

        estados = (obj[i].estado == true ? "Activo" : "Desactivado");
        //visualizar = (obj[i].estado == true ? "Activo" : "Desactivado");

        tabla.fnAddData([
            obj[i].idPeriodoComision,
            obj[i].nombre,
            obj[i].fechaInicio,
            obj[i].fechaFin,
            estados,
            '<button id="Actualizar" value="Actualizar" title="Actualizar" class="btn btn-primary btn-update" data-toggle="modal" data-target="#exampleModal"><i class="far fa-edit"></i></button>',
            '<button value="Eliminar" title="Eliminar" class="btn btn-danger btn-delete"><i class="far fa-minus-square"></i></button>',
            obj[i].idPeriodo,
            obj[i].visualizar 

        ]);
    }
}

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "GenerarPeriodoComision.aspx/ListaPeriodo",
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

function cantPeriodo() {

    var estadoG;
    estadoG = document.getElementById("chkGeneral").checked;

    $.ajax({
        type: "POST",
        url: "GenerarPeriodoComision.aspx/ListaCantPeriodo",
        data: {},
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            var r = data.d;
            console.log(data.d);
            if (r > 0 & estadoG == true) {
                PeriodoActivo();
            } else {
                RegistroPeriodo();
            }
        }
    });
}

function codigoPeriodoActivo() {

    var estadoG, codigo;
    estadoG = document.getElementById("chkGeneral").checked;
    codigo = data[0];

    $.ajax({
        type: "POST",
        url: "GenerarPeriodoComision.aspx/ListaCodigoPeriodoActiva",
        data: {},
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            var r = data.d;
            console.log(data.d);
            if (estadoG == true & codigo != r) {
                if (r == "") {
                    updateDataAjax();
                } else {
                    PeriodoActivo();
                }

            } else {
                updateDataAjax();
            }
        }
    });
}

//CARGAR DATOS EN MODAL
function fillModalData() {
    var estGen;
    estGen = (data[4] == "Activo" ? true : false);

    $("#txtNombrePeriodo").val(data[1]);
    $("#cboRango").val(data[7]);
    $('.daterange').daterangepicker({
        singleDatePicker: true,
        startDate: data[2],
        showDropdowns: true,
        locale: { format: "DD/MM/YYYY" },
        autoApply: false
    });
    $("#fecha").val(data[2]);
    $("#fechaFin").val(data[3]);
    $("#chkGeneral").prop('checked', estGen).change();
    $("#chkVisu").prop('checked', data[8]).change();
}

// ABRIR MODAL
$("#btnNuevoPeriodo").click(function (e) {
    $("#btnRegistrar").show();
    $("#btnActualizar").hide();
    $("#exampleModal input").val("");
    $("#exampleModal input[type='checkbox']").prop('checked', false).change();
    var day = moment().format("DD/MM/YYYY");
    $('#fecha').val(day);
    $('.daterange').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        locale: { format: "DD/MM/YYYY" },
        autoApply: false
    });
});

//FUNCIONES PARA REGISTRAR
$("#btnRegistrar").click(function (e) {
    var nombre = $("#txtNombrePeriodo").val();
    var fecha = $("#fecha").val();
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
    var nombre, fecha, fechafin, estadoG, idPeriodoRango, visual;

    nombre = $("#txtNombrePeriodo").val();
    estadoG = document.getElementById("chkGeneral").checked;
    visual = document.getElementById("chkVisu").checked;
    fecha = $("#fecha").val();
    fechafin = $("#fechaFin").val();
    idPeriodoRango = $("#cboRango").val();

    var obja = JSON.stringify({
        nom_periodoSend: nombre, fecInicioSend: fecha, fecFinSend: fechafin, estado_genSend: estadoG, periodoSend: idPeriodoRango, visual: visual
    });



    $.ajax({
        type: "POST",
        url: "GenerarPeriodoComision.aspx/RegistrarPeriodo",
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
    $("#exampleModal input[type='checkbox']").prop('checked', false).change();
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    data = tabla.fnGetData(row);
    console.log(data);
    fillModalData();
});

function updateDataAjax() {

    var nombre, fecha, fechafin, estadoG, idPeriodoRango, visual;

    nombre = $("#txtNombrePeriodo").val();
    estadoG = document.getElementById("chkGeneral").checked;
    visual = document.getElementById("chkVisu").checked;
    fecha = $("#fecha").val();
    fechafin = $("#fechaFin").val();
    idPeriodoRango = $("#cboRango").val();

    idPeriodo = data[0];

    var obj = JSON.stringify({
        id_periodoSend: idPeriodo, nom_periodoSend: nombre, fecInicioSend: fecha, fecFinSend: fechafin, estado_genSend: estadoG, idRangoSend: idPeriodoRango, visual: visual
    });

    $.ajax({
        type: "POST",
        url: "GenerarPeriodoComision.aspx/ActualizarPeriodo",
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
                window.location = "GenerarPeriodoComision.aspx";
            });
        }
    });
}

$("#btnActualizar").click(function (e) {
    e.preventDefault();
    codigoPeriodoActivo();
});

//ALERTAS
function alertme() {
    Swal.fire({
        title: 'Perfecto!',
        text: 'Periodo Registrado',
        type: "success"
    }).then(function () {
        window.location = "GenerarPeriodoComision.aspx";
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