
//---------------------------------------------Para el relleno del circle progress bar--------------------------------------------------------------//

function radialProgressBar() {
    //-----------------Primer Circle (estilos para el relleno del circle progress)----------------------------
    // Remueve el estilo en línea del 'svg.radial-progress .complete2'
    $('svg.radial-progress2').each(function (index, value) {
        $(this).find($('circle.complete2')).removeAttr('style');
    });

    // Activar la animación de progreso en el desplazamiento
    $(window).ready(function () {
        //$('#ModalCambioPassword').modal('show'); 
        // alert("hola");

        $('svg.radial-progress2').each(function (index, value) {//Con each realizamos una iteración por todos los elementos del DOM que se hayan seleccionado
            // Si svg.radial-progress es aproximadamente un 25% verticalmente en la ventana cuando se desplaza desde la parte superior o inferior

            // Obtener porcentaje de progreso
            percent = $(value).data('percentage');
            // Obtenga el radio del círculo del svg
            radius = $(this).find($('circle.complete2')).attr('r');
            // Obtener circunferencia (2πr)
            circumference = 2 * Math.PI * radius;
            // Obtener el valor de desplazamiento de trazo - guión basado en el porcentaje de la circunferencia
            strokeDashOffset = circumference - ((percent * circumference) / 100);
            // Progreso de la transición durante # segundos
            $(this).find($('circle.complete2')).animate({ 'stroke-dashoffset': strokeDashOffset }, 1550);//es un atributo de presentación que define un desplazamiento
        });
    }).trigger('scroll');

    //-----------------Segundo Circle (estilos para el relleno del circle progress)----------------------------
    // Remueve el estilo en línea del 'svg.radial-progress .complete1'
    $('svg.radial-progress1').each(function (index, value) {
        $(this).find($('circle.complete1')).removeAttr('style');
    });

    // Activar la animación de progreso en el desplazamiento
    $(window).ready(function () {
        //$('#ModalCambioPassword').modal('show'); 
        // alert("hola");

        $('svg.radial-progress1').each(function (index, value) {//Con each realizamos una iteración por todos los elementos del DOM que se hayan seleccionado
            // Si svg.radial-progress es aproximadamente un 25% verticalmente en la ventana cuando se desplaza desde la parte superior o inferior

            // Obtener porcentaje de progreso
            percent = $(value).data('percentage');
            // Obtenga el radio del círculo del svg
            radius = $(this).find($('circle.complete1')).attr('r');
            // Obtener circunferencia (2πr)
            circumference = 2 * Math.PI * radius;
            // Obtener el valor de desplazamiento de trazo - guión basado en el porcentaje de la circunferencia
            strokeDashOffset = circumference - ((percent * circumference) / 100);
            // Progreso de la transición durante # segundos
            $(this).find($('circle.complete1')).animate({ 'stroke-dashoffset': strokeDashOffset }, 1550);//es un atributo de presentación que define un desplazamiento

        });
    }).trigger('scroll');

    //-----------------Tercer Circle (estilos para el relleno del circle progress)----------------------------
    // Remueve el estilo en línea del 'svg.radial-progress .complete3'
    $('svg.radial-progress3').each(function (index, value) {
        $(this).find($('circle.complete3')).removeAttr('style');
    });

    // Activar la animación de progreso en el desplazamiento
    $(window).ready(function () {
        //$('#ModalCambioPassword').modal('show'); 
        // alert("hola");

        $('svg.radial-progress3').each(function (index, value) {//Con each realizamos una iteración por todos los elementos del DOM que se hayan seleccionado
            // Si svg.radial-progress es aproximadamente un 25% verticalmente en la ventana cuando se desplaza desde la parte superior o inferior

            // Obtener porcentaje de progreso
            percent = $(value).data('percentage');
            // Obtenga el radio del círculo del svg
            radius = $(this).find($('circle.complete3')).attr('r');
            // Obtener circunferencia (2πr)
            circumference = 2 * Math.PI * radius;
            // Obtener el valor de desplazamiento de trazo - guión basado en el porcentaje de la circunferencia
            strokeDashOffset = circumference - ((percent * circumference) / 100);
            // Progreso de la transición durante # segundos
            $(this).find($('circle.complete3')).animate({ 'stroke-dashoffset': strokeDashOffset }, 1550);//es un atributo de presentación que define un desplazamiento
        });
    }).trigger('scroll');
};


function eliminacionDeLoaders() {
    let valuePercentage1 = document.querySelector('#valuePercentage1');
    valuePercentage1.parentNode.style.display = 'none';

    let valuePercentage2 = document.querySelector('#valuePercentage2');
    valuePercentage2.parentNode.style.display = 'none';

    let valuePercentage3 = document.querySelector('#valuePercentage3');
    valuePercentage3.parentNode.style.display = 'none';

    let clientesConPedidos = document.querySelector('#clientesConPedidos');
    clientesConPedidos.style.display = 'none';

    let clientesActivos = document.querySelector('#clientesActivos');
    clientesActivos.style.display = 'none';

    let empresarioVIP150 = document.querySelector('#empresarioVIP150');
    empresarioVIP150.style.display = 'none';

    let puntosVIP150promedio = document.querySelector('#puntosVIP150promedio');
    puntosVIP150promedio.style.display = 'none';

    let ingresos = document.querySelector('#ingresos');
    ingresos.style.display = 'none';

    let comprimidos = document.querySelector('#comprimidos');
    comprimidos.style.display = 'none';

    let capitalizacion = document.querySelector('#capitalizacion');
    capitalizacion.style.display = 'none';
}
eliminacionDeLoaders();


axios.post('ResumenVentas.aspx/Lista_Datos_Extras', {})
    .then(response => {
        console.log(response);

        //Valor de relleno del circle
        var progress1 = response.data.d.Pedidos[0].Porcentaje_pedidos;
        let valuePercentage1 = document.querySelector('#valuePercentage1');
        valuePercentage1.parentNode.style.display = 'none';
        valuePercentage1.setAttribute("data-percentage", progress1);
        valuePercentage1.parentNode.style.display = 'block';
        valuePercentage1.parentNode.parentNode.firstElementChild.style.display = 'none';

        //Valor de relleno del circle
        var progress2 = response.data.d.Activos[0].Porcentaje_activos;
        let valuePercentage2 = document.querySelector('#valuePercentage2');
        valuePercentage2.parentNode.style.display = 'none';
        valuePercentage2.setAttribute("data-percentage", progress2);
        valuePercentage2.parentNode.style.display = 'block';
        valuePercentage2.parentNode.parentNode.firstElementChild.style.display = 'none';

        //Valor de relleno del circle
        var progress3 = response.data.d.Pedidos[0].Porcentaje_pedidos;
        let valuePercentage3 = document.querySelector('#valuePercentage3');
        valuePercentage3.parentNode.style.display = 'none';
        valuePercentage3.setAttribute("data-percentage", progress3);
        valuePercentage3.parentNode.style.display = 'block';
        valuePercentage3.parentNode.parentNode.firstElementChild.style.display = 'none';

        //Valor del porcentaje en el centro del circle
        let textPercentageFirstCircle = document.querySelector('#valuePercentage1 > .percentage');
        textPercentageFirstCircle.textContent = Number.parseFloat(progress1).toFixed(1)+'%';

        //Valor del porcentaje en el centro del circle
        let textPercentageSecondCircle = document.querySelector('#valuePercentage2 > .percentage');
        textPercentageSecondCircle.textContent = Number.parseFloat(progress2).toFixed(1)+'%';

        //Valor del porcentaje en el centro del circle
        let textPercentageThirdCircle = document.querySelector('#valuePercentage3 > .percentage');
        textPercentageThirdCircle.textContent = Number.parseFloat(progress1).toFixed(1) + '%';

        let ingresos = document.querySelector('#ingresos');
        ingresos.style.display = 'none';
        ingresos.textContent = response.data.d.Extras[0].Ingresos;
        ingresos.style.display = 'inline-block';
        document.querySelector('#loaderIngresos').style.display = 'none';


        let comprimidos = document.querySelector('#comprimidos');
        comprimidos.style.display = 'none';
        comprimidos.textContent = response.data.d.Extras[0].Comprimidos;
        comprimidos.style.display = 'inline-block';
        document.querySelector('#loaderComprimidos').style.display = 'none';


        let capitalizacion = document.querySelector('#capitalizacion');
        capitalizacion.style.display = 'none';
        capitalizacion.textContent = response.data.d.Extras[0].Capitalizacion;
        capitalizacion.style.display = 'inline-block';
        document.querySelector('#loaderCapitalización').style.display = 'none';


        let empresarioVIP150 = document.querySelector('#empresarioVIP150');
        empresarioVIP150.style.display = 'none';
        empresarioVIP150.textContent = response.data.d.Extras[0].CantVip;
        empresarioVIP150.style.display = 'block';
        document.querySelector('#loaderEmpresarioVIP150').style.display = 'none';

        let puntosVIP150promedio = document.querySelector('#puntosVIP150promedio');
        puntosVIP150promedio.style.display = 'none';
        puntosVIP150promedio.textContent = response.data.d.Extras[0].PuntajeVip;
        puntosVIP150promedio.style.display = 'block';
        document.querySelector('#loaderVIP150Promedio').style.display = 'none';


        const restaCapitalizacion = response.data.d.Extras[0].Ingresos - response.data.d.Extras[0].Comprimidos;
        console.log(restaCapitalizacion);
        if (restaCapitalizacion < 0) {
            capitalizacion.style.color = 'red'
        } else if (restaCapitalizacion > 0) {
            capitalizacion.style.color = 'green';
        } else if (restaCapitalizacion == 0) {
            capitalizacion.style.color = 'black';
        }
        radialProgressBar();

        //Ocultamos el bloque
        let clientesConPedidos = document.querySelector('#clientesConPedidos');
        clientesConPedidos.style.display = 'none';
        //Consumimos el servicio para mostrar en los span cantidadActual/cantidadTotal
        let clientesPedidos = document.querySelector('#clientesConPedidos > span:nth-child(1)');
        clientesPedidos.textContent = response.data.d.Pedidos[0].Clientes_pedidos;
        let clientesTotalesPedidos = document.querySelector('#clientesConPedidos > span:nth-child(2)');
        clientesTotalesPedidos.textContent = response.data.d.Pedidos[0].Clientes_totales_pedidos;
        //Mostramos el loader
        clientesConPedidos.style.display = 'block';
        document.querySelector('#loaderPedidos').style.display = 'none';

        //Ocultamos el bloque
        let clientesActivos = document.querySelector('#clientesActivos');
        clientesActivos.style.display = 'none';
        //Consumimos el servicio para mostrar en los span cantidadActual/cantidadTotal
        let clientesActivosPrimerSpan = document.querySelector('#clientesActivos > span:nth-child(1)');
        clientesActivosPrimerSpan.textContent = response.data.d.Activos[0].Clientes_activos;
        let clientesTotalesActivos = document.querySelector('#clientesActivos > span:nth-child(2)');
        clientesTotalesActivos.textContent = response.data.d.Activos[0].Clientes_totales_activos;
        //Mostramos el loader
        clientesActivos.style.display = 'block';
        document.querySelector('#loaderActivos').style.display = 'none';

        //Ocultamos el bloque
        let clientesRandom = document.querySelector('#clientesRandom');
        clientesRandom.style.display = 'none';
        //Consumimos el servicio para mostrar en los span cantidadActual/cantidadTotal
        let clientesRandomPrimerSpan = document.querySelector('#clientesRandom > span:nth-child(1)');
        clientesRandomPrimerSpan.textContent = response.data.d.Pedidos[0].Clientes_pedidos;
        let clientesRandomSegundoSpan = document.querySelector('#clientesRandom > span:nth-child(2)');
        clientesRandomSegundoSpan.textContent = response.data.d.Pedidos[0].Clientes_totales_pedidos;
        //Mostramos el loader
        clientesRandom.style.display = 'block';
        document.querySelector('#loaderRandom').style.display = 'none';

    })
    .catch(error => {
        console.error(error);
    });


//Para colocar el valor del porcentaje del circle progress bar

    //        var VQActual = document.getElementById('<%=VQActualPB.ClientID%>');
    //var VQProximo = document.getElementById('<%=VQProximoPB.ClientID%>');
    //var progress = (VQProximo.value == "0") ? 0 : (parseFloat(VQActual.value) >= parseFloat(VQProximo.value)) ? 99 :
    //    (parseFloat(VQActual.value) / parseFloat(VQProximo.value)) * 100; 






//--------------------------------------------------------------------- TABLAS ------------------------------------------------------------------------
//Para colocar valores a las tablas
var tabla = $('#table_id').dataTable({
    responsive: true,
    "iDisplayLength": 10
});

var tabla2 = $('#table_id2').dataTable({
    responsive: true,
    "iDisplayLength": 10
});

var tabla3 = $('#table_id3').dataTable({
    responsive: true,
    "iDisplayLength": 10
});

var tabla4 = $('#table_id4').dataTable({
    responsive: true,
    "iDisplayLength": 10
});

//--------------------- TABLA 1 --------------------------------------------

//------- BORRAR PRIMER HIJO DEL TBODY PARA QUE SALGA BIEN EL LOADER ----------
//const tbodyTable1 = document.querySelector('#table_id > tbody');
//tbodyTable1.removeChild(tbodyTable1.firstElementChild);



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

//let añadiendoEstilosTabla1 = document.querySelector('#table_id');
//añadiendoEstilosTabla1.style.display = "flex";
//añadiendoEstilosTabla1.style.flexDirection = "column";

//let tbody = document.querySelector('#table_id > tbody');
//tbody.style.display = "flex";
//tbody.style.justifyContent = "center";

//let dataTables_empty = document.querySelector('#table_id .dataTables_empty');
//dataTables_empty.style.display = 'flex';
//dataTables_empty.style.justifyContent = 'center';

axios.post('ResumenVentas.aspx/Lista_TopPatrocinioActual', {})
    .then(response => {
        console.log(response);
        //let data = response.data.d;
        //data.forEach{

        //}
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
        $(".sectionLoader").fadeOut("slow");
    })
    .catch(error => {
        console.error(error);
    });

//function llenadoPrimeraTabla() {
//    for (var i = 0; i < 1; i++) {
//        tabla.fnAddData([
//            "carla rodríguez lujan",
//            "954561651",
//            "rubí",
//            "21",
//            "9240.7",
//            "25.3",
//            "arequipa",
//            "arequipa",
//            "arequipa",
//            "maría lópez gómez",
//            "986551254",
//            "susana quispe pérez",
//            "953253554"
//        ]);
//        tabla.fnAddData([
//            "adrian lópez garcía",
//            "998461651",
//            "oro",
//            "10",
//            "3845.9",
//            "32.3",
//            "lima",
//            "lima",
//            "san juan de lurigancho",
//            "maría lópez gómez",
//            "986551254",
//            "susana quispe pérez",
//            "953253554"
//        ]);
//        tabla.fnAddData([
//            "sandra alvarez roque",
//            "941361689",
//            "oro",
//            "10",
//            "2823.2",
//            "27.1",
//            "la libertad",
//            "trujillo",
//            "la esperanza",
//            "claudia argomedo lujan",
//            "972546512",
//            "milagros benites alvarado",
//            "932545132"
//        ]);
//        tabla.fnAddData([
//            "diana ramírez bazán",
//            "968898559",
//            "bronce",
//            "5",
//            "2212.2",
//            "23.4",
//            "piura",
//            "piura",
//            "piura",
//            "claudia argomedo lujan",
//            "972546512",
//            "milagros benites alvarado",
//            "932545132"
//        ]);
//        tabla.fnAddData([
//            "sofía gonzález roque",
//            "911215124",
//            "bronce",
//            "3",
//            "1234.1",
//            "32.3",
//            "lima",
//            "lima",
//            "breña",
//            "maría lópez gómez",
//            "986551254",
//            "susana quispe pérez",
//            "953253554"
//        ]);
//        tabla.fnAddData([
//            "mily vargas aquino",
//            "965113204",
//            "bronce",
//            "3",
//            "352.2",
//            "23.8",
//            "lima",
//            "lima",
//            "breña",
//            "maría lópez gómez",
//            "986551254",
//            "susana quispe pérez",
//            "953253554"
//        ]);
//    }
//    $(".sectionLoader").fadeOut("slow");
//}
//llenadoPrimeraTabla();

//--------------------- TABLA 2 --------------------------------------------

//------- BORRAR PRIMER HIJO DEL TBODY PARA QUE SALGA BIEN EL LOADER ----------
//const tbodyTable2 = document.querySelector('#table_id2 > tbody');
//tbodyTable2.removeChild(tbodyTable2.firstElementChild);

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

axios.post('ResumenVentas.aspx/Lista_TopVentasActual', {})
    .then(response => {
        console.log(response);
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

//--------------------- TABLA 3 --------------------------------------------

//------- BORRAR PRIMER HIJO DEL TBODY PARA QUE SALGA BIEN EL LOADER ----------
//const tbodyTable3 = document.querySelector('#table_id3 > tbody');
//tbodyTable3.removeChild(tbodyTable3.firstElementChild);

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

axios.post('ResumenVentas.aspx/Lista_TopEmperadorActual', {})
    .then(response => {
        console.log(response);
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

//--------------------- TABLA 4 --------------------------------------------

//------- BORRAR PRIMER HIJO DEL TBODY PARA QUE SALGA BIEN EL LOADER ----------
//const tbodyTable4 = document.querySelector('#table_id4 > tbody');
//tbodyTable4.removeChild(tbodyTable4.firstElementChild);

//-------------- LLENADO DEL SELECT --------------------
const selectTable4 = document.getElementById('mySelect4');
axios.post('ResumenVentas.aspx/Lista_Filtro_Periodos_Inactividad', {})
    .then(response => {
        console.log(response.data.d);
        let ordenarArray = response.data.d;
        ordenarArray.sort(function (a, b) {
            return b - a;
        });
        if (ordenarArray !== []) {

            ordenarArray.forEach(e => {
                const option = document.createElement('option');
                option.text = e;
                option.value = e;
                selectTable4.appendChild(option);
            })
            fillTable4();
        }
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
    if (!!idPeriodo) {
        const data = {
            "idp": idPeriodo
        }

        axios.post('ResumenVentas.aspx/Lista_TopInactivos_By_Periodo', data)
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
    
}


//-------------------------------------------------------------------Para la ventana modal al dar click en el boton Listado------------------------------------------------------------------------//
//// Get the modal
//var modal = document.getElementById("myModal");

//// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

//// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

//// When the user clicks on the button, open the modal
//btn.onclick = function (e) {
//    e.preventDefault();
//    modal.style.display = "block";
//}

//// When the user clicks on <span> (x), close the modal
//span.onclick = function () {
//    modal.style.display = "none";
//}

//// When the user clicks anywhere outside of the modal, close it
//window.onclick = function (event) {
//    if (event.target == modal) {
//        modal.style.display = "none";
//    }
//}

////-------------Pasando estilos  y estructura de las tablas sacado de la pagina de CompetarPregistro---------------------------------//
//Quitar Filtro Mostrar cantidad de Filas
let eliminarFiltroMostrarRegistros = document.getElementById("table_id_length");
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

    let expandirAnteriorSiguiente = document.querySelector("#table_id_wrapper>div:nth-child(3)>div>div");
    expandirAnteriorSiguiente.style.width = "100%";
    expandirAnteriorSiguiente.style.display = "flex";
    expandirAnteriorSiguiente.style.justifyContent = "center";
    expandirAnteriorSiguiente.style.margin = "0";

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

    let expandirAnteriorSiguiente = document.querySelector("#table_id2_wrapper>div:nth-child(3)>div>div");
    expandirAnteriorSiguiente.style.width = "100%";
    expandirAnteriorSiguiente.style.display = "flex";
    expandirAnteriorSiguiente.style.justifyContent = "center";
    expandirAnteriorSiguiente.style.margin = "0";

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

    let expandirAnteriorSiguiente = document.querySelector("#table_id3_wrapper>div:nth-child(3)>div>div");
    expandirAnteriorSiguiente.style.width = "100%";
    expandirAnteriorSiguiente.style.display = "flex";
    expandirAnteriorSiguiente.style.justifyContent = "center";
    expandirAnteriorSiguiente.style.margin = "0";

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

    let expandirAnteriorSiguiente = document.querySelector("#table_id4_wrapper>div:nth-child(3)>div>div");
    expandirAnteriorSiguiente.style.width = "100%";
    expandirAnteriorSiguiente.style.display = "flex";
    expandirAnteriorSiguiente.style.justifyContent = "center";
    expandirAnteriorSiguiente.style.margin = "0";

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