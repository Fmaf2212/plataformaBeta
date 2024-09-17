var input = document.getElementById('SMedioPago');
var inputTCompra = document.getElementById('STipoCompra');
var inputTienda = document.getElementById('ComboTienda');
var inputCompro = document.getElementById('cboComprobante');
var inputTitular = document.getElementById('ddlTitularRUC');
var RUC_Validado = 0, RUC_Valido_Perfil = 0;
var hasDelivery = false;
var Ruc_Perfil = "", montoCompraEval = 0, puntosCompraEval = 0, tipoCliente = "", filtro_preregistro = 0, direccionRUC = "",
    NumRucValidado = "", TipoValidacionRUC = "";
$('#cboComprobante').val(localStorage['cboComprobante']);
$('#ddlTitularRUC').val(localStorage['ddlTitularRUC']);

ObtenerRUC_Perfil();
CambioXComprobante();
CambioXTitular();
CambioTipoCliente();
ObtenerTipoCliente();
ShowButtonDelivery();

input.onchange = function () {
    localStorage['SMedioPago'] = this.value;
    GuardarIDCombos('MPago', this.value);
}
inputTCompra.onchange = function () {
    var preregis = $('#cboPreRegistro').val();
    if (preregis != "0" && preregis != "" && preregis != null) {
        if (this.value == "01" || this.value == "02" || this.value == "03" ||
            this.value == "04" || this.value == "05" || this.value == "06" ||
            this.value == "23" || this.value == "30") {
            if ((tipoCliente == "01" && (this.value == "05" || this.value == "06")) ||
                (tipoCliente != "01" && (this.value != "05" || this.value != "06"))) {
                $('#STipoCompra').val(localStorage['STipoCompra']);
                NoCambioTipoCliente();
            } else {
                localStorage['STipoCompra'] = this.value;
                GuardarIDCombos('TCompra', this.value);
            }
        } else {
            $('#STipoCompra').val(localStorage['STipoCompra']);
            NoCambioPreRegistro();
        }
    } else {
        localStorage['STipoCompra'] = this.value;
        CambioTipoCliente();
        GuardarIDCombos('TCompra', this.value);
    }
}
inputTienda.onchange = function () {
    localStorage['ComboTienda'] = this.value;
    GuardarIDCombos('TiendaS', this.value);
}
inputCompro.onchange = function () {
    localStorage['cboComprobante'] = this.value;
    CambioXComprobante();
}
inputTitular.onchange = function () {
    localStorage['ddlTitularRUC'] = this.value;
    CambioXTitular();
}

$.ajax({
    type: "POST",
    url: "EditarPerfil.aspx/GetPais",
    data: "{}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    async: false,
    success: function (result) {
        $("#cboPais").empty();
        $("#cboPais").append("<option value='0'>--Select--</option>");
        $.each(result.d, function (key, value) {
            $("#cboPais").append($("<option></option>").val(value.Codigo).html(value.Nombre));
        });
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus + ": " + XMLHttpRequest.responseText);
    }
});

$("#cboPais").change(function () {
    var params = new Object();
    params.pais = $("#cboPais").val();
    params = JSON.stringify(params);

    $.ajax({
        type: "POST",
        url: "EditarPerfil.aspx/GetDepartamentosByPais",
        data: params,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#cboDepartamento").empty();
            $("#cboDepartamento").append("<option value='0'>--Select--</option>");
            CargarProvincia();
            CargarDistrito();
            $.each(result.d, function (key, value) {
                $("#cboDepartamento").append($("<option></option>").val(value.Codigo).html(value.Nombre));
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
});

$("#cboDepartamento").change(function () {
    var params = new Object();
    params.departamento = $("#cboDepartamento").val();
    params = JSON.stringify(params);

    $.ajax({
        type: "POST",
        url: "EditarPerfil.aspx/GetProvinciaByDepartamento",
        data: params,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#cboProvincia").empty();
            $("#cboProvincia").append("<option value='0'>--Select--</option>");
            CargarDistrito();
            $.each(result.d, function (key, value) {
                $("#cboProvincia").append($("<option></option>").val(value.Codigo).html(value.Nombre));
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
});

$("#cboProvincia").change(function () {
    var params = new Object();
    params.provincia = $("#cboProvincia").val();
    params = JSON.stringify(params);

    $.ajax({
        type: "POST",
        url: "EditarPerfil.aspx/GetDistritoByProvincia",
        data: params,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#cboDistrito").empty();
            $("#cboDistrito").append("<option value='0'>--Select--</option>");
            $.each(result.d, function (key, value) {
                $("#cboDistrito").append($("<option></option>").val(value.Codigo).html(value.Nombre));
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
});

function CargarDepartamentos() {
    var params = new Object();
    params.pais = $("#cboPais").val();
    params = JSON.stringify(params);

    $.ajax({
        type: "POST",
        url: "EditarPerfil.aspx/GetDepartamentosByPais",
        data: params,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#cboDepartamento").empty();
            $("#cboDepartamento").append("<option value='0'>--Select--</option>");
            $.each(result.d, function (key, value) {
                $("#cboDepartamento").append($("<option></option>").val(value.Codigo).html(value.Nombre));
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
}

function CargarProvincia() {
    var params = new Object();
    params.departamento = $("#cboDepartamento").val();
    params = JSON.stringify(params);

    $.ajax({
        type: "POST",
        url: "EditarPerfil.aspx/GetProvinciaByDepartamento",
        data: params,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#cboProvincia").empty();
            $("#cboProvincia").append("<option value='0'>--Select--</option>");
            $.each(result.d, function (key, value) {
                $("#cboProvincia").append($("<option></option>").val(value.Codigo).html(value.Nombre));
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
}

function CargarDistrito() {
    var params = new Object();
    params.provincia = $("#cboProvincia").val();
    params = JSON.stringify(params);

    $.ajax({
        type: "POST",
        url: "EditarPerfil.aspx/GetDistritoByProvincia",
        data: params,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#cboDistrito").empty();
            $("#cboDistrito").append("<option value='0'>--Select--</option>");
            $.each(result.d, function (key, value) {
                $("#cboDistrito").append($("<option></option>").val(value.Codigo).html(value.Nombre));
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
}

function CambioTipoCliente() {

    var Tcompra = $('#STipoCompra').val();
    if (Tcompra == "01" || Tcompra == "02" || Tcompra == "03" ||
        Tcompra == "04" || Tcompra == "23" || Tcompra == "30") {
        $('#CboUpLine').attr("disabled", false);
        $('#cboTipoCliente').val("01");
    }
    else if (Tcompra == "05") {
        $('#CboUpLine').attr("disabled", true);
        $("#CboUpLine").val("");
        $('#cboTipoCliente').val("05");
    }
    else {
        $('#CboUpLine').attr("disabled", true);
        $("#CboUpLine").val("");
        $('#cboTipoCliente').val("03");
    }
}

function CambioXComprobante() {
    var Tcomprob = $('#cboComprobante').val();

    if (Tcomprob == "2") {
        $('#MostrarBotonValidar').show();
    } else {
        $('#MostrarBotonValidar').hide();
    }
}

function CambioXTitular() {
    var Ttitular = $('#ddlTitularRUC').val();

    if (Ttitular == "2") {
        $('#dvRUC').show();
        $('#dvBtnValRUC').show();
    } else {
        $('#dvRUC').hide();
        $('#dvBtnValRUC').hide();
    }
}

function ObtenerRUC_Perfil() {
    $.ajax({
        type: "POST",
        url: "DetalleDeCompra.aspx/ObtenerRUC_Perfil",
        data: "{}",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (dataS) {
            var Datos = dataS.d;
            Ruc_Perfil = Datos.RUC;
            filtro_preregistro = Datos.PreRegistro;
            montoCompraEval = parseFloat(Datos.montoTotalPagar);
            puntosCompraEval = parseFloat(Datos.puntosTotal);
            MostrarBotonCompra();
        }
    });
}

function ObtenerTipoCliente() {
    $.ajax({
        type: "POST",
        url: "TiendaSN.aspx/ObtenerTipoCliente",
        data: "{}",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (dataS) {
            tipoCliente = dataS.d;
        }
    });
}

function MostrarBotonCompra() {
    //var StipoC = $("#STipoCompra").val();
    //var StipoP = $("#SMedioPago").val();
    //var SpreRe = $("#cboPreRegistro").val();

    //if (SpreRe == "0" && filtro_preregistro == 0) {
    //    if (StipoC == "01" || StipoC == "02" || StipoC == "03" || StipoC == "04" ||
    //        StipoC == "05" || StipoC == "06" || StipoC == "23" || StipoC == "30") {
    //        $("#CompraNormal").hide();
    //        $("#CompraPE").hide();
    //        $("#btnRegistrarAfiliado").show();
    //    }
    //    else if ((StipoC != "01" || StipoC != "02" || StipoC != "03" || StipoC != "04" ||
    //        StipoC != "05" || StipoC != "06" || StipoC != "23" || StipoC != "30") && (StipoP == "05" || StipoP == "09" || StipoP == "01" || StipoP == "10")) {
    //        $("#CompraNormal").show();
    //        $("#CompraPE").hide();
    //        $("#btnRegistrarAfiliado").hide();
    //    }
    //    else if ((StipoC != "01" || StipoC != "02" || StipoC != "03" || StipoC != "04" ||
    //        StipoC != "05" || StipoC != "06" || StipoC != "23" || StipoC != "30") && StipoP == "04") {
    //        $("#CompraNormal").hide();
    //        $("#CompraPE").show();
    //        $("#btnRegistrarAfiliado").hide();
    //    }
    //}
    //else {
    //    if (StipoP == "05" || StipoP == "09" || StipoP == "01" || StipoP == "10") {
    //        $("#CompraNormal").show();
    //        $("#CompraPE").hide();
    //        $("#btnRegistrarAfiliado").hide();
    //    }
    //    else if (StipoP == "04") {
    //        $("#CompraNormal").hide();
    //        $("#CompraPE").show();
    //        $("#btnRegistrarAfiliado").hide();
    //    }
    //}
    $("#CompraNormal").show();
    $("#CompraPE").hide();
    $("#btnRegistrarAfiliado").hide();
}

function GuardarIDCombos(combo, idcombo) {

    MostrarBotonCompra();
    var obj = JSON.stringify({
        comboS: combo, idComboS: idcombo
    });
    $.ajax({
        type: "POST",
        url: "DetalleDeCompra.aspx/GuardarIDCombos",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (dataS) {
            var Datos = dataS.d;
            montoCompraEval = parseFloat(Datos.MontoPago).toFixed(2);
            if (combo == "TCompra") {
                $('#LbPrecioPagar').text("S/." + parseFloat(Datos.MontoPago).toFixed(2));
            }
            if (combo == "Pregis" && (idcombo != "0" && idcombo != "" && idcombo != null)) {
                localStorage['STipoCompra'] = Datos.IdPaquete;
                $('#STipoCompra').val(Datos.IdPaquete);
            }
        }
    });
}

function ActualizarProducto(idProductoPais) {

    var cant = $("#" + idProductoPais + "").val();
    var StipoC = $("#STipoCompra").val();

    var obj = JSON.stringify({
        idProdPais: idProductoPais, nuevaCantidad: cant, tipCompra: StipoC, reenviarActualizar: false
    });
    $.ajax({
        type: "POST",
        url: "DetalleDeCompra.aspx/ActualizarProducto",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (dataS) {
            var Datos = dataS.d;
            if (Datos.EditTypePurchase) {
                $('#STipoCompra').val(Datos.TypePurchase);
            }
            if (Datos.Mensaje == "OK") {
                montoCompraEval = parseFloat(Datos.Monto);
                puntosCompraEval = parseFloat(Datos.Puntos);
                $('#LbPuntosRango').text(Datos.PuntosPromo);
                $('#LbPuntosCompra').text(Datos.Puntos);
                $('#LbPrecioTotal').text("S/." + parseFloat(Datos.Total).toFixed(2));
                $('#LbPrecioPagar').text("S/." + parseFloat(Datos.Monto).toFixed(2));
                $('#lblNetoConDelivery').text("S/." + parseFloat(Datos.SubTotalConDelivery).toFixed(2));
                $('#lblDelivery').text("S/." + parseFloat(Datos.PrecioDelivery).toFixed(2));
                $('#Sub' + idProductoPais + '').text(parseFloat(Datos.SubTotalProd).toFixed(2));
                $('#SubP' + idProductoPais + '').text(Datos.SubTotalPunt);

                $('#lbPuntosRango2').text(Datos.PuntosPromo);
                $('#lblPuntos2').text(Datos.Puntos);
                $('#lblPTotal2').text("S/." + parseFloat(Datos.Total).toFixed(2));
                $('#lblPPagar2').text("S/." + parseFloat(Datos.Monto).toFixed(2));
                $('#lblNetoConDelivery2').text("S/." + parseFloat(Datos.PrecioDelivery).toFixed(2));
                $('#lblDelivery2').text("S/." + parseFloat(Datos.SubTotalConDelivery).toFixed(2));
                if (Datos.AccionPromocion == "Eliminar" || Datos.AccionPromocion == "Actualizar") {
                    if (Datos.AccionPromocion == "Eliminar") {
                        EliminarProductoPromocion(Datos.ProductoAccion, StipoC);
                    } else {
                        ActualizarProductoPromocion(Datos.ProductoAccion, Datos.CantidadMaximaAccion);
                    }
                }
                else {
                    Swal.fire({
                        title: 'Perfect!',
                        text: 'Producto Actualizado',
                        type: "success"
                    });
                }
            }
            else {
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: Datos.Mensaje,
                })
            }
        }
    });
}

function ActualizarProductoPromocion(idProductoPais, cantidadMaxima) {

    var StipoC = $("#STipoCompra").val();
    $("#" + idProductoPais).val(cantidadMaxima);
    var obj = JSON.stringify({
        idProdPais: idProductoPais, nuevaCantidad: cantidadMaxima, tipCompra: StipoC, reenviarActualizar: true
    });
    $.ajax({
        type: "POST",
        url: "DetalleDeCompra.aspx/ActualizarProducto",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (dataS) {
            var Datos = dataS.d;
            if (Datos.Mensaje == "OK") {
                montoCompraEval = parseFloat(Datos.Monto);
                puntosCompraEval = parseFloat(Datos.Puntos);
                $('#LbPuntosRango').text(Datos.PuntosPromo);
                $('#LbPuntosCompra').text(Datos.Puntos);
                $('#LbPrecioTotal').text("S/." + parseFloat(Datos.Total).toFixed(2));
                $('#LbPrecioPagar').text("S/." + parseFloat(Datos.Monto).toFixed(2));
                $('#lblNetoConDelivery').text("S/." + parseFloat(Datos.SubTotalConDelivery).toFixed(2));
                $('#lblDelivery').text("S/." + parseFloat(Datos.PrecioDelivery).toFixed(2));
                $('#Sub' + idProductoPais + '').text( parseFloat(Datos.SubTotalProd).toFixed(2));
                $('#SubP' + idProductoPais + '').text(Datos.SubTotalPunt);

                $('#lbPuntosRango2').text(Datos.PuntosPromo);
                $('#lblPuntos2').text(Datos.Puntos);
                $('#lblPTotal2').text("S/." + parseFloat(Datos.Total).toFixed(2));
                $('#lblPPagar2').text("S/." + parseFloat(Datos.Monto).toFixed(2));
                $('#lblNetoConDelivery2').text("S/." + parseFloat(Datos.SubTotalConDelivery).toFixed(2));
                $('#lblDelivery2').text("S/." + parseFloat(Datos.PrecioDelivery).toFixed(2));

                Swal.fire({
                    title: 'Perfect!',
                    text: 'Producto Actualizado',
                    type: "success"
                });
            }
            else {
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: Datos.Mensaje,
                })
            }
        }
    });
}

function EliminarProducto(idProductoPais, t) {
    var index = $(t).parent().parent().index();
    var StipoC = $("#STipoCompra").val();
    var obj = JSON.stringify({
        idProdPais: idProductoPais
    });
    $.ajax({
        type: "POST",
        url: "DetalleDeCompra.aspx/EliminarProducto",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (dataS) {
            var Datos = dataS.d;
            montoCompraEval = parseFloat(Datos.Monto);
            puntosCompraEval = parseFloat(Datos.Puntos);
            $('#LbPuntosRango').text(Datos.PuntosPromo);
            $('#LbPuntosCompra').text(Datos.Puntos);
            $('#LbPrecioTotal').text("S/." + parseFloat(Datos.Total).toFixed(2));
            $('#LbPrecioPagar').text("S/." + parseFloat(Datos.Monto).toFixed(2));
            $('#lblNetoConDelivery').text("S/." + parseFloat(Datos.Monto).toFixed(2));
            $('#lblDelivery').text("S/." + parseFloat(Datos.PrecioDelivery).toFixed(2));

            $('#lbPuntosRango2').text(Datos.PuntosPromo);
            $('#lblPuntos2').text(Datos.Puntos);
            $('#lblPTotal2').text("S/." + parseFloat(Datos.Total).toFixed(2));
            $('#lblPPagar2').text("S/." + parseFloat(Datos.Monto).toFixed(2));
            $('#lblDelivery2').text("S/." + parseFloat(Datos.PrecioDelivery).toFixed(2));

            $("#tblDetProd> tbody > tr").eq(index).remove();
            if (Datos.EditTypePurchase) {
                $('#STipoCompra').val(Datos.TypePurchase);
            }
            if (Datos.AccionPromocion == "Eliminar" || Datos.AccionPromocion == "Actualizar") {
                if (Datos.AccionPromocion == "Eliminar") {
                    EliminarProductoPromocion(Datos.ProductoAccion, StipoC);
                } else {
                    ActualizarProductoPromocion(Datos.ProductoAccion, Datos.CantidadMaximaAccion);
                }
            }
            else {
                Swal.fire({
                    title: 'Perfecto!',
                    text: 'Producto Eliminado',
                    type: "success"
                }).then(function () {
                    if (Datos.Mensaje == "0") {
                        window.location = "TiendaSN.aspx";
                    }
                });
            }
        }
    });
}

function EliminarProductoPromocion(idProductoPais, t) {
    var obj = JSON.stringify({
        idProdPais: idProductoPais
    });
    $.ajax({
        type: "POST",
        url: "DetalleDeCompra.aspx/EliminarProducto",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (dataS) {
            var Datos = dataS.d;
            montoCompraEval = parseFloat(Datos.Monto);
            puntosCompraEval = parseFloat(Datos.Puntos);
            $('#LbPuntosRango').text(Datos.PuntosPromo);
            $('#LbPuntosCompra').text(Datos.Puntos);
            $('#LbPrecioTotal').text("S/." + parseFloat(Datos.Total).toFixed(2));
            $('#LbPrecioPagar').text("S/." + parseFloat(Datos.Monto).toFixed(2));

            $('#lbPuntosRango2').text(Datos.PuntosPromo);
            $('#lblPuntos2').text(Datos.Puntos);
            $('#lblPTotal2').text("S/." + parseFloat(Datos.Total).toFixed(2));
            $('#lblPPagar2').text("S/." + parseFloat(Datos.Monto).toFixed(2));
            //$("#tblDetProd> tbody > tr").eq(index).remove();
            $("#TR" + idProductoPais).remove();
            Swal.fire({
                title: 'Perfecto!',
                text: 'Producto Eliminado',
                type: "success"
            }).then(function () {
                if (Datos.Mensaje == "0") {
                    window.location = "TiendaSN.aspx";
                }
            });
        }
    });
}

$("#ButtonValida").click(function (e) {
    e.preventDefault();
    var ruc = $("#TextBoxRUC").val();
    if (ruc == "20602114121") {
        FaltaSeleccionar("El RUC ingresado le pertenece a Santa Natura, porfavor proceda a modificarlo");
    }
    else {
        validarRUC_Texto(ruc.trim());
    }
});

function validarRUC_Texto(numruc) {
    var obj = JSON.stringify({
        ruc: numruc
    });
    $.ajax({
        type: "POST",
        url: "https://tienda.mundosantanatura.com/Autocompletado.asmx/ValidarRUC",
        //url: "http://localhost:51535/Autocompletado.asmx/ValidarRUC",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (dataS) {
            var Datos = dataS.d;
            var success = Datos.success;
            if (Datos.data != null) {
                var estado = Datos.data.status;
                if (success == "true" && estado == "ACTIVO") {
                    if (Datos.data.address != null && Datos.data.address != "" && Datos.data.address != "-") {
                        var RS = Datos.data.name;
                        RUC_Validado = 1;
                        NumRucValidado = numruc;
                        direccionRUC = Datos.data.district + " - " + Datos.data.address;
                        Swal.fire({
                            title: 'RUC Válido!',
                            text: 'Al continuar con la compra está aceptando que los datos de facturación estarán a nombre de:' + RS,
                            type: "success"
                        });
                    } else {
                        NumRucValidado = numruc;
                        TipoValidacionRUC = "Boton";
                        RellenarDireccionRUC();
                    }
                }
                else {
                    ErrorRUC();
                }

            }
            else {
                ErrorRUC();
            }

        }
    });
}

function RellenarDireccionRUC() {
    $('#exampleModal').modal({ backdrop: 'static', keyboard: false })
    $('#exampleModal').modal('show');
    $("#txtDireccionRUC").val("");
    //$("#dvBtnValRUC").hide();
    $('#lblMensajeRUC').text('El RUC se validó correctamente. Sin embargo, la dirección no fue proporcionada por SUNAT,' +
        ' porfavor ingrese la dirección fiscal que figura en su ficha RUC. Ejemplo: JR. SAN ISIDRO MZA Z LOTE 09 SUBIDA ' +
        'A YAUYOS LIMA -CAÑETE - CERRO AZUL');
}

$("#btnSaveAddress").click(function (e) {
    e.preventDefault();
    if ($("#txtDireccionRUC").val() == "") {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Debe ingresar una dirección válida',
        })
    } else {
        direccionRUC = $("#txtDireccionRUC").val();
        RUC_Validado = (TipoValidacionRUC == "Boton") ? 1 : 0;
        RUC_Valido_Perfil = (TipoValidacionRUC == "Perfil") ? 1 : 0;
        $('#btnCancelM').click();
        $('.modal-backdrop').remove();
        Swal.fire({
            title: 'RUC Válido!',
            text: '¡Perfecto! Todos los datos han sido validados correctamente',
            type: "success"
        });
    }
});

function ValidacionOK(RS, numruc) {
    var obj = JSON.stringify({
        ruc: numruc
    });
    $.ajax({
        type: "POST",
        url: "DetalleDeCompra.aspx/ValidarRUC",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data2) {
            console.log(data2.d);

        }
    });
}

function MostrarRegistroCliente(value) {
    var dropdown = value/*value.options[value.selectedIndex].value*/;
    if (dropdown == "07" | dropdown == "08" | dropdown == "09" | dropdown == "10" |
        dropdown == "11" | dropdown == "12" | dropdown == "13") {
        //document.getElementById("circle02").hide;
        $("#circle02").hide();
        $("#circulito").text("02");
    }
    else {
        $("#circle02").show();
        $("#circulito").text("03");
    }

    var divRegistroCliente = document.getElementById('MostrarRegistroCliente');

    if (value == 1 || value == 2 || value == 3 || value == 4 || value == 5 || value == 6) {
        divRegistroCliente.style.display = "block";
        fijarCampoRequeridoRegistrarCliete();
    }
    else {
        divRegistroCliente.style.display = "none";
        quitarCampoRequeridoRegistrarCliete();
    }

    location.href = ("DetalleDeCompra.aspx?sTipoCom=" + value);
}

function GuardarDatosDelivery2() {

    var nombreD = $("#txtNombreDatosCompra").val();
    var DNID = $("#txtDNIDatosCompra").val();
    var CelularD = $("#txtCelularDatosCompra").val();
    var DireccionD = $("#txtDireccionDatosCompra").val();
    var NomTransporteD = $("#txtTransporteDatosCompra").val();
    var DirecTransporteD = $("#txtDirecTransporteDatosCompra").val();
    var ProvinciaD = $("#txtProvinciaDatosCompra").val();
    var DirecProvinciaD = $("#txtDirecProvinciaDatosCompra").val();
    var obj2 = JSON.stringify({
        Nombre: nombreD, DNI: DNID, Celular: CelularD, Direccion: DireccionD,
        Transporte: NomTransporteD, DirTransporte: DirecTransporteD, Provincia: ProvinciaD, DirProvincia: DirecProvinciaD
    });

    $.ajax({
        type: "POST",
        url: "DetalleDeCompra.aspx/GuardarDatosDelivery",
        data: obj2,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data2) {
            console.log(data2.d);
        }
    });
}

$(".tablaSiguiente").click(function (e) {
    var StipoC = $("#STipoCompra").val();
    var StipoP = $("#SMedioPago").val();
    if (StipoC == "07" | StipoC == "08" | StipoC == "09" | StipoC == "10" |
        StipoC == "11" | StipoC == "12" | StipoC == "13") {
        var ordenCompletada = document.getElementById("ordenCompletada");
        var elemento = document.getElementById("circle03");
        $("#03ordenCompletada").fadeIn(300);
        $("#02afiliacion").slideUp(0);
        $("#01carritoDeCompras").slideUp(0);
        $("#resumenDeLaCompra").slideUp(0);
        $("#tablaCompra").slideUp(0);
        elemento.className += " active"
        ordenCompletada.className += " active"
    } else {
        var afiliacion = document.getElementById("afiliacion");
        var elemento = document.getElementById("circle02");
        $("#tablaCompra").slideUp(0);
        $("#resumenDeLaCompra").slideUp(0);
        $("#02afiliacion").fadeIn(300);
        elemento.className += " active";
        afiliacion.className += " active";
    }

    if (StipoP == "05" || StipoP == "09") {
        $("#CompraNormal2").show();
        $("#CompraPE2").hide();
    }
    else if (StipoP == "04") {
        $("#CompraNormal2").hide();
        $("#CompraPE2").show();
    }


});

function MostrarComboTiendaAndDatosDelivery(value) {
    var divComboTienda = document.getElementById('MostrarComboTiena');
    var divDatosDelivery = document.getElementById('MostrarDatosParaDelivery');

    if (value == "1") {
        divComboTienda.style.display = "block";
        divDatosDelivery.style.display = "none"
    }
    else {
        divComboTienda.style.display = "none";
        divDatosDelivery.style.display = "block"
    }
}

function validarLetras(e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);
    if (keyCode > 47 && keyCode < 58 || keyCode > 95 && keyCode < 107) {
        e.preventDefault();
    }
}

function validarNumeros(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

$("#BntComprar").click(function (e) {
    var SpreRe = $("#cboPreRegistro").val();
    var isCheckedGood = $('#good').prop('checked');
    var isCheckedTermCondi = $('#chbTermCondi').prop('checked');
    if (isCheckedGood && !isCheckedTermCondi && hasDelivery) {
        Swal.fire({
            title: 'Acción Requerida',
            text: 'Para continuar con la compra, por favor desactive el modo de edición y acepte los términos y condiciones.',
            type: 'warning'
        });
    } else if (isCheckedGood && hasDelivery) {
        Swal.fire({
            title: 'Acción Requerida',
            text: 'Por favor, desactive el modo de edición antes de continuar con la compra.',
            type: 'warning'
        });
    } else if (!isCheckedTermCondi && hasDelivery) {
        Swal.fire({
            title: 'Acción Requerida',
            text: 'Por favor, acepte los términos y condiciones para poder continuar con la compra.',
            type: 'warning'
        });
    } else {
        // Proceder con la validación normal
        if (filtro_preregistro == 0) {
            ValidarPedidoNormal();
        } else {
            ValidarPedidoPreRegistro();
        }
    }
});

$("#btnCompraPE").click(function (e) {
    var SpreRe = $("#cboPreRegistro").val();

    if (filtro_preregistro == 0) {
        ValidarPedidoPE();
    }
    else {
        ValidarPedidoPreRegistroPE();
    }

});

$("#CompraNormal2").click(function (e) {
    var StipoC = $("#STipoCompra").val();
    var StipoP = $("#SMedioPago").val();
    var Stienda = $("#ComboTienda").val();
    var Scomprob = $("#cboComprobante").val();
    var Stitular = $("#ddlTitularRUC").val();
    var tNombres = $("#txtNombre").val();
    var tApePat = $("#txtApPaterno").val();
    var tUsuario = $("#txtUl").val();
    var tClave = $("#TxtCl").val();
    var cUpline = $("#CboUpLine").val();
    var cDistrito = $("#cboDistrito").val();
    var cProvincia = $("#cboProvincia").val();
    var cDepartamento = $("#cboDepartamento").val();
    var cPremio = $("#cboPremio").val();
    var tCelular = $("#TxtCelular").val();
    var tDireccion = $("#txtDireccion").val();
    var tDocumento = $("#txtNumDocumento").val();
    var tRUC = $("#TxtRUC").val();
    var tFechaNac = $("#datepicker").val();
    var Spuntos = puntosCompraEval;
    var SprecioPago = montoCompraEval;

    if (StipoC == "0" /*|| StipoP == "0"*/ || Stienda == "0") {
        FaltanDatos();
    }
    else if (tNombres == "") {
        FaltaSeleccionar("Debe ingresar un nombre valido");
    }
    else if (tApePat == "") {
        FaltaSeleccionar("Debe ingresar una Apellido valido");
    }
    else if (tUsuario == "") {
        FaltaSeleccionar("Debe ingresar un usuario valido");
    }
    else if (tClave == "") {
        FaltaSeleccionar("Debe ingresar una clave valida");
    }
    else if (tFechaNac == "") {
        FaltaSeleccionar("Debe ingresar una fecha de nacimiento correcta");
    }
    else if (cDepartamento == "") {
        FaltaSeleccionar("Debe seleccionar el Departamento");
    }
    else if (cProvincia == "") {
        FaltaSeleccionar("Debe seleccionar la Provincia");
    }
    else if (cDistrito == "") {
        FaltaSeleccionar("Debe seleccionar el Distrito");
    }
    else if (cPremio == "") {
        FaltaSeleccionar("Debe seleccionar el Y.W. Premio");
    }
    else if (tCelular == "" || tCelular.length < 9) {
        FaltaSeleccionar("Debe ingresar un número de celular válido");
    }
    else if (tDireccion == "") {
        FaltaSeleccionar("Debe ingresar una dirección válida");
    }
    else if (tDocumento == "" || tDocumento.length < 8) {
        FaltaSeleccionar("Debe ingresar una documento válido");
    }
    else if (tRUC == "20602114121") {
        FaltaSeleccionar("El RUC de su perfil no está permitido");
    }
    else if (Scomprob == "0" || Scomprob == "" || Scomprob == null) {
        FaltanDatos();
    }
    else if (SprecioPago <= 0) {
        FaltanProductos();
    }
    else if (Scomprob == "2" && (Stitular == "0" || Stitular == "" || Stitular == null)) {
        FaltaTitular();
    }
    else if (Scomprob == "2" && Stitular == "2" && RUC_Validado == 0) {
        ErrorRUC();
    }
    else if (cUpline == "" && (StipoC != "05" && StipoC != "06")) {
        FaltaUpline();
    }
    else if (Scomprob == "2" && Stitular == "1") {
        if (StipoC == "01") {
            if (Spuntos >= 50 & SprecioPago >= 200) {
                validarRUC_Perfil(Ruc_Perfil, "CCAF");
            } else {
                FaltaMontoUpgrade("Necesita 50 puntos y un monto de S/. 200 para realizar la compra");
            }
        }
        else if (StipoC == "02") {
            if (Spuntos >= 100 & SprecioPago >= 375) {
                validarRUC_Perfil(Ruc_Perfil, "CCAF");
            } else {
                FaltaMontoUpgrade("Necesita 100 puntos y un monto de S/. 375 para realizar la compra");
            }
        }
        else if (StipoC == "03") {
            if (Spuntos >= 250 & SprecioPago >= 875) {
                validarRUC_Perfil(Ruc_Perfil, "CCAF");
            } else {
                FaltaMontoUpgrade("Necesita 250 puntos y un monto de S/. 875 para realizar la compra");
            }
        }
        else if (StipoC == "04") {
            if (Spuntos >= 500 & SprecioPago >= 1500) {
                validarRUC_Perfil(Ruc_Perfil, "CCAF");
            } else {
                FaltaMontoUpgrade("Necesita 500 puntos y un monto de S/. 1500 para realizar la compra");
            }
        }
        else if (StipoC == "05") {
            if (SprecioPago >= 100) {
                validarRUC_Perfil(Ruc_Perfil, "CCAF");
            } else {
                FaltaMontoUpgrade("Necesita un monto de S/. 100 para realizar la compra");
            }
        }
        else if (StipoC == "06") {
            if (SprecioPago >= 100) {
                validarRUC_Perfil(Ruc_Perfil, "CCAF");
            } else {
                FaltaMontoUpgrade("Necesita un monto de S/. 100 para realizar la compra");
            }
        }
        else if (StipoC == "23") {
            if (Spuntos >= 1000 & SprecioPago >= 3000) {
                validarRUC_Perfil(Ruc_Perfil, "CCAF");
            } else {
                FaltaMontoUpgrade("Necesita 1000 puntos y un monto de S/. 3000 para realizar la compra");
            }
        }
        else {
            validarRUC_Perfil(Ruc_Perfil, "CCAF");
        }
    }
    else {
        if (StipoC == "01") {
            if (Spuntos >= 50 & SprecioPago >= 200) {
                CompraCanjeAfiliacion();
            } else {
                FaltaMontoUpgrade("Necesita 50 puntos y un monto de S/. 200 para realizar la compra");
            }
        }
        else if (StipoC == "02") {
            if (Spuntos >= 100 & SprecioPago >= 375) {
                CompraCanjeAfiliacion();
            } else {
                FaltaMontoUpgrade("Necesita 100 puntos y un monto de S/. 375 para realizar la compra");
            }
        }
        else if (StipoC == "03") {
            if (Spuntos >= 250 & SprecioPago >= 875) {
                CompraCanjeAfiliacion();
            } else {
                FaltaMontoUpgrade("Necesita 250 puntos y un monto de S/. 875 para realizar la compra");
            }
        }
        else if (StipoC == "04") {
            if (Spuntos >= 500 & SprecioPago >= 1500) {
                CompraCanjeAfiliacion();
            } else {
                FaltaMontoUpgrade("Necesita 500 puntos y un monto de S/. 1500 para realizar la compra");
            }
        }
        else if (StipoC == "05") {
            if (SprecioPago >= 100) {
                CompraCanjeAfiliacion();
            } else {
                FaltaMontoUpgrade("Necesita un monto de S/. 100 para realizar la compra");
            }
        }
        else if (StipoC == "06") {
            if (SprecioPago >= 100) {
                CompraCanjeAfiliacion();
            } else {
                FaltaMontoUpgrade("Necesita un monto de S/. 100 para realizar la compra");
            }
        }
        else if (StipoC == "23") {
            if (Spuntos >= 1000 & SprecioPago >= 3000) {
                CompraCanjeAfiliacion();
            } else {
                FaltaMontoUpgrade("Necesita 1000 puntos y un monto de S/. 3000 para realizar la compra");
            }
        }
        else {
            CompraCanjeAfiliacion();
        }
    }

});

$("#CompraPE2").click(function (e) {
    var StipoC = $("#STipoCompra").val();
    var StipoP = $("#SMedioPago").val();
    var Stienda = $("#ComboTienda").val();
    var Scomprob = $("#cboComprobante").val();
    var Stitular = $("#ddlTitularRUC").val();
    var tNombres = $("#txtNombre").val();
    var tApePat = $("#txtApPaterno").val();
    var tUsuario = $("#txtUl").val();
    var tClave = $("#TxtCl").val();
    var cUpline = $("#CboUpLine").val();
    var cDistrito = $("#cboDistrito").val();
    var cProvincia = $("#cboProvincia").val();
    var cDepartamento = $("#cboDepartamento").val();
    var cPremio = $("#cboPremio").val();
    var tCelular = $("#TxtCelular").val();
    var tDireccion = $("#txtDireccion").val();
    var tDocumento = $("#txtNumDocumento").val();
    var tRUC = $("#TxtRUC").val();
    var tFechaNac = $("#datepicker").val();
    var Spuntos = puntosCompraEval;
    var SprecioPago = montoCompraEval;

    if (StipoC == "0" || StipoP == "0" || Stienda == "0") {
        FaltanDatos();
    }
    else if (tFechaNac == "") {
        FaltaSeleccionar("Debe ingresar una fecha de nacimiento correcta");
    }
    else if (tNombres == "") {
        FaltaSeleccionar("Debe ingresar un nombre valido");
    }
    else if (tApePat == "") {
        FaltaSeleccionar("Debe ingresar una Apellido valido");
    }
    else if (tUsuario == "") {
        FaltaSeleccionar("Debe ingresar un usuario valido");
    }
    else if (tClave == "") {
        FaltaSeleccionar("Debe ingresar una clave valida");
    }
    else if (cDepartamento == "") {
        FaltaSeleccionar("Debe seleccionar el Departamento");
    }
    else if (cProvincia == "") {
        FaltaSeleccionar("Debe seleccionar la Provincia");
    }
    else if (cDistrito == "") {
        FaltaSeleccionar("Debe seleccionar el Distrito");
    }
    else if (cPremio == "") {
        FaltaSeleccionar("Debe seleccionar el Y.W. Premio");
    }
    else if (tCelular == "" || tCelular.length < 9) {
        FaltaSeleccionar("Debe ingresar un número de celular válido");
    }
    else if (tDireccion == "") {
        FaltaSeleccionar("Debe ingresar una dirección válida");
    }
    else if (tRUC == "20602114121") {
        FaltaSeleccionar("El RUC de su perfil no está permitido, porfavor proceda a modificarlo");
    }
    else if (tDocumento == "" || tDocumento.length < 8) {
        FaltaSeleccionar("Debe ingresar una documento válido");
    }
    else if (Scomprob == "0" || Scomprob == "" || Scomprob == null) {
        FaltanDatos();
    }
    else if (SprecioPago <= 0) {
        FaltanProductos();
    }
    else if (Scomprob == "2" && (Stitular == "0" || Stitular == "" || Stitular == null)) {
        FaltaTitular();
    }
    else if (Scomprob == "2" && Stitular == "2" && RUC_Validado == 0) {
        ErrorRUC();
    }
    else if (cUpline == "" && (StipoC != "05" && StipoC != "06")) {
        FaltaUpline();
    }
    else if (Scomprob == "2" && Stitular == "1") {
        if (StipoC == "01") {
            if (Spuntos >= 50 & SprecioPago >= 200) {
                validarRUC_Perfil(Ruc_Perfil, "PEAF");
            } else {
                FaltaMontoUpgrade("Necesita 50 puntos y un monto de S/. 200 para realizar la compra");
            }
        }
        else if (StipoC == "02") {
            if (Spuntos >= 100 & SprecioPago >= 375) {
                validarRUC_Perfil(Ruc_Perfil, "PEAF");
            } else {
                FaltaMontoUpgrade("Necesita 100 puntos y un monto de S/. 375 para realizar la compra");
            }
        }
        else if (StipoC == "03") {
            if (Spuntos >= 250 & SprecioPago >= 875) {
                validarRUC_Perfil(Ruc_Perfil, "PEAF");
            } else {
                FaltaMontoUpgrade("Necesita 250 puntos y un monto de S/. 875 para realizar la compra");
            }
        }
        else if (StipoC == "04") {
            if (Spuntos >= 500 & SprecioPago >= 1500) {
                validarRUC_Perfil(Ruc_Perfil, "PEAF");
            } else {
                FaltaMontoUpgrade("Necesita 500 puntos y un monto de S/. 1500 para realizar la compra");
            }
        }
        else if (StipoC == "05") {
            if (SprecioPago >= 100) {
                validarRUC_Perfil(Ruc_Perfil, "PEAF");
            } else {
                FaltaMontoUpgrade("Necesita un monto de S/. 100 para realizar la compra");
            }
        }
        else if (StipoC == "06") {
            if (SprecioPago >= 100) {
                validarRUC_Perfil(Ruc_Perfil, "PEAF");
            } else {
                FaltaMontoUpgrade("Necesita un monto de S/. 100 para realizar la compra");
            }
        }
        else if (StipoC == "23") {
            if (Spuntos >= 1000 & SprecioPago >= 3000) {
                validarRUC_Perfil(Ruc_Perfil, "PEAF");
            } else {
                FaltaMontoUpgrade("Necesita 1000 puntos y un monto de S/. 3000 para realizar la compra");
            }
        }
        else {
            validarRUC_Perfil(Ruc_Perfil, "PEAF");
        }
    }
    else {
        if (StipoC == "01") {
            if (Spuntos >= 50 & SprecioPago >= 200) {
                CompraPEAfiliacion();
            } else {
                FaltaMontoUpgrade("Necesita 50 puntos y un monto de S/. 200 para realizar la compra");
            }
        }
        else if (StipoC == "02") {
            if (Spuntos >= 100 & SprecioPago >= 375) {
                CompraPEAfiliacion();
            } else {
                FaltaMontoUpgrade("Necesita 100 puntos y un monto de S/. 375 para realizar la compra");
            }
        }
        else if (StipoC == "03") {
            if (Spuntos >= 250 & SprecioPago >= 875) {
                CompraPEAfiliacion();
            } else {
                FaltaMontoUpgrade("Necesita 250 puntos y un monto de S/. 875 para realizar la compra");
            }
        }
        else if (StipoC == "04") {
            if (Spuntos >= 500 & SprecioPago >= 1500) {
                CompraPEAfiliacion();
            } else {
                FaltaMontoUpgrade("Necesita 500 puntos y un monto de S/. 1500 para realizar la compra");
            }
        }
        else if (StipoC == "05") {
            if (SprecioPago >= 100) {
                CompraPEAfiliacion();
            } else {
                FaltaMontoUpgrade("Necesita un monto de S/. 100 para realizar la compra");
            }
        }
        else if (StipoC == "06") {
            if (SprecioPago >= 100) {
                CompraPEAfiliacion();
            } else {
                FaltaMontoUpgrade("Necesita un monto de S/. 100 para realizar la compra");
            }
        }
        else if (StipoC == "23") {
            if (Spuntos >= 1000 & SprecioPago >= 3000) {
                CompraPEAfiliacion();
            } else {
                FaltaMontoUpgrade("Necesita 1000 puntos y un monto de S/. 3000 para realizar la compra");
            }
        }
        else {
            CompraPEAfiliacion();
        }
    }

});

//function ValidarPedidoNormal() {
//    var StipoC = $("#STipoCompra").val();
//    var StipoP = $("#SMedioPago").val();
//    var Stienda = $("#ComboTienda").val();
//    var Scomprob = $("#cboComprobante").val();
//    var Stitular = $("#ddlTitularRUC").val();
//    var Spuntos = puntosCompraEval;
//    var SprecioPago = montoCompraEval;

//    if (StipoC == "0" || StipoP == "0" || Stienda == "0") {
//        FaltanDatos();
//    }
//    else if (Scomprob == "0" || Scomprob == "" || Scomprob == null) {
//        FaltanDatos();
//    }
//    else if (SprecioPago <= 0) {
//        FaltanProductos();
//    }
//    else if (Scomprob == "2" && (Stitular == "0" || Stitular == "" || Stitular == null)) {
//        FaltaTitular();
//    }
//    else if (Scomprob == "2" && Stitular == "2" && RUC_Validado == 0) {
//        ErrorRUC();
//    }
//    else if (Scomprob == "2" && Stitular == "1") {
//        if (StipoC == "08") {
//            if (Spuntos >= 50 & SprecioPago >= 187.50) {
//                validarRUC_Perfil(Ruc_Perfil, "CCUP");
//            } else {
//                FaltaMontoUpgrade("Necesita 50 puntos y un monto de S/. 187.50 para realizar la compra");
//            }
//        }
//        else if (StipoC == "09") {
//            if (Spuntos >= 200 & SprecioPago >= 700) {
//                validarRUC_Perfil(Ruc_Perfil, "CCUP");
//            } else {
//                FaltaMontoUpgrade("Necesita 200 puntos y un monto de S/. 700 para realizar la compra");
//            }
//        }
//        else if (StipoC == "10") {
//            if (Spuntos >= 450 & SprecioPago >= 1350) {
//                validarRUC_Perfil(Ruc_Perfil, "CCUP");
//            } else {
//                FaltaMontoUpgrade("Necesita 450 puntos y un monto de S/. 1350 para realizar la compra");
//            }
//        }
//        else if (StipoC == "11") {
//            if (Spuntos >= 150 & SprecioPago >= 525) {
//                validarRUC_Perfil(Ruc_Perfil, "CCUP");
//            } else {
//                FaltaMontoUpgrade("Necesita 150 puntos y un monto de S/. 525 para realizar la compra");
//            }
//        }
//        else if (StipoC == "12") {
//            if (Spuntos >= 400 & SprecioPago >= 1200) {
//                validarRUC_Perfil(Ruc_Perfil, "CCUP");
//            } else {
//                FaltaMontoUpgrade("Necesita 400 puntos y un monto de S/. 1200 para realizar la compra");
//            }
//        }
//        else if (StipoC == "13") {
//            if (Spuntos >= 250 & SprecioPago >= 750) {
//                validarRUC_Perfil(Ruc_Perfil, "CCUP");
//            } else {
//                FaltaMontoUpgrade("Necesita 250 puntos y un monto de S/. 750 para realizar la compra");
//            }
//        }
//        else if (StipoC == "24") {
//            if (Spuntos >= 950 & SprecioPago >= 2850) {
//                validarRUC_Perfil(Ruc_Perfil, "CCUP");
//            } else {
//                FaltaMontoUpgrade("Necesita 950 puntos y un monto de S/. 2850 para realizar la compra");
//            }
//        }
//        else if (StipoC == "25") {
//            if (Spuntos >= 900 & SprecioPago >= 2700) {
//                validarRUC_Perfil(Ruc_Perfil, "CCUP");
//            } else {
//                FaltaMontoUpgrade("Necesita 900 puntos y un monto de S/. 2700 para realizar la compra");
//            }
//        }
//        else if (StipoC == "26") {
//            if (Spuntos >= 750 & SprecioPago >= 2250) {
//                validarRUC_Perfil(Ruc_Perfil, "CCUP");
//            } else {
//                FaltaMontoUpgrade("Necesita 750 puntos y un monto de S/. 2250 para realizar la compra");
//            }
//        }
//        else if (StipoC == "27") {
//            if (Spuntos >= 500 & SprecioPago >= 1500) {
//                validarRUC_Perfil(Ruc_Perfil, "CCUP");
//            } else {
//                FaltaMontoUpgrade("Necesita 500 puntos y un monto de S/. 1500 para realizar la compra");
//            }
//        } else {
//            validarRUC_Perfil(Ruc_Perfil, "CCUP");
//        }
//    }
//    else {
//        if (StipoC == "08") {
//            if (Spuntos >= 50 & SprecioPago >= 187.50) {
//                CompraCanjeConsumo_Upgrade();
//            } else {
//                FaltaMontoUpgrade("Necesita 50 puntos y un monto de S/. 187.50 para realizar la compra");
//            }
//        }
//        else if (StipoC == "09") {
//            if (Spuntos >= 200 & SprecioPago >= 700) {
//                CompraCanjeConsumo_Upgrade();
//            } else {
//                FaltaMontoUpgrade("Necesita 200 puntos y un monto de S/. 700 para realizar la compra");
//            }
//        }
//        else if (StipoC == "10") {
//            if (Spuntos >= 450 & SprecioPago >= 1350) {
//                CompraCanjeConsumo_Upgrade();
//            } else {
//                FaltaMontoUpgrade("Necesita 450 puntos y un monto de S/. 1350 para realizar la compra");
//            }
//        }
//        else if (StipoC == "11") {
//            if (Spuntos >= 150 & SprecioPago >= 525) {
//                CompraCanjeConsumo_Upgrade();
//            } else {
//                FaltaMontoUpgrade("Necesita 150 puntos y un monto de S/. 525 para realizar la compra");
//            }
//        }
//        else if (StipoC == "12") {
//            if (Spuntos >= 400 & SprecioPago >= 1200) {
//                CompraCanjeConsumo_Upgrade();
//            } else {
//                FaltaMontoUpgrade("Necesita 400 puntos y un monto de S/. 1200 para realizar la compra");
//            }
//        }
//        else if (StipoC == "13") {
//            if (Spuntos >= 250 & SprecioPago >= 750) {
//                CompraCanjeConsumo_Upgrade();
//            } else {
//                FaltaMontoUpgrade("Necesita 250 puntos y un monto de S/. 750 para realizar la compra");
//            }
//        }
//        else if (StipoC == "24") {
//            if (Spuntos >= 950 & SprecioPago >= 2850) {
//                CompraCanjeConsumo_Upgrade();
//            } else {
//                FaltaMontoUpgrade("Necesita 950 puntos y un monto de S/. 2850 para realizar la compra");
//            }
//        }
//        else if (StipoC == "25") {
//            if (Spuntos >= 900 & SprecioPago >= 2700) {
//                CompraCanjeConsumo_Upgrade();
//            } else {
//                FaltaMontoUpgrade("Necesita 900 puntos y un monto de S/. 2700 para realizar la compra");
//            }
//        }
//        else if (StipoC == "26") {
//            if (Spuntos >= 750 & SprecioPago >= 2250) {
//                CompraCanjeConsumo_Upgrade();
//            } else {
//                FaltaMontoUpgrade("Necesita 750 puntos y un monto de S/. 2250 para realizar la compra");
//            }
//        }
//        else if (StipoC == "27") {
//            if (Spuntos >= 500 & SprecioPago >= 1500) {
//                CompraCanjeConsumo_Upgrade();
//            } else {
//                FaltaMontoUpgrade("Necesita 500 puntos y un monto de S/. 1500 para realizar la compra");
//            }
//        } else {
//            CompraCanjeConsumo_Upgrade();
//        }
//    }
//}

//function ValidarPedidoPreRegistro() {
//    var StipoC = $("#STipoCompra").val();
//    var StipoP = $("#SMedioPago").val();
//    var Stienda = $("#ComboTienda").val();
//    var Scomprob = $("#cboComprobante").val();
//    var Stitular = $("#ddlTitularRUC").val();
//    var Spuntos = puntosCompraEval;
//    var SprecioPago = montoCompraEval;

//    if (StipoC == "0" || StipoP == "0" || Stienda == "0") {
//        FaltanDatos();
//    }
//    else if (Scomprob == "0" || Scomprob == "" || Scomprob == null) {
//        FaltanDatos();
//    }
//    else if (SprecioPago <= 0) {
//        FaltanProductos();
//    }
//    else if (Scomprob == "2" && (Stitular == "0" || Stitular == "" || Stitular == null)) {
//        FaltaTitular();
//    }
//    else if (Scomprob == "2" && Stitular == "2" && RUC_Validado == 0) {
//        ErrorRUC();
//    }
//    else if (Scomprob == "2" && Stitular == "1") {
//        if (StipoC == "01") {
//            if (Spuntos >= 50 & SprecioPago >= 200) {
//                validarRUC_Perfil(Ruc_Perfil, "CCUP");
//            } else {
//                FaltaMontoUpgrade("Necesita 50 puntos y un monto de S/. 200 para realizar la compra");
//            }
//        }
//        else if (StipoC == "02") {
//            if (Spuntos >= 100 & SprecioPago >= 375) {
//                validarRUC_Perfil(Ruc_Perfil, "CCUP");
//            } else {
//                FaltaMontoUpgrade("Necesita 100 puntos y un monto de S/. 375 para realizar la compra");
//            }
//        }
//        else if (StipoC == "03") {
//            if (Spuntos >= 250 & SprecioPago >= 875) {
//                validarRUC_Perfil(Ruc_Perfil, "CCUP");
//            } else {
//                FaltaMontoUpgrade("Necesita 250 puntos y un monto de S/. 875 para realizar la compra");
//            }
//        }
//        else if (StipoC == "04") {
//            if (Spuntos >= 500 & SprecioPago >= 1500) {
//                validarRUC_Perfil(Ruc_Perfil, "CCUP");
//            } else {
//                FaltaMontoUpgrade("Necesita 500 puntos y un monto de S/. 1500 para realizar la compra");
//            }
//        }
//        else if (StipoC == "05") {
//            if (SprecioPago >= 100) {
//                validarRUC_Perfil(Ruc_Perfil, "CCUP");
//            } else {
//                FaltaMontoUpgrade("Necesita un monto de S/. 100 para realizar la compra");
//            }
//        }
//        else if (StipoC == "06") {
//            if (SprecioPago >= 100) {
//                validarRUC_Perfil(Ruc_Perfil, "CCUP");
//            } else {
//                FaltaMontoUpgrade("Necesita un monto de S/. 100 para realizar la compra");
//            }
//        }
//        else if (StipoC == "23") {
//            if (Spuntos >= 1000 & SprecioPago >= 3000) {
//                validarRUC_Perfil(Ruc_Perfil, "CCUP");
//            } else {
//                FaltaMontoUpgrade("Necesita 1000 puntos y un monto de S/. 3000 para realizar la compra");
//            }
//        }
//        else {
//            validarRUC_Perfil(Ruc_Perfil, "CCUP");
//        }
//    }
//    else {
//        if (StipoC == "01") {
//            if (Spuntos >= 50 & SprecioPago >= 200) {
//                CompraCanjeConsumo_Upgrade();
//            } else {
//                FaltaMontoUpgrade("Necesita 50 puntos y un monto de S/. 200 para realizar la compra");
//            }
//        }
//        else if (StipoC == "02") {
//            if (Spuntos >= 100 & SprecioPago >= 375) {
//                CompraCanjeConsumo_Upgrade();
//            } else {
//                FaltaMontoUpgrade("Necesita 100 puntos y un monto de S/. 375 para realizar la compra");
//            }
//        }
//        else if (StipoC == "03") {
//            if (Spuntos >= 250 & SprecioPago >= 875) {
//                CompraCanjeConsumo_Upgrade();
//            } else {
//                FaltaMontoUpgrade("Necesita 250 puntos y un monto de S/. 875 para realizar la compra");
//            }
//        }
//        else if (StipoC == "04") {
//            if (Spuntos >= 500 & SprecioPago >= 1500) {
//                CompraCanjeConsumo_Upgrade();
//            } else {
//                FaltaMontoUpgrade("Necesita 500 puntos y un monto de S/. 1500 para realizar la compra");
//            }
//        }
//        else if (StipoC == "05") {
//            if (SprecioPago >= 100) {
//                CompraCanjeConsumo_Upgrade();
//            } else {
//                FaltaMontoUpgrade("Necesita un monto de S/. 100 para realizar la compra");
//            }
//        }
//        else if (StipoC == "06") {
//            if (SprecioPago >= 100) {
//                CompraCanjeConsumo_Upgrade();
//            } else {
//                FaltaMontoUpgrade("Necesita un monto de S/. 100 para realizar la compra");
//            }
//        }
//        else if (StipoC == "23") {
//            if (Spuntos >= 1000 & SprecioPago >= 3000) {
//                CompraCanjeConsumo_Upgrade();
//            } else {
//                FaltaMontoUpgrade("Necesita 1000 puntos y un monto de S/. 3000 para realizar la compra");
//            }
//        }
//        else {
//            CompraCanjeConsumo_Upgrade();
//        }
//    }
//}

function ValidarPedidoNormal() {
    var StipoC = $("#STipoCompra").val();
    var StipoP = $("#SMedioPago").val();
    var Stienda = $("#ComboTienda").val();
    var Scomprob = $("#cboComprobante").val();
    var Stitular = $("#ddlTitularRUC").val();
    var Spuntos = puntosCompraEval;
    var SprecioPago = montoCompraEval;

    if (StipoC == "0" || /*StipoP == "0" ||*/ Stienda == "0") {
        FaltanDatos();
    }
    else if (Scomprob == "0" || Scomprob == "" || Scomprob == null) {
        FaltanDatos();
    }
    else if (SprecioPago <= 0) {
        FaltanProductos();
    }
    else if (Scomprob == "2" && (Stitular == "0" || Stitular == "" || Stitular == null)) {
        FaltaTitular();
    }
    else if (Scomprob == "2" && Stitular == "2" && RUC_Validado == 0) {
        ErrorRUC();
    }
    else if (Scomprob == "2" && Stitular == "1") {
        if (StipoC == "08") {
            if (Spuntos >= 50) {
                validarRUC_Perfil(Ruc_Perfil, "CCUP");
            } else {
                FaltaMontoUpgrade("Necesita 50 puntos para realizar la compra");
            }
        }
        else if (StipoC == "09") {
            if (Spuntos >= 200) {
                validarRUC_Perfil(Ruc_Perfil, "CCUP");
            } else {
                FaltaMontoUpgrade("Necesita 200 puntos para realizar la compra");
            }
        }
        else if (StipoC == "33") {
            if (Spuntos >= 50) {
                validarRUC_Perfil(Ruc_Perfil, "CCUP");
            } else {
                FaltaMontoUpgrade("Necesita 50 puntos para realizar la compra");
            }
        }
        else if (StipoC == "10") {
            if (Spuntos >= 450) {
                validarRUC_Perfil(Ruc_Perfil, "CCUP");
            } else {
                FaltaMontoUpgrade("Necesita 450 puntos para realizar la compra");
            }
        }
        else if (StipoC == "11") {
            if (Spuntos >= 150) {
                validarRUC_Perfil(Ruc_Perfil, "CCUP");
            } else {
                FaltaMontoUpgrade("Necesita 150 puntos para realizar la compra");
            }
        }
        else if (StipoC == "12") {
            if (Spuntos >= 400) {
                validarRUC_Perfil(Ruc_Perfil, "CCUP");
            } else {
                FaltaMontoUpgrade("Necesita 400 puntos para realizar la compra");
            }
        }
        else if (StipoC == "13") {
            if (Spuntos >= 250) {
                validarRUC_Perfil(Ruc_Perfil, "CCUP");
            } else {
                FaltaMontoUpgrade("Necesita 250 puntos para realizar la compra");
            }
        }
        else if (StipoC == "24") {
            if (Spuntos >= 750) {
                validarRUC_Perfil(Ruc_Perfil, "CCUP");
            } else {
                FaltaMontoUpgrade("Necesita 750 puntos para realizar la compra");
            }
        }
        else if (StipoC == "25") {
            if (Spuntos >= 700) {
                validarRUC_Perfil(Ruc_Perfil, "CCUP");
            } else {
                FaltaMontoUpgrade("Necesita 700 puntos para realizar la compra");
            }
        }
        else if (StipoC == "26") {
            if (Spuntos >= 550) {
                validarRUC_Perfil(Ruc_Perfil, "CCUP");
            } else {
                FaltaMontoUpgrade("Necesita 550 puntos para realizar la compra");
            }
        }
        else if (StipoC == "27") {
            if (Spuntos >= 300) {
                validarRUC_Perfil(Ruc_Perfil, "CCUP");
            } else {
                FaltaMontoUpgrade("Necesita 300 puntos para realizar la compra");
            }
        }
        else if (StipoC == "31") {
            if (Spuntos >= 400) {
                validarRUC_Perfil(Ruc_Perfil, "CCUP");
            } else {
                FaltaMontoUpgrade("Necesita 400 puntos para realizar la compra");
            }
        }
        else if (StipoC == "32") {
            if (Spuntos >= 700) {
                validarRUC_Perfil(Ruc_Perfil, "CCUP");
            } else {
                FaltaMontoUpgrade("Necesita 700 puntos para realizar la compra");
            }
        }
        else {
            validarRUC_Perfil(Ruc_Perfil, "CCUP");
        }
    }
    else {
        if (StipoC == "08") {
            if (Spuntos >= 50) {
                CompraCanjeConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 50 puntos para realizar la compra");
            }
        }
        else if (StipoC == "09") {
            if (Spuntos >= 200) {
                CompraCanjeConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 200 puntos para realizar la compra");
            }
        }
        else if (StipoC == "33") {
            if (Spuntos >= 50) {
                validarRUC_Perfil(Ruc_Perfil, "CCUP");
            } else {
                FaltaMontoUpgrade("Necesita 50 puntos para realizar la compra");
            }
        }
        else if (StipoC == "10") {
            if (Spuntos >= 450) {
                CompraCanjeConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 450 puntos para realizar la compra");
            }
        }
        else if (StipoC == "11") {
            if (Spuntos >= 150) {
                CompraCanjeConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 150 puntos para realizar la compra");
            }
        }
        else if (StipoC == "12") {
            if (Spuntos >= 400) {
                CompraCanjeConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 400 puntos para realizar la compra");
            }
        }
        else if (StipoC == "13") {
            if (Spuntos >= 250) {
                CompraCanjeConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 250 puntos para realizar la compra");
            }
        }
        else if (StipoC == "24") {
            if (Spuntos >= 750) {
                CompraCanjeConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 750 puntos para realizar la compra");
            }
        }
        else if (StipoC == "25") {
            if (Spuntos >= 700) {
                CompraCanjeConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 700 puntos para realizar la compra");
            }
        }
        else if (StipoC == "26") {
            if (Spuntos >= 550) {
                CompraCanjeConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 550 puntos para realizar la compra");
            }
        }
        else if (StipoC == "27") {
            if (Spuntos >= 300) {
                CompraCanjeConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 300 puntos para realizar la compra");
            }
        }
        else if (StipoC == "31") {
            if (Spuntos >= 400) {
                CompraCanjeConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 400 puntos para realizar la compra");
            }
        }
        else if (StipoC == "32") {
            if (Spuntos >= 700) {
                CompraCanjeConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 700 puntos para realizar la compra");
            }
        } else {
            CompraCanjeConsumo_Upgrade();
        }
    }
}

function ValidarPedidoPreRegistro() {
    var StipoC = $("#STipoCompra").val();
    var StipoP = $("#SMedioPago").val();
    var Stienda = $("#ComboTienda").val();
    var Scomprob = $("#cboComprobante").val();
    var Stitular = $("#ddlTitularRUC").val();
    var Spuntos = puntosCompraEval;
    var SprecioPago = montoCompraEval;

    if (StipoC == "0" || Stienda == "0") {
        FaltanDatos();
    }
    else if (Scomprob == "0" || Scomprob == "" || Scomprob == null) {
        FaltanDatos();
    }
    else if (SprecioPago <= 0) {
        FaltanProductos();
    }
    else if (Scomprob == "2" && (Stitular == "0" || Stitular == "" || Stitular == null)) {
        FaltaTitular();
    }
    else if (Scomprob == "2" && Stitular == "2" && RUC_Validado == 0) {
        ErrorRUC();
    }
    else if (Scomprob == "2" && Stitular == "1") {
        if (StipoC == "01") {
            if (Spuntos >= 50) {
                validarRUC_Perfil(Ruc_Perfil, "CCUP");
            } else {
                FaltaMontoUpgrade("Necesita 50 puntos para realizar la compra");
            }
        }
        else if (StipoC == "41") {
            if (Spuntos >= 50) {
                validarRUC_Perfil(Ruc_Perfil, "CCUP");
            } else {
                FaltaMontoUpgrade("Necesita 50 puntos para realizar la compra");
            }
        }
        else if (StipoC == "02") {
            if (Spuntos >= 100) {
                validarRUC_Perfil(Ruc_Perfil, "CCUP");
            } else {
                FaltaMontoUpgrade("Necesita 100 puntos para realizar la compra");
            }
        }
        else if (StipoC == "03") {
            if (Spuntos >= 250) {
                validarRUC_Perfil(Ruc_Perfil, "CCUP");
            } else {
                FaltaMontoUpgrade("Necesita 250 puntos para realizar la compra");
            }
        }
        else if (StipoC == "04") {
            if (Spuntos >= 500) {
                validarRUC_Perfil(Ruc_Perfil, "CCUP");
            } else {
                FaltaMontoUpgrade("Necesita 500 puntos para realizar la compra");
            }
        }
        else if (StipoC == "30") {
            if (Spuntos >= 100) {
                validarRUC_Perfil(Ruc_Perfil, "CCUP");
            } else {
                FaltaMontoUpgrade("Necesita 100 puntos para realizar la compra");
            }
        }
        else if (StipoC == "05") {
            if (SprecioPago >= 100) {
                validarRUC_Perfil(Ruc_Perfil, "CCUP");
            } else {
                FaltaMontoUpgrade("Necesita un monto de S/. 100 para realizar la compra");
            }
        }
        else if (StipoC == "06") {
            if (SprecioPago >= 100) {
                validarRUC_Perfil(Ruc_Perfil, "CCUP");
            } else {
                FaltaMontoUpgrade("Necesita un monto de S/. 100 para realizar la compra");
            }
        }
        else if (StipoC == "23") {
            if (Spuntos >= 800) {
                validarRUC_Perfil(Ruc_Perfil, "CCUP");
            } else {
                FaltaMontoUpgrade("Necesita 1000 puntos para realizar la compra");
            }
        }
        else if (StipoC == "29") {
            if (SprecioPago >= 200) {
                validarRUC_Perfil(Ruc_Perfil, "CCUP");
            } else {
                FaltaMontoUpgrade("Necesita un monto de S/. 200 para realizar la compra");
            }
        }
        else {
            validarRUC_Perfil(Ruc_Perfil, "CCUP");
        }
    }
    else {
        if (StipoC == "01") {
            if (Spuntos >= 50) {
                CompraCanjeConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 50 puntos para realizar la compra");
            }
        }
        else if (StipoC == "02") {
            if (Spuntos >= 100) {
                CompraCanjeConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 100 puntos para realizar la compra");
            }
        }
        else if (StipoC == "41") {
            if (Spuntos >= 50) {
                CompraCanjeConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 50 puntos para realizar la compra");
            }
        }
        else if (StipoC == "03") {
            if (Spuntos >= 250) {
                CompraCanjeConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 250 puntos para realizar la compra");
            }
        }
        else if (StipoC == "04") {
            if (Spuntos >= 500) {
                CompraCanjeConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 500 puntos para realizar la compra");
            }
        }
        else if (StipoC == "30") {
            if (Spuntos >= 100) {
                CompraCanjeConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 100 puntos para realizar la compra");
            }
        }
        else if (StipoC == "05") {
            if (SprecioPago >= 100) {
                CompraCanjeConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita un monto de S/. 100 para realizar la compra");
            }
        }
        else if (StipoC == "06") {
            if (SprecioPago >= 100) {
                CompraCanjeConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita un monto de S/. 100 para realizar la compra");
            }
        }
        else if (StipoC == "23") {
            if (Spuntos >= 800) {
                CompraCanjeConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 1000 puntos para realizar la compra");
            }
        }
        else if (StipoC == "29") {
            if (SprecioPago >= 200) {
                validarRUC_Perfil(Ruc_Perfil, "CCUP");
            } else {
                FaltaMontoUpgrade("Necesita un monto de S/. 200 para realizar la compra");
            }
        }
        else {
            CompraCanjeConsumo_Upgrade();
        }
    }
}

//function ValidarPedidoPE() {
//    var StipoC = $("#STipoCompra").val();
//    var StipoP = $("#SMedioPago").val();
//    var Stienda = $("#ComboTienda").val();
//    var Scomprob = $("#cboComprobante").val();
//    var Stitular = $("#ddlTitularRUC").val();
//    var Spuntos = puntosCompraEval;
//    var SprecioPago = montoCompraEval;

//    if (StipoC == "0" || StipoP == "0" || Stienda == "0") {
//        FaltanDatos();
//    }
//    else if (Scomprob == "0" || Scomprob == "" || Scomprob == null) {
//        FaltanDatos();
//    }
//    else if (SprecioPago <= 0) {
//        FaltanProductos();
//    }
//    else if (Scomprob == "2" && (Stitular == "0" || Stitular == "" || Stitular == null)) {
//        FaltaTitular();
//    }
//    else if (Scomprob == "2" && Stitular == "2" && RUC_Validado == 0) {
//        ErrorRUC();
//    }
//    else if (Scomprob == "2" && Stitular == "1") {
//        if (StipoC == "08") {
//            if (Spuntos >= 50 & SprecioPago >= 187.50) {
//                validarRUC_Perfil(Ruc_Perfil, "PECUP");
//            } else {
//                FaltaMontoUpgrade("Necesita 50 puntos y un monto de S/. 187.50 para realizar la compra");
//            }
//        }
//        else if (StipoC == "09") {
//            if (Spuntos >= 200 & SprecioPago >= 700) {
//                validarRUC_Perfil(Ruc_Perfil, "PECUP");
//            } else {
//                FaltaMontoUpgrade("Necesita 200 puntos y un monto de S/. 700 para realizar la compra");
//            }
//        }
//        else if (StipoC == "10") {
//            if (Spuntos >= 450 & SprecioPago >= 1350) {
//                validarRUC_Perfil(Ruc_Perfil, "PECUP");
//            } else {
//                FaltaMontoUpgrade("Necesita 450 puntos y un monto de S/. 1350 para realizar la compra");
//            }
//        }
//        else if (StipoC == "11") {
//            if (Spuntos >= 150 & SprecioPago >= 525) {
//                validarRUC_Perfil(Ruc_Perfil, "PECUP");
//            } else {
//                FaltaMontoUpgrade("Necesita 150 puntos y un monto de S/. 525 para realizar la compra");
//            }
//        }
//        else if (StipoC == "12") {
//            if (Spuntos >= 400 & SprecioPago >= 1200) {
//                validarRUC_Perfil(Ruc_Perfil, "PECUP");
//            } else {
//                FaltaMontoUpgrade("Necesita 400 puntos y un monto de S/. 1200 para realizar la compra");
//            }
//        }
//        else if (StipoC == "13") {
//            if (Spuntos >= 250 & SprecioPago >= 750) {
//                validarRUC_Perfil(Ruc_Perfil, "PECUP");
//            } else {
//                FaltaMontoUpgrade("Necesita 250 puntos y un monto de S/. 750 para realizar la compra");
//            }
//        }
//        else if (StipoC == "24") {
//            if (Spuntos >= 950 & SprecioPago >= 2850) {
//                validarRUC_Perfil(Ruc_Perfil, "PECUP");
//            } else {
//                FaltaMontoUpgrade("Necesita 950 puntos y un monto de S/. 2850 para realizar la compra");
//            }
//        }
//        else if (StipoC == "25") {
//            if (Spuntos >= 900 & SprecioPago >= 2700) {
//                validarRUC_Perfil(Ruc_Perfil, "PECUP");
//            } else {
//                FaltaMontoUpgrade("Necesita 900 puntos y un monto de S/. 2700 para realizar la compra");
//            }
//        }
//        else if (StipoC == "26") {
//            if (Spuntos >= 750 & SprecioPago >= 2250) {
//                validarRUC_Perfil(Ruc_Perfil, "PECUP");
//            } else {
//                FaltaMontoUpgrade("Necesita 750 puntos y un monto de S/. 2250 para realizar la compra");
//            }
//        }
//        else if (StipoC == "27") {
//            if (Spuntos >= 500 & SprecioPago >= 1500) {
//                validarRUC_Perfil(Ruc_Perfil, "PECUP");
//            } else {
//                FaltaMontoUpgrade("Necesita 500 puntos y un monto de S/. 1500 para realizar la compra");
//            }
//        } else {
//            validarRUC_Perfil(Ruc_Perfil, "PECUP");
//        }
//    }
//    else {
//        if (StipoC == "08") {
//            if (Spuntos >= 50 & SprecioPago >= 187.50) {
//                CompraPEConsumo_Upgrade();
//            } else {
//                FaltaMontoUpgrade("Necesita 50 puntos y un monto de S/. 187.50 para realizar la compra");
//            }
//        }
//        else if (StipoC == "09") {
//            if (Spuntos >= 200 & SprecioPago >= 700) {
//                CompraPEConsumo_Upgrade();
//            } else {
//                FaltaMontoUpgrade("Necesita 200 puntos y un monto de S/. 700 para realizar la compra");
//            }
//        }
//        else if (StipoC == "10") {
//            if (Spuntos >= 450 & SprecioPago >= 1350) {
//                CompraPEConsumo_Upgrade();
//            } else {
//                FaltaMontoUpgrade("Necesita 450 puntos y un monto de S/. 1350 para realizar la compra");
//            }
//        }
//        else if (StipoC == "11") {
//            if (Spuntos >= 150 & SprecioPago >= 525) {
//                CompraPEConsumo_Upgrade();
//            } else {
//                FaltaMontoUpgrade("Necesita 150 puntos y un monto de S/. 525 para realizar la compra");
//            }
//        }
//        else if (StipoC == "12") {
//            if (Spuntos >= 400 & SprecioPago >= 1200) {
//                CompraPEConsumo_Upgrade();
//            } else {
//                FaltaMontoUpgrade("Necesita 400 puntos y un monto de S/. 1200 para realizar la compra");
//            }
//        }
//        else if (StipoC == "13") {
//            if (Spuntos >= 250 & SprecioPago >= 750) {
//                CompraPEConsumo_Upgrade();
//            } else {
//                FaltaMontoUpgrade("Necesita 250 puntos y un monto de S/. 750 para realizar la compra");
//            }
//        }
//        else if (StipoC == "24") {
//            if (Spuntos >= 950 & SprecioPago >= 2850) {
//                CompraPEConsumo_Upgrade();
//            } else {
//                FaltaMontoUpgrade("Necesita 950 puntos y un monto de S/. 2850 para realizar la compra");
//            }
//        }
//        else if (StipoC == "25") {
//            if (Spuntos >= 900 & SprecioPago >= 2700) {
//                CompraPEConsumo_Upgrade();
//            } else {
//                FaltaMontoUpgrade("Necesita 900 puntos y un monto de S/. 2700 para realizar la compra");
//            }
//        }
//        else if (StipoC == "26") {
//            if (Spuntos >= 750 & SprecioPago >= 2250) {
//                CompraPEConsumo_Upgrade();
//            } else {
//                FaltaMontoUpgrade("Necesita 750 puntos y un monto de S/. 2250 para realizar la compra");
//            }
//        }
//        else if (StipoC == "27") {
//            if (Spuntos >= 500 & SprecioPago >= 1500) {
//                CompraPEConsumo_Upgrade();
//            } else {
//                FaltaMontoUpgrade("Necesita 500 puntos y un monto de S/. 1500 para realizar la compra");
//            }
//        }
//        else {
//            CompraPEConsumo_Upgrade();
//        }
//    }
//}

function ValidarPedidoPE() {
    var StipoC = $("#STipoCompra").val();
    var StipoP = $("#SMedioPago").val();
    var Stienda = $("#ComboTienda").val();
    var Scomprob = $("#cboComprobante").val();
    var Stitular = $("#ddlTitularRUC").val();
    var Spuntos = puntosCompraEval;
    var SprecioPago = montoCompraEval;

    if (StipoC == "0" || StipoP == "0" || Stienda == "0") {
        FaltanDatos();
    }
    else if (Scomprob == "0" || Scomprob == "" || Scomprob == null) {
        FaltanDatos();
    }
    else if (SprecioPago <= 0) {
        FaltanProductos();
    }
    else if (Scomprob == "2" && (Stitular == "0" || Stitular == "" || Stitular == null)) {
        FaltaTitular();
    }
    else if (Scomprob == "2" && Stitular == "2" && RUC_Validado == 0) {
        ErrorRUC();
    }
    else if (Scomprob == "2" && Stitular == "1") {
        if (StipoC == "08") {
            if (Spuntos >= 50) {
                validarRUC_Perfil(Ruc_Perfil, "PECUP");
            } else {
                FaltaMontoUpgrade("Necesita 50 puntos para realizar la compra");
            }
        }
        else if (StipoC == "09") {
            if (Spuntos >= 200) {
                validarRUC_Perfil(Ruc_Perfil, "PECUP");
            } else {
                FaltaMontoUpgrade("Necesita 200 puntos para realizar la compra");
            }
        }
        else if (StipoC == "33") {
            if (Spuntos >= 50) {
                validarRUC_Perfil(Ruc_Perfil, "CCUP");
            } else {
                FaltaMontoUpgrade("Necesita 50 puntos para realizar la compra");
            }
        }
        else if (StipoC == "10") {
            if (Spuntos >= 450) {
                validarRUC_Perfil(Ruc_Perfil, "PECUP");
            } else {
                FaltaMontoUpgrade("Necesita 450 puntos para realizar la compra");
            }
        }
        else if (StipoC == "11") {
            if (Spuntos >= 150) {
                validarRUC_Perfil(Ruc_Perfil, "PECUP");
            } else {
                FaltaMontoUpgrade("Necesita 150 puntos para realizar la compra");
            }
        }
        else if (StipoC == "12") {
            if (Spuntos >= 400) {
                validarRUC_Perfil(Ruc_Perfil, "PECUP");
            } else {
                FaltaMontoUpgrade("Necesita 400 puntos para realizar la compra");
            }
        }
        else if (StipoC == "13") {
            if (Spuntos >= 250) {
                validarRUC_Perfil(Ruc_Perfil, "PECUP");
            } else {
                FaltaMontoUpgrade("Necesita 250 puntos para realizar la compra");
            }
        }
        else if (StipoC == "24") {
            if (Spuntos >= 750) {
                validarRUC_Perfil(Ruc_Perfil, "PECUP");
            } else {
                FaltaMontoUpgrade("Necesita 750 puntos para realizar la compra");
            }
        }
        else if (StipoC == "25") {
            if (Spuntos >= 700) {
                validarRUC_Perfil(Ruc_Perfil, "PECUP");
            } else {
                FaltaMontoUpgrade("Necesita 700 puntos para realizar la compra");
            }
        }
        else if (StipoC == "26") {
            if (Spuntos >= 550) {
                validarRUC_Perfil(Ruc_Perfil, "PECUP");
            } else {
                FaltaMontoUpgrade("Necesita 550 puntos para realizar la compra");
            }
        }
        else if (StipoC == "27") {
            if (Spuntos >= 300) {
                validarRUC_Perfil(Ruc_Perfil, "PECUP");
            } else {
                FaltaMontoUpgrade("Necesita 300 puntos para realizar la compra");
            }
        }
        else if (StipoC == "31") {
            if (Spuntos >= 400) {
                validarRUC_Perfil(Ruc_Perfil, "PECUP");
            } else {
                FaltaMontoUpgrade("Necesita 400 puntos para realizar la compra");
            }
        }
        else if (StipoC == "32") {
            if (Spuntos >= 700) {
                validarRUC_Perfil(Ruc_Perfil, "PECUP");
            } else {
                FaltaMontoUpgrade("Necesita 700 puntos para realizar la compra");
            }
        } else {
            validarRUC_Perfil(Ruc_Perfil, "PECUP");
        }
    }
    else {
        if (StipoC == "08") {
            if (Spuntos >= 50) {
                CompraPEConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 50 puntos para realizar la compra");
            }
        }
        else if (StipoC == "09") {
            if (Spuntos >= 200) {
                CompraPEConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 200 puntos para realizar la compra");
            }
        }
        else if (StipoC == "33") {
            if (Spuntos >= 50) {
                validarRUC_Perfil(Ruc_Perfil, "CCUP");
            } else {
                FaltaMontoUpgrade("Necesita 50 puntos para realizar la compra");
            }
        }
        else if (StipoC == "10") {
            if (Spuntos >= 450) {
                CompraPEConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 450 puntos para realizar la compra");
            }
        }
        else if (StipoC == "11") {
            if (Spuntos >= 150) {
                CompraPEConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 150 puntos para realizar la compra");
            }
        }
        else if (StipoC == "12") {
            if (Spuntos >= 400) {
                CompraPEConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 400 puntos para realizar la compra");
            }
        }
        else if (StipoC == "13") {
            if (Spuntos >= 250) {
                CompraPEConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 250 puntos para realizar la compra");
            }
        }
        else if (StipoC == "24") {
            if (Spuntos >= 750) {
                CompraPEConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 750 puntos para realizar la compra");
            }
        }
        else if (StipoC == "25") {
            if (Spuntos >= 700) {
                CompraPEConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 700 puntos para realizar la compra");
            }
        }
        else if (StipoC == "26") {
            if (Spuntos >= 550) {
                CompraPEConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 550 puntos para realizar la compra");
            }
        }
        else if (StipoC == "27") {
            if (Spuntos >= 300) {
                CompraPEConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 300 puntos para realizar la compra");
            }
        }
        else if (StipoC == "31") {
            if (Spuntos >= 400) {
                CompraPEConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 400 puntos para realizar la compra");
            }
        }
        else if (StipoC == "32") {
            if (Spuntos >= 700) {
                CompraPEConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 700 puntos para realizar la compra");
            }
        }
        else {
            CompraPEConsumo_Upgrade();
        }
    }
}

//function ValidarPedidoPreRegistroPE() {
//    var StipoC = $("#STipoCompra").val();
//    var StipoP = $("#SMedioPago").val();
//    var Stienda = $("#ComboTienda").val();
//    var Scomprob = $("#cboComprobante").val();
//    var Stitular = $("#ddlTitularRUC").val();
//    var Spuntos = puntosCompraEval;
//    var SprecioPago = montoCompraEval;

//    if (StipoC == "0" || StipoP == "0" || Stienda == "0") {
//        FaltanDatos();
//    }
//    else if (Scomprob == "0" || Scomprob == "" || Scomprob == null) {
//        FaltanDatos();
//    }
//    else if (SprecioPago <= 0) {
//        FaltanProductos();
//    }
//    else if (Scomprob == "2" && (Stitular == "0" || Stitular == "" || Stitular == null)) {
//        FaltaTitular();
//    }
//    else if (Scomprob == "2" && Stitular == "2" && RUC_Validado == 0) {
//        ErrorRUC();
//    }
//    else if (Scomprob == "2" && Stitular == "1") {
//        if (StipoC == "01") {
//            if (Spuntos >= 50 & SprecioPago >= 200) {
//                validarRUC_Perfil(Ruc_Perfil, "PECUP");
//            } else {
//                FaltaMontoUpgrade("Necesita 50 puntos y un monto de S/. 200 para realizar la compra");
//            }
//        }
//        else if (StipoC == "02") {
//            if (Spuntos >= 100 & SprecioPago >= 375) {
//                validarRUC_Perfil(Ruc_Perfil, "PECUP");
//            } else {
//                FaltaMontoUpgrade("Necesita 100 puntos y un monto de S/. 375 para realizar la compra");
//            }
//        }
//        else if (StipoC == "03") {
//            if (Spuntos >= 250 & SprecioPago >= 875) {
//                validarRUC_Perfil(Ruc_Perfil, "PECUP");
//            } else {
//                FaltaMontoUpgrade("Necesita 250 puntos y un monto de S/. 875 para realizar la compra");
//            }
//        }
//        else if (StipoC == "04") {
//            if (Spuntos >= 500 & SprecioPago >= 1500) {
//                validarRUC_Perfil(Ruc_Perfil, "PECUP");
//            } else {
//                FaltaMontoUpgrade("Necesita 500 puntos y un monto de S/. 1500 para realizar la compra");
//            }
//        }
//        else if (StipoC == "05") {
//            if (SprecioPago >= 100) {
//                validarRUC_Perfil(Ruc_Perfil, "PECUP");
//            } else {
//                FaltaMontoUpgrade("Necesita un monto de S/. 100 para realizar la compra");
//            }
//        }
//        else if (StipoC == "06") {
//            if (SprecioPago >= 100) {
//                validarRUC_Perfil(Ruc_Perfil, "PECUP");
//            } else {
//                FaltaMontoUpgrade("Necesita un monto de S/. 100 para realizar la compra");
//            }
//        }
//        else if (StipoC == "23") {
//            if (Spuntos >= 1000 & SprecioPago >= 3000) {
//                validarRUC_Perfil(Ruc_Perfil, "PECUP");
//            } else {
//                FaltaMontoUpgrade("Necesita 1000 puntos y un monto de S/. 3000 para realizar la compra");
//            }
//        }
//        else {
//            validarRUC_Perfil(Ruc_Perfil, "PECUP");
//        }
//    }
//    else {
//        if (StipoC == "01") {
//            if (Spuntos >= 50 & SprecioPago >= 200) {
//                CompraPEConsumo_Upgrade();
//            } else {
//                FaltaMontoUpgrade("Necesita 50 puntos y un monto de S/. 200 para realizar la compra");
//            }
//        }
//        else if (StipoC == "02") {
//            if (Spuntos >= 100 & SprecioPago >= 375) {
//                CompraPEConsumo_Upgrade();
//            } else {
//                FaltaMontoUpgrade("Necesita 100 puntos y un monto de S/. 375 para realizar la compra");
//            }
//        }
//        else if (StipoC == "03") {
//            if (Spuntos >= 250 & SprecioPago >= 875) {
//                CompraPEConsumo_Upgrade();
//            } else {
//                FaltaMontoUpgrade("Necesita 250 puntos y un monto de S/. 875 para realizar la compra");
//            }
//        }
//        else if (StipoC == "04") {
//            if (Spuntos >= 500 & SprecioPago >= 1500) {
//                CompraPEConsumo_Upgrade();
//            } else {
//                FaltaMontoUpgrade("Necesita 500 puntos y un monto de S/. 1500 para realizar la compra");
//            }
//        }
//        else if (StipoC == "05") {
//            if (SprecioPago >= 100) {
//                CompraPEConsumo_Upgrade();
//            } else {
//                FaltaMontoUpgrade("Necesita un monto de S/. 100 para realizar la compra");
//            }
//        }
//        else if (StipoC == "06") {
//            if (SprecioPago >= 100) {
//                CompraPEConsumo_Upgrade();
//            } else {
//                FaltaMontoUpgrade("Necesita un monto de S/. 100 para realizar la compra");
//            }
//        }
//        else if (StipoC == "23") {
//            if (Spuntos >= 1000 & SprecioPago >= 3000) {
//                CompraPEConsumo_Upgrade();
//            } else {
//                FaltaMontoUpgrade("Necesita 1000 puntos y un monto de S/. 3000 para realizar la compra");
//            }
//        }
//        else {
//            CompraPEConsumo_Upgrade();
//        }
//    }
//}

function ValidarPedidoPreRegistroPE() {
    var StipoC = $("#STipoCompra").val();
    var StipoP = $("#SMedioPago").val();
    var Stienda = $("#ComboTienda").val();
    var Scomprob = $("#cboComprobante").val();
    var Stitular = $("#ddlTitularRUC").val();
    var Spuntos = puntosCompraEval;
    var SprecioPago = montoCompraEval;

    if (StipoC == "0" || StipoP == "0" || Stienda == "0") {
        FaltanDatos();
    }
    else if (Scomprob == "0" || Scomprob == "" || Scomprob == null) {
        FaltanDatos();
    }
    else if (SprecioPago <= 0) {
        FaltanProductos();
    }
    else if (Scomprob == "2" && (Stitular == "0" || Stitular == "" || Stitular == null)) {
        FaltaTitular();
    }
    else if (Scomprob == "2" && Stitular == "2" && RUC_Validado == 0) {
        ErrorRUC();
    }
    else if (Scomprob == "2" && Stitular == "1") {
        if (StipoC == "01") {
            if (Spuntos >= 50) {
                validarRUC_Perfil(Ruc_Perfil, "PECUP");
            } else {
                FaltaMontoUpgrade("Necesita 50 puntos para realizar la compra");
            }
        }
        else if (StipoC == "02") {
            if (Spuntos >= 100) {
                validarRUC_Perfil(Ruc_Perfil, "PECUP");
            } else {
                FaltaMontoUpgrade("Necesita 100 puntos para realizar la compra");
            }
        }
        else if (StipoC == "03") {
            if (Spuntos >= 250) {
                validarRUC_Perfil(Ruc_Perfil, "PECUP");
            } else {
                FaltaMontoUpgrade("Necesita 250 puntos para realizar la compra");
            }
        }
        else if (StipoC == "04") {
            if (Spuntos >= 500) {
                validarRUC_Perfil(Ruc_Perfil, "PECUP");
            } else {
                FaltaMontoUpgrade("Necesita 500 puntos para realizar la compra");
            }
        }
        else if (StipoC == "30") {
            if (Spuntos >= 100) {
                validarRUC_Perfil(Ruc_Perfil, "PECUP");
            } else {
                FaltaMontoUpgrade("Necesita 100 puntos para realizar la compra");
            }
        }
        else if (StipoC == "05") {
            if (SprecioPago >= 100) {
                validarRUC_Perfil(Ruc_Perfil, "PECUP");
            } else {
                FaltaMontoUpgrade("Necesita un monto de S/. 100 para realizar la compra");
            }
        }
        else if (StipoC == "06") {
            if (SprecioPago >= 100) {
                validarRUC_Perfil(Ruc_Perfil, "PECUP");
            } else {
                FaltaMontoUpgrade("Necesita un monto de S/. 100 para realizar la compra");
            }
        }
        else if (StipoC == "23") {
            if (Spuntos >= 800) {
                validarRUC_Perfil(Ruc_Perfil, "PECUP");
            } else {
                FaltaMontoUpgrade("Necesita 1000 puntos para realizar la compra");
            }
        }
        else if (StipoC == "29") {
            if (SprecioPago >= 200) {
                validarRUC_Perfil(Ruc_Perfil, "CCUP");
            } else {
                FaltaMontoUpgrade("Necesita un monto de S/. 200 para realizar la compra");
            }
        }
        else {
            validarRUC_Perfil(Ruc_Perfil, "PECUP");
        }
    }
    else {
        if (StipoC == "01") {
            if (Spuntos >= 50) {
                CompraPEConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 50 puntos para realizar la compra");
            }
        }
        else if (StipoC == "02") {
            if (Spuntos >= 100) {
                CompraPEConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 100 puntos para realizar la compra");
            }
        }
        else if (StipoC == "03") {
            if (Spuntos >= 250) {
                CompraPEConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 250 puntos para realizar la compra");
            }
        }
        else if (StipoC == "04") {
            if (Spuntos >= 500) {
                CompraPEConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 500 puntos para realizar la compra");
            }
        }
        else if (StipoC == "30") {
            if (Spuntos >= 100) {
                CompraPEConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 100 puntos para realizar la compra");
            }
        }
        else if (StipoC == "05") {
            if (SprecioPago >= 100) {
                CompraPEConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita un monto de S/. 100 para realizar la compra");
            }
        }
        else if (StipoC == "06") {
            if (SprecioPago >= 100) {
                CompraPEConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita un monto de S/. 100 para realizar la compra");
            }
        }
        else if (StipoC == "23") {
            if (Spuntos >= 800) {
                CompraPEConsumo_Upgrade();
            } else {
                FaltaMontoUpgrade("Necesita 1000 puntos para realizar la compra");
            }
        }
        else if (StipoC == "29") {
            if (SprecioPago >= 200) {
                validarRUC_Perfil(Ruc_Perfil, "CCUP");
            } else {
                FaltaMontoUpgrade("Necesita un monto de S/. 200 para realizar la compra");
            }
        }
        else {
            CompraPEConsumo_Upgrade();
        }
    }
}

function validarRUC_Perfil(numruc, tipoC) {

    if (numruc == "20602114121") {
        FaltaSeleccionar("El RUC de su perfil le pertenece a Santa Natura, porfavor proceda a modificarlo");
    } else {
        if (RUC_Valido_Perfil == 0) {
            var obj = JSON.stringify({
                ruc: numruc
            });
            $.ajax({
                type: "POST",
                url: "https://tienda.mundosantanatura.com/Autocompletado.asmx/ValidarRUC",
                //url: "http://localhost:51535/Autocompletado.asmx/ValidarRUC",
                data: obj,
                contentType: 'application/json; charset=utf-8',
                error: function (xhr, ajaxOptions, throwError) {
                    console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
                },
                success: function (data) {
                    var Datos = data.d;
                    var success = Datos.success;
                    if (Datos.data != null) {
                        var estado = Datos.data.status;
                        if (success == "true" && estado == "ACTIVO") {
                            if (Datos.data.address != null && Datos.data.address != "") {
                                NumRucValidado = numruc;
                                direccionRUC = Datos.data.province + " - " + Datos.data.district + " - " + Datos.data.address;
                                if (tipoC == "CCUP") {
                                    CompraCanjeConsumo_Upgrade();
                                }
                                else if (tipoC == "PECUP") {
                                    CompraPEConsumo_Upgrade();
                                }
                                else if (tipoC == "CCAF") {
                                    CompraCanjeAfiliacion();
                                } else {
                                    CompraPEAfiliacion();
                                }
                            } else {
                                NumRucValidado = numruc;
                                TipoValidacionRUC = "Perfil";
                                RellenarDireccionRUC();
                            }
                        } else {
                            ErrorRUC();
                        }

                    } else {
                        ErrorRUC();
                    }
                }
            });
        } else {
            if (tipoC == "CCUP") {
                CompraCanjeConsumo_Upgrade();
            }
            else if (tipoC == "PECUP") {
                CompraPEConsumo_Upgrade();
            }
            else if (tipoC == "CCAF") {
                CompraCanjeAfiliacion();
            } else {
                CompraPEAfiliacion();
            }
        }
    }


}

function CompraCanjeConsumo_Upgrade() {

    var Stienda = $("#ComboTienda").val();
    var tiendaTx = $("#ComboTienda option:selected").text();
    var Scomprob = $("#cboComprobante").val();
    var comprobTx = $("#cboComprobante option:selected").text();
    var Stitular = $("#ddlTitularRUC").val();
    var StipoC = $("#STipoCompra").val();
    var tipoCTx = $("#STipoCompra option:selected").text();
    var StipoP = $("#SMedioPago").val();
    var Sruc = NumRucValidado;

    var obj = JSON.stringify({
        cTienda: Stienda, txTienda: tiendaTx, cComprobante: Scomprob, txComprobante: comprobTx,
        cTitularRUC: Stitular, idTCompra: StipoC, txTCompra: tipoCTx, cTipoPago: StipoP, txRUCCOM: Sruc,
        txDirRUC: direccionRUC
    });
    $.ajax({
        type: "POST",
        url: "DetalleDeCompra.aspx/RealizarCompraConsumoCanje",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (dataS) {
            var Datos = dataS.d;

            if (Datos.Mensaje == "OK") {
                IrCompraTerminada();
                if (StipoP == "10") {
                    Swal.fire({
                        title: 'Perfecto!',
                        text: 'Compra Realizada',
                        type: "success"
                    }).then(function () {
                        window.open(Datos.URL, '_blank');
                        alert("hola");
                    });
                }
                localStorage.removeItem('dataSaved');
                localStorage.removeItem('buttonText');
                $('#lblDelivery').text('');
                $('#lblPrecioDelivery').text('');
                //limpiarCamposDeliveryTienda();
                //limpiarCamposDeliveryDetalleCompra();
            } else {
                Swal.fire({
                    title: 'Ooops...!',
                    text: Datos.Mensaje,
                    type: "error"
                });
            }

        }
    });
}

function ShowButtonDelivery() {
    $.ajax({
        type: "POST",
        url: "TiendaSN.aspx/ShowDelivery",
        data: "{}",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (dataS) {
            var data = dataS.d;
            if (data == true) {
                hasDelivery = true;
                $("#DatosDireccionDelivery").show();
            }
            else {
                hasDelivery = false;
                $("#DatosDireccionDelivery").hide();
            }
        }
    });
}

function limpiarCamposDeliveryTienda() {
    $('#lblPrecioDelivery').text('');
    $("#cboPais").val("");
    $("#cboDepartamento").val("");
    $("#cboProvincia").val("");
    $("#cboDistrito").val("");
    $("#txtDirec").val("");
    $("#txtRef").val("");
    $("#txtNombresCompletos").val("");
    $("#txtNroDocumento").val("");
    $("#txtNroCelular").val("");
}

function limpiarCamposDeliveryDetalleCompra() {
    $('#lblDelivery').text('');
    $("#lblPais").val("");
    $("#lblDepartamento").val("");
    $("#lblProvincia").val("");
    $("#lblDistrito").val("");
    $("#lblDireccion").val("");
    $("#lblReferencia").val("");
    $("#lblFullName").val("");
    $("#lblNroDocu").val("");
    $("#lblCelular").val("");
}

function CompraPEConsumo_Upgrade() {

    var Stienda = $("#ComboTienda").val();
    var tiendaTx = $("#ComboTienda option:selected").text();
    var Scomprob = $("#cboComprobante").val();
    var comprobTx = $("#cboComprobante option:selected").text();
    var Stitular = $("#ddlTitularRUC").val();
    var StipoC = $("#STipoCompra").val();
    var tipoCTx = $("#STipoCompra option:selected").text();
    var StipoP = $("#SMedioPago").val();
    var Sruc = NumRucValidado;

    var obj = JSON.stringify({
        cTienda: Stienda, txTienda: tiendaTx, cComprobante: Scomprob, txComprobante: comprobTx,
        cTitularRUC: Stitular, idTCompra: StipoC, txTCompra: tipoCTx, cTipoPago: StipoP, txRUCCOM: Sruc,
        txDirRUC: direccionRUC
    });
    $.ajax({
        type: "POST",
        url: "DetalleDeCompra.aspx/RealizarCompraConsumoPE",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (dataS) {
            var Datos = dataS.d;

            if (Datos.Mensaje == "OK") {
                IrCompraTerminada();
                Swal.fire({
                    title: 'Perfecto!',
                    text: 'Compra Realizada',
                    type: "success"
                }).then(function () {
                    window.open(Datos.URL, '_blank');
                });

            } else {
                Swal.fire({
                    title: 'Ooops...!',
                    text: Datos.Mensaje,
                    type: "error"
                });
            }

        }
    });
}

function CompraCanjeAfiliacion() {

    var Stienda = $("#ComboTienda").val();
    var tiendaTx = $("#ComboTienda option:selected").text();
    var Scomprob = $("#cboComprobante").val();
    var comprobTx = $("#cboComprobante option:selected").text();
    var Stitular = $("#ddlTitularRUC").val();
    var StipoC = $("#STipoCompra").val();
    var tipoCTx = $("#STipoCompra option:selected").text();
    var StipoP = $("#SMedioPago").val();
    var Sruc = NumRucValidado;

    var obj = JSON.stringify({
        cTienda: Stienda, txTienda: tiendaTx, cComprobante: Scomprob, txComprobante: comprobTx, txDirRUC: direccionRUC,
        cTitularRUC: Stitular, idTCompra: StipoC, txTCompra: tipoCTx, cTipoPago: StipoP, txCorreo: $("#TxtCorreo").val(),
        txDocumento: $("#txtNumDocumento").val(), txUsuario: $("#txtUl").val(), txFechaNac: $("#datepicker").val(),
        txCDRPreferido: $("#cboTipoEstablecimiento").val(), txCDRPremio: $("#cboPremio").val(), txClave: $("#TxtCl").val(),
        txNombre: $("#txtNombre").val(), txApellidoPat: $("#txtApPaterno").val(), txApellidoMat: $("#txtApMaterno").val(),
        txSexo: $("#ComboSexo option:selected").text(), txTipoDoc: $("#ComboTipoDocumento option:selected").text(),
        txTelefono: $("#TxtTelefono").val(), txCelular: $("#TxtCelular").val(), cPais: $("#cboPais").val(),
        cDepartamento: $("#cboDepartamento").val(), cProvincia: $("#cboProvincia").val(), cDistrito: $("#cboDistrito").val(),
        txDireccion: $("#txtDireccion").val(), txReferencia: $("#TxtReferencia").val(), txDetraccion: $("#TxtNumCuenDetracciones").val(),
        txRUC: $("#TxtRUC").val(), txBanco: $("#TxtBanco").val(), txNumCuenta: $("#TxtNumCuenDeposito").val(),
        txInterbancaria: $("#TxtNumCuenInterbancaria").val(), cTCliente: $("#cboTipoCliente").val(), txUpline: $("#CboUpLine").val(), txRUCCOM: Sruc
    });
    $.ajax({
        type: "POST",
        url: "DetalleDeCompra.aspx/RealizarCompraAfiliacionCanje",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (dataS) {
            var Datos = dataS.d;

            if (Datos.Mensaje == "OK") {
                IrCompraTerminada();
            } else {
                Swal.fire({
                    title: 'Ooops...!',
                    text: Datos.Mensaje,
                    type: "error"
                });
            }

        }
    });
}

function CompraPEAfiliacion() {

    var Stienda = $("#ComboTienda").val();
    var tiendaTx = $("#ComboTienda option:selected").text();
    var Scomprob = $("#cboComprobante").val();
    var comprobTx = $("#cboComprobante option:selected").text();
    var Stitular = $("#ddlTitularRUC").val();
    var StipoC = $("#STipoCompra").val();
    var tipoCTx = $("#STipoCompra option:selected").text();
    var StipoP = $("#SMedioPago").val();
    var Sruc = NumRucValidado;

    var obj = JSON.stringify({
        cTienda: Stienda, txTienda: tiendaTx, cComprobante: Scomprob, txComprobante: comprobTx, txDirRUC: direccionRUC,
        cTitularRUC: Stitular, idTCompra: StipoC, txTCompra: tipoCTx, cTipoPago: StipoP, txCorreo: $("#TxtCorreo").val(),
        txDocumento: $("#txtNumDocumento").val(), txUsuario: $("#txtUl").val(), txFechaNac: $("#datepicker").val(),
        txCDRPreferido: $("#cboTipoEstablecimiento").val(), txCDRPremio: $("#cboPremio").val(), txClave: $("#TxtCl").val(),
        txNombre: $("#txtNombre").val(), txApellidoPat: $("#txtApPaterno").val(), txApellidoMat: $("#txtApMaterno").val(),
        txSexo: $("#ComboSexo option:selected").text(), txTipoDoc: $("#ComboTipoDocumento option:selected").text(),
        txTelefono: $("#TxtTelefono").val(), txCelular: $("#TxtCelular").val(), cPais: $("#cboPais").val(),
        cDepartamento: $("#cboDepartamento").val(), cProvincia: $("#cboProvincia").val(), cDistrito: $("#cboDistrito").val(),
        txDireccion: $("#txtDireccion").val(), txReferencia: $("#TxtReferencia").val(), txDetraccion: $("#TxtNumCuenDetracciones").val(),
        txRUC: $("#TxtRUC").val(), txBanco: $("#TxtBanco").val(), txNumCuenta: $("#TxtNumCuenDeposito").val(),
        txInterbancaria: $("#TxtNumCuenInterbancaria").val(), cTCliente: $("#cboTipoCliente").val(), txUpline: $("#CboUpLine").val(), txRUCCOM: Sruc
    });
    $.ajax({
        type: "POST",
        url: "DetalleDeCompra.aspx/RealizarCompraAfiliacionPE",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (dataS) {
            var Datos = dataS.d;

            if (Datos.Mensaje == "OK") {
                IrCompraTerminada();
                Swal.fire({
                    title: 'Perfecto!',
                    text: 'Compra Realizada',
                    type: "success"
                }).then(function () {
                    window.open(Datos.URL, '_blank');
                });
            } else {
                Swal.fire({
                    title: 'Ooops...!',
                    text: Datos.Mensaje,
                    type: "error"
                });
            }

        }
    });
}

function ErrorRUC() {
    Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'El RUC ingresado es inválido o está Inactivo',
    })
}
function FaltaUpline() {
    Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Debe seleccionar el Upline',
    })
}
function FaltanDatos() {
    Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Debe seleccionar todos los datos de compra',
    })
}
function FaltaTitular() {
    Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Debe seleccionar el titular de la compra',
    })
}
function ErrorSunat(mensaje) {
    Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: mensaje,
    })
}
function FaltaMontoUpgrade(mensaje) {
    Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: mensaje,
    })
}
function FaltaSeleccionar(mensaje) {
    Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: mensaje,
    })
}
function FaltanProductos() {
    Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Debe agregar productos al carrito',
    })
}
function NoCambioPreRegistro() {
    Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Está completando un preregistro, no puede seleccionar esa opción',
    })
}
function NoCambioTipoCliente() {
    Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Está completando un preregistro, no puede seleccionar esa opción',
    })
}