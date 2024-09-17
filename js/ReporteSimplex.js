//VARIABLES
var tabla, data, paquete, tipoPag;

// LISTAR COMPRAS

function addRowDT(obj) {
    tabla = $("#tbl_simplex").DataTable();
    tabla.fnClearTable();
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].idPaquete == "01") {
            paquete = "BASICO";
        } else if (obj[i].idPaquete == "02") {
            paquete = "PROFESIONAL";
        } else if (obj[i].idPaquete == "03") {
            paquete = "EMPRESARIAL";
        } else if (obj[i].idPaquete == "04") {
            paquete = "MILLONARIO";
        } else if (obj[i].idPaquete == "05") {
            paquete = "CONSULTAR";
        } else {
            paquete = "CONSUMIDOR";
        }

        if (obj[i].TipoCompra == "07") {
            tipoPag = "PE";
        } else if (obj[i].TipoCompra == "01" | obj[i].TipoCompra == "02" | obj[i].TipoCompra == "03" | obj[i].TipoCompra == "04" | obj[i].TipoCompra == "05" |
            obj[i].TipoCompra == "06") {
            tipoPag = "AF";
        } else {
            tipoPag = "UP";
        }

        

        tabla.fnAddData([
            obj[i].DNICliente,
            obj[i].DNIPatrocinador,
            paquete,
            tipoPag,
            obj[i].PuntosTotal,
            obj[i].montoComision,
            obj[i].IdopPeruShop,
            obj[i].fechaSimplex,
            obj[i].NombreCliente
        ]);
    }
}

function sendDataAjax(fecha1, fecha2) {

    var obj = JSON.stringify({ fecha1Send: fecha1, fecha2Send: fecha2 });

    $.ajax({
        type: "POST",
        url: "ReporteSimplex.aspx/ListaDetalleCompraEfectivo",
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


//validar

$("#btnGenerarReporte").click(function (e) {
    e.preventDefault();
    var fecha1 = $("#fecha").val();
    var fecha2 = $("#fechaFin").val();
    sendDataAjax(fecha1, fecha2);
});



