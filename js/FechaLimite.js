//DEFINIR VARIABLES
var tabla, aaf, data, estados;
//LISTADO DE PUBLICACIONES
function addRowDT(obj) {
    tabla = $("#tbl_limite").DataTable();
    tabla.fnClearTable();

    for (var i = 0; i < obj.length; i++) {

        tabla.fnAddData([
            obj[i].idLimite,
            obj[i].numeroDias,
            obj[i].descripcion,
            '<button id="Actualizar" value="Actualizar" title="Actualizar" class="btn btn-primary btn-update" data-toggle="modal" data-target="#exampleModal"><i class="far fa-edit"></i></button>'
        ]);
    }
}

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "FechaLimiteCompras.aspx/ListaLimite",
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

//CARGAR DATOS EN MODAL
function fillModalData() {

    $("#txtNumero").val(data[1]);
    $("#txtDescripcion").val(data[2]);
}

// ABRIR MODAL
$("#btnNuevoLimmite").click(function (e) {
    $("#btnRegistrar").show();
    $("#btnActualizar").hide();
    $("#exampleModal input").val("");
});

//FUNCIONES PARA REGISTRAR
$("#btnRegistrar").click(function (e) {
    e.preventDefault();
    RegistroLimite();
});

function RegistroLimite() {
    var limite, descripcion;
    limite = $("#txtNumero").val();
    descripcion = $("#txtDescripcion").val();

    var obja = JSON.stringify({
        limiteSend: limite, descripcion: descripcion
    });

    $.ajax({
        type: "POST",
        url: "FechaLimiteCompras.aspx/RegistrarLimite",
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

//FUNCIONES PARA ACTUALIZAR
$(document).on('click', '.btn-update', function (e) {
    $("#btnRegistrar").hide();
    $("#btnActualizar").show();
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    data = tabla.fnGetData(row);
    fillModalData();
});

function updateDataAjax() {

    var limite, idLimite, descripcion;

    limite = $("#txtNumero").val();
    descripcion = $("#txtDescripcion").val();
    idLimite = data[0];

    var obj = JSON.stringify({
        idLimite: idLimite, limiteSend: limite, descripcion: descripcion
    });

    $.ajax({
        type: "POST",
        url: "FechaLimiteCompras.aspx/ActualizarLimite",
        data: obj,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            console.log(response);
            Swal.fire({
                title: 'Perfecto!',
                text: 'Limite Actualizado',
                type: "success"
            }).then(function () {
                window.location = "FechaLimiteCompras.aspx";
            });
        }
    });
}

$("#btnActualizar").click(function (e) {
    e.preventDefault();
    updateDataAjax();
});


//ALERTAS
function alertme() {
    Swal.fire({
        title: 'Perfecto!',
        text: 'Limite Registrado',
        type: "success"
    }).then(function () {
        window.location = "FechaLimiteCompras.aspx";
    });
}

sendDataAjax();