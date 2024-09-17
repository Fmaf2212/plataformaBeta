﻿var data;
sendDataAjax();

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "AgregarComprobante.aspx/ListarSolicitudesGeneradas",
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
    tabla = $("#tbl_cdr").dataTable();
    tabla.fnClearTable();
    for (var i = 0; i < obj.length; i++) {
        var url = "voucherCDR/" + obj[i].Voucher;
        if (obj[i].Voucher != "") { sellado = "none"; } else { sellado = ""; }
        var tipoCompra = (obj[i].TipoCompra === "1") ? "ADICIONAL" : (obj[i].TipoCompra === "2") ? "EMERGENCIA" :
            (obj[i].TipoCompra === "9") ? "EXTORNO" : (obj[i].TipoCompra === "10") ? "ADICIONAL - DEPOSITO" :
                (obj[i].TipoCompra === "11") ? "EMERGENCIA - DEPOSITO" : "SALDO DISPONIBLE";
        tabla.fnAddData([
            obj[i].IdSolicitud,
            obj[i].FechaSolicitud,
            tipoCompra,
            obj[i].MontoTotal,
            '<p> <a href="' + url + '" target="_blank">' + obj[i].Voucher + '</a></p>',
            '<button type="button" style="display:' + sellado + '" class="btn btn-primary btn-update" data-toggle="modal" data-target="#exampleModal"><i class="far fa-edit"></i></button>'
        ]);
    }
}

$(document).on('click', '.btn-update', function (e) {
    $('.file-upload').file_upload();
    $('.file-upload-text').text("Ingrese la imagen ...");
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    data = tabla.fnGetData(row);
});

$("#btnRegistrar").click(function (e) {
    e.preventDefault();
    GuardarImagen();
});

function GuardarImagen() {
    var archivo, files, dataPDF, extension;
    dataPDF = new FormData();
    archivo = $("#archivo").get(0);
    files = archivo.files;
    extension = files[0].name.split('.').pop();
    dataPDF.append(files[0].name, files[0]);
    dataPDF.append("archivo", "voucher");
    dataPDF.append("idPedido", data[0]);
    dataPDF.append("extension", extension);

    $.ajax({
        url: "FileUpload.ashx",
        type: "POST",
        data: dataPDF,
        contentType: false,
        processData: false,
        success: function (result) {
            if (result == "") {
                RegistrarData(data[0]);
            }
        },
        error: function (err) {
            alert(err.statusText)
        }
    });
}

function RegistrarData(idPedido) {
    var archivo;
    archivo = idPedido+"."+document.getElementById('archivo').files[0].name.split('.').pop();

    var obja = JSON.stringify({
        idPedido: idPedido, archivoS: archivo
    });

    $.ajax({
        type: "POST",
        url: "AgregarComprobante.aspx/RegistroVoucher",
        data: obja,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            console.log(response);
            alertme();
        }
    });
}

function alertme() {
    Swal.fire({
        title: 'Perfecto!',
        text: 'Voucher Registrado',
        type: "success"
    }).then(function () {
        window.location = "AgregarComprobante.aspx";
    });
}