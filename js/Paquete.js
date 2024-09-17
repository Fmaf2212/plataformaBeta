//DEFINIR VARIABLES
var tabla, aaf, data, estados, idTexto;   

$(function () {
    $("#exampleModal input").autocomplete({
        source: function (request, responce) {
            $.ajax({
                url: "Autocompletado.asmx/FiltrarNombreProductos",
                method: "post",
                CORS: true,
                contentType: "application/json;charset=utf-8",
                data: "{ 'palabra': '" + request.term + "'}",
                dataType: 'json',
                success: function (data) {
                    responce(data.d);
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

//LISTADO DE PRODUCTOS
function addRowDT(obj) {
    tabla = $("#tbl_paquetes").DataTable();
    tabla.fnClearTable();
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].estado == true) {
            estados = "Activo";
        } else {
            estados = "Desactivado";
        }
        tabla.fnAddData([
            obj[i].idPaquete,
            obj[i].nombre,
            estados,
            '<button id="Actualizar" value="Actualizar" title="Actualizar" class="btn btn-primary btn-update" data-toggle="modal" data-target="#exampleModal"><i class="far fa-edit"></i></button>',
            obj[i].observacion,
            obj[i].paquetePais,
            obj[i].estado,
            obj[i].estado,
            obj[i].idProductoPais1,
            obj[i].idProductoPais2,
            obj[i].idProductoPais3,
            obj[i].idProductoPais4,
            obj[i].idProductoPais5,
            obj[i].cantidad1,
            obj[i].cantidad2,
            obj[i].cantidad3,
            obj[i].cantidad4,
            obj[i].cantidad5,
            obj[i].idPaquetePaisBolivia,
            obj[i].idPaquetePaisEcuador,
            obj[i].idProductoPais1Panama,
            obj[i].idPaquetePaisCR,
            obj[i].idPaquetePaisArgentina,
            obj[i].idPaquetePaisChile,
            obj[i].estadoBolivia,
            obj[i].estadoEcuador,
            obj[i].estadoPanama,
            obj[i].estadoCR,
            obj[i].estadoArgentina,
            obj[i].estadoChile,
            obj[i].idProductoPais1Bolivia,
            obj[i].idProductoPais2Bolivia,
            obj[i].idProductoPais3Bolivia,
            obj[i].idProductoPais4Bolivia,
            obj[i].idProductoPais5Bolivia,
            obj[i].idProductoPais1Ecuador,
            obj[i].idProductoPais2Ecuador,
            obj[i].idProductoPais3Ecuador,
            obj[i].idProductoPais4Ecuador,
            obj[i].idProductoPais5Ecuador,
            obj[i].idProductoPais1Panama,
            obj[i].idProductoPais2Panama,
            obj[i].idProductoPais3Panama,
            obj[i].idProductoPais4Panama,
            obj[i].idProductoPais5Panama,
            obj[i].idProductoPais1CR,
            obj[i].idProductoPais2CR,
            obj[i].idProductoPais3CR,
            obj[i].idProductoPais4CR,
            obj[i].idProductoPais5CR,
            obj[i].idProductoPais1Argentina,
            obj[i].idProductoPais2Argentina,
            obj[i].idProductoPais3Argentina,
            obj[i].idProductoPais4Argentina,
            obj[i].idProductoPais5Argentina,
            obj[i].idProductoPais1Chile,
            obj[i].idProductoPais2Chile,
            obj[i].idProductoPais3Chile,
            obj[i].idProductoPais4Chile,
            obj[i].idProductoPais5Chile,
            obj[i].cantidad1Bolivia,
            obj[i].cantidad2Bolivia,
            obj[i].cantidad3Bolivia,
            obj[i].cantidad4Bolivia,
            obj[i].cantidad5Bolivia,
            obj[i].cantidad1Ecuador,
            obj[i].cantidad2Ecuador,
            obj[i].cantidad3Ecuador,
            obj[i].cantidad4Ecuador,
            obj[i].cantidad5Ecuador,
            obj[i].cantidad1Panama,
            obj[i].cantidad2Panama,
            obj[i].cantidad3Panama,
            obj[i].cantidad4Panama,
            obj[i].cantidad5Panama,
            obj[i].cantidad1CR,
            obj[i].cantidad2CR,
            obj[i].cantidad3CR,
            obj[i].cantidad4CR,
            obj[i].cantidad5CR,
            obj[i].cantidad1Argentina,
            obj[i].cantidad2Argentina,
            obj[i].cantidad3Argentina,
            obj[i].cantidad4Argentina,
            obj[i].cantidad5Argentina,
            obj[i].cantidad1Chile,
            obj[i].cantidad2Chile,
            obj[i].cantidad3Chile,
            obj[i].cantidad4Chile,
            obj[i].cantidad5Chile,
            obj[i].nombre1Peru,
            obj[i].nombre2Peru,
            obj[i].nombre3Peru,
            obj[i].nombre4Peru,
            obj[i].nombre5Peru,
            obj[i].nombre1Bolivia,
            obj[i].nombre2Bolivia,
            obj[i].nombre3Bolivia,
            obj[i].nombre4Bolivia,
            obj[i].nombre5Bolivia,
            obj[i].nombre1Ecuador,
            obj[i].nombre2Ecuador,
            obj[i].nombre3Ecuador,
            obj[i].nombre4Ecuador,
            obj[i].nombre5Ecuador,
            obj[i].nombre1Panama,
            obj[i].nombre2Panama,
            obj[i].nombre3Panama,
            obj[i].nombre4Panama,
            obj[i].nombre5Panama,
            obj[i].nombre1CR,
            obj[i].nombre2CR,
            obj[i].nombre3CR,
            obj[i].nombre4CR,
            obj[i].nombre5CR,
            obj[i].nombre1Argentina,
            obj[i].nombre2Argentina,
            obj[i].nombre3Argentina,
            obj[i].nombre4Argentina,
            obj[i].nombre5Argentina,
            obj[i].nombre1Chile,
            obj[i].nombre2Chile,
            obj[i].nombre3Chile,
            obj[i].nombre4Chile,
            obj[i].nombre5Chile,
            obj[i].nombre5Chile
            

        ]);
    }
}

// IDBOLIVIAPAIS data[18]

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "GenerarPacketeProducto.aspx/ListaPaquetes",
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
    var estados;

    if (data[7] == "Activo") {
        estados = true;
    } else {
        estados = false;
    }

    $("#txtNombrePaquete").val(data[1]);
    $("#txtObservacion").val(data[4]);
    $("#tooglePeru").prop('checked', data[7]).change();
    $("#txtIDPeru1").val(data[90]);
    $("#txtPrecioPeru1").val(data[13]);
    $("#txtIDPeru2").val(data[91]);
    $("#txtPrecioPeru2").val(data[14]);
    $("#txtIDPeru3").val(data[92]);
    $("#txtPrecioPeru3").val(data[15]);
    $("#txtIDPeru4").val(data[93]);
    $("#txtPrecioPeru4").val(data[16]);
    $("#txtIDPeru5").val(data[94]);
    $("#txtPrecioPeru5").val(data[17]);
    $("#toogleBolivia").prop('checked', data[24]).change();
    $("#txtIDBolivia1").val(data[95]);
    $("#txtPrecioBolivia1").val(data[60]);
    $("#txtIDBolivia2").val(data[96]);
    $("#txtPrecioBolivia2").val(data[61]);
    $("#txtIDBolivia3").val(data[97]);
    $("#txtPrecioBolivia3").val(data[62]);
    $("#txtIDBolivia4").val(data[98]);
    $("#txtPrecioBolivia4").val(data[63]);
    $("#txtIDBolivia5").val(data[99]);
    $("#txtPrecioBolivia5").val(data[64]);
    $("#toogleEcuador").prop('checked', data[25]).change();
    $("#txtIDEcuador1").val(data[100]);
    $("#txtPrecioEcuador1").val(data[65]);
    $("#txtIDEcuador2").val(data[101]);
    $("#txtPrecioEcuador2").val(data[66]);
    $("#txtIDEcuador3").val(data[102]);
    $("#txtPrecioEcuador3").val(data[67]);
    $("#txtIDEcuador4").val(data[103]);
    $("#txtPrecioEcuador4").val(data[68]);
    $("#txtIDEcuador5").val(data[104]);
    $("#txtPrecioEcuador5").val(data[69]);
    $("#tooglePanama").prop('checked', data[26]).change();
    $("#txtIDPanama1").val(data[105]);
    $("#txtPrecioPanama1").val(data[70]);
    $("#txtIDPanama2").val(data[106]);
    $("#txtPrecioPanama2").val(data[71]);
    $("#txtIDPanama3").val(data[107]);
    $("#txtPrecioPanama3").val(data[72]);
    $("#txtIDPanama4").val(data[108]);
    $("#txtPrecioPanama4").val(data[73]);
    $("#txtIDPanama5").val(data[109]);
    $("#txtPrecioPanama5").val(data[74]);
    $("#toogleCR").prop('checked', data[27]).change();
    $("#txtIDCR1").val(data[110]);
    $("#txtPrecioCR1").val(data[75]);
    $("#txtIDCR2").val(data[111]);
    $("#txtPrecioCR2").val(data[76]);
    $("#txtIDCR3").val(data[112]);
    $("#txtPrecioCR3").val(data[77]);
    $("#txtIDCR4").val(data[113]);
    $("#txtPrecioCR4").val(data[78]);
    $("#txtIDCR5").val(data[114]);
    $("#txtPrecioCR5").val(data[79]);
    $("#toogleArgentina").prop('checked', data[28]).change();
    $("#txtIDArgentina1").val(data[115]);
    $("#txtPrecioArgentina1").val(data[80]);
    $("#txtIDArgentina2").val(data[116]);
    $("#txtPrecioArgentina2").val(data[81]);
    $("#txtIDArgentina3").val(data[117]);
    $("#txtPrecioArgentina3").val(data[82]);
    $("#txtIDArgentina4").val(data[118]);
    $("#txtPrecioArgentina4").val(data[83]);
    $("#txtIDArgentina5").val(data[119]);
    $("#txtPrecioArgentina5").val(data[84]);
    $("#toogleChile").prop('checked', data[28]).change();
    $("#txtIDChile1").val(data[120]);
    $("#txtPrecioChile1").val(data[85]);
    $("#txtIDChile2").val(data[121]);
    $("#txtPrecioChile2").val(data[86]);
    $("#txtIDChile3").val(data[122]);
    $("#txtPrecioChile3").val(data[87]);
    $("#txtIDChile4").val(data[123]);
    $("#txtPrecioChile4").val(data[88]);
    $("#txtIDChile5").val(data[124]);
    $("#txtPrecioChile5").val(data[89]);
}

// ABRIR MODAL
$("#btnNuevoPaquete").click(function (e) {
    $("#btnRegistrar").show();
    $("#btnActualizar").hide();
    $("#exampleModal input").val("");
    insertarPrecio();
    $("#exampleModal textarea").val("");
    $('input').iCheck('uncheck');
    $("#exampleModal input[type='checkbox']").prop('checked', false).change();
    // other initialization here, if you want to
    
    $('.solo-numero').numeric();
});

function insertarPrecio() {
    $("#txtPrecioPeru1").val("0.0");
    $("#txtPrecioPeru2").val("0.0");
    $("#txtPrecioPeru3").val("0.0");
    $("#txtPrecioPeru4").val("0.0");
    $("#txtPrecioPeru5").val("0.0");
    $("#txtPrecioBolivia1").val("0.0");
    $("#txtPrecioBolivia2").val("0.0");
    $("#txtPrecioBolivia3").val("0.0");
    $("#txtPrecioBolivia4").val("0.0");
    $("#txtPrecioBolivia5").val("0.0");
    $("#txtPrecioEcuador1").val("0.0");
    $("#txtPrecioEcuador2").val("0.0");
    $("#txtPrecioEcuador3").val("0.0");
    $("#txtPrecioEcuador4").val("0.0");
    $("#txtPrecioEcuador5").val("0.0");
    $("#txtPrecioPanama1").val("0.0");
    $("#txtPrecioPanama2").val("0.0");
    $("#txtPrecioPanama3").val("0.0");
    $("#txtPrecioPanama4").val("0.0");
    $("#txtPrecioPanama5").val("0.0");
    $("#txtPrecioCR1").val("0.0");
    $("#txtPrecioCR2").val("0.0");
    $("#txtPrecioCR3").val("0.0");
    $("#txtPrecioCR4").val("0.0");
    $("#txtPrecioCR5").val("0.0");
    $("#txtPrecioArgentina1").val("0.0");
    $("#txtPrecioArgentina2").val("0.0");
    $("#txtPrecioArgentina3").val("0.0");
    $("#txtPrecioArgentina4").val("0.0");
    $("#txtPrecioArgentina5").val("0.0");
    $("#txtPrecioChile1").val("0.0");
    $("#txtPrecioChile2").val("0.0");
    $("#txtPrecioChile3").val("0.0");
    $("#txtPrecioChile4").val("0.0");
    $("#txtPrecioChile5").val("0.0");
}

//FUNCIONES PARA REGISTRAR
$("#btnRegistrar").click(function (e) {
    var nombre = $("#txtNombrePaquete").val();
    var idPeru1 = $("#txtIDPeru1").val();
    var precioPeru1 = $("#txtPrecioPeru1").val();
    var idPeru2 = $("#txtIDPeru2").val();
    var precioPeru2 = $("#txtPrecioPeru2").val();
    var idPeru3 = $("#txtIDPeru3").val();
    var precioPeru3 = $("#txtPrecioPeru3").val();
    var idPeru4 = $("#txtIDPeru4").val()
    var precioPeru4 = $("#txtPrecioPeru4").val()
    var idPeru5 = $("#txtIDPeru5").val()
    var precioPeru5 = $("#txtPrecioPeru5").val()
    var idBolivia1 = $("#txtIDBolivia1").val();
    var precioBolivia1 = $("#txtPrecioBolivia1").val();
    var idBolivia2 = $("#txtIDBolivia2").val();
    var precioBolivia2 = $("#txtPrecioBolivia2").val();
    var idBolivia3 = $("#txtIDBolivia3").val();
    var precioBolivia3 = $("#txtPrecioBolivia3").val();
    var idBolivia4 = $("#txtIDBolivia4").val()
    var precioBolivia4 = $("#txtPrecioBolivia4").val()
    var idBolivia5 = $("#txtIDBolivia5").val()
    var precioBolivia5 = $("#txtPrecioBolivia5").val()
    var idEcuador1 = $("#txtIDEcuador1").val();
    var precioEcuador1 = $("#txtPrecioEcuador1").val();
    var idEcuador2 = $("#txtIDEcuador2").val();
    var precioEcuador2 = $("#txtPrecioEcuador2").val();
    var idEcuador3 = $("#txtIDEcuador3").val();
    var precioEcuador3 = $("#txtPrecioEcuador3").val();
    var idEcuador4 = $("#txtIDEcuador4").val();
    var precioEcuador4 = $("#txtPrecioEcuador4").val();
    var idEcuador5 = $("#txtIDEcuador5").val();
    var precioEcuador5 = $("#txtPrecioEcuador5").val();
    var idPanama1 = $("#txtIDPanama1").val();
    var precioPanama1 = $("#txtPrecioPanama1").val();
    var idPanama2 = $("#txtIDPanama2").val();
    var precioPanama2 = $("#txtPrecioPanama2").val();
    var idPanama3 = $("#txtIDPanama3").val();
    var precioPanama3 = $("#txtPrecioPanama3").val();
    var idPanama4 = $("#txtIDPanama4").val();
    var precioPanama4 = $("#txtPrecioPanama4").val();
    var idPanama5 = $("#txtIDPanama5").val();
    var precioPanama5 = $("#txtPrecioPanama5").val();
    var idCR1 = $("#txtIDCR1").val();
    var precioCR1 = $("#txtPrecioCR1").val();
    var idCR2 = $("#txtIDCR2").val();
    var precioCR2 = $("#txtPrecioCR2").val();
    var idCR3 = $("#txtIDCR3").val();
    var precioCR3 = $("#txtPrecioCR3").val();
    var idCR4 = $("#txtIDCR4").val();
    var precioCR4 = $("#txtPrecioCR4").val();
    var idCR5 = $("#txtIDCR5").val();
    var precioCR5 = $("#txtPrecioCR5").val();
    var idArgentina1 = $("#txtIDArgentina1").val();
    var precioArgentina1 = $("#txtPrecioArgentina1").val();
    var idArgentina2 = $("#txtIDArgentina2").val();
    var precioArgentina2 = $("#txtPrecioArgentina2").val();
    var idArgentina3 = $("#txtIDArgentina3").val();
    var precioArgentina3 = $("#txtPrecioArgentina3").val();
    var idArgentina4 = $("#txtIDArgentina4").val();
    var precioArgentina4 = $("#txtPrecioArgentina4").val();
    var idArgentina5 = $("#txtIDArgentina5").val();
    var precioArgentina5 = $("#txtPrecioArgentina5").val();
    var idChile1 = $("#txtIDChile1").val();
    var precioChile1 = $("#txtPrecioChile1").val();
    var idChile2 = $("#txtIDChile2").val();
    var precioChile2 = $("#txtPrecioChile2").val();
    var idChile3 = $("#txtIDChile3").val();
    var precioChile3 = $("#txtPrecioChile3").val();
    var idChile4 = $("#txtIDChile4").val();
    var precioChile4 = $("#txtPrecioChile4").val();
    var idChile5 = $("#txtIDChile5").val();
    var precioChile5 = $("#txtPrecioChile5").val();

    e.preventDefault();
    if (nombre == "") {
        FaltaNombre();
    } else if ((idPeru1 != "" & precioPeru1 == "0.0") | (idPeru1 == "" & precioPeru1 != "0.0") | precioPeru1 == "") {
        FaltaDatoPeru();
    } else if ((idPeru2 != "" & precioPeru2 == "0.0") | (idPeru2 == "" & precioPeru2 != "0.0") | precioPeru2 == "") {
        FaltaDatoPeru();
    } else if ((idPeru3 != "" & precioPeru3 == "0.0") | (idPeru3 == "" & precioPeru3 != "0.0") | precioPeru3 == "") {
        FaltaDatoPeru();
    } else if ((idPeru4 != "" & precioPeru4 == "0.0") | (idPeru4 == "" & precioPeru4 != "0.0") | precioPeru4 == "") {
        FaltaDatoPeru();
    } else if ((idPeru5 != "" & precioPeru5 == "0.0") | (idPeru5 == "" & precioPeru5 != "0.0") | precioPeru5 == "") {
        FaltaDatoPeru();
    } else if ((idBolivia1 != "" & precioBolivia1 == "0.0") | (idBolivia1 == "" & precioBolivia1 != "0.0") | precioBolivia1 == "") {
        FaltaDatoBolivia();
    } else if ((idBolivia2 != "" & precioBolivia2 == "0.0") | (idBolivia2 == "" & precioBolivia2 != "0.0") | precioBolivia2 == "") {
        FaltaDatoBolivia();
    } else if ((idBolivia3 != "" & precioBolivia3 == "0.0") | (idBolivia3 == "" & precioBolivia3 != "0.0") | precioBolivia3 == "") {
        FaltaDatoBolivia();
    } else if ((idBolivia4 != "" & precioBolivia4 == "0.0") | (idBolivia4 == "" & precioBolivia4 != "0.0") | precioBolivia4 == "") {
        FaltaDatoBolivia();
    } else if ((idBolivia5 != "" & precioBolivia5 == "0.0") | (idBolivia5 == "" & precioBolivia5 != "0.0") | precioBolivia5 == "") {
        FaltaDatoBolivia();
    } else if ((idEcuador1 != "" & precioEcuador1 == "0.0") | (idEcuador1 == "" & precioEcuador1 != "0.0") | precioEcuador1 == "") {
        FaltaDatoEcuador();
    } else if ((idEcuador2 != "" & precioEcuador2 == "0.0") | (idEcuador2 == "" & precioEcuador2 != "0.0") | precioEcuador2 == "") {
        FaltaDatoEcuador();
    } else if ((idEcuador3 != "" & precioEcuador3 == "0.0") | (idEcuador3 == "" & precioEcuador3 != "0.0") | precioEcuador3 == "") {
        FaltaDatoEcuador();
    } else if ((idEcuador4 != "" & precioEcuador4 == "0.0") | (idEcuador4 == "" & precioEcuador4 != "0.0") | precioEcuador4 == "") {
        FaltaDatoEcuador();
    } else if ((idEcuador5 != "" & precioEcuador5 == "0.0") | (idEcuador5 == "" & precioEcuador5 != "0.0") | precioEcuador5 == "") {
        FaltaDatoEcuador();
    } else if ((idPanama1 != "" & precioPanama1 == "0.0") | (idPanama1 == "" & precioPanama1 != "0.0") | precioPanama1 == "") {
        FaltaDatoPanama();
    } else if ((idPanama2 != "" & precioPanama2 == "0.0") | (idPanama2 == "" & precioPanama2 != "0.0") | precioPanama2 == "") {
        FaltaDatoPanama();
    } else if ((idPanama3 != "" & precioPanama3 == "0.0") | (idPanama3 == "" & precioPanama3 != "0.0") | precioPanama3 == "") {
        FaltaDatoPanama();
    } else if ((idPanama4 != "" & precioPanama4 == "0.0") | (idPanama4 == "" & precioPanama4 != "0.0") | precioPanama4 == "") {
        FaltaDatoPanama();
    } else if ((idPanama5 != "" & precioPanama5 == "0.0") | (idPanama5 == "" & precioPanama5 != "0.0") | precioPanama5 == "") {
        FaltaDatoPanama();
    } else if ((idCR1 != "" & precioCR1 == "0.0") | (idCR1 == "" & precioCR1 != "0.0") | precioCR1 == "") {
        FaltaDatoCR();
    } else if ((idCR2 != "" & precioCR2 == "0.0") | (idCR2 == "" & precioCR2 != "0.0") | precioCR2 == "") {
        FaltaDatoCR();
    } else if ((idCR3 != "" & precioCR3 == "0.0") | (idCR3 == "" & precioCR3 != "0.0") | precioCR3 == "") {
        FaltaDatoCR();
    } else if ((idCR4 != "" & precioCR4 == "0.0") | (idCR4 == "" & precioCR4 != "0.0") | precioCR4 == "") {
        FaltaDatoCR();
    } else if ((idCR5 != "" & precioCR5 == "0.0") | (idCR5 == "" & precioCR5 != "0.0") | precioCR5 == "") {
        FaltaDatoCR();
    } else if ((idArgentina1 != "" & precioArgentina1 == "0.0") | (idArgentina1 == "" & precioArgentina1 != "0.0") | precioArgentina1 == "") {
        FaltaDatoArgentina();
    } else if ((idArgentina2 != "" & precioArgentina2 == "0.0") | (idArgentina2 == "" & precioArgentina2 != "0.0") | precioArgentina2 == "") {
        FaltaDatoArgentina();
    } else if ((idArgentina3 != "" & precioArgentina3 == "0.0") | (idArgentina3 == "" & precioArgentina3 != "0.0") | precioArgentina3 == "") {
        FaltaDatoArgentina();
    } else if ((idArgentina4 != "" & precioArgentina4 == "0.0") | (idArgentina4 == "" & precioArgentina4 != "0.0") | precioArgentina4 == "") {
        FaltaDatoArgentina();
    } else if ((idArgentina5 != "" & precioArgentina5 == "0.0") | (idArgentina5 == "" & precioArgentina5 != "0.0") | precioArgentina5 == "") {
        FaltaDatoArgentina();
    } else if ((idChile1 != "" & precioChile1 == "0.0") | (idChile1 == "" & precioChile1 != "0.0") | precioChile1 == "") {
        FaltaDatoChile();                         
    } else if ((idChile2 != "" & precioChile2 == "0.0") | (idChile2 == "" & precioChile2 != "0.0") | precioChile2 == "") {
        FaltaDatoChile();                         
    } else if ((idChile3 != "" & precioChile3 == "0.0") | (idChile3 == "" & precioChile3 != "0.0") | precioChile3 == "") {
        FaltaDatoChile();                         
    } else if ((idChile4 != "" & precioChile4 == "0.0") | (idChile4 == "" & precioChile4 != "0.0") | precioChile4 == "") {
        FaltaDatoChile();                         
    } else if ((idChile5 != "" & precioChile5 == "0.0") | (idChile5 == "" & precioChile5 != "0.0") | precioChile5 == "") {
        FaltaDatoChile();
    } else {
        RegistroPaquete();
    }
});

function RegistroPaquete() {
    var nombre = $("#txtNombrePaquete").val();
    var estaPeru = document.getElementById("tooglePeru").checked;
    var estaBolivia = document.getElementById("toogleBolivia").checked;
    var estaEcuador = document.getElementById("toogleEcuador").checked;
    var estaPanama = document.getElementById("tooglePanama").checked;
    var estaCR = document.getElementById("toogleCR").checked;
    var estaArgentina = document.getElementById("toogleArgentina").checked;
    var estaChile = document.getElementById("toogleChile").checked;
    var observacion = $("#txtObservacion").val();
    var idPeru1 = $("#txtIDPeru1").val();
    var precioPeru1 = $("#txtPrecioPeru1").val();
    var idPeru2 = $("#txtIDPeru2").val();
    var precioPeru2 = $("#txtPrecioPeru2").val();
    var idPeru3 = $("#txtIDPeru3").val();
    var precioPeru3 = $("#txtPrecioPeru3").val();
    var idPeru4 = $("#txtIDPeru4").val()
    var precioPeru4 = $("#txtPrecioPeru4").val()
    var idPeru5 = $("#txtIDPeru5").val()
    var precioPeru5 = $("#txtPrecioPeru5").val()
    var idBolivia1 = $("#txtIDBolivia1").val();
    var precioBolivia1 = $("#txtPrecioBolivia1").val();
    var idBolivia2 = $("#txtIDBolivia2").val();
    var precioBolivia2 = $("#txtPrecioBolivia2").val();
    var idBolivia3 = $("#txtIDBolivia3").val();
    var precioBolivia3 = $("#txtPrecioBolivia3").val();
    var idBolivia4 = $("#txtIDBolivia4").val()
    var precioBolivia4 = $("#txtPrecioBolivia4").val()
    var idBolivia5 = $("#txtIDBolivia5").val()
    var precioBolivia5 = $("#txtPrecioBolivia5").val()
    var idEcuador1 = $("#txtIDEcuador1").val();
    var precioEcuador1 = $("#txtPrecioEcuador1").val();
    var idEcuador2 = $("#txtIDEcuador2").val();
    var precioEcuador2 = $("#txtPrecioEcuador2").val();
    var idEcuador3 = $("#txtIDEcuador3").val();
    var precioEcuador3 = $("#txtPrecioEcuador3").val();
    var idEcuador4 = $("#txtIDEcuador4").val();
    var precioEcuador4 = $("#txtPrecioEcuador4").val();
    var idEcuador5 = $("#txtIDEcuador5").val();
    var precioEcuador5 = $("#txtPrecioEcuador5").val();
    var idPanama1 = $("#txtIDPanama1").val();
    var precioPanama1 = $("#txtPrecioPanama1").val();
    var idPanama2 = $("#txtIDPanama2").val();
    var precioPanama2 = $("#txtPrecioPanama2").val();
    var idPanama3 = $("#txtIDPanama3").val();
    var precioPanama3 = $("#txtPrecioPanama3").val();
    var idPanama4 = $("#txtIDPanama4").val();
    var precioPanama4 = $("#txtPrecioPanama4").val();
    var idPanama5 = $("#txtIDPanama5").val();
    var precioPanama5 = $("#txtPrecioPanama5").val();
    var idCR1 = $("#txtIDCR1").val();
    var precioCR1 = $("#txtPrecioCR1").val();
    var idCR2 = $("#txtIDCR2").val();
    var precioCR2 = $("#txtPrecioCR2").val();
    var idCR3 = $("#txtIDCR3").val();
    var precioCR3 = $("#txtPrecioCR3").val();
    var idCR4 = $("#txtIDCR4").val();
    var precioCR4 = $("#txtPrecioCR4").val();
    var idCR5 = $("#txtIDCR5").val();
    var precioCR5 = $("#txtPrecioCR5").val();
    var idArgentina1 = $("#txtIDArgentina1").val();
    var precioArgentina1 = $("#txtPrecioArgentina1").val();
    var idArgentina2 = $("#txtIDArgentina2").val();
    var precioArgentina2 = $("#txtPrecioArgentina2").val();
    var idArgentina3 = $("#txtIDArgentina3").val();
    var precioArgentina3 = $("#txtPrecioArgentina3").val();
    var idArgentina4 = $("#txtIDArgentina4").val();
    var precioArgentina4 = $("#txtPrecioArgentina4").val();
    var idArgentina5 = $("#txtIDArgentina5").val();
    var precioArgentina5 = $("#txtPrecioArgentina5").val();
    var idChile1 = $("#txtIDChile1").val();
    var precioChile1 = $("#txtPrecioChile1").val();
    var idChile2 = $("#txtIDChile2").val();
    var precioChile2 = $("#txtPrecioChile2").val();
    var idChile3 = $("#txtIDChile3").val();
    var precioChile3 = $("#txtPrecioChile3").val();
    var idChile4 = $("#txtIDChile4").val();
    var precioChile4 = $("#txtPrecioChile4").val();
    var idChile5 = $("#txtIDChile5").val();
    var precioChile5 = $("#txtPrecioChile5").val();

    var obja = JSON.stringify({
        nombrePa: nombre, observacionPa: observacion, paisPa: "01", paisBoliviaPa: "02", paisEcuadorPa: "03",
        paisPanamaPa: "07", paisCRPa: "06", paisArgentinaPa: "04", paisChilePa: "05", estadoPeruPa: estaPeru,
        estadoBoliviaPa: estaBolivia, estadoEcuadorPa: estaEcuador, estadoPanamaPa: estaPanama,
        estadoCRPa: estaCR, estadoArgentinaPa: estaArgentina, estadoChilePa: estaChile, precioPaPeru1: precioPeru1,
        precioPaPeru2: precioPeru2, precioPaPeru3: precioPeru3, precioPaPeru4: precioPeru4, precioPaPeru5: precioPeru5,
        precioPaBolivia1: precioBolivia1, precioPaBolivia2: precioBolivia2, precioPaBolivia3: precioBolivia3, precioPaBolivia4: precioBolivia4,
        precioPaBolivia5: precioBolivia5, precioPaEcuador1: precioEcuador1, precioPaEcuador2: precioEcuador2, precioPaEcuador3: precioEcuador3,
        precioPaEcuador4: precioEcuador4, precioPaEcuador5: precioEcuador5, precioPaPanama1: precioPanama1, precioPaPanama2: precioPanama2,
        precioPaPanama3: precioPanama3, precioPaPanama4: precioPanama4, precioPaPanama5: precioPanama5, precioPaCR1: precioCR1,
        precioPaCR2: precioCR2, precioPaCR3: precioCR3, precioPaCR4: precioCR4, precioPaCR5: precioCR5,
        precioPaArgentina1: precioArgentina1, precioPaArgentina2: precioArgentina2, precioPaArgentina3: precioArgentina3,
        precioPaArgentina4: precioArgentina4, precioPaArgentina5: precioArgentina5, precioPaChile1: precioChile1,
        precioPaChile2: precioChile2, precioPaChile3: precioChile3, precioPaChile4: precioChile4, precioPaChile5: precioChile5,
        idPeruPa1: idPeru1, idPeruPa2: idPeru2, idPeruPa3: idPeru3, idPeruPa4: idPeru4, idPeruPa5: idPeru5,
        idBoliviaPa1: idBolivia1, idBoliviaPa2: idBolivia2, idBoliviaPa3: idBolivia3, idBoliviaPa4: idBolivia4,
        idBoliviaPa5: idBolivia5, idEcuadorPa1: idEcuador1, idEcuadorPa2: idEcuador2, idEcuadorPa3: idEcuador3,
        idEcuadorPa4: idEcuador4, idEcuadorPa5: idEcuador5, idPanamaPa1: idPanama1, idPanamaPa2: idPanama2,
        idPanamaPa3: idPanama3, idPanamaPa4: idPanama4, idPanamaPa5: idPanama5, idCRPa1: idCR1, idCRPa2: idCR2,
        idCRPa3: idCR3, idCRPa4: idCR4, idCRPa5: idCR5, idArgentinaPa1: idArgentina1, idArgentinaPa2: idArgentina2,
        idArgentinaPa3: idArgentina3, idArgentinaPa4: idArgentina4, idArgentinaPa5: idArgentina5, idChilePa1: idChile1,
        idChilePa2: idChile2, idChilePa3: idChile3, idChilePa4: idChile4, idChilePa5: idChile5
    });



    $.ajax({
        type: "POST",
        url: "GenerarPacketeProducto.aspx/RegistrarPaquete",
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
    $("#exampleModal input[type='checkbox']").prop('checked', false).change();
    e.preventDefault();
    var row = $(this).parent().parent()[0];
    data = tabla.fnGetData(row);
    console.log(data);
    fillModalData();
});

function updateDataAjax() {

    var idpaquetePrin = data[0];
    var idpaquetePPeru = data[5];
    var idpaquetePBolivia = data[18];
    if (idpaquetePBolivia == null) {
        idpaquetePBolivia = "";
    }
    var idpaquetePEcuador = data[19];
    if (idpaquetePEcuador == null) {
        idpaquetePEcuador = "";
    }
    var idpaquetePPanama = data[20];
    if (idpaquetePPanama == null) {
        idpaquetePPanama = "";
    }
    var idpaquetePCR = data[21];
    if (idpaquetePCR == null) {
        idpaquetePCR = "";
    }
    var idpaquetePArgentina = data[22];
    if (idpaquetePArgentina == null) {
        idpaquetePArgentina = "";
    }
    var idpaquetePChile = data[23];
    if (idpaquetePChile == null) {
        idpaquetePChile = "";
    }
    var nombre = $("#txtNombrePaquete").val();
    var estaPeru = document.getElementById("tooglePeru").checked;
    var estaBolivia = document.getElementById("toogleBolivia").checked;
    var estaEcuador = document.getElementById("toogleEcuador").checked;
    var estaPanama = document.getElementById("tooglePanama").checked;
    var estaCR = document.getElementById("toogleCR").checked;
    var estaArgentina = document.getElementById("toogleArgentina").checked;
    var estaChile = document.getElementById("toogleChile").checked;
    var observacion = $("#txtObservacion").val();
    var idPeru1 = $("#txtIDPeru1").val();
    var precioPeru1 = $("#txtPrecioPeru1").val();
    var idPeru2 = $("#txtIDPeru2").val();
    var precioPeru2 = $("#txtPrecioPeru2").val();
    var idPeru3 = $("#txtIDPeru3").val();
    var precioPeru3 = $("#txtPrecioPeru3").val();
    var idPeru4 = $("#txtIDPeru4").val()
    var precioPeru4 = $("#txtPrecioPeru4").val()
    var idPeru5 = $("#txtIDPeru5").val()
    var precioPeru5 = $("#txtPrecioPeru5").val()
    var idBolivia1 = $("#txtIDBolivia1").val();
    var precioBolivia1 = $("#txtPrecioBolivia1").val();
    var idBolivia2 = $("#txtIDBolivia2").val();
    var precioBolivia2 = $("#txtPrecioBolivia2").val();
    var idBolivia3 = $("#txtIDBolivia3").val();
    var precioBolivia3 = $("#txtPrecioBolivia3").val();
    var idBolivia4 = $("#txtIDBolivia4").val()
    var precioBolivia4 = $("#txtPrecioBolivia4").val()
    var idBolivia5 = $("#txtIDBolivia5").val()
    var precioBolivia5 = $("#txtPrecioBolivia5").val()
    var idEcuador1 = $("#txtIDEcuador1").val();
    var precioEcuador1 = $("#txtPrecioEcuador1").val();
    var idEcuador2 = $("#txtIDEcuador2").val();
    var precioEcuador2 = $("#txtPrecioEcuador2").val();
    var idEcuador3 = $("#txtIDEcuador3").val();
    var precioEcuador3 = $("#txtPrecioEcuador3").val();
    var idEcuador4 = $("#txtIDEcuador4").val();
    var precioEcuador4 = $("#txtPrecioEcuador4").val();
    var idEcuador5 = $("#txtIDEcuador5").val();
    var precioEcuador5 = $("#txtPrecioEcuador5").val();
    var idPanama1 = $("#txtIDPanama1").val();
    var precioPanama1 = $("#txtPrecioPanama1").val();
    var idPanama2 = $("#txtIDPanama2").val();
    var precioPanama2 = $("#txtPrecioPanama2").val();
    var idPanama3 = $("#txtIDPanama3").val();
    var precioPanama3 = $("#txtPrecioPanama3").val();
    var idPanama4 = $("#txtIDPanama4").val();
    var precioPanama4 = $("#txtPrecioPanama4").val();
    var idPanama5 = $("#txtIDPanama5").val();
    var precioPanama5 = $("#txtPrecioPanama5").val();
    var idCR1 = $("#txtIDCR1").val();
    var precioCR1 = $("#txtPrecioCR1").val();
    var idCR2 = $("#txtIDCR2").val();
    var precioCR2 = $("#txtPrecioCR2").val();
    var idCR3 = $("#txtIDCR3").val();
    var precioCR3 = $("#txtPrecioCR3").val();
    var idCR4 = $("#txtIDCR4").val();
    var precioCR4 = $("#txtPrecioCR4").val();
    var idCR5 = $("#txtIDCR5").val();
    var precioCR5 = $("#txtPrecioCR5").val();
    var idArgentina1 = $("#txtIDArgentina1").val();
    var precioArgentina1 = $("#txtPrecioArgentina1").val();
    var idArgentina2 = $("#txtIDArgentina2").val();
    var precioArgentina2 = $("#txtPrecioArgentina2").val();
    var idArgentina3 = $("#txtIDArgentina3").val();
    var precioArgentina3 = $("#txtPrecioArgentina3").val();
    var idArgentina4 = $("#txtIDArgentina4").val();
    var precioArgentina4 = $("#txtPrecioArgentina4").val();
    var idArgentina5 = $("#txtIDArgentina5").val();
    var precioArgentina5 = $("#txtPrecioArgentina5").val();
    var idChile1 = $("#txtIDChile1").val();
    var precioChile1 = $("#txtPrecioChile1").val();
    var idChile2 = $("#txtIDChile2").val();
    var precioChile2 = $("#txtPrecioChile2").val();
    var idChile3 = $("#txtIDChile3").val();
    var precioChile3 = $("#txtPrecioChile3").val();
    var idChile4 = $("#txtIDChile4").val();
    var precioChile4 = $("#txtPrecioChile4").val();
    var idChile5 = $("#txtIDChile5").val();
    var precioChile5 = $("#txtPrecioChile5").val();

    var obj = JSON.stringify({
        idPaquete: idpaquetePrin, idPaquetePaisPeru: idpaquetePPeru, idPaquetePaisBolivia: idpaquetePBolivia,
        idPaquetePaisEcuador: idpaquetePEcuador, idPaquetePaisPanama: idpaquetePPanama, idPaquetePaisCR: idpaquetePCR,
        idPaquetePaisArgentina: idpaquetePArgentina, idPaquetePaisChile: idpaquetePChile, nombrePa: nombre,
        observacionPa: observacion, estadoPeruPa: estaPeru, estadoBoliviaPa: estaBolivia,
        estadoEcuadorPa: estaEcuador, estadoPanamaPa: estaPanama, estadoCRPa: estaCR,
        estadoArgentinaPa: estaArgentina, estadoChilePa: estaChile, precioPaPeru1: precioPeru1,
        precioPaPeru2: precioPeru2, precioPaPeru3: precioPeru3, precioPaPeru4: precioPeru4,
        precioPaPeru5: precioPeru5, precioPaBolivia1: precioBolivia1, precioPaBolivia2: precioBolivia2,
        precioPaBolivia3: precioBolivia3, precioPaBolivia4: precioBolivia4, precioPaBolivia5: precioBolivia5,
        precioPaEcuador1: precioEcuador1, precioPaEcuador2: precioEcuador2, precioPaEcuador3: precioEcuador3,
        precioPaEcuador4: precioEcuador4, precioPaEcuador5: precioEcuador5, precioPaPanama1: precioPanama1,
        precioPaPanama2: precioPanama2, precioPaPanama3: precioPanama3, precioPaPanama4: precioPanama4,
        precioPaPanama5: precioPanama5, precioPaCR1: precioCR1, precioPaCR2: precioCR2,
        precioPaCR3: precioCR3, precioPaCR4: precioCR4, precioPaCR5: precioCR5,
        precioPaArgentina1: precioArgentina1, precioPaArgentina2: precioArgentina2, precioPaArgentina3: precioArgentina3,
        precioPaArgentina4: precioArgentina4, precioPaArgentina5: precioArgentina5, precioPaChile1: precioChile1,
        precioPaChile2: precioChile2, precioPaChile3: precioChile3, precioPaChile4: precioChile4,
        precioPaChile5: precioChile5, idPeruPa1: idPeru1, idPeruPa2: idPeru2, idPeruPa3: idPeru3,
        idPeruPa4: idPeru4, idPeruPa5: idPeru5, idBoliviaPa1: idBolivia1, idBoliviaPa2: idBolivia2,
        idBoliviaPa3: idBolivia3, idBoliviaPa4: idBolivia4, idBoliviaPa5: idBolivia5, idEcuadorPa1: idEcuador1,
        idEcuadorPa2: idEcuador2, idEcuadorPa3: idEcuador3, idEcuadorPa4: idEcuador4, idEcuadorPa5: idEcuador5,
        idPanamaPa1: idPanama1, idPanamaPa2: idPanama2, idPanamaPa3: idPanama3, idPanamaPa4: idPanama4,
        idPanamaPa5: idPanama5, idCR1: idCR1, idCR2: idCR2, idCR3: idCR3, idCR4: idCR4,
        idCR5: idCR5, idArgentina1: idArgentina1, idArgentina2: idArgentina2, idArgentina3: idArgentina3,
        idArgentina4: idArgentina4, idArgentina5: idArgentina5, idChile1: idChile1, idChile2: idChile2,
        idChile3: idChile3, idChile4: idChile4, idChile5: idChile5
        
        
    });
    
    $.ajax({
        type: "POST",
        url: "GenerarPacketeProducto.aspx/ActualizarPaquete",
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
                text: 'Producto Actualizado',
                type: "success"
            }).then(function () {
                window.location = "GenerarPacketeProducto.aspx";
            });
        }
    });
}

$("#btnActualizar").click(function (e) {
    
    var nombre = $("#txtNombrePaquete").val();
    var idPeru1 = $("#txtIDPeru1").val();
    var precioPeru1 = $("#txtPrecioPeru1").val();
    var idPeru2 = $("#txtIDPeru2").val();
    var precioPeru2 = $("#txtPrecioPeru2").val();
    var idPeru3 = $("#txtIDPeru3").val();
    var precioPeru3 = $("#txtPrecioPeru3").val();
    var idPeru4 = $("#txtIDPeru4").val()
    var precioPeru4 = $("#txtPrecioPeru4").val()
    var idPeru5 = $("#txtIDPeru5").val()
    var precioPeru5 = $("#txtPrecioPeru5").val()
    var idBolivia1 = $("#txtIDBolivia1").val();
    var precioBolivia1 = $("#txtPrecioBolivia1").val();
    var idBolivia2 = $("#txtIDBolivia2").val();
    var precioBolivia2 = $("#txtPrecioBolivia2").val();
    var idBolivia3 = $("#txtIDBolivia3").val();
    var precioBolivia3 = $("#txtPrecioBolivia3").val();
    var idBolivia4 = $("#txtIDBolivia4").val()
    var precioBolivia4 = $("#txtPrecioBolivia4").val()
    var idBolivia5 = $("#txtIDBolivia5").val()
    var precioBolivia5 = $("#txtPrecioBolivia5").val()
    var idEcuador1 = $("#txtIDEcuador1").val();
    var precioEcuador1 = $("#txtPrecioEcuador1").val();
    var idEcuador2 = $("#txtIDEcuador2").val();
    var precioEcuador2 = $("#txtPrecioEcuador2").val();
    var idEcuador3 = $("#txtIDEcuador3").val();
    var precioEcuador3 = $("#txtPrecioEcuador3").val();
    var idEcuador4 = $("#txtIDEcuador4").val();
    var precioEcuador4 = $("#txtPrecioEcuador4").val();
    var idEcuador5 = $("#txtIDEcuador5").val();
    var precioEcuador5 = $("#txtPrecioEcuador5").val();
    var idPanama1 = $("#txtIDPanama1").val();
    var precioPanama1 = $("#txtPrecioPanama1").val();
    var idPanama2 = $("#txtIDPanama2").val();
    var precioPanama2 = $("#txtPrecioPanama2").val();
    var idPanama3 = $("#txtIDPanama3").val();
    var precioPanama3 = $("#txtPrecioPanama3").val();
    var idPanama4 = $("#txtIDPanama4").val();
    var precioPanama4 = $("#txtPrecioPanama4").val();
    var idPanama5 = $("#txtIDPanama5").val();
    var precioPanama5 = $("#txtPrecioPanama5").val();
    var idCR1 = $("#txtIDCR1").val();
    var precioCR1 = $("#txtPrecioCR1").val();
    var idCR2 = $("#txtIDCR2").val();
    var precioCR2 = $("#txtPrecioCR2").val();
    var idCR3 = $("#txtIDCR3").val();
    var precioCR3 = $("#txtPrecioCR3").val();
    var idCR4 = $("#txtIDCR4").val();
    var precioCR4 = $("#txtPrecioCR4").val();
    var idCR5 = $("#txtIDCR5").val();
    var precioCR5 = $("#txtPrecioCR5").val();
    var idArgentina1 = $("#txtIDArgentina1").val();
    var precioArgentina1 = $("#txtPrecioArgentina1").val();
    var idArgentina2 = $("#txtIDArgentina2").val();
    var precioArgentina2 = $("#txtPrecioArgentina2").val();
    var idArgentina3 = $("#txtIDArgentina3").val();
    var precioArgentina3 = $("#txtPrecioArgentina3").val();
    var idArgentina4 = $("#txtIDArgentina4").val();
    var precioArgentina4 = $("#txtPrecioArgentina4").val();
    var idArgentina5 = $("#txtIDArgentina5").val();
    var precioArgentina5 = $("#txtPrecioArgentina5").val();
    var idChile1 = $("#txtIDChile1").val();
    var precioChile1 = $("#txtPrecioChile1").val();
    var idChile2 = $("#txtIDChile2").val();
    var precioChile2 = $("#txtPrecioChile2").val();
    var idChile3 = $("#txtIDChile3").val();
    var precioChile3 = $("#txtPrecioChile3").val();
    var idChile4 = $("#txtIDChile4").val();
    var precioChile4 = $("#txtPrecioChile4").val();
    var idChile5 = $("#txtIDChile5").val();
    var precioChile5 = $("#txtPrecioChile5").val();

    e.preventDefault();
    if (nombre == "") {
        FaltaNombre();
    } else if ((idPeru1 != "" & precioPeru1 == "0") | (idPeru1 == "" & precioPeru1 != "0") | precioPeru1 == "") {
        FaltaDatoPeru();
    } else if ((idPeru2 != "" & precioPeru2 == "0") | (idPeru2 == "" & precioPeru2 != "0") | precioPeru2 == "") {
        FaltaDatoPeru();
    } else if ((idPeru3 != "" & precioPeru3 == "0") | (idPeru3 == "" & precioPeru3 != "0") | precioPeru3 == "") {
        FaltaDatoPeru();
    } else if ((idPeru4 != "" & precioPeru4 == "0") | (idPeru4 == "" & precioPeru4 != "0") | precioPeru4 == "") {
        FaltaDatoPeru();
    } else if ((idPeru5 != "" & precioPeru5 == "0") | (idPeru5 == "" & precioPeru5 != "0") | precioPeru5 == "") {
        FaltaDatoPeru();
    } else if ((idBolivia1 != "" & precioBolivia1 == "0") | (idBolivia1 == "" & precioBolivia1 != "0") | precioBolivia1 == "") {
        FaltaDatoBolivia();
    } else if ((idBolivia2 != "" & precioBolivia2 == "0") | (idBolivia2 == "" & precioBolivia2 != "0") | precioBolivia2 == "") {
        FaltaDatoBolivia();
    } else if ((idBolivia3 != "" & precioBolivia3 == "0") | (idBolivia3 == "" & precioBolivia3 != "0") | precioBolivia3 == "") {
        FaltaDatoBolivia();
    } else if ((idBolivia4 != "" & precioBolivia4 == "0") | (idBolivia4 == "" & precioBolivia4 != "0") | precioBolivia4 == "") {
        FaltaDatoBolivia();
    } else if ((idBolivia5 != "" & precioBolivia5 == "0") | (idBolivia5 == "" & precioBolivia5 != "0") | precioBolivia5 == "") {
        FaltaDatoBolivia();
    } else if ((idEcuador1 != "" & precioEcuador1 == "0") | (idEcuador1 == "" & precioEcuador1 != "0") | precioEcuador1 == "") {
        FaltaDatoEcuador();
    } else if ((idEcuador2 != "" & precioEcuador2 == "0") | (idEcuador2 == "" & precioEcuador2 != "0") | precioEcuador2 == "") {
        FaltaDatoEcuador();
    } else if ((idEcuador3 != "" & precioEcuador3 == "0") | (idEcuador3 == "" & precioEcuador3 != "0") | precioEcuador3 == "") {
        FaltaDatoEcuador();
    } else if ((idEcuador4 != "" & precioEcuador4 == "0") | (idEcuador4 == "" & precioEcuador4 != "0") | precioEcuador4 == "") {
        FaltaDatoEcuador();
    } else if ((idEcuador5 != "" & precioEcuador5 == "0") | (idEcuador5 == "" & precioEcuador5 != "0") | precioEcuador5 == "") {
        FaltaDatoEcuador();
    } else if ((idPanama1 != "" & precioPanama1 == "0") | (idPanama1 == "" & precioPanama1 != "0") | precioPanama1 == "") {
        FaltaDatoPanama();
    } else if ((idPanama2 != "" & precioPanama2 == "0") | (idPanama2 == "" & precioPanama2 != "0") | precioPanama2 == "") {
        FaltaDatoPanama();
    } else if ((idPanama3 != "" & precioPanama3 == "0") | (idPanama3 == "" & precioPanama3 != "0") | precioPanama3 == "") {
        FaltaDatoPanama();
    } else if ((idPanama4 != "" & precioPanama4 == "0") | (idPanama4 == "" & precioPanama4 != "0") | precioPanama4 == "") {
        FaltaDatoPanama();
    } else if ((idPanama5 != "" & precioPanama5 == "0") | (idPanama5 == "" & precioPanama5 != "0") | precioPanama5 == "") {
        FaltaDatoPanama();
    } else if ((idCR1 != "" & precioCR1 == "0") | (idCR1 == "" & precioCR1 != "0") | precioCR1 == "") {
        FaltaDatoCR();
    } else if ((idCR2 != "" & precioCR2 == "0") | (idCR2 == "" & precioCR2 != "0") | precioCR2 == "") {
        FaltaDatoCR();
    } else if ((idCR3 != "" & precioCR3 == "0") | (idCR3 == "" & precioCR3 != "0") | precioCR3 == "") {
        FaltaDatoCR();
    } else if ((idCR4 != "" & precioCR4 == "0") | (idCR4 == "" & precioCR4 != "0") | precioCR4 == "") {
        FaltaDatoCR();
    } else if ((idCR5 != "" & precioCR5 == "0") | (idCR5 == "" & precioCR5 != "0") | precioCR5 == "") {
        FaltaDatoCR();
    } else if ((idArgentina1 != "" & precioArgentina1 == "0") | (idArgentina1 == "" & precioArgentina1 != "0") | precioArgentina1 == "") {
        FaltaDatoArgentina();
    } else if ((idArgentina2 != "" & precioArgentina2 == "0") | (idArgentina2 == "" & precioArgentina2 != "0") | precioArgentina2 == "") {
        FaltaDatoArgentina();
    } else if ((idArgentina3 != "" & precioArgentina3 == "0") | (idArgentina3 == "" & precioArgentina3 != "0") | precioArgentina3 == "") {
        FaltaDatoArgentina();
    } else if ((idArgentina4 != "" & precioArgentina4 == "0") | (idArgentina4 == "" & precioArgentina4 != "0") | precioArgentina4 == "") {
        FaltaDatoArgentina();
    } else if ((idArgentina5 != "" & precioArgentina5 == "0") | (idArgentina5 == "" & precioArgentina5 != "0") | precioArgentina5 == "") {
        FaltaDatoArgentina();
    } else if ((idChile1 != "" & precioChile1 == "0") | (idChile1 == "" & precioChile1 != "0") | precioChile1 == "") {
        FaltaDatoChile();
    } else if ((idChile2 != "" & precioChile2 == "0") | (idChile2 == "" & precioChile2 != "0") | precioChile2 == "") {
        FaltaDatoChile();
    } else if ((idChile3 != "" & precioChile3 == "0") | (idChile3 == "" & precioChile3 != "0") | precioChile3 == "") {
        FaltaDatoChile();
    } else if ((idChile4 != "" & precioChile4 == "0") | (idChile4 == "" & precioChile4 != "0") | precioChile4 == "") {
        FaltaDatoChile();
    } else if ((idChile5 != "" & precioChile5 == "0") | (idChile5 == "" & precioChile5 != "0") | precioChile5 == "") {
        FaltaDatoChile();
    } else {
        updateDataAjax();
    }

});

//ALERTAS
function alertme() {
    Swal.fire({
        title: 'Perfecto!',
        text: 'Paquete Registrado',
        type: "success"
    }).then(function () {
        window.location = "GenerarPacketeProducto.aspx";
    });
}
function FaltaNombre() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró el nombre del paquete',
        type: "error"
    });
}
function FaltaDatoPeru() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró un dato del paquete Perú',
        type: "error"
    });
}
function FaltaDatoBolivia() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró un dato del paquete Bolivia',
        type: "error"
    });
}
function FaltaDatoEcuador() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró un dato del paquete Ecuador',
        type: "error"
    });
}
function FaltaDatoPanama() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró un dato del paquete Panama',
        type: "error"
    });
}
function FaltaDatoCR() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró un dato del paquete Costa Rica',
        type: "error"
    });
}
function FaltaDatoArgentina() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró un dato del paquete Argentina',
        type: "error"
    });
}
function FaltaDatoChile() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró un dato del paquete Chile',
        type: "error"
    });
}

sendDataAjax();