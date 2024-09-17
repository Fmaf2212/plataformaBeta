var tabla, data, estados, tipoPag, tabla2, data2, tabla3, data3, contador, listaPro, contador2, listaPro2, dniActualiza, data4, okRegistro, okActualiza, listaPSRegistro, PSCDR;
tabla2 = $("#tbl_registro").DataTable({
    "bPaginate": false,
    "bSort": false
});

$("#btnActualizarGlobal").click(function (e) {
    e.preventDefault();
    listaProductos();
});

function listaProductos() {
    $.ajax({
        type: "POST",
        url: "GestionarStock.aspx/ListarProductosRegistro",
        data: JSON.stringify({ CDR: "256445698" }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#cboProducto").empty();
            $.each(result.d, function (key, value) {
                $("#cboProducto").append($("<option></option>").val(value.IDProductoXPais).html(value.NombreProducto));
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
}

tabla3 = $("#tbl_actualizar").DataTable({
    "bPaginate": false,
    "bSort": false
});

$.ajax({
    type: "POST",
    url: "GestionarStock.aspx/ListadoCDRCombo",
    data: "{}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    async: false,
    success: function (result) {
        $("#cboCDR").empty();
        $("#cboCDR").append("<option value='0'>--Select--</option>");
        $.each(result.d, function (key, value) {
            $("#cboCDR").append($("<option></option>").val(value.DNICDR).html(value.CDRPS));
        });
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus + ": " + XMLHttpRequest.responseText);
    }
});

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "GestionarStock.aspx/ListarCDRStock",
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

function sendDataAjaxRegistrar(combo) {

    var obj = JSON.stringify({ CDR: combo });
    $.ajax({
        type: "POST",
        url: "GestionarStock.aspx/ListarProductosRegistro",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data2) {
            console.log(data2.d);
            addRowDTRegistrar(data2.d);
            listaPro = data2.d;
        }
    });
}

function sendDataAjaxActualizar(SCDR) {

    var obj = JSON.stringify({ dniCDR: SCDR });
    $.ajax({
        type: "POST",
        url: "GestionarStock.aspx/ListarProductosxStock",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data3) {
            console.log(data3.d);
            addRowDTActualizar(data3.d);
            listaPro2 = data3.d;
        }
    });
}

function addRowDT(obj) {
    tabla = $("#tbl_cdr").DataTable();
    tabla.fnClearTable();
    for (var i = 0; i < obj.length; i++) {
        tabla.fnAddData([
            obj[i].DNICDR,
            obj[i].Apodo,
            obj[i].CDRPS,
            '<button value="Actualizar" title="Actualizar" type="button" class="btn btn-primary btn-deta" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-search"></i></button>'
        ]);
    }
}

function addRowDTRegistrar(obj) {
    
    contador = 0;
    tabla2.fnClearTable();
    for (var i = 0; i < obj.length; i++) {
        contador++;
        var imagenProducto = obj[i].Imagen;
        tabla2.fnAddData([
            obj[i].Fila,
            obj[i].NombreProducto,
            '<img src="products/' + imagenProducto + '" style="height: 80px">',
            obj[i].IDPS,
            '<input type="text" id="cant' + i + '" name="" class="form-control daterange" style="background-color: lightgreen; width:90px" value="0">',
            '<input id="Check' + i + '" type="checkbox" class="form-check-input">',
            '0',
            '0',
            obj[i].IDProducto
        ]);
    }
}

function addRowDTActualizar(obj) {
    
    contador2 = 0;
    tabla3.fnClearTable();
    var check;
    for (var i = 0; i < obj.length; i++) {
        contador2++;
        if (obj[i].ControlStock == true) { check = 'checked' }
        var imagenProducto = obj[i].Imagen;
        var cant = obj[i].Cantidad; 
        tabla3.fnAddData([
            obj[i].Fila,
            obj[i].NombreProducto,
            '<img src="products/' + imagenProducto + '" style="height: 80px">',
            obj[i].IDPS,
            '<input type="text" id="cantA' + i + '" name="" class="form-control daterange" style="background-color: lightgreen; width:90px" value="' + cant + '">',
            '<input id="CheckA' + i + '" type="checkbox" class="form-check-input"' + check + '>',
            obj[i].CantidadReal,
            obj[i].StockInicial,
            obj[i].IDProducto
        ]);
        check = '';
    }
}

sendDataAjax();

$("#btnModals").click(function (e) {
    e.preventDefault();
    var combo = $("#cboCDR").val();
    if (combo == "0")
    {
        $('#exampleModal2').modal('hide');
        SeleccionaCDR();
    }
    else {
        $('#exampleModal2').modal('show');
        $("#exampleModal2 input").val("");
        var comboCDR = $("#cboCDR option:selected").text();
        $("#txtCDR").val(comboCDR);
        sendDataAjaxRegistrar(combo);
    }
});

$(document).on('click', '.btn-deta', function (e) {
    e.preventDefault();
    $("#exampleModal input").val("");
    $("#exampleModal input[type='checkbox']").prop('checked', false).change();
    var row2 = $(this).parent().parent()[0];
    var datax = tabla.fnGetData(row2);
    $("#txtCDRActualizar").val(datax[2]);
    dniActualiza = datax[0];
    PSCDR = datax[2];
    sendDataAjaxActualizar(datax[0]);
});

function SeleccionaCDR() {

    Swal.fire({
        title: 'Ooops...!',
        text: 'Debe seleccionar un CDR',
        type: "error"
    });
}

$("#btnRegistrar").click(function (e) {
    e.preventDefault();
    var myArray = []; /*'codigo', 'PS', 'imgP', 'cantidad'*/
    for (var i = 0; i < contador; i++) {
        var DatosArray = {};
        var canInput = $("#cant"+i+"").val();
        var check = document.getElementById("Check" + i + "").checked;
        var codigo = listaPro[i].IDProducto;
        var idPeruS = listaPro[i].IDPS;
        var imgP = listaPro[i].Imagen;
        var idProPais = listaPro[i].IDProductoXPais;
        var prodPromo = listaPro[i].ProdPromo;
        DatosArray['codigo'] = codigo;
        DatosArray['PS'] = idPeruS;
        DatosArray['imgP'] = imgP;
        DatosArray['cantidad'] = canInput;
        DatosArray['controlStock'] = check;
        DatosArray['idProductoPais'] = idProPais;
        DatosArray['prodPromo'] = prodPromo;
        //DatosArray.push(codigo, idPeruS, imgP, canInput);
        myArray.push(DatosArray);
    }
    registrarProductosCDR(myArray);
});

$("#btnActualizar").click(function (e) {
    e.preventDefault();
    var myArray2 = [];
    for (var i = 0; i < contador2; i++) {
        var control = $("#cantA" + i + "").val();
        if (typeof control != "undefined") {
            var DatosArray2 = {};
            var canInput = $("#cantA" + i + "").val();
            var check = document.getElementById("CheckA" + i + "").checked;
            var codigo = listaPro2[i].IDProducto;
            var idPeruS = listaPro2[i].IDPS;
            var imgP = listaPro2[i].Imagen;
            var idProPais = listaPro2[i].IDProductoXPais;
            DatosArray2['codigo'] = codigo;
            DatosArray2['PS'] = idPeruS;
            DatosArray2['imgP'] = imgP;
            DatosArray2['cantidad'] = canInput;
            DatosArray2['controlStock'] = check;
            DatosArray2['idProductoPais'] = idProPais;
            myArray2.push(DatosArray2);
        }
    }
    actualizarProductosCDR(myArray2);
});

$("#btnRellenarRegistro").click(function (e) {
    e.preventDefault();
    var combo = $("#cboCDR option:selected").text();
    obtenerStockPS(combo);
});

$("#btnRellenar").click(function (e) {
    e.preventDefault();
    obtenerStockPSActualizar(PSCDR);
});

function obtenerStockPS(combo) {
    var obj = JSON.stringify({ cdrPS: combo });
    $.ajax({
        type: "POST",
        url: "GestionarStock.aspx/RellenarStockPS",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data4) {
            console.log(data4.d);
            listaPSRegistro = data4.d;
            rellenarRegistro();
        }
    });
}

function rellenarRegistro() {
    for (var i = 0; i < contador; i++) {
        var PPS = listaPro[i].IDPS;
        var valida = false;
        var cont = 0;
        while (!valida && cont < listaPSRegistro.length) {
            if (PPS == listaPSRegistro[cont].IDPPS) { valida = true; $("#cant" + i + "").val(listaPSRegistro[cont].cantidad); }
            else { cont += 1; }
        }
        if (valida == false) { $("#cant" + i + "").val("0"); }
    }
}

function obtenerStockPSActualizar(combo) {
    var obj = JSON.stringify({ cdrPS: combo });
    $.ajax({
        type: "POST",
        url: "GestionarStock.aspx/RellenarStockPS",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data5) {
            console.log(data5.d);
            listaPSRegistro = data5.d;
            rellenarActualizado();
        }
    });
}

function rellenarActualizado() {
    for (var i = 0; i < contador2; i++) {
        var PPS = listaPro2[i].IDPS;
        var valida = false;
        var cont = 0;
        while (!valida && cont < listaPSRegistro.length) {
            if (PPS == listaPSRegistro[cont].IDPPS) { valida = true; $("#cantA" + i + "").val(listaPSRegistro[cont].cantidad); }
            else { cont += 1; }
        }
        if (valida == false) { $("#cantA" + i + "").val("0"); }
    }
}

function registrarProductosCDR(myArray) {
    var combocdr = $("#cboCDR").val();
    var obj = JSON.stringify({ prueba: myArray, CDR: combocdr });
    $.ajax({
        type: "POST",
        url: "GestionarStock.aspx/RegistrarStock",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (okRegistro) {
            console.log(okRegistro.d);
            Swal.fire({
                title: 'Perfecto!',
                text: 'Stock Registrado',
                type: "success"
            }).then(function () {
                window.location = "GestionarStock.aspx";
            });
        }
    });
}

function actualizarProductosCDR(myArray) {
    var combocdr = dniActualiza.trim();
    var obj = JSON.stringify({ prueba: myArray, CDR: combocdr });
    $.ajax({
        type: "POST",
        url: "GestionarStock.aspx/ActualizarStock",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (okActualiza) {
            console.log(okActualiza.d);
            Swal.fire({
                title: 'Perfecto!',
                text: 'Stock Actualizado',
                type: "success"
            }).then(function () {
                window.location = "GestionarStock.aspx";
            });
        }
    });
}