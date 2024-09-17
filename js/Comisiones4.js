var data, documento1 = "", listaComisionLinea, listaComisionRetencion, listaComisionRetencionPeriodo, listaComisionPeriodo, COMAFI = 0, COMUNI = 0, COMTIBU = 0, COMBRON = 0, COMCI = 0, COMCON = 0, COMESCO = 0, COMMERCA = 0, COMMATRI = 0,
    COMAUTO = 0, COMFAMILIAR = 0, NIVEL1 = 0, NIVEL2 = 0, NIVEL3 = 0, NIVEL4 = 0, NIVEL5 = 0, UNIX1 = 0, UNIX2 = 0, UNIX3 = 0, UNIX4 = 0, UNIX5 = 0, UNIX6 = 0, UNIX7 = 0, UNIX8 = 0,
    UNIX9 = 0, UNIX10 = 0, UNIX11 = 0, UNIX12 = 0, UNIX13 = 0, UNIX14 = 0, UNIX15 = 0, MONTOGENERAL = 0, SUMACOMAFI = 0, SUMACOMUNI = 0, SUMACOMTIBU = 0, SUMACOMBRON = 0, SUMACOMCI = 0, SUMACOMCON = 0,
    SUMACOMESCO = 0, SUMACOMMERCA = 0, SUMACOMMATRI = 0, SUMAGENERAL = 0, PORCENCOMAFI = 0, PORCENCOMUNI = 0, PORCENCOMTIBU = 0, PORCENCOMBRON = 0, PORCENCOMCI = 0,
    PORCENCOMCON = 0, PORCENCOMESCO = 0, PORCENCOMMERCA = 0, PORCENCOMMATRI = 0, NOMBREPERIODO = "";

//CARGAR COMBOS

$.ajax({
    type: "POST",
    url: "Bonificaciones.aspx/ComboPeriodoComision",
    data: "{}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    async: false,
    success: function (result) {
        $("#ddlPeriodo").empty();
        $("#ddlPeriodo").append("<option value='0'>--Select--</option>");
        $.each(result.d, function (key, value) {
            $("#ddlPeriodo").append($("<option></option>").val(value.idPeriodo).html(value.nombrePeriodo));
        });
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus + ": " + XMLHttpRequest.responseText);
    }
});

$.ajax({
    type: "POST",
    url: "EditarPerfil.aspx/GetPais",
    data: "{}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    async: false,
    success: function (result) {
        $("#ddlPais").empty();
        $.each(result.d, function (key, value) {
            $("#ddlPais").append($("<option></option>").val(value.Codigo).html(value.Nombre));
        });
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus + ": " + XMLHttpRequest.responseText);
    }
});

demo2 = {
    initCharts: function () {


        ///*  **************** Coloured Rounded Line Chart - Line Chart ******************** */


        //dataColouredRoundedLineChart = {
        //    labels: ['\'06', '\'07', '\'08', '\'09', '\'10', '\'11', '\'12', '\'13', '\'14', '\'15'],
        //    series: [
        //        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        //    ]
        //};

        //optionsColouredRoundedLineChart = {
        //    lineSmooth: Chartist.Interpolation.cardinal({
        //        tension: 0.4
        //    }),
        //    axisY: {
        //        showGrid: true,
        //        offset: 50
        //    },
        //    axisX: {
        //        showGrid: false
        //    },
        //    high: 10000,
        //    showPoint: true,
        //    height: '320px'
        //};


        //var colouredRoundedLineChart = new Chartist.Line('#colouredRoundedLineChart', dataColouredRoundedLineChart, optionsColouredRoundedLineChart);
        //colouredRoundedLineChart.on('created', function (context) {
        //    context.svg.querySelectorAll('.ct-series').attr({
        //        'transform': 'translate(' + context.axisX.stepLength / 2 + ')'
        //    });
        //});

        ////md.startAnimationForLineChart(colouredRoundedLineChart);


        ///*  **************** Coloured Rounded Line Chart - Line Chart ******************** */


        //dataColouredBarsChart = {
        //    labels: ['\'06', '\'07', '\'08', '\'09', '\'10', '\'11', '\'12', '\'13', '\'14', '\'15'],
        //    series: [
        //        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        //    ]
        //};

        //optionsColouredBarsChart = {
        //    lineSmooth: Chartist.Interpolation.cardinal({
        //        tension: 10
        //    }),
        //    axisY: {
        //        showGrid: true,
        //        offset: 40
        //    },
        //    axisX: {
        //        showGrid: false,
        //    },
        //    low: 0,
        //    high: 20000,
        //    showPoint: true,
        //    height: '300px'
        //};


        //var colouredBarsChart = new Chartist.Line('#colouredBarsChart', dataColouredBarsChart, optionsColouredBarsChart);

        ////md.startanimationforlinechart(colouredbarschart);



        ///*  **************** Public Preferences - Pie Chart ******************** */

        //var dataPreferences = {
        //    labels: ['', '', '', '', '', '', '', '', ''],
        //    series: [10, 10, 10, 10, 10, 10, 10, 10, 10]
        //};

        //var optionsPreferences = {
        //    height: '300px',
        //    labelOffset: 78,
        //    chartPadding: 28
        //};

        //Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);
        //sendDataAjax();
    }
}

$("#btnComisionGrafica").click(function (e) {
    e.preventDefault();
    sendDataAjax();
});

function sendDataAjax() {

    $.ajax({
        type: "POST",
        url: "Bonificaciones.aspx/ListaComisionesLinea",
        data: "{}",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            console.log(data.d);
            listaComisionLinea = data.d;
            $("#bloqueNuevoBono").show();
            RellenarDataGraficos();
        }
    });
}

function RellenarDataGraficos() {
    var myArrayNombresLinea = [];
    var myArrayMontosLinea = [];
    var myArrayMontosUnilevel = [];
    var myArrayMontosAfiliacion = [];
    var myArrayMontosCI = [];
    var myArrayMontosConsultor = [];
    var rangoMaximo = 0, progreUni = "", progreFast = "",
        progreCI = "", progreCON = "", progreGENERAL = "";

    for (var i = 0; i < listaComisionLinea.length; i++) {

        myArrayNombresLinea.push(listaComisionLinea[i].nombrePeriodo);
        myArrayMontosLinea.push(listaComisionLinea[i].ComisionLinea);
        myArrayMontosUnilevel.push(listaComisionLinea[i].COMUNI);
        myArrayMontosAfiliacion.push(listaComisionLinea[i].COMAFI);
        myArrayMontosCI.push(listaComisionLinea[i].COMCI);
        myArrayMontosConsultor.push(listaComisionLinea[i].COMCON);
        if (i == 0) {
            progreUni = listaComisionLinea[i].COMUNI; progreFast = listaComisionLinea[i].COMAFI;
            progreCI = listaComisionLinea[i].COMCI; progreCON = listaComisionLinea[i].COMCON;
            progreGENERAL = listaComisionLinea[i].ComisionLinea;
        }
        else {
            progreUni = " " + progreUni + " / " + listaComisionLinea[i].COMUNI;
            progreFast = " " + progreFast + " / " + listaComisionLinea[i].COMAFI;
            progreCI = " " + progreCI + " / " + listaComisionLinea[i].COMCI;
            progreCON = " " + progreCON + " / " + listaComisionLinea[i].COMCON;
            progreGENERAL = " " + progreGENERAL + " / " + listaComisionLinea[i].ComisionLinea;
        }


        SUMACOMAFI = SUMACOMAFI + listaComisionLinea[i].COMAFI;
        SUMACOMUNI = SUMACOMUNI + listaComisionLinea[i].COMUNI;
        SUMACOMTIBU = SUMACOMTIBU + listaComisionLinea[i].COMTIBU;
        SUMACOMBRON = SUMACOMBRON + listaComisionLinea[i].COMBRON;
        SUMACOMCON = SUMACOMCON + listaComisionLinea[i].COMCON;
        SUMACOMCI = SUMACOMCI + listaComisionLinea[i].COMCI;
        SUMACOMESCO = SUMACOMESCO + listaComisionLinea[i].COMESCO;
        SUMACOMMERCA = SUMACOMMERCA + listaComisionLinea[i].COMMERCA;
        SUMACOMMATRI = SUMACOMMATRI + listaComisionLinea[i].COMMATRI;
        SUMAGENERAL = SUMAGENERAL + listaComisionLinea[i].ComisionLinea;

        if (listaComisionLinea[i].ComisionLinea > rangoMaximo) {
            rangoMaximo = listaComisionLinea[i].ComisionLinea;
        }
        if (listaComisionLinea[i].Estado == true) {
            COMAUTO = listaComisionLinea[i].COMAUTO;
            COMFAMILIAR = listaComisionLinea[i].COMFAMILIAR;
            COMAFI = listaComisionLinea[i].COMAFI;
            COMUNI = listaComisionLinea[i].COMUNI;
            COMTIBU = listaComisionLinea[i].COMTIBU;
            COMBRON = listaComisionLinea[i].COMBRON;
            COMCI = listaComisionLinea[i].COMCI;
            COMCON = listaComisionLinea[i].COMCON;
            COMESCO = listaComisionLinea[i].COMESCO;
            COMMERCA = listaComisionLinea[i].COMMERCA;
            COMMATRI = listaComisionLinea[i].COMMATRI;
            NIVEL1 = listaComisionLinea[i].NIVEL1;
            NIVEL2 = listaComisionLinea[i].NIVEL2;
            NIVEL3 = listaComisionLinea[i].NIVEL3;
            NIVEL4 = listaComisionLinea[i].NIVEL4;
            NIVEL5 = listaComisionLinea[i].NIVEL5;
            UNIX1 = listaComisionLinea[i].UNIX1;
            UNIX2 = listaComisionLinea[i].UNIX2;
            UNIX3 = listaComisionLinea[i].UNIX3;
            UNIX4 = listaComisionLinea[i].UNIX4;
            UNIX5 = listaComisionLinea[i].UNIX5;
            UNIX6 = listaComisionLinea[i].UNIX6;
            UNIX7 = listaComisionLinea[i].UNIX7;
            UNIX8 = listaComisionLinea[i].UNIX8;
            UNIX9 = listaComisionLinea[i].UNIX9;
            UNIX10 = listaComisionLinea[i].UNIX10;
            UNIX11 = listaComisionLinea[i].UNIX11;
            UNIX12 = listaComisionLinea[i].UNIX12;
            UNIX13 = listaComisionLinea[i].UNIX13;
            UNIX14 = listaComisionLinea[i].UNIX14;
            UNIX15 = listaComisionLinea[i].UNIX15;
            MONTOGENERAL = listaComisionLinea[i].ComisionLinea;
            NOMBREPERIODO = listaComisionLinea[i].nombrePeriodo;
        }
    }

    if (rangoMaximo >= 18000) { rangoMaximo = 20000 }
    else if (rangoMaximo >= 15000) { rangoMaximo = 18000 }
    else if (rangoMaximo >= 12000) { rangoMaximo = 15000 }
    else if (rangoMaximo >= 9000) { rangoMaximo = 12000 }
    else if (rangoMaximo >= 6000) { rangoMaximo = 9000 }
    else if (rangoMaximo >= 3000) { rangoMaximo = 6000 }
    else if (rangoMaximo >= 1000) { rangoMaximo = 3000 }
    else { rangoMaximo = 1000 }

    /*  **************** Coloured Rounded Line Chart - Line Chart ******************** */

    dataColouredRoundedLineChart = {
        labels: myArrayNombresLinea,
        series: [
            myArrayMontosLinea
        ]
    };

    $("#txtMontosLineaGeneral").text(progreGENERAL);

    optionsColouredRoundedLineChart = {
        lineSmooth: Chartist.Interpolation.cardinal({
            tension: 0.3
        }),
        axisY: {
            showGrid: true,
            offset: 50
        },
        axisX: {
            showGrid: false,
            labelInterpolationFnc: function (value) {
                return value[0];
            },
            divisor: 10
        },
        high: rangoMaximo,
        showPoint: true,
        height: '320px'
    };

    var responsiveOptions = [
        ['screen and (min-width: 300px)', {
            seriesBarDistance: 15,
            axisX: {
                labelInterpolationFnc: function (value) {
                    return value.slice(0, 3);
                }
            }
        }],
        ['screen and (min-width: 600px)', {
            seriesBarDistance: 30,
            axisX: {
                labelInterpolationFnc: Chartist.noop
            }
        }]
    ];



    var colouredRoundedLineChart = new Chartist.Line('#colouredRoundedLineChart', dataColouredRoundedLineChart, optionsColouredRoundedLineChart, responsiveOptions);
    colouredRoundedLineChart.on('created', function (context) {
        context.svg.querySelectorAll('.ct-series').attr({
            'transform': 'translate(' + context.axisX.stepLength / 2 + ')'
        });
    });

    md.startAnimationForLineChart(colouredRoundedLineChart);


    /*  **************** Public Preferences - Pie Chart ******************** */
    var Texto1 = "", Texto2 = "", Texto3 = "", Texto4 = "", Texto5 = "", Texto6 = "", Texto7 = "", Texto8 = "", Texto9 = "";
    if (SUMACOMUNI > 1) { Texto1 = Math.round((SUMACOMUNI / SUMAGENERAL) * 100) + "%"; PORCENCOMUNI = Math.round((SUMACOMUNI / SUMAGENERAL) * 100); }
    if (SUMACOMAFI > 1) { Texto2 = Math.round((SUMACOMAFI / SUMAGENERAL) * 100) + "%"; PORCENCOMAFI = Math.round((SUMACOMAFI / SUMAGENERAL) * 100); }
    if (SUMACOMTIBU > 1) { Texto3 = Math.round((SUMACOMTIBU / SUMAGENERAL) * 100) + "%"; PORCENCOMTIBU = Math.round((SUMACOMTIBU / SUMAGENERAL) * 100); }
    if (SUMACOMBRON > 1) { Texto4 = Math.round((SUMACOMBRON / SUMAGENERAL) * 100) + "%"; PORCENCOMBRON = Math.round((SUMACOMBRON / SUMAGENERAL) * 100); }
    if (SUMACOMCI > 1) { Texto5 = Math.round((SUMACOMCI / SUMAGENERAL) * 100) + "%"; PORCENCOMCI = Math.round((SUMACOMCI / SUMAGENERAL) * 100); }
    if (SUMACOMCON > 1) { Texto6 = Math.round((SUMACOMCON / SUMAGENERAL) * 100) + "%"; PORCENCOMCON = Math.round((SUMACOMCON / SUMAGENERAL) * 100); }
    if (SUMACOMESCO > 1) { Texto7 = Math.round((SUMACOMESCO / SUMAGENERAL) * 100) + "%"; PORCENCOMESCO = Math.round((SUMACOMESCO / SUMAGENERAL) * 100); }
    if (SUMACOMMERCA > 1) { Texto8 = Math.round((SUMACOMMERCA / SUMAGENERAL) * 100) + "%"; PORCENCOMMERCA = Math.round((SUMACOMMERCA / SUMAGENERAL) * 100); }
    if (SUMACOMMATRI > 1) { Texto9 = Math.round((SUMACOMMATRI / SUMAGENERAL) * 100) + "%"; PORCENCOMMATRI = Math.round((SUMACOMMATRI / SUMAGENERAL) * 100); }
    if (PORCENCOMAFI < 1) { Texto1 = ""; } if (PORCENCOMUNI < 1) { Texto2 = ""; } if (PORCENCOMTIBU < 1) { Texto3 = ""; } if (PORCENCOMBRON < 1) { Texto4 = ""; }
    if (PORCENCOMCI < 1) { Texto5 = ""; } if (PORCENCOMCON < 1) { Texto6 = ""; } if (PORCENCOMESCO < 1) { Texto7 = ""; } if (PORCENCOMMERCA < 1) { Texto8 = ""; } if (PORCENCOMMATRI < 1) { Texto9 = ""; }
    var dataPreferences = {
        labels: [Texto1, Texto2, Texto3, Texto4, Texto5, Texto6, Texto7, Texto8, Texto9],
        series: [PORCENCOMUNI , PORCENCOMAFI, PORCENCOMTIBU, PORCENCOMBRON, PORCENCOMCI,
            PORCENCOMCON, PORCENCOMESCO, PORCENCOMMERCA, PORCENCOMMATRI]
    };

    var optionsPreferences = {
        height: '300px',
        labelOffset: 78,
        chartPadding: 28
    };

    Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);
    $("#txtUNI").text(PORCENCOMUNI); $("#txtFS").text(PORCENCOMAFI); $("#txtTIBU").text(PORCENCOMTIBU);
    $("#txtBRON").text(PORCENCOMBRON); $("#txtCIN").text(PORCENCOMCI); $("#txtCONSUL").text(PORCENCOMCON);
    $("#txtESCO").text(PORCENCOMESCO); $("#txtMERCA").text(PORCENCOMMERCA); $("#txtMATRI").text(PORCENCOMMATRI);

    /*  **************** Coloured Rounded Line Chart - Line Chart ******************** */


    dataColouredBarsChart = {
        labels: myArrayNombresLinea,
        series: [
            myArrayMontosUnilevel,
            myArrayMontosAfiliacion,
            myArrayMontosCI,
            myArrayMontosConsultor
        ]
    };

    $("#txtProgreUni").text(progreUni);
    $("#txtProgreFast").text(progreFast);
    $("#txtProgreCI").text(progreCI);
    $("#txtProgreCon").text(progreCON);

    optionsColouredBarsChart = {
        lineSmooth: Chartist.Interpolation.cardinal({
            tension: 0.3
        }),
        axisY: {
            showGrid: true,
            offset: 40
        },
        axisX: {
            showGrid: false,
            labelInterpolationFnc: function (value) {
                return value[0];
            }
        },
        low: 0,
        high: rangoMaximo,
        showPoint: true,
        height: '300px'
    };

    var responsiveOptions = [
        ['screen and (min-width: 300px)', {
            seriesBarDistance: 15,
            axisX: {
                labelInterpolationFnc: function (value) {
                    return value.slice(0, 3);
                }
            }
        }],
        ['screen and (min-width: 600px)', {
            seriesBarDistance: 30,
            axisX: {
                labelInterpolationFnc: Chartist.noop
            }
        }]
    ];


    var colouredBarsChart = new Chartist.Line('#colouredBarsChart', dataColouredBarsChart, optionsColouredBarsChart, responsiveOptions);
    colouredBarsChart.on('created', function (context) {
        context.svg.querySelectorAll('.ct-series').attr({
            'transform': 'translate(' + context.axisX.stepLength / 2 + ')'
        });
    });

    md.startAnimationForLineChart(colouredBarsChart);

    /*RELLENAR DATOS INDIVIDUALES DE LOS BONOS*/
    var PORX1 = 0, PORX2 = 0, PORX3 = 0, PORX4 = 0, PORX5 = 0, PORX6 = 0, PORX7 = 0,
        PORX8 = 0, PORX9 = 0, PORX10 = 0, PORX11 = 0, PORX12 = 0, PORX13 = 0, PORX14 = 0,
        PORX15 = 0, PORAFI1 = 0, PORAFI2 = 0, PORAFI3 = 0, PORAFI4 = 0, PORAFI5 = 0;
    PORX1 = Math.round((UNIX1 / COMUNI) * 100);
    PORX2 = Math.round((UNIX2 / COMUNI) * 100);
    PORX3 = Math.round((UNIX3 / COMUNI) * 100);
    PORX4 = Math.round((UNIX4 / COMUNI) * 100);
    PORX5 = Math.round((UNIX5 / COMUNI) * 100);
    PORX6 = Math.round((UNIX6 / COMUNI) * 100);
    PORX7 = Math.round((UNIX7 / COMUNI) * 100);
    PORX8 = Math.round((UNIX8 / COMUNI) * 100);
    PORX9 = Math.round((UNIX9 / COMUNI) * 100);
    PORX10 = Math.round((UNIX10 / COMUNI) * 100);
    PORX11 = Math.round((UNIX11 / COMUNI) * 100);
    PORX12 = Math.round((UNIX12 / COMUNI) * 100);
    PORX13 = Math.round((UNIX13 / COMUNI) * 100);
    PORX14 = Math.round((UNIX14 / COMUNI) * 100);
    PORX15 = Math.round((UNIX15 / COMUNI) * 100);
    PORAFI1 = Math.round((NIVEL1 / COMAFI) * 100);
    PORAFI2 = Math.round((NIVEL2 / COMAFI) * 100);
    PORAFI3 = Math.round((NIVEL3 / COMAFI) * 100);
    PORAFI4 = Math.round((NIVEL4 / COMAFI) * 100);
    PORAFI5 = Math.round((NIVEL5 / COMAFI) * 100);
    MONTOGENERAL = MONTOGENERAL * 1;

    $("#txtNomPeriodo").text(NOMBREPERIODO);
    $("#txtNomPeriodoEnVentaDirecta").text(NOMBREPERIODO);
    $("#txtUnilevel").text(COMUNI);
    $("#txtAfiliacion").text(COMAFI);
    $("#txtTiburon").text(COMTIBU);
    $("#txtBronce").text(COMBRON);
    $("#txtCI").text(COMCI);
    $("#txtCon").text(COMCON);
    $("#txtEscolaridad").text(COMESCO);
    $("#txtMercadeo").text(COMMERCA);
    $("#txtMatricial").text(COMMATRI);
    $("#txtComiTotalNuevo").text(MONTOGENERAL.toFixed(2));
    $("#txtSumaTotal").text((MONTOGENERAL.toFixed(2) / 1.18).toFixed(2));
    $("#valorIGV").text((MONTOGENERAL.toFixed(2) * 0.18 / 1.18).toFixed(2));
    $("#txtUNI1").text(UNIX1);
    $("#txtUNI2").text(UNIX2);
    $("#txtUNI3").text(UNIX3);
    $("#txtUNI4").text(UNIX4);
    $("#txtUNI5").text(UNIX5);
    $("#txtUNI6").text(UNIX6);
    $("#txtUNI7").text(UNIX7);
    $("#txtUNI8").text(UNIX8);
    $("#txtUNI9").text(UNIX9);
    $("#txtUNI10").text(UNIX10);
    $("#txtUNI11").text(UNIX11);
    $("#txtUNI12").text(UNIX12);
    $("#txtUNI13").text(UNIX13);
    $("#txtUNI14").text(UNIX14);
    $("#txtUNI15").text(UNIX15);
    $("#txtSumaUnilevel").text(COMUNI);
    $("#txtNivel1").text(NIVEL1);
    $("#txtNivel2").text(NIVEL2);
    $("#txtNivel3").text(NIVEL3);
    $("#txtNivel4").text(NIVEL4);
    $("#txtNivel5").text(NIVEL5);
    $("#txtSumaAfiliacion").text(COMAFI);
    $("#txtPORUNI1").text(PORX1);
    $("#txtPORUNI2").text(PORX2);
    $("#txtPORUNI3").text(PORX3);
    $("#txtPORUNI4").text(PORX4);
    $("#txtPORUNI5").text(PORX5);
    $("#txtPORUNI6").text(PORX6);
    $("#txtPORUNI7").text(PORX7);
    $("#txtPORUNI8").text(PORX8);
    $("#txtPORUNI9").text(PORX9);
    $("#txtPORUNI10").text(PORX10);
    $("#txtPORUNI11").text(PORX11);
    $("#txtPORUNI12").text(PORX12);
    $("#txtPORUNI13").text(PORX13);
    $("#txtPORUNI14").text(PORX14);
    $("#txtPORUNI15").text(PORX15);
    $("#txtPORAFI1").text(PORAFI1);
    $("#txtPORAFI2").text(PORAFI2);
    $("#txtPORAFI3").text(PORAFI3);
    $("#txtPORAFI4").text(PORAFI4);
    $("#txtPORAFI5").text(PORAFI5);
    $("#txtGrati").text(listaComisionPeriodo[0].Bono_Rally);

    sendDataDetalleRetencion();
}

function sendDataDetalleRetencion() {
    
    

    $.ajax({
        type: "POST",
        url: "Bonificaciones.aspx/ListarCantidadDirectosGenerado",
        data: "{}",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            console.log(data.d);
            listaComisionRetencion = data.d;
            RellenarDataRetencion();
        }
    });
}

function RellenarDataRetencion() {
    $("#txtTotalSocioDirecto").text(listaComisionRetencion[0].CantSocios);
    $("#txtActivosSociosDirecto").text(listaComisionRetencion[0].CantSociosDirectos);
    $("#txtNuevosSociosDirecto").text(listaComisionRetencion[0].NuevoSocios);
    $("#txtTotalConsultorDirecto").text(listaComisionRetencion[0].CantCON);
    $("#txtActivosConsultorDirecto").text(listaComisionRetencion[0].CantCONDirectos);
    $("#txtNuevosConsultorDirecto").text(listaComisionRetencion[0].NuevoCON);
    $("#txtTotalCIDirecto").text(listaComisionRetencion[0].CantCI);
    $("#txtActivoCIDirecto").text(listaComisionRetencion[0].CantCIDirectos);
    $("#txtNuevoCIDirecto").text(listaComisionRetencion[0].NuevoCI);
    $("#txtTotalSocioRed").text(listaComisionRetencion[0].CantSociosRed);
    $("#txtActivoSocioRed").text(listaComisionRetencion[0].CantSociosRedActivos);
    $("#txtNuevoSocioRed").text(listaComisionRetencion[0].CantNuevosSociosRed);
    $("#txtTotalConsultorRed").text(listaComisionRetencion[0].CantCONRed);
    $("#txtActivoConsultorRed").text(listaComisionRetencion[0].CantCONRedActivos);
    $("#txtNuevoConsultorRed").text(listaComisionRetencion[0].CantNuevosCONRed);
    $("#txtTotalCIRed").text(listaComisionRetencion[0].CantCIRed);
    $("#txtActivoCIRed").text(listaComisionRetencion[0].CantCIRedActivos);
    $("#txtNuevoCIRed").text(listaComisionRetencion[0].CantNuevosCIRed);
}

$("#btnObtenerPeriodo").click(function (e) {

    e.preventDefault();
    var comboPeriodo = $("#ddlPeriodo option:selected").val();
    var comboPais = $("#ddlPais option:selected").val();
    $('#page_loader').show();
    if (comboPeriodo >= 116) {
        $("#bloqueBono1").hide();
        $("#bloqueNuevoBono").show();
        $("#antiguoDetalleComision").hide();
        $("#nuevoDetalleComision").show();
        sendDataAjaxNuevoPlan(comboPeriodo);
    }
    else {
        $("#bloqueBono1").show();
        $("#bloqueNuevoBono").hide();
        $("#antiguoDetalleComision").show();
        $("#nuevoDetalleComision").hide();
        sendDataAjaxPeriodo(comboPeriodo, comboPais);
    }
});

function sendDataAjaxNuevoPlan(periodo) {
    var obj = JSON.stringify({ IDP: periodo });

    $.ajax({
        type: "POST",
        url: "Bonificaciones.aspx/GetComisionNuevoPlan",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            $("#lblPeriodoNuevo").text(data.d.Periodo_comision);
            $("#lblBonoAfilia").text(data.d.BONO_AFILIA);
            $("#lblBonoLiderazgo").text(data.d.BONO_LIDERAZGO);
            $("#lblBonoGeneracional").text(data.d.BONO_GENERACIONAL);
            $("#lblBonoSuperGeneracional").text(data.d.BONO_SUPER_GENERACIONAL);
            $("#lblBonoMercadeo").text(data.d.BONO_MERCADEO);
            $("#lblBonoMatricial").text(data.d.BONO_MATRICIAL);
            $("#lblBonoPermanencia").text(data.d.BONO_PERMANENCIA);
            $("#lblBonoAguinaldo").text(data.d.BONO_AGUINALDO);
            $("#lblBonoViajeNacional").text(0);
            $("#lblBonoViajeInternacional").text(0);
            $("#lblBonoAuto").text(0);
            $("#txtComiTotalNuevo").text(data.d.TOTAL_COMISION);

            $("#lblDetalleMontoAfilia1").text(data.d.DetalleBonoAfilia.Bono_Afilia_Nv1);
            var porcentajeAfilia1 = Math.round((data.d.DetalleBonoAfilia.Bono_Afilia_Nv1 / data.d.DetalleBonoAfilia.Monto_Total_Bono_Afilia) * 100);
            $("#lblDetallePorcentajeAfilia1").text(porcentajeAfilia1);
            $("#lblDetalleMontoAfilia2").text(data.d.DetalleBonoAfilia.Bono_Afilia_Nv2);
            var porcentajeAfilia2 = Math.round((data.d.DetalleBonoAfilia.Bono_Afilia_Nv2 / data.d.DetalleBonoAfilia.Monto_Total_Bono_Afilia) * 100);
            $("#lblDetallePorcentajeAfilia2").text(porcentajeAfilia2);
            $("#lblMontoTotalDetalleAfilia").text(data.d.DetalleBonoAfilia.Monto_Total_Bono_Afilia);

            $("#lblDetalleMontoLider1").text(data.d.DetalleBonoLiderazgo.Bono_Liderazgo_Nv1);
            var porcentajeLider1 = Math.round((data.d.DetalleBonoLiderazgo.Bono_Liderazgo_Nv1 / data.d.DetalleBonoLiderazgo.Monto_Total_Bono_Liderazgo) * 100);
            $("#lblDetallePorcentajeLider1").text(porcentajeLider1);
            $("#lblDetalleMontoLider2").text(data.d.DetalleBonoLiderazgo.Bono_Liderazgo_Nv2);
            var porcentajeLider2 = Math.round((data.d.DetalleBonoLiderazgo.Bono_Liderazgo_Nv2 / data.d.DetalleBonoLiderazgo.Monto_Total_Bono_Liderazgo) * 100);
            $("#lblDetallePorcentajeLider2").text(porcentajeLider2);
            $("#lblDetalleMontoLider3").text(data.d.DetalleBonoLiderazgo.Bono_Liderazgo_Nv3);
            var porcentajeLider3 = Math.round((data.d.DetalleBonoLiderazgo.Bono_Liderazgo_Nv3 / data.d.DetalleBonoLiderazgo.Monto_Total_Bono_Liderazgo) * 100);
            $("#lblDetallePorcentajeLider3").text(porcentajeLider3);
            $("#lblDetalleMontoLider4").text(data.d.DetalleBonoLiderazgo.Bono_Liderazgo_Nv4);
            var porcentajeLider4 = Math.round((data.d.DetalleBonoLiderazgo.Bono_Liderazgo_Nv4 / data.d.DetalleBonoLiderazgo.Monto_Total_Bono_Liderazgo) * 100);
            $("#lblDetallePorcentajeLider4").text(porcentajeLider4);
            $("#lblMontoTotalDetalleLider").text(data.d.DetalleBonoLiderazgo.Monto_Total_Bono_Liderazgo);

            $("#lblDetalleMontoGene1").text(data.d.DetalleBonoGeneracion.Bono_Generacion_0);
            var porcentajeGene1 = Math.round((data.d.DetalleBonoGeneracion.Bono_Generacion_0 / data.d.DetalleBonoGeneracion.Monto_Total_Bono_Generacional) * 100);
            $("#lblDetallePorcentajeGene1").text(porcentajeGene1);
            $("#lblDetalleMontoGene2").text(data.d.DetalleBonoGeneracion.Bono_Generacion_1);
            var porcentajeGene2 = Math.round((data.d.DetalleBonoGeneracion.Bono_Generacion_1 / data.d.DetalleBonoGeneracion.Monto_Total_Bono_Generacional) * 100);
            $("#lblDetallePorcentajeGene2").text(porcentajeGene2);
            $("#lblDetalleMontoGene3").text(data.d.DetalleBonoGeneracion.Bono_Generacion_2);
            var porcentajeGene3 = Math.round((data.d.DetalleBonoGeneracion.Bono_Generacion_2 / data.d.DetalleBonoGeneracion.Monto_Total_Bono_Generacional) * 100);
            $("#lblDetallePorcentajeGene3").text(porcentajeGene3);
            $("#lblMontoTotalDetalleGene").text(data.d.DetalleBonoGeneracion.Monto_Total_Bono_Generacional);

            $("#lblDetalleMontoSuperGene1").text(data.d.DetalleBonoSuperGeneracion.Bono_Super_Generacion_0);
            var porcentajeSuperGene1 = Math.round((data.d.DetalleBonoSuperGeneracion.Bono_Super_Generacion_0 / data.d.DetalleBonoSuperGeneracion.Monto_Total_Bono_Super_Generacional) * 100);
            $("#lblDetallePorcentajeSuperGene1").text(porcentajeSuperGene1);
            $("#lblDetalleMontoSuperGene2").text(data.d.DetalleBonoSuperGeneracion.Bono_Super_Generacion_1);
            var porcentajeSuperGene2 = Math.round((data.d.DetalleBonoSuperGeneracion.Bono_Super_Generacion_1 / data.d.DetalleBonoSuperGeneracion.Monto_Total_Bono_Super_Generacional) * 100);
            $("#lblDetallePorcentajeSuperGene2").text(porcentajeSuperGene2);
            $("#lblMontoTotalDetalleSuperGene").text(data.d.DetalleBonoSuperGeneracion.Monto_Total_Bono_Super_Generacional);

            $("#txtSumaTotal").text((data.d.TOTAL_COMISION.toFixed(2) / 1.18).toFixed(2));
            $("#valorIGV").text((data.d.TOTAL_COMISION.toFixed(2) * 0.18 / 1.18).toFixed(2));
        }
    });
}

function sendDataAjaxPeriodo(periodo2, pais) {

    var obj = JSON.stringify({ IDP: periodo2, Pais: pais });

    $.ajax({
        type: "POST",
        url: "Bonificaciones.aspx/ListaComisionesXPeriodo",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            console.log(data.d);
            listaComisionPeriodo = data.d;
            if (periodo2 == "20") { sendDataAjaxBonoExtra(); }
            else {
                $("#txtGrati").text("0");
                //$("#txtFamiliar").text("0");
                RellenarDataPeriodo();
            }
        }
    });
}

function sendDataAjaxBonoExtra() {

    $.ajax({
        type: "POST",
        url: "Bonificaciones.aspx/ListaComisionesExtra",
        data: "{}",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (yyy) {
            $("#txtGrati").text(yyy.d.afiliacion);
            //$("#txtFamiliar").text(yyy.d.unilevel);
            RellenarDataPeriodo();
        }
    });
}

function RellenarDataPeriodo() {

    COMAUTO = listaComisionPeriodo[0].COMAUTO;
    COMFAMILIAR = listaComisionPeriodo[0].COMFAMILIAR;
    COMAFI = listaComisionPeriodo[0].COMAFI;
    COMUNI = listaComisionPeriodo[0].COMUNI;
    COMTIBU = listaComisionPeriodo[0].COMTIBU;
    COMBRON = listaComisionPeriodo[0].COMBRON;
    COMCI = listaComisionPeriodo[0].COMCI;
    COMCON = listaComisionPeriodo[0].COMCON;
    COMESCO = listaComisionPeriodo[0].COMESCO;
    COMMERCA = listaComisionPeriodo[0].COMMERCA;
    COMMATRI = listaComisionPeriodo[0].COMMATRI;
    NIVEL1 = listaComisionPeriodo[0].NIVEL1;
    NIVEL2 = listaComisionPeriodo[0].NIVEL2;
    NIVEL3 = listaComisionPeriodo[0].NIVEL3;
    NIVEL4 = listaComisionPeriodo[0].NIVEL4;
    NIVEL5 = listaComisionPeriodo[0].NIVEL5;
    UNIX1 = listaComisionPeriodo[0].UNIX1;
    UNIX2 = listaComisionPeriodo[0].UNIX2;
    UNIX3 = listaComisionPeriodo[0].UNIX3;
    UNIX4 = listaComisionPeriodo[0].UNIX4;
    UNIX5 = listaComisionPeriodo[0].UNIX5;
    UNIX6 = listaComisionPeriodo[0].UNIX6;
    UNIX7 = listaComisionPeriodo[0].UNIX7;
    UNIX8 = listaComisionPeriodo[0].UNIX8;
    UNIX9 = listaComisionPeriodo[0].UNIX9;
    UNIX10 = listaComisionPeriodo[0].UNIX10;
    UNIX11 = listaComisionPeriodo[0].UNIX11;
    UNIX12 = listaComisionPeriodo[0].UNIX12;
    UNIX13 = listaComisionPeriodo[0].UNIX13;
    UNIX14 = listaComisionPeriodo[0].UNIX14;
    UNIX15 = listaComisionPeriodo[0].UNIX15;
    MONTOGENERAL = listaComisionPeriodo[0].ComisionLinea;
    NOMBREPERIODO = listaComisionPeriodo[0].nombrePeriodo;
    var idPeriodoComi = $("#ddlPeriodo option:selected").val();
    if ($.inArray(idPeriodoComi, ['23', '24', '25', '26', '27', '28', '29']) >= 0) {
        MONTOGENERAL = MONTOGENERAL * 0.95;
    }

    /*RELLENAR DATOS INDIVIDUALES DE LOS BONOS*/
    var PORX1 = 0, PORX2 = 0, PORX3 = 0, PORX4 = 0, PORX5 = 0, PORX6 = 0, PORX7 = 0,
        PORX8 = 0, PORX9 = 0, PORX10 = 0, PORX11 = 0, PORX12 = 0, PORX13 = 0, PORX14 = 0,
        PORX15 = 0, PORAFI1 = 0, PORAFI2 = 0, PORAFI3 = 0, PORAFI4 = 0, PORAFI5 = 0;
    PORX1 = Math.round((UNIX1 / COMUNI) * 100);
    PORX2 = Math.round((UNIX2 / COMUNI) * 100);
    PORX3 = Math.round((UNIX3 / COMUNI) * 100);
    PORX4 = Math.round((UNIX4 / COMUNI) * 100);
    PORX5 = Math.round((UNIX5 / COMUNI) * 100);
    PORX6 = Math.round((UNIX6 / COMUNI) * 100);
    PORX7 = Math.round((UNIX7 / COMUNI) * 100);
    PORX8 = Math.round((UNIX8 / COMUNI) * 100);
    PORX9 = Math.round((UNIX9 / COMUNI) * 100);
    PORX10 = Math.round((UNIX10 / COMUNI) * 100);
    PORX11 = Math.round((UNIX11 / COMUNI) * 100);
    PORX12 = Math.round((UNIX12 / COMUNI) * 100);
    PORX13 = Math.round((UNIX13 / COMUNI) * 100);
    PORX14 = Math.round((UNIX14 / COMUNI) * 100);
    PORX15 = Math.round((UNIX15 / COMUNI) * 100);
    PORAFI1 = Math.round((NIVEL1 / COMAFI) * 100);
    PORAFI2 = Math.round((NIVEL2 / COMAFI) * 100);
    PORAFI3 = Math.round((NIVEL3 / COMAFI) * 100);
    PORAFI4 = Math.round((NIVEL4 / COMAFI) * 100);
    PORAFI5 = Math.round((NIVEL5 / COMAFI) * 100);

    $("#txtNomPeriodo").text(NOMBREPERIODO);
    $("#txtNomPeriodoEnVentaDirecta").text(NOMBREPERIODO);
    $("#txtUnilevel").text(COMUNI);
    $("#txtAuto").text(COMAUTO);
    $("#txtFamiliar").text(COMFAMILIAR);
    $("#txtAfiliacion").text(COMAFI);
    $("#txtTiburon").text(COMTIBU);
    $("#txtBronce").text(COMBRON);
    $("#txtCI").text(COMCI);
    $("#txtCon").text(COMCON);
    $("#txtEscolaridad").text(COMESCO);
    $("#txtMercadeo").text(COMMERCA);
    $("#txtMatricial").text(COMMATRI);
    $("#txtComiTotalNuevo").text(MONTOGENERAL.toFixed(2));
    $("#txtSumaTotal").text((MONTOGENERAL.toFixed(2) / 1.18).toFixed(2));
    $("#valorIGV").text((MONTOGENERAL.toFixed(2) * 0.18 / 1.18).toFixed(2));
    $("#txtUNI1").text(UNIX1);
    $("#txtUNI2").text(UNIX2);
    $("#txtUNI3").text(UNIX3);
    $("#txtUNI4").text(UNIX4);
    $("#txtUNI5").text(UNIX5);
    $("#txtUNI6").text(UNIX6);
    $("#txtUNI7").text(UNIX7);
    $("#txtUNI8").text(UNIX8);
    $("#txtUNI9").text(UNIX9);
    $("#txtUNI10").text(UNIX10);
    $("#txtUNI11").text(UNIX11);
    $("#txtUNI12").text(UNIX12);
    $("#txtUNI13").text(UNIX13);
    $("#txtUNI14").text(UNIX14);
    $("#txtUNI15").text(UNIX15);
    $("#txtSumaUnilevel").text(COMUNI);
    $("#txtNivel1").text(NIVEL1);
    $("#txtNivel2").text(NIVEL2);
    $("#txtNivel3").text(NIVEL3);
    $("#txtNivel4").text(NIVEL4);
    $("#txtNivel5").text(NIVEL5);
    $("#txtSumaAfiliacion").text(COMAFI);
    $("#txtPORUNI1").text(PORX1);
    $("#txtPORUNI2").text(PORX2);
    $("#txtPORUNI3").text(PORX3);
    $("#txtPORUNI4").text(PORX4);
    $("#txtPORUNI5").text(PORX5);
    $("#txtPORUNI6").text(PORX6);
    $("#txtPORUNI7").text(PORX7);
    $("#txtPORUNI8").text(PORX8);
    $("#txtPORUNI9").text(PORX9);
    $("#txtPORUNI10").text(PORX10);
    $("#txtPORUNI11").text(PORX11);
    $("#txtPORUNI12").text(PORX12);
    $("#txtPORUNI13").text(PORX13);
    $("#txtPORUNI14").text(PORX14);
    $("#txtPORUNI15").text(PORX15);
    $("#txtPORAFI1").text(PORAFI1);
    $("#txtPORAFI2").text(PORAFI2);
    $("#txtPORAFI3").text(PORAFI3);
    $("#txtPORAFI4").text(PORAFI4);
    $("#txtPORAFI5").text(PORAFI5);
    $("#txtGrati").text(listaComisionPeriodo[0].Bono_Rally);

    sendDataDetalleRetencionPeriodo();
}

function sendDataDetalleRetencionPeriodo() {
    var periodo2 = $("#ddlPeriodo option:selected").val();

    var obj = JSON.stringify({ IDP: periodo2 });

    $.ajax({
        type: "POST",
        url: "Bonificaciones.aspx/ListarCantidadDirectosXPeriodo",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            console.log(data.d);
            listaComisionRetencionPeriodo = data.d;
            RellenarDataRetencionPeriodo();
        }
    });
}

function RellenarDataRetencionPeriodo() {

    $("#txtTotalSocioDirecto").text(listaComisionRetencionPeriodo[0].CantSocios);
    $("#txtActivosSociosDirecto").text(listaComisionRetencionPeriodo[0].CantSociosDirectos);
    $("#txtNuevosSociosDirecto").text(listaComisionRetencionPeriodo[0].NuevoSocios);
    $("#txtTotalConsultorDirecto").text(listaComisionRetencionPeriodo[0].CantCON);
    $("#txtActivosConsultorDirecto").text(listaComisionRetencionPeriodo[0].CantCONDirectos);
    $("#txtNuevosConsultorDirecto").text(listaComisionRetencionPeriodo[0].NuevoCON);
    $("#txtTotalCIDirecto").text(listaComisionRetencionPeriodo[0].CantCI);
    $("#txtActivoCIDirecto").text(listaComisionRetencionPeriodo[0].CantCIDirectos);
    $("#txtNuevoCIDirecto").text(listaComisionRetencionPeriodo[0].NuevoCI);
    $("#txtTotalSocioRed").text(listaComisionRetencionPeriodo[0].CantSociosRed);
    $("#txtActivoSocioRed").text(listaComisionRetencionPeriodo[0].CantSociosRedActivos);
    $("#txtNuevoSocioRed").text(listaComisionRetencionPeriodo[0].CantNuevosSociosRed);
    $("#txtTotalConsultorRed").text(listaComisionRetencionPeriodo[0].CantCONRed);
    $("#txtActivoConsultorRed").text(listaComisionRetencionPeriodo[0].CantCONRedActivos);
    $("#txtNuevoConsultorRed").text(listaComisionRetencionPeriodo[0].CantNuevosCONRed);
    $("#txtTotalCIRed").text(listaComisionRetencionPeriodo[0].CantCIRed);
    $("#txtActivoCIRed").text(listaComisionRetencionPeriodo[0].CantCIRedActivos);
    $("#txtNuevoCIRed").text(listaComisionRetencionPeriodo[0].CantNuevosCIRed);
    $('#page_loader').hide();
}