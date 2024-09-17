var tabla2, data, data2, tabla3, data3, listapro = [], okRegistro, montoTotal = 0, tipoCom;

//tabla2 = $("#tbl_Call").DataTable({});
sendDataAjax();

$("#txtDocumento").keyup(function () {
    var TP = $('#cboComprobante').val();
    if (TP == "Boleta") { $('#txtDocComprobante').val($(this).val()); }
});

var inputTComprobante = document.getElementById('cboComprobante');

inputTComprobante.onchange = function () {

    if (this.value == "Boleta") {
        var documento = $('#txtDocumento').val();
        $('#txtDocComprobante').val(documento);
    }
    else if (this.value == "Factura") {
        $('#txtDocComprobante').val("");
    }
}

function ListarProductos() {

    $.ajax({
        type: "POST",
        url: "PedidoCallCenter.aspx/ListaProductoCallCenter",
        data: {},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#cboProductoCall").empty();
            $.each(result.d, function (key, value) {
                $("#cboProductoCall").append($("<option></option>").val(value.IdProducto).html(value.NombreProducto));
            });
            $('#exampleModal2').modal({ backdrop: 'static', keyboard: false })
            $('#exampleModal2').modal('show');
            $('#txtTotPagar').text("S/. 0.00");
            var day = moment().format("DD/MM/YYYY");
            $('#txtFecha').text(day);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
}

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
        url: "PedidoCallCenter.aspx/ListarCompraCall",
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
        url: "PedidoCallCenter.aspx/ListarCompraCallFiltrado",
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

    tabla2 = $('#tbl_Call').DataTable({
            data: obj,
            columns: [
                { data: 'Ticket' },
                { data: 'FechaPagoReporte' },
                { data: 'Estado' },
                { data: 'IdopPeruShop' },
                { data: 'MontoAPagar' },
                { data: 'Despacho' },
                {
                    "data": { 'Ticket': 'Ticket' },
                    "render": function (data) {
                        var TP = (data.TipoPago == 02) ? "EFECTIVO" : "PAGO EFECTIVO";
                        var label1 = '<label for="name">'+TP+'</label>';
                        return label1;
                    }
                },
                {
                    "data": { 'Ticket': 'Ticket' },
                    "render": function (data) {
                        var btnDetalle = '';
                        btnDetalle = '<button value="Detalle" type="button" class="btn btn-primary btn-deta" onclick="sendDetalleAjax(' + "'" + data.Ticket + "'" + ', ' + "'" + data.Estado + "'" + ',' + "'" + data.TipoPago + "'" +');"><i class="fas fa-search"></i></button>';
                        return btnDetalle;
                    }
                },
                {
                    "data": { 'Ticket': 'Ticket' },
                    "render": function (data) {
                        var btnCIP = '';
                        var display = (data.TipoPago == "02" || data.CIP != "" || data.Estado == 0) ? "display: none; ": "";
                        btnCIP = '<button value="CIP" type="button" title="CIP" style="' + display+'" class="btn btn-warning btn-cip" onclick="getPagoEfectivo('+"'"+data.Ticket+"'"+',);"><i class="fab fa-mixcloud"></i></button>';
                        return btnCIP;
                    }
                },
                {
                    "data": { 'Ticket': 'Ticket' },
                    "render": function (data) {
                        var btnAprobar = '';
                        var display = (data.Estado != 2 || data.TipoPago == "04") ? "display: none; " : "";
                        btnAprobar = '<button value="Aprobar" type="button" title="Aprobar" style="' + display +'" class="btn btn-success btn-aprob"><i class="fas fa-check"></i></button>';
                        return btnAprobar;
                    }
                },
                {
                    "data": { 'Ticket': 'Ticket' },
                    "render": function (data) {
                        var btnRemove = '';
                        var display = (data.Estado != 2) ? "display: none; " : "";
                        btnRemove = '<button value="Eliminar" type="button" title="Eliminar" style="' + display +'" class="btn btn-danger btn-delet" onclick="DeleteCompraC('+"'"+data.Ticket+"'"+',);"><i class="far fa-minus-square"></i></button>';
                        return btnRemove;
                    }
                },
            ]
        });
}

function sendDetalleAjax(ticket, estado, tipoPago) {

    var obj2 = JSON.stringify({ ticket: ticket });

    $.ajax({
        type: "POST",
        url: "PedidoCallCenter.aspx/ListaDetalleCompraCall",
        data: obj2,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data2) {
            addRowDetalle(data2.d, ticket, estado, tipoPago);
        }
    });
}

function addRowDetalle(obj2, ticket, estado, tipoPago) {
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

    sendDatosCallAjax(ticket, estado, tipoPago);
}

function sendDatosCallAjax(ticket, estado, tipoPago) {

    var obj2 = JSON.stringify({ ticket: ticket });

    $.ajax({
        type: "POST",
        url: "PedidoCallCenter.aspx/ListaDetalleDatosCall",
        data: obj2,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data2) {
            fillModal(data2.d, ticket, estado, tipoPago);
        }
    });
}

function fillModal(DatosCall, ticket, estado, tipoPago) {
    $("#txtNombres").val(DatosCall[0].Nombres);
    $("#txtApellidos").val(DatosCall[0].Apellidos);
    $("#cboTipoDoc").val(DatosCall[0].Tipo_Documento);
    $("#txtDocumento").val(DatosCall[0].Documento);
    $("#txtCelular").val(DatosCall[0].Celular);
    $("#txtCorreo").val(DatosCall[0].Correo);
    $("#txtDireccion").val(DatosCall[0].Direccion);
    $("#txtReferencia").val(DatosCall[0].Referencia);
    $("#txtLatitud").val(DatosCall[0].Latitud);
    $("#txtLongitud").val(DatosCall[0].Longitud);
    $("#lblTicket").text(ticket);
    $("#cboComprobante").val(DatosCall[0].Comprobante);
    $("#txtDocComprobante").val(DatosCall[0].Doc_Comprobante);
    $("#cboTipoPago").val(tipoPago);

    if (estado == "0") {
        $("#txtNombres").attr("disabled", true);
        $("#txtApellidos").attr("disabled", true);
        $("#cboTipoDoc").attr("disabled", true);
        $("#txtDocumento").attr("disabled", true);
        $("#txtCelular").attr("disabled", true);
        $("#txtCorreo").attr("disabled", true);
        $("#txtDireccion").attr("disabled", true);
        $("#txtReferencia").attr("disabled", true);
        $("#txtLatitud").attr("disabled", true);
        $("#txtLongitud").attr("disabled", true);
        $("#lblTicket").attr("disabled", true);
        $("#cboComprobante").attr("disabled", true);
        $("#txtDocComprobante").attr("disabled", true);
        $("#cboTipoPago").attr("disabled", true);
    }
    else {
        $("#txtNombres").attr("disabled", false);
        $("#txtApellidos").attr("disabled", false);
        $("#cboTipoDoc").attr("disabled", false);
        $("#txtDocumento").attr("disabled", false);
        $("#txtCelular").attr("disabled", false);
        $("#txtCorreo").attr("disabled", false);
        $("#txtDireccion").attr("disabled", false);
        $("#txtReferencia").attr("disabled", false);
        $("#txtLatitud").attr("disabled", false);
        $("#txtLongitud").attr("disabled", false);
        $("#lblTicket").attr("disabled", false);
        $("#cboComprobante").attr("disabled", false);
        $("#txtDocComprobante").attr("disabled", false);
        $("#cboTipoPago").attr("disabled", false);
    }
}

$("#btnFiltrar").click(function (e) {
    e.preventDefault();
    var fecha1 = $("#fechaInicio").val();
    var fecha2 = $("#fechaFin").val();
    sendDataAjaxFiltro(fecha1, fecha2);
});

$("#btnModals").click(function (e) {
    e.preventDefault();
    $(".js-example-templating").select2({
        dropdownParent: $("#exampleModal2")
    });
    $("#tbl_registro tbody tr").remove();
    listapro = [];
    montoTotal = 0;
    ListarProductos();
    ListarYW();
});

$("#btnAgregar").click(function (e) {
    e.preventDefault();
    var idProducto = $("#cboProductoCall").val();
    if (listapro.length != 0) {
        const cant = listapro.find(cod => cod.codigo === idProducto);
        if (cant == undefined) {
            BuscarDatosProducto(idProducto);
        } else {
            ProductoRepetido();
        }
    } else {
        BuscarDatosProducto(idProducto);
    }
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

$(document).on('click', '.btn-cip', function (e) {
    e.preventDefault();
    $(".js-example-templating").select2({
        dropdownParent: $("#exampleModal")
    });
    $('#exampleModal').modal({ backdrop: 'static', keyboard: false })
    $('#exampleModal').modal('show');
    $("#exampleModal input").val("");
    $("#exampleModal select").val("1");

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
        url: "PedidoCallCenter.aspx/EliminarCompraCall",
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

function getPagoEfectivo(ticket) {
    e.preventDefault();
    Swal.fire({
        title: 'Estás seguro de generar el CIP?',
        text: "Los datos enviados no se podrán cambiar!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, generar!'
    }).then((result) => {
        if (result.isConfirmed) {
            GenerarCIP(ticket);
        }
    });
}

function GenerarCIP(ticket) {
    var obj = JSON.stringify({
        ticketS: ticket
    });
    $.ajax({
        type: "POST",
        url: "PedidoCallCenter.aspx/PagoEfectivo",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (getC) {
            var URL = getC.d;
            if (URL != "") {
                CIPGenerado(URL);
            }
            else {
                MensajeError("Lo sentimos, a ocurrido un error al genera el CIP, intente de nuevo porfavor");
            }
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

function BuscarDatosProducto(idProducto) {
    var obj = JSON.stringify({ IDPRODUCTO: idProducto });
    $.ajax({
        type: "POST",
        url: "PedidoCallCenter.aspx/ListaDatosProductosCall",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data2) {
            AgregarProducto(data2.d);
        }
    });
}

function AgregarProducto(lstDatos) {

    var DatosProd = {};
    var subTotal = lstDatos[0].PrecioUnitario;
    DatosProd['codigo'] = lstDatos[0].IdProducto;
    DatosProd['PS'] = lstDatos[0].IdProductoPeruShop;
    DatosProd['idProductoPais'] = lstDatos[0].ProductoPais;
    DatosProd['precio'] = lstDatos[0].PrecioUnitario;
    DatosProd['nombre'] = lstDatos[0].NombreProducto;
    DatosProd['subTotal'] = subTotal.toFixed(2);
    DatosProd['cantidad'] = 1;
    listapro.push(DatosProd);

    montoTotal += lstDatos[0].PrecioUnitario;
    //listapro.forEach(element => monto += element.precio * element.UnidadPresentacion);
    $('#txtTotPagar').text("S/. " + montoTotal.toLocaleString('en-US') + "");

    var d = '';
    d += '<tr id="tr1' + lstDatos[0].IdProducto + '">' +
        '<td rowspan="2" class="borderBottom"><img src="https://tienda.mundosantanatura.com/products/' + lstDatos[0].Foto + '" alt="Alternate Text" style="max-width: 100px !important;"/></td>' +
        '<td><div class="flex"><label>Nombre</label><asp: Label runat="server"/>' + lstDatos[0].NombreProducto + '</div></td>' +
        '<td><div class="flex"><label>Cantidad</label><div class="custom-input-number"><button type="button" class="cin-btn cin-btn-1 cin-btn-md cin-increment btn-add-pro" addID="' + lstDatos[0].IdProducto + '">+</button><input type="number" id="cant' + lstDatos[0].IdProducto + '" class="cin-input basket-quantity" step="1" value="1" min="1" max="999"><button type="button" susID="' + lstDatos[0].IdProducto + '" class="cin-btn cin-btn-1 cin-btn-md cin-decrement btn-sus-pro">-</button></div></div></td><td rowspan="2" class="borderBottom"><button type="button" class="cin-btn cin-btn-1 cin-btn-md btn-sus-total" style="background-color: #ca1f1fb3; color:white;" dltID="' + lstDatos[0].IdProducto + '">X</button></td></tr>' +
        '<tr id="tr2' + lstDatos[0].IdProducto + '"><td class="borderBottom"><div class="flex"><label>Precio por und.</label><asp: Label runat="server" ID="lblPrecio" /> S/.' + subTotal.toFixed(2) + '</div></td><td class="borderBottom"><div class="flex"><label>SubTotal</label><asp: Label runat="server" ID="lblSub' + lstDatos[0].IdProducto + '" >S/.' + subTotal.toFixed(2) + '</label></div></td>' +
        '</tr>';
    $("#tbl_registro").append(d);
}

$(document).on('click', '.btn-add-pro', function (e) {
    e.preventDefault();
    let $input = $(this).siblings('.cin-input'),
        val = parseInt($input.val()),
        max = parseInt($input.attr('max')),
        step = parseInt($input.attr('step'));
    let temp = val + step;
    const idpro = $(this).attr("addID");

    const UP = listapro.find(cod => cod.codigo === idpro);
    const montoG = UP.precio;
    $input.val(temp <= max ? temp : max);
    const valCant = $("#cant" + idpro + "").val();
    const SubT = montoG * parseFloat(valCant);
    montoTotal += montoG;
    $('#txtTotPagar').text("S/. " + montoTotal.toFixed(2) + "");
    $('#lblSub' + idpro + '').text("S/. " + SubT.toFixed(2) + "");
    listapro.map(obj =>
        obj.cantidad = (obj.codigo === idpro ? parseFloat(valCant) : obj.cantidad)
    );
    listapro.map(obj =>
        obj.subTotal = (obj.codigo === idpro ? SubT.toFixed(2) : obj.subTotal)
    );

});

$(document).on('click', '.btn-sus-pro', function (e) {
    e.preventDefault();
    let $input = $(this).siblings('.cin-input'),
        val = parseInt($input.val()),
        min = parseInt($input.attr('min')),
        step = parseInt($input.attr('step'));
    let temp = val - step;

    const idpro = $(this).attr("susID");
    const valCant = $("#cant" + idpro + "").val();
    if (parseInt(valCant) != 1) {
        $input.val(temp >= min ? temp : min);
        const valCant = $("#cant" + idpro + "").val();
        const UP = listapro.find(cod => cod.codigo === idpro);
        const montoG = UP.precio;
        const SubT = montoG * parseFloat(valCant);
        montoTotal -= montoG;
        $('#txtTotPagar').text("S/. " + montoTotal.toFixed(2) + "");
        $('#lblSub' + idpro + '').text("S/. " + SubT.toFixed(2) + "");
        listapro.map(obj =>
            obj.cantidad = (obj.codigo === idpro ? parseFloat(valCant) : obj.cantidad)
        );
        listapro.map(obj =>
            obj.subTotal = (obj.codigo === idpro ? SubT.toFixed(2) : obj.subTotal)
        );
    }
});

$(document).on('click', '.btn-sus-total', function (e) {
    e.preventDefault();
    const idpro = $(this).attr("dltID");
    const valCant = $("#cant" + idpro + "").val();
    const UP = listapro.find(cod => cod.codigo === idpro);
    const montoG = UP.precio * valCant;
    montoTotal -= montoG;
    $('#txtTotPagar').text("S/. " + montoTotal.toFixed(2) + "");
    listapro = listapro.filter(function (obj) {
        return obj.codigo !== idpro;
    });
    $("#tr1" + idpro + "").remove();
    $("#tr2" + idpro + "").remove();
});

$("#btnRegistrar2").click(function (e) {

    if (navigator.onLine) {
        if (listapro.length == 0 || listapro.length == null) {
            FaltanProductos();
        }
        else if ($("#cboYW").val() == "0" || $("#cboYW").val() == null) {
            SeleccioneYW();
        }
        else {
            registrarCompraCall();
        }
    } else {
        Swal.fire({
            title: 'Ooops...!',
            text: 'Verifique su conexión a internet',
            type: "error"
        });
    }
});

function registrarCompraCall() {
    let montoP = 0.0;
    let cantidadP = 0;
    var YW = $("#cboYW").val();

    for (var i = 0; i < listapro.length; i++) {
        let SubMon = parseFloat(listapro[i].subTotal);
        let SubCant = parseFloat(listapro[i].cantidad);
        montoP += + SubMon;
        cantidadP += SubCant;
    }

    var obj = JSON.stringify({
        listaDetalle: listapro, montoPagoS: montoP, cantidadS: cantidadP, tiendaS: YW
    });
    $.ajax({
        type: "POST",
        url: "PedidoCallCenter.aspx/RegistrarCompra",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (okRegistro) {
            var Rquest = okRegistro.d;
            if (Rquest[0].codigo == 3) {
                MensajeError(Rquest[0].mensaje);
            }
            else if (Rquest[0].codigo == 2) {
                MensajeError(Rquest[0].mensaje);
            }
            else if (Rquest[0].codigo == 1) {
                CompraExitosa();
            }

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

function ProductoRepetido() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'Producto repetido',
        type: "error"
    });
}
function FaltanProductos() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'Debe agregar productos al carrito',
        type: "error"
    });
}
function MensajeError(mssg) {
    Swal.fire({
        title: 'Ooops...!',
        text: mssg,
        type: "error"
    });
}
function CompraExitosa() {
    Swal.fire({
        title: 'Perfecto!',
        text: 'Compra exitosa!',
        type: "success"
    }).then(function () {
        $('#btnCancelar2').click();
        $('.modal-backdrop').remove();
        var fecha1 = $("#fechaInicio").val();
        var fecha2 = $("#fechaFin").val();
        sendDataAjaxFiltro(fecha1, fecha2);
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
function CIPGenerado(URL) {
    Swal.fire({
        title: 'Perfecto!',
        text: 'Se generó el CIP correctamente!',
        type: "success"
    }).then(function () {
        var fecha1 = $("#fechaInicio").val();
        var fecha2 = $("#fechaFin").val();
        sendDataAjaxFiltro(fecha1, fecha2);
        window.open(URL, '_blank');
    });
}
function SeleccioneYW() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'Debe seleccionar un Yachai Wasi',
        type: "error"
    });
}