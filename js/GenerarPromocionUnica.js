//DEFINIR VARIABLES
var tabla, aaf, data, estados;

$(function () {
    $("#exampleModal input").autocomplete({
        source: function (request, responce) {
            $.ajax({
                url: "Autocompletado.asmx/FiltrarNombreProductos",
                method: "post",
                CORS: true,
                contentType: "application/json;charset=utf-8",
                data: "{ 'palabra': '" + request.term + "'}",
                dataType: 'json',
                success: function (data) {
                    responce(data.d);
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    console.log("In The ERROR");
                    console.log(XMLHttpRequest);
                    console.log(textStatus);
                    console.log(errorThrown);
                }
            });
        }
    });
});

//LISTADO DE PROMOCIONES
function addRowDT(obj) {
    tabla = $("#tbl_periodo").DataTable();
    tabla.fnClearTable();

    for (var i = 0; i < obj.length; i++) {

        if (obj[i].Estado == true) {
            estados = "Activo";
        } else {
            estados = "Desactivado";
        }

        tabla.fnAddData([
            obj[i].IdPromo,
            obj[i].FechaInicio,
            obj[i].FechaFin,
            estados,
            '<button id="Actualizar" value="Actualizar" title="Actualizar" class="btn btn-primary btn-update" data-toggle="modal" data-target="#exampleModal"><i class="far fa-edit"></i></button>',
            '<button value="Eliminar" title="Eliminar" class="btn btn-danger btn-delete"><i class="far fa-minus-square"></i></button>',
            obj[i].ProductoPais,
            obj[i].Cantidad,
            obj[i].Estado
        ]);
    }
}

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "PromocionUnica.aspx/ListaPromocion",
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

function cantPromo() {

    var estadoG;
    estadoG = document.getElementById("chkGeneral").checked;

    $.ajax({
        type: "POST",
        url: "PromocionUnica.aspx/ListaCantPromoUnica",
        data: {},
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            var r = data.d;
            console.log(data.d);
            if (r > 0 & estadoG == true) {
                PromoActiva();
            } else {
                RegistroPromoUnica();
            }
        }
    });
}

function codigoPromoActiva() {

    var estadoG, codigo;
    estadoG = document.getElementById("chkGeneral").checked;
    codigo = data[0];

    $.ajax({
        type: "POST",
        url: "PromocionUnica.aspx/ListaCodigoPromoActiva",
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
                    PromoActiva();
                }

            } else {
                updateDataAjax();
            }
        }
    });
}

//CARGAR DATOS EN MODAL
function fillModalData(){
    $("#txtNombreProducto").val(data[6]);
    $("#txtCantidad").val(data[7]);
    $('.daterange').daterangepicker({
        singleDatePicker: true,
        startDate: data[1],
        showDropdowns: true,
        locale: { format: "DD/MM/YYYY" },
        autoApply: false
    });
    $("#fecha").val(data[1]);
    $("#fechaFin").val(data[2]);
    $("#chkGeneral").prop('checked', data[8]).change();
}

// ABRIR MODAL
$("#btnNuevaPromo").click(function (e) {
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
    var nombre = $("#txtNombreProducto").val();
    var fecha = $("#fecha").val();
    var fechafin = $("#fechaFin").val();
    var fecha1 = toDate(fecha);
    var fecha2 = toDate(fechafin);

    e.preventDefault();

    if (nombre == "") {
        FaltaProducto();
    } else if (fecha == "") {
        FaltaRango();
    } else if (fechafin == "") {
        FaltaRangoFin();
    } else if (fecha2 < fecha1) {
        FechaIncorrecta();
    } else {
        cantPromo();
    }
});

function toDate(dateStr) {
    var parts = dateStr.split("/")
    return new Date(parts[2], parts[1] - 1, parts[0])
}

function RegistroPromoUnica(){
    var nombre, fecha, fechafin, estadoG, cantidad;

    nombre = $("#txtNombreProducto").val();
    cantidad = $("#txtCantidad").val();
    estadoG = document.getElementById("chkGeneral").checked;
    fecha = $("#fecha").val();
    fechafin = $("#fechaFin").val();

    var obja = JSON.stringify({
        nom_promoSend: nombre, fecInicioSend: fecha, fecFinSend: fechafin, estado_genSend: estadoG, cantidadSend: cantidad
    });



    $.ajax({
        type: "POST",
        url: "PromocionUnica.aspx/RegistrarPromoUnica",
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

$("#btnActualizar").click(function (e) {
    e.preventDefault();
    codigoPromoActiva();
});

function updateDataAjax() {

    var nombre, fecha, fechafin, estadoG, cantidad;

    nombre = $("#txtNombreProducto").val();
    cantidad = $("#txtCantidad").val();
    estadoG = document.getElementById("chkGeneral").checked;
    fecha = $("#fecha").val();
    fechafin = $("#fechaFin").val();

    idPromo = data[0];

    var obj = JSON.stringify({
        id_promoSend: idPromo, nom_promoSend: nombre, fecInicioSend: fecha, fecFinSend: fechafin, estado_genSend: estadoG, cantidadSend: cantidad
    });

    $.ajax({
        type: "POST",
        url: "PromocionUnica.aspx/ActualizarPromocionUnica",
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
                text: 'Promocion Actualizada',
                type: "success"
            }).then(function () {
                window.location = "PromocionUnica.aspx";
            });
        }
    });
}

//ALERTAS
function alertme() {
    Swal.fire({
        title: 'Perfecto!',
        text: 'Periodo Registrado',
        type: "success"
    }).then(function () {
        window.location = "PromocionUnica.aspx";
    });
}
function FaltaProducto() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró el nombre del Producto',
        type: "error"
    });
}
function FaltaRango() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró el rango de la promocion',
        type: "error"
    });
}
function FaltaRangoFin() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró el rango de fin de la promocion',
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
function PromoActiva() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'Ya tiene una promocion activa',
        type: "error"
    });
}

sendDataAjax();
