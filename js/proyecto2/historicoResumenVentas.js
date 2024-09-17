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


//---------------------------------------------Para el relleno del circle progress bar--------------------------------------------------------------//

function radialProgressBar() {
    //-----------------Primer Circle----------------------------
    // Eliminar el estilo en línea svg.radial-progress .complete
    $('svg.radial-progress1').each(function (index, value) {
        $(this).find($('circle.complete1')).removeAttr('style');
    });

    // Activar la animación de progreso en el desplazamiento
    $(window).ready(function () {
        //$('#ModalCambioPassword').modal('show'); 
        // alert("hola");

        $('svg.radial-progress1').each(function (index, value) {
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
            $(this).find($('circle.complete1')).animate({ 'stroke-dashoffset': strokeDashOffset }, 1550);

        });
    }).trigger('scroll');


    //-----------------Segundo Circle----------------------------
    // Eliminar el estilo en línea svg.radial-progress .complete
    $('svg.radial-progress2').each(function (index, value) {
        $(this).find($('circle.complete2')).removeAttr('style');
    });

    // Activar la animación de progreso en el desplazamiento
    $(window).ready(function () {
        //$('#ModalCambioPassword').modal('show'); 
        // alert("hola");

        $('svg.radial-progress2').each(function (index, value) {
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
            $(this).find($('circle.complete2')).animate({ 'stroke-dashoffset': strokeDashOffset }, 1550);
        });
    }).trigger('scroll');


    //-----------------Tercer Circle----------------------------
    // Eliminar el estilo en línea svg.radial-progress .complete
    $('svg.radial-progress3').each(function (index, value) {
        $(this).find($('circle.complete3')).removeAttr('style');
    });

    // Activar la animación de progreso en el desplazamiento
    $(window).ready(function () {
        //$('#ModalCambioPassword').modal('show'); 
        // alert("hola");

        $('svg.radial-progress3').each(function (index, value) {
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
            $(this).find($('circle.complete3')).animate({ 'stroke-dashoffset': strokeDashOffset }, 1550);
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

function aparecerLoaders() {
    let valuePercentage1 = document.querySelector('#valuePercentage1');
    valuePercentage1.parentNode.parentNode.firstElementChild.style.display = 'block';

    let valuePercentage2 = document.querySelector('#valuePercentage2');
    valuePercentage2.parentNode.parentNode.firstElementChild.style.display = 'block';

    let valuePercentage3 = document.querySelector('#valuePercentage3');
    valuePercentage3.parentNode.parentNode.firstElementChild.style.display = 'block';

    document.querySelector('#loaderIngresos').style.display = 'block';
    document.querySelector('#loaderComprimidos').style.display = 'block';
    document.querySelector('#loaderCapitalización').style.display = 'block';
    document.querySelector('#loaderEmpresarioVIP150').style.display = 'block';
    document.querySelector('#loaderVIP150Promedio').style.display = 'block';
    document.querySelector('#loaderPedidos').style.display = 'block';
    document.querySelector('#loaderActivos').style.display = 'block';
}


function fillTable1() {
    eliminacionDeLoaders();
    aparecerLoaders();
    const idPeriodo = document.getElementById('mySelect1').value;
    //console.log(idPeriodo);
    const data = {
        "idp": idPeriodo
    }
    axios.post('HistoricoDeTopYVentasPorNivel.aspx/Lista_Datos_ExtrasHistorico', data)
        .then(response => {
            console.log(response);


            var progress1 = response.data.d.Pedidos[0].Porcentaje_pedidos;

            let valuePercentage1 = document.querySelector('#valuePercentage1');
            valuePercentage1.parentNode.style.display = 'none';
            valuePercentage1.setAttribute("data-percentage", progress1);
            valuePercentage1.parentNode.style.display = 'block';
            valuePercentage1.parentNode.parentNode.firstElementChild.style.display = 'none';


            var progress2 = response.data.d.Activos[0].Porcentaje_activos;

            let valuePercentage2 = document.querySelector('#valuePercentage2');
            valuePercentage2.parentNode.style.display = 'none';
            valuePercentage2.setAttribute("data-percentage", progress2);
            valuePercentage2.parentNode.style.display = 'block';
            valuePercentage2.parentNode.parentNode.firstElementChild.style.display = 'none';


            var progress3 = response.data.d.Pedidos[0].Porcentaje_pedidos;

            let valuePercentage3 = document.querySelector('#valuePercentage3');
            valuePercentage3.parentNode.style.display = 'none';
            valuePercentage3.setAttribute("data-percentage", progress3);
            valuePercentage3.parentNode.style.display = 'block';
            valuePercentage3.parentNode.parentNode.firstElementChild.style.display = 'none';


            let textPercentageFirstCircle = document.querySelector('#valuePercentage1 > .percentage');
            textPercentageFirstCircle.textContent = Number.parseFloat(progress1).toFixed(1) + '%';

            let textPercentageSecondCircle = document.querySelector('#valuePercentage2 > .percentage');
            textPercentageSecondCircle.textContent = Number.parseFloat(progress2).toFixed(1) + '%';

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

            let clientesConPedidos = document.querySelector('#clientesConPedidos');
            clientesConPedidos.style.display = 'none';

            let clientesPedidos = document.querySelector('#clientesConPedidos > span:nth-child(1)');
            clientesPedidos.textContent = response.data.d.Pedidos[0].Clientes_pedidos;
            let clientesTotalesPedidos = document.querySelector('#clientesConPedidos > span:nth-child(2)');
            clientesTotalesPedidos.textContent = response.data.d.Pedidos[0].Clientes_totales_pedidos;

            clientesConPedidos.style.display = 'block';
            document.querySelector('#loaderPedidos').style.display = 'none';


            let clientesActivos = document.querySelector('#clientesActivos');
            clientesActivos.style.display = 'none';

            let clientesActivosPrimerSpan = document.querySelector('#clientesActivos > span:nth-child(1)');
            clientesActivosPrimerSpan.textContent = response.data.d.Activos[0].Clientes_activos;
            let clientesTotalesActivos = document.querySelector('#clientesActivos > span:nth-child(2)');
            clientesTotalesActivos.textContent = response.data.d.Activos[0].Clientes_totales_activos;

            clientesActivos.style.display = 'block';
            document.querySelector('#loaderActivos').style.display = 'none';


            let clientesRandom = document.querySelector('#clientesRandom');
            clientesRandom.style.display = 'none';

            let clientesRandomPrimerSpan = document.querySelector('#clientesRandom > span:nth-child(1)');
            clientesRandomPrimerSpan.textContent = response.data.d.Pedidos[0].Clientes_pedidos;
            let clientesRandomSegundoSpan = document.querySelector('#clientesRandom > span:nth-child(2)');
            clientesRandomSegundoSpan.textContent = response.data.d.Pedidos[0].Clientes_totales_pedidos;

            clientesRandom.style.display = 'block';
            document.querySelector('#loaderRandom').style.display = 'none';

        })
        .catch(error => {
            console.error(error);
        });
}