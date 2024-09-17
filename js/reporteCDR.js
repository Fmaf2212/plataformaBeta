//VARIABLES
var tabla, data, paquete, tipoPag;

// LISTAR COMPRAS

function addRowDT(obj) {
    tabla = $("#tbl_cdr").DataTable();
    tabla.fnClearTable();
    for (var i = 0; i < obj.length; i++) {
        tabla.fnAddData([
            obj[i].Idop,
            obj[i].Establecimiento,
            obj[i].Fecha,
            obj[i].NombreProducto,
            obj[i].CantidadProducto,
            obj[i].PrecioCDR,
            obj[i].PuntosCDR,
            obj[i].PuntosTotal,
            obj[i].MontoTotal
        ]);
    }
}

function sendDataAjax(fecha1, fecha2) {

    var obj = JSON.stringify({ fecha1Send: fecha1, fecha2Send: fecha2 });

    $.ajax({
        type: "POST",
        url: "ReporteCDRGene.aspx/ListaDetalleCompraEfectivo",
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
    var fecha1 = $("#txtFecha").val();
    var fecha2 = $("#txtFechaFin").val();
    sendDataAjax(fecha1, fecha2);
});


///

