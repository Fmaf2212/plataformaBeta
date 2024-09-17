var img = "", imgArchive = "", imgDirection = "";
var nameImageProfile = "", nameArchiveDNI = "", nameArchiveDireccion = "";

$.ajax({
    type: "POST",
    url: "EditarPerfil.aspx/GetPais",
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
    url: "EditarPerfil.aspx/ListaDatosClienteByDocumento",
    data: {},
    contentType: 'application/json; charset=utf-8',
    error: function (xhr, ajaxOptions, throwError) {
        console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
    },
    success: function (data) {
        console.log(data.d);
        Guardar(data.d);
    }
});

$("#cboPais").change(function () {
    var params = new Object();
    params.pais = $("#cboPais").val();
    params = JSON.stringify(params);

    $.ajax({
        type: "POST",
        url: "EditarPerfil.aspx/GetDepartamentosByPais",
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
        url: "EditarPerfil.aspx/GetProvinciaByDepartamento",
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
        url: "EditarPerfil.aspx/GetDistritoByProvincia",
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

function CargarPaises() {

    $.ajax({
        type: "POST",
        url: "EditarPerfil.aspx/GetPais",
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
        url: "EditarPerfil.aspx/GetDepartamentosByPais",
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
        url: "EditarPerfil.aspx/GetProvinciaByDepartamento",
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
        url: "EditarPerfil.aspx/GetDistritoByProvincia",
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

function Guardar(obj) {

    var tdoc, sexo, estable, imagen, x, establePremio;
    x = obj[0].imagen;

    if (obj[0].tipoDoc == "DNI") {
        tdoc = "1";
    } else if (obj[0].tipoDoc = "PASAPORTE") {
        tdoc = "2";
    }
    if (obj[0].sexo == "MASCULINO") {
        sexo = "1";
    } else if (obj[0].sexo == "FEMENINO") {
        sexo = "2";
    }
    if (obj[0].idtipoEstablecimiento == "" | obj[0].idtipoEstablecimientoPremio == null) {
        estable = "0";
    } else { estable = obj[0].idtipoEstablecimiento; }

    if (obj[0].idtipoEstablecimientoPremio == "" | obj[0].idtipoEstablecimientoPremio == null) {
        establePremio = "0";
    } else { establePremio = obj[0].idtipoEstablecimientoPremio; }

    img = (obj[0].imagen == "") ? "" : obj[0].imagen.trim();
    imagen = (obj[0].imagen == "") ? "" : obj[0].imagen.trim();
    imgArchive = obj[0].archivo_DNI;
    imgDirection = obj[0].archivo_Direccion;

    $("#txtUs").val(obj[0].usuario);
    $("#txtCla").val(obj[0].clave);
    $("#txtNombre").val(obj[0].nombre);
    $("#txtApePat").val(obj[0].apellidoPat);
    $("#txtApeMat").val(obj[0].apellidoMat);
    $("#txtDocumento").val(obj[0].numeroDoc);
    $("#datepicker").val(obj[0].fechaNac);
    $("#txtDireccion").val(obj[0].direccion);
    $("#txtReferencia").val(obj[0].referencia);
    $("#txtTelefono").val(obj[0].telefono);
    $("#txtCelular").val(obj[0].celular);
    $("#txtCorreo").val(obj[0].correo);
    $("#txtRuc").val(obj[0].ruc);
    $("#txtCuenta").val(obj[0].nroCtaInterbancaria);
    $("#txtBanco").val(obj[0].nombreBanco);
    $("#txtDeposito").val(obj[0].nroCtaDeposito);
    $("#txtDetracciones").val(obj[0].nroCtaDetraccion);
    $("#ComboSexo").val(sexo);
    $("#cboTipoDoc").val(tdoc);
    $("#cboPais").change(function () {
        CargarDepartamentos();
    });
    CargarPaises();
    $("#cboPais").val(obj[0].idpais);
    CargarDepartamentos();
    $("#cboDepartamento").val(obj[0].iddepartamento);
    CargarProvincia();
    $("#cboProvincia").val(obj[0].idprovincia);
    CargarDistrito();
    $("#cboDistrito").val(obj[0].idditrito);
    $("#cboTipoCliente").val(obj[0].idtipoCliente);
    $("#cboTipoEstablecimiento").val(estable);
    $("#ddlPremio").val(establePremio);
    $("#NumeroEditar").text(obj[0].celular);
    $("#txtUbigeo").text(obj[0].Ubigeo);
    $("#CorreoEditar").text(obj[0].correo);
    if (imagen == "") {
        document.getElementById("FotoCliente").src = "img/Preview-icon1.png";
    } else {
        document.getElementById("FotoCliente").src = imagen;
    }
}

$("#btnSave").click(function (e) {

    e.preventDefault();
    var correo = $("#txtCorreo").val();
    var ruc = $("#txtRuc").val();
    var obj = JSON.stringify({ correoS: correo });

    if (ruc == "20602114121") {
        RUCIncorrecto();
    } else {
        $.ajax({
            type: "POST",
            url: "EditarPerfil.aspx/ValidarCorreo",
            data: obj,
            dataType: "json",
            contentType: 'application/json; charset=utf-8',
            error: function (xhr, ajaxOptions, throwError) {
                console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
            },
            success: function (response) {
                console.log(response);
                if (response.d == true) {
                    UpdateFile();
                } else {
                    FaltaCorreo();
                }
            }
        });
    }

});

async function DeleteFile(image) {

    var obj = JSON.stringify({ imagen: image });

    try {
        result = await $.ajax({
            url: "EditarPerfil.aspx/EliminarImagen",
            type: 'POST',
            data: obj,
            dataType: "json",
            contentType: 'application/json; charset=utf-8'
        });
    } catch (error) {
        console.error(error);
    }

    //$.ajax({
    //    url: "EditarPerfil.aspx/EliminarImagen",
    //    type: "POST",
    //    data: obj,
    //    dataType: "json",
    //    contentType: 'application/json; charset=utf-8',
    //    error: function (xhr, ajaxOptions, throwError) {
    //        console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
    //    },
    //    success: function (response) {
    //    }
    //});
}

async function UpdateFile() {
    var valida = document.getElementById('fileUpload').files.length;
    var file1 = document.getElementById('archiveDNI').files.length;
    var file2 = document.getElementById('archiveAddress').files.length;
    var fileUpload, files, extension;

    if (valida != 0) {
        await DeleteFile(img);
        fileUpload = $("#fileUpload").get(0);
        files = fileUpload.files;
        extension = files[0].name.split('.').pop();
        nameImageProfile = await UploadFile(files[0], "socios", extension);
    }

    if (file1 != 0) {
        /*Dni*/
        await DeleteFile(imgArchive);
        fileUpload = $("#archiveDNI").get(0);
        files = fileUpload.files;
        extension = files[0].name.split('.').pop();
        nameArchiveDNI = await UploadFile(files[0], "archiveDni", extension);
    }

    if (file2 != 0) {
        /*Direccion*/
        await DeleteFile(imgDirection);
        fileUpload = $("#archiveAddress").get(0);
        files = fileUpload.files;
        extension = files[0].name.split('.').pop();
        nameArchiveDireccion = await UploadFile(files[0], "archiveAddress", extension);
    }

    await updateDataAjax();
}

async function UploadFile(file, type, extension, ) {
    let result;
    var data = new FormData();
    data.append("data", file);
    data.append("archivo", type);
    data.append("extension", extension);

    try {
        result = await $.ajax({
            url: "FileUpload.ashx",
            type: 'POST',
            data: data,
            contentType: false,
            processData: false,
        });

        return result.fileNameR;
    } catch (error) {
        console.error(error);
    }
}

function updateDataAjax() {

    var tdoc, sexo, imagenCliente, establecimiento;
    tdoc = $("#cboTipoDoc").val();
    sexo = $("#ComboSexo").val();

    var valida = document.getElementById('fileUpload').files.length;
    var file1 = document.getElementById('archiveDNI').files.length;
    var file2 = document.getElementById('archiveAddress').files.length;

    imagenCliente = (valida == 0) ? img : nameImageProfile;
    imgArchive = (file1 == 0) ? imgArchive : nameArchiveDNI;
    imgDirection = (file2 == 0) ? imgDirection : nameArchiveDireccion;

    if (tdoc == "1") {
        tdoc = "DNI";
    } else if (tdoc == "2") {
        tdoc = "PASAPORTE";
    }
    if (sexo == "1") {
        sexo = "MASCULINO";
    } else if (sexo == "2") {
        sexo = "FEMENINO";
    }

    var obj = JSON.stringify({
        usuarioUd: $("#txtUs").val(), claveUd: $("#txtCla").val(), nombresUd: $("#txtNombre").val(), apellidoPatUd: $("#txtApePat").val(), apellidoMatUd: $("#txtApeMat").val(),
        fechaNacUd: $("#datepicker").val(), sexoUd: sexo, tipoDocUd: tdoc, numeroDocUd: $("#txtDocumento").val(), direccionUd: $("#txtDireccion").val(),
        referenciaUd: $("#txtReferencia").val(), telefonoUd: $("#txtTelefono").val(), celularUd: $("#txtCelular").val(), paisUd: $("#cboPais").val(), departamentoUd: $("#cboDepartamento").val(),
        provinciaUd: $("#cboProvincia").val(), distritoUd: $("#cboDistrito").val(), correoUd: $("#txtCorreo").val(), rucUd: $("#txtRuc").val(), interbancariaUd: $("#txtCuenta").val(),
        bancoUd: $("#txtBanco").val(), depositoUd: $("#txtDeposito").val(), detraccionUd: $("#txtDetracciones").val(), imagenUd: imagenCliente, establecimientoUd: $("#cboTipoEstablecimiento option:selected").text(),
        establecimientoUdPremio: $("#ddlPremio option:selected").text(), ubigeoUd: $("#txtUbigeo").val(), archivoDNI: imgArchive, archivoDireccion: imgDirection
    });

    $.ajax({
        type: "POST",
        url: "EditarPerfil.aspx/ActualizarCliente",
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
                text: 'Perfil Actualizado',
                type: "success"
            }).then(function () {
                window.location = "EditarPerfil.aspx";
            });
        }
    });
}
function FaltaCorreo() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'Formato de correo incorrecto: ejemplo aaa@gmail.com',
        type: "error"
    });
}
function RUCIncorrecto() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'El RUC ingresado pertenece a Santa Natura, porfavor proceda a modificarlo',
        type: "error"
    });
}