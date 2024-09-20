<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="Index.aspx.cs" Inherits="SantaNaturaNetwork.Index" ClientIDMode="Static" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

    <!-- Icon css link -->
    <%--<link href="css/proyecto2/font-awesome.min.css" rel="stylesheet" />--%>
    <link href="css/proyecto2/vendors/line-icon/css/simple-line-icons.css" rel="stylesheet" />
    <%--<link href="css/proyecto2/vendors/elegant-icon/style.css" rel="stylesheet" />--%>

    <!-- Extra plugin css -->
    <%--<link href="css/proyecto2/vendors/owl-carousel/owl.carousel.min.css" rel="stylesheet" />--%>
    <link href="css/proyecto2/vendors/bootstrap-selector/css/bootstrap-select.min.css" rel="stylesheet" />


    <%--desde aqui--%>
<%--    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://unpkg.com/gijgo@1.9.13/js/gijgo.min.js" type="text/javascript"></script>
    <script src="js/sweetAlert.js" type="text/javascript"> </script>
    
    <script src="js/bootstrap4.min.js"></script>
     <!---->
    <link rel="stylesheet" href="assets/Estilos/alertify.core.css" />
    <link rel="stylesheet" href="assets/Estilos/alertify.default.css" id="toggleCSS" />
    <script src="assets/Estilos/alertify.min.js" type="text/javascript"></script>--%>

    <%--hasta aqui--%>

    <!--******************************BEGIN CIRCLE SLIDER *******************************-->
    <%--<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" />--%>
    <!--******************************END CIRCLE SLIDER *******************************-->

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

    <!--BEGIN:Para los videos de los socios-->
    <%--<link href="//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">--%><!--11/11/19-->
    <!--END:Para los videos de los socios-->

    <!--Socios Destacados-->
    <link href="css/proyecto2/estilos-sociosDestacados.css" rel="stylesheet" />


    <link href="css/estilosVideosSocios.css" rel="stylesheet" />

    <link href="css/proyecto2/fondoCuerpoLogin.css" rel="stylesheet" />

    
    <!--PARA EL SLIDER DE LAS IMAGENES DE CONECTATE CON NOSOTROS-->
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />



    <link href="css/proyecto2/owl.carousel.min.css?Fv38" rel="stylesheet" />
    <link href="css/proyecto2/owl.theme.default.css" rel="stylesheet" />

    <style>
        :root {
            --Dark-primary: #1B2C5E;
            --Medium-primary: #2D4A9D;
        }

        .parallax1 {
            /* The image used */
            background: url("img/Login/fondoGrisSNN.jpg");
            /* Set a specific height */
            /* Create the parallax scrolling effect */
            background-attachment: fixed;
            background-position: top;
            background-repeat: no-repeat;
            position: relative;
            overflow: hidden;
            z-index: 2;
            background-size: 100vw 100vh;
            /*margin-top:-20px*/
        }

            .parallax1::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-image: url(img/Login/logoFinalSNN.png);
                background-size: 100%;
                width: 321px;
                height: 125px;
            }

        .parallax2 {
            /* The image used */
            background: url("https://tienda.mundosantanatura.com/img/768 x 1024.png");
            /* Set a specific height */
            /* Create the parallax scrolling effect */
            background-attachment: fixed;
            background-position: top;
            background-repeat: no-repeat;
            position: relative;
            z-index: 2;
            background-size: 100vw 100vh;
            /*margin-top:-20px*/
        }

        .parallax3 {
            /* The image used */
            background: url("https://tienda.mundosantanatura.com/img/imagen10.jpg");
            /* Set a specific height */
            /* Create the parallax scrolling effect */
            background-attachment: fixed;
            background-position: bottom;
            background-repeat: no-repeat;
            background-size: cover;
        }

        .round {
            width: 200px
        }

        @media (max-width: 1280px) and (min-height: 900px){
            .parallax1 {
                background: url("img/Login/fondoGrisSNN-1279x1366.jpg");
                background-size: cover;
                background-position: bottom;
            }
        }
        
        @media (max-width: 768px){
            .parallax1 {
                background: url("img/Login/fondoGrisSNN-768x1366.jpg");
                background-size: cover;
                background-position: bottom;
            }
        }






        .carousel-control {
            padding-top: 7%;
            /*width: 5%;*/
        }

        .cuerpo {
            height: 185px;
        }



        .l_product_slider .l_product_slider .owl-prev, .l_product_slider .l_product_slider .owl-next, .l_product_slider .home_l_product_slider .owl-prev, .l_product_slider .home_l_product_slider .owl-next, .home_l_product_slider .l_product_slider .owl-prev, .home_l_product_slider .l_product_slider .owl-next, .home_l_product_slider .home_l_product_slider .owl-prev, .home_l_product_slider .home_l_product_slider .owl-next {
            height: 35px;
            width: 35px;
            margin-bottom: -100px;
            text-align: center;
            font-size: 23px;
            color: #000;
            border: 1px solid #cccccc;
            line-height: 36px;
            display: inline-block;
            -webkit-transition: all 400ms linear 0s;
            -o-transition: all 400ms linear 0s;
            transition: all 400ms linear 0s;
            cursor: pointer;
        }

            .l_product_slider .l_product_slider .owl-prev:hover, .l_product_slider .l_product_slider .owl-next:hover, .l_product_slider .home_l_product_slider .owl-prev:hover, .l_product_slider .home_l_product_slider .owl-next:hover, .home_l_product_slider .l_product_slider .owl-prev:hover, .home_l_product_slider .l_product_slider .owl-next:hover, .home_l_product_slider .home_l_product_slider .owl-prev:hover, .home_l_product_slider .home_l_product_slider .owl-next:hover {
                background: #000;
                color: #fff;
                border-color: #000;
            }


        .displayBlock {
            display: block
        }

        .displayTable {
            display: table
        }



        .claseFuente1 {
            font-family: 'Conv_angelina',Sans-Serif;
        }

        .claseFuente2 {
            font-family: 'HurmeGeometricSans1 LightOblique' !important;
            letter-spacing: 0.25em;
            color: #141438 !important;
        }

        .claseFuente3 {
            font-family: 'HurmeGeometricSans1';
            color: #141438;
            font-size: 20px;
            text-align: initial;
        }

        .claseFuente4 {
            font-family: 'HurmeGeometricSans1 BlackOblique';
            color: #141438;
            font-size: 20px;
            text-align: initial;
        }

        .claseFuente5 {
            font-family: 'MASQUE__';
            color: #262660;
            font-size: 20px;
            text-align: initial;
        }

        .claseFuente6 {
            font-family: 'HurmeGeometricSans1 Oblique';
            color: #262660;
            font-size: 20px;
            text-align: initial;
        }

        .bloqueDatos {
            display: flex;
            justify-content: space-between;
            height: 98px;
            align-items: center;
            padding: 0 18px;
            border-radius: 5px;
            background-image: url('img/cuadro-index.png');
            background-size: 100% 100%;
            /*background: #262660;*/
            position: relative;
            /*box-shadow: inset -10px 0px 20px 0px rgb(255 255 255 / 15%);*/
            filter: drop-shadow(7px 7px 6px rgba(0, 0, 0, 0.55));
        }

        .textPeriodo {
            line-height: 2;
        }

        /*.bloqueDatos::before {
            height: 3px;
            width: 100%;
            bottom: 0;
            background: linear-gradient(90deg,transparent 20%, white 50%, transparent 80%);
            display: block;
            position: absolute;
            left: 0;
            content: "";
        }

        .bloqueDatos::after {
            height: 100%;
            width: 6px;
            top: 0;
            background: radial-gradient(white, transparent 50%);
            display: block;
            position: absolute;
            right: 0;
            content: "";
        }*/

        .bloqueIzquierda {
            font-size: 25px;
            font-weight: 100;
            text-align: center;
            color: white;
            width: 30px;
            line-height: 1.29;
            margin: 0;
        }

        .bloqueDerecha {
            font-size: 25px;
            font-weight: 100;
            text-align: center;
            color: white;
            width: 30px;
            line-height: 1.29;
            margin: 0;
        }

        .resultadoPeriodo {
            width: 100px;
            text-align: end;
            font-weight: 700;
            margin: 0;
        }

        .siguienteRango {
            font-family: var(--Font-type);
            font-weight: 400;
            font-size: 25px;
            text-align: start;
            color: #000;
            line-height: 1;
            margin-bottom: 5px;
        }

        .radial-progress {
            border-radius: 50%;
            /*box-shadow: -9px 8px 10px rgba(0, 0, 0, .35);*/
        }

        .rangoProximo {
            font-size: 30px;
            font-family: var(--Font-type);
            font-weight: 500;
            color: var(--Medium-primary);
            text-align: start;
            line-height: 1;
            margin: 0;
        }

        .siguienteConquista {
            font-family: var(--Font-type);
            font-style: normal;
            font-weight: 500;
            font-size: 25px;
            /*width: 335px;*/
            text-align: center;
            color: #000;
            line-height: 1;
            margin-bottom: 7px;
        }




        /*PARA EL BLOQUE DEL CAROUSEL INFERIOR*/
        .owl-item .item {
            width: 100%;
            transform: translate3d(0,0,0);
            transition: all 0.25s ease-in-out;
            margin: 50px 0;
        }

        .slider_div .owl-item .item img {
            width: 730px;
            height: 348px;
            box-shadow: 0 5px 10px 0 rgba(0,0,0,0.1);
            transition: .3s;
            transform: scale(.8);
        }

        .slider_div .owl-item.center .item img {
            transform: scale(1);
            /*object-fit: cover;*/
            filter: drop-shadow(3px 7px 4px rgba(0, 0, 0, 0.25))
        }

        .slider_div .owl-item.active {
            margin-left: -170px;
            filter: blur(4px);
            left: -210px;
            margin-right: 835px !important;
        }

        .slider_div .owl-item.cloned.active {
            filter: blur(4px);
        }

        .slider_div .owl-item.active.center {
            z-index: 99;
            filter: blur(0px);
            margin-right: 700px;
        }

        .slider_div .owl-nav {
            text-align: center;
            /*display: none*/
        }

            .slider_div .owl-nav button {
                font-size: 24px !important;
                margin: 10px;
            }

        .prevv {
            position: absolute !important;
            top: 42.5% !important;
            left: 20.5% !important;
            transition: .3s color;
        }

        .glyphicon-circle-arrow-up:hover:before {
            color: var(--Medium-primary) !important;
        }

        .glyphicon-circle-arrow-up:active:before {
            color: var(--Light-primary) !important;
        }

        .nextt {
            position: absolute !important;
            top: 42.5% !important;
            right: 20% ;
            transition: .3s color;
        }

        .glyphicon-circle-arrow-down:hover:before {
            color: var(--Medium-primary) !important;
        }

        .glyphicon-circle-arrow-down:active:before {
            color: var(--Light-primary) !important;
        }

        .owl-stage-outer {
            cursor: grab;
        }

            .owl-stage-outer:active {
                cursor: grabbing;
            }

        /**----------------------------------------------------------------------*/
        :root {
            --primary-light: #39ddfa;
            --primary: #00abdf;
            --primary-dark: #008ada;
            --white: #ffffff;
            --greyLight-1: #ebf5fc;
            --greyLight-2: #d5e0f3;
            --greyLight-3: #c1d9f0;
            --greyDark: #646b8c;
        }    

        .card__percent {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .card__number {
            position: absolute;
            color: #fff;
            font-size: 5rem;
            font-family: "DM Sans", sans-serif;
            top: 85px;
            z-index: 999999;
        }


        .circleProgressBarNew {
            position: relative;
            width: 28rem;
            height: 28rem;
            z-index: 1000;
            transform: rotate(-90deg);
        }

            .circleProgressBarNew circle {
                width: 100%;
                height: 100%;
                fill: none;
                transform: translate(5rem, 5rem);
                /*stroke-dasharray: 365.49;
                stroke-dashoffset: 282.75;*/
                /*stroke-dasharray: 560.49;*/
                stroke-dasharray: 565.49;
                stroke-dashoffset: 560.75;
                transition: all 3s ease;
                stroke-width: 70;
            }

        .circle {
            position: absolute;
            width: 24.5rem;
            height: 24.5rem;
            border-radius: 50%;
            box-shadow: none;
            background: var(--Light-orange);
        }

        .circle__medium {
            width: 24.5rem;
            height: 24.5rem;
            box-shadow: inset 0px 0px 0px 8px #fff;
        }

        .circle__semimedium {
            width: 23rem;
            height: 23rem;
            box-shadow: inset 90px 90px 170px var(--Light-orange), inset -14px -14px 8px var(--Light-orange);
            z-index: 9999;
        }

        .circle__small {
            width: 17.5rem;
            height: 17.5rem;
            box-shadow: none;
            z-index: 999999;
            background: var(--Primary-orange);
        }


        .sectionRangoActual {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            grid-gap: 10px;
        }

        .sectionSiguienteRango {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            grid-gap: 10px;
        }

    </style>

    
    <link href="css/proyecto2/index-sectionDatosNetwork.css?Fv72" rel="stylesheet"/>
    
    

    <%--<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css2">--%><!--11/11/19-->
    <%--<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>--%>
    <%--<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>--%>


    <!-- Efectos de opacity por bloque-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="js/proyecto2/eskju.jquery.scrollflow.min.js"></script>
    <!--Para los progress bars-->
    <%--<script src="js/proyecto2/opacidadYEfectoProgressBar.js"></script>--%>

    <!-- Start WOWSlider.com HEAD section -->
    <link rel="stylesheet" type="text/css" href="engine1/style.css" />
    <script type="text/javascript" src="engine1/jqueryv2.js"></script>
    <!-- End WOWSlider.com HEAD section -->



    <link rel="stylesheet" type="text/css" href="css/proyecto2/plugin.css">


    <link href="css/proyecto2/circleProgressBar.css?Fv35" rel="stylesheet" />

    <link href="css/proyecto2/loaderRipple.css" rel="stylesheet" />
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">


<%--<div runat="server" class="popup" id="modal" style="display: none">
        <div style="display: flex; justify-content: center; align-items: center; height: 100vh">
            <div class="modal-dialog modal-xl" style="width: 100%">
                <div class="modal-content">
                    <a style="position: absolute; top: 100px" href="javascript:;" onclick="toggleVideo('hide');">
                        <input type="checkbox" id="cerrar" />
                        <label for="cerrar" id="btn-cerrar">X</label>
                    </a>
                    <div id="popupVid" class="contenido embed-responsive embed-responsive-4by3">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/dLdpUTS2scw?enablejsapi=1" id="iframeVideo" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>--%>

    <div runat="server" id="modal" style="display: none">
        <input type="checkbox" id="cerrar" />
        <label for="cerrar" id="btn-cerrar">X</label>
        <div id="popup" class="popup">

            <div id="contenido" class="contenido">
                <section class='sectionLoader'>
                    <div class="lds-ripple">
                        <div></div>
                        <div></div>
                    </div>
                </section>
                <img src="" id="imgPopup" />
            </div>
        </div>
    </div>


    <div id="bloqueNoLogueado" class="main_slider_area parallax1" style="height: 100vh; display: block" runat="server">
    </div>


    <!--================Our Latest Product Area =================-->
    <div id="fondoIndexBody" style="z-index: 1;">

        <section id="bloqueLogueado" style="display: none" runat="server">
            <div id="wowslider-container1" style="margin-top: 70px">
                <div class="ws_images">
                    <ul>
                        <% foreach (var banners in ListaBanners)
                            {%>
                        <li>
                            <img src="https://tienda.mundosantanatura.com/banners/<%=banners.Archivo%>" alt="<%=banners.Nombre%>" title="" id="<%=banners.ID_DATOS%>" /></li>
                        <% } %>
                    </ul>
                </div>
                <%--<div class="ws_bullets">
                    <div>
                        <a href="#" title="colageno"><span>
                            <img src="imagenes/tooltips/1920x400premiomarzo2.png" alt="colageno" />1</span></a>
                        <a href="#" title="colageno"><span>
                            <img src="imagenes/tooltips/1920x400premiomarzo2.png" alt="colageno" />2</span></a>
                    </div>
                </div>--%>

            </div>

            <section class="feature_product_area" style="margin-top: 60px; padding-bottom: 0px !important; display: none">
                <%--<div class="container" id="bloquePeriodo" style="background: radial-gradient(circle, white 40%, green, transparent); display: flex">--%>
                <div class="container" id="bloquePeriodo" style="display: flex; justify-content: center; max-width: 75%; padding-bottom: 43px;">
                    <div id="bloqueIzquierda" class="col-xs-3" style="background-color: white">

                        <div class="bloqueDatos columnaIzquierda" style="margin-top: 10px">
                            <h4 id="txtPP" class="textPeriodo bloqueIzquierda">PP</h4>
                            <%=""%>
                            <h4 id="txtValorPP" class="textPeriodo resultadoPeriodo bloqueIzquierda"><%=PP %></h4>
                        </div>
                        <div class="saltoLinea"></div>
                        <div class="bloqueDatos columnaIzquierda">
                            <h4 id="txtVP" class="textPeriodo bloqueIzquierda">VP</h4>

                            <h4 id="txtValorVP" class="textPeriodo resultadoPeriodo bloqueIzquierda"><%=VP %></h4>
                        </div>
                        <div class="saltoLinea"></div>
                        <div class="bloqueDatos columnaIzquierda">
                            <h4 id="txtVG" class="textPeriodo bloqueIzquierda">VG</h4>

                            <h4 id="txtValorVG" class="textPeriodo resultadoPeriodo bloqueIzquierda"><%=VG %></h4>
                        </div>
                        <div class="saltoLinea"></div>
                        <div class="bloqueDatos columnaIzquierda">
                            <h4 id="txtVQ" class="textPeriodo bloqueIzquierda">VQ</h4>

                            <h4 id="txtValorVQ" class="textPeriodo resultadoPeriodo bloqueIzquierda"><%=VQ %></h4>
                        </div>

                    </div>

                    <div id="bloqueDelMedio" style="height: auto; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 40%; margin-top: 20px;">
                        <div>
                            <p class="siguienteRango">PROGRESO DE MI RANGO</p>
                        </div>
<%--                        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                                <svg id="valuePercentage" class="radial-progress" viewBox="0 0 80 80">
                                    <circle class="incomplete" cx="40" cy="40" r="35"></circle>
                                    <circle class="complete" cx="40" cy="40" r="35" style="stroke-dashoffset: 50;"></circle>
                                    <text class="percentage" x="50%" y="58%" transform="matrix(0, 1, -1, 0, 80, 0)" style="font-size: 20px;"><%=PORCENTAJE %>%</text>
                                </svg>
                                <p class="rangoProximo"><%=RANGOPROXIMO %></p>                                                                
                        </div>--%>
                        <div>
                            <p class="siguienteConquista">¡Vamos por tu siguiente conquista!</p>
                        </div>
                        <%--<div id="bloqueImagenVamosPorMas" class="col-xs-12" style="height: auto">
                            <h1 class="claseFuente5" style="text-align: center; margin-left: auto; margin-right: auto; font-weight: bold; font-size: calc(1rem + 2.2vw);">¡Vamos por tu<br />
                                siguiente<br />
                                conquista!
                            </h1>
                        </div>--%>
                    </div>
                    <div id="bloqueDerecha" class="col-xs-3 " style="background-color: white">
                        <!-- box-shadow: goldenrod 0px 0px 20px; -->
                        <%--<div class="bloqueDatos columnaDerecha" style="margin-top: 10px">
                            <h4 id="txtRANGO" class="textPeriodo bloqueDerecha">Rango</h4>

                            <h4 id="txtValorRANGO" class="textPeriodo resultadoPeriodo bloqueDerecha" style="width: min-content;"><%=RANGO %></h4>
                        </div>--%>
                        <div class="saltoLinea"></div>
                        <div class="bloqueDatos columnaDerecha">
                            <h4 id="txtCOMISION" class="textPeriodo bloqueDerecha" style="font-size: 22px;">Comisión</h4>

                            <h4 id="txtValorCOMISION" class="textPeriodo resultadoPeriodo bloqueDerecha"><%=COMISION %></h4>
                        </div>
                        <div class="saltoLinea"></div>
                        <div class="bloqueDatos columnaDerecha">
                            <h4 id="txtVIP" class="textPeriodo bloqueDerecha">VIP</h4>

                            <h4 id="txtValorVIP" class="textPeriodo resultadoPeriodo bloqueDerecha"><%=VIP %></h4>
                        </div>
                        <div class="saltoLinea"></div>
                        <div class="bloqueDatos columnaDerecha">
                            <h4 id="txtNUEVOSDIRECTOS" class="textPeriodo bloqueDerecha" >Nuevos Directos</h4>

                            <h4 id="txtValorNUEVOSDIRECTOS" class="textPeriodo resultadoPeriodo nuevosDirectos" style="color: white; font-size: 1.6vw; margin-top: auto; margin-bottom: auto;"><%=DIRECTOS %></h4>
                        </div>
                    </div>
                </div>
                <hr style="width: 272px; border: 1px solid #141438; margin: auto;" />
            </section>
            <section style="background-color: #E9E9E9;">
                <section class="sectionDatosNetwork" style="width: 100%; margin: auto;">
                    <article class="sectionDatosNetwork__porcentaje">
                        <div class="sectionMiProgreso bloqueSectionMiProgreso">
                            <div class="sectionMiProgreso__Rangos">
                                <div class="sectionRangoActual">
                                    <p id="txtValorRANGO" class="valorRango"><%=RANGO %></p>
                                    <p id="txtRANGO" class="descRango">Rango actual</p>
                                </div>
                                <div class="sectionMiProgreso__porcentaje circleProgressBarPequeño mostrarCircleParaGalaxyFold" style="display: none">
                                    <svg id="valuePercentage2" data-percentage="10" class="radial-progress" viewBox="0 0 80 80">
                                        <circle class="incomplete" cx="40" cy="40" r="35"></circle>
                                        <circle class="complete" cx="40" cy="40" r="35" ></circle>
                                        <text class="percentage" x="50%" y="44%" transform="matrix(0, 1, -1, 0, 80, 0)" style="font-size: 14px;"><%=PORCENTAJE %>%</text>                                                                        
                                    </svg>
                                    <p class="textoProgresoPorcentajeGalaxyFold" >
                                        Progreso de Rango Actual
                                    </p>
                                </div>
                                <div class="sectionSiguienteRango">
                                    <p class="valorRango"><%=RANGOPROXIMO %></p>
                                    <p class="descRango">Siguiente rango</p>
                                </div>
                            </div>
                            <div class="sectionMiProgreso__porcentaje circleProgressBarPequeño ocultarCircleParaGalaxyFold">
                                <svg id="valuePercentage" data-percentage="25" class="radial-progress" viewBox="0 0 80 80">
                                    <circle class="incomplete" cx="40" cy="40" r="35"></circle>
                                    <circle class="complete" cx="40" cy="40" r="35" style="stroke-dashoffset: 50;"></circle>
                                    <text class="percentage" x="50%" y="47%" transform="matrix(0, 1, -1, 0, 80, 0)" style="font-size: 14px;"><%=PORCENTAJE %>%</text>                                                                        
                                </svg>
                                <p class="textoProgresoPorcentaje" >
                                    Progreso de Rango Actual
                                </p>
                            </div>
                            <div class="sectionMiProgreso__porcentaje circleProgressBarGrande">
                                <div class="card__percent">
                                    <svg class="circleProgressBarNew">
                                        <defs>
                                            <radialGradient id="gradient" cx="50%" cy="50%" r="60%" fx="50%" fy="50%">
                                                <stop offset="30%" stop-color="var(--Primary-orange)" />
                                                <stop offset="100%" stop-color="var(--Light-orange)" />
                                            </radialGradient>
                                        </defs>
                                        <circle cx="90" cy="90" r="90" stroke="url(#gradient)" id="circle"></circle>
                                    </svg>
                                    <div class="circle"></div>
                                    <div class="circle circle__medium"></div>
                                    <div class="circle circle__semimedium"></div>
                                    <div class="circle circle__small"></div>
                                    <div class="card__number">50%</div>
                                </div>
                                <p class="textoProgresoPorcentaje">
                                    Progreso de Rango Actual
                                </p>
                            </div>
                        </div>
                         <%--<svg class="svg">
                                    <path id="ring" fill="#00c790" />
                                    <circle cx="100" cy="100" r="82" fill="#0e2a36" />
                                    <circle cx="100" cy="100" r="73" fill="none" stroke="#00c790" stroke-width="7" opacity=".5" />
                                    <text x="100" y="100" text-anchor="middle" dominant-baseline="central" fill="#00c790" font-size="60" font-weight="bold">64</text>
                                </svg>
                                <label for="range">Move me!</label>
                                <input type="range" name="range" value="64" id="range" />--%>
                        <%--<div class="sectionTotComisiones bloqueSectionMiProgreso ">
                            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; grid-gap: 5px;">
                                <p class="siguienteConquista">¡Vamos por tu siguiente conquista!</p>
                                <p class="valorComiTotal"><span class="moneda">S/</span> <%=COMISION %></p>
                                <p class="totComisiones">Comisión Actual</p>
                                <a href="ComisionesMLM2.aspx" class="botonComisiones">Ir a comisiones</a>
                            </div>
                        </div>--%>
                        <div class="sectionTotComisiones bloqueSectionMiProgreso ">
                            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; grid-gap: 5px;">
                                <p class="totComisiones">Comisión Total</p>
                                <p class="valorComiTotal" id="valorComisionTotal"></p>
                                <p class="totComisiones">Puntos Viajes Adicionales</p>
                                <p class="valorComiTotal" id="puntosViajes"></p>
                            </div>
                        </div>
                        <div class="sectionTotComisiones bloqueSectionMiProgreso ">
                            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; grid-gap: 5px;">
                                <p class="totComisiones">Faltan:</p>
                                <p class="valorComiTotal" id="h1CountDownIndex"></p>
                                <p class="totComisiones" id="namePeriodoActual"></p>
                            </div>
                        </div>
                        
                    </article>
                        
                    <div class="sectionDatosNetwork__red">
                        <div class="bloqueMiRed">
                            <section class="bloqueMiRed__section">
                                <section class="bloqueMiRed__titulo">
                                    <p>
                                        Mi Red
                                    </p>
                                </section>
                                <section class="bloqueMiRed__circulos">
                                    <article>
                                        <div class="articleCirculos__img">
                                            <img src="img/circulo-red-01.png" alt="circuloMiRed" width="150" />
                                            <p id="totalSocios" class="valorCirculo"><%=TOTALSOCIOS %></p>
                                        </div>
                                        <div class="articleCirculos__nombre">
                                            <p>MIS EMPRESARIOS</p>
                                        </div>
                                    </article>
                                    <article>
                                        <div class="articleCirculos__img">
                                            <img src="img/circulo-red-01.png" alt="circuloMiRed" width="150" />
                                            <p id="activosSocios" class="valorCirculo"><%=ACTIVOS_SOCIOS %></p>
                                        </div>
                                        <div class="articleCirculos__nombre">
                                            <p>EMPRESARIOS ACTIVOS</p>
                                        </div>
                                    </article>
                                    <article>
                                        <div class="articleCirculos__img">
                                            <img src="img/circulo-red-01.png" alt="circuloMiRed" width="150" />
                                            <p id="nuevosSocios" class="valorCirculo"><%=NUEVOS_SOCIOS %></p>
                                        </div>
                                        <div class="articleCirculos__nombre">
                                            <p>NUEVOS ACTIVOS</p>
                                        </div>
                                    </article>
                                    <article>
                                        <div class="articleCirculos__img">
                                            <img src="img/circulo-red-01.png" alt="circuloMiRed" width="150" />
                                            <p id="inactivosSocios" class="valorCirculo"><%=INACTIVOS_SOCIOS %></p>
                                        </div>
                                        <div class="articleCirculos__nombre">
                                            <p>EMPRESARIOS INACTIVOS</p>
                                        </div>
                                    </article>

                                </section>
                                <div class="bloqueMiRed__irMapaRed">
                                    <a href="MapaRedSocios.aspx">Ir al Mapa de Red</a>
                                </div>
                            </section>
                        </div>
                        <article class="sectionDatosNetwork__cuadros">
                            <div class="cuadrosDerecha">
                                <div>
                                    <p class="paquete">Paquete <%=PAQUETE %></p>
                                </div>
                                <div>
                                    <p class="valor"><%=PP %></p>
                                    <p class="desc">Puntos Personales</p>
                                </div>
                                <div>
                                    <p class="valor"><%=VP %></p>
                                    <p class="desc">Volumen Personal</p>
                                </div>
                                <div>
                                    <p class="valor"><%=VG %></p>
                                    <p class="desc">Volumen Grupal</p>
                                </div>
                            </div>
                            <div class="cuadrosIzquierda">
                                <div>
                                    <p class="valor"><%=VQ %></p>
                                    <p class="desc">Volumen de Calificación</p>
                                </div>
                                <%--<div>
                                    <p class="valor"><%=COMISION %></p>
                                    <p class="desc">Comisión</p>
                                </div>--%>
                                <div>
                                    <p class="valor"><%=VIP %></p>
                                    <p class="desc">VIP</p>
                                </div>
                                <div>
                                    <p class="valor"><%=DIRECTOS %></p>
                                    <p class="desc">Nuevos Directos</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </section>
            
        </section>

        <section class="our_latest_product" style="padding-top: 40px; display: none">
            <div class="container" id="panel" runat="server">
                <div class="s_m_title col-12" style="margin-bottom: -55px;">
                    <div class="col-xl-7 col-lg-5 col-md-5 col-sm-5 col-xs-5 scrollflow -opacity" style="margin-left: -30px; margin-top: -7px">
                        <h2>Periodo: Enero</h2>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 center-block" style="display: none">
                        <h2>Reloj: hh:MM:ss</h2>
                    </div>
                </div>
                <div id="myCarouselNetWorker2" class="carousel slide scrollflow -slide-top" style="margin-top: 100px;" runat="server">
                    <div class="l_product_slider owl-carousel">
                        <div class="item" style="z-index: 300000">
                            <div class="l_product_item cuerpo">
                                <div style="width: 240px; margin: 33.88px auto">
                                    <a href="#x" style="text-align: center">
                                        <h3 style="margin-top: -20px">Rango </h3>
                                        <div style="height: 125px; margin-top: 5px">
                                            <%--<img id="rangoS" src="imagenes/pines/<%=IMG%>" style="width: auto; height: 100%; margin: auto" alt="Image" class="img-responsive">--%>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <%--                    <div class="item">
                        <div class="l_product_item cuerpo">
                            <div style="width: 240px; margin: 33.88px auto">
                                <a href="#x" style="vertical-align: central; text-align: center">
                                    <h3 style="margin-top: 20px">Bonificacion</h3>
                                    <br />
                                    <br />
                                    <h2>S/. 2000.0</h2>
                                </a>
                            </div>
                        </div>
                    </div>--%>
                        <%--<div class="item" style="z-index: 300000">
                            <div class="l_product_item cuerpo">
                                <div style="width: 240px; margin: 33.88px auto">
                                    <a href="#x" style="vertical-align: middle; text-align: center">
                                        <h3>PP</h3>
                                        <br />
                                        <br />
                                        <h2><%=PP %></h2>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div class="item" style="z-index: 300000">
                            <div class="l_product_item cuerpo">
                                <div style="width: 240px; margin: 33.88px auto">
                                    <a href="#x" style="vertical-align: middle; text-align: center">
                                        <h3 style="margin-top: 20px">VP</h3>
                                        <br />
                                        <br />
                                        <h2><%=VP %></h2>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="item" style="z-index: 300000">
                            <div class="l_product_item cuerpo">
                                <div style="width: 240px; margin: 33.88px auto">
                                    <a href="#x" style="text-align: center">
                                        <h3 style="margin-top: 20px">VQ</h3>
                                        <br />
                                        <br />
                                        <h2><%=VQ %></h2>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="item" style="z-index: 300000">
                            <div class="l_product_item cuerpo">
                                <div style="width: 240px; margin: 33.88px auto">
                                    <a href="#x" style="text-align: center">
                                        <h3 style="margin-top: 20px">Socios Activos Red</h3>
                                        <br />
                                        <br />
                                        <h2><%=SOCIOS %></h2>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="item" style="z-index: 300000">
                            <div class="l_product_item cuerpo">
                                <div style="width: 240px; margin: 33.88px auto">
                                    <a href="#x" style="text-align: center">
                                        <h3 style="margin-top: 20px">Directos Activos</h3>
                                        <br />
                                        <br />
                                        <h2><%=DIRECTOS %></h2>
                                    </a>
                                </div>
                            </div>
                        </div>--%>
                        <%--                    <div class="item">
                        <div class="l_product_item cuerpo">
                            <div style="width: 240px; margin: 14.88px auto">
                                <a href="#x" style="text-align: center">
                                    <h3 style="margin-top: 20px">Consumidores Activos</h3>
                                    <br />
                                    <br />
                                    <h2>3/5</h2>
                                </a>
                            </div>
                        </div>
                    </div>--%>
                        <%--                    <div class="item">
                        <div class="l_product_item cuerpo">
                            <div style="width: 240px; margin: 33.88px auto">
                                <a href="#x" style="text-align: center">
                                    <h3 style="margin-top: 20px">Consultores Activos</h3>
                                    <br />
                                    <br />
                                    <h2>0/0</h2>
                                </a>
                            </div>
                        </div>
                    </div>--%>
                    </div>
                </div>
            </div>
        </section>
        <!--================End Our Latest Product Area =================-->

        <!--================Feature Big Add Area =================-->
        <div id="publicaciones" class="feature_big_add_area">

            <div class="container" style="max-width: 100vw; width: 100%; padding: 0">
                <div class="s_m_title col-12 scrollflow -opacity" style="padding-bottom: 2em; margin-left: -15px; display: none">
                    <h2>Publicaciones y novedades</h2>
                </div>
                <div class="w-100"></div>

                <div class="container" style=" width: 100%; max-width: 100vw; padding: 0">
                    <div id="slides" class="slider_div owl-carousel slides">
                        <div class="item">
    						<img src="https://tienda.mundosantanatura.com/imagenes/depertandoSoniadores.png" alt="" />
						</div>
						<div class="item">
							<img src="https://tienda.mundosantanatura.com/imagenes/entrenamientoLideres.png" alt="" />
						</div>
						<div class="item">
							<img src="https://tienda.mundosantanatura.com/imagenes/entrenamientoSuperAlimentos.png" alt="" />
						</div>
                    </div>
                </div>
            </div>
            
        </div>
        <!--================End Feature Big Add Area =================-->

        <!--================Featured Product Area =================-->
        
    </div>
    
    <asp:HiddenField ID="TotalSociosPB" runat="server" />
    <asp:HiddenField ID="ActivosSociosPB" runat="server" />
    <asp:HiddenField ID="PorcentajeV" runat="server" />
    <asp:HiddenField ID="VQActualPB" runat="server" />
    <asp:HiddenField ID="VQProximoPB" runat="server" />
    <%--<script src="js/index.js" type="text/javascript"></script>--%>

    <!--Begin Para el banner carrusel de la página Tienda-->
    <script type="text/javascript" src="engine1/wowsliderv2.js"></script>
    <script type="text/javascript" src="engine1/scriptv2.js"></script>
    <!--End Para el banner carrusel de la página Tienda-->    

    <!--Para el nuevo Circle Progress Bar-->
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha384-tsQFqpEReu7ZLhBV2VZlAu7zcOV+rXbYlF2cqB8txI/8aZajjp4Bqd+V6D5IgvKT" crossorigin="anonymous"></script> 


    <!--PARA EL SLIDER DE LAS IMAGENES DE CONECTATE CON NOSOTROS-->
    <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
    <script src="js/proyecto2/owl.carousel.min.js"></script>

    <%--<script src="js/proyecto2/circleProgressBar.js"></script>--%>
    


    <script>
        $(function () {

            // Eliminar el estilo en línea svg.radial-progress .complete
            $('svg.radial-progress').each(function (index, value) {
                $(this).find($('circle.complete')).removeAttr('style');
            });

            // Activar la animación de progreso en el desplazamiento
            $(window).ready(function () {
                //$('#ModalCambioPassword').modal('show'); 
                // alert("hola");

                $('svg.radial-progress').each(function (index, value) {
                    // Si svg.radial-progress es aproximadamente un 25% verticalmente en la ventana cuando se desplaza desde la parte superior o inferior

                    // Obtener porcentaje de progreso
                    percent = $(value).data('percentage');
                    // Obtenga el radio del círculo del svg
                    radius = $(this).find($('circle.complete')).attr('r');
                    // Obtener circunferencia (2πr)
                    circumference = 2 * Math.PI * radius;
                    // Obtener el valor de desplazamiento de trazo - guión basado en el porcentaje de la circunferencia
                    strokeDashOffset = circumference - ((percent * circumference) / 100);
                    // Progreso de la transición durante # segundos
                    $(this).find($('circle.complete')).animate({ 'stroke-dashoffset': strokeDashOffset }, 1550);

                });
            }).trigger('scroll');





        });




        //$(window).resize(function () {
        //    //do whatever you want
        //    var anchoVentana = window.innerWidth;
        //    //console.log('ancho: ' + anchoVentana);
        //    if (anchoVentana < 1351) {
        //        //console.log($(this).width());
        //        let img = document.querySelector('.slider_div .owl-item.active .item img');
        //        let left = document.querySelector('.slider_div .owl-item.active');
        //        //console.log(left);
        //        left.style.left = ($(this).width() - 1100) + 'pt';
        //        img.style.width = ($(this).width() - 309) + 'px';
        //        img.style.height = (img.clientWidth - 650) + 'px';
        //    } else {
        //        let img = document.querySelector('.slider_div .owl-item.active .item img');
        //        let left = document.querySelector('.slider_div .owl-item.active');
        //        left.style.left = '-230px';
        //        img.style.width = '730px';
        //        img.style.height = '348px';
        //    }
        //});


        //$(window).resize(function () {
        //    var anchoVentana = window.innerWidth;
        //    if (anchoVentana > 1351) {
        //        let img = document.querySelector('.slider_div .owl-item.active .item img');
        //        let left = document.querySelector('.slider_div .owl-item.active');
        //        left.style.left = '-230px';
        //        img.style.width = '730px';
        //        img.style.height = '348px';
        //    }
        //});




        //var swiper = new Swiper(".mySwiper", {
        //    effect: "coverflow",
        //    centeredSlides: true,
        //    slidesPerView: "auto",
        //    coverflowEffect: {
        //        rotate: 0,
        //        stretch: 0,
        //        depth: 100,
        //        modifier: 2,
        //        slideShadows: true,
        //    },
        //    loop: true
        //});






        var owl = $('.slider_div').owlCarousel({
            loop: true,
            responsiveClass: true,
            nav: true,
            dots: false,
            margin: 600,
            marginLeft: -200,
            smartSpeed: 400,
            center: true,
            navText: ['<span data-slide="prev" data-target="#myCarousel1" class="1btn-vertical-slider glyphicon owl-prev prevv" style="display: table; background: white; border-radius: 50%;color: white; padding: 10px 15px;background: var(--Primary-orange)c7;font-family:FontAwesome;">❮</span>',
                '<span data-slide="next" data-target="#myCarousel1" class="1btn-vertical-slider glyphicon owl-next nextt" style="display: table; background: white; border-radius: 50%; color: white; padding: 10px 15px;background: var(--Primary-orange)c7;font-family:FontAwesome;">❯</span>'],
            responsive: {
                0: {
                    items: 1,
                },
                769: {
                    items: 1
                },
                1200: {
                    items: 3
                }
            }
        });


        //window.addEventListener('resize', () => {
        //    const ancho = document.getElementById("publicaciones");            
        //    const anchoPagina = $(window).width();
        //    //console.log(anchoPagina);
        //    if (anchoPagina < 1441) {
        //        ancho.style.display = "none";
        //    } else {
        //        ancho.style.display = "block";
        //    }
        //});
    </script>




    <!--Para el anterior Circle Progress Bar-->
 <%--    <script src="js/proyecto2/jquery-3.2.1.js"></script>
   <script src="js/proyecto2/plugin.js"></script>--%>


    <script>
        //getInfoImagenForBanner();

        //async function getInfoImagenForBanner() {
        //    try {
        //        const imagen = await fetch('Autocompletado.asmx/GetPopupActivo');
        //        const data = await imagen.json();
        //        const info = data[0]
        //        const { idImg , url } = info
        //        document.getElementById("imgPopup").src=`${url}`;
        //    } catch (error) {
        //        console.log(error);
        //    } 
        //}



        //Para que al hacer click al cerrar el modal se pausee el video.
        //function toggleVideo(state) {
        //    var div = document.getElementById("popupVid");
        //    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
        //    div.style.display = state == 'hide' ? 'none' : '';
        //    func = state == 'hide' ? 'pauseVideo' : 'playVideo';
        //    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
        //}

        //----------------------------------------------------------------------------------------------------------

        //Para que el menu del navbar se quede de un color cuando esté seleccionado
        //window.onload = function () {
        //    document.getElementById("clicInicio").style.color = 'white';
        //    document.getElementById("clicInicio").style.borderBottom = '3px solid white';
        //}


        $(document).ready(function () {
            //$('#myCarousel').carousel({
            //    interval: false
            //})

            //$('#myCarousel').on('slid.bs.carousel', function () {
            //    //alert("slid");
            //});



            /*Para la dimensión del panel de los videos de los socios*/
            //var $window = $(window),
            //    $html = $('#videosSocios');
            //$panel = $('#panelVideosSocios');

            //$window.resize(function resize() {
            //    if ($window.width() < 500) {
            //        document.getElementById("panelVideosSocios").style.display = "block"
            //    }

            //    if ($window.width() > 500) {
            //        document.getElementById("panelVideosSocios").style.display = "flex"
            //    }

            //    if ($window.width() > 992) {
            //        return $html.addClass(' scrollflow -opacity');
            //    }

            //    else {
            //        $html.removeClass(' scrollflow -opacity');
            //        return $html.addClass(' scrollflow -opacity');
            //    }
            //}).trigger('resize');



            /* ---------------------------------------------------------------------------------------------------------------- */
            //Progress bar

            var VQActual = document.getElementById('<%=VQActualPB.ClientID%>');
            var VQProximo = document.getElementById('<%=VQProximoPB.ClientID%>');
            var PorcentajeV = document.getElementById('<%=PorcentajeV.ClientID%>');
            //VQActual.value = (VQActual.value >= VQProximo.value) ? VQProximo.value - 1 : VQActual.value;
            //var progress = (VQProximo.value == "0") ? 0 : (parseFloat(VQActual.value) >= parseFloat(VQProximo.value)) ? 99 :
            //    (parseFloat(VQActual.value) / parseFloat(VQProximo.value)) * 100;
            var progress = (VQProximo.value == "0") ? 0 : PorcentajeV.value;
            console.log("porcentaje" +PorcentajeV.value);

            const circle = document.getElementById('circle');
            //const input = document.getElementById('percent');
            const input = progress;
            const number = document.querySelector('.card__number');
            //const tooltip = document.querySelector('.tooltip');

            function circlePercent() {
                let change = 565.49 - (565.49 * input) / 100;
                console.log('input vale: ' + input);
                console.log('input vale: ' + Math.floor(input));
                number.innerHTML = Number(Math.floor(input)) + '%';
                circle.style.strokeDashoffset = change;
            };
            (circlePercent)();
            //function isNumeric(event) {
            //    if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode > 31)) {
            //        return false;
            //    }
            //    if (event.keyCode == 13) {
            //        changePercent();
            //    }
            //};


            $("#valuePercentage").attr("data-percentage", progress);
            $("#valuePercentage2").attr("data-percentage", progress);
            //console.log(progress);
<%--            $(".my-progress-bar").circularProgress({
                line_width: 15,
                color: "#262660",
                //height: "300px",
                //width: "300px",
                starting_position: 0, 
                percent: 0,
                percentage: true,
                text: "<%=RANGOPROXIMO %>"
            }).circularProgress('animate', progress, 2000);
            $("#progressbar1").width(progress + '%');
            if (progress % 1 !== 0) {
                $("#progressbar1").text(progress.toFixed(1) + '%');
            } else {
                $("#progressbar1").text(progress + '%');
            }--%>


            var SociosActivos = document.getElementById('<%=ActivosSociosPB.ClientID%>');
            var TotalSocios = document.getElementById('<%=TotalSociosPB.ClientID%>');
            var progress = (SociosActivos.value / TotalSocios.value) * 100;
            //console.log(progress);
            $("#progressbar2").width(progress + '%');
            if (progress % 1 !== 0) {
                $("#progressbar2").text(progress.toFixed(1) + '%');
            } else {
                $("#progressbar2").text(progress + '%');
            }


            var currentCount = 144;
            var progress = (currentCount / 300) * 100;
            //console.log(progress);
            $("#progressbar3").width(progress + '%');
            if (progress % 1 !== 0) {
                $("#progressbar3").text(progress.toFixed(1) + '%');
            } else {
                $("#progressbar3").text(progress + '%');
            }

        });

    </script>

    <%--</div>--%>

    <%--    <script src="js/proyecto2/  theme.js"></script>--%>

    <!--Para el slider de DatosNetWorker-->
    <script src="js/estiloTablaNetWorker.js"></script>



    <!--BEGIN:Para los videos de los socios-->
    <script src="js/proyecto2/estilos-videos.js"></script>
    <%--<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>--%>
    <!--END:Para los videos de los socios-->


    <!--Medallas de Socios Destacados - circle-->
    <%--<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>----------------------------------------------------------------------------%>

    <%--<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>--%>

    <script src="js/proyecto2/VerticalSlider.js"></script>




    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/proyecto2/popper.min.js"></script>
    <%--<script src="js/proyecto2/bootstrap.min.js"></script>--%>

    <!-- Rev slider js -->
    <script src="css/proyecto2/vendors/revolution/js/jquery.themepunch.tools.min.js"></script>
    <script src="css/proyecto2/vendors/revolution/js/jquery.themepunch.revolution.min.js"></script>

    <script src="css/proyecto2/vendors/revolution/js/extensions/revolution.extension.actions.min.js"></script>
    <script src="css/proyecto2/vendors/revolution/js/extensions/revolution.extension.video.min.js"></script>
    <script src="css/proyecto2/vendors/revolution/js/extensions/revolution.extension.slideanims.min.js"></script>
    <script src="css/proyecto2/vendors/revolution/js/extensions/revolution.extension.layeranimation.min.js"></script>
    <script src="css/proyecto2/vendors/revolution/js/extensions/revolution.extension.navigation.min.js"></script>
    <script src="css/proyecto2/vendors/revolution/js/extensions/revolution.extension.slideanims.min.js"></script>

    <!-- Extra plugin css -->
    <%--<script src="css/proyecto2/vendors/counterup/jquery.waypoints.min.js"></script>--%>
    <script src="css/proyecto2/vendors/counterup/jquery.counterup.min.js"></script>
    <script src="css/proyecto2/vendors/owl-carousel/owl.carousel.min.js"></script>
    <script src="css/proyecto2/vendors/bootstrap-selector/js/bootstrap-select.min.js"></script>
    <script src="css/proyecto2/vendors/image-dropdown/jquery.dd.min.js"></script>
    <%--<script src="js/proyecto2/smoothscroll.js"></script>--%>

    <script src="css/proyecto2/vendors/isotope/imagesloaded.pkgd.min.js"></script>
    <script src="css/proyecto2/vendors/isotope/isotope.pkgd.min.js"></script>
    <script src="css/proyecto2/vendors/magnify-popup/jquery.magnific-popup.min.js"></script>
    <script src="css/proyecto2/vendors/vertical-slider/js/jQuery.verticalCarousel.js"></script>


    <script src="js/proyecto2/theme.js?v1"></script>

</asp:Content>
