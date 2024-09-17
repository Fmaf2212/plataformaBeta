var tabla, dataR, objDetalle, imagenOK, nameImage, nameDetailImage, nowImage, nowDetailImage;

sendDataAjax();

tabla = $("#tbl_productos").DataTable();

function sendDataAjax() {
    $.ajax({
        type: "POST",
        //url: "GestionarProductos.aspx/ListaProductos",
        url: "https://api.mundosantanatura.com/api/StoreEvents/GetProductsHeaderQR",
        data: {},
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            addRowDT(data.data);
        }
    });
}

function addRowDT(obj) {

    tabla.fnClearTable();
    for (var i = 0; i < obj.length; i++) {
        var estados = (obj[i].estado_Activacion == true) ? "Activo" : "Desactivado";
        tabla.fnAddData([
            obj[i].idProducto,
            obj[i].linea,
            obj[i].nombre,
            '<img src="https://tienda.mundosantanatura.com/products/' + obj[i].imagen + '" style="height: 80px">',
            obj[i].puntaje,
            obj[i].precio,
            estados,
            obj[i].pais,
            '<button id="Actualizar" value="Actualizar" title="Actualizar" class="btn btn-primary btn-update" data-toggle="modal" data-target="#exampleModal"><i class="far fa-edit"></i></button>',
            '<button value="Eliminar" title="Eliminar" class="btn btn-danger btn-delete"><i class="far fa-minus-square"></i></button>',
            obj[i].imagen
        ]);
    }
}

//CARGA DE COMBOS Y TEXTO
function CargarLinea() {
    $.ajax({
        type: "POST",
        url: "https://api.mundosantanatura.com/api/Room/GetLine",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#cboLinea").empty();
            $("#cboLinea").append("<option value='0'>--Select--</option>");
            $("#cboLineaCDR").empty();
            $("#cboLineaCDR").append("<option value='0'>--Select--</option>");
            $.each(result.data, function (key, value) {
                $("#cboLinea").append($("<option></option>").val(value.idLinea).html(value.nom_Linea));
                $("#cboLineaCDR").append($("<option></option>").val(value.idLinea).html(value.nom_Linea));
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
}

function CargarPaquete() {
    $.ajax({
        type: "POST",
        url: "https://api.mundosantanatura.com/api/Room/GetPackete",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#cboPaquete").empty();
            $("#cboPaquete").append("<option value='0'>--Select--</option>");
            $.each(result.data, function (key, value) {
                $("#cboPaquete").append($("<option></option>").val(value.idPackete).html(value.nom_Packete));
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
}

function CargarPais() {
    $.ajax({
        type: "POST",
        url: "SociosRed.aspx/GetPais",
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

function CodigoGenerado() {
    $.ajax({
        type: "POST",
        url: "https://api.mundosantanatura.com/api/Room/GenerateProduct",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#txtCodigo").val(result.data);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
}

// ABRIR MODAL
$("#btnNuevoProducto").click(function (e) {

    $("#btnRegistrar").show();
    $("#btnActualizar").hide();
    $("#exampleModal input").val("");
    $("#exampleModal textarea").val("");
    $("#exampleModal select").val("0");
    CodigoGenerado();
    CargarLinea();
    CargarPaquete();
    CargarPais();
    $("#cboLinea").val("01");
    $("#cboPresentacion").val("01");
    $("#cboCanal").val("01");
    $("#cboPais").val("01");
    $("#cboLineaCDR").val("01");
    $("#cboUnidad").val("1");
    $('input').iCheck('uncheck');
    $("#exampleModal input[type='checkbox']").prop('checked', false).change();
    $("#chkPromo").prop('checked', true).change();
    $("#chkStockPromo").prop('checked', true).change();
    // other initialization here, if you want to

    $('.file-upload').file_upload();
    $('.file-upload-text').text("Ingrese la imagen ...");
    $('.solo-numero').numeric();
});

//FUNCIONES PARA REGISTRAR
$("#btnRegistrar").click(function (e) {
    var medida = $("#cboUnidad").val();
    var peru = $("#txtNombreProdPeru").val();
    var contenido = $("#txtPeso").val();
    var unidadPresentacion = $("#txtUnidadPresentacion").val();
    var precio = $("#txtPrecioBase").val();
    var linea = $("#cboLinea").val();
    var puntos = $("#txtPuntosProdPeru").val();
    var presentacion = $("#cboPresentacion").val();
    var preciocdr = $("#txtPecioCDR").val();
    var corazones = $("#txtCorazones").val();
    e.preventDefault();

    if (peru == "") {
        FaltaNombre();
    } else if (corazones == "") {
        Error("Debe rellenar el campo de Corazones");
    } else if (linea == "0") {
        FaltaLinea();
    } else if (medida == "0") {
        FaltaMedida();
    } else if (contenido == "") {
        FaltaContenido();
    } else if (presentacion == "0") {
        FaltaPresentacion();
    } else if (precio == "") {
        FaltaPrecio();
    } else if (preciocdr == "") {
        FaltaPrecioCDR();
    } else if (puntos == "") {
        FaltaPuntos();
    } else if (unidadPresentacion == "") {
        FaltaUnidadPresentacion();
    } else {
        SubirImagen();
    }
});

async function SubirImagen() {

    var cant_Min = document.getElementById('imgPeru').files.length;
    var cant_Det = document.getElementById('imgDetalle').files.length;
    var fileUpload, files, extension;

    if (cant_Min > 0) {
        fileUpload = $("#imgPeru").get(0);
        files = fileUpload.files;
        extension = files[0].name.split('.').pop();
        nameImage = await UploadFile(files[0].name, files[0], "products", extension, "Register");
    }

    if (cant_Det > 0) {
        fileUpload = $("#imgDetalle").get(0);
        files = fileUpload.files;
        extension = files[0].name.split('.').pop();
        nameDetailImage = await UploadFile(files[0].name, files[0], "productsDetails", extension, "Register");
    }

    RegistroProducto();
}

async function UploadFile(fileName, file, type, extension, proceso) {

    var data = new FormData();
    data.append(fileName, file);
    data.append("archivo", type);
    data.append("extension", extension);

    try {
        result = await $.ajax({
            url: "FileUploadProduct.ashx",
            type: 'POST',
            data: data,
            contentType: false,
            processData: false,
        });

        return result.fileNameR;
    } catch (error) {
        console.error(error);
    }

    //$.ajax({
    //    url: "FileUploadProduct.ashx",
    //    type: "POST",
    //    data: data,
    //    contentType: false,
    //    processData: false,
    //    success: function (result) {
    //        return result.fileNameR;
    //        var r = result;
    //        if (proceso == "Register") {
    //            //RegistroProducto();
    //        }
    //        else {
    //            //updateDataAjax();
    //        }
    //    },
    //    error: function (err) {
    //        alert(err.statusText)
    //    }
    //});
}

function RegistroProducto() {
    var imagenPro, imagenProDetail;

    var valida = document.getElementById('imgPeru').files.length;
    var validaDetail = document.getElementById('imgDetalle').files.length;
    imagenPro = (valida == 0) ? "" : nameImage;
    imagenProDetail = (validaDetail == 0) ? "" : nameDetailImage;

    var productAction = {};
    var productCountryAction = {};

    /*CREACION DE LISTA DE PRODUCTOS POR PAIS*/
    if ($("#txtNombreProdPeru").val() != "") {
        productAction['idProducto'] = $("#txtCodigo").val();
        productAction['unidadMedida'] = $("#cboUnidad option:selected").text();
        productAction['contenido'] = $("#txtPeso").val();
        productAction['idPresentacion'] = $("#cboPresentacion").val();
        productAction['unidadesPresentacion'] = $("#txtUnidadPresentacion").val();
        productAction['descripcion'] = $("#txtDescripcion").val();
        productAction['idLinea'] = $("#cboLinea").val();
        productAction['precioUnitario'] = $("#txtPrecioBase").val();
        productAction['puntos'] = $("#txtPuntosProdPeru").val();
        productAction['idPaquete'] = $("#cboPaquete").val();
        productAction['precioYW'] = $("#txtPecioCDR").val();
        productAction['estado_VistaYW'] = document.getElementById("chkPromo").checked;
        productAction['puntosPromocion'] = $("#txtPuntosPromocion").val();
        productAction['lineaYW'] = $("#cboLineaCDR").val();
        productAction['corazones'] = $("#txtCorazones").val();
        productAction['idCanal'] = $("#cboCanal").val();
        productAction['pais'] = $("#cboPais").val();

        productCountryAction['incrementoPVP'] = 0.0;
        productCountryAction['imagen'] = imagenPro;
        productCountryAction['imagenDetalle'] = imagenProDetail;
        productCountryAction['nombre'] = $("#txtNombreProdPeru").val();
        productCountryAction['idPeruShop'] = $("#txtIdPeruShopPeru").val();
        productCountryAction['beneficios'] = $("#txtBeneficios").val();
        productCountryAction['ingredientes'] = $("#txtIngredientes").val();
        productCountryAction['consumo'] = $("#txtConsumo").val();
        productCountryAction['estado_Promocion'] = document.getElementById("chkStockPromo").checked;
        productCountryAction['estado_Activacion'] = document.getElementById("tooglePeru").checked;
        productCountryAction['idProducto'] = $("#txtCodigo").val();
        productCountryAction['pais'] = $("#cboPais").val();
    }

    /** CIERRE */

    var obja = JSON.stringify({
        productAction, productCountryAction
    });

    $.ajax({
        type: "POST",
        url: "https://api.mundosantanatura.com/api/Room/RegisterProduct",
        data: obja,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            alertme();
        }
    });
}

//Actualizar Producto

$(document).on('click', '.btn-update', function (e) {
    $("#exampleModal input").val("");
    $("#btnRegistrar").hide();
    $("#btnActualizar").show();
    $("#exampleModal input[type='checkbox']").prop('checked', false).change();
    $('.file-upload').file_upload();
    $('.file-upload-text').text("Ingrese la imagen ...");
    CargarLinea();
    CargarPaquete();
    CargarPais();
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    dataR = tabla.fnGetData(row);
    sendDataAjaxDetalle(dataR[0]);
});

function sendDataAjaxDetalle(id) {

    var obj = JSON.stringify({
        idProduct: id
    });

    $.ajax({
        type: "POST",
        url: "https://api.mundosantanatura.com/api/StoreEvents/GetProductsDataQR",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            objDetalle = data.data;
            fillModalData(data.data);
        }
    });
}

function fillModalData(obj) {
    var medida, valPackete;
    medida = (obj.unidadMedida == "GR.") ? "1" :
        (obj.unidadMedida == "KG.") ? "2" : "3";
    valPackete = (obj.idPaquete == "") ? "0" : obj.idPaquete;

    $("#txtCodigo").val(dataR[0]);
    $("#txtDescripcion").val(obj.descripcion);
    $("#cboLinea").val(obj.idLinea);
    $("#cboLineaCDR").val(obj.lineaYW);
    $("#cboCanal").val(obj.idCanal);
    $("#cboPais").val(obj.idPais);
    $("#cboUnidad").val(medida);
    $("#txtPeso").val(obj.contenido);
    $("#cboPresentacion").val(obj.idPresentacion);
    $("#txtPrecioBase").val(dataR[5]);
    $("#txtUnidadPresentacion").val(obj.unidadesPresentacion);
    $("#txtPuntosProdPeru").val(dataR[4]);
    $("#chkPromo").prop("checked", obj.estado_VistaYW).change();
    $("#chkStockPromo").prop("checked", obj.estado_Promocion).change();
    $("#cboPaquete").val(valPackete);
    $("#txtPecioCDR").val(obj.precioYW);
    $("#txtPuntosPromocion").val(obj.puntosPromocion);
    $("#txtCorazones").val(obj.corazones);
    $("#txtBeneficios").val(obj.beneficios);
    $("#txtIngredientes").val(obj.ingredientes);
    $("#txtConsumo").val(obj.consumo);
    $("#txtNombreProdPeru").val(dataR[2]);
    $("#txtIdPeruShopPeru").val(obj.idPeruShop);
    $("#txtAumentoPeru").val("");
    $("#tooglePeru").prop('checked', obj.estado_Activacion).change();
}

$("#btnActualizar").click(function (e) {
    SubirImagenUpdate(e);
});

async function SubirImagenUpdate(e) {
    e.preventDefault();
    var cant_Min = document.getElementById('imgPeru').files.length;
    var cant_Det = document.getElementById('imgDetalle').files.length;
    var fileUpload, files, extension;

    if (cant_Min > 0) {
        if (objDetalle.imagen != "") {
            DeleteFile(objDetalle.imagen, "products");
        }

        fileUpload = $("#imgPeru").get(0);
        files = fileUpload.files;
        extension = files[0].name.split('.').pop();
        nameImage = await UploadFile(files[0].name, files[0], "products", extension, "Update");
    }

    if (cant_Det > 0) {

        if (objDetalle.imagenDetalle != "") {
            DeleteFile(objDetalle.imagenDetalle, "productsDetails");
        }

        fileUpload = $("#imgDetalle").get(0);
        files = fileUpload.files;
        extension = files[0].name.split('.').pop();
        nameDetailImage = await UploadFile(files[0].name, files[0], "productsDetails", extension, "Update");
    }

    updateDataAjax();
}

function updateDataAjax() {

    var imagenPro, imagenProDetail;

    var valida = document.getElementById('imgPeru').files.length;
    var validaDetail = document.getElementById('imgDetalle').files.length;
    imagenPro = (valida == 0) ? objDetalle.imagen : nameImage;
    imagenProDetail = (validaDetail == 0) ? objDetalle.imagenDetalle : nameDetailImage;

    var productAction = {};
    var productCountryAction = {};

    /*CREACION DE LISTA DE PRODUCTOS POR PAIS*/
    if ($("#txtNombreProdPeru").val() != "") {
        productAction['idProducto'] = $("#txtCodigo").val();
        productAction['unidadMedida'] = $("#cboUnidad option:selected").text();
        productAction['contenido'] = $("#txtPeso").val();
        productAction['idPresentacion'] = $("#cboPresentacion").val();
        productAction['unidadesPresentacion'] = $("#txtUnidadPresentacion").val();
        productAction['descripcion'] = $("#txtDescripcion").val();
        productAction['idLinea'] = $("#cboLinea").val();
        productAction['precioUnitario'] = $("#txtPrecioBase").val();
        productAction['puntos'] = $("#txtPuntosProdPeru").val();
        productAction['idPaquete'] = $("#cboPaquete").val();
        productAction['precioYW'] = $("#txtPecioCDR").val();
        productAction['estado_VistaYW'] = document.getElementById("chkPromo").checked;
        productAction['puntosPromocion'] = $("#txtPuntosPromocion").val();
        productAction['lineaYW'] = $("#cboLineaCDR").val();
        productAction['corazones'] = $("#txtCorazones").val();
        productAction['idCanal'] = $("#cboCanal").val();
        productAction['pais'] = $("#cboPais").val();

        productCountryAction['idProductoPais'] = objDetalle.idProductoPais;
        productCountryAction['incrementoPVP'] = 0.0;
        productCountryAction['imagen'] = imagenPro;
        productCountryAction['imagenDetalle'] = imagenProDetail;
        productCountryAction['nombre'] = $("#txtNombreProdPeru").val();
        productCountryAction['idPeruShop'] = $("#txtIdPeruShopPeru").val();
        productCountryAction['beneficios'] = $("#txtBeneficios").val();
        productCountryAction['ingredientes'] = $("#txtIngredientes").val();
        productCountryAction['consumo'] = $("#txtConsumo").val();
        productCountryAction['estado_Promocion'] = document.getElementById("chkStockPromo").checked;
        productCountryAction['estado_Activacion'] = document.getElementById("tooglePeru").checked;
        productCountryAction['pais'] = $("#cboPais").val();
    }

    /** CIERRE */

    var obj = JSON.stringify({
        productAction, productCountryAction
    });

    $.ajax({
        type: "POST",
        url: "https://api.mundosantanatura.com/api/Room/UpdateProduct",
        data: obj,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            Swal.fire({
                title: 'Perfecto!',
                text: 'Producto Actualizado',
                type: "success"
            }).then(function () {
                window.location = "GestionarProductosQR.aspx";
            });
        }
    });
}

//FUNCIONES PARA ELIMINAR

$(document).on('click', '.btn-delete', function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Estás seguro de eliminar el producto?',
        text: "Esto no puede revertirse!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
        if (result.isConfirmed) {
            var row = $(this).parent().parent()[0];
            var dataRow = tabla.fnGetData(row);
            var dataid = dataRow[0];
            var x = dataRow[10];
            DeleteFile(x, "products");
            deleteDataAjax(dataid);
        }
    });
});

function deleteDataAjax(dataid) {

    var obj = JSON.stringify({ idProduct: dataid });

    $.ajax({
        type: "POST",
        url: "https://api.mundosantanatura.com/api/Room/DeleteProduct",
        data: obj,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            sendDataAjax();
            if (response.data == true) { EliminadoCorrecto(); }
            else { NoPermisos(); }
        }
    });
}

function DeleteFile(x, direction) {

    var obj = JSON.stringify({ imagen: x, direction: direction });

    $.ajax({
        url: "GestionarProductosQR.aspx/EliminarImagen",
        type: "POST",
        data: obj,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            console.log(response);
        }
    });
}

//ALERTAS
function alertme() {
    Swal.fire({
        title: 'Perfecto!',
        text: 'Producto Registrado',
        type: "success"
    }).then(function () {
        window.location = "GestionarProductosQR.aspx";
    });
}
function EliminadoCorrecto() {
    Swal.fire({
        title: 'Perfecto!',
        text: 'Producto Eliminado',
        type: "success"
    });
}
function FaltaMedida() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró el campo Unidad de Medida',
        type: "error"
    });
}
function FaltaNombre() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró el Nombre del Producto',
        type: "error"
    });
}
function FaltaContenido() {

    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró el campo Contenido',
        type: "error"
    });
}
function FaltaPrecio() {

    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró el campo Precio',
        type: "error"
    });
}
function FaltaPrecioCDR() {

    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró el campo PrecioCDR',
        type: "error"
    });
}
function FaltaLinea() {

    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró el campo Linea',
        type: "error"
    });
}
function FaltaPuntos() {

    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró el campo Puntos',
        type: "error"
    });
}
function FaltaPresentacion() {

    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró el campo Presentación',
        type: "error"
    });
}
function FaltaUnidadPresentacion() {

    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró el campo Unidad Presentación',
        type: "error"
    });
}
function ImagenRepetida() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'El nombre de la imagen ya existe',
        type: "error"
    });
}
function NoPermisos() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'Usted no tiene permisos para realizar esta acción',
        type: "error"
    });
}
function Error(mssg) {
    Swal.fire({
        title: 'Ooops...!',
        text: mssg,
        type: "error"
    });
}