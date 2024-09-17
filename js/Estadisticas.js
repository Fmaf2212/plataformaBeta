//VARIABLES
var tabla, data, tabla2, data2, tabla3 ;

// LISTAR COMPRAS

function addRowDT(obj) {
    tabla = $("#tbl_socios").DataTable();
    tabla.fnClearTable();
    for (var i = 0; i < obj.length; i++) {
        tabla.fnAddData([
            obj[i].IDRANGO,
            obj[i].LastName,
            obj[i].Telefono,
            obj[i].PP,
            obj[i].VP
        ]);
    }
}

function addRowDT2(obj) {
    tabla2 = $("#tbl_consultores").DataTable();
    tabla2.fnClearTable();
    for (var i = 0; i < obj.length; i++) {
        tabla2.fnAddData([
            obj[i].IDRANGO,
            obj[i].LastName,
            obj[i].Telefono,
            obj[i].PP
        ]);
    }
}

function addRowDT3(obj) {
    tabla3 = $("#tbl_cci").DataTable();
    tabla3.fnClearTable();
    for (var i = 0; i < obj.length; i++) {
        tabla3.fnAddData([
            obj[i].IDRANGO,
            obj[i].LastName,
            obj[i].Telefono,
            obj[i].PP
        ]);
    }
}

function sendDataAjax() {

    $.ajax({
        type: "POST",
        url: "Estadisticas.aspx/ListaEstadisticaSocio",
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

function sendDataAjax2() {

    $.ajax({
        type: "POST",
        url: "Estadisticas.aspx/ListaEstadisticaConsultor",
        data2: {},
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data2) {
            console.log(data2.d);
            addRowDT2(data2.d);
        }
    });
}

function sendDataAjax3() {

    $.ajax({
        type: "POST",
        url: "Estadisticas.aspx/ListaEstadisticaCCI",
        data3: {},
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data3) {
            console.log(data3.d);
            addRowDT3(data3.d);
        }
    });
}

function lista2() {
    sendDataAjax2();
}

function lista3() {
    sendDataAjax3();
}

sendDataAjax();