ObtenerTipoCliente();
ShowButtonDelivery();
var input = document.getElementById('SMedioPago');
var inputTCompra = document.getElementById('STipoCompra');
var inputTienda = document.getElementById('ComboTienda');
var inputPregis = document.getElementById('cboPreRegistro');
var inputPregis2 = document.getElementById('cboPreRegistro2');
var tipoCliente = "", TCL = "", TCOM = "", idCliente = "";

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
        GuardarIDCombos('TCompra', this.value);
    }
}
inputTienda.onchange = function () {
    localStorage['ComboTienda'] = this.value;
    GuardarIDCombos('TiendaS', this.value);
}
inputPregis.onchange = function () {
    localStorage['cboPreRegistro'] = this.value;
    localStorage['cboPreRegistro2'] = this.value;
    GuardarIDCombos('Pregis', this.value);
}
inputPregis2.onchange = function () {
    localStorage['cboPreRegistro'] = this.value;
    localStorage['cboPreRegistro2'] = this.value;
    GuardarIDCombos('Pregis', this.value);
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
            tipoCliente = dataS.d.val1;
            idCliente = dataS.d.idCliente;
            TCL = dataS.d.tipoCliente;
            TCOM = $('#STipoCompra').val();
        }
    });
}

function GuardarIDCombos(combo, idcombo) {
    var obj = JSON.stringify({
        comboS: combo, idComboS: idcombo
    });
    $.ajax({
        type: "POST",
        url: "TiendaSN.aspx/GuardarIDCombos",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (dataS) {
            var Datos = dataS.d;
            if (combo == "TCompra") {
                $('#LbPrecioPagar').text("S/." + Datos.MontoPago);
            }
            if (combo == "Pregis" && (idcombo != "0" && idcombo != "" && idcombo != null)) {
                localStorage['STipoCompra'] = Datos.IdPaquete;
                $('#STipoCompra').val(Datos.IdPaquete);
            }
        }
    });
}

function AgregarCarrito(codigo) {
    $('#page_loader').show();
    //var cMPago = $("#SMedioPago").val();
    var cCom = $('#STipoCompra').val();
    var cTienda = $('#ComboTienda').val();

    if (cCom != '0' && cTienda != '0' /*&& cMPago != '0'*/) {
        var cantidad = $('#' + codigo + '').val();
        var obj = JSON.stringify({
            codProductoCarrito: codigo, cantidadProductos: cantidad
        });
        $.ajax({
            type: "POST",
            url: "TiendaSN.aspx/AgregarProducto",
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
                    $('#LbPrecioTotal').text("S/." + parseFloat(Datos.Total.replace(",", ".")));
                    $('#LbPrecioPagar').text("S/." + parseFloat(Datos.Monto));
                    $('#LbPuntosCompra').text(Datos.Puntos);
                    $('#LbPuntosRango').text(Datos.PuntosPromo);
                    $('#lblPrecioDelivery').text("S/." + parseFloat(Datos.PrecioDelivery));
                    $('#LbPrecioTotal2').text("S/." + parseFloat(Datos.Total));
                    $('#LbPrecioPagar2').text("S/." + parseFloat(Datos.Monto));
                    $('#lblPrecioDelivery2').text("S/." + parseFloat(Datos.PrecioDelivery));
                    $('#LbPuntosCompra2').text(Datos.Puntos);
                    $('#LbPuntosRango2').text(Datos.PuntosPromo);
                    $('#page_loader').hide();
                    Swal.fire({
                        title: 'Perfecto!',
                        text: 'Producto Agregado',
                        type: "success",
                        customClass: {
                            confirmButton: 'my-custom-button'  // Clase personalizada para el botón
                        }
                    });
                }
                else {
                    $('#page_loader').hide();
                    Swal.fire({
                        title: 'Ooops...!',
                        text: Datos.Mensaje,
                        icon: "error"
                    });
                }
            }
        });
    } else {
        Swal.fire({
            title: 'Ooops...!',
            text: 'Debe seleccionar todos los datos de la compra',
            icon: "error"
        });
    }

}

function irCarrito() {
    //var cMPago = $("#SMedioPago").val();
    var cCom = $('#STipoCompra').val();
    var cTienda = $('#ComboTienda').val();
    if (cCom != '0' && cTienda != '0' /*&& cMPago != '0'*/) {
        $.ajax({
            type: "POST",
            url: "TiendaSN.aspx/CantidadProdCarrito",
            data: "{}",
            contentType: 'application/json; charset=utf-8',
            error: function (xhr, ajaxOptions, throwError) {
                console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
            },
            success: function (dataS) {
                if (dataS.d == "") {
                    IsValidateDataDelivery();
                }
                else {
                    Swal.fire({
                        title: 'Ooops...!',
                        text: dataS.d,
                        icon: "error"
                    });
                }
            }
        });
    } else {
        Swal.fire({
            title: 'Ooops...!',
            text: 'Debe seleccionar todos los datos de la compra',
            icon: "error"
        });
    }

}

function VerTodosProductos() {
    location.href = "TiendaSN.aspx";
}

$(function () {
    $("[id$=txtNomProducto]").autocomplete({
        source: function (request, responce) {
            var obja = JSON.stringify({
                palabra: request.term,
                tipoCliente: TCL,
                tipoCompra: $('#STipoCompra').val(),
                tienda: $('#ComboTienda').val(),
                idCliente: idCliente
            });

            $.ajax({
                url: "Autocompletado.asmx/FiltrarNombreProductos",
                method: "post",
                CORS: true,
                contentType: "application/json;charset=utf-8",
                //data: "{ 'palabra': '" + request.term + "'}",
                data: obja,
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

function NoCambioPreRegistro() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Está completando un preregistro, no puede seleccionar esa opción',
    })
}

function NoCambioTipoCliente() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No puede realizar cambio en el tipo de cliente',
    })
}

/*DELIVERY*/
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
                $("#divModalDelivery").show();
                $("#divPrecioDelivery").show();
                $("#divPrecioDelivery2").show();
            }
            else {
                $("#divModalDelivery").hide();
                $("#divPrecioDelivery").hide();
                $("#divPrecioDelivery2").hide();
            }
        }
    });
}

function GetDataDeliverySession() {
    $.ajax({
        type: "POST",
        url: "TiendaSN.aspx/GetDataDeliverySession",
        dataType: "json",
        data: "{}",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (dataS) {
            console.log(dataS);
            var data = dataS.d;
            $("#cboPais").val(data.PaisId);
            CargarDepartamentos();
            $("#cboDepartamento").val(data.DepartamentoId);
            CargarProvincia();
            $("#cboProvincia").val(data.ProvinciaId);
            CargarDistrito();
            $("#cboDistrito").val(data.DistritoId);
            $("#txtDirec").val(data.Direccion);
            $("#txtRef").val(data.Refererencia);
            $("#txtNombresCompletos").val(data.Nombres_ApellidosDestinatario);
            $("#txtNroDocumento").val(data.DocumentoDestinatario);
            $("#txtNroCelular").val(data.CelularDestinatario);
        }
    });
}

//$("#btnSaveDelivery").click(function (e) {
//    var obj = JSON.stringify({data :{
//        PaisId: $("#cboPais").val(), DepartamentoId: $("#cboDepartamento").val(),
//        ProvinciaId: $("#cboProvincia").val(), DistritoId: $("#cboDistrito").val(), Direccion: $("#txtDirec").val(),
//        Refererencia: $("#txtRef").val(), Nombres_ApellidosDestinatario: $("#txtNombresCompletos").val(),
//        DocumentoDestinatario: $("#txtNroDocumento").val(), CelularDestinatario: $("#txtNroCelular").val(),
//        Ticket: "", DataDeliveryTicketId: 0
//    }});
//    $.ajax({
//        type: "POST",
//        url: "TiendaSN.aspx/SaveDataDeliverySession",
//        data: obj,
//        dataType: "json",
//        contentType: 'application/json; charset=utf-8',
//        error: function (xhr, ajaxOptions, throwError) {
//            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
//        },
//        success: function (dataS) {
//            console.log(dataS);
//            Swal.fire({
//                title: '¡Registro Exitoso!',
//                text: "Los datos del destinatario han sido guardados correctamente.",
//                icon: "success"
//            }).then((result) => {
//                if (result.isConfirmed || result.isDismissed) {
//                    $("#registrarDatosDelivery").hide();
//                }
//            });
//        }
//    });
//});


/*Validaciones formulario Delivery*/
document.getElementById('cboPais').addEventListener('blur', validatePais);
document.getElementById('cboPais').addEventListener('change', validatePais);
document.getElementById('cboDepartamento').addEventListener('blur', validateDepartamento);
document.getElementById('cboDepartamento').addEventListener('change', validateDepartamento);
document.getElementById('cboProvincia').addEventListener('blur', validateProvincia);
document.getElementById('cboProvincia').addEventListener('change', validateProvincia);
document.getElementById('cboDistrito').addEventListener('blur', validateDistrito);
document.getElementById('cboDistrito').addEventListener('change', validateDistrito);

document.getElementById('txtDirec').addEventListener('blur', validateDireccion);
document.getElementById('txtDirec').addEventListener('input', validateDireccion);

document.getElementById('txtRef').addEventListener('blur', validateReferencia);
document.getElementById('txtRef').addEventListener('input', validateReferencia);

document.getElementById('txtNombresCompletos').addEventListener('blur', validateNombresCompletos);
document.getElementById('txtNombresCompletos').addEventListener('input', validateNombresCompletos);

document.getElementById('txtNroDocumento').addEventListener('blur', validateNroDocumento);
document.getElementById('txtNroDocumento').addEventListener('input', validateNroDocumento);

document.getElementById('txtNroCelular').addEventListener('blur', validateNroCelular);
document.getElementById('txtNroCelular').addEventListener('input', validateNroCelular);


function validatePais() {
    const paisSelect = document.getElementById('cboPais');
    if (paisSelect.value === "" || paisSelect.value === "0") {
        paisSelect.classList.add('error-border');
    } else {
        paisSelect.classList.remove('error-border');
    }
}

function validateDepartamento() {
    const departamentoSelect = document.getElementById('cboDepartamento');
    if (departamentoSelect.value === "" || departamentoSelect.value === "0") {
        departamentoSelect.classList.add('error-border');
    } else {
        departamentoSelect.classList.remove('error-border');
    }
}

function validateProvincia() {
    const provinciaSelect = document.getElementById('cboProvincia');
    if (provinciaSelect.value === "" || provinciaSelect.value === "0") {
        provinciaSelect.classList.add('error-border');
    } else {
        provinciaSelect.classList.remove('error-border');
    }
}

function validateDistrito() {
    const distritoSelect = document.getElementById('cboDistrito');
    if (distritoSelect.value === "" || distritoSelect.value === "0") {
        distritoSelect.classList.add('error-border');
    } else {
        distritoSelect.classList.remove('error-border');
    }
}

function validateDireccion() {
    const direccionInput = document.getElementById('txtDirec');
    const direccion = direccionInput.value.trim();
    const errorElement = document.getElementById('errorDirec');

    if (direccion.length < 6) {
        errorElement.textContent = 'La dirección debe tener al menos 6 caracteres.';
        direccionInput.classList.add('error-border');
    } else {
        errorElement.textContent = '';
        direccionInput.classList.remove('error-border');
    }
}

function validateReferencia() {
    const referenciaInput = document.getElementById('txtRef');
    const referencia = referenciaInput.value.trim();
    const errorElement = document.getElementById('errorRef');
    if (referencia.length < 6) {
        errorElement.textContent = 'La referencia debe tener al menos 6 caracteres.';
        referenciaInput.classList.add('error-border');
    } else {
        errorElement.textContent = '';
        referenciaInput.classList.remove('error-border');
    }
}

function validateNombresCompletos() {
    const nombresCompletosInput = document.getElementById('txtNombresCompletos');
    const nombresCompletos = nombresCompletosInput.value.trim();
    const errorElement = document.getElementById('errorNombresCompletos');
    const words = nombresCompletos.split(' ');
    if (words.length < 2 || words.some(word => !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/.test(word))) {
        errorElement.textContent = 'Debe ingresar por lo menos un nombre y un apellido.';
        nombresCompletosInput.classList.add('error-border');
    } else {
        errorElement.textContent = '';
        nombresCompletosInput.classList.remove('error-border');
    }
}

function validateNroDocumento() {
    const nroDocumentoInput = document.getElementById('txtNroDocumento');
    const nroDocumento = nroDocumentoInput.value.trim();
    const errorElement = document.getElementById('errorNroDocumento');
    if (!/^\d{8,}$/.test(nroDocumento)) {
        errorElement.textContent = 'El número de documento debe tener al menos 8 dígitos.';
        nroDocumentoInput.classList.add('error-border');
    } else {
        errorElement.textContent = '';
        nroDocumentoInput.classList.remove('error-border');
    }
}

function validateNroCelular() {
    const nroCelularInput = document.getElementById('txtNroCelular');
    const nroCelular = nroCelularInput.value.trim();
    const errorElement = document.getElementById('errorNroCelular');
    if (!/^\d{9,}$/.test(nroCelular)) {
        errorElement.textContent = 'El número de celular debe tener al menos 9 dígitos.';
        nroCelularInput.classList.add('error-border');
    } else {
        errorElement.textContent = '';
        nroCelularInput.classList.remove('error-border');
    }
}

$("#btnSaveDelivery").click(function (e) {
    e.preventDefault();

    let paisId = $("#cboPais").val();
    let departamentoId = $("#cboDepartamento").val();
    let provinciaId = $("#cboProvincia").val();
    let distritoId = $("#cboDistrito").val();
    let direccion = $("#txtDirec").val();
    let referencia = $("#txtRef").val();
    let nombresApellidosDestinatario = $("#txtNombresCompletos").val();
    let documentoDestinatario = $("#txtNroDocumento").val();
    let celularDestinatario = $("#txtNroCelular").val();

    validatePais();
    validateDepartamento();
    validateProvincia();
    validateDistrito();
    validateDireccion();
    validateReferencia();
    validateNombresCompletos();
    validateNroDocumento();
    validateNroCelular();

    if (!paisId || !departamentoId || !provinciaId || !distritoId || !direccion || !referencia || !nombresApellidosDestinatario || !documentoDestinatario || !celularDestinatario) {
        Swal.fire({
            title: '¡Error!',
            text: "Todos los campos son obligatorios.",
            icon: 'error'
        });
        return;
    }

    let hasError = $('.error-border').length > 0;

    if (hasError) {
        Swal.fire({
            title: '¡Error!',
            text: "Hay errores en el formulario. Por favor, revisa los campos en rojo.",
            icon: 'error'
        });
    } else {
        var obj = JSON.stringify({
            data: {
                PaisId: paisId, DepartamentoId: departamentoId, ProvinciaId: provinciaId, DistritoId: distritoId,
                Direccion: direccion, Refererencia: referencia, Nombres_ApellidosDestinatario: nombresApellidosDestinatario,
                DocumentoDestinatario: documentoDestinatario, CelularDestinatario: celularDestinatario,
                Ticket: "", DataDeliveryTicketId: 0
            }
        });

        $.ajax({
            type: "POST",
            url: "TiendaSN.aspx/SaveDataDeliverySession",
            data: obj,
            dataType: "json",
            contentType: 'application/json; charset=utf-8',
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
            },
            success: function (dataS) {
                $('#lblPrecioDelivery').text("S/." + parseFloat(dataS.d));
                $('#lblPrecioDelivery2').text("S/." + parseFloat(dataS.d));
                Swal.fire({
                    title: '¡Registro Exitoso!',
                    text: "Los datos del destinatario han sido guardados correctamente.",
                    icon: "success"
                }).then((result) => {
                    if (result.isConfirmed || result.isDismissed) {
                        $("#registrarDatosDelivery").hide();
                        localStorage.setItem('dataSaved', 'true');
                        $("#btnIngresarDatos").text("Mostrar Datos");
                        localStorage.setItem('buttonText', 'Mostrar Datos');
                    }
                });
            }
        });
    }
});

$(document).ready(function () {
    // Verificar si hay un valor guardado en localStorage
    if (localStorage.getItem('buttonText')) {
        $("#btnIngresarDatos").text(localStorage.getItem('buttonText'));
    } else {
        $("#btnIngresarDatos").text("Ingresar Datos");
    }
});

$("#btnIngresarDatos").click(function (e) {
    if (localStorage.getItem('dataSaved') === 'true') {
        GetDataDeliverySession();
    }
});

function IsValidateDataDelivery() {
    $.ajax({
        type: "POST",
        url: "TiendaSN.aspx/IsValidateDataDelivery",
        data: "{}",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (dataS) {
            if (dataS.d) {
                location.href = "DetalleDeCompra.aspx";
            }
            else {
                Swal.fire({
                    title: 'Ooops...!',
                    text: "Los datos del delivery están incompletos.",
                    icon: "error"
                });
            }
        }
    });
}