var data, index = 0, tabla, combo = "0", patros = [], minimisado = "";
sendDataAjax();
$("#btnFiltro").click(function (e) {
    minimisado = "";
    sendDataAjax();
});

$.ajax({
    type: "POST",
    url: "MapaDeRed.aspx/ListaPeriodos",
    data: "{}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    async: false,
    success: function (result) {
        $("#cboPeriodo").empty();
        $("#cboPeriodo").append("<option value='0'>--Select--</option>");
        $.each(result.d, function (key, value) {
            $("#cboPeriodo").append($("<option></option>").val(value.idPeriodo).html(value.nombre));
        });
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus + ": " + XMLHttpRequest.responseText);
    }
});

function sendDataAjax() {
    var idperiodo = $('#cboPeriodo').val();
    if (idperiodo == null) {
        idperiodo = 0;
    }
    var obj = JSON.stringify({
        idPeriodoS: idperiodo
    });
    $.ajax({
        type: "POST",
        url: "MapaDePatrocinio.aspx/ListarEstructuraPropio",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            addRowDT(data.d);
        }
    });
}

function addRowDT(obj) {
    $("#tbl_red tbody tr").remove();
    var d = '';
    for (var i = 0; i < obj.length; i++) {
        var display = "", color = "";
        if (obj[i].RED == "0") {
            display = "display:none;";
        }
        if (parseFloat(obj[i].PP) < 40) {
            color = "color: red;";
        }
        var DatosArray = {};
        DatosArray['idSocio'] = obj[i].IDSOCIO;
        DatosArray['idPatro'] = obj[i].IDPATROCINADOR;
        patros.push(DatosArray);
        d += '<tr id="tr' + obj[i].IDSOCIO + '" style="' + color + '">' +
            '<td style="text-align: left;">' + '<button id="btn' + obj[i].IDSOCIO + '" style="' + display + '" value="red" type="button" title="red" class="btn style-button-red btn-redU"><label id="sig' + obj[i].IDSOCIO + '"/></button>&nbsp;<label id="lbl' + obj[i].IDSOCIO + '">0</label>' + '</td>' +
            '<td>' + obj[i].NOMBRES + '</td>' +
            '<td>' + obj[i].TIPOC + '</td>' +
            '<td>' + obj[i].PP + '</td>' +
            '<td>' + obj[i].PAQUETE + '</td>' +
            //'<td>' + obj[i].Telefono + '</td>' +
            '<td>' + obj[i].Pais + '</td>' +
            '<td>' + obj[i].Fecha + '</td>' +
            '<td style ="display:none;">' + obj[i].IDSOCIO + '</td>' +
            '<td style ="display:none;">' + obj[i].IDPATROCINADOR + '</td>' +
            '</tr>';
    }
    $("#tbl_red").append(d);
    $('#sig' + obj[0].IDSOCIO + '').text("+");
}

//FUNCIONES PARA RED
$(document).on('click', '.btn-redU', function (e) {
    e.preventDefault();

    var row = $(this).parent().parent()[0];
    index = $(this).parent().parent().index();
    var idSocio = row.cells[7].innerHTML;
    var BtnTexto = $('#sig' + idSocio + '').text();
    if (BtnTexto == "+") {
        if (minimisado != idSocio) {
            $('#sig' + idSocio + '').text("-");
            $('#lbl' + idSocio + '').val("0");
            IncrementaRed(idSocio);
        } else {
            $('#sig' + idSocio + '').text("-");
            var showArray = ObtenerArrayPatro(idSocio);
            for (var i = 0; i < showArray.length; i++) {
                $('#tr' + showArray[i].idSocio + '').show();
                $('#sig' + showArray[i].idSocio + '').text("+");
            }
        }
    } else {
        $('#sig' + idSocio + '').text("+");
        $('.' + idSocio + '').hide();
        minimisado = idSocio;
    }
});

function IncrementaRed(idcliente) {

    var idperiodo = $('#cboPeriodo').val();
    if (idperiodo == null) {
        idperiodo = 0;
    }
    var obj = JSON.stringify({
        idClienteS: idcliente, idPeriodoS: idperiodo
    });
    $.ajax({
        type: "POST",
        url: "MapaDePatrocinio.aspx/ListarEstructuraRed",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            addRowDTRed(data.d);
        }
    });
}

function addRowDTRed(obj) {
    var d = '', linea = 0, myArray = [];
    for (var i = 0; i < obj.length; i++) {
        var display = "", style = "", color = "";
        linea = parseInt($('#lbl' + obj[i].IDPATROCINADOR + '').text()) + 1;
        if (obj[i].RED == "0") {
            display = "display:none;";
            style = " margin-left:12.84px;";
        } else {
            display = "margin-left: -9px;";
        }
        if (parseFloat(obj[i].PP) < 40) {
            color = "color: red;";
        }
        d += '<tr id="tr' + obj[i].IDSOCIO + '" style="' + color + '">' +
            '<td style="text-align: left;">' + '<button id="btn' + obj[i].IDSOCIO + '" style="' + display + '" value="red" type="button" title="red" class="btn btn-ft style-button-red btn-redU"><label id="sig' + obj[i].IDSOCIO + '"/></button>&nbsp;<label style="' + style + '" id="lbl' + obj[i].IDSOCIO + '">' + linea + '</label>' + '</td>' +
            '<td>' + obj[i].NOMBRES + '</td>' +
            '<td>' + obj[i].TIPOC + '</td>' +
            '<td>' + obj[i].PP + '</td>' +
            '<td>' + obj[i].PAQUETE + '</td>' +
            //'<td>' + obj[i].Telefono + '</td>' +
            '<td>' + obj[i].Pais + '</td>' +
            '<td>' + obj[i].Fecha + '</td>' +
            '<td style ="display:none;">' + obj[i].IDSOCIO + '</td>' +
            '<td style ="display:none;">' + obj[i].IDPATROCINADOR + '</td>' +
            '</tr>';
        var DatosArray = {};
        DatosArray['idSocio'] = obj[i].IDSOCIO;
        DatosArray['idPatro'] = obj[i].IDPATROCINADOR;
        myArray.push(DatosArray);
        patros.push(DatosArray);
    }

    $('#tbl_red > tbody > tr').eq(index).after(d);
    var patro = obj[0].IDPATROCINADOR, bucle = [];

    while (patro != "") {
        var Datos = {};
        Datos['id'] = patro;
        bucle.push(Datos);
        patro = ObtenerPatro(patro);
    }

    for (var i = 0; i < myArray.length; i++) {
        $('#sig' + myArray[i].idSocio + '').text("+");
        var element = document.getElementById("tr" + myArray[i].idSocio + "");
        element.classList.add(myArray[i].idPatro);
        for (var d = 0; d < bucle.length; d++) {
            element.classList.add(bucle[d].id);
        }
    }

}

function ObtenerPatro(dato) {
    var patro = patros.filter(function (e) {
        return e.idSocio == dato;
    });
    if (patro.length == 0) { return ""; }
    return patro[0].idPatro;
}

function ObtenerArrayPatro(dato) {
    var patro = patros.filter(function (e) {
        return e.idPatro == dato;
    });
    return patro;
}