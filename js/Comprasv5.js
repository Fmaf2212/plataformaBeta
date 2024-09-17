//VARIABLES
var tabla, data, estados, tipoPag, tabla2, data2, filtroaplicado;
filtroaplicado = 0;

// LISTAR COMPRAS

tabla = $("#tbl_compras").DataTable();

function addRowDT(obj) {
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
        if (obj[i].TipoPago == 01) {
            tipoPag = "DEPOSITO";
        } else if (obj[i].TipoPago == 02) {
            tipoPag = "EFECTIVO";
        } else if (obj[i].TipoPago == 04) {
            tipoPag = "PAGO EFECTIVO";
        } else if (obj[i].TipoPago == 05) {
            tipoPag = "CANJE";
        } else if (obj[i].TipoPago == 03) {
            tipoPag = "VISA";
        }
        else if (obj[i].TipoPago == 10) {
            tipoPag = "TUPAY";
        }
        else { tipoPag = "ERROR"; }
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
            obj[i].PaqueteSocio,
            '<button id="Detalle" value="Detalle" title="Detalle" class="btn btn-primary btn-deta" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-search"></i></button>',
            '<button value="Retornar" title="Retornar" class="btn btn-success btn-return"><i class="fas fa-exchange-alt"></i></button>',
            '<button value="Reenviar" title="Re-enviar" class="btn btn-danger btn-rego"><i class="fas fa-share"></i></button>',
            '<button value="Eliminar" title="Eliminar" class="btn btn-danger btn-delet"><i class="far fa-minus-square"></i></button>',
            '<button value="CIP" title="CIP" class="btn btn-primary btn-cip"><i class="fab fa-mixcloud"></i></button>',
            obj[i].Ticket
        ]);
    }
}

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "ReporteCompras.aspx/ListarCompraGeneral",
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
        url: "ReporteCompras.aspx/ListarCompraGeneralFiltrado",
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

$("#btnGenerar").click(function (e) {
    e.preventDefault();
    var fecha1 = $("#fecha").val();
    var fecha2 = $("#fechaFin").val();
    sendDataAjaxFiltro(fecha1, fecha2);
});

$(document).on('click', '.btn-deta', function (e) {
    e.preventDefault();
    var row2 = $(this).parent().parent()[0];
    var datax = tabla.fnGetData(row2);
    console.log(datax);
    id2 = datax[16];

    sendDetalleAjax(id2);
});

$(document).on('click', '.btn-return', function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Estás seguro de retornar la compra?',
        text: "Esto no puede revertirse!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, retornar!'
    }).then((result) => {
        if (result.isConfirmed) {
            var row2 = $(this).parent().parent()[0];
            var datax = tabla.fnGetData(row2);
            console.log(datax);
            id2 = datax[16];
            retornarCompra(id2);
        }
    });
});

$(document).on('click', '.btn-delet', function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Estás seguro de eliminar la compra?',
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
            console.log(datax);
            var id1 = datax[16], id2 = datax[2], id3 = datax[3], id4 = datax[5], id5 = datax[8];

            eliminarCompra(id1, id2, id3, id4, id5);
        }
    });
});

$(document).on('click', '.btn-rego', function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Estás seguro de reenviar la compra?',
        text: "Esto no puede revertirse!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, reenviar!'
    }).then((result) => {
        if (result.isConfirmed) {
            var row2 = $(this).parent().parent()[0];
            var datax = tabla.fnGetData(row2);
            console.log(datax);
            id2 = datax[16];
            reenviarCompra(id2);
        }
    });
    
});

$(document).on('click', '.btn-cip', function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Estás seguro de generar un nuevo CIP?',
        text: "Esto no puede revertirse!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, generar!'
    }).then((result) => {
        if (result.isConfirmed) {
            var row2 = $(this).parent().parent()[0];
            var datax = tabla.fnGetData(row2);
            console.log(datax);
            id2 = datax[16];

            nuevoCIP(id2);
        }
    });
    
});

function eliminarCompra(ticketE, idop, nombres, monto, tipopago) {

    var ticketSend = ticketE;
    var obj = JSON.stringify({ ticketS: ticketSend, idopS: idop, nombreS: nombres, montoS: monto, tipoPagoS: tipopago });
    $.ajax({
        type: "POST",
        url: "ReporteCompras.aspx/EliminarCompra",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            console.log(data.d);
            Swal.fire({
                title: 'Perfecto!',
                text: 'Compra Eliminada',
                type: "success"
            }).then(function () {
                window.location = "ReporteCompras.aspx";
            });
        }
    });
}

function reenviarCompra(ticketRG) {

    var ticketSend = ticketRG;
    var obj = JSON.stringify({ ticketS: ticketSend });
    $.ajax({
        type: "POST",
        url: "ReporteCompras.aspx/ReenviarCompra",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            console.log(data.d);
            if (data.d != "") {
                Swal.fire({
                    title: 'Perfecto!',
                    text: 'Nuevo IDOP: ' + data.d,
                    type: "success"
                }).then(function () {
                    //window.location = "ReporteCompras.aspx";
                    var fecha1 = $("#fecha").val();
                    var fecha2 = $("#fechaFin").val();
                    sendDataAjaxFiltro(fecha1, fecha2);
                });
            }
            else {
                Swal.fire({
                    title: 'Ooops...!',
                    text: 'El ticket seleccionado no se puede reenviar',
                    type: "error"
                });
            }
            
        }
    });
}

function retornarCompra(ticketR) {

    var ticketSend = ticketR;
    var obj = JSON.stringify({ ticketS: ticketSend });
    $.ajax({
        type: "POST",
        url: "ReporteCompras.aspx/RetornarCompra",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            console.log(data.d);
            Swal.fire({
                title: 'Perfecto!',
                text: 'Compra Retornada',
                type: "success"
            }).then(function () {
                window.location = "ReporteCompras.aspx";
            });
        }
    });
}

function sendDetalleAjax(dataid2) {

    var obj2 = JSON.stringify({ id: dataid2 });

    $.ajax({
        type: "POST",
        url: "ReporteCompras.aspx/ListaDetalleComprasGeneral",
        data: obj2,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data2) {
            console.log(data2.d);
            addRowDetalle(data2.d);
            datosDetalleCompra(data2.d);
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
            obj2[i].Cantidad,
            'S/.'+obj2[i].PrecioPS
        ]);
    }
}

function CargarTipoCompra() {
    $.ajax({
        type: "POST",
        url: "ReporteCompras.aspx/ListaTipoCompraDetalle",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#cboTipoCompra").empty();
            $("#cboTipoCompra").append("<option value='0'>--Select--</option>");
            $.each(result.d, function (key, value) {
                $("#cboTipoCompra").append($("<option></option>").val(value.idTipoCompra).html(value.nombreTipoCom));
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
}

function CargarTipoPago() {
    $.ajax({
        type: "POST",
        url: "ReporteCompras.aspx/ListaTipoPagoDetalle",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#cboTipoPago").empty();
            $("#cboTipoPago").append("<option value='0'>--Select--</option>");
            $.each(result.d, function (key, value) {
                $("#cboTipoPago").append($("<option></option>").val(value.idTipoPago).html(value.nombreTipoPago));
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
}

function CargarEstadoCompra() {
    $.ajax({
        type: "POST",
        url: "ReporteCompras.aspx/ListaEstadoDetalle",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#cboEstado").empty();
            $.each(result.d, function (key, value) {
                $("#cboEstado").append($("<option></option>").val(value.idEstado).html(value.descEstado));
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
}

function CargarDespacho() {
    $.ajax({
        type: "POST",
        url: "ReporteCompras.aspx/ListaDespachoDetalle",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#cboDespacho").empty();
            $.each(result.d, function (key, value) {
                $("#cboDespacho").append($("<option></option>").val(value.idDespacho).html(value.descDespacho));
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
}

function datosDetalleCompra(obj3) {
    var fechaSub = obj3[0].FechaCOM;
    
    $("#txtTicket").val(obj3[0].TicketCOM);
    $("#txtMontoPagar").val(obj3[0].MontoPagarCOM);
    $("#txtMontoComision").val(obj3[0].MontoComisionCOM);
    $("#txtPuntosTotal").val(obj3[0].PuntosTotalCOM);
    $("#txtMontoTotal").val(obj3[0].MontoTotalCOM);
    $("#txtfechaCompra").val(fechaSub.substr(0,10));
    $("#txtCanProductos").val(obj3[0].CantidadCOM);
    $("#txtIDOP").val(obj3[0].IdopCOM);
    $("#cboTipoCompra").change(function () {
    });
    CargarTipoCompra();
    $("#cboTipoCompra").val(obj3[0].TipoCompraCOM);
    $("#cboTipoPago").change(function () {
    });
    CargarTipoPago();
    $("#cboTipoPago").val(obj3[0].TipoPagoCOM);
    $("#cboEstado").change(function () {
    });
    CargarEstadoCompra();
    $("#cboEstado").val(obj3[0].EstadoCOM);
    $("#cboDespacho").change(function () {
    });
    CargarDespacho();
    $("#cboDespacho").val(obj3[0].descDespacho);
}

function updateDataAjax() {

    var ticket, montoPagar, montoComision, puntosTotal, montoTotal, fechaCompra, cantidadProd, idop, idtipocompra,tipoCompra, tipoPagoDet, estado, despacho;

    ticket = $("#txtTicket").val();
    montoPagar = $("#txtMontoPagar").val();
    montoComision = $("#txtMontoComision").val();
    puntosTotal = $("#txtPuntosTotal").val();
    montoTotal = $("#txtMontoTotal").val();
    fechaCompra = $("#txtfechaCompra").val();
    cantidadProd = $("#txtCanProductos").val();
    idop = $("#txtIDOP").val();
    idtipocompra = $("#cboTipoCompra").val();
    tipoCompra = $("#cboTipoCompra option:selected").text();
    tipoPagoDet = $("#cboTipoPago").val();
    estado = $("#cboEstado").val();
    despacho = $("#cboDespacho").val();

    var obj9 = JSON.stringify({
        ticketCom1: ticket, montoPagarCom1: montoPagar, montoComisionCom1: montoComision, puntosTotalCom1: puntosTotal,
        montoTotalCom1: montoTotal, fechaCom1: fechaCompra, cantidadProdCom1: cantidadProd, idopCom1: idop, 
        idtipoCom1: idtipocompra, tipoCom1: tipoCompra, tipoPagoCom1: tipoPagoDet, estadoCom1: estado, despachoCom1: despacho
    });
           

    $.ajax({
        type: "POST",
        url: "ReporteCompras.aspx/ActualizarCompraDetalle",
        data: obj9,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            console.log(response);
            Swal.fire({
                title: 'Perfecto!',
                text: 'Compra Actualizada',
                type: "success"
            }).then(function () {
                window.location = "ReporteCompras.aspx";
            });
        }
    });
}

function nuevoCIP(ticketCIP) {

    var obj = JSON.stringify({ ticketS: ticketCIP });
    $.ajax({
        type: "POST",
        url: "ReporteCompras.aspx/NuevoCIP",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            console.log(data.d);
            if (data.d != "") {
                Swal.fire({
                    title: 'Perfecto!',
                    text: 'Nuevo CIP: ' + data.d,
                    type: "success"
                }).then(function () {
                    window.location = "ReporteCompras.aspx";
                });
            }
            else {
                Swal.fire({
                    title: 'Ooops...!',
                    text: 'El CIP no se pudo generar',
                    type: "error"
                });
            }

        }
    });
}

$("#btnActualizar").click(function (e) {
    e.preventDefault();
    updateDataAjax();

});

var day = moment().format("DD/MM/YYYY");
$('#fecha').val(day);
$('.daterange').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    locale: { format: "DD/MM/YYYY" },
    autoApply: true
});

if (filtroaplicado == 0) {
    sendDataAjax();
} else { filtroaplicado = 0; }