var tabla, data, tabla2, data2, data3;

tabla3 = $("#tbl_detalle").DataTable({
    "bPaginate": false,
    "bSort": false
});

tabla = $("#tbl_cdr").DataTable();

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "AprobarPedidosCDR_Bolivia.aspx/ListarSolicitudesTotales",
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

    tabla.fnClearTable();
    for (var i = 0; i < obj.length; i++) {
        var btnAprob = "";
        var tipoCompra = "";
        var url = (obj[i].TipoCompra === "13") ? "canjeCDR/" + obj[i].Voucher : "voucherCDR/" + obj[i].Voucher;
        if (obj[i].Estado == "Aprobado" || (obj[i].TipoCompra == "1" || obj[i].TipoCompra == "2" || obj[i].TipoCompra == "9" || obj[i].TipoCompra == "12")) { btnAprob = "style='display:none'"; }
        tipoCompra = (obj[i].TipoCompra === "1") ? "ADICIONAL" : (obj[i].TipoCompra === "2") ? "EMERGENCIA" :
            (obj[i].TipoCompra === "9") ? "EXTORNO" : (obj[i].TipoCompra === "10") ? "ADICIONAL - DEPOSITO" :
                (obj[i].TipoCompra === "11") ? "EMERGENCIA - DEPOSITO" : (obj[i].TipoCompra === "13") ? "ADICIONAL - CANJE" :
                    (obj[i].TipoCompra === "12") ? "REPOSICION" : (obj[i].TipoCompra === "14") ? "EMERGENCIA - CANJE" : "SALDO DISPONIBLE";
        tabla.fnAddData([
            obj[i].IdSolicitud,
            obj[i].FechaSolicitud,
            obj[i].IDOP1,
            obj[i].IDOP2,
            obj[i].CDRPS,
            obj[i].Estado,
            obj[i].MontoTotal,
            tipoCompra,
            '<p> <a href="' + url + '" target="_blank">' + obj[i].Voucher + '</a></p>',
            '<button value="Detalle" title="Detalle" type="button" class="btn btn-primary btn-deta" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-search"></i></button>',
            '<button value="Aprobar" title="Aprobar" type="button" class="btn btn-success btn-aprob"' + btnAprob + '><i class="fas fa-check"></i></button>',
            '<button value="Eliminar" title="Eliminar" type="button" class="btn btn-danger btn-delete"' + btnAprob + '><i class="far fa-minus-square"></i></button>',
            obj[i].IdSolicitud,
            obj[i].DNICDR,
            obj[i].TipoCompra
        ]);
    }
}

$(document).on('click', '.btn-delete', function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Estás seguro de eliminar el pedido?',
        text: "Esto no puede revertirse!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
        if (result.isConfirmed) {
            var row2 = $(this).parent().parent()[0];
            var datax = tabla.fnGetData(row2);
            eliminarSolicitud(datax[12], datax[13], datax[14]);
        }
    });
});

$(document).on('click', '.btn-aprob', function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Estás seguro de validar el pedido?',
        text: "Esto no puede revertirse!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, validar!'
    }).then((result) => {
        if (result.isConfirmed) {
            var row2 = $(this).parent().parent()[0];
            var datax = tabla.fnGetData(row2);
            aprobarSolicitud(datax[12], datax[13], datax[6], datax[1], datax[14], datax[7]);
        }
    });
});

function eliminarSolicitud(idSoli, dniCDR, tipoCompra) {
    var fecha1 = $("#fechaInicio").val();
    var fecha2 = $("#fechaFin").val();

    var obj = JSON.stringify({ idPedido: idSoli, documento: dniCDR, TipoPagoS: tipoCompra });
    $.ajax({
        type: "POST",
        url: "AprobarPedidosCDR_Bolivia.aspx/EliminarSolicitudCDR",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data3) {
            console.log(data3.d);
            Swal.fire({
                title: 'Perfecto!',
                text: 'Solicitud eliminada',
                type: "success"
            }).then(function () {
                sendDataAjaxFiltro(fecha1, fecha2);
            });
        }
    });
};

function aprobarSolicitud(idSoli, dniCDR, monto, fecha, tipoC, txTipoC) {
    var fecha1 = $("#fechaInicio").val();
    var fecha2 = $("#fechaFin").val();

    var obj = JSON.stringify({ idSolicitud: idSoli, dni: dniCDR, fecha: fecha, monto: monto, tipoCompra: tipoC, txTipoCompra: txTipoC });
    $.ajax({
        type: "POST",
        url: "AprobarPedidosCDR_Bolivia.aspx/AprobarSolicitudCDR",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data3) {
            console.log(data3.d);
            Swal.fire({
                title: 'Perfecto!',
                text: 'Solicitud Aprobada',
                type: "success"
            }).then(function () {
                sendDataAjaxFiltro(fecha1, fecha2);
            });
        }
    });
}

$(document).on('click', '.btn-deta', function (e) {
    e.preventDefault();
    var row2 = $(this).parent().parent()[0];
    var datax = tabla.fnGetData(row2);
    $("#txtCDRDetalle").val(datax[4]);
    sendDataAjaxDetalle(datax[12]);
});

function sendDataAjaxDetalle(idSoli) {

    var obj = JSON.stringify({ idSolicitud: idSoli });
    $.ajax({
        type: "POST",
        url: "AprobarPedidosCDR_Bolivia.aspx/ListarProductosxSolicitud",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data2) {
            console.log(data2.d);
            addRowDTDetalle(data2.d);
        }
    });
}

function addRowDTDetalle(obj) {
    tabla3.fnClearTable();
    for (var i = 0; i < obj.length; i++) {
        var imagenProducto = obj[i].Imagen;
        var cant = obj[i].Cantidad;
        tabla3.fnAddData([
            obj[i].Fila,
            obj[i].NombreProducto,
            '<img src="products/' + imagenProducto + '" style="height: 80px">',
            obj[i].IDPS,
            '<input type="text" id="cantA' + i + '" name="" class="form-control daterange" style="background-color: lightgreen; width:90px" readonly value="' + cant + '">'
        ]);
    }
}

$("#btnFiltrar").click(function (e) {
    e.preventDefault();
    var fecha1 = $("#fechaInicio").val();
    var fecha2 = $("#fechaFin").val();
    sendDataAjaxFiltro(fecha1, fecha2);
});

function sendDataAjaxFiltro(fecha1, fecha2) {
    var obj = JSON.stringify({ fecha1: fecha1, fecha2: fecha2 });
    $.ajax({
        type: "POST",
        url: "AprobarPedidosCDR_Bolivia.aspx/ListarSolicitudesTotalesFiltro",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            addRowDT(data.d);
        }
    });
}

sendDataAjax();