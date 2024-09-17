var data, index = 0, tabla, combo = "0", uplines = [], minimisado = "";
getHeaders();
function getHeaders() {
    $.ajax({
        type: "POST",
        url: "ListadoActividad.aspx/getHeadersActivity",
        data: {},
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            const headerStrings = data.d;
            var tableHeader = document.getElementById("tb_head");
            var headerRow = document.createElement("tr");
            headerStrings.forEach(function (headerString) {
                var headerCell = document.createElement("th");
                headerCell.textContent = headerString;
                headerRow.appendChild(headerCell);
            });
            tableHeader.appendChild(headerRow);
            getFirstList();
        }
    });
}

function getFirstList() {
    $.ajax({
        type: "POST",
        url: "ListadoActividad.aspx/getDataActivityByIdSocio",
        data: {},
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
        console.log(obj[i][0].Value);

        var display = "", color = "";
        if (obj[i][28].Value == "0") {
            display = "display:none;";
        }
        var DatosArray = {};
        DatosArray['idSocio'] = obj[i][0].Value;
        DatosArray['idUpline'] = obj[i][29].Value;
        uplines.push(DatosArray);
        d += '<tr id="tr' + obj[i][0].Value + '" >' +
            '<td style="text-align: left;">' + '<button style="outline: none; box-shadow: none" id="btn' + obj[i][0].Value + '" style="' + display + '" value="red" type="button" title="red" class="btn style-button-red btn-redU"><label style="cursor: pointer;" id="sig' + obj[i][0].Value + '"/></button>&nbsp;<label id="lbl' + obj[i][0].Value + '">0</label>' + '</td>' +
            '<td>' + obj[i][0].Value + '</td>' +
            '<td>' + obj[i][1].Value + '</td>' +
            '<td>' + obj[i][2].Value + '</td>' +
            '<td>' + obj[i][3].Value + '</td>' +
            '<td>' + obj[i][4].Value + '</td>' +
            '<td>' + obj[i][5].Value + '</td>' +
            '<td>' + obj[i][6].Value + '</td>' +
            '<td>' + obj[i][7].Value + '</td>' +
            '<td>' + obj[i][8].Value + '</td>' +
            '<td>' + obj[i][9].Value + '</td>' +
            '<td>' + obj[i][10].Value + '</td>' +
            '<td>' + obj[i][11].Value + '</td>' +
            '<td>' + obj[i][12].Value + '</td>' +
            '<td>' + obj[i][13].Value + '</td>' +
            '<td>' + obj[i][14].Value + '</td>' +
            '<td>' + obj[i][15].Value + '</td>' +
            '<td>' + obj[i][16].Value + '</td>' +
            '<td>' + obj[i][17].Value + '</td>' +
            '<td>' + obj[i][18].Value + '</td>' +
            '<td>' + obj[i][19].Value + '</td>' +
            '<td>' + obj[i][20].Value + '</td>' +
            '<td>' + obj[i][21].Value + '</td>' +
            '<td>' + obj[i][22].Value + '</td>' +
            '<td>' + obj[i][23].Value + '</td>' +
            '<td>' + obj[i][24].Value + '</td>' +
            '<td>' + obj[i][25].Value + '</td>' +
            '<td>' + obj[i][26].Value + '</td>' +
            '<td>' + obj[i][27].Value + '</td>' +
            '<td style ="display:none;">' + obj[i][0].Value + '</td>' +
            '<td style ="display:none;">' + obj[i][29].Value + '</td>' +
            '</tr>';
    }
    $("#tbl_red").append(d);
    $('#sig' + obj[0][0].Value + '').text("▼");
}

//FUNCIONES PARA RED
$(document).on('click', '.btn-redU', function (e) {
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    index = $(this).parent().parent().index();
    var idSocio = row.cells[29].innerHTML;
    var BtnTexto = $('#sig' + idSocio + '').text();
    if (BtnTexto == "▼") {
        if (minimisado != idSocio) {
            $('#sig' + idSocio + '').text("▲");
            $('#lbl' + idSocio + '').val("0");
            IncrementaRed(idSocio);
        } else {
            $('#sig' + idSocio + '').text("▲");
            var showArray = ObtenerArrayUpline(idSocio);
            for (var i = 0; i < showArray.length; i++) {
                $('#tr' + showArray[i].idSocio + '').show();
                $('#sig' + showArray[i].idSocio + '').text("▼");
            }
        }
    } else {
        $('#sig' + idSocio + '').text("▼");
        $('.' + idSocio + '').hide();
        minimisado = idSocio;
    }
});

function IncrementaRed(idcliente) {
    var obj = JSON.stringify({
        idClienteS: idcliente
    });
    $.ajax({
        type: "POST",
        url: "ListadoActividad.aspx/getDataActivityByIdSocioRed",
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
        var display = "", style = "";
        linea = parseInt($('#lbl' + obj[i][29].Value + '').text()) + 1;
        if (obj[i][28].Value == "0") {
            display = "display:none;";
            style = " margin-left:12.84px;";
        } else {
            display = "margin-left: -9px;outline: none;box-shadow: none;";
        }
        d += '<tr id="tr' + obj[i][0].Value + '">' +
            '<td style="text-align: left;">' + '<button id="btn' + obj[i][0].Value + '" style="' + display + '" value="red" type="button" title="red" class="btn btn-ft style-button-red btn-redU"><label style="cursor: pointer" id="sig' + obj[i][0].Value + '"/></button>&nbsp;<label style="' + style + '" id="lbl' + obj[i][0].Value + '">' + linea + '</label>' + '</td>' +
            '<td>' + obj[i][0].Value + '</td>' +
            '<td>' + obj[i][1].Value + '</td>' +
            '<td>' + obj[i][2].Value + '</td>' +
            '<td>' + obj[i][3].Value + '</td>' +
            '<td>' + obj[i][4].Value + '</td>' +
            '<td>' + obj[i][5].Value + '</td>' +
            '<td>' + obj[i][6].Value + '</td>' +
            '<td>' + obj[i][7].Value + '</td>' +
            '<td>' + obj[i][8].Value + '</td>' +
            '<td>' + obj[i][9].Value + '</td>' +
            '<td>' + obj[i][10].Value + '</td>' +
            '<td>' + obj[i][11].Value + '</td>' +
            '<td>' + obj[i][12].Value + '</td>' +
            '<td>' + obj[i][13].Value + '</td>' +
            '<td>' + obj[i][14].Value + '</td>' +
            '<td>' + obj[i][15].Value + '</td>' +
            '<td>' + obj[i][16].Value + '</td>' +
            '<td>' + obj[i][17].Value + '</td>' +
            '<td>' + obj[i][18].Value + '</td>' +
            '<td>' + obj[i][19].Value + '</td>' +
            '<td>' + obj[i][20].Value + '</td>' +
            '<td>' + obj[i][21].Value + '</td>' +
            '<td>' + obj[i][22].Value + '</td>' +
            '<td>' + obj[i][23].Value + '</td>' +
            '<td>' + obj[i][24].Value + '</td>' +
            '<td>' + obj[i][25].Value + '</td>' +
            '<td>' + obj[i][26].Value + '</td>' +
            '<td>' + obj[i][27].Value + '</td>' +
            '<td style ="display:none;">' + obj[i][0].Value + '</td>' +
            '<td style ="display:none;">' + obj[i][29].Value + '</td>' +
            '</tr>';
        var DatosArray = {};
        DatosArray['idSocio'] = obj[i][0].Value;
        DatosArray['idUpline'] = obj[i][29].Value;
        myArray.push(DatosArray);
        uplines.push(DatosArray);
    }

    $('#tbl_red > tbody > tr').eq(index).after(d);
    var upline = obj[0][29].Value, bucle = [];

    while (upline != "") {
        var Datos = {};
        Datos['id'] = upline;
        bucle.push(Datos);
        upline = ObtenerUpline(upline);
    }

    for (var i = 0; i < myArray.length; i++) {
        $('#sig' + myArray[i].idSocio + '').text("▼");
        var element = document.getElementById("tr" + myArray[i].idSocio + "");
        element.classList.add(myArray[i].idUpline);
        for (var d = 0; d < bucle.length; d++) {
            element.classList.add(bucle[d].id);
        }
    }
}

function ObtenerUpline(dato) {
    var upline = uplines.filter(function (e) {
        return e.idSocio == dato;
    });
    if (upline.length == 0) { return ""; }
    return upline[0].idUpline;
}

function ObtenerArrayUpline(dato) {
    var upline = uplines.filter(function (e) {
        return e.idUpline == dato;
    });
    return upline;
}