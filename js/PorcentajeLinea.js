var tabla3;
sendDataAjax();
ObtenerFecha();

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "PorcentajeLinea.aspx/ListaCDRPorcentaje",
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
    tabla = $("#tbl_cdr").DataTable();
    tabla.fnClearTable();
    for (var i = 0; i < obj.length; i++) {
        tabla.fnAddData([
            i,
            obj[i].CDRPS,
            obj[i].Apodo,
            '<button id="btnAbrirModal" value="Actualizar" title="Actualizar" type="button" class="btn btn-primary btn-deta" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-search"></i></button>'
        ]);
    }
}

$(document).on('click', '.btn-deta', function (e) {
    e.preventDefault();
    $("#exampleModal input").val("");
    var row2 = $(this).parent().parent()[0];
    var datax = tabla.fnGetData(row2);
    sendDataAjaxActualizar(datax[1]);
});

function sendDataAjaxActualizar(DNIC) {

    var obj = JSON.stringify({ DNICDR: DNIC });
    $.ajax({
        type: "POST",
        url: "PorcentajeLinea.aspx/ListaPorcentajeLineaXCDR",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data3) {
            console.log(data3.d);
            addRowDTActualizar(data3.d);
        }
    });
}

function addRowDTActualizar(obj) {
    tabla3 = $("#tbl_actualizar").DataTable();
    tabla3.fnClearTable();
    for (var i = 0; i < obj.length; i++) {
        tabla3.fnAddData([
            obj[i].IdLineaCDR,
            obj[i].NombreLinea,
            '<input type="text" id="cantA' + obj[i].IdLineaCDR + '" name="" class="form-control daterange" style="background-color: lightgreen; width:90px" value="' + obj[i].Porcentaje + '">',
            '<button id="btnUpdatePorcentaje" value="UpdateP" title="UpdateP" type="button" class="btn btn-success btn-updt"><i class="fas fa-check"></i></button>'
        ]);
    }
    document.getElementById('tbl_actualizar_filter').style.display = 'none';
}

$(document).on('click', '.btn-updt', function (e) {
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    var datax = tabla3.fnGetData(row);
    var porcentaje = $("#cantA" + datax[0]+"").val();
    ActualizarPorcentaje(datax[0], porcentaje);
});

function ActualizarPorcentaje(idPorc, PorcLinea) {

    var obj = JSON.stringify({ idPorcentaje: idPorc, porcentaje: PorcLinea });
    $.ajax({
        type: "POST",
        url: "PorcentajeLinea.aspx/ActualizarPorcentajeLineaCDR",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data4) {
            console.log(data4.d);
            alertme();
        }
    });
}

$("#btnInicioPorcentaje").click(function (e) {
    e.preventDefault();
    GenerarPorcentajeLineas();
});

function GenerarPorcentajeLineas() {

    $.ajax({
        type: "POST",
        url: "PorcentajeLinea.aspx/InicioPorcentajeLineaCDR",
        data: "{}",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data4) {
            console.log(data4.d);
        }
    });
}

function ObtenerFecha() {

    $.ajax({
        type: "POST",
        url: "PorcentajeLinea.aspx/ObtenerFecha",
        data: "{}",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data4) {
            console.log(data4.d);
        }
    });
}

function alertme() {
    Swal.fire({
        title: 'Perfecto!',
        text: 'Porcentaje Actualizado',
        type: "success"
    }).then(function () {
    });
}