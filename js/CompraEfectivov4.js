//VARIABLES
var tabla, tabla2, data, data2, estados, tipoPag, filtroaplicado;
filtroaplicado = 0;

// LISTAR COMPRAS

function addRowDT(obj) {
    tabla = $("#tbl_compras").DataTable();
    tabla.fnClearTable();
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].Estado == 0) {
            estados = "Pendiente Despacho";
        } else if (obj[i].Estado == 1) {
            estados = "Pendiente";
        } else if (obj[i].Estado == 2) {
            estados = "Validando Voucher";
        } else {
            estados = "Anulado";
        }
        if (obj[i].TipoPago == 02) {
            tipoPag = "EFECTIVO";
        } else {
            tipoPag = "CANJE";
        }
        tabla.fnAddData([
            obj[i].Ticket,
            obj[i].FechaPagoReporte,
            obj[i].IdopPeruShop,
            (obj[i].NombreCliente + " " + obj[i].ApellidoPat + " " + obj[i].ApellidoMat),
            obj[i].Cantidad,
            obj[i].MontoAPagar,
            obj[i].PuntosTotal,
            obj[i].Despacho,
            tipoPag,
            estados,
            '<button id="Detalle" value="Detalle" title="Detalle" class="btn btn-primary btn-deta" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-search"></i></button>',
            '<button id="ValidarC" value="Validar" title="Validar" class="btn btn-success btn-val"><i class="fas fa-check"></i></button>',
            obj[i].Ticket,
            obj[i].DNICliente,
            obj[i].DNIDespacho,
            obj[i].idTipoCompra,
            obj[i].CodCliente,
            obj[i].TipoCompra,
            obj[i].NotaDelivery,
            obj[i].Comprobante,
            obj[i].Ruc,
            obj[i].DireccionCliente,
            obj[i].DireccionRUC

        ]);
    }
}

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "ComprasEfectivo.aspx/ListarCompraEfectivo",
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

function sendDataAjaxFiltro(fecha1, fecha2) {
    filtroaplicado = 1;
    var obj = JSON.stringify({ fecha1: fecha2, fecha2: fecha1 });

    $.ajax({
        type: "POST",
        url: "ComprasEfectivo.aspx/ListarCompraEfectivoFiltrado",
        data: obj,
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

//validar
$(document).on('click', '.btn-val', function (e) {
    e.preventDefault();
    var row, dataRow, id, dni, nombre, estable, idcliente, idtipoco, tipocom, fechaSim, notaDel,
        comprobante, ruc, direccion, tipopag, dir_ruc;
    row = $(this).parent().parent()[0];
    dataRow = tabla.fnGetData(row);
    id = dataRow[12];
    dni = dataRow[13];
    idcliente = dataRow[16];
    idtipoco = dataRow[15];
    nombre = dataRow[3];
    estable = dataRow[7];
    tipocom = dataRow[17];
    fechaSim = dataRow[1];
    notaDel = dataRow[18];
    comprobante = dataRow[19];
    ruc = dataRow[20];
    direccion = dataRow[21];
    tipopag = dataRow[8];
    dir_ruc = dataRow[22];

    valDataAjax(id, dni, nombre, estable, idcliente, idtipoco, tipocom, fechaSim, notaDel, comprobante, ruc, direccion, tipopag, dir_ruc);
    sendDataAjax();
});

function valDataAjax(dataid, dni, nombre, estable, idcliente, idtipoco, tipocom, fechaSim, notaDel, comprobante, ruc, direccion, tipopag, dir_ruc) {
    var obj = JSON.stringify({
        id: dataid, dniSend: dni, nombreSend: nombre, estabSend: estable, idclienteSend: idcliente,
        tipocomSend: idtipoco, tcomSend: tipocom, fechaSimpl: fechaSim, notaDely: notaDel,
        comprobanteS: comprobante, rucS: ruc, direccionS: direccion, tipoPagoS: tipopag, direccion_ruc: dir_ruc
    });

    $.ajax({
        type: "POST",
        url: "ComprasEfectivo.aspx/EnviarPeruShop",
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
                text: 'IDOP ' + response.d,
                type: "success"
            });
        }
    });
}

//detalle

$(document).on('click', '.btn-deta', function (e) {
    e.preventDefault();
    var row2 = $(this).parent().parent()[0];
    var datax = tabla.fnGetData(row2);
    console.log(datax);
    id2 = datax[12];

    sendDetalleAjax(id2);
});

function sendDetalleAjax(dataid2) {

    var obj2 = JSON.stringify({ id: dataid2});

    $.ajax({
        type: "POST",
        url: "ComprasEfectivo.aspx/ListaDetalleCompraEfectivo",
        data: obj2,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data2) {
            console.log(data2.d);
            addRowDetalle(data2.d);
        }
    });
}

function addRowDetalle(obj2) {
    tabla2 = $("#tbl_detalle").DataTable();
    tabla2.fnClearTable();
    for (var i = 0; i < obj2.length; i++) {
        var imagenProducto = obj2[i].Foto;
        tabla2.fnAddData([
            obj2[i].Nombre,
            '<img src="products/' + imagenProducto + '" style="height: 50px">',
            obj2[i].CantiPS,
            obj2[i].PrecioPS
        ]);
    }
}

var day = moment().format("DD/MM/YYYY");
$('#fecha').val(day);
$('.daterange').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    locale: { format: "DD/MM/YYYY" },
    autoApply: false
});

$("#btnGenerar").click(function (e) {
    e.preventDefault();
    var fecha1 = $("#fecha").val();
    var fecha2 = $("#fechaFin").val();
    sendDataAjaxFiltro(fecha1, fecha2);
});

if (filtroaplicado == 0) {
    sendDataAjax();
} else { filtroaplicado = 0; }
