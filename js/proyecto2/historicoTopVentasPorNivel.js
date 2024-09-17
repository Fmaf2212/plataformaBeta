


var tabla = $('#table_id').dataTable({
    responsive: true,
    "iDisplayLength": 10
});

var tabla2 = $('#table_id2').dataTable({
    responsive: true,
    "iDisplayLength": 10
});

//tabla2.fnClearTable();

var tabla3 = $('#table_id3').dataTable({
    responsive: true,
    "iDisplayLength": 10
});

var tabla4 = $('#table_id4').dataTable({
    responsive: true,
    "iDisplayLength": 10
});

const table_id = document.getElementById('table_id');
table_id.parentNode.style.overflowX = "auto";
const table_id2 = document.getElementById('table_id2');
table_id2.parentNode.style.overflowX = "auto";
const table_id3 = document.getElementById('table_id3');
table_id3.parentNode.style.overflowX = "auto";
const table_id4 = document.getElementById('table_id4');
table_id4.parentNode.style.overflowX = "auto";

//--------------------------------------------------- TABLA 1 ----------------------------------------------------

//------- BORRAR PRIMER HIJO DEL TBODY PARA QUE SALGA BIEN EL LOADER ----------
//const tbodyTable1 = document.querySelector('#table_id > tbody');
//tbodyTable1.removeChild(tbodyTable1.firstElementChild);

//-------------- LLENADO DEL SELECT --------------------
const selectTable1 = document.getElementById('mySelect1');
axios.post('GenerarRangos.aspx/ListaPeriodos', {})
    .then(response => {
        //console.log(response);
        response.data.d.forEach(e => {
            const option = document.createElement('option');
            option.text = e.nombre;
            option.value = e.idPeriodo;
            selectTable1.appendChild(option);
        })
        //const idPeriodo = document.getElementById('mySelect2').value;
        //console.log(idPeriodo);
        fillTable1();
        //$('#table_id2 > tbody').empty();
    })
    //.then(fillTable2())
    .catch(error => {
        console.error(error);
    });

//------------ CREACION DEL LOADER -----------------------
function loaderTable1() {
    var $myNewElement = $('<section class="sectionLoader"><div class="lds-ripple"><div></div><div></div></div></section>');
    $myNewElement.appendTo('#table_id > tbody');
    let anchoElementoTabla1 = $('#table_id').parent().innerWidth();
    let valorLeftTabla1 = (anchoElementoTabla1 / 2) - 40.75;
    $('.sectionLoader').css("left", valorLeftTabla1);
    $(window).resize(function () {
        let anchoElementoTabla1 = $('#table_id').parent().innerWidth();
        let valorLeftTabla1 = (anchoElementoTabla1 / 2) - 40.75;
        $('.sectionLoader').css("left", valorLeftTabla1);
    });
}
loaderTable1();

//---------- LLENADO DE LA TABLA --------------------------
function fillTable1() {
    const idPeriodo = document.getElementById('mySelect1').value;
    //console.log(idPeriodo);
    const data = {
        "idp": idPeriodo
    }

    axios.post('HistoricoDeTopYVentasPorNivel.aspx/Lista_TopPatrocinioHistorico', data)
        .then(response => {
            //console.log(response);
            tabla.fnClearTable(loaderTable1());
            response.data.d.forEach(e => {
                tabla.fnAddData([
                    e.Ranking,
                    e.NombresApelllidos,
                    e.Puntos_Personales,
                    e.Puntos_Patrocinados,
                    e.Nro_Afiliados,
                    e.Edad_Promedio,
                    e.Celular,
                    e.RangoMaximo,
                    e.Departamento,
                    e.Provincia,
                    e.Distrito,
                    e.Patrocinador,
                    e.Celular_Patrocinador,
                    e.Diamante_Ascendente,
                    e.Celular_Ascendente
                ])
            })
            //llenadoPrimeraTabla();
            //const tbody = document.querySelector('#table_id2 > tbody');
            //const pagination = document.querySelector('#table_id2_paginate > .pagination > li:not(.previous, .next)');
            //console.log(tbody);
            //console.log(pagination);
            //tbody.innerHTML = "";
            //pagination.innerHTML = "";
            $(".sectionLoader").fadeOut("slow");
        })
        .catch(error => {
            console.error(error);
            //llenadoPrimeraTabla();
        });
}

//for (var i = 0; i < 1; i++) {
//    tabla.fnAddData([
//        "Carla Rodríguez Lujan",
//        "954561651",
//        "Rubí",
//        "21",
//        "9240.7",
//        "25.3",
//        "Arequipa",
//        "Arequipa",
//        "Arequipa",
//        "María López Gómez",
//        "986551254",
//        "Susana Quispe Pérez",
//        "953253554"
//    ]);
//    tabla.fnAddData([
//        "Adrian López García",
//        "998461651",
//        "Oro",
//        "10",
//        "3845.9",
//        "32.3",
//        "Lima",
//        "Lima",
//        "San Juan de Lurigancho",
//        "María López Gómez",
//        "986551254",
//        "Susana Quispe Pérez",
//        "953253554"
//    ]);
//    tabla.fnAddData([
//        "Sandra Alvarez Roque",
//        "941361689",
//        "Oro",
//        "10",
//        "2823.2",
//        "27.1",
//        "La Libertad",
//        "Trujillo",
//        "La Esperanza",
//        "Claudia Argomedo Lujan",
//        "972546512",
//        "Milagros Benites Alvarado",
//        "932545132"
//    ]);
//    tabla.fnAddData([
//        "Diana Ramírez Bazán",
//        "968898559",
//        "Bronce",
//        "5",
//        "2212.2",
//        "23.4",
//        "Piura",
//        "Piura",
//        "Piura",
//        "Claudia Argomedo Lujan",
//        "972546512",
//        "Milagros Benites Alvarado",
//        "932545132"
//    ]);
//    tabla.fnAddData([
//        "Sofía González Roque",
//        "911215124",
//        "Bronce",
//        "3",
//        "1234.1",
//        "32.3",
//        "Lima",
//        "Lima",
//        "Breña",
//        "María López Gómez",
//        "986551254",
//        "Susana Quispe Pérez",
//        "953253554"
//    ]);
//    tabla.fnAddData([
//        "Mily Vargas Aquino",
//        "965113204",
//        "Bronce",
//        "3",
//        "352.2",
//        "23.8",
//        "Lima",
//        "Lima",
//        "Breña",
//        "María López Gómez",
//        "986551254",
//        "Susana Quispe Pérez",
//        "953253554"
//    ]);
//}

//-------------------------------------------- TABLA 2--------------------------------------------------------------------------

//------- BORRAR PRIMER HIJO DEL TBODY PARA QUE SALGA BIEN EL LOADER ----------
const tbodyTable2 = document.querySelector('#table_id2 > tbody');
tbodyTable2.removeChild(tbodyTable2.firstElementChild);

//-------------- LLENADO DEL SELECT --------------------
const selectTable2 = document.getElementById('mySelect2');
axios.post('GenerarRangos.aspx/ListaPeriodos', {})
    .then(response => {
        response.data.d.forEach(e => {
            const option = document.createElement('option');
            option.text = e.nombre;
            option.value = e.idPeriodo;
            selectTable2.appendChild(option);
        })
        fillTable2();
    })
    .catch(error => {
        console.error(error);
    });


//------------ CREACION DEL LOADER -----------------------
function loaderTable2() {
    var $myNewElement = $('<section class="sectionLoader"><div class="lds-ripple"><div></div><div></div></div></section>');
    $myNewElement.appendTo('#table_id2 > tbody');
    let anchoElementoTabla2 = $('#table_id').parent().innerWidth();
    let valorLeftTabla2 = (anchoElementoTabla2 / 2) - 40.75;
    $('.sectionLoader').css("left", valorLeftTabla2);
    $(window).resize(function () {
        let anchoElementoTabla2 = $('#table_id').parent().innerWidth();
        let valorLeftTabla2 = (anchoElementoTabla2 / 2) - 40.75;
        $('.sectionLoader').css("left", valorLeftTabla2);
    });
}
loaderTable2();


//---------- LLENADO DE LA TABLA --------------------------
function fillTable2() {
    const idPeriodo = document.getElementById('mySelect2').value;
    const data = {
        "idp": idPeriodo
    }

    axios.post('HistoricoDeTopYVentasPorNivel.aspx/Lista_TopVentasHistorico', data)
        .then(response => {
            tabla2.fnClearTable(loaderTable2());
            response.data.d.forEach(e => {
                tabla2.fnAddData([
                    e.Ranking,
                    e.NombresApelllidos,
                    e.Puntos_Personales,
                    e.Celular,
                    e.RangoMaximo,
                    e.Departamento,
                    e.Provincia,
                    e.Distrito,
                    e.Patrocinador,
                    e.Celular_Patrocinador,
                    e.Diamante_Ascendente,
                    e.Celular_Ascendente
                ])
            })

            $(".sectionLoader").fadeOut("slow");
        })
        .catch(error => {
            console.error(error);
        });
}

// -------------------------------------------- TABLA 3 -------------------------------------------------

//------- BORRAR PRIMER HIJO DEL TBODY PARA QUE SALGA BIEN EL LOADER ----------
const tbodyTable3 = document.querySelector('#table_id3 > tbody');
tbodyTable3.removeChild(tbodyTable3.firstElementChild);

//-------------- LLENADO DEL SELECT --------------------
const selectTable3 = document.getElementById('mySelect3');
axios.post('GenerarRangos.aspx/ListaPeriodos', {})
    .then(response => {
        response.data.d.forEach(e => {
            const option = document.createElement('option');
            option.text = e.nombre;
            option.value = e.idPeriodo;
            selectTable3.appendChild(option);
        })
        fillTable3();
    })
    .catch(error => {
        console.error(error);
    });


//------------ CREACION DEL LOADER -----------------------
function loaderTable3() {
    var $myNewElement = $('<section class="sectionLoader"><div class="lds-ripple"><div></div><div></div></div></section>');
    $myNewElement.appendTo('#table_id3 > tbody');
    let anchoElementoTabla3 = $('#table_id').parent().innerWidth();
    let valorLeftTabla3 = (anchoElementoTabla3 / 2) - 40.75;
    $('.sectionLoader').css("left", valorLeftTabla3);
    $(window).resize(function () {
        let anchoElementoTabla3 = $('#table_id').parent().innerWidth();
        let valorLeftTabla3 = (anchoElementoTabla3 / 2) - 40.75;
        $('.sectionLoader').css("left", valorLeftTabla3);
    });
}
loaderTable3();


//---------- LLENADO DE LA TABLA --------------------------
function fillTable3() {
    const idPeriodo = document.getElementById('mySelect3').value;
    const data = {
        "idp": idPeriodo
    }

    axios.post('HistoricoDeTopYVentasPorNivel.aspx/Lista_TopEmperadorHistorico', data)
        .then(response => {
            tabla3.fnClearTable(loaderTable3());
            response.data.d.forEach(e => {
                tabla3.fnAddData([
                    e.Ranking,
                    e.NombresApelllidos,
                    e.Puntos_Personales,
                    e.Nro_Empresarios_Vip,
                    e.Puntos_Vip,
                    e.Celular,
                    e.RangoMaximo,
                    e.Departamento,
                    e.Provincia,
                    e.Distrito,
                    e.Patrocinador,
                    e.Celular_Patrocinador,
                    e.Diamante_Ascendente,
                    e.Celular_Ascendente
                ])
            })

            $(".sectionLoader").fadeOut("slow");
        })
        .catch(error => {
            console.error(error);
        });
}

// -------------------------------------------- TABLA 4 -------------------------------------------------

//------- BORRAR PRIMER HIJO DEL TBODY PARA QUE SALGA BIEN EL LOADER ----------
const tbodyTable4 = document.querySelector('#table_id4 > tbody');
tbodyTable4.removeChild(tbodyTable4.firstElementChild);

//-------------- LLENADO DEL SELECT --------------------
const selectTable4 = document.getElementById('mySelect4');
axios.post('GenerarRangos.aspx/ListaPeriodos', {})
    .then(response => {
        response.data.d.forEach(e => {
            const option = document.createElement('option');
            option.text = e.nombre;
            option.value = e.idPeriodo;
            selectTable4.appendChild(option);
        })
        fillTable4();
    })
    .catch(error => {
        console.error(error);
    });


//------------ CREACION DEL LOADER -----------------------
function loaderTable4() {
    var $myNewElement = $('<section class="sectionLoader"><div class="lds-ripple"><div></div><div></div></div></section>');
    $myNewElement.appendTo('#table_id4 > tbody');
    let anchoElementoTabla4 = $('#table_id').parent().innerWidth();
    let valorLeftTabla4 = (anchoElementoTabla4 / 2) - 40.75;
    $('.sectionLoader').css("left", valorLeftTabla4);
    $(window).resize(function () {
        let anchoElementoTabla4 = $('#table_id').parent().innerWidth();
        let valorLeftTabla4 = (anchoElementoTabla4 / 2) - 40.75;
        $('.sectionLoader').css("left", valorLeftTabla4);
    });
}
loaderTable4();


//---------- LLENADO DE LA TABLA --------------------------
function fillTable4() {
    const idPeriodo = document.getElementById('mySelect4').value;
    const data = {
        "idp": idPeriodo
    }

    axios.post('HistoricoDeTopYVentasPorNivel.aspx/Lista_TopInactivosHistorico', data)
        .then(response => {
            console.log(response);

            tabla4.fnClearTable(loaderTable4());
            response.data.d.forEach(e => {
                tabla4.fnAddData([
                    e.Periodo_Inactivo,
                    e.Nombres_Apellidos,
                    e.Celular,
                    e.Rango_Maximo,
                    e.Patrocinador,
                    e.Celular_Patrocinador,
                    e.Diamante_Ascendente,
                    e.Celular_Ascendente
                ])
            })

            $(".sectionLoader").fadeOut("slow");
        })
        .catch(error => {
            console.error(error);
        });
}



////-------------Pasando estilos  y estructura de las tablas sacado de la pagina de CompetarPregistro---------------------------------//

let eliminarFiltroMostrarRegistros = document.getElementById("table_id_length");
//console.log(eliminarFiltroMostrarRegistros);
eliminarFiltroMostrarRegistros.parentNode.style.position = "absolute";
eliminarFiltroMostrarRegistros.parentNode.removeChild(eliminarFiltroMostrarRegistros);
let cambiarClase = document.querySelector("#table_id_wrapper > div:nth-child(1) > div:nth-child(2)");
cambiarClase.classList.remove("col-sm-6");
cambiarClase.classList.add("col-sm-12");

let eliminarFiltroMostrarRegistros2 = document.getElementById("table_id2_length");
eliminarFiltroMostrarRegistros2.parentNode.style.position = "absolute";
eliminarFiltroMostrarRegistros2.parentNode.removeChild(eliminarFiltroMostrarRegistros2);
let cambiarClase2 = document.querySelector("#table_id2_wrapper > div:nth-child(1) > div:nth-child(2)");
cambiarClase2.classList.remove("col-sm-6");
cambiarClase2.classList.add("col-sm-12");

let eliminarFiltroMostrarRegistros3 = document.getElementById("table_id3_length");
eliminarFiltroMostrarRegistros3.parentNode.style.position = "absolute";
eliminarFiltroMostrarRegistros3.parentNode.removeChild(eliminarFiltroMostrarRegistros3);
let cambiarClase3 = document.querySelector("#table_id3_wrapper > div:nth-child(1) > div:nth-child(2)");
cambiarClase3.classList.remove("col-sm-6");
cambiarClase3.classList.add("col-sm-12");

let eliminarFiltroMostrarRegistros4 = document.getElementById("table_id4_length");
eliminarFiltroMostrarRegistros4.parentNode.style.position = "absolute";
eliminarFiltroMostrarRegistros4.parentNode.removeChild(eliminarFiltroMostrarRegistros4);
let cambiarClase4 = document.querySelector("#table_id4_wrapper > div:nth-child(1) > div:nth-child(2)");
cambiarClase4.classList.remove("col-sm-6");
cambiarClase4.classList.add("col-sm-12");

const miPrimerCodiguito = () => {

    let eliminarMostrandoTotalRegistros1 = document.querySelector("#table_id_wrapper>div:nth-child(3)>div:nth-child(1)");
    let eliminarMostrandoTotalRegistros2 = document.querySelector("#table_id_wrapper>div:nth-child(3)");
    eliminarMostrandoTotalRegistros2.removeChild(eliminarMostrandoTotalRegistros1)

    let expandirAnteriorSiguiente = document.querySelector("#table_id_wrapper>div:nth-child(3)>div");
    expandirAnteriorSiguiente.style.display = "flex";
    expandirAnteriorSiguiente.style.justifyContent = "center";

    let añadiendoTableResponsive = document.querySelector("#table_id_wrapper>div:nth-child(2)>div");
    añadiendoTableResponsive.classList.add("table-responsive");

    let quitandoTextoLabelBuscar = document.querySelector("#table_id_wrapper>div:nth-child(1)>div:nth-child(2)>div>label");

    quitandoTextoLabelBuscar.firstChild.textContent = "";

    let añadiendoPlaceholder = document.querySelector("#table_id_wrapper>div:nth-child(1)>div:nth-child(2)>div>label>input");
    añadiendoPlaceholder.placeholder = '  Buscar';
    console.log(window.innerWidth);

    let cambiarColDe7a12 = document.querySelector("#table_id_wrapper>div:nth-child(3)>div");
    cambiarColDe7a12.classList.replace("col-sm-7", "col-sm-12")

}

const segundo = () => {

    let eliminarMostrandoTotalRegistros1 = document.querySelector("#table_id2_wrapper>div:nth-child(3)>div:nth-child(1)");
    let eliminarMostrandoTotalRegistros2 = document.querySelector("#table_id2_wrapper>div:nth-child(3)");
    eliminarMostrandoTotalRegistros2.removeChild(eliminarMostrandoTotalRegistros1)

    let expandirAnteriorSiguiente = document.querySelector("#table_id2_wrapper>div:nth-child(3)>div");
    expandirAnteriorSiguiente.style.display = "flex";
    expandirAnteriorSiguiente.style.justifyContent = "center";

    let añadiendoTableResponsive = document.querySelector("#table_id2_wrapper>div:nth-child(2)>div");
    añadiendoTableResponsive.classList.add("table-responsive");

    let quitandoTextoLabelBuscar = document.querySelector("#table_id2_wrapper>div:nth-child(1)>div:nth-child(2)>div>label");

    quitandoTextoLabelBuscar.firstChild.textContent = "";

    let añadiendoPlaceholder = document.querySelector("#table_id2_wrapper>div:nth-child(1)>div:nth-child(2)>div>label>input");
    añadiendoPlaceholder.placeholder = '  Buscar';
    console.log(window.innerWidth);

    let cambiarColDe7a12 = document.querySelector("#table_id2_wrapper>div:nth-child(3)>div");
    cambiarColDe7a12.classList.replace("col-sm-7", "col-sm-12")

}

const tercer = () => {

    let eliminarMostrandoTotalRegistros1 = document.querySelector("#table_id3_wrapper>div:nth-child(3)>div:nth-child(1)");
    let eliminarMostrandoTotalRegistros2 = document.querySelector("#table_id3_wrapper>div:nth-child(3)");
    eliminarMostrandoTotalRegistros2.removeChild(eliminarMostrandoTotalRegistros1)

    let expandirAnteriorSiguiente = document.querySelector("#table_id3_wrapper>div:nth-child(3)>div");
    expandirAnteriorSiguiente.style.display = "flex";
    expandirAnteriorSiguiente.style.justifyContent = "center";

    let añadiendoTableResponsive = document.querySelector("#table_id3_wrapper>div:nth-child(2)>div");
    añadiendoTableResponsive.classList.add("table-responsive");

    let quitandoTextoLabelBuscar = document.querySelector("#table_id3_wrapper>div:nth-child(1)>div:nth-child(2)>div>label");

    quitandoTextoLabelBuscar.firstChild.textContent = "";

    let añadiendoPlaceholder = document.querySelector("#table_id3_wrapper>div:nth-child(1)>div:nth-child(2)>div>label>input");
    añadiendoPlaceholder.placeholder = '  Buscar';
    console.log(window.innerWidth);

    let cambiarColDe7a12 = document.querySelector("#table_id3_wrapper>div:nth-child(3)>div");
    cambiarColDe7a12.classList.replace("col-sm-7", "col-sm-12")

}

const cuarto = () => {

    let eliminarMostrandoTotalRegistros1 = document.querySelector("#table_id4_wrapper>div:nth-child(3)>div:nth-child(1)");
    let eliminarMostrandoTotalRegistros2 = document.querySelector("#table_id4_wrapper>div:nth-child(3)");
    eliminarMostrandoTotalRegistros2.removeChild(eliminarMostrandoTotalRegistros1)

    let expandirAnteriorSiguiente = document.querySelector("#table_id4_wrapper>div:nth-child(3)>div");
    expandirAnteriorSiguiente.style.display = "flex";
    expandirAnteriorSiguiente.style.justifyContent = "center";

    let añadiendoTableResponsive = document.querySelector("#table_id4_wrapper>div:nth-child(2)>div");
    añadiendoTableResponsive.classList.add("table-responsive");

    let quitandoTextoLabelBuscar = document.querySelector("#table_id4_wrapper>div:nth-child(1)>div:nth-child(2)>div>label");

    quitandoTextoLabelBuscar.firstChild.textContent = "";

    let añadiendoPlaceholder = document.querySelector("#table_id4_wrapper>div:nth-child(1)>div:nth-child(2)>div>label>input");
    añadiendoPlaceholder.placeholder = '  Buscar';
    console.log(window.innerWidth);

    let cambiarColDe7a12 = document.querySelector("#table_id4_wrapper>div:nth-child(3)>div");
    cambiarColDe7a12.classList.replace("col-sm-7", "col-sm-12")

}

miPrimerCodiguito();
segundo();
tercer();
cuarto();
