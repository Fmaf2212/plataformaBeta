var idPromo = 0, tabla;

$("#cboPais").change(function () {
    $.ajax({
        type: "POST",
        url: "PromocionUnica_TipoCompra.aspx/ListaProducto",
        data: JSON.stringify({ Pais: this.value }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#cboProducto").empty();
            $.each(result.d, function (key, value) {
                $("#cboProducto").append($("<option></option>").val(value.ProductoPais).html(value.NombreProducto));
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
});

function listaPaises() {
    $.ajax({
        type: "POST",
        url: "PromocionUnica_TipoCompra.aspx/GetPais",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#cboPais").empty();
            $.each(result.d, function (key, value) {
                $("#cboPais").append($("<option></option>").val(value.Codigo).html(value.Nombre));
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
}

function listaProductos() {
    $.ajax({
        type: "POST",
        url: "PromocionUnica_TipoCompra.aspx/ListaProducto",
        data: JSON.stringify({ Pais: $("#cboPais").val() }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#cboProducto").empty();
            $.each(result.d, function (key, value) {
                $("#cboProducto").append($("<option></option>").val(value.ProductoPais).html(value.NombreProducto));
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
}

function addRowDT(obj) {
    tabla = $("#tbl_promo").DataTable();
    tabla.fnClearTable();

    for (var i = 0; i < obj.length; i++) {
        const pais = (obj[i].Pais == '01') ? 'Perú' :
            (obj[i].Pais == '02') ? 'Bolivia' : '';
        tabla.fnAddData([
            obj[i].IdPromoU,
            obj[i].NombreProducto,
            obj[i].Fecha,
            pais,
            '<button title="Actualizar" class="btn btn-primary btn-update" data-toggle="modal" data-target="#exampleModal"><i class="far fa-edit"></i></button>',
            '<button value="Eliminar" title="Eliminar" style="display:none;" class="btn btn-danger btn-delete"><i class="far fa-minus-square"></i></button>',
            obj[i].Pais,
            obj[i].Pais,

        ]);
    }
}

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "PromocionUnica_TipoCompra.aspx/Lista_PromoUnica_Paquetes",
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

sendDataAjax();

// VALIDAR

function ValidarCampos() {
    var maxUni = $("#txtMaxUnidades").val();

    if (maxUni == "") {
        return ErrorMessage("Debe rellenar el campo unidad máxima");
    } else {
        return true;
    }
}

// REGISTRO
$("#btnNuevaPromo").click(function (e) {
    listaPaises();
    listaProductos();
    $("#btnRegistrar").show();
    $("#btnActualizar").hide();
    $("#exampleModal input").val("");
    $("#exampleModal input[type='checkbox']").prop('checked', false).change();
});

$("#btnRegistrar").click(function (e) {
    const validacion = ValidarCampos();

    if (validacion) {
        RegistroPromo();
    }
});

function RegistroPromo() {

    var DatosTCliente = GetInsert_TCliente();
    var DatosTCompra = GetInsert_TCompra();
    var DatosPromo = GetInsertPromo(DatosTCliente, DatosTCompra, 0);

    var obja = JSON.stringify({
        objPromo: DatosPromo, lstTCliente: DatosTCliente, lstTCompra: DatosTCompra
    });

    $.ajax({
        type: "POST",
        url: "PromocionUnica_TipoCompra.aspx/RegistroPromo_Paquete",
        data: obja,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
            ErrorMessage("Ocurrió un error, vuelva a intentarlo");
        },
        success: function (response) {
            alertme('Promoción Registrada');
            sendDataAjax();
        }
    });
}

function GetInsertPromo(lstTCliente, lstTCompra, idPromo) {
    var DatosObject = {};
    DatosObject['Estado'] = document.getElementById("chkEstado").checked;
    DatosObject['Obligatorio'] = document.getElementById("chkObligatorio").checked;
    DatosObject['Maximo_uni'] = $("#txtMaxUnidades").val();
    DatosObject['IdProductoXPais'] = $("#cboProducto").val();
    DatosObject['Pais'] = $("#cboPais").val();
    DatosObject['IdPromoU'] = idPromo;
    DatosObject['CadenaTCompra'] = GetCadena_TCompra(lstTCompra);
    DatosObject['CadenaTCliente'] = GetCadena_TCliente(lstTCliente);

    return DatosObject;
}

function GetInsert_TCliente() {
    var ArrayTCliente = [];

    for (var i = 0; i < 4; i++) {

        var DatosObject = {};

        if (i == 0 && document.getElementById("chkSocio").checked) {
            DatosObject['TipoCliente'] = "01";
        } else if (i == 1 && document.getElementById("chkConsultor").checked) {
            DatosObject['TipoCliente'] = "05";
        } else if (i == 2 && document.getElementById("chkC_Inteligente").checked) {
            DatosObject['TipoCliente'] = "03";
        } else if (i == 3 && document.getElementById("chkTC_VD").checked) {
            DatosObject['TipoCliente'] = "11";
        }

        if (Object.keys(DatosObject).length != 0) {

            ArrayTCliente.push(DatosObject);
        }
    }

    if (ArrayTCliente.length == 0) {
        var DatosObject = {};
        DatosObject['TipoCliente'] = "00";
        ArrayTCliente.push(DatosObject);
    }

    return ArrayTCliente;
}

function GetInsert_TCompra() {
    var ArrayTCompra = [];

    for (var i = 0; i < 22; i++) {

        var DatosObject = {};

        if (i == 0 && document.getElementById("chkBasico").checked) {
            DatosObject['TipoCompra'] = "01";
        } else if (i == 1 && document.getElementById("chkProfesional").checked) {
            DatosObject['TipoCompra'] = "02";
        } else if (i == 2 && document.getElementById("chkEmpresarial").checked) {
            DatosObject['TipoCompra'] = "03";
        } else if (i == 3 && document.getElementById("chkMillonario").checked) {
            DatosObject['TipoCompra'] = "04";
        } else if (i == 4 && document.getElementById("chkImperial").checked) {
            DatosObject['TipoCompra'] = "23";
        } else if (i == 5 && document.getElementById("chkNetworker").checked) {
            DatosObject['TipoCompra'] = "30";
        } else if (i == 6 && document.getElementById("chkAf_ConsultorMLM").checked) {
            DatosObject['TipoCompra'] = "05";
        } else if (i == 7 && document.getElementById("chkAf_Inteligente").checked) {
            DatosObject['TipoCompra'] = "06";
        } else if (i == 8 && document.getElementById("chkConsumo").checked) {
            DatosObject['TipoCompra'] = "07";
        } else if (i == 9 && document.getElementById("chkBasico_Profesional").checked) {
            DatosObject['TipoCompra'] = "08";
        } else if (i == 10 && document.getElementById("chkBasico_Empresarial").checked) {
            DatosObject['TipoCompra'] = "09";
        } else if (i == 11 && document.getElementById("chkBasico_Millonario").checked) {
            DatosObject['TipoCompra'] = "10";
        } else if (i == 12 && document.getElementById("chkBasico_Imperial").checked) {
            DatosObject['TipoCompra'] = "24";
        } else if (i == 13 && document.getElementById("chkProfesional_Empresarial").checked) {
            DatosObject['TipoCompra'] = "11";
        } else if (i == 14 && document.getElementById("chkProfesional_Millonario").checked) {
            DatosObject['TipoCompra'] = "12";
        } else if (i == 15 && document.getElementById("chkProfesional_Imperial").checked) {
            DatosObject['TipoCompra'] = "25";
        } else if (i == 16 && document.getElementById("chkEmpresarial_Millonario").checked) {
            DatosObject['TipoCompra'] = "13";
        } else if (i == 17 && document.getElementById("chkEmpresarial_Imperial").checked) {
            DatosObject['TipoCompra'] = "26";
        } else if (i == 18 && document.getElementById("chkMillonario_Imperial").checked) {
            DatosObject['TipoCompra'] = "27";
        } else if (i == 19 && document.getElementById("chkNetworker_Millonario").checked) {
            DatosObject['TipoCompra'] = "31";
        } else if (i == 20 && document.getElementById("chkNetworker_Imperial").checked) {
            DatosObject['TipoCompra'] = "32";
        } else if (i == 21 && document.getElementById("chkVD").checked) {
            DatosObject['TipoCompra'] = "29";
        }

        if (Object.keys(DatosObject).length != 0) {
            ArrayTCompra.push(DatosObject);
        }
    }

    if (ArrayTCompra.length == 0) {
        var DatosObject = {};
        DatosObject['TipoCompra'] = "00";
        ArrayTCompra.push(DatosObject);
    }

    return ArrayTCompra;
}

function GetCadena_TCliente(lstTCliente) {
    var cadena = "";

    for (var i = 0; i < lstTCliente.length; i++) {
        cadena += (i != 0) ? " - " : "";
        cadena += lstTCliente[i].TipoCliente;
    }

    return cadena;
}

function GetCadena_TCompra(lstTCompra) {
    var cadena = "";

    for (var i = 0; i < lstTCompra.length; i++) {
        cadena += (i != 0) ? " - " : "";
        cadena += lstTCompra[i].TipoCompra;
    }

    return cadena;
}

// ACTUALIZAR
$(document).on('click', '.btn-update', function (e) {
    $("#btnRegistrar").hide();
    $("#btnActualizar").show();
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    var data = tabla.fnGetData(row);
    idPromo = data[0];
    listaDatosPromo(data[0]);
});

function listaDatosPromo(idPromo) {

    var obj = JSON.stringify({
        idPromoU: idPromo
    });

    $.ajax({
        type: "POST",
        url: "PromocionUnica_TipoCompra.aspx/Lista_Detalle_PromoU_Paquetes",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            fillModalData(data.d);
        }
    });
}

function fillModalData(data) {
    listaPaises();
    $("#cboPais").val(data[0].Pais);
    listaProductos();
    $("#cboProducto").val(data[0].IdProductoXPais);
    $("#chkEstado").prop('checked', data[0].Estado).change();
    $("#chkObligatorio").prop('checked', data[0].Obligatorio).change();
    $("#txtMaxUnidades").val(data[0].Maximo_uni);
    var lstTClientes = data[0].lstPromoU_TClientes;
    var lstTCompras = data[0].lstPromoU_TCompras;

    for (var i = 0; i < lstTClientes.length; i++) {
        if (lstTClientes[i].TipoCliente == "01") {
            document.getElementById('chkSocio').checked = true;
        }
        else if (lstTClientes[i].TipoCliente == "05") {
            document.getElementById('chkConsultor').checked = true;
        }
        else if (lstTClientes[i].TipoCliente == "03") {
            document.getElementById('chkC_Inteligente').checked = true;
        }
        else if (lstTClientes[i].TipoCliente == "11") {
            document.getElementById('chkTC_VD').checked = true;
        }
    }

    for (var i = 0; i < lstTCompras.length; i++) {
        if (lstTCompras[i].TipoCompra == "01") {
            document.getElementById('chkBasico').checked = true;
        }
        else if (lstTCompras[i].TipoCompra == "02") {
            document.getElementById('chkProfesional').checked = true;
        }
        else if (lstTCompras[i].TipoCompra == "03") {
            document.getElementById('chkEmpresarial').checked = true;
        }
        else if (lstTCompras[i].TipoCompra == "04") {
            document.getElementById('chkMillonario').checked = true;
        }
        else if (lstTCompras[i].TipoCompra == "23") {
            document.getElementById('chkImperial').checked = true;
        }
        else if (lstTCompras[i].TipoCompra == "30") {
            document.getElementById('chkNetworker').checked = true;
        }
        else if (lstTCompras[i].TipoCompra == "29") {
            document.getElementById('chkVD').checked = true;
        }
        else if (lstTCompras[i].TipoCompra == "05") {
            document.getElementById('chkAf_ConsultorMLM').checked = true;
        }
        else if (lstTCompras[i].TipoCompra == "06") {
            document.getElementById('chkAf_Inteligente').checked = true;
        }
        else if (lstTCompras[i].TipoCompra == "07") {
            document.getElementById('chkConsumo').checked = true;
        }
        else if (lstTCompras[i].TipoCompra == "08") {
            document.getElementById('chkBasico_Profesional').checked = true;
        }
        else if (lstTCompras[i].TipoCompra == "09") {
            document.getElementById('chkBasico_Empresarial').checked = true;
        }
        else if (lstTCompras[i].TipoCompra == "10") {
            document.getElementById('chkBasico_Millonario').checked = true;
        }
        else if (lstTCompras[i].TipoCompra == "24") {
            document.getElementById('chkBasico_Imperial').checked = true;
        }
        else if (lstTCompras[i].TipoCompra == "11") {
            document.getElementById('chkProfesional_Empresarial').checked = true;
        }
        else if (lstTCompras[i].TipoCompra == "12") {
            document.getElementById('chkProfesional_Millonario').checked = true;
        }
        else if (lstTCompras[i].TipoCompra == "25") {
            document.getElementById('chkProfesional_Imperial').checked = true;
        }
        else if (lstTCompras[i].TipoCompra == "13") {
            document.getElementById('chkEmpresarial_Millonario').checked = true;
        }
        else if (lstTCompras[i].TipoCompra == "26") {
            document.getElementById('chkEmpresarial_Imperial').checked = true;
        }
        else if (lstTCompras[i].TipoCompra == "27") {
            document.getElementById('chkMillonario_Imperial').checked = true;
        }
        else if (lstTCompras[i].TipoCompra == "31") {
            document.getElementById('chkNetworker_Millonario').checked = true;
        }
        else if (lstTCompras[i].TipoCompra == "32")  {
            document.getElementById('chkNetworker_Imperial').checked = true;
        }
    }
}

$("#btnActualizar").click(function (e) {
    e.preventDefault();
    const validacion = ValidarCampos();

    if (validacion) {
        updatePromo();
    }
});

function updatePromo() {
    var DatosTCliente = GetInsert_TCliente();
    var DatosTCompra = GetInsert_TCompra();
    var DatosPromo = GetInsertPromo(DatosTCliente, DatosTCompra, idPromo);


    var obj = JSON.stringify({
        objPromo: DatosPromo, lstTCliente: DatosTCliente, lstTCompra: DatosTCompra
    });

    $.ajax({
        type: "POST",
        url: "PromocionUnica_TipoCompra.aspx/ActualizarPromo_Paquete",
        data: obj,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
            ErrorMessage("Ocurrió un error, vuelva a intentarlo");
        },
        success: function (response) {
            alertme('Promoción Actualizada');
            sendDataAjax();
        }
    });
}

// ELIMINAR
$(document).on('click', '.btn-delete', function (e) {
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    var data = tabla.fnGetData(row);
    EliminarPromocion(data);
});

function EliminarPromocion(data) {

    var obj = JSON.stringify({
        idPromo: data[0]
    });

    $.ajax({
        type: "POST",
        url: "PromocionUnica_TipoCompra.aspx/EliminarPromo_Unica_TC",
        data: obj,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            alertme('Promoción Eliminada');
        }
    });
}


/*Alertas */
function alertme(msg) {
    Swal.fire({
        title: 'Perfecto!',
        text: msg,
        type: "success"
    }).then(function () {
        $('#btnCancelar').click();
        $('.modal-backdrop').remove();
        sendDataAjax();
    });
}

function ErrorMessage(mnsj) {
    Swal.fire({
        title: 'Ooops...!',
        text: mnsj,
        type: "error"
    });
}