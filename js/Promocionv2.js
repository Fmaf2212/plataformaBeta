//DEFINIR VARIABLES
var tabla, aaf, data, estados;

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

//LISTADO DE PROMOCIONES
function addRowDT(obj) {
    tabla = $("#tbl_ofertas").DataTable();
    tabla.fnClearTable();

    for (var i = 0; i < obj.length; i++) {

        if (obj[i].estado_gen == true) {
            estados = "Activo";
        } else {
            estados = "Desactivado";
        }

        tabla.fnAddData([
            obj[i].id_promo,
            obj[i].nom_promo,
            obj[i].rango,
            obj[i].rangofin,
            estados,
            '<button id="Actualizar" value="Actualizar" title="Actualizar" class="btn btn-primary btn-update" data-toggle="modal" data-target="#exampleModal"><i class="far fa-edit"></i></button>',
            '<button value="Eliminar" title="Eliminar" class="btn btn-danger btn-delete"><i class="far fa-minus-square"></i></button>',
            obj[i].puntos1,
            obj[i].producto1,
            obj[i].estado1,
            obj[i].puntos2,
            obj[i].producto2,
            obj[i].estado2,
            obj[i].puntos3,
            obj[i].producto3,
            obj[i].estado3,
            obj[i].puntos4,
            obj[i].producto4,
            obj[i].estado4,
            obj[i].punt_basico,
            obj[i].prod_basico,
            obj[i].esta_basico,
            obj[i].punt_prof,
            obj[i].prod_prof,
            obj[i].esta_prof,
            obj[i].punt_emp,
            obj[i].prod_emp,
            obj[i].esta_emp,
            obj[i].punt_mill,
            obj[i].prod_mill,
            obj[i].esta_mill,
            obj[i].punt_con,
            obj[i].prod_con,
            obj[i].esta_con,
            obj[i].punt_ci,
            obj[i].prod_ci,
            obj[i].esta_ci,
            obj[i].pxc1,
            obj[i].pxc2,
            obj[i].pxc3,
            obj[i].pxc4,
            obj[i].regalo1,
            obj[i].regalo2,
            obj[i].regalo3,
            obj[i].regalo4,
            obj[i].regBasico1,
            obj[i].regProfe1,
            obj[i].regEmpre1,
            obj[i].regMillo1,
            obj[i].regBasico2,
            obj[i].regProfe2,
            obj[i].regEmpre2,
            obj[i].regMillo2,
            obj[i].punt_basico2,
            obj[i].punt_prof2,
            obj[i].punt_emp2,
            obj[i].punt_mill2,
            obj[i].prod_basico2,
            obj[i].prod_prof2,
            obj[i].prod_emp2,
            obj[i].prod_mill2,
            obj[i].esta_basico2,
            obj[i].esta_prof2,
            obj[i].esta_emp2,
            obj[i].esta_mill2

        ]);
    }
}

function sendDataAjax() {
    $.ajax({
        type: "POST",
        url: "Ofertas.aspx/ListaPromo",
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

function cantPromos() {

    var estadoG;
    estadoG = document.getElementById("chkGeneral").checked;

    $.ajax({
        type: "POST",
        url: "Ofertas.aspx/ListaCantPromo",
        data: {},
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            var r = data.d;
            console.log(data.d);
            if (r > 0 & estadoG == true) {
                PromoActiva();
            } else {
                RegistroPublicacion();
            }
        }
    });
}

function codigoPromoActivo() {

    var estadoG, codigo;
    estadoG = document.getElementById("chkGeneral").checked;
    codigo = data[0];

    $.ajax({
        type: "POST",
        url: "Ofertas.aspx/ListaCodigoPromoActiva",
        data: {},
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            var r = data.d;
            console.log(data.d);
            if (estadoG == true & codigo != r) {
                if (r == "") {
                    updateDataAjax();
                } else {
                    PromoActiva();
                }

            } else {
                updateDataAjax();
            }
        }
    });
}

//CARGAR DATOS EN MODAL
function fillModalData() {
    var estGen;

    if (data[4] == "Activo") {
        estGen = true;
    } else {
        estGen = false;
    }

    $("#txtNombrePromo").val(data[1]);
    $('.daterange').daterangepicker({
        singleDatePicker: true,
        startDate: data[2],
        showDropdowns: true,
        locale: { format: "DD/MM/YYYY" },
        autoApply: false
    });
    $("#fecha").val(data[2]);
    $("#fechaFin").val(data[3]);
    $("#chkGeneral").prop('checked', estGen).change();
    $("#txtPuntos1").val(data[7]);
    $("#txtProducto1").val(data[8]);
    $("#chkEstado1").prop('checked', data[9]).change();
    $("#txtPuntos2").val(data[10]);
    $("#txtProducto2").val(data[11]);
    $("#chkEstado2").prop('checked', data[12]).change();
    $("#txtPuntos3").val(data[13]);
    $("#txtProducto3").val(data[14]);
    $("#chkEstado3").prop('checked', data[15]).change();
    $("#txtPuntos4").val(data[16]);
    $("#txtProducto4").val(data[17]);
    $("#chkEstado4").prop('checked', data[18]).change();
    $("#txtPunEmprendedor").val(data[19]);
    $("#txtProEmprendedor").val(data[20]);
    $("#chkEmprendedor").prop('checked', data[21]).change();
    $("#txtPunProfesional").val(data[22]);
    $("#txtProProfesional").val(data[23]);
    $("#chkProfesional").prop('checked', data[24]).change();
    $("#txtPunEmpresarial").val(data[25]);
    $("#txtProEmpresarial").val(data[26]);
    $("#chkEmpresarial").prop('checked', data[27]).change();
    $("#txtPunMillonario").val(data[28]);
    $("#txtProMillonario").val(data[29]);
    $("#chkMillonario").prop('checked', data[30]).change();
    $("#txtPunConsultor").val(data[31]);
    $("#txtProConsultor").val(data[32]);
    $("#chkConsultor").prop('checked', data[33]).change();
    $("#txtPunCInteligente").val(data[34]);
    $("#txtProCInteligente").val(data[35]);
    $("#chkCInteligente").prop('checked', data[36]).change();
    $("#chkPorCada1").prop('checked', data[37]).change();
    $("#chkPorCada2").prop('checked', data[38]).change();
    $("#chkPorCada3").prop('checked', data[39]).change();
    $("#chkPorCada4").prop('checked', data[40]).change();
    $("#chkRegalo1").prop('checked', data[41]).change();
    $("#chkRegalo2").prop('checked', data[42]).change();
    $("#chkRegalo3").prop('checked', data[43]).change();
    $("#chkRegalo4").prop('checked', data[44]).change();
    $("#chkRegaloBa1").prop('checked', data[45]).change();
    $("#chkRegaloPro1").prop('checked', data[46]).change();
    $("#chkRegaloEmpre1").prop('checked', data[47]).change();
    $("#chkRegaloMillo1").prop('checked', data[48]).change();
    $("#chkRegaloBa2").prop('checked', data[49]).change();
    $("#chkRegaloPro2").prop('checked', data[50]).change();
    $("#chkRegaloEmpre2").prop('checked', data[51]).change();
    $("#chkRegaloMillo2").prop('checked', data[52]).change();
    $("#txtPunEmprendedor2").val(data[53]);
    $("#txtPunProfesional2").val(data[54]);
    $("#txtPunEmpresarial2").val(data[55]);
    $("#txtPunMillonario2").val(data[56]);
    $("#txtProEmprendedor2").val(data[57]);
    $("#txtProProfesional2").val(data[58]);
    $("#txtProEmpresarial2").val(data[59]);
    $("#txtProMillonario2").val(data[60]);
    $("#chkEmprendedor2").prop('checked', data[61]).change();
    $("#chkProfesional2").prop('checked', data[62]).change();
    $("#chkEmpresarial2").prop('checked', data[63]).change();
    $("#chkMillonario2").prop('checked', data[64]).change();
}

// ABRIR MODAL
$("#btnNuevaOferta").click(function (e) {
    $("#btnRegistrar").show();
    $("#btnActualizar").hide();
    $("#exampleModal input").val("");
    $("#exampleModal input[type='checkbox']").prop('checked', false).change();
    var day = moment().format("DD/MM/YYYY");
    $('#fecha').val(day);
    $('.daterange').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        locale: { format: "DD/MM/YYYY" },
        autoApply: false
    });
});

//FUNCIONES PARA REGISTRAR
$("#btnRegistrar").click(function (e) {
    var nombre = $("#txtNombrePromo").val();
    var fecha = $("#fecha").val();
    var fechafin = $("#fechaFin").val();
    var puntos1 = $("#txtPuntos1").val();
    var producto1 = $("#txtProducto1").val();
    var fecha1 = toDate(fecha);
    var fecha2 = toDate(fechafin);

    e.preventDefault();

    if (nombre == "") {
        FaltaNombre();
    } else if (fecha == "") {
        FaltaRango();
    } else if (fechafin == "") {
        FaltaRangoFin();
    } else if (puntos1 == "") {
        FaltaPuntos();
    } else if (producto1 == "") {
        FaltaProducto();
    } else if (fecha2 < fecha1) {
        FechaIncorrecta();
    } else {
        cantPromos();
    }
});

function toDate(dateStr) {
    var parts = dateStr.split("/")
    return new Date(parts[2], parts[1] - 1, parts[0])
}

function RegistroPublicacion() {
    var nombre, fecha, fechafin, estadoG, puntos1, puntos2, puntos3, puntos4, producto1,
        producto2, producto3, producto4, estado1, estado2, estado3, estado4,
        puntBasic, produBasic, estaBasic, puntProf, produProf, estaProf, puntEmp,
        produEmp, estaEmp, puntMill, produMill, estaMill, puntCon, produCon, estaCon,
        puntCi, produCi, estaCi, pxc1, pxc2, pxc3, pxc4, regalo1, regalo2, regalo3, regalo4,
        regBasico1, regProfe1, regEmpre1, regMillo1, regBasico2, regProfe2, regEmpre2, regMillo2,
        punt_basico2, punt_prof2, punt_emp2, punt_mill2, prod_basico2, prod_prof2, prod_emp2, prod_mill2,
        estaBasic2, estaProf2, estaEmp2, estaMill2;

    nombre = $("#txtNombrePromo").val();
    estadoG = document.getElementById("chkGeneral").checked;
    fecha = $("#fecha").val();
    fechafin = $("#fechaFin").val();
    puntos1 = $("#txtPuntos1").val();
    producto1 = $("#txtProducto1").val();
    estado1 = document.getElementById("chkEstado1").checked;
    puntos2 = $("#txtPuntos2").val();
    producto2 = $("#txtProducto2").val();
    estado2 = document.getElementById("chkEstado2").checked;
    puntos3 = $("#txtPuntos3").val();
    producto3 = $("#txtProducto3").val();
    estado3 = document.getElementById("chkEstado3").checked;
    puntos4 = $("#txtPuntos4").val();
    producto4 = $("#txtProducto4").val();
    estado4 = document.getElementById("chkEstado4").checked;
    puntBasic = $("#txtPunEmprendedor").val();
    produBasic = $("#txtProEmprendedor").val();
    estaBasic = document.getElementById("chkEmprendedor").checked;
    puntProf = $("#txtPunProfesional").val();
    produProf = $("#txtProProfesional").val();
    estaProf = document.getElementById("chkProfesional").checked;
    puntEmp = $("#txtPunEmpresarial").val();
    produEmp = $("#txtProEmpresarial").val();
    estaEmp = document.getElementById("chkEmpresarial").checked;
    puntMill = $("#txtPunMillonario").val();
    produMill = $("#txtProMillonario").val();
    estaMill = document.getElementById("chkMillonario").checked;
    puntCon = $("#txtPunConsultor").val();
    produCon = $("#txtProConsultor").val();
    estaCon = document.getElementById("chkConsultor").checked;
    puntCi = $("#txtPunCInteligente").val();
    produCi = $("#txtProCInteligente").val();
    estaCi = document.getElementById("chkCInteligente").checked;
    pxc1 = document.getElementById("chkPorCada1").checked;
    pxc2 = document.getElementById("chkPorCada2").checked;
    pxc3 = document.getElementById("chkPorCada3").checked;
    pxc4 = document.getElementById("chkPorCada4").checked;
    regalo1 = document.getElementById("chkRegalo1").checked;
    regalo2 = document.getElementById("chkRegalo2").checked;
    regalo3 = document.getElementById("chkRegalo3").checked;
    regalo4 = document.getElementById("chkRegalo4").checked;
    regBasico1 = document.getElementById("chkRegaloBa1").checked;
    regProfe1 = document.getElementById("chkRegaloPro1").checked;
    regEmpre1 = document.getElementById("chkRegaloEmpre1").checked;
    regMillo1 = document.getElementById("chkRegaloMillo1").checked;
    regBasico2 = document.getElementById("chkRegaloBa2").checked;
    regProfe2 = document.getElementById("chkRegaloPro2").checked;
    regEmpre2 = document.getElementById("chkRegaloEmpre2").checked;
    regMillo2 = document.getElementById("chkRegaloMillo2").checked;
    punt_basico2 = $("#txtPunEmprendedor2").val();
    punt_prof2 = $("#txtPunProfesional2").val();
    punt_emp2 = $("#txtPunEmpresarial2").val();
    punt_mill2 = $("#txtPunMillonario2").val();
    prod_basico2 = $("#txtProEmprendedor2").val();
    prod_prof2 = $("#txtProProfesional2").val();
    prod_emp2 = $("#txtProEmpresarial2").val();
    prod_mill2 = $("#txtProMillonario2").val();
    estaBasic2 = document.getElementById("chkEmprendedor2").checked;
    estaProf2 = document.getElementById("chkProfesional2").checked;
    estaEmp2 = document.getElementById("chkEmpresarial2").checked;
    estaMill2 = document.getElementById("chkMillonario2").checked;


    if (puntos1 == "") {
        puntos1 = 0;
    }
    if (puntos2 == "") {
        puntos2 = 0;
    }
    if (puntos3 == "") {
        puntos3 = 0;
    }
    if (puntos4 == "") {
        puntos4 = 0;
    }
    if (puntBasic == "") {
        puntBasic = 0;
    }
    if (puntProf == "") {
        puntProf = 0;
    }
    if (puntEmp == "") {
        puntEmp = 0;
    }
    if (puntMill == "") {
        puntMill = 0;
    }
    if (puntCon == "") {
        puntCon = 0;
    }
    if (puntCi == "") {
        puntCi = 0;
    }
    if (punt_basico2 == "") {
        punt_basico2 = 0;
    }
    if (punt_prof2 == "") {
        punt_prof2 = 0;
    }
    if (punt_emp2 == "") {
        punt_emp2 = 0;
    }
    if (punt_mill2 == "") {
        punt_mill2 = 0;
    }


    var obja = JSON.stringify({
        nom_promoSend: nombre, rangoSend: fecha, rangoFinSend: fechafin, estado_genSend: estadoG,
        puntos1Send: puntos1, producto1Send: producto1, estado1Send: estado1, puntos2Send: puntos2,
        producto2Send: producto2, estado2Send: estado2, puntos3Send: puntos3, producto3Send: producto3,
        estado3Send: estado3, puntos4Send: puntos4, producto4Send: producto4, estado4Send: estado4,
        punt_basicoSend: puntBasic, prod_basiSend: produBasic, esta_basicoSend: estaBasic, punt_profSend: puntProf,
        prod_profSend: produProf, esta_profSend: estaProf, punt_empSend: puntEmp, prod_empSend: produEmp,
        esta_empSend: estaEmp, punt_millSend: puntMill, prod_millSend: produMill, esta_millSend: estaMill,
        punt_conSend: puntCon, prod_conSend: produCon, esta_conSend: estaCon, punt_ciSend: puntCi,
        prod_ciSend: produCi, esta_ciSend: estaCi, pxc1Send: pxc1, pxc2Send: pxc2, pxc3Send: pxc3,
        pxc4Send: pxc4, regalo1Send: regalo1, regalo2Send: regalo2, regalo3Send: regalo3, regalo4Send: regalo4,
        regBasico1Send: regBasico1, regProfe1Send: regProfe1, regEmpre1Send: regEmpre1, regMillo1Send: regMillo1,
        regBasico2Send: regBasico2, regProfe2Send: regProfe2, regEmpre2Send: regEmpre2, regMillo2Send: regMillo2,
        punt_basico2Send: punt_basico2, punt_prof2Send: punt_prof2, punt_emp2Send: punt_emp2, punt_mill2Send: punt_mill2,
        prod_basico2Send: prod_basico2, prod_prof2Send: prod_prof2, prod_emp2Send: prod_emp2, prod_mill2Send: prod_mill2,
        esta_basico2Send: estaBasic2, esta_prof2Send: estaProf2, esta_emp2Send: estaEmp2, esta_mill2Send: estaMill2
    });



    $.ajax({
        type: "POST",
        url: "Ofertas.aspx/RegistrarPromocion",
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

    var nombre, fecha, fechafin, estadoG, puntos1, puntos2, puntos3, puntos4, producto1,
        producto2, producto3, producto4, estado1, estado2, estado3, estado4,
        puntBasic, produBasic, estaBasic, puntProf, produProf, estaProf, puntEmp,
        produEmp, estaEmp, puntMill, produMill, estaMill, puntCon, produCon, estaCon,
        puntCi, produCi, estaCi, pxc1, pxc2, pxc3, pxc4, regalo1, regalo2, regalo3, regalo4,
        regBasico1, regProfe1, regEmpre1, regMillo1, regBasico2, regProfe2, regEmpre2, regMillo2,
        punt_basico2, punt_prof2, punt_emp2, punt_mill2, prod_basico2, prod_prof2, prod_emp2, prod_mill2,
        estaBasic2, estaProf2, estaEmp2, estaMill2;

    nombre = $("#txtNombrePromo").val();
    estadoG = document.getElementById("chkGeneral").checked;
    fecha = $("#fecha").val();
    fechafin = $("#fechaFin").val();
    puntos1 = $("#txtPuntos1").val();
    producto1 = $("#txtProducto1").val();
    estado1 = document.getElementById("chkEstado1").checked;
    puntos2 = $("#txtPuntos2").val();
    producto2 = $("#txtProducto2").val();
    estado2 = document.getElementById("chkEstado2").checked;
    puntos3 = $("#txtPuntos3").val();
    producto3 = $("#txtProducto3").val();
    estado3 = document.getElementById("chkEstado3").checked;
    puntos4 = $("#txtPuntos4").val();
    producto4 = $("#txtProducto4").val();
    estado4 = document.getElementById("chkEstado4").checked;
    puntBasic = $("#txtPunEmprendedor").val();
    produBasic = $("#txtProEmprendedor").val();
    estaBasic = document.getElementById("chkEmprendedor").checked;
    puntProf = $("#txtPunProfesional").val();
    produProf = $("#txtProProfesional").val();
    estaProf = document.getElementById("chkProfesional").checked;
    puntEmp = $("#txtPunEmpresarial").val();
    produEmp = $("#txtProEmpresarial").val();
    estaEmp = document.getElementById("chkEmpresarial").checked;
    puntMill = $("#txtPunMillonario").val();
    produMill = $("#txtProMillonario").val();
    estaMill = document.getElementById("chkMillonario").checked;
    puntCon = $("#txtPunConsultor").val();
    produCon = $("#txtProConsultor").val();
    estaCon = document.getElementById("chkConsultor").checked;
    puntCi = $("#txtPunCInteligente").val();
    produCi = $("#txtProCInteligente").val();
    estaCi = document.getElementById("chkCInteligente").checked;
    pxc1 = document.getElementById("chkPorCada1").checked;
    pxc2 = document.getElementById("chkPorCada2").checked;
    pxc3 = document.getElementById("chkPorCada3").checked;
    pxc4 = document.getElementById("chkPorCada4").checked;
    regalo1 = document.getElementById("chkRegalo1").checked;
    regalo2 = document.getElementById("chkRegalo2").checked;
    regalo3 = document.getElementById("chkRegalo3").checked;
    regalo4 = document.getElementById("chkRegalo4").checked;
    regBasico1 = document.getElementById("chkRegaloBa1").checked;
    regProfe1 = document.getElementById("chkRegaloPro1").checked;
    regEmpre1 = document.getElementById("chkRegaloEmpre1").checked;
    regMillo1 = document.getElementById("chkRegaloMillo1").checked;
    regBasico2 = document.getElementById("chkRegaloBa2").checked;
    regProfe2 = document.getElementById("chkRegaloPro2").checked;
    regEmpre2 = document.getElementById("chkRegaloEmpre2").checked;
    regMillo2 = document.getElementById("chkRegaloMillo2").checked;
    punt_basico2 = $("#txtPunEmprendedor2").val();
    punt_prof2 = $("#txtPunProfesional2").val();
    punt_emp2 = $("#txtPunEmpresarial2").val();
    punt_mill2 = $("#txtPunMillonario2").val();
    prod_basico2 = $("#txtProEmprendedor2").val();
    prod_prof2 = $("#txtProProfesional2").val();
    prod_emp2 = $("#txtProEmpresarial2").val();
    prod_mill2 = $("#txtProMillonario2").val();
    estaBasic2 = document.getElementById("chkEmprendedor2").checked;
    estaProf2 = document.getElementById("chkProfesional2").checked;
    estaEmp2 = document.getElementById("chkEmpresarial2").checked;
    estaMill2 = document.getElementById("chkMillonario2").checked;
    idPromo = data[0];

    if (puntos2 == "") {
        puntos2 = 0;
    }
    if (puntos3 == "") {
        puntos3 = 0;
    }
    if (puntos4 == "") {
        puntos4 = 0;
    }
    if (puntBasic == "") {
        puntBasic = 0;
    }
    if (puntProf == "") {
        puntProf = 0;
    }
    if (puntEmp == "") {
        puntEmp = 0;
    }
    if (puntMill == "") {
        puntMill = 0;
    }
    if (puntCon == "") {
        puntCon = 0;
    }
    if (puntCi == "") {
        puntCi = 0;
    }

    var obj = JSON.stringify({
        id_promoSend: idPromo, nom_promoSend: nombre, rangoSend: fecha, rangoFinSend: fechafin, estado_genSend: estadoG,
        puntos1Send: puntos1, producto1Send: producto1, estado1Send: estado1, puntos2Send: puntos2,
        producto2Send: producto2, estado2Send: estado2, puntos3Send: puntos3, producto3Send: producto3,
        estado3Send: estado3, puntos4Send: puntos4, producto4Send: producto4, estado4Send: estado4,
        punt_basicoSend: puntBasic, prod_basiSend: produBasic, esta_basicoSend: estaBasic, punt_profSend: puntProf,
        prod_profSend: produProf, esta_profSend: estaProf, punt_empSend: puntEmp, prod_empSend: produEmp,
        esta_empSend: estaEmp, punt_millSend: puntMill, prod_millSend: produMill, esta_millSend: estaMill,
        punt_conSend: puntCon, prod_conSend: produCon, esta_conSend: estaCon, punt_ciSend: puntCi,
        prod_ciSend: produCi, esta_ciSend: estaCi, pxc1Send: pxc1, pxc2Send: pxc2, pxc3Send: pxc3,
        pxc4Send: pxc4, regalo1Send: regalo1, regalo2Send: regalo2, regalo3Send: regalo3, regalo4Send: regalo4,
        regBasico1Send: regBasico1, regProfe1Send: regProfe1, regEmpre1Send: regEmpre1, regMillo1Send: regMillo1,
        regBasico2Send: regBasico2, regProfe2Send: regProfe2, regEmpre2Send: regEmpre2, regMillo2Send: regMillo2,
        punt_basico2Send: punt_basico2, punt_prof2Send: punt_prof2, punt_emp2Send: punt_emp2, punt_mill2Send: punt_mill2,
        prod_basico2Send: prod_basico2, prod_prof2Send: prod_prof2, prod_emp2Send: prod_emp2, prod_mill2Send: prod_mill2,
        esta_basico2Send: estaBasic2, esta_prof2Send: estaProf2, esta_emp2Send: estaEmp2, esta_mill2Send: estaMill2
    });

    $.ajax({
        type: "POST",
        url: "Ofertas.aspx/ActualizarPromocion",
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
                text: 'Promoción Actualizada',
                type: "success"
            }).then(function () {
                window.location = "Ofertas.aspx";
            });
        }
    });
}

$("#btnActualizar").click(function (e) {
    e.preventDefault();
    codigoPromoActivo();
});

//ALERTAS
function alertme() {
    Swal.fire({
        title: 'Perfecto!',
        text: 'Promoción Registrada',
        type: "success"
    }).then(function () {
        window.location = "Ofertas.aspx";
    });
}
function FaltaNombre() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró el Nombre de la Promoción',
        type: "error"
    });
}
function FaltaRango() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró el rango de la promoción',
        type: "error"
    });
}
function FaltaRangoFin() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró el rango de fin de la promoción',
        type: "error"
    });
}
function FaltaPuntos() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró los puntos de la promoción',
        type: "error"
    });
}
function FaltaProducto() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No registró el producto de la promoción',
        type: "error"
    });
}
function FechaIncorrecta() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'El rango de fechas es incorrecto',
        type: "error"
    });
}
function PromoActiva() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'Ya tiene una promoción activa',
        type: "error"
    });
}

sendDataAjax();