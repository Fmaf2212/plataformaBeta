//SaveCombos();
var input = document.getElementById('cboMPago');
var inputTCompra = document.getElementById('cboTCompra');
var inputTienda = document.getElementById('cboTiendaS');
var ListaDatosProducto;
//if (localStorage['cboMPago']) {
//    $("#cboMPago").val(localStorage['cboMPago']);
//}
//if (localStorage['cboTCompra']) {
//    $("#cboTCompra").val(localStorage['cboTCompra']);
//}
//if (localStorage['cboTiendaS']) {
//    $("#cboTiendaS").val(localStorage['cboTiendaS']);
//}
input.onchange = function () {
    localStorage['cboMPago'] = this.value;
    GuardarIDCombos('MPago', this.value);
}
inputTCompra.onchange = function () {
    localStorage['cboTCompra'] = this.value;
    GuardarIDCombos('TCompra', this.value);
}
inputTienda.onchange = function () {
    localStorage['cboTiendaS'] = this.value;
    GuardarIDCombos('TiendaS', this.value);
}

idProducto();

function idProducto() {
    $('#page_loader').show();
    var currentLocation = window.location.href;
    var dec = decodeURIComponent(currentLocation);
    var url = new URL(dec);
    var idProducto = url.searchParams.get("idproducto");
    ObtenerDatosProductos(idProducto)
}

function ObtenerDatosProductos(idProducto) {
    var obj = JSON.stringify({
        idProductoS: idProducto
    });
    $.ajax({
        type: "POST",
        url: "DetalleProducto.aspx/DatosProducto",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (dataS) {
            ListaDatosProducto = dataS.d;
            RellenarInformacion();
        }
    });
}

function RellenarInformacion() {
    $('#lblPrecio').text(ListaDatosProducto[0].PrecioUnitario);
    $('#lblNombre').text(ListaDatosProducto[0].NombreProducto);
    $('#lblBeneficios').text(ListaDatosProducto[0].beneficios);
    $('#lblIngredientes').text(ListaDatosProducto[0].ingredientes);
    $('#lblConsumo').text(ListaDatosProducto[0].consumo);
    document.getElementById("imagen").src = "products/"+ListaDatosProducto[0].Foto;
    $('#page_loader').hide();
}

function GuardarIDCombos(combo, idcombo) {
    var obj = JSON.stringify({
        comboS: combo, idComboS: idcombo
    });
    $.ajax({
        type: "POST",
        url: "DetalleProducto.aspx/GuardarIDCombos",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (dataS) {
        }
    });
}

$(document).on('click', '.btn-añadir', function (e) {
    $('#page_loader').show();

    if ($('#cboMPago').val() == "0" || $('#cboTCompra').val() == "0"
        || $('#cboTiendaS').val() == "0") {
        FaltaCombos();
    }
    else if ($('#quantity').val() ==  "0") {
        CantidadIncorrecta();
    }
    else {
        var currentLocation = window.location.href;
        var dec = decodeURIComponent(currentLocation);
        var url = new URL(dec);
        var idProducto = url.searchParams.get("idproducto");
        var cantidad = $('#quantity').val();
        AgregarCarrito(idProducto, cantidad);
    }
});

function AgregarCarrito(idProducto, cantidad) {
    var obj = JSON.stringify({
        codProductoCarrito: idProducto, cantidadProductos: cantidad
    });
    $.ajax({
        type: "POST",
        url: "DetalleProducto.aspx/AgregarProducto",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (dataS) {
            var Datos = dataS.d;
            if (Datos.Mensaje == "OK") {
                $('#txtMonto').text("S/." + Datos.Monto);
                $('#txtPuntos').text(Datos.Puntos);
                $('#txtPuntosPromo').text(Datos.PuntosPromo);
                $('#page_loader').hide();
                Swal.fire({
                    title: 'Perfecto!',
                    text: 'Producto Agregado',
                    type: "success"
                });
            }
            else {
                $('#page_loader').hide();
                Swal.fire({
                    title: 'Ooops...!',
                    text: Datos[0].Mensaje,
                    type: "error"
                });
            }
        }
    });
}

function FaltaCombos() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'Debe seleccionar todas las opciones de compra',
        type: "error"
    });
    $('#page_loader').hide();
}

function CantidadIncorrecta() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'La cantidad debe ser mayor a 0',
        type: "error"
    });
    $('#page_loader').hide();
}