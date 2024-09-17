var tabla, idcliente;

tabla = $('#table_id').dataTable({
    responsive: true
});

sendDataAjax();


const miPrimerCodiguito = () => {
    let eliminarMostrandoTotalRegistros1 = document.querySelector("#table_id_wrapper>div:nth-child(3)>div:nth-child(1)");
    let eliminarMostrandoTotalRegistros2 = document.querySelector("#table_id_wrapper>div:nth-child(3)");
    eliminarMostrandoTotalRegistros2.removeChild(eliminarMostrandoTotalRegistros1)

    let expandirAnteriorSiguiente = document.querySelector("#table_id_wrapper>div:nth-child(3)>div>div");
    expandirAnteriorSiguiente.style.width = "100%";
    expandirAnteriorSiguiente.style.display = "flex";
    expandirAnteriorSiguiente.style.margin = "0";


    //const liAnterior = document.createElement("li");
    //liAnterior.textContent = "Anterior";
    //let elementoUL1 = document.querySelector("#table_id_wrapper>div:nth-child(3)>div>div>ul");
    //elementoUL1.insertAdjacentElement("afterbegin", liAnterior);
    //liAnterior.style.display = "flex";
    //liAnterior.style.alignItems = "center";
    //liAnterior.style.marginRight = "10px";

    //const liSiguiente = document.createElement("li");
    //liSiguiente.textContent = "";
    //let elementoUL2 = document.querySelector("#table_id_wrapper>div:nth-child(3)>div>div>ul");
    //elementoUL2.appendChild(liSiguiente);
    //liSiguiente.style.display = "flex";
    //liSiguiente.style.alignItems = "center";
    //liSiguiente.style.marginLeft = "10px";

    //document.getElementById("table_id_previous").style.padding = "0";
    //let cambiarAnteriorPorSignoMenor = document.querySelector("#table_id_wrapper>div:nth-child(3)>div>div>ul>li:nth-child(2)>a");   
    //cambiarAnteriorPorSignoMenor.textContent = "<";
    //cambiarAnteriorPorSignoMenor.style.padding = "0px 5px";
    //cambiarAnteriorPorSignoMenor.style.color = "var(--Light-primary)";
    //cambiarAnteriorPorSignoMenor.style.borderColor = "var(--Light-primary)";
    //cambiarAnteriorPorSignoMenor.style.borderRadius = "4px";


    //let cambiarEstilosDivNumeroPaginacion = document.querySelector("#table_id_wrapper>div:nth-child(3)>div>div>ul>li:nth-child(3)");
    //cambiarEstilosDivNumeroPaginacion.style.padding = "0px 5px";
    //let cambiarEstilosNumeroPaginacion = document.querySelector("#table_id_wrapper>div:nth-child(3)>div>div>ul>li:nth-child(3)>a");
    //cambiarEstilosNumeroPaginacion.style.backgroundColor = "#fff";
    //cambiarEstilosNumeroPaginacion.style.color = "#565656";
    //cambiarEstilosNumeroPaginacion.style.borderColor = "#fff";
    //cambiarEstilosNumeroPaginacion.style.padding = "0px 5px";

    //document.getElementById("table_id_next").style.padding = "0";
    //let cambiarSiguientePorSignoMayor = document.querySelector("#table_id_wrapper>div:nth-child(3)>div>div>ul>li:nth-last-child(2)>a");
    //cambiarSiguientePorSignoMayor.textContent = ">";
    //cambiarSiguientePorSignoMayor.style.padding = "0px 5px";
    //cambiarSiguientePorSignoMayor.style.color = "var(--Light-primary)";
    //cambiarSiguientePorSignoMayor.style.borderColor = "var(--Light-primary)";
    //cambiarSiguientePorSignoMayor.style.borderRadius = "4px";



    let añadiendoTableResponsive = document.querySelector("#table_id_wrapper>div:nth-child(2)>div");
    añadiendoTableResponsive.classList.add("table-responsive");

    let quitandoTextoLabelBuscar = document.querySelector("#table_id_wrapper>div:nth-child(1)>div:nth-child(2)>div>label");
    //console.log(quitandoTextoLabelBuscar.textContent);
    //console.log(quitandoTextoLabelBuscar.firstElementChild);
    quitandoTextoLabelBuscar.firstChild.textContent = "";
    //quitandoTextoLabelBuscar.innerHTML = "<input type='search' class='form-control-filter input-sm' placeholder='  Buscar' aria-controls='table_id'>";

    //let quitandoTextoDelLabel = document.querySelector("#table_id_wrapper>div:nth-child(1)>div:nth-child(2)>div>label");
    //quitandoTextoDelLabel.textContent = "";
    //console.log(quitandoTextoDelLabel.textContent);

    let añadiendoPlaceholder = document.querySelector("#table_id_wrapper>div:nth-child(1)>div:nth-child(2)>div>label>input");
    añadiendoPlaceholder.placeholder = '  Buscar';
    console.log(window.innerWidth);

    let cambiarColDe7a12 = document.querySelector("#table_id_wrapper>div:nth-child(3)>div");
    cambiarColDe7a12.classList.replace("col-sm-7", "col-sm-12")
}

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "CompletarPregistro.aspx/ListarPreRegistro",
        data: {},
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            addRowDT(data.d);
            $('#ddlUpline').val();
        }
    });
}

function DatosCliente(idcliente) {
    var obj = JSON.stringify({ idcliente: idcliente });
    $.ajax({
        type: "POST",
        url: "CompletarPregistro.aspx/ListarActualizacionDatosPreregistro",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            var Dd = data.d;
            $("#ddlTC").val(Dd[0].tipoCliente);

            if (Dd[0].tipoCliente == "01") {
                $('#ddlUpline').attr("disabled", false);
                $("#ddlUpline").val(Dd[0].upline).trigger('change');
            } else {
                $("#ddlUpline").val("0").trigger('change');;
                $('#ddlUpline').attr("disabled", true);
            }
            
        }
    });
}

function addRowDT(obj) {
    console.log('entra');

    tabla.fnClearTable();
    for (var i = 0; i < obj.length; i++) {
        tabla.fnAddData([
            obj[i].FechaRegistro,
            obj[i].Documento,
            obj[i].Nombres,
            obj[i].Apellidos,
            obj[i].Nombres_Upline,
            obj[i].Paquete,
            '<button title="Actualizar" type="button" class="btn btn-primary btn-comp" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-refresh"></i></button>',
            obj[i].IdPaquete,
            obj[i].IdCliente
        ]);
    }

    //for (var i = 0; i < 120; i++) {
    //    tabla.fnAddData([
    //        "ejemplo WWW",
    //        "ejemplo WWW",
    //        "ejemplo WWW",
    //        "ejemplo WWW",
    //        "ejemplo WWW",
    //        "ejemplo WWW",
    //        '<button title="Actualizar" type="button" class="btn btn-primary btn-comp" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-refresh"></i></button>',
    //        "ejemplo WWW",
    //        "ejemplo WWW",
    //    ]);
    //}

    miPrimerCodiguito();
}

ddlTC.onchange = function () {

    if (this.value == "01") {
        $('#ddlUpline').attr("disabled", false);
    } else if (this.value == "03") {
        $("#ddlUpline").val("0").trigger('change');;
        $('#ddlUpline').attr("disabled", true);

    } else if (this.value == "05") {
        $("#ddlUpline").val("0").trigger('change');;
        $('#ddlUpline').attr("disabled", true);
    }
}

$(document).on('click', '.btn-comp', function (e) {
    e.preventDefault();
    var row2 = $(this).parent().parent()[0];
    var datax = tabla.fnGetData(row2);
    idcliente = datax[8];
    $('#txtNombre').val(datax[2] + " " + datax[3]);
    DatosCliente(datax[8]);
    //console.log(datax);
    //id2 = datax[8];
    //localStorage['STipoCompra'] = datax[7];
    //GuardarDatosPreregis(id2);
});

$("#btnActualizar").click(function (e) {
    Actualizar(idcliente);
});

function Actualizar(idcliente) {
    var upline = $('#ddlUpline').val();
    var tipocliente = $('#ddlTC').val();
    var obj = JSON.stringify({ idCliente: idcliente, upline: upline, tipoCliente: tipocliente });
    $.ajax({
        type: "POST",
        url: "CompletarPregistro.aspx/ActualizarDatosPreregistro",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            alertme();
        }
    });
}

function alertme() {
    Swal.fire({
        title: '¡EXCELENTE!',
        text: 'Se actualizaron los datos correctamente',
        type: "success"
    }).then(function () {
        $('#btnCancelar').click();
        $('.modal-backdrop').remove();
        sendDataAjax();
    });
}

//function GuardarDatosPreregis(idcliente) {
//    var obj = JSON.stringify({
//        idCliente: idcliente
//    });
//    $.ajax({
//        type: "POST",
//        url: "CompletarPregistro.aspx/GuardarDatosPreRegis",
//        data: obj,
//        contentType: 'application/json; charset=utf-8',
//        error: function (xhr, ajaxOptions, throwError) {
//            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
//        },
//        success: function (dataS) {
//            location.href = "TiendaSN.aspx";
//        }
//    });
//}