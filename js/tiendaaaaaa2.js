
//Autocompledado al buscar un producto
$(function () {
    $("[id$=txtNomProducto]").autocomplete({
        //$("#txtAutoComplete").autocomplete({
        source: function (request, responce) {
            $.ajax({
                url: "Autocompletado.asmx/FiltrarNombreProductos",
                method: "post",
                CORS: true,
                contentType: "application/json;charset=utf-8",
                //data: "{'palabra':'" + document.getElementById('filtre').value + "'}",
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

//Agregar y quitar required para el formulario cliente
function fijarCampoRequeridoRegistrarCliete() {
    $("[id$=TxtNombre]").prop("required", true);
    $("[id$=TxtApPaterno]").prop("required", true);
    $("[id$=TxtApMaterno]").prop("required", true);
    $("[id$=TxtTipoDocumento]").prop("required", true);
    $("[id$=TxtNumDocumento]").prop("required", true);
    $("[id$=TxtTelefono]").prop("required", true);
    $("[id$=TxtDireccion]").prop("required", true);
    $("[id$=TxtUsuario]").prop("required", true);
    $("[id$=TxtClave]").prop("required", true);
    //$("[id$=TxtUpLine]").prop("required", true);
    //$("[id$=TxtPatrocinador]").prop("required", true);
    $("[id$=TxtApodo]").prop("required", true);
    $("[id$=TxtCorreo]").prop("required", true);
    $("[id$=TxtCelular]").prop("required", true);
    $("[id$=TxtReferencia]").prop("required", true);
    $("[id$=TxtRUC]").prop("required", true);
    $("[id$=TxtBanco]").prop("required", true);
    $("[id$=TxtNumCuenDeposito]").prop("required", true);
    $("[id$=TxtNumCuenDetracciones]").prop("required", true);
    $("[id$=TxtNumCuenInterbancaria]").prop("required", true);
}

function quitarCampoRequeridoRegistrarCliete() {
    $("[id$=TxtNombre]").prop("required", false);
    $("[id$=TxtApPaterno]").prop("required", false);
    $("[id$=TxtApMaterno]").prop("required", false);
    $("[id$=TxtTipoDocumento]").prop("required", false);
    $("[id$=TxtNumDocumento]").prop("required", false);
    $("[id$=TxtTelefono]").prop("required", false);
    $("[id$=TxtDireccion]").prop("required", false);
    $("[id$=TxtUsuario]").prop("required", false);
    $("[id$=TxtClave]").prop("required", false);
    //$("[id$=TxtUpLine]").prop("required", false);
    //$("[id$=TxtPatrocinador]").prop("required", false);
    $("[id$=TxtApodo]").prop("required", false);
    $("[id$=TxtCorreo]").prop("required", false);
    $("[id$=TxtCelular]").prop("required", false);
    $("[id$=TxtReferencia]").prop("required", false);
    $("[id$=TxtRUC]").prop("required", false);
    $("[id$=TxtBanco]").prop("required", false);
    $("[id$=TxtNumCuenDeposito]").prop("required", false);
    $("[id$=TxtNumCuenDetracciones]").prop("required", false);
    $("[id$=TxtNumCuenInterbancaria]").prop("required", false);
}

function MostrarRegistroCliente(value) {
    var divRegistroCliente = document.getElementById('MostrarRegistroCliente');

    if (value == 1) {
        divRegistroCliente.style.display = "block";
        fijarCampoRequeridoRegistrarCliete();
    }
    else {
        divRegistroCliente.style.display = "none";
        quitarCampoRequeridoRegistrarCliete();
    }
}

function MostrarComboTiendaAndDatosDelivery(value) {
    //var divComboTienda = document.getElementById('MostrarComboTiena');
    var divComboTienda = $("[id$=MostrarComboTiena]")[0];
    var divDatosDelivery = document.getElementById('MostrarDatosParaDelivery');
    
    if (value == "1") {
        divComboTienda.style.display = "block";
        divDatosDelivery.style.display = "none"
    }
    else {
        divComboTienda.style.display = "block";
        divDatosDelivery.style.display = "none"
    }
}

function VerTodosProductos() {
    location.href = "TiendaSN.aspx";
}

function AgregarCarrito(codigo, t) {
    var cantidadProductos = $($($(t).parent().parent().children()[0]).children()[0]).val();
    var sTipoCompra = $("[id$=STipoCompra]").val();

    var sTipoEntrega = "1";
    var comboTienda = $("[id$=ComboTienda]").val();
    var tipoPago = $("[id$=SMedioPago]").val();
    var apodo = $("[id$=ComboTienda] option:selected").text();
    var apodsss = $("#ComboTienda").val();
    var gg = $("[id*='ComboTienda'] :selected");

    if (comboTienda.trim() == 0) {
        AlertTienda();
    } else {
        location.href = "TiendaSN.aspx?CodeProductoCarrito=" + codigo + "&cantProductos=" + cantidadProductos + "&sTipoCompra=" + sTipoCompra + "&apodo=" + apodo + "&establecimiento=" + comboTienda + "&tipoPago=" + tipoPago;
    }
}

function irDetalleProducto(codigo) {
    var posicion_x;
    var posicion_y;
    posicion_x = (screen.width / 2) - (600 / 2);
    posicion_y = (screen.height / 2) - (400 / 2);
    window.open("DetalleProducto.aspx?CodigoProducto=" + codigo, 'popup', "width=" + 600 + ",height=" + 400 + ",menubar=0,toolbar=0,directories=0,scrollbars=no,resizable=no,left=" + posicion_x + ",top=" + posicion_y + "");
}

$('#ComboTienda').on("change", function () {
    var combo = ($("#ComboTienda").val());
});

function VerDetalle(codigo, t) {
    //e.preventDefault();
    //const baseUrl = 'https://tienda.mundosantanatura.com/LineaMultinivelControlAbono.aspx?';
    const baseUrl = 'http://localhost:51535/DetalleProducto.aspx?';
    const query = 'idproducto=' + codigo;
    const encodedQuery = encodeURIComponent(query);
    const url = baseUrl + encodedQuery;
    location.href = url;
}

function irCarrito() {
    var esVisibleTipoCompraAndPuntos = $("#MostrarSoloLogueado").is(":visible");
    var esVisibleTipoCompraAndPuntos = $("#MostrarSoloLogueado2").is(":visible");

    var sTipoCompra = $("[id$=STipoCompra]").val();
    var sTipoEntrega = "1";
    var sMedioPago = $("[id$=SMedioPago]").val();
    var comboDepart = $("[id$=ComboDepart]").val();
    var comboProvincia = $("[id$=ComboProvincia]").val();
    var comboDistrito = $("[id$=ComboDistrito]").val();
    var comboTienda = $("[id$=ComboTienda]").val();

    $('#ComboTienda').on("change", function () {
        var combo = ($("#ComboTienda").val());
    });
    //Guardar datos del registro

    //var Nombre = $("[id$=Nombre]");
    //var ApPaterno = $("[id$=ApPaterno]");
    //var ApMaterno = $("[id$=ApMaterno]");
    //var TipoDocumento = $("[id$=TipoDocumento]");
    //var NumDocumento = $("[id$=NumDocumento]");
    //var Telefono = $("[id$=Telefono]");
    //var Direccion = $("[id$=Direccion]");
    //var Usuario = $("[id$=Usuario]");
    //var FechaNaci = $("[id$=FechaNaci]");
    //var Clave = $("[id$=Clave]");
    //var UpLine = $("[id$=UpLine]");
    //var Patrocinador = $("[id$=Patrocinador]");
    //var Apodo = $("[id$=Apodo]");
    //var Correo = $("[id$=Correo]");
    //var Celular = $("[id$=Celular]");
    //var Referencia = $("[id$=Referencia]");
    //var RUC = $("[id$=RUC]");
    //var Banco = $("[id$=Banco]");
    //var NumCuenDeposio = $("[id$=NumCuenDeposio]");
    //var NumCuenDestrac = $("[id$=NumCuenDestrac]");
    //var NumCuenInterbancaria = $("[id$=NumCuenInterbancaria]");


    //Nombre.value = $("[id$=TxtNombre]").val();
    //ApPaterno.value = $("[id$=TxtApPaterno]").val();
    //ApMaterno.value = $("[id$=TxtApMaterno]").val();
    //TipoDocumento.value = $("[id$=TxtTipoDocumento]").val();
    //NumDocumento.value = $("[id$=TxtNumDocumento]").val();
    //Telefono.value = $("[id$=TxtTelefono]").val();
    //Direccion.value = $("[id$=TxtDireccion]").val();
    //Usuario.value = $("[id$=TxtUsuario]").val();
    //FechaNaci.value = $("[id$=datepicker]").val();
    //Clave.value = $("[id$=TxtClave]").val();
    //UpLine.value = $("[id$=TxtUpLine]").val();
    //Patrocinador.value = $("[id$=TxtPatrocinador]").val();
    //Apodo.value = $("[id$=TxtApodo]").val();
    //Correo.value = $("[id$=TxtCorreo]").val();
    //Celular.value = $("[id$=TxtCelular]").val();
    //Referencia.value = $("[id$=TxtReferencia]").val();
    //RUC.value = $("[id$=TxtRUC]").val();
    //Banco.value = $("[id$=TxtBanco]").val();
    //NumCuenDeposio.value = $("[id$=TxtNumCuenDeposito]").val();
    //NumCuenDestrac.value = $("[id$=TxtNumCuenDetracciones]").val();
    //NumCuenInterbancaria.value = $("[id$=TxtNumCuenInterbancaria]").val();
    if (esVisibleTipoCompraAndPuntos) {
        if (sTipoCompra == 0) {
            AlertTipoCompra();
        } else if (sTipoEntrega == 0) {
            AlertTipoEntrega();
        } else if (sTipoEntrega == 2 && comboDepart == 0) {
            AlertDepartamento();
        } else if (sTipoEntrega == 2 && comboProvincia == 0) {
            AlertProvincia();
        } else if (sTipoEntrega == 2 && comboDistrito == 0) {
            AlertDistrito();
        } else if (sTipoEntrega == 1 && comboTienda == 0) {
            AlertTienda();
        } else if (sMedioPago == 0) {
            AlertMedioPago();
        }
        else {
            var sTipoCompraSelect = $("[id$=STipoCompra]").val();
            var sTipoEntregaSelect = "1";
            var sMedioPagoSelect = $("[id$=SMedioPago]").val();

            var comboDepartSelect = $("[id$=ComboDepart]").val();
            var comboProvinciaSelect = $("[id$=ComboProvincia]").val();
            var comboDistritoSelect = $("[id$=ComboDistrito]").val();
            var comboTiendaSelect = $("[id$=ComboTienda]").val();


            location.href = "DetalleDeCompra.aspx?sTipoCompraSelect=" + sTipoCompraSelect + "&sTipoEntregaSelect=" + sTipoEntregaSelect + "&sMedioPagoSelect=" + sMedioPagoSelect + "&comboDepartSelect=" + comboDepartSelect + "&comboProvinciaSelect=" + comboProvinciaSelect + "&comboDistritoSelect=" + comboDistritoSelect + "&comboTiendaSelect=" + comboTiendaSelect;
        }
    } else if (sTipoEntrega == 0) {
        AlertTipoEntrega();
    } else if (sTipoEntrega == 3 && comboDepart == 0) {
        AlertDepartamento();
    } else if (sTipoEntrega == 1 && comboTienda == 0) {
        AlertTienda();
    } else if (sMedioPago == 0) {
        AlertMedioPago();
    }
    else {
        var sTipoCompraSelect = $("[id$=STipoCompra]").val();
        var sTipoEntregaSelect = "1";
        var sMedioPagoSelect = $("[id$=SMedioPago]").val();

        var comboDepartSelect = $("[id$=ComboDepart]").val();
        var comboProvinciaSelect = $("[id$=ComboProvincia]").val();
        var comboDistritoSelect = $("[id$=ComboDistrito]").val();
        var comboTiendaSelect = $("[id$=ComboTienda]").val();
        

        location.href = "DetalleDeCompra.aspx?sTipoCompraSelect=" + sTipoCompraSelect + "&sTipoEntregaSelect=" + sTipoEntregaSelect + "&sMedioPagoSelect=" + sMedioPagoSelect + "&comboDepartSelect=" + comboDepartSelect + "&comboProvinciaSelect=" + comboProvinciaSelect + "&comboDistritoSelect=" + comboDistritoSelect + "&comboTiendaSelect=" + comboTiendaSelect;
    }
}

function RecordatorioRegistrarCliente() {
    Swal.fire('Recuerde que antes de comprar debe registrar al cliente!')
}

function AlertDepartamento() {
    Swal.fire('Seleccione departamento')
}

function AlertProvincia() {
    Swal.fire('Seleccione provincia')
}

function AlertDistrito() {
    Swal.fire('Seleccione distrito')
}

function AlertTienda() {
    Swal.fire('Seleccione tienda')
}

function AlertTipoCompra() {
    Swal.fire('Seleccione el tipo de compra')
}

function AlertTipoEntrega() {
    Swal.fire('Seleccione el tipo de entrega')
}

function AlertMedioPago() {
    Swal.fire('Seleccione el medio de pago')
}