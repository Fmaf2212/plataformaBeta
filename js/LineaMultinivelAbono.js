var cliente, periodo;
ListaMultinivel();

function ListaMultinivel() {
    $('#page_loader').show();
    var currentLocation = window.location.href;
    var dec = decodeURIComponent(currentLocation);
    var url = new URL(dec);
    cliente = url.searchParams.get("idcliente");
    periodo = url.searchParams.get("idperiodo");
    sendDataAjaxUpline()
}

function sendDataAjaxUpline() {
    var obj = JSON.stringify({
        periodoS: periodo, idClienteS: cliente, variableS: "upline"
    });
    $.ajax({
        type: "POST",
        url: "LineaMultinivelControlAbono.aspx/ListaLineaMultinivelPatrocinio",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (dataS) {
            addRowDTUpline(dataS.d);
        }
    });
}

function addRowDTUpline(obj) {
    $("#tbl_upline tbody tr").remove();
    var d = '';
    for (var i = 0; i < obj.length; i++) {
        d += '<tr>' +
            '<td>' + obj[i].NombreUpline + '</td>' +
            '</tr>';
    }
    $("#tbl_upline").append(d);
    sendDataAjaxPatrocinio();
}

function sendDataAjaxPatrocinio() {
    var obj = JSON.stringify({
        periodoS: periodo, idClienteS: cliente, variableS: "patrocinio"
    });
    $.ajax({
        type: "POST",
        url: "LineaMultinivelControlAbono.aspx/ListaLineaMultinivelPatrocinio",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (dataP) {
            addRowDTPatrocinio(dataP.d);
        }
    });
}

function addRowDTPatrocinio(obj) {
    $("#tbl_patrocinio tbody tr").remove();
    var d = '';
    for (var i = 0; i < obj.length; i++) {
        d += '<tr>' +
            '<td>' + obj[i].NombrePatrocinador + '</td>' +
            '</tr>';
    }
    $("#tbl_patrocinio").append(d);
    $('#page_loader').hide();
}