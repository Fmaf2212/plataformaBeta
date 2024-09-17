var tabla, estado;

tabla = $("#tbl_clientes").dataTable({
    order: [[3, 'desc']]
});

$.ajax({
    type: "POST",
    url: "Bonificaciones.aspx/ComboPeriodoComision",
    data: "{}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    async: false,
    success: function (result) {
        $("#cboPeriodo").empty();
        $("#cboPeriodo").append("<option value='0'>--Select--</option>");
        $.each(result.d, function (key, value) {
            $("#cboPeriodo").append($("<option></option>").val(value.idPeriodo).html(value.nombrePeriodo));
        });
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus + ": " + XMLHttpRequest.responseText);
    }
});

$("#btnFiltrar").click(function (e) {
    e.preventDefault();
    var periodo = $("#cboPeriodo").val();
    if (periodo == "0" || periodo == null) {
        FaltaPeriodo()
    }
    else {
        sendDataAjax(periodo);
    }
});


function sendDataAjax(IDP) {

    var obja = JSON.stringify({
        IDP: IDP
    });

    $.ajax({
        type: "POST",
        url: "ReporteTOP50_Clientes_YW.aspx/ListaTOP50_YW",
        data: obja,
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
    
    tabla.fnClearTable();
    for (var i = 0; i < obj.length; i++) {
        tabla.fnAddData([
            obj[i].Nombres,
            obj[i].Paquete,
            obj[i].NumPedidos,
            obj[i].MontoFacturado,
            obj[i].PuntajeAcumulado
        ]);
    }
}

function FaltaPeriodo() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'Debe seleccionar el periodo',
        type: "error"
    });
}