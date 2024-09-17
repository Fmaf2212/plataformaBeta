var urlJs = "https://static-content.vnforapps.com/v2/js/checkout.js";

var correoORI = "";
var nombresORI = "";
var apellidosORI = "";
var montoORI = "";
var merchantId = "602114115";
var tokenID = "";
var idPagoClientes = "";
var imgSanta = "https://mundosantanatura.com/logo/logoSantaNatura.jpeg";

function pagar(correo, nombres, apellidos, monto, token, sessionToken, idPagoCliente) {
    correoORI = correo;
    nombresORI = nombres;
    tokenID = token;
    var ape = apellidos.split('-');
    apellidosORI = ape[0] + ' ' + ape[1];
    //var res = monto.innerText.split(' ');
    idPagoClientes = idPagoCliente;
    //var corregido = res[1];
    montoORI = monto.replace(",", ".");
    sendDetalleAjax();
    generarBoton(sessionToken)
    
}

function pagar2(correo, nombres, apellidos, monto, token, sessionToken, idPagoCliente) {
    correoORI = correo;
    nombresORI = nombres;
    tokenID = token;
    var ape = apellidos.split('-');
    apellidosORI = ape[0] + ' ' + ape[1];
    //var res = monto.innerText.split(' ');
    idPagoClientes = idPagoCliente;
    //var corregido = res[1];
    montoORI = monto.replace(",", ".");
    sendDetalleAjax();
    generarBoton2(sessionToken)

}

function generarBoton(sessionToken) {
    var merchantIds = merchantId;
    var moneda = "PEN";
    var nombre = nombresORI;
    var apellido = apellidosORI;
    var importe = montoORI;
    var email = correoORI;
    var img = imgSanta;

    var json = {
        "merchantId": merchantIds,
        "moneda": moneda,
        "nombre": nombre,
        "apellido": apellido,
        "importe": importe,
        "email": email,
        "img": img
    }
    localStorage.setItem("data", JSON.stringify(json));

    let form = document.createElement("form");
    form.setAttribute('method', "post");
    form.setAttribute('action', "https://tienda.mundosantanatura.com/DetalleDeCompra.aspx");
    form.setAttribute('id', "boton_pago");
    document.getElementById("btn_pago").appendChild(form);

    let scriptEl = document.createElement('script');
    scriptEl.setAttribute('src', urlJs);
    scriptEl.setAttribute('data-sessiontoken', sessionToken);
    scriptEl.setAttribute('data-merchantid', merchantIds);
    scriptEl.setAttribute('data-merchantlogo', img);
    scriptEl.setAttribute('data-purchasenumber', idPagoClientes);
    scriptEl.setAttribute('data-channel', 'web');
    scriptEl.setAttribute('data-amount', importe);
    scriptEl.setAttribute('data-cardholdername', nombre);
    scriptEl.setAttribute('data-cardholderlastname', apellido);
    scriptEl.setAttribute('data-cardholderemail', email);
    scriptEl.setAttribute('data-usertoken', email);
    scriptEl.setAttribute('data-timeouturl', 'https://tienda.mundosantanatura.com/DetalleDeCompra.aspx');
    document.getElementById("boton_pago").appendChild(scriptEl);

}

function generarBoton2(sessionToken) {
    var merchantIds = merchantId;
    var moneda = "PEN";
    var nombre = nombresORI;
    var apellido = apellidosORI;
    var importe = montoORI;
    var email = correoORI;
    var img = imgSanta;

    var json = {
        "merchantId": merchantIds,
        "moneda": moneda,
        "nombre": nombre,
        "apellido": apellido,
        "importe": importe,
        "email": email,
        "img": img
    }
    localStorage.setItem("data", JSON.stringify(json));

    let form = document.createElement("form");
    form.setAttribute('method', "post");
    form.setAttribute('action', "https://tienda.mundosantanatura.com/DetalleDeCompra.aspx");
    form.setAttribute('id', "boton_pago");
    document.getElementById("btn_pago2").appendChild(form);

    let scriptEl = document.createElement('script');
    scriptEl.setAttribute('src', urlJs);
    scriptEl.setAttribute('data-sessiontoken', sessionToken);
    scriptEl.setAttribute('data-merchantid', merchantIds);
    scriptEl.setAttribute('data-merchantlogo', img);
    scriptEl.setAttribute('data-purchasenumber', idPagoClientes);
    scriptEl.setAttribute('data-channel', 'web');
    scriptEl.setAttribute('data-amount', importe);
    scriptEl.setAttribute('data-cardholdername', nombre);
    scriptEl.setAttribute('data-cardholderlastname', apellido);
    scriptEl.setAttribute('data-cardholderemail', email);
    scriptEl.setAttribute('data-usertoken', email);
    scriptEl.setAttribute('data-timeouturl', 'https://tienda.mundosantanatura.com/DetalleDeCompra.aspx');
    document.getElementById("boton_pago").appendChild(scriptEl);

}

function sendDetalleAjax() {

    var dataid2 = $("#datepicker").val();
    var obj2 = JSON.stringify({ id: dataid2 });

    $.ajax({
        type: "POST",
        url: "DetalleDeCompra.aspx/obtenerFechaNac",
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