<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="Bonificaciones.aspx.cs" Inherits="SantaNaturaNetworkV3.Bonificaciones" ClientIDMode="Static" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

    <!--Posicionamiento de ciertos elementos-->
    <link href="assets/css/demo.css?Fv41" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/css/select2.min.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Dancing+Script&display=swap" rel="stylesheet">

    <style>
        .customers {
            font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 50%;
            margin-left: auto;
            margin-right: auto;
        }

            .customers td, .customers th {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: center
            }

            .customers tr:nth-child(even) {
                background-color: #f2f2f2;
            }

            .customers tr:hover {
                background-color: #ddd;
            }

            .customers th {
                padding-top: 12px;
                padding-bottom: 12px;
                background-color: #0b1c6f;
                color: white;
            }

        /*------------------------------------Chart Comisiones-------------------------------------*/
        .is-empty {
            display: none !important;
        }

        /*------------------------------*/
        .customers {
            font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 100%;
            margin-left: auto;
            margin-right: auto;
        }

            .customers td, .customers th {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: center
            }

            .customers tr:nth-child(even) {
                background-color: #f2f2f2;
            }

            .customers tr:hover {
                background-color: #ddd;
            }

            .customers th {
                padding-top: 12px;
                padding-bottom: 12px;
                background-color: #1e5fb1;
                color: white;
            }

        .bajarCombo {
            margin-top: 30px !important;
        }

        #bloqueCombitoyButton {
            margin-top: -30px !important;
        }

        .no-js #loader {
            display: none;
        }

        .js #loader {
            display: block;
            position: absolute;
            left: 100px;
            top: 0;
        }

        .se-pre-con {
            position: fixed;
            left: 0px;
            top: 0px;
            right: 0px;
            bottom: 0px;
            width: 100%;
            height: 100%;
            z-index: 9999;
            background: url(img/loadingPageSantanatura.gif) center no-repeat #fff;
        }



        /*--------------------TOOLTIPS------------------------------------*/
        /*---------tooltip2------------*/
        .tooltip2:hover .tooltip2-drop {
            opacity: 1;
        }

            .tooltip2:hover .tooltip2-drop.tooltip2-top, .tooltip2:hover .tooltip2-drop.tooltip2-bottom {
                transform: translate(-50%, 0);
            }
        .tooltip2 .tooltip2-drop {
            position: absolute;
            max-width: 200px;
            width: -webkit-max-content;
            width: -moz-max-content;
            width: max-content;
            opacity: 0;
            padding: 0.75rem 0.875rem;
            background-color: #008eff;
            font-size: 0.875rem;
            text-align: left;
            z-index: 1;
            transition: all 0.15s ease-in-out;
            border-radius: 0.188rem;
            color: #fff;
            pointer-events: none;
        }
            .tooltip2 .tooltip2-drop::before {
                content: "";
                position: absolute;
                width: 0;
                height: 0;
                border: 0.375rem solid transparent;
                border-top-color: #008eff;
            }

            .tooltip2 .tooltip2-drop.tooltip2-top, .tooltip2 .tooltip2-drop.tooltip2-bottom {
                left: 44.5%;
                transform: translate(-20%, 0.625rem);
            }

                .tooltip2 .tooltip2-drop.tooltip2-top:before, .tooltip2 .tooltip2-drop.tooltip2-bottom:before {
                    left: 50%;
                }

            .tooltip2 .tooltip2-drop.tooltip2-top {
                bottom: calc(85% + 0.625rem);
            }

                .tooltip2 .tooltip2-drop.tooltip2-top:before {
                    top: 100%;
                    transform: translate(-50%, 0);
                }

        /*------------------data-tooltip-------------------------*/
        [data-tooltip] {
            position: relative;
            z-index: 100 !important;
        }
            /* Positioning and visibility settings of the tooltip */
            [data-tooltip]::before,
            [data-tooltip]::after {
                position: absolute;
                left: 50%;
                bottom: calc(100% + 5px); /* 5px is the size of the arrow */
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                transition: 0.3s;
                will-change: transform;
            }
            /* The actual tooltip with a dynamic width */
            [data-tooltip]::before {
                content: attr(data-tooltip);
                /*min-width: 50px;*/
                /*max-width: 300px;*/
                width: max-content;
                width: -moz-max-content;
                padding: 10px 18px;
                border-radius: 10px;
                background-color: #008eff;
                /*box-shadow: var(--default-box-shadow);*/
                color: #fff;
                font-size: 0.875rem;
                text-align: center;
                white-space: pre-wrap;
                transform: translate(-50%, -5px) scale(0.5);
            }
            /* Tooltip arrow */
            [data-tooltip]::after {
                content: '';
                border-style: solid;
                border-width: 5px 5px 0 5px; /* CSS triangle */
                border-color: rgba(0, 142, 255, 1) transparent transparent transparent;
                transform-origin: top; /* Orientation setting for the slide-down effect */
                transition-duration: 0s; /* If the mouse leaves the element, the transition effects for the tooltip arrow are "turned off" */
                transform: translateX(-50%) scaleY(0);
            }
            /* Tooltip becomes visible at hover */
            [data-tooltip]:hover::before,
            [data-tooltip]:hover::after {
                visibility: visible;
                opacity: 1;
            }
            /* Scales from 0.5 to 1 -> grow effect */
            [data-tooltip]:hover::before {
                transition-delay: 0.3s;
                transform: translate(-50%, -5px) scale(1);
            }
            /* Arrow slide down effect only on mouseenter (NOT on mouseleave) */
            [data-tooltip]:hover::after {
                transition-delay: 0.5s; /* Starting after the grow effect */
                transition-duration: 0.2s;
                transform: translateX(-50%) scaleY(1);
            }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <link href="assets/css/material-dashboard.css" rel="stylesheet" />
    <link href="assets/css/google-roboto-300-700.css" rel="stylesheet" />

    <h1 style="text-align: center; margin-top: 100px; display: none">BONIFICACIONES</h1>
    <div style="background-color: #EEEEEE">
        <%--<div style="border: 1px solid; display: none">
            <br />
            <div class="col-12">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <table class="customers table-responsive" style="margin-top: 50px; margin-bottom: 20px">
                            <tr>
                                <th style="width: 300px">PERIODO</th>
                                <td style="width: 300px">ABRIL</td>
                            </tr>

                            <tr>
                                <th style="width: 300px">UNILEVEL</th>
                                <td style="width: 300px">
                                    <asp:Label runat="server" ID="txtUnilevel"></asp:Label></td>
                            </tr>
                            <tr>
                                <th style="width: 300px">AFILIACIONES</th>
                                <td style="width: 300px">
                                    <asp:Label runat="server" ID="txtAfiliacion"></asp:Label></td>
                            </tr>
                            <tr>
                                <th style="width: 300px">TIBURON</th>
                                <td style="width: 300px">
                                    <asp:Label runat="server" ID="txtTiburon"></asp:Label></td>
                            </tr>
                            <tr>
                                <th style="width: 300px">LOGRO BRONCE</th>
                                <td style="width: 300px">
                                    <asp:Label runat="server" ID="txtBronce"></asp:Label></td>
                            </tr>
                        </table>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <table class="customers table-responsive" style="margin-top: 50px; margin-bottom: 20px">
                            <tr>
                                <th style="width: 300px">CONSUMO INTELIGENTE</th>
                                <td style="width: 300px">
                                    <asp:Label runat="server" ID="txtCI"></asp:Label></td>
                            </tr>
                            <tr>
                                <th style="width: 300px">CONSULTORES</th>
                                <td style="width: 300px">
                                    <asp:Label runat="server" ID="txtCon"></asp:Label></td>
                            </tr>
                            <tr>
                                <th style="width: 300px">BONO ESCOLARIDAD</th>
                                <td style="width: 300px">
                                    <asp:Label runat="server" ID="txtEscolaridad"></asp:Label></td>
                            </tr>
                            <tr>
                                <th style="width: 300px">BONO MERCADEO</th>
                                <td style="width: 300px">
                                    <asp:Label runat="server" ID="txtMercadeo"></asp:Label></td>
                            </tr>
                            <tr>
                                <th style="width: 300px">COMISION TOTAL</th>
                                <td style="width: 300px">
                                    <asp:Label runat="server" ID="txtMonto"></asp:Label></td>
                            </tr>
                        </table>
                    </div>
                </div>

            </div>
            <br />
        </div>--%>

        <div class="header text-center" style="padding-top: 90px; display:none">
            <h2 class="title" style="font-family: -webkit-body;">Estadísticas de Comisiones</h2>
        </div>

        <div id="bloqueCombitoyButton" class="row" style="display: none">
            <div class="col-8">
                <asp:DropDownList runat="server" ID="cboSocios" CssClass="form-control js-example-templating" Width="235px" />
            </div>
            <div class="col-4 bajarCombo">
                <button type="button" id="btnComisionGrafica" class="btnObtener">Obtener</button>
            </div>
        </div>


        <div class="container-fluid">

            <div class="row" id="bloqueRetencion" style="display:none">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header card-header-icon" data-background-color="cadetblue">
                            <i class="material-icons">assignment</i>
                        </div>
                        <h3 class="card-title">Retencion</h3>
                        <div class="card-content">
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th class="text-center">Tipo</th>
                                            <th class="text-left">Total</th>
                                            <th class="text-left">Activos</th>
                                            <th class="text-left">Nuevos</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-left">Socio Directo</td>
                                            <td class="text-left">
                                                <asp:Label runat="server" ID="txtTotalSocioDirecto" /></td>
                                            <td class="text-left">
                                                <asp:Label runat="server" ID="txtActivosSociosDirecto" /></td>
                                            <td class="text-left">
                                                <asp:Label runat="server" ID="txtNuevosSociosDirecto" /></td>
                                        </tr>
                                        <tr>
                                            <td class="text-left">Consultor Directo</td>
                                            <td class="text-left">
                                                <asp:Label runat="server" ID="txtTotalConsultorDirecto" /></td>
                                            <td class="text-left">
                                                <asp:Label runat="server" ID="txtActivosConsultorDirecto" /></td>
                                            <td class="text-left">
                                                <asp:Label runat="server" ID="txtNuevosConsultorDirecto" /></td>
                                        </tr>
                                        <tr>
                                            <td class="text-left">C. Inteligente Directo</td>
                                            <td class="text-left">
                                                <asp:Label runat="server" ID="txtTotalCIDirecto" /></td>
                                            <td class="text-left">
                                                <asp:Label runat="server" ID="txtActivoCIDirecto" /></td>
                                            <td class="text-left">
                                                <asp:Label runat="server" ID="txtNuevoCIDirecto" /></td>
                                        </tr>
                                        <tr>
                                            <td class="text-left">Socio Red</td>
                                            <td class="text-left">
                                                <asp:Label runat="server" ID="txtTotalSocioRed" /></td>
                                            <td class="text-left">
                                                <asp:Label runat="server" ID="txtActivoSocioRed" /></td>
                                            <td class="text-left">
                                                <asp:Label runat="server" ID="txtNuevoSocioRed" /></td>
                                        </tr>
                                        <tr>
                                            <td class="text-left">Consultor Red</td>
                                            <td class="text-left">
                                                <asp:Label runat="server" ID="txtTotalConsultorRed" /></td>
                                            <td class="text-left">
                                                <asp:Label runat="server" ID="txtActivoConsultorRed" /></td>
                                            <td class="text-left">
                                                <asp:Label runat="server" ID="txtNuevoConsultorRed" /></td>
                                        </tr>
                                        <tr>
                                            <td class="text-left">C. Inteligente Red</td>
                                            <td class="text-left">
                                                <asp:Label runat="server" ID="txtTotalCIRed" /></td>
                                            <td class="text-left">
                                                <asp:Label runat="server" ID="txtActivoCIRed" /></td>
                                            <td class="text-left">
                                                <asp:Label runat="server" ID="txtNuevoCIRed" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row" style="display: none">
                <div class="col-md-4" style="display: none">
                    <div class="card card-chart">
                        <div class="card-header" data-background-color="rose">
                            <div id="roundedLineChart" class="ct-chart"></div>
                        </div>
                        <div class="card-content">
                            <h4 class="card-title">Rounded Line Chart</h4>
                            <p class="category">Line Chart</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4" style="display: none">
                    <div class="card card-chart">
                        <div class="card-header" data-background-color="orange">
                            <div id="straightLinesChart" class="ct-chart"></div>
                        </div>
                        <div class="card-content">
                            <h4 class="card-title">Straight Lines Chart</h4>
                            <p class="category">Line Chart with Points</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4" style="display: none">
                    <div class="card card-chart">
                        <div class="card-header" data-background-color="blue">
                            <div id="simpleBarChart" class="ct-chart"></div>
                        </div>
                        <div class="card-content">
                            <h4 class="card-title">Simple Bar Chart</h4>
                            <p class="category">Bar Chart</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" style="display: none">
                <div id="colouredLineChart" class="col-md-6" style="margin-left: 54px; display: none;">
                    <div class="card">
                        <div class="card-header card-header-icon" data-background-color="blue">
                            <i class="material-icons">timeline</i>
                        </div>
                        <div class="card-content">
                            <h4 class="card-title">Linea progresiva de Bonificacion General
                            </h4>
                        </div>
                        <div id="colouredRoundedLineChart" class="ct-chart"></div>
                        <div class="card-footer">
                            <h6>Leyenda</h6>
                            <i class="fa fa-circle text-info"></i>Montos[<asp:Label runat="server" ID="txtMontosLineaGeneral" />]
                        </div>
                    </div>
                </div>
                <div class="col-md-5" style="display: none">
                    <div class="card">
                        <div class="card-header card-header-icon" data-background-color="red">
                            <i class="material-icons">pie_chart</i>
                        </div>
                        <div class="card-content" style="padding-bottom: 2px;">
                            <h4 class="card-title">Porcentaje de Bonos</h4>
                        </div>
                        <div id="chartPreferences" class="ct-chart"></div>
                        <div class="card-footer">
                            <h6>Leyenda</h6>
                            <i class="fa fa-circle text-info"></i>Unilevel(<asp:Label runat="server" ID="txtUNI" />%)
                        <i class="fa fa-circle text-warning"></i>Fast Start(<asp:Label runat="server" ID="txtFS" />%)
                        <i class="fa fa-circle text-danger"></i>Tiburón(<asp:Label runat="server" ID="txtTIBU" />%)
                        <i class="fa fa-circle text-success"></i>Bronce(<asp:Label runat="server" ID="txtBRON" />%)
                        <i class="fa fa-circle text-gray"></i>C. Inteligente(<asp:Label runat="server" ID="txtCIN" />%)
                        <i class="fa fa-circle"></i>Consultor(<asp:Label runat="server" ID="txtCONSUL" />%)
                        <i class="fa fa-circle" style="color: blueviolet"></i>Escolaridad(<asp:Label runat="server" ID="txtESCO" />%)
                        <i class="fa fa-circle" style="color: chocolate"></i>Mercadeo(<asp:Label runat="server" ID="txtMERCA" />%)
                        <i class="fa fa-circle" style="color: gold"></i>Matricial(<asp:Label runat="server" ID="txtMATRI" />%)
                        </div>
                    </div>
                </div>
            </div>
            <div id="idColouredBarsChart" class="row" style="display: flex; justify-content: center; display: none">
                <div class="col-md-7" style="display: none">
                    <div class="card">
                        <div class="card-header card-header-icon" data-background-color="blue">
                            <i class="material-icons">timeline</i>
                        </div>
                        <div class="card-content">
                            <h4 class="card-title">Linea progresiva de Bonos 
                            </h4>
                        </div>
                        <div id="colouredBarsChart" class="ct-chart"></div>
                        <div class="card-footer">
                            <h6>Leyenda</h6>
                            <i class="fa fa-circle text-info"></i>Unilevel [<asp:Label runat="server" ID="txtProgreUni" />]
                        <br />
                            <i class="fa fa-circle text-warning"></i>Fast Start [<asp:Label runat="server" ID="txtProgreFast" />]<br />
                            <i class="fa fa-circle text-danger"></i>C.I. [<asp:Label runat="server" ID="txtProgreCI" />]<br />
                            <i class="fa fa-circle text-success"></i>Consultor [<asp:Label runat="server" ID="txtProgreCon" />]
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <svg id="efectoGusanito" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="margin-top: -20px;">
            <path fill="#EEEEEE" fill-opacity="1" d="M0,96L30,85.3C60,75,120,53,180,74.7C240,96,300,160,360,160C420,160,480,96,540,90.7C600,85,660,139,720,154.7C780,171,840,149,900,128C960,107,1020,85,1080,101.3C1140,117,1200,171,1260,165.3C1320,160,1380,96,1410,64L1440,32L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
        </svg>

        <div id="bloqueDetalleComision" style="background: floralwhite; padding-top: 120px; margin-top: -220px; padding-right: 15px; padding-left: 15px">

            <h1 id="DetalleDeComision" style="text-align: center; font-size: 2.8em;">Detalle de Comisión
            </h1>
            <div id="bloqueCombitoyButtonPeriodo" class="row">
                <div>
                    <asp:DropDownList runat="server" ID="ddlPais" CssClass="form-contrl js-example-templating" Width="235px" />
                </div>
                <div>
                    <asp:DropDownList runat="server" ID="ddlPeriodo" CssClass="form-control js-example-templating" Width="235px" />
                </div>
                <div class="bajarCombo">
                    <button type="button" id="btnObtenerPeriodo" class="btnObtener">Obtener</button>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">

                    <div id="bloqueBono1" class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <table class="customers" style="margin-top: 50px; margin-bottom: 20px">
                            <%--        <tr>
                <th>Company</th>
                <th>Contact</th>
            </tr>--%>
                            <tr>
                                <th>PERIODO</th>
                                <td>
                                    <asp:Label runat="server" ID="txtNomPeriodo"></asp:Label></td>
                            </tr>
                            <tr>
                                <th>BONO UNILEVEL</th>
                                <td>
                                    <asp:Label runat="server" ID="txtUnilevel">0</asp:Label></td>
                            </tr>
                            <tr>
                                <th>BONO FAST START</th>
                                <td>
                                    <asp:Label runat="server" ID="txtAfiliacion">0</asp:Label></td>
                            </tr>
                            <tr>
                                <th>BONO TIBURON</th>
                                <td>
                                    <asp:Label runat="server" ID="txtTiburon">0</asp:Label></td>
                            </tr>
                            <tr>
                                <th>BONO AREX</th>
                                <td>
                                    <asp:Label runat="server" ID="txtBronce">0</asp:Label></td>
                            </tr>
                            <tr>
                                <th>BONO GRATI</th>
                                <td>
                                    <asp:Label runat="server" ID="txtGrati">0</asp:Label></td>
                            </tr>
                            <tr>
                                <th>BONO AUTO</th>
                                <td>
                                    <asp:Label runat="server" ID="txtAuto">0</asp:Label></td>
                            </tr>
                        </table>
                    </div>
                    <div id="bloqueBono2" class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <table class="customers" style="margin-top: 50px; margin-bottom: 20px">
                            <tr class="tooltip2">
                                <th>BONO CONS. INTELIGENTE<span class="tooltip2-drop tooltip2-top">BONO CONSULTOR INTELIGENTE</span></th>
                                <td>
                                    <asp:Label runat="server" ID="txtCI">0</asp:Label></td>
                            </tr>
                            <tr>
                                <th data-tooltip="BONO CONSULTOR">BONO CONSULTOR</th>
                                <td>
                                    <asp:Label runat="server" ID="txtCon">0</asp:Label></td>
                            </tr>
                            <tr>
                                <th>BONO ESCOLARIDAD</th>
                                <td>
                                    <asp:Label runat="server" ID="txtEscolaridad">0</asp:Label></td>
                            </tr>
                            <tr>
                                <th>BONO MERCADEO</th>
                                <td>
                                    <asp:Label runat="server" ID="txtMercadeo">0</asp:Label></td>
                            </tr>
                            <tr>
                                <th>BONO MATRICIAL</th>
                                <td>
                                    <asp:Label runat="server" ID="txtMatricial">0</asp:Label></td>
                            </tr>
                            <tr>
                                <th>BONO FAMILIAR</th>
                                <td>
                                    <asp:Label runat="server" ID="txtFamiliar">0</asp:Label></td>
                            </tr>
                        </table>
                    </div>
                    <div class="col-xs-12" style="display: flex; justify-content: center">
                        <p style="margin-top: auto; margin-bottom: auto; margin-right: 10px; font-family: 'Dancing Script', cursive; font-size: 25px;">
                            Comisión total:
                        <asp:Label runat="server" ID="txtComiTotal">0</asp:Label>
                        </p>
                    </div>

                </div>
            </div>
            <div id="bloqueRow" class="row" style="margin-top: 50px;">
                <div id="bloqueBonoUnilevel" class="col-md-6" style="padding-left: 32px;">
                    <div class="card">
                        <div class="card-header card-header-icon" data-background-color="cadetblue">
                            <i class="material-icons">assignment</i>
                        </div>
                        <h3 class="card-title">Bono Unilevel</h3>
                        <div class="card-content">
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th class="text-center">Nivel</th>
                                            <th class="text-left">Monto</th>
                                            <th class="text-left">Porcentaje %</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-center">1</td>
                                            <td class="text-left">
                                            <asp:Label runat="server" ID="txtUNI1" /></td>
                                            <td class="text-left">%
                                            <asp:Label runat="server" ID="txtPORUNI1" /></td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">2</td>
                                            <td class="text-left">
                                            <asp:Label runat="server" ID="txtUNI2" /></td>
                                            <td class="text-left">%
                                            <asp:Label runat="server" ID="txtPORUNI2" /></td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">3</td>
                                            <td class="text-left">
                                            <asp:Label runat="server" ID="txtUNI3" /></td>
                                            <td class="text-left">%
                                            <asp:Label runat="server" ID="txtPORUNI3" /></td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">4</td>
                                            <td class="text-left">
                                            <asp:Label runat="server" ID="txtUNI4" /></td>
                                            <td class="text-left">%
                                            <asp:Label runat="server" ID="txtPORUNI4" /></td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">5</td>
                                            <td class="text-left">
                                            <asp:Label runat="server" ID="txtUNI5" /></td>
                                            <td class="text-left">%
                                            <asp:Label runat="server" ID="txtPORUNI5" /></td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">6</td>
                                            <td class="text-left">
                                            <asp:Label runat="server" ID="txtUNI6" /></td>
                                            <td class="text-left">%
                                            <asp:Label runat="server" ID="txtPORUNI6" /></td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">7</td>
                                            <td class="text-left">
                                            <asp:Label runat="server" ID="txtUNI7" /></td>
                                            <td class="text-left">%
                                            <asp:Label runat="server" ID="txtPORUNI7" /></td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">8</td>
                                            <td class="text-left">
                                            <asp:Label runat="server" ID="txtUNI8" /></td>
                                            <td class="text-left">%
                                            <asp:Label runat="server" ID="txtPORUNI8" /></td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">9</td>
                                            <td class="text-left">
                                            <asp:Label runat="server" ID="txtUNI9" /></td>
                                            <td class="text-left">%
                                            <asp:Label runat="server" ID="txtPORUNI9" /></td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">10</td>
                                            <td class="text-left">
                                            <asp:Label runat="server" ID="txtUNI10" /></td>
                                            <td class="text-left">%
                                            <asp:Label runat="server" ID="txtPORUNI10" /></td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">11</td>
                                            <td class="text-left">
                                            <asp:Label runat="server" ID="txtUNI11" /></td>
                                            <td class="text-left">%
                                            <asp:Label runat="server" ID="txtPORUNI11" /></td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">12</td>
                                            <td class="text-left">
                                            <asp:Label runat="server" ID="txtUNI12" /></td>
                                            <td class="text-left">%
                                            <asp:Label runat="server" ID="txtPORUNI12" /></td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">13</td>
                                            <td class="text-left">
                                            <asp:Label runat="server" ID="txtUNI13" /></td>
                                            <td class="text-left">%
                                            <asp:Label runat="server" ID="txtPORUNI13" /></td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">14</td>
                                            <td class="text-left">
                                            <asp:Label runat="server" ID="txtUNI14" /></td>
                                            <td class="text-left">%
                                            <asp:Label runat="server" ID="txtPORUNI14" /></td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">15</td>
                                            <td class="text-left">
                                            <asp:Label runat="server" ID="txtUNI15" /></td>
                                            <td class="text-left">%
                                            <asp:Label runat="server" ID="txtPORUNI15" /></td>
                                        </tr>
                                        <tr>
                                            <td colspan="1"></td>
                                            <td class="td-total">Monto Total:
                                            </td>
                                            <td class="td-price">
                                                <small></small><asp:Label runat="server" ID="txtSumaUnilevel" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="bloqueFastStart" class="col-md-6" style="padding-right: 32px;">
                    <div class="card">
                        <div class="card-header card-header-icon" data-background-color="cadetblue">
                            <i class="material-icons">assignment</i>
                        </div>
                        <h3 class="card-title">Fast Start</h3>
                        <div class="card-content">
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th class="text-center">Nivel</th>
                                            <th class="text-left">Monto </th>
                                            <th class="text-left">Porcentaje %</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-center">1</td>
                                            <td class="text-left">
                                            <asp:Label runat="server" ID="txtNivel1" /></td>
                                            <td class="text-left">%
                                            <asp:Label runat="server" ID="txtPORAFI1" /></td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">2</td>
                                            <td class="text-left">
                                            <asp:Label runat="server" ID="txtNivel2" /></td>
                                            <td class="text-left">%
                                            <asp:Label runat="server" ID="txtPORAFI2" /></td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">3</td>
                                            <td class="text-left">
                                            <asp:Label runat="server" ID="txtNivel3" /></td>
                                            <td class="text-left">%
                                            <asp:Label runat="server" ID="txtPORAFI3" /></td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">4</td>
                                            <td class="text-left">
                                            <asp:Label runat="server" ID="txtNivel4" /></td>
                                            <td class="text-left">%
                                            <asp:Label runat="server" ID="txtPORAFI4" /></td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">5</td>
                                            <td class="text-left">
                                            <asp:Label runat="server" ID="txtNivel5" /></td>
                                            <td class="text-left">%
                                            <asp:Label runat="server" ID="txtPORAFI5" /></td>
                                        </tr>
                                        <tr>
                                            <td colspan="1"></td>
                                            <td class="td-total">Monto Total:
                                            </td>
                                            <td class="td-price">
                                                <small></small><asp:Label runat="server" ID="txtSumaAfiliacion" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    

    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    
    <script src="../assets/js/jquery-ui.min.js" type="text/javascript"></script>
    <script src="../assets/js/material.min.js" type="text/javascript"></script>
    <script src="../assets/js/perfect-scrollbar.jquery.min.js" type="text/javascript"></script>
    
    <script src="assets/js/chartist.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.min.js"></script>
    <script src="js/Comisiones4.js?v8"></script>
    <script src="assets/js/jquery.datatables.js"></script>
    <script src="assets/js/dataTables.bootstrap.js"></script>
    <script src="../assets/js/jquery.tagsinput.js"></script>
    <script src="../assets/js/material-dashboard.js"></script>

    <script>
        $(".js-example-templating").select2({
        });

        window.onload = function () {
            if (window.innerWidth < 1148) {
                //var naranja = document.getElementById("navbonificiones");
                //naranja.classList.add('menu__item--active2');
                document.getElementById("clicBonif").style.fontWeight = '700';

                document.getElementById("idSubBonificaciones").style.fontWeight = '700';
            }
            else {
                document.getElementById("clicBonif").style.color = 'white';
                document.getElementById("clicBonif").style.borderBottom = '3px solid white';

                document.getElementById("idSubBonificaciones").style.fontWeight = '700';
                document.getElementById("idSubBonificaciones").style.color = '#fff';

            }
        }

        $(document).ready(function () {
            demo2.initCharts();
        });
    </script>
</asp:Content>
