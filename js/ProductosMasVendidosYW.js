var tabla, estado;

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
        url: "ReporteProdMasVend_YW.aspx/ListaProdMasVendidos_YW",
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
    tabla = $("#tbl_productos").DataTable();
    tabla.fnClearTable();
    for (var i = 0; i < obj.length; i++) {
        tabla.fnAddData([
            obj[i].Linea,
            obj[i].Nombre,
            obj[i].Uni_Real,
            obj[i].Monto_Real,
            obj[i].Uni_Promo,
            obj[i].Monto_Promo,
            obj[i].Total_Uni,
            obj[i].Total_Monto
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