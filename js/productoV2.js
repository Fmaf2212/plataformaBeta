//DEFINIR VARIABLES
var tabla, aaf, data, data2, estados, imagenOK = 0, data4, listaPP, imgPeru = "", imgColombia = "", imgPanama = "",
    idpPeru = "", idpColombia = "", idpPanama = "", imgNameAPI = "";

//LISTADO DE PRODUCTOS
function addRowDT(obj) {
    tabla = $("#tbl_productos").DataTable();
    tabla.fnClearTable();
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].Estado == true) {
            estados = "Activo";
        } else {
            estados = "Desactivado";
        }
        var imagenProducto = obj[i].Foto;
        tabla.fnAddData([
            obj[i].IdProducto,
            obj[i].NombreLinea,
            obj[i].NombreProducto,
            '<img src="https://tienda.mundosantanatura.com/products/' + imagenProducto + '" style="height: 80px">',
            obj[i].Puntos,
            obj[i].PrecioUnitario,
            estados,
            obj[i].Name_Pais,
            '<button id="Actualizar" value="Actualizar" title="Actualizar" class="btn btn-primary btn-update" data-toggle="modal" data-target="#exampleModal"><i class="far fa-edit"></i></button>',
            '<button style="display:none;" value="Eliminar" title="Eliminar" class="btn btn-danger btn-delete"><i class="far fa-minus-square"></i></button>',
            obj[i].Linea,
            obj[i].ProductoPais,
            obj[i].UnidadMedida,
            obj[i].Contenido,
            obj[i].UnidadPresentacion,
            obj[i].Descripcion,
            obj[i].IncrementoPVP,
            obj[i].IdPresentacion,
            obj[i].NombrePresen,
            obj[i].Foto,
            obj[i].IdProductoPeruShop,
            obj[i].Paquete,
            obj[i].precioCDR,
            obj[i].Promocion,
            obj[i].PuntosPromocion,
            obj[i].LineaCDR,
            obj[i].Corazones,
            obj[i].Beneficios,
            obj[i].Ingredientes,
            obj[i].Consumo,
            obj[i].Prod_Promocion,
            obj[i].Canal,
            obj[i].Pais
        ]);
    }
}

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "GestionarProductos.aspx/ListaProductos",
        //url: "https://tienda.mundosantanatura.com/Autocompletado.asmx/ListaProductos",
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

//CARGA DE COMBOS Y TEXTO
function CargarLinea() {
    $.ajax({
        type: "POST",
        url: "GestionarProductos.aspx/GetLinea",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#cboLinea").empty();
            $("#cboLinea").append("<option value='0'>--Select--</option>");
            $("#cboLineaCDR").empty();
            $("#cboLineaCDR").append("<option value='0'>--Select--</option>");
            $.each(result.d, function (key, value) {
                $("#cboLinea").append($("<option></option>").val(value.idLinea).html(value.nombreLinea));
                $("#cboLineaCDR").append($("<option></option>").val(value.idLinea).html(value.nombreLinea));
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
        url: "GestionarProductos.aspx/GetPaquetes",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#cboPaquete").empty();
            $("#cboPaquete").append("<option value='0'>--Select--</option>");
            $.each(result.d, function (key, value) {
                $("#cboPaquete").append($("<option></option>").val(value.idPaquete).html(value.nombre));
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
}

function CargarPresentacion() {
    $.ajax({
        type: "POST",
        url: "GestionarProductos.aspx/GetPresentacion",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#cboPresentacion").empty();
            $("#cboPresentacion").append("<option value='0'>--Select--</option>");
            $.each(result.d, function (key, value) {
                $("#cboPresentacion").append($("<option></option>").val(value.idPresentacion).html(value.nombrePresentacion));
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
}

$.ajax({
    type: "POST",
    url: "GestionarProductos.aspx/GetLinea",
    data: "{}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    async: false,
    success: function (result) {
        $("#cboLinea").empty();
        $("#cboLineaCDR").empty();
        $.each(result.d, function (key, value) {
            $("#cboLinea").append($("<option></option>").val(value.idLinea).html(value.nombreLinea));
            $("#cboLineaCDR").append($("<option></option>").val(value.idLinea).html(value.nombreLinea));
        });
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus + ": " + XMLHttpRequest.responseText);
    }
});

$.ajax({
    type: "POST",
    url: "GestionarProductos.aspx/GetPresentacion",
    data: "{}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    async: false,
    success: function (result) {
        $("#cboPresentacion").empty();
        $.each(result.d, function (key, value) {
            $("#cboPresentacion").append($("<option></option>").val(value.idPresentacion).html(value.nombrePresentacion));
        });
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus + ": " + XMLHttpRequest.responseText);
    }
});

$.ajax({
    type: "POST",
    url: "GestionarProductos.aspx/GetPaquetes",
    data: "{}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    async: false,
    success: function (result) {
        $("#cboPaquete").empty();
        $("#cboPaquete").append("<option value='0'>--Select--</option>");
        $.each(result.d, function (key, value) {
            $("#cboPaquete").append($("<option></option>").val(value.idPaquete).html(value.nombre));
        });
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus + ": " + XMLHttpRequest.responseText);
    }
});

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

function CodigoGenerado() {
    $.ajax({
        type: "POST",
        url: "GestionarProductos.aspx/CodigoGenerado",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            var codigo = result.d;
            $("#txtCodigo").val(codigo);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
}

//CARGAR DATOS EN MODAL
function fillModalData() {
    var medida, estados;
    medida = data[12];
    if (medida.trim() == "GR.") {
        medida = "1";
    } else if (medida.trim() == "KG.") {
        medida = "2";
    } else if (medida.trim() == "ML.") {
        medida = "3";
    }

    if (data[6] == "Activo") {
        estados = true;
    } else {
        estados = false;
    }

    ListaProductoPais(data[0]);

    $("#txtCodigo").val(data[0]);
    $("#cboLinea").change(function () { });
    $("#cboLineaCDR").change(function () { });
    CargarLinea();
    $("#cboLinea").val(data[10]);
    $("#cboCanal").val(data[31]);
    $("#cboPais").val(data[32]);
    $("#cboLineaCDR").val(data[25]);
    $("#cboUnidad").val(medida);
    $("#txtPeso").val(data[13]);
    $("#cboPresentacion").change(function () {
    });
    CargarPresentacion();
    $("#cboPresentacion").val(data[17]);
    $("#txtPrecioBase").val(data[5]);
    $("#txtUnidadPresentacion").val(data[14]);
    //$("#txtBeneficios").val(data[14]);
    $("#txtPuntosProdPeru").val(data[4]);
    $("#chkPromo").prop("checked", data[23]).change();
    $("#chkStockPromo").prop("checked", data[30]).change();
    $("#cboPaquete").change(function () {
    });
    CargarPaquete();
    if (data[21] == "") {
        $("#cboPaquete").val("0");
    } else {
        $("#cboPaquete").val(data[21]);
    }
    $("#txtPecioCDR").val(data[22]);
    $("#txtPuntosPromocion").val(data[24]);
    $("#txtCorazones").val(data[26]);
    $("#txtBeneficios").val(data[27]);
    $("#txtIngredientes").val(data[28]);
    $("#txtConsumo").val(data[29]);
}

function ListaProductoPais(idProducto) {
    var obj = JSON.stringify({ idProductoSend: idProducto });
    $.ajax({
        type: "POST",
        url: "GestionarProductos.aspx/ListarProductoXIdProducto",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data4) {
            console.log(data4.d);
            listaPP = data4.d;
            llenarDetalleProductoPais();
        }
    });
}

function llenarDetalleProductoPais() {
    idpPeru = "", idpColombia = "", idpPanama = "";
    //for (var i = 0; i < listaPP.length; i++) {
        $("#txtNombreProdPeru").val(listaPP[0].Nombre);
        $("#txtIdPeruShopPeru").val(listaPP[0].IdProductoPeruShop);
        $("#txtAumentoPeru").val(listaPP[0].IncrementoPVP);
        $("#tooglePeru").prop('checked', listaPP[0].Estado).change();
        imgNameAPI = listaPP[0].Foto;
        idpPeru = listaPP[0].IdProductoxPais;
    //}
}

// ABRIR MODAL
$("#btnNuevoProducto").click(function (e) {
    $("#btnRegistrar").show();
    $("#btnActualizar").hide();
    $("#exampleModal input").val("");
    $("#exampleModal textarea").val("");
    $("#exampleModal select").val("0");
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
    CodigoGenerado();
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
        UploadFile();
    }
});

function RegistroProducto() {
    var medida, peru, puntos, contenido, presentacion, precio, aumento, linea, checkPeru, idpaquete,
        precioCDR, promocion, puntosPromo, IDPSPeru, LineaCDR, corazones, beneficios,
        ingredientes, consumo, prod_promo, canal, pais;

    checkPeru = document.getElementById("tooglePeru").checked;
    checkColombia = document.getElementById("toogleColombia").checked;
    checkPanama = document.getElementById("tooglePanama").checked;
    medida = $("#cboUnidad option:selected").text();
    peru = $("#txtNombreProdPeru").val();
    colombia = $("#txtNombreProdColombia").val();
    panama = $("#txtNombreProdPanama").val();
    IDPSPeru = $("#txtIdPeruShopPeru").val();
    IDPSColombia = $("#txtIdPeruShopColombia").val();
    IDPSPanama = $("#txtIdPeruShopPanama").val();
    puntos = $("#txtPuntosProdPeru").val();
    contenido = $("#txtPeso").val();
    presentacion = $("#txtUnidadPresentacion").val();
    precio = $("#txtPrecioBase").val();
    aumento = $("#txtAumentoPeru").val();
    aumentoColombia = $("#txtAumentoColombia").val();
    aumentoPanama = $("#txtAumentoPanama").val();
    linea = $("#cboLinea").val();
    idpaquete = $("#cboPaquete").val();
    precioCDR = $("#txtPecioCDR").val();
    promocion = document.getElementById("chkPromo").checked;
    puntosPromo = $("#txtPuntosPromocion").val();
    LineaCDR = $("#cboLineaCDR").val();
    corazones = $("#txtCorazones").val();
    beneficios = $("#txtBeneficios").val();
    ingredientes = $("#txtIngredientes").val();
    consumo = $("#txtConsumo").val();
    prod_promo = document.getElementById("chkStockPromo").checked;
    canal = $("#cboCanal").val();
    pais = $("#cboPais").val();

    var valida = document.getElementById('imgPeru').files.length;
    var DatosArray = {};

    if (valida == 0) {
        imagenPro = "";
    } else {
        imagenPro = document.getElementById('imgPeru').files[0].name;
    }

    if (aumento == "") {
        aumento = "0.0";
    }

    /*CREACION DE LISTA DE PRODUCTOS POR PAIS*/
    var myArray = [];
    if (peru != "") {
        DatosArray = {};
        DatosArray['Pais'] = $("#cboPais").val();
        DatosArray['Nombre'] = peru;
        DatosArray['IncrementoPVP'] = aumento;
        DatosArray['Foto'] = imgNameAPI;
        DatosArray['Estado'] = checkPeru;
        DatosArray['IdProductoPeruShop'] = IDPSPeru;
        DatosArray['Beneficios'] = beneficios;
        DatosArray['Ingredientes'] = ingredientes;
        DatosArray['Consumo'] = consumo;
        DatosArray['Prod_Promo'] = prod_promo;
        myArray.push(DatosArray);
    }

    /** CIERRE */

    var obja = JSON.stringify({
        codigoPro: $("#txtCodigo").val(), lineaPro: linea, unidadPro: medida, contenidoPro: contenido,
        codigoPresentacionPro: $("#cboPresentacion").val(), presentacionPro: presentacion, precioPro: precio, preciocdrPro: precioCDR,
        puntosPro: puntos, PPais: myArray, idpaquetePro: idpaquete,
        promocionPro: promocion, puntoPro: puntosPromo, LineaCDRPro: LineaCDR, corazonesPro: corazones, canalPro: canal, paisPro: pais
    });



    $.ajax({
        type: "POST",
        url: "GestionarProductos.aspx/RegistrarProducto",
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

function UploadFile() {
    var fileUpload = $("#imgPeru").get(0);
    var files = fileUpload.files;

    var data = new FormData();
    data.append(files[0].name, files[0]);
    data.append("archivo", "products");
    data.append("extension", files[0].name.split('.').pop());

    $.ajax({
        url: "FileUploadProduct.ashx",
        type: "POST",
        data: data,
        contentType: false,
        processData: false,
        success: function (result) {
            imgNameAPI = result.fileNameR;
            RegistroProducto();
        },
        error: function (err) {
            alert(err.statusText)
        }
    });
}

function UploadFileColombia() {
    var fileUpload = $("#imgColombia").get(0);
    var files = fileUpload.files;

    var data = new FormData();
    for (var i = 0; i < files.length; i++) {
        data.append(files[i].name, files[i]);
    }

    $.ajax({
        url: "FileUploadProduct.ashx",
        type: "POST",
        data: data,
        contentType: false,
        processData: false,
        success: function (result) {
            var r = result;
            console.log(result.d);
            if (r == "") {
            } else {
                imagenOK = 1;
            }
        },
        error: function (err) {
            alert(err.statusText)
        }
    });
}

function UploadFilePanama() {
    imagenOK = 0;
    var fileUpload = $("#imgPanama").get(0);
    var files = fileUpload.files;

    var data = new FormData();
    for (var i = 0; i < files.length; i++) {
        data.append(files[i].name, files[i]);
    }

    $.ajax({
        url: "FileUploadProduct.ashx",
        type: "POST",
        data: data,
        contentType: false,
        processData: false,
        success: function (result) {
            var r = result;
            console.log(result.d);
            if (r == "") {
            } else {
                imagenOK = 1;
            }
        },
        error: function (err) {
            alert(err.statusText)
        }
    });
}

//FUNCIONES PARA ELIMINAR
function deleteDataAjax(dataid, data2id) {

    var obj = JSON.stringify({ idProducto: dataid, productoPais: data2id });

    $.ajax({
        type: "POST",
        url: "GestionarProductos.aspx/EliminarFilaProducto",
        data: obj,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            console.log(response);
            sendDataAjax();
            if (response.d == true) { EliminadoCorrecto(); }
            else { NoPermisos(); }
        }
    });
}

$(document).on('click', '.btn-delete', function (e) {
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    var dataRow = tabla.fnGetData(row);
    var dataid = dataRow[0];
    var data2id = dataRow[11];
    var x = dataRow[19];
    DeleteFile(x);
    deleteDataAjax(dataid, data2id);
    sendDataAjax();
});

function DeleteFile(x) {

    var obj = JSON.stringify({ imagen: x });

    $.ajax({
        url: "GestionarProductos.aspx/EliminarImagen",
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

//FUNCIONES PARA ACTUALIZAR
$(document).on('click', '.btn-update', function (e) {
    $("#exampleModal input").val("");
    $("#btnRegistrar").hide();
    $("#btnActualizar").show();
    $("#exampleModal input[type='checkbox']").prop('checked', false).change();
    $('.file-upload').file_upload();
    $('.file-upload-text').text("Ingrese la imagen ...");
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    data = tabla.fnGetData(row);
    console.log(data);
    fillModalData();
});

function updateDataAjax() {

    var medida, puntos, contenido, presentacion, precio, aumento, linea, id, checkPeru,
        peru, imagenPro, IDPSPeru, idpaquete, precioCDR, promocion, puntosPromo, LineaCDR,
        CC = 0, corazones, beneficios, ingredientes, consumo, prod_promo, canal, pais;

    checkPeru = document.getElementById("tooglePeru").checked;
    checkColombia = document.getElementById("toogleColombia").checked;
    checkPanama = document.getElementById("tooglePanama").checked;
    promocion = document.getElementById("chkPromo").checked;
    medida = $("#cboUnidad option:selected").text();
    peru = $("#txtNombreProdPeru").val();
    colombia = $("#txtNombreProdColombia").val();
    panama = $("#txtNombreProdPanama").val();
    IDPSPeru = $("#txtIdPeruShopPeru").val();
    IDPSColombia = $("#txtIdPeruShopColombia").val();
    IDPSPanama = $("#txtIdPeruShopPanama").val();
    puntos = $("#txtPuntosProdPeru").val();
    contenido = $("#txtPeso").val();
    presentacion = $("#txtUnidadPresentacion").val();
    precio = $("#txtPrecioBase").val();
    aumento = $("#txtAumentoPeru").val();
    aumentoColombia = $("#txtAumentoColombia").val();
    aumentoPanama = $("#txtAumentoPanama").val();
    linea = $("#cboLinea").val();
    idpaquete = $("#cboPaquete").val();
    precioCDR = $("#txtPecioCDR").val();
    puntosPromo = $("#txtPuntosPromocion").val();
    LineaCDR = $("#cboLineaCDR").val();
    corazones = $("#txtCorazones").val();
    beneficios = $("#txtBeneficios").val();
    ingredientes = $("#txtIngredientes").val();
    consumo = $("#txtConsumo").val();
    prod_promo = document.getElementById("chkStockPromo").checked;
    canal = $("#cboCanal").val();
    pais = $("#cboPais").val();
    id = data[0];

    var valida = document.getElementById('imgPeru').files.length;
    var myArrayRegistro = [];
    var myArrayUpdate = [];
    var DatosArrayRegistro = {};
    var DatosArrayUpdate = {};

    if (valida == 0) {
        imagenPro = imgPeru;
    } else {
        imagenPro = document.getElementById('imgPeru').files[0].name;
    }

    if (aumento == "") {
        aumento = "0.0";
    }

    if (idpPeru == "" && peru != "") {
        CC++;
        DatosArrayRegistro = {};
        DatosArrayRegistro['Pais'] = $("#cboPais").val();
        DatosArrayRegistro['IdProducto'] = id;
        DatosArrayRegistro['Nombre'] = peru;
        DatosArrayRegistro['IncrementoPVP'] = aumento;
        DatosArrayRegistro['Foto'] = imgNameAPI;
        DatosArrayRegistro['Estado'] = checkPeru;
        DatosArrayRegistro['IdProductoPeruShop'] = IDPSPeru;
        DatosArrayRegistro['Beneficios'] = beneficios;
        DatosArrayRegistro['Ingredientes'] = ingredientes;
        DatosArrayRegistro['Consumo'] = consumo;
        DatosArrayRegistro['Prod_Promo'] = prod_promo;
        myArrayRegistro.push(DatosArrayRegistro);
    }

    /*CREACION DE LISTA DE PRODUCTOS POR PAIS*/

    if (idpPeru != "") {
        DatosArrayUpdate = {};
        DatosArrayUpdate['Pais'] = $("#cboPais").val();
        DatosArrayUpdate['IdProductoxPais'] = idpPeru;
        DatosArrayUpdate['Nombre'] = peru;
        DatosArrayUpdate['IncrementoPVP'] = aumento;
        DatosArrayUpdate['Foto'] = imgNameAPI;
        DatosArrayUpdate['Estado'] = checkPeru;
        DatosArrayUpdate['IdProductoPeruShop'] = IDPSPeru;
        DatosArrayUpdate['Beneficios'] = beneficios;
        DatosArrayUpdate['Ingredientes'] = ingredientes;
        DatosArrayUpdate['Consumo'] = consumo;
        DatosArrayUpdate['Prod_Promo'] = prod_promo;
        myArrayUpdate.push(DatosArrayUpdate);
    }

    /** CIERRE */

    var obj = JSON.stringify({
        codigoPro: id, medidaPro: medida, contenidoPro: contenido, codigoPresentacionPro: $("#cboPresentacion").val(),
        unidadesPPro: presentacion, lineaPro: linea,
        precioPro: precio, puntosPro: puntos, preciocdrPro: precioCDR, idpaquetePro: idpaquete,
        promocionPro: promocion, puntoPro: puntosPromo, PPais: myArrayUpdate, LineaCDRPro: LineaCDR,
        corazonesPro: corazones, canalPro: canal, paisPro: pais
    });

    $.ajax({
        type: "POST",
        url: "GestionarProductos.aspx/ActualizarProducto",
        data: obj,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            console.log(response);
            if (CC > 0) {
                RegistroProductoPaisIndividual(myArrayRegistro, linea, id);
            }
            Swal.fire({
                title: 'Perfecto!',
                text: 'Producto Actualizado',
                type: "success"
            }).then(function () {
                window.location = "GestionarProductos.aspx";
            });
        }
    });
}

function RegistroProductoPaisIndividual(ListaArray, linea, id) {
    var obj = JSON.stringify({ PPais: ListaArray, lineaPro: linea, idProdu: id });
    $.ajax({
        type: "POST",
        url: "GestionarProductos.aspx/RegistrarProductoPais",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data2) {
            console.log(data2.d);
        }
    });
}

$("#btnActualizar").click(function (e) {
    e.preventDefault();
    var valida = document.getElementById('imgPeru').files.length;
    if (valida > 0) { DeleteFile(imgPeru); UpdateFile($("#imgPeru").get(0)); }
    else { updateDataAjax();}
});

function UpdateFile(goImg) {
    imagenOK = 0;
    var fileUpload = goImg;
    var files = fileUpload.files;

    var data = new FormData();
    data.append(files[0].name, files[0]);
    data.append("archivo", "products");
    data.append("extension", files[0].name.split('.').pop());

    $.ajax({
        url: "FileUploadProduct.ashx",
        type: "POST",
        data: data,
        contentType: false,
        processData: false,
        success: function (result) {
            imgNameAPI = result.fileNameR;
            imagenOK = 1;
            updateDataAjax();
        },
        error: function (err) {
            alert(err.statusText)
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
        window.location = "GestionarProductos.aspx";
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
sendDataAjax();