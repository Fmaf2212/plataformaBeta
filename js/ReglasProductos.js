var idRegla = 0, tabla;

$("#cboPais").change(function () {
    $.ajax({
        type: "POST",
        url: "ReglasProductosVD.aspx/ListaProductoReglasVD",
        data: JSON.stringify({ Pais: this.value}),
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
        url: "ReglasProductosVD.aspx/GetPais",
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
        url: "ReglasProductosVD.aspx/ListaProductoReglasVD",
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

function listaPeriodos() {
    $.ajax({
        type: "POST",
        url: "ReglasProductosVD.aspx/ListarPeriodoComisionMayorIgualActual",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#cboPeriodoConsultor").empty();
            $("#cboPeriodoPatrocinador").empty();
            $.each(result.d, function (key, value) {
                $("#cboPeriodoConsultor").append($("<option></option>").val(value.idPeriodoComision).html(value.nombre));
                $("#cboPeriodoPatrocinador").append($("<option></option>").val(value.idPeriodoComision).html(value.nombre));
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
}

function addRowDT(obj) {
    tabla = $("#tbl_regla").DataTable();
    tabla.fnClearTable();

    for (var i = 0; i < obj.length; i++) {
        const pais = (obj[i].Pais == '01') ? 'Perú' :
                    (obj[i].Pais == '02') ? 'Bolivia' : '';
        tabla.fnAddData([
            obj[i].IdRegla,
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
        url: "ReglasProductosVD.aspx/Lista_Reglas_X_Productos",
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
    var maxUniCon = $("#txtUnidadesConsultor").val();
    var antiguedadCon = $("#txtAntiguedadConsultor").val();
    var maxUniPatro = $("#txtUnidadesPatrocinador").val();
    var antiguedadPatro = $("#txtAntiguedadPatrocinador").val();

    if (maxUniCon == "") {
        return ErrorMessage("Debe rellenar el campo unidad máxima del Consultor");
    } else if (antiguedadCon == "") {
        return ErrorMessage("Debe rellenar el campo antiguedad del Consultor");
    } else if (maxUniPatro == "") {
        return ErrorMessage("Debe rellenar el campo máxima del Patrocinador");
    } else if (antiguedadPatro == "") {
        return ErrorMessage("Debe rellenar el campo antiguedad del Patrocinador");
    } else {
        return true;
    }
}

// REGISTRO
$("#btnNuevaRegla").click(function (e) {
    listaPaises();
    listaProductos();
    listaPeriodos();
    $("#btnRegistrar").show();
    $("#btnActualizar").hide();
    $("#exampleModal input").val("");
    $("#exampleModal input[type='checkbox']").prop('checked', false).change();
});

$("#btnRegistrar").click(function (e) {
    const validacion = ValidarCampos();

    if (validacion) {
        RegistroReglas();
    }
});

function RegistroReglas() {
    var DatosObject = {};
    DatosObject['Estado_Consultor'] = document.getElementById("chkEstadoConsultor").checked;
    DatosObject['Maximo_uni_Consultor'] = $("#txtUnidadesConsultor").val();
    DatosObject['Periodo_Comi_Consultor'] = $("#cboPeriodoConsultor").val();
    DatosObject['Antiguedad_Consultor'] = $("#txtAntiguedadConsultor").val();
    DatosObject['Estado_Patrocinador'] = document.getElementById("chkEstadoPatrocinador").checked;
    DatosObject['Maximo_uni_Patrocinador'] = $("#txtUnidadesPatrocinador").val();
    DatosObject['Periodo_Comi_Patrocinador'] = $("#cboPeriodoPatrocinador").val();
    DatosObject['Antiguedad_Patrocinador'] = $("#txtAntiguedadPatrocinador").val();


    var obja = JSON.stringify({
        objReglas_X_Producto: DatosObject, idProductoXPais: $("#cboProducto").val(), Pais: $("#cboPais").val()
    });

    $.ajax({
        type: "POST",
        url: "ReglasProductosVD.aspx/RegistroReglasProductosVD",
        data: obja,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            alertme('Regla Registrada');
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
    idRegla = data[0];
    listaDatosRegla(data[0]);
});

function listaDatosRegla(idRegla) {

    var obj = JSON.stringify({
        IdRegla: idRegla
    });

    $.ajax({
        type: "POST",
        url: "ReglasProductosVD.aspx/Lista_Datos_Regla_VD",
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
    listaPeriodos();
    $("#chkEstadoConsultor").prop('checked', data[0].Estado_Consultor).change();
    $("#txtUnidadesConsultor").val(data[0].Maximo_uni_Consultor);
    $("#cboPeriodoConsultor").val(data[0].Periodo_Comi_Consultor);
    $("#txtAntiguedadConsultor").val(data[0].Antiguedad_Consultor);
    $("#chkEstadoPatrocinador").prop('checked', data[0].Estado_Patrocinador).change();
    $("#txtUnidadesPatrocinador").val(data[0].Maximo_uni_Patrocinador);
    $("#cboPeriodoPatrocinador").val(data[0].Periodo_Comi_Patrocinador);
    $("#txtAntiguedadPatrocinador").val(data[0].Antiguedad_Patrocinador);
}

$("#btnActualizar").click(function (e) {
    e.preventDefault();
    const validacion = ValidarCampos();

    if (validacion) {
        updateReglas();
    }
});

function updateReglas() {
    var DatosObject = {};
    DatosObject['Estado_Consultor'] = document.getElementById("chkEstadoConsultor").checked;
    DatosObject['Maximo_uni_Consultor'] = $("#txtUnidadesConsultor").val();
    DatosObject['Periodo_Comi_Consultor'] = $("#cboPeriodoConsultor").val();
    DatosObject['Antiguedad_Consultor'] = $("#txtAntiguedadConsultor").val();
    DatosObject['Estado_Patrocinador'] = document.getElementById("chkEstadoPatrocinador").checked;
    DatosObject['Maximo_uni_Patrocinador'] = $("#txtUnidadesPatrocinador").val();
    DatosObject['Periodo_Comi_Patrocinador'] = $("#cboPeriodoPatrocinador").val();
    DatosObject['Antiguedad_Patrocinador'] = $("#txtAntiguedadPatrocinador").val();


    var obj = JSON.stringify({
        objReglasVD: DatosObject, idProductoXPais: $("#cboProducto").val(), idRegla: idRegla, Pais: $("#cboPais").val()
    });

    $.ajax({
        type: "POST",
        url: "ReglasProductosVD.aspx/ActualizarReglasProductosVD",
        data: obj,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            alertme('Regla Actualizada');
        }
    });
}

 // ELIMINAR
$(document).on('click', '.btn-delete', function (e) {
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    var data = tabla.fnGetData(row);
    EliminarRegla(data);
});

function EliminarRegla(data) {

    var obj = JSON.stringify({
        idRegla: data[0]
    });

    $.ajax({
        type: "POST",
        url: "ReglasProductosVD.aspx/EliminarReglasProductosVD",
        data: obj,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            alertme('Regla Eliminada');
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