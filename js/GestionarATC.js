var ATC_Info = {
    "Empresario SNN": {
        "Pedidos": { "Desafío con su pedido": [], "Otras consultas": []},
        "Comisiones": { "Inconformidad monto de comisiones": [], "Recepción de Factura": [], "Fecha de pago rezagados": [], "Otras Consultas": []},
        "Premios y/o Promociones": { "Fecha de entrega aproximada": [], "Otras Consultas": []},
        "Servicio CDR SNN": { "Reclamo de Atención": []},
        "Otros": { "Otras Consultas": []}
    },
    "Empresario CDR": {
        "Saldo Disponible CDR": { "Inconformidad con saldo disponible": []},
        "Despacho de Pedidos": { "Consulta fecha de despacho": [], "Desafío con Courrier": [], "Guía de despacho": [], "Solicitud de cambio de dirección": [], "Solicitud de cambio de persona autorizada": [], "Desafío con pedidos adicionales": [], "Desafío con pedidos de emergencia": []},
        "Comisiones": { "Inconformidad monto de comisiones": [], "Monto de comisiones antiguas": [], "Fecha de pago Rezagados": [], "Otras consultas": []},
        "Validación de pedido": { "Pedido por canje": [], "Otras consultas": []},
        "Capacitación": { "Solicitud de capacitación básica": []},
        "Otros": { "Otras consultas": []}
    }
}
xxxx();
function xxxx() {
    //Get html elements
    var empresario = document.getElementById("cboTipoEmpresario");
    var tema = document.getElementById("cboTema");
    var temaEspecifico = document.getElementById("cboTemaEspecifico");

    //Load atc
    for (var atc in ATC_Info) {
        empresario.options[empresario.options.length] = new Option(atc, atc);
    }

    //County Changed

    empresario.onchange = function () {

        tema.length = 1; // remove all options bar first
        temaEspecifico.length = 1; // remove all options bar first

        if (this.selectedIndex < 1)
            return; // done

        for (var temaAtc in ATC_Info[this.value]) {
            tema.options[tema.options.length] = new Option(temaAtc, temaAtc);
        }
    }

    //State Changed
    tema.onchange = function () {

        temaEspecifico.length = 1; // remove all options bar first

        if (this.selectedIndex < 1)
            return; // done

        for (var temaE in ATC_Info[empresario.value][this.value]) {
            temaEspecifico.options[temaEspecifico.options.length] = new Option(temaE, temaE);
        }
    }
}

$("#btnSend2").click(function (e) {
    e.preventDefault();
    var nombre = $("#txtNom").val();
    var documento = $("#txtDoc").val();
    var telefono = $("#txtTelf").val();
    var empresario = $("#cboTipoEmpresario").val();
    var tema = $("#cboTema").val();
    var temaEspecifico = $("#cboTemaEspecifico").val();
    var detalle = $("#Detalle").val();
    
    if (nombre == "") {
        FaltaNombre();
    } else if (documento == "") {
        FaltaDocumento();
    } else if (telefono == "") {
        FaltaTelefono();
    } else if (empresario == "") {
        FaltaEmpresario();
    } else if (tema == "") {
        FaltaTema();
    } else if (temaEspecifico == "") {
        FaltaTemaEspecifico();
    } else if (empresario == "Empresario SNN" && tema == "Pedidos" && detalle == "") {
        FaltaDetalleConsulta();
    } else if ((tema == "Saldo disponible CDR SNN" || tema == "Comisiones") && detalle == "") {
        FaltaDetalleConsulta();
    } else if (tema == "Premios y/o Promociones" && detalle == "") {
        FaltaDetalleConsulta();
    } else if (tema == "Servicio CDR SNN" && detalle == "") {
        FaltaDetalleConsulta();
    } else if (empresario == "Empresario SNN" && tema == "Otros" && detalle == "") {
        FaltaDetalleConsulta();
    } else if (empresario == "Empresario CDR" && tema == "Validación de pedido" && temaEspecifico == "Otros" && detalle == "") {
        FaltaDetalleConsulta();
    } else if (empresario == "Empresario CDR" && tema == "Validación de pedido" && temaEspecifico == "Pedido por canje" && detalle == "") {
        FaltaDetalleConsulta();
    } else if (empresario == "Empresario CDR" && tema == "Otros" && detalle == "") {
        FaltaDetalleConsulta();
    } else if (tema == "Despacho de Pedidos" && detalle == "") {
        FaltaDetalleConsulta();
    } else if (tema == "Capacitación" && detalle == "") {
        FaltaDetalleConsulta();
    }
    else {
        EnviarArchivo(nombre, documento, telefono, empresario, tema, temaEspecifico);
    }
});

function EnviarArchivo(nombre, documento, telefono, empresario, tema, temaEspecifico) {

    var email = $("#txtEmail").val();
    var detalle = $("#Detalle").val();
    var myArray = [];
    if (empresario == "Empresario SNN" && tema == "Pedidos") {
        myArray.push("serviciocomercial@santanaturaperu.net", "supervisor.cdr@santanaturaperu.net", "administracion.cdr@santanaturaperu.net","atc.multinivel@santanatura.com.pe");
    } else if (tema == "Saldo disponible CDR SNN" || tema == "Comisiones") {
        myArray.push("facturas.multinivel@santanaturaperu.net","supervisor.cdr@santanaturaperu.net","atc.multinivel@santanatura.com.pe");
    } else if (tema == "Premios y/o Promociones") {
        myArray.push("supervisor01@santanaturaperu.net","supervisor.cdr@santanaturaperu.net","administracion.cdr@santanaturaperu.net","atc.multinivel@santanatura.com.pe");
    } else if (tema == "Servicio CDR SNN") {
        myArray.push("supervisor.cdr@santanaturaperu.net","supervisor.cdr@santanaturaperu.net","gerencia.multinivel@santanaturaperunet","atc.multinivel@santanatura.com.pe");
    } else if (empresario == "Empresario SNN") {
        myArray.push("serviciocomercial@santanaturaperu.net","supervisor.cdr@santanaturaperu.net","atc.multinivel@santanatura.com.pe");
    } else if (empresario == "Empresario CDR" && tema == "Validación de pedido" && temaEspecifico == "Pedido por canje") {
        myArray.push("canjes.multinivel@santanaturaperu.net","supervisor.cdr@santanaturaperu.net","atc.multinivel@santanatura.com.pe");
    } else if (tema == "Despacho de Pedidos") {
        myArray.push("despachos.cdr@santanaturaperu.net","supervisor.cdr@santanaturaperu.net","supervisor01@santanaturaperu.net","atc.multinivel@santanatura.com.pe");
    } else if (tema == "Capacitación") {
        myArray.push("supervisor.cdr@santanaturaperu.net","supervisor.cdr@santanaturaperu.net","atc.multinivel@santanatura.com.pe");
    } else if (empresario == "Empresario CDR") {
        myArray.push("supervisor.cdr@santanaturaperu.net", "supervisor.cdr@santanaturaperu.net", "atc.multinivel@santanatura.com.pe");
    }

    var obj = JSON.stringify({
        nombreS: nombre, documentoS: documento, telefonoS: telefono, emailS: email,
        empresarioS: empresario, temaS: tema, temaEspecificoS: temaEspecifico,
        detalleS: detalle, correoS: myArray
    });

    $.ajax({
        url: "atc.aspx/EnviarCorreo",
        type: "POST",
        data: obj,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            console.log(response);
            alertme();
        }
    });
}

function alertme() {
    Swal.fire({
        title: 'Perfecto!',
        text: 'El mensaje fue enviado con éxito, pronto nos estaremos comunicando con usted. Gracias',
        type: "success"
    }).then(function () {
        window.location = "atc.aspx";
    });
}
function FaltaNombre() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'Necesita rellenar el campo Nombres y Apellidos',
        type: "error"
    });
}
function FaltaDocumento() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'Necesita rellenar el campo Documento',
        type: "error"
    });
}
function FaltaTelefono() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'Necesita rellenar el campo Telefono',
        type: "error"
    });
}
function FaltaEmpresario() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'Necesita seleccionar el tipo de Empresario',
        type: "error"
    });
}
function FaltaTema() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'Necesita seleccionar el Tema General',
        type: "error"
    });
}
function FaltaTemaEspecifico() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'Necesita seleccionar el tema especifico',
        type: "error"
    });
}
function FaltaDetalleConsulta() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'Complete el detalle de la consulta por favor',
        type: "error"
    });
}