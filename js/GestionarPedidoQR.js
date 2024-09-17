var tabla2, data, data2, tabla3, data3, listapro = [], okRegistro, montoTotal = 0, tipoCom, dataPurchases = [];

//tabla2 = $("#tbl_Call").DataTable({});
sendDataAjax();

function ListarYW() {

    $.ajax({
        type: "POST",
        url: "GestionarStock.aspx/ListadoCDRCombo",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#cboYW").empty();
            $.each(result.d, function (key, value) {
                $("#cboYW").append($("<option></option>").val(value.CDRPS).html(value.Apodo));
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
}

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "GestionarPedidosQR.aspx/ListaComprasQR",
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
    var obj = JSON.stringify({ fecha1: fecha1, fecha2: fecha2 });

    $.ajax({
        type: "POST",
        url: "GestionarPedidosQR.aspx/ListaComprasQR_Filtrado",
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

function addRowDT(obj) {

    if (tabla2 != undefined) { tabla2.destroy(); }

    dataPurchases = obj;
    tabla2 = $('#tbl_Call').DataTable({
        data: obj,
        columns: [
            { data: 'Ticket' },
            { data: 'Nombres' },
            { data: 'FechaPagoReporte' },
            {
                "data": { 'Ticket': 'Ticket' },
                "render": function (data) {
                    var TP = (data.Estado == 1) ? "Pendiente" : "Realizado";
                    var label1 = '<label for="name">' + TP + '</label>';
                    return label1;
                }
            },
            { data: 'IdopPeruShop' },
            { data: 'MontoAPagar' },
            { data: 'Despacho' },
            {
                "data": { 'Ticket': 'Ticket' },
                "render": function (data) {
                    var TP = (data.EstadoRecojo == 1) ? "Recojo en tienda" : "Delivery";
                    var label1 = '<label for="name">' + TP + '</label>';
                    return label1;
                }
            },
            {
                "data": { 'Ticket': 'Ticket' },
                "render": function (data) {
                    var TP = (data.TipoPago == 02) ? "EFECTIVO" : "PAGO EFECTIVO";
                    var label1 = '<label for="name">' + TP + '</label>';
                    return label1;
                }
            },
            {
                "data": { 'Ticket': 'Ticket' },
                "render": function (data) {
                    var btnDetalle = '';
                    btnDetalle = '<button value="Detalle" type="button" class="btn btn-primary btn-deta" onclick=sendDetalleAjax(' + "'" + data.Ticket + "'" + ');><i class="fas fa-search"></i></button>';
                    return btnDetalle;
                }
            },
            {
                "data": { 'Ticket': 'Ticket' },
                "render": function (data) {
                    var btnAprobar = '';
                    var display = (data.Estado == 0) ? "display: none; " : "";
                    btnAprobar = '<button value="Aprobar" type="button" title="Aprobar" style="' + display + '" class="btn btn-success btn-aprob"><i class="fas fa-check"></i></button>';
                    return btnAprobar;
                }
            },
            {
                "data": { 'Ticket': 'Ticket' },
                "render": function (data) {
                    var btnRemove = '';
                    var display = (data.Estado == 0) ? "display: none; " : "";
                    btnRemove = '<button value="Eliminar" type="button" title="Eliminar" style="' + display + '" class="btn btn-danger btn-delet" onclick="DeleteCompraC(' + "'" + data.Ticket + "'" + ',);"><i class="far fa-minus-square"></i></button>';
                    return btnRemove;
                }
            },
        ]
    });
}

function sendDetalleAjax(ticket) {

    var dataS = dataPurchases.filter(i => i.Ticket == ticket).shift();

    var obj2 = JSON.stringify({ ticket: dataS.Ticket });

    $.ajax({
        type: "POST",
        url: "GestionarPedidosQR.aspx/ListaDetalleCompra",
        data: obj2,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data2) {
            addRowDetalle(data2.d, dataS);
        }
    });
}

function addRowDetalle(obj2, dataS) {
    if (tabla3 != undefined) { tabla3.destroy(); }

    tabla3 = $('#tbl_detalle').DataTable({
        data: obj2,
        paging: false,
        searching: false,
        bInfo: false,
        columns: [
            { data: 'Nombre' },
            {
                "data": { 'Ticket': 'Ticket' },
                "render": function (data) {
                    var label1 = '<img src="https://tienda.mundosantanatura.com/products/' + data.Foto + '" style="height: 50px">';
                    return label1;
                }
            },
            { data: 'Cantidad' },
            { data: 'PrecioPS' }
        ]
    });

    sendDatosCallAjax(dataS);
}

function sendDatosCallAjax(dataS) {

    var obj2 = JSON.stringify({ ticket: dataS.Ticket });

    $.ajax({
        type: "POST",
        url: "GestionarPedidosQR.aspx/ListaDetalleDatosQR",
        data: obj2,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data2) {
            fillModal(data2.d, dataS);
        }
    });
}

function fillModal(DatosCall, dataS) {

    $("#txtDireccionDelivery").val(DatosCall[0].direccion_delivery);
    $("#txtDireccionFacturación").val(DatosCall[0].direccion_facturacion);
    $("#lblTicket").text(dataS.Ticket);
    $("#cboComprobante").val(DatosCall[0].comprobante);
    $("#txtDocComprobante").val(DatosCall[0].doc_comprobante);
    $("#lblTipoEntrega").text((dataS.EstadoRecojo == 1)? "Recojo en tienda":"Delivery");

    if (dataS.Estado == "0") {
        $("#btnActualizar").hide(); 
        $("#txtDireccionFacturación").attr("disabled", true);
        $("#cboComprobante").attr("disabled", true);
        $("#txtDocComprobante").attr("disabled", true);
    }

}

$("#btnFiltrar").click(function (e) {
    e.preventDefault();
    var fecha1 = $("#fechaInicio").val();
    var fecha2 = $("#fechaFin").val();
    sendDataAjaxFiltro(fecha1, fecha2);
});

$(document).on('click', '.btn-deta', function (e) {
    e.preventDefault();
    $(".js-example-templating").select2({
        dropdownParent: $("#exampleModal")
    });
    $('#exampleModal').modal({ backdrop: 'static', keyboard: false })
    $('#exampleModal').modal('show');
    $("#exampleModal input").val("");
    $("#cboTipoDoc").val("DNI");
    $("#cboComprobante").val("Boleta");
    $("#cboTipoPago").val("02");

});

function DeleteCompraC(ticket) {
    Swal.fire({
        title: 'Estás seguro de eliminar la compra?',
        text: "Esto no puede revertirse!",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
        if (result.value == true) {
            EliminarCompraCall(ticket);
        }
    });
}

function EliminarCompraCall(ticket) {

    var obj = JSON.stringify({
        ticketS: ticket
    });
    $.ajax({
        type: "POST",
        url: "GestionarPedidosQR.aspx/EliminarCompraQR",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (del) {
            CompraEliminada();
        },
        error: function (xhr, status, error) {
            var error_especifico = eval("(" + xhr.responseText + ")");
            var error_mostrar = '';
            if (xhr.status === 0) {
                error_mostrar = ('Verificar conexión a internet - ' + error_especifico.Message);
            } else if (xhr.status == 404) {
                error_mostrar = ('URL solicitada no encontrada [Error 404] - ' + error_especifico.Message);
            } else if (xhr.status == 500) {
                error_mostrar = ('Error interno del servidor [Error 500] - ' + error_especifico.Message);
            } else if (status === 'parsererror') {
                error_mostrar = ('JSON solicitado falló - ' + error_especifico.Message);
            } else if (status === 'timeout') {
                error_mostrar = ('Error en tiempo de espera - ' + error_especifico.Message);
            } else if (status === 'abort') {
                error_mostrar = ('Solicitud Ajax abortada - ' + error_especifico.Message);
            } else {
                error_mostrar = ('Error desconocido: - ' + error_especifico.Message);
            }

        }
    });
}

function validarNumerosPD(evt) {
    var PD = $("#cboTipoDoc").val();
    if (PD == "DNI") {
        var charCode = (evt.which) ? evt.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    }
}

$("#btnActualizar").click(function (e) {

    if (navigator.onLine) {
        var nombres = $("#txtNombres").val();
        var apellidos = $("#txtApellidos").val();
        var documento = $("#txtDocumento").val();
        var celular = $("#txtCelular").val();
        var correo = $("#txtCorreo").val();
        var direccion = $("#txtDireccion").val();
        var referencia = $("#txtReferencia").val();
        var latitud = $("#txtLatitud").val();
        var longitud = $("#txtLongitud").val();
        var docComprobante = $("#txtDocComprobante").val();

        if (nombres == "" || apellidos == "" || documento == "" ||
            celular == "" || direccion == "" ||
            latitud == "" || longitud == "" ||
            docComprobante == "") {
            MensajeError("Debe rellenar todos los datos del delivery");
        }
        else {
            actualizarCompraCall();
        }

    } else {
        Swal.fire({
            title: 'Ooops...!',
            text: 'Verifique su conexión a internet',
            type: "error"
        });
    }
});

function actualizarCompraCall() {
    var ticket = $("#lblTicket").text();
    var nombres = $("#txtNombres").val();
    var apellidos = $("#txtApellidos").val();
    var documento = $("#txtDocumento").val();
    var celular = $("#txtCelular").val();
    var correo = $("#txtCorreo").val();
    var direccion = $("#txtDireccion").val();
    var referencia = $("#txtReferencia").val();
    var latitud = $("#txtLatitud").val();
    var longitud = $("#txtLongitud").val();
    var docComprobante = $("#txtDocComprobante").val();
    var cboTipoDoc = $("#cboTipoDoc").val();
    var cbtoTipoComp = $("#cboComprobante").val();
    var cboTipoPago = $("#cboTipoPago").val();

    var obj = JSON.stringify({
        ticketS: ticket, nombres: nombres, apellidos: apellidos, documento: documento, celular: celular,
        correo: correo, direccion: direccion, referencia: referencia, latitud: latitud, longitud: longitud, docComprobante: docComprobante,
        cboTipoDoc: cboTipoDoc, cbtoTipoComp: cbtoTipoComp, cboTipoPago: cboTipoPago
    });
    $.ajax({
        type: "POST",
        url: "PedidoCallCenter.aspx/ActualizarDatosPedidoCall",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (dataUp) {
            ActualizacionDatos();
        },
        error: function (xhr, status, error) {
            var error_especifico = eval("(" + xhr.responseText + ")");
            var error_mostrar = '';
            if (xhr.status === 0) {
                error_mostrar = ('Verificar conexión a internet - ' + error_especifico.Message);
            } else if (xhr.status == 404) {
                error_mostrar = ('URL solicitada no encontrada [Error 404] - ' + error_especifico.Message);
            } else if (xhr.status == 500) {
                error_mostrar = ('Error interno del servidor [Error 500] - ' + error_especifico.Message);
            } else if (status === 'parsererror') {
                error_mostrar = ('JSON solicitado falló - ' + error_especifico.Message);
            } else if (status === 'timeout') {
                error_mostrar = ('Error en tiempo de espera - ' + error_especifico.Message);
            } else if (status === 'abort') {
                error_mostrar = ('Solicitud Ajax abortada - ' + error_especifico.Message);
            } else {
                error_mostrar = ('Error desconocido: - ' + error_especifico.Message);
            }

        }
    });
}

function MensajeError(mssg) {
    Swal.fire({
        title: 'Ooops...!',
        text: mssg,
        type: "error"
    });
}

function ActualizacionDatos() {
    Swal.fire({
        title: 'Perfecto!',
        text: 'Se actualizaron los datos correctamente!',
        type: "success"
    }).then(function () {
        $('#btnCancelar').click();
        $('.modal-backdrop').remove();
        var fecha1 = $("#fechaInicio").val();
        var fecha2 = $("#fechaFin").val();
        sendDataAjaxFiltro(fecha1, fecha2);
    });
}

function CompraEliminada() {
    Swal.fire({
        title: 'Perfecto!',
        text: 'Se eliminó correctamente la compra!',
        type: "success"
    }).then(function () {
        var fecha1 = $("#fechaInicio").val();
        var fecha2 = $("#fechaFin").val();
        sendDataAjaxFiltro(fecha1, fecha2);
    });
}
