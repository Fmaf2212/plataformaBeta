sendDataAjaxRG();
sendDataAjaxPD();

tablaRG = $("#tbl_RG").DataTable();
tablaPD = $("#tbl_PD").DataTable();

function sendDataAjaxRG() {
    $.ajax({
        type: "POST",
        url: "ReporteLogistico.aspx/ListarReporteLogistico_RG",
        data: {},
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (dataL) {
            addRowDT_RG(dataL.d);
        }
    });
}

function sendDataAjaxPD() {
    $.ajax({
        type: "POST",
        url: "ReporteLogistico.aspx/ListarReporteLogistico_PD",
        data: {},
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (dataL) {
            addRowDT_PD(dataL.d);
        }
    });
}

function addRowDT_RG(obj) {
    tablaRG.fnClearTable();

    for (var i = 0; i < obj.length; i++) {
        tablaRG.fnAddData([
            obj[i].ID,
            obj[i].Nombre,
            obj[i].Fecha,
            '<a href="/excel logistico/despacho/' + obj[i].Nombre + '" download><button type="button" title="Descargar" class="btn btn-success btn-download"><i class="fas fa-download"></i></button></a>'
        ]);
    }
}

function addRowDT_PD(obj) {
    tablaPD.fnClearTable();

    for (var i = 0; i < obj.length; i++) {
        tablaPD.fnAddData([
            obj[i].ID,
            obj[i].Nombre,
            obj[i].Fecha,
            '<a href="/excel logistico/recepcion/' + obj[i].Nombre + '" download><button type="button" title="Descargar" class="btn btn-success btn-download"><i class="fas fa-download"></i></button></a>'
        ]);
    }
}

$("#btnDownloadRG").click(function (e) {
    $('#page_loader').show();
    $.ajax({
        type: "POST",
        url: "Autocompletado.asmx/Reporte_Despacho",
        data: "{}",
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            const nameFile = response.d[0];
            const date = response.d[1];
            RegisterData(nameFile, date, 'RG');

        }
    });
});

$("#btnDownloadPD").click(function (e) {
    $('#page_loader').show();
    if ($("#txtIDOP").val() == '') {
        validation("Debe ingresar el IDOP");
    } else {
        var obja = JSON.stringify({
            idop: $("#txtIDOP").val()
        });
        $.ajax({
            type: "POST",
            url: "Autocompletado.asmx/Reporte_Recepcion",
            data: obja,
            dataType: "json",
            contentType: 'application/json; charset=utf-8',
            error: function (xhr, ajaxOptions, throwError) {
                console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
            },
            success: function (response) {
                const nameFile = response.d[0];
                const date = response.d[1];
                RegisterData(nameFile, date, 'PD');

            }
        });
    }

});

function RegisterData(nameFile, date, tipo) {
    var DatosArray = {};
    DatosArray['Nombre'] = nameFile;
    DatosArray['Fecha'] = date;
    DatosArray['Tipo'] = tipo;

    var obja = JSON.stringify({
        objDatos: DatosArray
    });

    $.ajax({
        type: "POST",
        url: "ReporteLogistico.aspx/RegistroReporteLogistico",
        data: obja,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            $('#page_loader').hide();
            alertme();
        }
    });
}

function alertme() {
    Swal.fire({
        title: 'Perfecto!',
        text: 'Archivo Generado',
        type: "success"
    }).then(function () {
        sendDataAjaxRG();
        sendDataAjaxPD();
    });
}

function validation(text) {
    Swal.fire({
        title: 'Ooops...!',
        text: text,
        type: "error"
    });
}
