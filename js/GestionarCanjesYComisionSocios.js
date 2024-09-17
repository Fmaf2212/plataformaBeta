const miPrimerCodiguito = () => {
    let eliminarMostrandoTotalRegistros1 = document.querySelector("#tbl_facturacion_wrapper>div:nth-child(3)>div:nth-child(1)");
    let eliminarMostrandoTotalRegistros2 = document.querySelector("#tbl_facturacion_wrapper>div:nth-child(3)");
    eliminarMostrandoTotalRegistros2.removeChild(eliminarMostrandoTotalRegistros1)

    let expandirAnteriorSiguiente = document.querySelector("#tbl_facturacion_wrapper>div:nth-child(3)>div>div>ul");
    expandirAnteriorSiguiente.style.width = "100%";
    expandirAnteriorSiguiente.style.display = "flex";
    expandirAnteriorSiguiente.style.margin = "0";


    //const liAnterior = document.createElement("li");
    //liAnterior.textContent = "Anterior";
    //let elementoUL1 = document.querySelector("#tbl_facturacion_wrapper>div:nth-child(3)>div>div>ul");
    //elementoUL1.insertAdjacentElement("afterbegin", liAnterior);
    //liAnterior.style.display = "flex";
    //liAnterior.style.alignItems = "center";
    //liAnterior.style.marginRight = "10px";

    //const liSiguiente = document.createElement("li");
    //liSiguiente.textContent = "Siguiente";
    //let elementoUL2 = document.querySelector("#tbl_facturacion_wrapper>div:nth-child(3)>div>div>ul");
    //elementoUL2.appendChild(liSiguiente);
    //liSiguiente.style.display = "flex";
    //liSiguiente.style.alignItems = "center";
    //liSiguiente.style.marginLeft = "10px";

    //let cambiarAnteriorPorSignoMenor = document.querySelector("#tbl_facturacion_wrapper>div:nth-child(3)>div>div>ul>li:nth-child(2)>a");
    //cambiarAnteriorPorSignoMenor.textContent = "<";
    //cambiarAnteriorPorSignoMenor.style.padding = "0px 5px";

    //let cambiarSiguientePorSignoMayor = document.querySelector("#tbl_facturacion_wrapper>div:nth-child(3)>div>div>ul>li:nth-child(3)>a");
    //cambiarSiguientePorSignoMayor.textContent = ">";
    //cambiarSiguientePorSignoMayor.style.padding = "0px 5px";

    //let moverDerechaPaginacion = document.querySelector("#tbl_facturacion_wrapper>div:nth-child(3)>div");
    //moverDerechaPaginacion.style.display = "flex";

    /* --------------------------------------------------------------------------------------------------------------- */

    let quitandoTextoLabelBuscar = document.querySelector("#tbl_facturacion_wrapper>div:nth-child(1)>div:nth-child(2)>div>label");

    quitandoTextoLabelBuscar.firstChild.textContent = "";

    let añadiendoPlaceholder = document.querySelector("#tbl_facturacion_wrapper>div:nth-child(1)>div:nth-child(2)>div>label>input");
    añadiendoPlaceholder.placeholder = '  Buscar';

    /* -------------------------------------------------------------------------------------------------------------- */

    //Quitar clase "table-responsive"
    let quitandoClaseResponsive = document.querySelector(".divFacturaciónComisiones > div:nth-last-child(1)");
    quitandoClaseResponsive.classList.toggle("table-responsive");

    /* -------------------------------------------------------------------------------------------------------------- */

    //Quitar clase "table-responsive"
    let quitandoPadding = document.querySelector(".divFacturaciónComisiones > div:nth-child(3)");
    quitandoPadding.style.padding = "15px 0";

    /* -------------------------------------------------------------------------------------------------------------- */
    //Para crear el div que va como table-responsive para la tabla
    var newDiv = document.createElement("div");
    newDiv.id = "tablediv";

    var tablaFacturacion = document.getElementById("tbl_facturacion");
   
    newDiv.append(tablaFacturacion);
    
    let body = document.getElementById("tbl_facturacion_wrapper"); 
    body.appendChild(newDiv);

    document.getElementById("tablediv").style.overflowX = "auto";

    /* ---------------------------------------------------------------------------------------------------------- */

    var divFacturacionWrapper = document.getElementById("tbl_facturacion_wrapper");
    divFacturacionWrapper.style.display = "grid";

    let divRowPagination = document.querySelector("#tbl_facturacion_wrapper>div:nth-child(2)");
    divRowPagination.style.gridRow = "3";
    divRowPagination.style.marginTop = "33px";

    let divRowPagination_hijo = document.querySelector("#tbl_facturacion_wrapper>div:nth-child(2)>div");
    divRowPagination_hijo.style.display = "flex";

    /* ---------------------------------------------------------------------------------------------------------- */
    //let bloqueSuperior = document.querySelector(".divFacturaciónComisiones__bloqueSuperior");
    //bloqueSuperior.id = "divFacturaciónComisiones__bloqueSuperior";
    //let anteriorSiguiente = document.querySelector("#tbl_facturacion_wrapper > div:nth-child(2)");
    //anteriorSiguiente.id = "antSig";

    /* ---------------------------------------------------------------------------------------------------------- */

    //let body2 = document.getElementById("divFacturaciónComisiones__bloqueSuperior");

    //let bloqueSuperiorSpan = document.querySelector(".divFacturaciónComisiones__bloqueSuperior > span");
    //let bloqueSuperiorButton = document.querySelector(".divFacturaciónComisiones__bloqueSuperior > button");
    //let bloqueAntSig = document.getElementById("antSig");

    //var bloqueSuperior__izquierda = document.createElement("div");
    //bloqueSuperior__izquierda.id = "bloqueSuperior__izquierda";

    //var bloqueSuperior__derecha = document.createElement("div");
    //bloqueSuperior__derecha.id = "bloqueSuperior__derecha";

    //bloqueSuperior__izquierda.append(bloqueSuperiorSpan);
    //bloqueSuperior__izquierda.append(bloqueSuperiorButton);
    //bloqueSuperior__derecha.append(bloqueAntSig);

    //body2.appendChild(bloqueSuperior__izquierda);
    //body2.appendChild(bloqueSuperior__derecha);
}


//DEFINIR VARIABLES
var tabla, aaf, data, estados, filtrado = 0, periodo = 0, listaDetalles;

//FUNCIONES PARA LISTAR
$("#btnFiltrar").click(function (e) {
    e.preventDefault();
    filtrado = 1;
    if ($("#cboPeriodo").val() == 0) {
        SeleccionesPeriodo();
    }
    else {
        periodo = $("#cboPeriodo").val();
        ComboPeriodoCanje();
        sendDataAjax();
    }
}); 

$.ajax({
    type: "POST",
    url: "Bonificaciones.aspx/ComboPeriodoComision",
    data: "{}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    async: false,
    success: function (result) {
        $("#cboPeriodo").empty();
        $("#cboPeriodo").append("<option value='0'>Periodo</option>");
        $.each(result.d, function (key, value) {
            $("#cboPeriodo").append($("<option></option>").val(value.idPeriodo).html(value.nombrePeriodo));
        });
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus + ": " + XMLHttpRequest.responseText);
    }
});

function ComboPeriodoCanje() {
    if (filtrado = 0) { periodo = 0; }
    var obj = JSON.stringify({
        periodoS: periodo
    });

    $.ajax({
        type: "POST",
        url: "GestionarCanjesComisiones.aspx/ListaPeriodoModalCanjesAbono",
        data: obj,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#ddlPeriodoCanje").empty();
            $("#ddlPeriodoCanje").append("<option value='0'>--Select--</option>");
            $.each(result.d, function (key, value) {
                $("#ddlPeriodoCanje").append($("<option></option>").val(value.idPeriodo).html(value.nombrePeriodo));
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });
}

//LISTADO DE CANJES

function sendDataAjax() {
    if (filtrado = 0) { periodo = 0; }
    var obj = JSON.stringify({
        periodoS: periodo
    });
    $.ajax({
        type: "POST",
        url: "GestionarCanjesComisiones.aspx/ListaCanjesAbono",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (dataS) {
            console.log(dataS.d);
            addRowDT(dataS.d);
        }
    });
}

function addRowDT(obj) {
    tabla = $("#tbl_facturacion").DataTable();
    tabla.fnClearTable();
    var sellado = "";
    for (var i = 0; i < obj.length; i++) {
        var url = "facturacion/" + obj[i].Archivo;
        if (obj[i].Sellado == true) { sellado = "none"; } else { sellado = ""; }
        
        tabla.fnAddData([
            obj[i].DniCliente,
            obj[i].Nombres,
            obj[i].Comision,
            obj[i].TipoCliente,
            obj[i].RUC,
            '<p> <a href="' + url + '">' + obj[i].Archivo + '</a></p>',
            obj[i].SaldoDisponible,
            obj[i].EstadoSaldoDisponible,
            '<button value="red" title="red" class="btn btn-success btn-red"><i class="fa fa-network-wired"></i></button>',
            '<button value="Actualizar" title="Actualizar" class="btn btn-primary btn-update" data-toggle="modal" data-target="#exampleModal" style="display:' + sellado + '"><i class="far fa-edit"></i></button>',
            '<button value="delete" title="delete" class="btn btn-danger btn-delete" style="display:' + sellado + '"><i class="far fa-minus-square"></i></button>',
            '<button value="deleteGeneral" title="deleteGeneral" class="btn btn-success btn-general" style="background-color: #730505; border-color:#730505; display:' + sellado + '"><i class="fas fa-exclamation-triangle"></i></button>',
            '<button value="lock" title="lock" class="btn btn-success btn-lock" style="background-color: #292f2c; border-color:#292f2c; display:' + sellado + '"><i class="fas fa-lock"></i></button>',
            obj[i].IdCliente,
            obj[i].Id_Datos,
            obj[i].Sellado,
            obj[i].Archivo,
            obj[i].IdPeriodo
        ]);
    }

    miPrimerCodiguito();
}

// ABRIR MODAL
$("#btnNuevoPDF").click(function (e) {
    $("#btnRegistrar").show();
    $("#btnActualizar").hide();
    $("#exampleModal input").val("");
    $('.file-upload').file_upload();
    $('.file-upload-text').text("Ingrese el archivo PDF ...");
});

//FUNCIONES PARA LINEA MULTINIVEL
$(document).on('click', '.btn-red', function (e) {
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    data = tabla.fnGetData(row);
    const baseUrl = 'https://tienda.mundosantanatura.com/LineaMultinivelControlAbono.aspx?';
    const query = 'idcliente=' + data[13] + '&idperiodo=' + data[17];
    const encodedQuery = encodeURIComponent(query);
    const url = baseUrl + encodedQuery;
    window.open(url, '_blank');
});

//FUNCIONES PARA SELLAR REGISTRO
$(document).on('click', '.btn-lock', function (e) {
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    data = tabla.fnGetData(row);
    SellarArchivo();
});

function SellarArchivo() {

    var obj = JSON.stringify({ idDatoS: data[14] });

    $.ajax({
        url: "GestionarCanjesComisiones.aspx/SellarRegistro_ControlCanjes",
        type: "POST",
        data: obj,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            console.log(response);
            confirmacionSellado();
        }
    });
}

//FUNCIONES PARA ELIMINAR REGISTRO
$(document).on('click', '.btn-general', function (e) {
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    data = tabla.fnGetData(row);
    Swal.fire({
        title: 'Estás seguro?',
        text: "No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
        if (result.isConfirmed) {
            EliminarRegistroGeneral();
        }
    });
});

function EliminarRegistroGeneral() {

    var obj = JSON.stringify({ archivoS: data[16], idDatoS: data[14] });

    $.ajax({
        url: "GestionarCanjesComisiones.aspx/EliminarRegistro_ControlCanjes",
        type: "POST",
        data: obj,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            console.log(response);
            if (response.d == false) { SinPermisos(); }
            else {
                registroEliminado();
            }
        }
    });
}

//FUNCIONES PARA ACTUALIZAR
$(document).on('click', '.btn-update', function (e) {
    $("#btnRegistrar").hide();
    $("#btnActualizar").show();
    $("#exampleModal select").val("0");
    $('.file-upload').file_upload();
    $('.file-upload-text').text("Ingrese el archivo PDF ...");
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    data = tabla.fnGetData(row);
    if (data[15] == true) {
        RegistroSellado();
    } else {
        ComboPeriodoCanje();
        ListaDetalleCanjes();
    }
});

function ListaDetalleCanjes() {
    var obj = JSON.stringify({
        idDatos: data[14]
    });
    $.ajax({
        type: "POST",
        url: "GestionarCanjesComisiones.aspx/ListaDatalleCanjesAbono",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (dataS) {
            console.log(dataS.d);
            fillModalData(dataS.d);
        }
    });
}

function fillModalData(listaDetalles) {

    document.getElementById("ddlPeriodoCanje").value = listaDetalles[0].IdPeriodo;
    document.getElementById("ddlEstadoSaldo").value = listaDetalles[0].EstadoSaldoDisponible;
    document.getElementById("ddlSolicitaCanje").value = listaDetalles[0].SolicitudCanjeCombo;
    document.getElementById("ddlEstadoCanje").value = listaDetalles[0].EstadoCanje;
    document.getElementById("ddlCorrecion").value = listaDetalles[0].Correcion;
    $("#txtMontoCanje").val(listaDetalles[0].MontoCanje);
    $("#txtTickets").val(listaDetalles[0].Tickets);
    $("#txtObservacion").val(listaDetalles[0].Observacion);
}

$("#btnActualizar").click(function (e) {
    e.preventDefault();
    updateDataAjax();
});

function updateDataAjax() {

    var idPeriodo, estadoSaldo, solicitud, monto, estadoCanje, ticket, observacion, correcion;

    idPeriodo = $("#ddlPeriodoCanje").val();
    estadoSaldo = $("#ddlEstadoSaldo").val();
    solicitud = $("#ddlSolicitaCanje").val();
    estadoCanje = $("#ddlEstadoCanje").val();
    correcion = $("#ddlCorrecion").val();
    monto = parseFloat($("#txtMontoCanje").val());
    ticket = $("#txtTickets").val();
    observacion = $("#txtObservacion").val();

    var obj = JSON.stringify({
        idDatoS: data[14], idPeriodoS: idPeriodo, estadoSaldoDiS: estadoSaldo, solicitudCanjeS: solicitud,
        montoS: monto, estadoCanjeS: estadoCanje, ticketS: ticket, observacionS: observacion, correcionS: correcion,
        idClienteS: data[13]
    });

    $.ajax({
        type: "POST",
        url: "GestionarCanjesComisiones.aspx/ActualizarDetalleCanjesAbono",
        data: obj,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            actualizado();
        }
    });
}

//FUNCIONES PARA ELIMINAR PDF
$(document).on('click', '.btn-delete', function (e) {
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    data = tabla.fnGetData(row);
    Swal.fire({
        title: 'Estás seguro?',
        text: "No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
        if (result.isConfirmed) {
            DeleteFile();
        }
    });
});

function DeleteFile() {

    var obj = JSON.stringify({ archivo: data[16], idDatoS: data[14] });

    $.ajax({
        url: "GestionarCanjesComisiones.aspx/EliminarArchivo",
        type: "POST",
        data: obj,
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (response) {
            console.log(response);
            pdfEliminado();
        }
    });
}

//ALERTAS
function actualizado() {
    Swal.fire({
        icon: 'success',
        title: 'Perfecto!',
        text: 'Detalle Actualizado'
    }).then(function () {
        $('#btnCancelar').click();
        $('.modal-backdrop').remove();
        sendDataAjax();
    });
}
function pdfEliminado() {
    Swal.fire({
        icon: 'success',
        title: 'Perfecto!',
        text: 'El pdf ha sido eliminado'
    }).then(function () {
        sendDataAjax();
    });
}
function registroEliminado() {
    Swal.fire({
        icon: 'success',
        title: 'Perfecto!',
        text: 'El registro ha sido eliminado'
    }).then(function () {
        sendDataAjax();
    });
}
function confirmacionSellado() {
    Swal.fire({
        icon: 'success',
        title: 'Perfecto!',
        text: 'El registro ha sido sellado'
    }).then(function () {
        sendDataAjax();
    });
}
function CambiarNombrePDF() {
    Swal.fire({
        icon: 'error',
        title: 'Ooops...!',
        text: 'El nombre del archivo ya existe'
    });
}
function SeleccionesPeriodo() {
    Swal.fire({
        icon: 'error',
        title: 'Ooops...!',
        text: 'Debe seleccionar un periodo'
    });
}
function RegistroSellado() {
    Swal.fire({
        icon: 'error',
        title: 'Ooops...!',
        text: 'Este registro ya se encuentra sellado'
    });
}
function SinPermisos() {
    Swal.fire({
        icon: 'error',
        title: 'Ooops...!',
        text: 'Usted no tiene permisos para realizar esta acción'
    });
}

sendDataAjax();