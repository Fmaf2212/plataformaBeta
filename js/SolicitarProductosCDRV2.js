var tabla, data, data2, tabla3, data3, listapro = [], okRegistro, montoTotal = 0, tipoCom, montoValSD = 0;

tabla3 = $("#tbl_detalle").dataTable({
    "bPaginate": false,
    "bSort": false
});

function ListarProductos() {

    var obj = JSON.stringify({ tipoCompra: $("#cboTipoPago").val() });

    $.ajax({
        type: "POST",
        url: "SolicitarStockCDR.aspx/ListaProductosCombo",
        data: obj,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#cboProductoCDR").empty();
            $.each(result.d, function (key, value) {
                $("#cboProductoCDR").append($("<option></option>").val(value.IdProducto).html(value.NombreProducto));
            });
            ValidarPendientes();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
}

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "SolicitarStockCDR.aspx/ListarSolicitudesGeneradas",
        data: {},
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            addRowDT(data.d);
        }
    });
}

function sendDataAjaxDetalle(idSoli, lblMonto) {

    var obj = JSON.stringify({ idSolicitud: idSoli });
    $.ajax({
        type: "POST",
        url: "SolicitarStockCDR.aspx/ListarProductosxSolicitud",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data3) {
            addRowDTDetalle(data3.d, lblMonto);
        }
    });
}

function addRowDT(obj) {
    tabla = $("#tbl_cdr").dataTable();
    tabla.fnClearTable();
    for (var i = 0; i < obj.length; i++) {
        var url = "pdf/" + obj[i].PDF;
        if (obj[i].Estado == "Pendiente") { sellado = "none"; } else { sellado = ""; }
        var tipoCompra = (obj[i].TipoCompra === "1") ? "ADICIONAL" : (obj[i].TipoCompra === "2") ? "EMERGENCIA" :
                         (obj[i].TipoCompra === "9") ? "EXTORNO" : (obj[i].TipoCompra === "10") ? "ADICIONAL - DEPOSITO" :
                         (obj[i].TipoCompra === "11") ? "EMERGENCIA - DEPOSITO" : (obj[i].TipoCompra === "13") ? "ADICIONAL - CANJE" :
                         (obj[i].TipoCompra === "14") ? "EMERGENCIA - CANJE" : (obj[i].TipoCompra === "12") ? "REPOSICION" :
                         (obj[i].TipoCompra === "15") ? "PEDIDO INICIAL" : (obj[i].TipoCompra === "16") ? "ADICIONAL - TUPAY" :
                         (obj[i].TipoCompra === "17") ? "EMERGENCIA - TUPAY" : (obj[i].TipoCompra === "18") ? "EXTORNO - TUPAY" :
                         "SALDO DISPONIBLE";
        tabla.fnAddData([
            obj[i].IdSolicitud,
            obj[i].FechaSolicitud,
            obj[i].CDRPS,
            tipoCompra,
            obj[i].MontoTotal,
            obj[i].Cantidad,
            '<p> <a style="display:' + sellado + '" href="' + url + '" target="_blank">' + obj[i].PDF + '</a></p>',
            '<button type="button" class="btn btn-primary btn-deta" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-search"></i></button>',
            obj[i].IdSolicitud
        ]);
    }
}

function addRowDTDetalle(obj, lblMonto) {
    $('#lblMontoTo').text(lblMonto);
    tabla3.fnClearTable();
    for (var i = 0; i < obj.length; i++) {
        var imagenProducto = obj[i].Imagen;
        var packs = obj[i].Cantidad / obj[i].UnidadesXPrese;
        var subTotal = obj[i].Cantidad * obj[i].PrecioCDR;
        tabla3.fnAddData([
            obj[i].Fila,
            obj[i].NombreProducto,
            '<img src="https://tienda.mundosantanatura.com/products/' + imagenProducto + '" style="height: 80px">',
            obj[i].IDPS,
            packs,
            obj[i].Cantidad,
            'S/. '+subTotal.toFixed(2)
        ]);
    }
    
}

sendDataAjax();

$("#btnModals").click(function (e) {
    e.preventDefault();
    
    $("#tbl_registro tbody tr").remove();
    listapro = [];
    montoTotal = 0;
    tipoCom = $("#cboTipoPago").val();
    $("#SD").text("0");

    if (tipoCom == "" | tipoCom == "0") {
        FaltaTipoPago();
    } else {
        ListarProductos();
    }
});

function ValidarPendientes() {
    var tipoCom = $("#cboTipoPago").val();
    var obj = JSON.stringify({ TipoPago: tipoCom });
    $.ajax({
        type: "POST",
        url: "SolicitarStockCDR.aspx/CantidadPendientesCDR_TipoPago",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data2) {
            if (data2.d.pendientes == false) {
                montoValSD = data2.d.montoValidacion;
                var txtLC = $("#txtLineaCredito").text();
                if (tipoCom == "3") { $("#dvSaldo").show(); $("#SD").text(txtLC); }
                $('#exampleModal2').modal({ backdrop: 'static', keyboard: false })
                var day = moment().format("DD/MM/YYYY");
                $('#exampleModal2').modal('show');
                $('#txtTotPagar').text("S/. 0.00");
                $('#txtFecha').text(day);
            } else {
                Swal.fire({
                    title: 'Ooops...!',
                    text: 'Actualmente ya tiene una compra pendiente con el mismo medio de pago',
                    type: "error"
                });
            }
        }
    });
}

$("#btnAgregar").click(function (e) {
    e.preventDefault();
    var idProducto = $("#cboProductoCDR").val();
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

function BuscarDatosProducto(idProducto) {
    var obj = JSON.stringify({ IDPRODUCTO: idProducto });
    $.ajax({
        type: "POST",
        url: "SolicitarStockCDR.aspx/ListarDatosProductosCDR",
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
    var TC = $("#cboTipoPago").val();
    var ValMonto = montoTotal + (lstDatos[0].precioCDR * lstDatos[0].UnidadPresentacion);
    const saldoD = parseFloat($("#SD").text());
    if (tipoCom == "3" && (ValMonto > saldoD)) {
        ExcesoSaldoDisponible();
    }
    else {
        var DatosProd = {};
        var precioPaq = (TC == "9" || TC == "18") ? lstDatos[0].precioCDR * 1 : lstDatos[0].precioCDR * lstDatos[0].UnidadPresentacion;
        var UPF = (TC == "9" || TC == "18") ? 1 : lstDatos[0].UnidadPresentacion;
        DatosProd['codigo'] = lstDatos[0].IdProducto;
        DatosProd['PS'] = lstDatos[0].IdProductoPeruShop;
        DatosProd['idProductoPais'] = lstDatos[0].ProductoPais;
        DatosProd['precio'] = lstDatos[0].precioCDR;
        DatosProd['UP'] = lstDatos[0].UnidadPresentacion;
        DatosProd['nombre'] = lstDatos[0].NombreProducto;
        DatosProd['subTotal'] = precioPaq.toFixed(2);
        DatosProd['cantidad'] = 1;
        listapro.push(DatosProd);

        montoTotal += lstDatos[0].precioCDR * UPF;
        //listapro.forEach(element => monto += element.precio * element.UnidadPresentacion);
        $('#txtTotPagar').text("S/. " + montoTotal.toLocaleString('en-US') + "");

        var d = '';
        d += '<tr id="tr1' + lstDatos[0].IdProducto + '">' +
            '<td rowspan="2" class="borderBottom"><img src="https://tienda.mundosantanatura.com/products/' + lstDatos[0].Foto + '" alt="Alternate Text" style="max-width: 100px !important;"/></td>' +
            '<td><div class="flex"><label>Nombre</label><asp: Label runat="server"/>' + lstDatos[0].NombreProducto + '</div></td>' +
            '<td><div class="flex"><label>Paquete</label><div class="custom-input-number"><button type="button" class="cin-btn cin-btn-1 cin-btn-md cin-increment btn-add-pro" addID="' + lstDatos[0].IdProducto + '">+</button><input type="number" id="cant' + lstDatos[0].IdProducto + '" class="cin-input basket-quantity" step="1" value="1" min="1" max="999"><button type="button" susID="' + lstDatos[0].IdProducto + '" class="cin-btn cin-btn-1 cin-btn-md cin-decrement btn-sus-pro">-</button></div></div></td><td rowspan="2" class="borderBottom"><button type="button" class="cin-btn cin-btn-1 cin-btn-md btn-sus-total" style="background-color: #ca1f1fb3; color:white;" dltID="' + lstDatos[0].IdProducto + '">X</button></td></tr>' +
            '<tr id="tr2' + lstDatos[0].IdProducto + '"><td class="borderBottom"><div class="flex"><label>Precio por pack</label><asp: Label runat="server" ID="lblPrecio" /> S/.' + precioPaq.toFixed(2) + '</div></td><td class="borderBottom"><div class="flex"><label>SubTotal</label><asp: Label runat="server" ID="lblSub' + lstDatos[0].IdProducto + '" >S/.' + precioPaq.toFixed(2) + '</label></div></td>' +
            '</tr>';
        $("#tbl_registro").append(d);
    }
}

$(document).on('click', '.btn-add-pro', function (e) {
    e.preventDefault();
    let $input = $(this).siblings('.cin-input'),
        val = parseInt($input.val()),
        max = parseInt($input.attr('max')),
        step = parseInt($input.attr('step'));
    let temp = val + step;
    var TC = $("#cboTipoPago").val();
    
    const idpro = $(this).attr("addID");
    if (idpro == "P0515") {
        DenegarAdicion();
    } else {
        const saldoD = parseFloat($("#SD").text());
        const UP = listapro.find(cod => cod.codigo === idpro);
        const montoG = (TC == "9" || TC == "18") ? UP.precio : UP.precio * UP.UP;
        if (tipoCom != "3") {
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
        } else {
            if ((montoTotal + montoG) < saldoD) {
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
            } else {
                ExcesoSaldoDisponible();
            }
        }
    }
});

$(document).on('click', '.btn-sus-pro', function (e) {
    e.preventDefault();
    let $input = $(this).siblings('.cin-input'),
        val = parseInt($input.val()),
        min = parseInt($input.attr('min')),
        step = parseInt($input.attr('step'));
    let temp = val - step;
    var TC = $("#cboTipoPago").val();

    const idpro = $(this).attr("susID");
    const valCant = $("#cant" + idpro + "").val();
    if (parseInt(valCant) != 1) {
        $input.val(temp >= min ? temp : min);
        const valCant = $("#cant" + idpro + "").val();
        const UP = listapro.find(cod => cod.codigo === idpro);
        const montoG = (TC == "9" || TC == "18") ? UP.precio : UP.precio * UP.UP;
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
    var TC = $("#cboTipoPago").val();
    const idpro = $(this).attr("dltID");
    const valCant = $("#cant" + idpro + "").val();
    const UP = listapro.find(cod => cod.codigo === idpro);
    const montoG = (TC == "9" || TC == "18") ? UP.precio * (valCant * 1): UP.precio * (valCant * UP.UP);
    montoTotal -= montoG;
    $('#txtTotPagar').text("S/. " + montoTotal.toFixed(2) + "");
    listapro = listapro.filter(function (obj) {
        return obj.codigo !== idpro;
    });
    $("#tr1" + idpro+"").remove();
    $("#tr2" + idpro + "").remove();
});

$(document).on('click', '.btn-deta', function (e) {
    e.preventDefault();
    var row2 = $(this).parent().parent()[0];
    var datax = tabla.fnGetData(row2);
    sendDataAjaxDetalle(datax[8], datax[4]);
});

$("#btnRegistrar2").click(function (e) {
    
    var tipoCompra = $("#cboTipoPago").val();
    var montoLC = $("#txtLineaCredito").text();
    var montoComision = $("#txtSaldoComision").text();
    const cant = listapro.find(cod => cod.codigo === 'P0515');

    if (navigator.onLine) {
        if (listapro.length == 0 || listapro.length == null) {
            FaltanProductos();
        }
        else if ((tipoCompra == "1" || tipoCompra == "2" || tipoCompra == "9") && montoTotal > 4500) {
            MontoPE();
        }
        else if ((tipoCompra == "16" || tipoCompra == "17" || tipoCompra == "18") && montoTotal > 3400) {
            MontoPE();
        }
        else if (tipoCompra == "3" && parseFloat(montoLC) < montoTotal) {
            MontoFaltante();
        } else if (tipoCompra == "5" && parseFloat(montoComision) < montoTotal) {
            MontoFaltante();
        } else if ((tipoCompra == "2" || tipoCompra == "11" || tipoCompra == "14" || tipoCompra == "17") && montoTotal < montoValSD) {
            MontoFaltante();
        } else if ((tipoCompra == "2" || tipoCompra == "11" || tipoCompra == "14" || tipoCompra == "17") && cant == undefined) {
            AgregarTransporte();
        } else {
            if (tipoCompra == "3") {
                if (montoTotal.toFixed(2) < montoValSD) {
                    Validar_SD_2000();
                } else {
                    validarLimite();
                }
            } else {
                registrarSolicitudCDR();
            }
            
        }
    } else {
        Swal.fire({
            title: 'Ooops...!',
            text: 'Verifique su conexión a internet',
            type: "error"
        });
    } 
});

function Validar_SD_2000() {

    var obj = JSON.stringify({
        montoPagoS: montoTotal.toFixed(2)
    });
    $.ajax({
        type: "POST",
        url: "SolicitarStockCDR.aspx/Validar_SD_2000",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (okRegistro) {
            var Rquest = okRegistro.d;
            if (Rquest == true) {
                validarLimite();
            } else {
                AdicionalFaltante();
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

function validarLimite() {
    var montoLC = $("#txtLineaCredito").text();

    var obj = JSON.stringify({
        montoPagoS: montoTotal.toFixed(2), montoSD: parseFloat(montoLC)
    });
    $.ajax({
        type: "POST",
        url: "SolicitarStockCDR.aspx/ValidarLimiteSD",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (okRegistro) {
            var Rquest = okRegistro.d;
            if (Rquest == true) {
                registrarSolicitudCDR();
            } else {
                InversionFaltante();
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

function registrarSolicitudCDR() {
    var tipoCompra = $("#cboTipoPago option:selected").val();
    var tipoCompratx = $("#cboTipoPago option:selected").text();
    var montoLC = $("#txtLineaCredito").text();
    var montoComision = $("#txtSaldoComision").text();
    let montoP = 0.0;

    for (var i = 0; i < listapro.length; i++) {
        let SubMon = parseFloat(listapro[i].subTotal);
        montoP = montoP + SubMon;
    }

    var obj = JSON.stringify({
        prueba: listapro, TipoPagoS: tipoCompra, montoPagoS: montoP,
        montoLCS: parseFloat(montoLC), montoComisionS: parseFloat(montoComision), tipoPagotx: tipoCompratx
    });
    $.ajax({
        type: "POST",
        url: "SolicitarStockCDR.aspx/RegistrarStock",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (okRegistro) {
            var Rquest = okRegistro.d;
            if (Rquest[0].codigo == 3) {
                StockInsuficiente(Rquest[0].mensaje);
            }
            else if (Rquest[0].codigo == 2) {
                StockInsuficiente(Rquest[0].mensaje);
            }
            else if (Rquest[0].codigo == 1 && ['1', '2', '9', '16', '17', '18'].includes(tipoCompra)) {
                CompraExitosaPE(Rquest[0].mensaje);
            }
            else if (Rquest[0].codigo == 1 && tipoCompra == "3") {
                CompraExitosaSD();
            } else if (Rquest[0].codigo == 1) {
                CompraExitosaSD();
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

function MontoPE() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'Usando el método de PagoEfectivo no debe exceder el monto de 4500',
        type: "error"
    });
}
function MontoTupay() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'Usando el método de Tupay no debe exceder el monto de 3400',
        type: "error"
    });
}
function MontoFaltante() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No tiene el monto suficiente para este tipo de compra',
        type: "error"
    });
}
function DenegarAdicion() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No puede adicionar más cantidades de este producto',
        type: "error"
    });
}
function AgregarTransporte() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'Porfavor busque y agregue la opción de "TRANSPORTE DEL PEDIDO"',
        type: "error"
    });
}
function InversionFaltante() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No cumple con los requisitos de inversion necesarios para este tipo de compra',
        type: "error"
    });
}
function AdicionalFaltante() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'El monto de la compra es menor al limite establecido',
        type: "error"
    });
}
function ExcesoSaldoDisponible() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No puede seleccionar más unidades porque excedería el saldo disponible',
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
function FaltaTipoPago() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'Debe seleccionar el Tipo de Pago',
        type: "error"
    });
}
function ProductoRepetido() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'Producto repetido',
        type: "error"
    });
}
function StockInsuficiente(mssg) {
    Swal.fire({
        title: 'Ooops...!',
        text: mssg,
        type: "error"
    });
}
function CompraExitosaPE(mssg) {
    $('#exampleModal2').modal('hide');
    sendDataAjax();
    Swal.fire({
        title: 'Perfecto!',
        text: 'Stock Solicitado',
        type: "success"
    }).then(function () {
        window.open(mssg, '_blank');
    });
}
function CompraExitosaSD() {
    Swal.fire({
        title: 'Perfecto!',
        text: 'Stock Solicitado',
        type: "success"
    }).then(function () {
        location.reload();
    });
}