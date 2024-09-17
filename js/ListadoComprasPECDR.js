var tabla, estado;
sendDataAjax();

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "ListadoComprasPECDR.aspx/ListaPedidosPE",
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
    tabla = $("#tbl_Pedidos").DataTable();
    tabla.fnClearTable();
    for (var i = 0; i < obj.length; i++) {
        tabla.fnAddData([
            obj[i].IdDatos,
            obj[i].FechaCreacionStr,
            obj[i].FechaExpiracionStr,
            obj[i].CIP,
            obj[i].Monto,
            obj[i].EstadoPedido
        ]);
    }
}