//VARIABLES
var tabla, data, paquete, tipoPag;

// LISTAR COMPRAS

function addRowDT(obj) {
    tabla = $("#tbl_downline").DataTable();
    tabla.fnClearTable();
    for (var i = 0; i < obj.length; i++) {
        tabla.fnAddData([
            obj[i].Orden,
            obj[i].NombreSocio,
            obj[i].NombrePatrocinador,
            obj[i].NombreUpline,
            obj[i].PuntosPersonales,
            obj[i].VolumenPersonal,
            obj[i].VolumenRed,
            obj[i].VolumenGeneral
        ]);
    }
}

function sendDataAjax() {

    $.ajax({
        type: "POST",
        url: "EstructuraPuntos.aspx/ListaPuntosComisiones",
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

sendDataAjax();