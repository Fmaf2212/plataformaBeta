//CARGAR COMBOS SOCIOS RED
$.ajax({
    type: "POST",
    url: "SociosRed.aspx/GetPais",
    data: "{}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    async: false,
    success: function (result) {
        $("#cboPais").empty();
        $("#cboPais").append("<option value='0'>--Select--</option>");
        $.each(result.d, function (key, value) {
            $("#cboPais").append($("<option></option>").val(value.Codigo).html(value.Nombre));
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
        $("#cboPaisTienda").empty();
        $("#cboPaisTienda").append("<option value='0'>--Select--</option>");
        $.each(result.d, function (key, value) {
            $("#cboPaisTienda").append($("<option></option>").val(value.Codigo).html(value.Nombre));
        });
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus + ": " + XMLHttpRequest.responseText);
    }
});

$("#cboPais").change(function () {
    var params = new Object();
    params.pais = $("#cboPais").val();
    params = JSON.stringify(params);

    $.ajax({
        type: "POST",
        url: "SociosRed.aspx/GetDepartamentosByPais",
        data: params,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#cboDepartamento").empty();
            $("#cboDepartamento").append("<option value='0'>--Select--</option>");
            CargarProvincia();
            CargarDistrito();
            $.each(result.d, function (key, value) {
                $("#cboDepartamento").append($("<option></option>").val(value.Codigo).html(value.Nombre));
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
});

$("#cboDepartamento").change(function () {
    var params = new Object();
    params.departamento = $("#cboDepartamento").val();
    params = JSON.stringify(params);

    $.ajax({
        type: "POST",
        url: "SociosRed.aspx/GetProvinciaByDepartamento",
        data: params,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#cboProvincia").empty();
            $("#cboProvincia").append("<option value='0'>--Select--</option>");
            CargarDistrito();
            $.each(result.d, function (key, value) {
                $("#cboProvincia").append($("<option></option>").val(value.Codigo).html(value.Nombre));
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
});

$("#cboProvincia").change(function () {
    var params = new Object();
    params.provincia = $("#cboProvincia").val();
    params = JSON.stringify(params);

    $.ajax({
        type: "POST",
        url: "SociosRed.aspx/GetDistritoByProvincia",
        data: params,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#cboDistrito").empty();
            $("#cboDistrito").append("<option value='0'>--Select--</option>");
            $.each(result.d, function (key, value) {
                $("#cboDistrito").append($("<option></option>").val(value.Codigo).html(value.Nombre));
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
});

$.ajax({
    type: "POST",
    url: "SociosRed.aspx/GetPackete",
    data: "{}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    async: false,
    success: function (result) {
        $("#cboPaquete").empty();
        $("#cboPaquete").append("<option value='0'>--Select--</option>");
        $.each(result.d, function (key, value) {
            $("#cboPaquete").append($("<option></option>").val(value.Codigo).html(value._Packete));
        });
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus + ": " + XMLHttpRequest.responseText);
    }
});

$(function () {
    $("[id$=txtPatrocinador]").autocomplete({
        source: function (request, responce) {
            $.ajax({
                url: "Autocompletado.asmx/AutcompletePatro",
                method: "post",
                CORS: true,
                contentType: "application/json;charset=utf-8",
                data: "{ 'palabra': '" + request.term + "'}",
                dataType: 'json',
                success: function (data) {
                    var lista = [];
                    var obj5 = data.d;
                    for (var i = 0; i < obj5.length; i += 2) {
                        lista.push(obj5[i]);
                    }
                    responce(lista);
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    console.log("In The ERROR");
                    console.log(XMLHttpRequest);
                    console.log(textStatus);
                    console.log(errorThrown);
                }
            });
        }
    });
});

$(function () {
    $("[id$=FiltroNombres]").autocomplete({
        source: function (request, responce) {
            $.ajax({
                url: "Autocompletado.asmx/AutcompletePatro",
                method: "post",
                CORS: true,
                contentType: "application/json;charset=utf-8",
                data: "{ 'palabra': '" + request.term + "'}",
                dataType: 'json',
                success: function (data) {
                    var lista = [];
                    var obj5 = data.d;
                    for (var i = 0; i < obj5.length; i += 2) {
                        lista.push(obj5[i]);
                    }
                    responce(lista);
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    console.log("In The ERROR");
                    console.log(XMLHttpRequest);
                    console.log(textStatus);
                    console.log(errorThrown);
                }
            });
        }
    });
});

//var obj5 = data.d;
//for (var i = 0; i < obj5.length; i+2) {
//    lista.push({ nom: obj5[i].Nombres, dni: obj5[i].DNI });
//}
//responce(lista[1].nom);

//VARIABLES
var tabla, data, dropdown, dniPatrocinador, filtroaplicado;
filtroaplicado = 0;

// ELIMINAR CLIENTE
$(document).on('click', '.btn-delete', function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Estás seguro de eliminar al cliente?',
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
            var id = dataRow[14], id2 = dataRow[39], id3 = dataRow[0] + " " + dataRow[1], id4 = dataRow[4], x = dataRow[36];
            if (dataRow[33] != "07" | dataRow[33] != "09") {
                DeleteFile(x);
                deleteDataAjax(id, id2, id3, id4);
                sendDataAjax();
            } else {
                DeleteCDR();
            }
        }
    });
    
});

function deleteDataAjax(dataid, idpaq, nombres, documento) {

    var obj = JSON.stringify({ id: dataid, idpaquete: idpaq, nombreS: nombres, documentoS: documento });

    $.ajax({
        type: "POST",
        url: "SociosRed.aspx/EliminarFilaCliente",
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
                text: 'Cliente Eliminado',
                type: "success"
            });
        }
    });
}

function DeleteFile(x) {

    var obj = JSON.stringify({ imagen: x });

    $.ajax({
        url: "SociosRed.aspx/EliminarImagen",
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

// ACTUALIZAR CLIENTE
$(document).on('click', '.btn-update', function (e) {
    $("#btnRegistrarModal").hide();
    $("#btnActualizar").show();
    $("#btnComprimir").show();
    $('.file-upload').file_upload();
    $('.file-upload-text').text("Ingrese la imagen ...");
    $('.imagen').change(function () {
        filePreview(this);
    });
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    data = tabla.fnGetData(row);
    console.log(data);
    fillModalData();
    comboTiendaExcepciones(data[33])

});

$("#btnActualizar").click(function (e) {
    var hoy = new Date();
    var fecha = $("#txtFecNac").val();
    var fechaNac = toDate(fecha);
    var x = data[36];
    fechaNac.setFullYear(fechaNac.getFullYear() + 18);
    e.preventDefault();
    if (fechaNac >= hoy) {
        FaltaFechaNac();
    } else {
        ValidarDatosClienteUpdate(data[14]);
    }

});

function ValidarDatosClienteUpdate(idCliente) {
    var patrocinador = $("#txtPatrocinador").val();
    var correo = $("#txtCorreo").val();
    var doc = $("#txtNroDoc").val();
    var usu = $("#txtUsuario").val();
    var valida = document.getElementById('fileUpload').files.length;
    var obj = JSON.stringify({ correoS: correo, documento: doc, usuario: usu, idCliente: idCliente });
    $.ajax({
        type: "POST",
        url: "SociosRed.aspx/ValidarDatosUpdate",
        data: obj,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            console.log(response);
            if (response.d == "0") {
                if (valida == 0) {
                    if (patrocinador == "") {
                        dniPatrocinador = "";
                        updateDataAjax();
                    } else {
                        ValidarPatrocinadorActualizar();
                    }
                } else {
                    DeleteFile(x);
                    UpdateFile();
                }
            } else {
                Swal.fire({
                    title: 'Ooops...!',
                    text: response.d,
                    type: "error"
                });
            }
        }
    });
}

$("#btnComprimir").click(function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Estás seguro de comprimir al cliente?',
        text: "Esto no puede revertirse!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, comprimir!'
    }).then((result) => {
        if (result.isConfirmed) {
            var documento = data[4];
            var tipoCliente = data[33];
            var idCliente = data[14];
            e.preventDefault();
            ComprimirSocios(documento, tipoCliente, idCliente);
        }
    });
    
});

function ComprimirSocios(documento, tipoCliente, idCliente) {

    var obj = JSON.stringify({ documentoC: documento, tipoClienteC: tipoCliente, idClienteC: idCliente });

    $.ajax({
        type: "POST",
        url: "SociosRed.aspx/ComprimirCliente",
        data: obj,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            Swal.fire({
                title: 'Perfecto!',
                text: 'Cliente Comprimido',
                type: "success"
            }).then(function () {
                window.location = "SociosRed.aspx";
            });
        }
    });
}

function updateDataAjax() {

    var id, imagenCliente, idPacke;
    var day = moment().format("DD/MM/YYYY");
    id = data[14];
    idPacke = data[39];
    var valida = document.getElementById('fileUpload').files.length;
    if (valida == 0) {
        imagenCliente = data[36];
    } else {
        imagenCliente = "uploads/" + document.getElementById('fileUpload').files[0].name;
    }

    var obj = JSON.stringify({
        idUd: id, numeroDocUd: $("#txtNroDoc").val(), usuarioUd: $("#txtUsuario").val(), claveUd: $("#txtClave").val(),
        nombresUd: $("#txtNombres").val(), apellidoPatUd: $("#txtApPat").val(), apellidoMatUd: $("#txtApMat").val(),
        apodoUd: $("#txtApodo").val(), fechaNacUd: $("#txtFecNac").val(), sexoUd: $("#cboSexo option:selected").text(), tipoDocUd: $("#cboTipoDoc option:selected").text(), correoUd: $("#txtCorreo").val(),
        telefonoUd: $("#txtTelefono").val(), celularUd: $("#txtCelular").val(), paisUd: $("#cboPais").val(), departamentoUd: $("#cboDepartamento").val(),
        provinciaUd: $("#cboProvincia").val(), distritoUd: $("#cboDistrito").val(), direccionUd: $("#txtxDireccion").val(),
        referenciaUd: $("#txtReferencia").val(), detraccionUd: $("#txtCtaDetraccion").val(), rucUd: $("#txtRuc").val(),
        bancoUd: $("#txtBanco").val(), depositoUd: $("#txtCtaDeposito").val(), interbancariaUd: $("#txtCtaInterbancaria").val(),
        tipoClienteUd: $("#cboTipoCliente").val(), patrocinadorUd: dniPatrocinador, uplineUd: $("#txtUpLine").val(),
        establecimientoUd: $("#cboTipoEstablecimiento").val(), imagenUd: imagenCliente, idPeruShop: $("#txtPeruShop").val(),
        idPackete: $("#cboPaquete").val(), idDescuento: idPacke, fechaPackete: day, paisTienda: $("#cboPaisTienda").val(),
        ubigeo: $("#txtUbigeo").val()
    });

    $.ajax({
        type: "POST",
        url: "SociosRed.aspx/ActualizarCliente",
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
                text: 'Cliente Actualizado',
                type: "success"
            }).then(function () {
                window.location = "SociosRed.aspx";
            });
        }
    });
}

function UpdateFile() {
    var fileUpload = $("#fileUpload").get(0);
    var files = fileUpload.files;
    var patrocinador = $("#txtPatrocinador").val();

    var data = new FormData();
    for (var i = 0; i < files.length; i++) {
        data.append(files[i].name, files[i]);
    }
    data.append("archivo", "socios");

    $.ajax({
        url: "FileUpload.ashx",
        type: "POST",
        data: data,
        contentType: false,
        processData: false,
        success: function (result) {
            var r = result;
            console.log(result.d);
            if (r == "") {
                if (patrocinador == "") {
                    dniPatrocinador = "";
                    updateDataAjax();
                } else {
                    ValidarPatrocinadorActualizar();
                }
            } else {
                alert(result);
            }
        },
        error: function (err) {
            alert(err.statusText)
        }
    });
}

// ABRIR MODAL 
$("#btnRegistrarCliente").click(function (e) {
    $("#btnActualizar").hide();
    $("#btnComprimir").hide();
    $("#btnRegistrarModal").show();
    $("#exampleModal input").val("");
    $("#cboPais").change(function () {
        CargarDepartamentos();
    });
    CargarPaises();
    $("#cboPais").val("0");
    CargarDepartamentos();
    $("#cboDepartamento").val("0");
    CargarProvincia();
    $("#cboProvincia").val("0");
    CargarDistrito();
    $("#cboDistrito").val("0");
    $("#exampleModal select").val("0");
    $('#imagePreview').html("<img src='img/Preview-icon1.png' style='height:250px' />");
    $('.file-upload').file_upload();
    $('.file-upload-text').text("Ingrese la imagen ...");
    var day = moment().format("DD/MM/YYYY");
    $('#txtFecNac').val(day);
    $('.daterange').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        locale: { format: "DD/MM/YYYY" },
        autoApply: false
    });
    $('.imagen').change(function () {
        filePreview(this);
    });
    $("#urlDNI").text("");
    $("#urlDireccion").text("");
    $("#urlDNI").prop('disabled', true);
    $("#urlDireccion").prop('disabled', true);
});

function filePreview(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#imagePreview').html("<img src='" + e.target.result + "' style='height:250px' />");
        }
        reader.readAsDataURL(input.files[0]);
    }
}

//REGISTRAR CLIENTE
$("#btnRegistrarModal").click(function (e) {

    var day = new Date();
    var fecha = $("#txtFecNac").val();
    var dni = $("#txtNroDoc").val();
    var usuario = $("#txtUsuario").val();
    var tcliente = $("#cboTipoCliente").val();
    var nombre = $("#txtNombres").val();
    var apellidoPat = $("#txtApPat").val();
    var tdoc = $("#cboTipoDoc").val();
    var sexo = $("#cboSexo").val();
    var correo = $("#txtCorreo").val();
    var pais = $("#cboPais").val();
    var departamento = $("#cboDepartamento").val();
    var provincia = $("#cboProvincia").val();
    var distrito = $("#cboDistrito").val();
    var direccion = $("#txtxDireccion").val();
    var fechaNac = toDate(fecha);
    var ruc = $("#txtRuc").val();
    var packete = $("#cboPaquete").val();
    var clave = $("#txtClave").val();
    var paisTienda = $("#cboPaisTienda").val();


    e.preventDefault();

    fechaNac.setFullYear(fechaNac.getFullYear() + 18);
    if (usuario == "") {
        FaltaUsuario();
    } else if (clave == "") {
        FaltaClave();
    } else if (packete == "0") {
        FaltaPackete();
    } else if (fechaNac >= day) {
        FaltaFechaNac();
    } else if (tcliente == "0") {
        FaltaTipoCliente();
    } else if (nombre == "") {
        FaltaNombre();
    } else if (apellidoPat == "") {
        FaltaApellido();
    } else if (tdoc == "0") {
        FaltaDocumento();
    } else if (sexo == "0") {
        FaltaSexo();
    } else if (correo == "") {
        FaltaCorreo();
    } else if (pais == "0") {
        FaltaPais();
    } else if (paisTienda == "0") {
        FaltaPaisTienda();
    } else if (departamento == "0") {
        FaltaDepartamento();
    } else if (provincia == "0") {
        FaltaProvincia();
    } else if (distrito == "0") {
        FaltaDistrito();
    } else if (direccion == "") {
        FaltaDireccion();
    } else if (tcliente == "06" & ruc == "" | tcliente == "07" & ruc == "" | tcliente == "08" & ruc == "") {
        FaltaRuc();
    } else if (!dni == "") {
        DNIEXISTE();
    } else {
        ValidarDatosCliente();
    }
});

function RegistroCliente() {
    var imagenCliente;
    var day = moment().format("DD/MM/YYYY");
    var valida = document.getElementById('fileUpload').files.length;
    if (valida == 0) {
        imagenCliente = "";
    } else {
        imagenCliente = document.getElementById('fileUpload').files[0].name;
    }

    var obj = JSON.stringify({
        numeroDocUd: $("#txtNroDoc").val(), usuarioUd: $("#txtUsuario").val(), claveUd: $("#txtClave").val(),
        nombresUd: $("#txtNombres").val(), apellidoPatUd: $("#txtApPat").val(), apellidoMatUd: $("#txtApMat").val(),
        apodoUd: $("#txtApodo").val(), fechaNacUd: $("#txtFecNac").val(), sexoUd: $("#cboSexo option:selected").text(),
        tipoDocUd: $("#cboTipoDoc option:selected").text(), correoUd: $("#txtCorreo").val(), telefonoUd: $("#txtTelefono").val(),
        celularUd: $("#txtCelular").val(), paisUd: $("#cboPais").val(), departamentoUd: $("#cboDepartamento").val(),
        provinciaUd: $("#cboProvincia").val(), distritoUd: $("#cboDistrito").val(), direccionUd: $("#txtxDireccion").val(),
        referenciaUd: $("#txtReferencia").val(), detraccionUd: $("#txtCtaDetraccion").val(), rucUd: $("#txtRuc").val(), bancoUd: $("#txtBanco").val(),
        depositoUd: $("#txtCtaDeposito").val(), interbancariaUd: $("#txtCtaInterbancaria").val(), tipoClienteUd: $("#cboTipoCliente").val(),
        patrocinadorUd: dniPatrocinador, uplineUd: $("#txtUpLine").val(), establecimientoUd: $("#cboTipoEstablecimiento").val(),
        imagenUd: imagenCliente, fecharegistro: day, idPeruShop: $("#txtPeruShop").val(), codigoPackete: $("#cboPaquete").val(),
        paisTienda: $("#cboPaisTienda").val(), ubigeo: $("#txtUbigeo").val()
    });

    $.ajax({
        type: "POST",
        url: "SociosRed.aspx/RegistrarCliente",
        data: obj,
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
    var fileUpload = $("#fileUpload").get(0);
    var files = fileUpload.files;

    var data = new FormData();
    for (var i = 0; i < files.length; i++) {
        data.append(files[i].name, files[i]);
    }
    data.append("archivo", "socios");

    if (files.length > 0) {
        $.ajax({
            url: "FileUpload.ashx",
            type: "POST",
            data: data,
            contentType: false,
            processData: false,
            success: function (result) {
                var r = result;
                console.log(result.d);
                if (r == "") {
                    RegistroCliente();
                } else {
                    alert(result);
                }
            },
            error: function (err) {
                alert(err.statusText)
            }
        });
    }
    else
    {
        RegistroCliente();
    }

    
}

// CONDICIONES PARA REGISTRAR
function ValidarDatosCliente() {
    var correo = $("#txtCorreo").val();
    var doc = $("#txtNroDoc").val();
    var usu = $("#txtUsuario").val();
    var valida = document.getElementById('fileUpload').files.length;
    var obj = JSON.stringify({ correoS: correo, documento: doc, usuario: usu });
    $.ajax({
        type: "POST",
        url: "PreRegistroSocio.aspx/ValidarDatos",
        data: obj,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            console.log(response);
            if (response.d == "0") {
                if (valida == 0) {
                    RegistroCliente();
                } else {
                    UploadFile();
                }
            } else {
                Swal.fire({
                    title: 'Ooops...!',
                    text: response.d,
                    type: "error"
                });
            }
        }
    });
}

// LISTAR CLIENTE

function apodo(ddl) {

    dropdown = ddl.options[ddl.selectedIndex].value;

    if (ddl.options[ddl.selectedIndex].value == "01" || ddl.options[ddl.selectedIndex].value == "02" || ddl.options[ddl.selectedIndex].value == "03" ||
        ddl.options[ddl.selectedIndex].value == "04" || ddl.options[ddl.selectedIndex].value == "05" || ddl.options[ddl.selectedIndex].value == "10" ||
        ddl.options[ddl.selectedIndex].value == "11") {

        var txt1 = document.getElementById("txtApodo");
        var txt2 = document.getElementById("txtPeruShop");
        txt1.setAttribute("readOnly", "true");
        txt2.setAttribute("readOnly", "true");
        $('#cboTipoEstablecimiento').attr("disabled", false);
        $('#cboPaquete').attr("disabled", false);
        $("#cboPaquete").val("0");
        $("#txtApodo").val("");
        $("#txtPeruShop").val("");

    } else {
        document.getElementById("txtApodo").readOnly = false;
        document.getElementById("txtPeruShop").readOnly = false;
        $("#cboTipoEstablecimiento").val("0");
        $('#cboTipoEstablecimiento').attr("disabled", true);
        $("#cboPaquete").val("22");
        $('#cboPaquete').attr("disabled", true);
        $("#txtUpLine").val("");
        $("#txtPatrocinador").val("");
    }
}

function comboTiendaExcepciones(combo) {

    if (combo == "01" || combo == "02" || combo == "03" ||
        combo == "04" || combo == "05" || combo == "10" || combo == "11") {

        var txt1 = document.getElementById("txtApodo");
        var txt2 = document.getElementById("txtPeruShop");
        txt1.setAttribute("readOnly", "true");
        txt2.setAttribute("readOnly", "true");
        $('#cboTipoEstablecimiento').attr("disabled", false);
        $('#cboPaquete').attr("disabled", false);
        $("#txtApodo").val("");
        $("#txtPeruShop").val("");

    } else {
        document.getElementById("txtApodo").readOnly = false;
        document.getElementById("txtPeruShop").readOnly = false;
        $("#cboTipoEstablecimiento").val("0");
        $('#cboTipoEstablecimiento').attr("disabled", true);
        $("#cboPaquete").val("22");
        $('#cboPaquete').attr("disabled", true);
        $("#txtUpLine").val("");
        $("#txtPatrocinador").val("");
    }
}

function addRowDT(obj) {
    tabla = $("#tbl_Socio").DataTable();
    tabla.fnClearTable();
    for (var i = 0; i < obj.length; i++) {
        tabla.fnAddData([
            obj[i].nombre,
            (obj[i].apellidoPat + " " + obj[i].apellidoMat),
            obj[i].apodo,
            obj[i].tipoDoc,
            obj[i].numeroDoc,
            obj[i].tipoCliente,
            obj[i].patrocinador,
            obj[i].upline,
            obj[i].celular,
            obj[i].correo,
            obj[i].pais,
            '<button id="Actualizar" value="Actualizar" title="Actualizar" class="btn btn-primary btn-update" data-toggle="modal" data-target="#exampleModal"><i class="far fa-edit"></i></button>',
            '<button value="Eliminar" title="Eliminar" class="btn btn-danger btn-delete"><i class="far fa-minus-square"></i></button>',
            obj[i].direccion,
            obj[i].idCliente,
            obj[i].usuario,
            obj[i].clave,
            obj[i].apellidoPat,
            obj[i].apellidoMat,
            obj[i].fechaNac,
            obj[i].sexo,
            obj[i].telefono,
            obj[i].iddepartamento,
            obj[i].idprovincia,
            obj[i].idditrito,
            obj[i].referencia,
            obj[i].nroCtaDetraccion,
            obj[i].ruc,
            obj[i].nombreBanco,
            obj[i].nroCtaDeposito,
            obj[i].nroCtaInterbancaria,
            obj[i].idpais,
            obj[i].idtipoEstablecimiento,
            obj[i].idtipoCliente,
            obj[i].idpatrocinador,
            obj[i].idupline,
            obj[i].imagen,
            obj[i].IdPeruShop,
            obj[i].Packete,
            obj[i].IdPackete,
            obj[i].Establecimiento,
            obj[i].paisTienda,
            obj[i].Ubigeo,
            obj[i].archivo_DNI,
            obj[i].archivo_Direccion,

        ]);
    }
}

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "SociosRed.aspx/ListarCliente100",
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


$("#btnGeneral").click(function (e) {
    e.preventDefault();
    sendDataAjaxCompleto();
});

$("#btnFiltrar").click(function (e) {
    e.preventDefault();
    var dni = $("#FiltroDni").val();
    var nombre = $("#FiltroNombres").val();
    sendDataAjaxCompletoFiltro(dni, nombre);
});

function sendDataAjaxCompleto() {
    filtroaplicado = 1;
    $.ajax({
        type: "POST",
        url: "SociosRed.aspx/ListarCliente",
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

function sendDataAjaxCompletoFiltro(dni, nombre) {
    filtroaplicado = 1;
    var obj = JSON.stringify({ documento: dni, datos: nombre });
    $.ajax({
        type: "POST",
        url: "SociosRed.aspx/ListarClienteFiltrado",
        data: obj,
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

//PARA CARGA DE COMBOS UPDATE
function CargarPaises() {

    $.ajax({
        type: "POST",
        url: "SociosRed.aspx/GetPais",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {

            $("#cboPais").empty();
            $("#cboPais").append("<option value='0'>--Select--</option>");
            $.each(result.d, function (key, value) {
                $("#cboPais").append($("<option></option>").val(value.Codigo).html(value.Nombre));
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });

}

function CargarDepartamentos() {
    var params = new Object();
    params.pais = $("#cboPais").val();
    params = JSON.stringify(params);

    $.ajax({
        type: "POST",
        url: "SociosRed.aspx/GetDepartamentosByPais",
        data: params,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#cboDepartamento").empty();
            $("#cboDepartamento").append("<option value='0'>--Select--</option>");
            $.each(result.d, function (key, value) {
                $("#cboDepartamento").append($("<option></option>").val(value.Codigo).html(value.Nombre));
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
}

function CargarProvincia() {
    var params = new Object();
    params.departamento = $("#cboDepartamento").val();
    params = JSON.stringify(params);

    $.ajax({
        type: "POST",
        url: "SociosRed.aspx/GetProvinciaByDepartamento",
        data: params,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#cboProvincia").empty();
            $("#cboProvincia").append("<option value='0'>--Select--</option>");
            $.each(result.d, function (key, value) {
                $("#cboProvincia").append($("<option></option>").val(value.Codigo).html(value.Nombre));
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
}

function CargarDistrito() {
    var params = new Object();
    params.provincia = $("#cboProvincia").val();
    params = JSON.stringify(params);

    $.ajax({
        type: "POST",
        url: "SociosRed.aspx/GetDistritoByProvincia",
        data: params,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#cboDistrito").empty();
            $("#cboDistrito").append("<option value='0'>--Select--</option>");
            $.each(result.d, function (key, value) {
                $("#cboDistrito").append($("<option></option>").val(value.Codigo).html(value.Nombre));
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
}

// CONDICIONES PARA REGISTRAR
function DNIEXISTE() {
    var patrocinador = $("#txtPatrocinador").val();
    var params = new Object();
    params.doc = $("#txtNroDoc").val();
    params = JSON.stringify(params);

    $.ajax({
        type: "POST",
        url: "SociosRed.aspx/EXISTEDNI",
        data: params,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (ok) {
            var funciona = ok.d;
            console.log(funciona);
            if (funciona == "SI") {
                CodigoRepetido();
            } else {
                if (patrocinador == "") {
                    dniPatrocinador = "";
                    UploadFile();
                } else {
                    ValidarPatrocinador();
                }

            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
}

function USUARIOEXISTE() {
    var params = new Object();
    params.usu = $("#txtUsuario").val();
    params = JSON.stringify(params);

    $.ajax({
        type: "POST",
        url: "SociosRed.aspx/EXISTEUSUARIO",
        data: params,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (ok) {
            var funciona = ok.d;
            console.log(funciona);
            if (funciona == "SI") {
                UsuarioRepetido();
            } else {
                UploadFile();
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
}

function ValidarPatrocinador() {
    var params = new Object();
    params.patro = $("#txtPatrocinador").val();
    params = JSON.stringify(params);

    $.ajax({
        type: "POST",
        url: "SociosRed.aspx/VALIDARPATROCINADOR",
        data: params,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (ok) {
            var funciona = ok.d;
            console.log(funciona);
            if (funciona != "NO") {
                dniPatrocinador = funciona;
                UploadFile();
            } else {
                PatrocinadorIncorrecto();

            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
}

function ValidarPatrocinadorActualizar() {
    var params = new Object();
    params.patro = $("#txtPatrocinador").val();
    params = JSON.stringify(params);

    $.ajax({
        type: "POST",
        url: "SociosRed.aspx/VALIDARPATROCINADOR",
        data: params,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (ok) {
            var funciona = ok.d;
            console.log(funciona);
            if (funciona != "NO") {
                dniPatrocinador = funciona;
                updateDataAjax();
            } else {
                PatrocinadorIncorrecto();
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
}

//MOSTRAR INFORMACION EN MODAL
function fillModalData() {
    var tdoc, sexo, imagen, x, estable, packete, imgView;
    x = data[36];
    estable = data[40];
    packete = data[38];
    if (data[3] == "DNI" || data[3] == "DOCUMENTO DE ID") {
        tdoc = "1";
    }
    else if (data[3] = "PASAPORTE") {
        tdoc = "2";
    }
    if (data[20] == "MASCULINO") {
        sexo = "1";
    }
    else if (data[20] == "FEMENINO") {
        sexo = "2";
    }
    else {
        sexo = "3";
    }
    if (x.trim() == "") {
        imagen = "";
    } else {
        imagen = data[36];
    }

    if (estable == "") {
        estable = "0"
    } else {
        estable = data[40];
    }

    $("#txtNombres").val(data[0]);
    $("#txtApPat").val(data[17]);
    $("#txtApMat").val(data[18]);
    $("#txtApodo").val(data[2]);
    $("#cboTipoDoc").val(tdoc);
    $("#txtNroDoc").val(data[4]);
    $("#cboTipoCliente").val(data[33]);
    $("#txtPatrocinador").val(data[6]);
    $("#txtUpLine").val(data[35]);
    $("#txtCelular").val(data[8]);
    $("#txtCorreo").val(data[9]);
    $("#txtxDireccion").val(data[13]);
    $("#txtUsuario").val(data[15]);
    $("#txtClave").val(data[16]);
    $('.daterange').daterangepicker({
        singleDatePicker: true,
        startDate: data[19],
        showDropdowns: true,
        locale: { format: "DD/MM/YYYY" },
        autoApply: false
    });
    $("#txtFecNac").val(data[19]);
    $("#cboSexo").val(sexo);
    $("#txtTelefono").val(data[21]);
    $("#cboPais").change(function () {
        CargarDepartamentos();
    });
    CargarPaises();
    //aqui recibes los datos de edicion
    $("#cboPais").val(data[31]);
    $("#cboPaisTienda").val(data[41]);
    CargarDepartamentos();
    $("#cboDepartamento").val(data[22]);
    CargarProvincia();
    $("#cboProvincia").val(data[23]);
    CargarDistrito();
    $("#cboDistrito").val(data[24]);
    $("#txtReferencia").val(data[25]);
    $("#txtCtaDetraccion").val(data[26]);
    $("#txtRuc").val(data[27]);
    $("#txtBanco").val(data[28]);
    $("#txtCtaDeposito").val(data[29]);
    $("#txtCtaInterbancaria").val(data[30]);
    $("#cboTipoEstablecimiento").val("");
    if (imagen == "") {
        $('#imagePreview').html("<img src='img/Preview-icon1.png' style='height:250px' />");
    } else {
        $('#imagePreview').html("<img src='" + imagen + "' style='height:250px' />");
    }
    $("#txtPeruShop").val(data[37]);
    $("#cboPaquete").val(packete);
    $("#txtUbigeo").val(data[42]);

    if (data[43] != "") {
        $("#urlDNI").prop('disabled', false);
        $("#urlDNI").text(data[43]);
        document.getElementById('urlDNI').href = "archive_dni/" + data[43];
    }

    if (data[44] != "") {
        $("#urlDireccion").prop('disabled', false);
        $("#urlDireccion").text(data[44]);
        document.getElementById('urlDireccion').href = "archive_address/" + data[44];
    }
}

//CONVERTIR STRING EN DATE
function toDate(dateStr) {
    var parts = dateStr.split("/")
    return new Date(parts[2], parts[1] - 1, parts[0])
}

//ALERTAS
function alertme() {
    Swal.fire({
        title: 'Perfecto!',
        text: 'Cliente Registrado',
        type: "success"
    }).then(function () {
        window.location = "SociosRed.aspx";
    });
}
function FaltaUsuario() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró el campo Usuario',
        type: "error"
    });
}
function FaltaClave() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró el campo Contraseña',
        type: "error"
    });
}
function FaltaPackete() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No seleccionó el campo Packete',
        type: "error"
    });
}
function FaltaTipoCliente() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No definió el Tipo de Cliente',
        type: "error"
    });
}
function FaltaNombre() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró el campo Nombres',
        type: "error"
    });
}
function FaltaApellido() {
    Swal.fire({
        title: 'No registró un Apellido!',
        text: 'Si no tiene un Apellido coloque: --',
        type: "error"
    });
}
function FaltaTipoDoc() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No definió el Tipo de Documento',
        type: "error"
    });
}
function FaltaDocumento() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró el Número de Documento',
        type: "error"
    });
}
function FaltaFechaNac() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'Fecha de Nacimiento Incorrecta',
        type: "error"
    });
}
function FaltaSexo() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No definió el Sexo',
        type: "error"
    });
}
function FaltaCorreo() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró el Correo',
        type: "error"
    });
}
function FaltaPais() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No definió el País',
        type: "error"
    });
}
function FaltaPaisTienda() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No definió el País tienda',
        type: "error"
    });
}
function FaltaDepartamento() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No definió el Departamento',
        type: "error"
    });
}
function FaltaProvincia() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No definió la Provincia',
        type: "error"
    });
}
function FaltaDistrito() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No definió el Distrito',
        type: "error"
    });
}
function FaltaDireccion() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró la Dirección',
        type: "error"
    });
}
function CodigoRepetido() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'DNI ya registrado',
        type: "error"
    });
}
function PatrocinadorIncorrecto() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'Error en el patrocinador',
        type: "error"
    });
}
function UsuarioRepetido() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'Ya existe ese nombre de Usuario',
        type: "error"
    });
}
function FaltaRuc() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró el número de RUC',
        type: "error"
    });
}
function ImagenExiste() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'Porfavor Cambie el nombre de la Imagen',
        type: "error"
    });
}
function DeleteCDR() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No puede eliminar un CDR, contactase con el área de Sistemas',
        type: "error"
    });
}

// Llamar la funcon de ajax al cargar el documento
if (filtroaplicado == 0) {
    sendDataAjax();
} else { filtroaplicado = 0; }