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
            obj[i].IdPromo,
            obj[i].NombreProducto,
            obj[i].Fecha,
            pais,
            '<button title="Actualizar" class="btn btn-primary btn-update" data-toggle="modal" data-target="#exampleModal"><i class="far fa-edit"></i></button>',
            '<button value="Eliminar" title="Eliminar" class="btn btn-danger btn-delete"><i class="far fa-minus-square"></i></button>',
            obj[i].Pais,

        ]);
    }
}

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "PromocionUnica_TipoCompra.aspx/Lista_Promo_Unica_TC_X_Productos",
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
    var DatosObject = {};
    DatosObject['Estado'] = document.getElementById("chkEstado").checked;
    DatosObject['Maximo_uni'] = $("#txtMaxUnidades").val();
    DatosObject['Tipo_Compra'] = $("#cboTipoCompra").val();


    var obja = JSON.stringify({
        objPromo_X_Producto: DatosObject, idProductoXPais: $("#cboProducto").val(), Pais: $("#cboPais").val()
    });

    $.ajax({
        type: "POST",
        url: "PromocionUnica_TipoCompra.aspx/RegistroPromo_Unica_TC",
        data: obja,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            alertme('Promoción Registrada');
        }
    });
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
        IdPromo: idPromo
    });

    $.ajax({
        type: "POST",
        url: "PromocionUnica_TipoCompra.aspx/Lista_Datos_Promo_Unica_TC",
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
    $("#txtMaxUnidades").val(data[0].Maximo_uni);
    $("#cboTipoCompra").val(data[0].Tipo_Compra);
}

$("#btnActualizar").click(function (e) {
    e.preventDefault();
    const validacion = ValidarCampos();

    if (validacion) {
        updatePromo();
    }
});

function updatePromo() {
    var DatosObject = {};
    DatosObject['Estado'] = document.getElementById("chkEstado").checked;
    DatosObject['Maximo_uni'] = $("#txtMaxUnidades").val();
    DatosObject['Tipo_Compra'] = $("#cboTipoCompra").val();


    var obj = JSON.stringify({
        objPromo: DatosObject, idProductoXPais: $("#cboProducto").val(), idPromo: idPromo, Pais: $("#cboPais").val()
    });

    $.ajax({
        type: "POST",
        url: "PromocionUnica_TipoCompra.aspx/ActualizarPromo_Unica_TC",
        data: obj,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            alertme('Promoción Actualizada');
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