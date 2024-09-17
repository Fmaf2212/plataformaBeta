var tabla, estado;
tabla = $("#tbl_Pedidos").DataTable();
tabla.fnClearTable();
sendDataAjax();

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "ListadoComprasTupay_YW.aspx/ListaPedidosTupayYW",
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

function addRowDT(obj) {
    for (var i = 0; i < obj.length; i++) {
        var estado = (obj[i].EstadoPedido == "1") ? "Pendiente": "Realizado";
        tabla.fnAddData([
            obj[i].IdSolicitud,
            obj[i].FechaCreacionStr,
            obj[i].FechaExpiracionStr,
            obj[i].Reference,
            obj[i].Monto,
            estado,
            obj[i].URL,
        ]);
    }
}