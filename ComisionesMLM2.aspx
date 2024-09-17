<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="ComisionesMLM2.aspx.cs" Inherits="SantaNaturaNetworkV3.ComisionesMLM2" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <!--Posicionamiento de ciertos elementos-->
    <link href="css/proyecto2/demoComisionesMLM.css?Fv51" rel="stylesheet" />
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

            .customers td {
                min-width: 130px;
            }

            .customers td, .customers th {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: center
            }

            .customers tr:nth-child(even) {
                background-color: var(--Light-orange);
            }

            .customers tr:hover {
                background-color: var(--Medium-orange);
            }

            .customers th {
                padding-top: 12px;
                padding-bottom: 12px;
                background-color: var(--Primary-orange);
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
                bottom: calc(100% + 1px); /* 5px is the size of the arrow */
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

            .select2-container--default .select2-selection--single{
                border: 1px solid var(--Primary-orange);
                height: fit-content;
            }
            .select2-container--default .select2-selection--single .select2-selection__rendered{
                display: flex;
                justify-content: flex-start;
                -webkit-appearance: none;
                /*background-image: url(../../img/Arrowhead-Down-01.png);
                background-position: right 15px top 50%;
                background-repeat: no-repeat;
                background-size: 15px;*/
                background-color: #fff;
                border-radius: 4px;
                color: var(--Primary-orange);
                padding: 6px 20px 6px 10px;
                width: 100%;
                max-width: 249px;
                outline: none;
                line-height: 1;
            }
            .select2-container--default .select2-selection--single .select2-selection__arrow b{
                border-color: var(--Primary-orange) transparent transparent transparent;
                transform: translateY(-50%);
            }
            .bloqueDetalleComision .bloqueDetalleComision__left .divConsultarXPaisPeriodo .divConsultarXPaisPeriodo__consultar .btnObtener{
                background-color: var(--Primary-orange);
                color: #fff;
                box-shadow: 4px 4px 4px 0px var(--Light-orange);
                transition: .3s ease transform;
            }
            .bloqueDetalleComision .bloqueDetalleComision__left .divConsultarXPaisPeriodo .divConsultarXPaisPeriodo__consultar .btnObtener:hover{
                transform: scale(1.05);
                background-color: #f1b717;
            }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <link href="assets/css/material-dashboard.css?v1" rel="stylesheet" />
    <link href="assets/css/google-roboto-300-700.css" rel="stylesheet" />

    <div class="bloqueDetalleComision" id="bloqueDetalleComision" style="flex-direction: column">
        <div class="bloqueDetalleComision__left">
            <div class="divConsultarXPaisPeriodo">
                <div class="divConsultarXPaisPeriodo__pais">
                    <label>País:</label>
                    <asp:DropDownList runat="server" ID="ddlPais" CssClass="form-control js-example-templating" Width="235px" />
                </div>
                <div class="divConsultarXPaisPeriodo__periodo">
                    <label>Período:</label>
                    <asp:DropDownList runat="server" ID="ddlPeriodo" CssClass="form-control js-example-templating" Width="235px" />
                </div>
                <div class="divConsultarXPaisPeriodo__consultar">
                    <button type="button" id="btnObtenerPeriodo" class="btnObtener">Consultar</button>
                </div>
            </div>

            <div class="divTablasDetalleComision">
                <div class="divTablasDetalleComision__Multinivel">
                    <h1 id="DetalleDeComision" class="titulo">Detalle Comisión Multinivel
                    </h1>
                    <div id="bloqueBono1" style="display:none;">
                        <table class="customers">
                            <tr>
                                <th style="padding: 5px">PERIODO</th>
                                <td>
                                    <asp:Label runat="server" ID="txtNomPeriodo"></asp:Label></td>
                            </tr>
                            <tr>
                                <th style="padding: 5px">BONO UNILEVEL</th>
                                <td style="padding: 0">
                                    <asp:Label runat="server" ID="txtUnilevel">0</asp:Label></td>
                            </tr>
                            <tr>
                                <th style="padding: 5px">BONO FAST START</th>
                                <td style="padding: 0">
                                    <asp:Label runat="server" ID="txtAfiliacion">0</asp:Label></td>
                            </tr>
                            <tr>
                                <th style="padding: 5px">BONO TIBURON</th>
                                <td style="padding: 0">
                                    <asp:Label runat="server" ID="txtTiburon">0</asp:Label></td>
                            </tr>
                            <tr>
                                <%--<th style="padding: 5px"  data-tooltip="✓ Este bono está vigente el primer periodo de Julio.
✓ Para ganar el Bono AREX, patrocina 2 Pack Millonarios.
✓ Puedes ganar los bonos arex que tú te propongas.
✓ Para ganar este bono, no participan las afiliaciones 
   consideradas en tu bono Tiburón (socio nuevo).
✓ El monto del Bono arex: S/ 150.00
✓ El pago es con las comisiones del mes de Julio.">BONO AREX</th>--%>
                                <th style="padding: 5px">BONO AREX</th>
                                <td style="padding: 0">
                                    <asp:Label runat="server" ID="txtBronce">0</asp:Label></td>
                            </tr>
                            <tr>
                                <th style="padding: 5px">BONO GRATI</th>
                                <td style="padding: 0">
                                    <asp:Label runat="server" ID="txtGrati">0</asp:Label></td>
                            </tr>
                            <tr>
                                <th style="padding: 5px">BONO AUTO</th>
                                <td style="padding: 0">
                                    <asp:Label runat="server" ID="txtAuto">0</asp:Label></td>
                            </tr>
                            <tr>
                                <th style="padding: 5px" data-tooltip="BONO CONSULTOR INTELIGENTE">BONO CONS. INTELIGENTE</th>
                                <td style="padding: 0">
                                    <asp:Label runat="server" ID="txtCI">0</asp:Label></td>
                            </tr>
                            <tr>
                                <th style="padding: 5px">BONO CONSULTOR</th>
                                <td style="padding: 0">
                                    <asp:Label runat="server" ID="txtCon">0</asp:Label></td>
                            </tr>
                            <tr>
                                <th style="padding: 5px">BONO ESCOLARIDAD</th>
                                <td style="padding: 0">
                                    <asp:Label runat="server" ID="txtEscolaridad">0</asp:Label></td>
                            </tr>
                            <tr>
                                <th style="padding: 5px">BONO MERCADEO</th>
                                <td style="padding: 0">
                                    <asp:Label runat="server" ID="txtMercadeo">0</asp:Label></td>
                            </tr>
                            <tr>
                                <th style="padding: 5px">BONO MATRICIAL</th>
                                <td style="padding: 0">
                                    <asp:Label runat="server" ID="txtMatricial">0</asp:Label></td>
                            </tr>
                            <tr>
                                <th style="padding: 5px">BONO FAMILIAR</th>
                                <td style="padding: 0">
                                    <asp:Label runat="server" ID="txtFamiliar">0</asp:Label></td>
                            </tr>
                        </table>
                    </div>
                    <div id="bloqueNuevoBono">
                        <table class="customers">
                            <tr>
                                <th style="padding: 5px">PERIODO</th>
                                <td>
                                    <asp:Label runat="server" ID="lblPeriodoNuevo"></asp:Label></td>
                            </tr>
                            <tr>
                                <th style="padding: 5px">BONO AFILIA</th>
                                <td style="padding: 0">
                                    <asp:Label runat="server" ID="lblBonoAfilia">0</asp:Label></td>
                            </tr>
                            <tr>
                                <th style="padding: 5px">BONO LIDERAZGO</th>
                                <td style="padding: 0">
                                    <asp:Label runat="server" ID="lblBonoLiderazgo">0</asp:Label></td>
                            </tr>
                            <tr>
                                <th style="padding: 5px">BONO GENERACIONAL</th>
                                <td style="padding: 0">
                                    <asp:Label runat="server" ID="lblBonoGeneracional">0</asp:Label></td>
                            </tr>
                            <tr>
                                <th style="padding: 5px">BONO SUPERGENERACIONAL</th>
                                <td style="padding: 0">
                                    <asp:Label runat="server" ID="lblBonoSuperGeneracional">0</asp:Label></td>
                            </tr>
                            <tr>
                                <th style="padding: 5px">BONO MERCADEO</th>
                                <td style="padding: 0">
                                    <asp:Label runat="server" ID="lblBonoMercadeo">0</asp:Label></td>
                            </tr>
                            <tr>
                                <th style="padding: 5px">BONO MATRICIAL</th>
                                <td style="padding: 0">
                                    <asp:Label runat="server" ID="lblBonoMatricial">0</asp:Label></td>
                            </tr>
                            <tr>
                                <th style="padding: 5px">BONO PERMANENCIA</th>
                                <td style="padding: 0">
                                    <asp:Label runat="server" ID="lblBonoPermanencia">0</asp:Label></td>
                            </tr>
                            <tr>
                                <th style="padding: 5px">BONO AGUINALDO</th>
                                <td style="padding: 0">
                                    <asp:Label runat="server" ID="lblBonoAguinaldo">0</asp:Label></td>
                            </tr>
                            <tr>
                                <th style="padding: 5px">BONO VIAJE NACIONAL</th>
                                <td style="padding: 0">
                                    <asp:Label runat="server" ID="lblBonoViajeNacional">0</asp:Label></td>
                            </tr>
                            <tr>
                                <th style="padding: 5px">BONO VIAJE INTERNACIONAL</th>
                                <td style="padding: 0">
                                    <asp:Label runat="server" ID="lblBonoViajeInternacional">0</asp:Label></td>
                            </tr>
                            <tr>
                                <th style="padding: 5px">BONO AUTO</th>
                                <td style="padding: 0">
                                    <asp:Label runat="server" ID="lblBonoAuto">0</asp:Label></td>
                            </tr>
                        </table>
                    </div>
                    <div class="comisionTotal">
                        <p>
                            Comisión MLM:
                            <asp:Label runat="server" ID="txtComiTotalNuevo">0</asp:Label>
                        </p>
                    </div>
                </div>

                <div class="bloqueFastStartAndBonoUnilevel" id="antiguoDetalleComision" style="display:none;">

                    <div class="bloqueFastStart" id="bloqueFastStart">
                        <div class="card" style="margin: 37px 0;">
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
                                                    <small></small>
                                                    <asp:Label runat="server" ID="txtSumaAfiliacion" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="bloqueBonoUnilevel" id="bloqueBonoUnilevel">
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
                                                <td class="text-center">16</td>
                                                <td class="text-left">
                                                    <asp:Label runat="server" ID="txtUNI16" /></td>
                                                <td class="text-left">%
                                                <asp:Label runat="server" ID="txtPORUNI16" /></td>
                                            </tr>
                                            <tr>
                                                <td class="text-center">17</td>
                                                <td class="text-left">
                                                    <asp:Label runat="server" ID="txtUNI17" /></td>
                                                <td class="text-left">%
                                                <asp:Label runat="server" ID="txtPORUNI17" /></td>
                                            </tr>
                                            <tr>
                                                <td class="text-center">18</td>
                                                <td class="text-left">
                                                    <asp:Label runat="server" ID="txtUNI18" /></td>
                                                <td class="text-left">%
                                                <asp:Label runat="server" ID="txtPORUNI18" /></td>
                                            </tr>
                                            <tr>
                                                <td class="text-center">19</td>
                                                <td class="text-left">
                                                    <asp:Label runat="server" ID="txtUNI19" /></td>
                                                <td class="text-left">%
                                                <asp:Label runat="server" ID="txtPORUNI19" /></td>
                                            </tr>
                                            <tr>
                                                <td colspan="1"></td>
                                                <td class="td-total">Monto Total:
                                                </td>
                                                <td class="td-price">
                                                    <small></small>
                                                    <asp:Label runat="server" ID="txtSumaUnilevel" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bloqueFastStartAndBonoUnilevel" id="nuevoDetalleComision">

                    <div class="bloqueFastStart">
                        <div class="card" style="margin: 37px 0;">
                            <div class="card-header card-header-icon" data-background-color="cadetblue">
                                <i class="material-icons">assignment</i>
                            </div>
                            <h3 class="card-title">Bono Afilia</h3>
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
                                                    <asp:Label runat="server" ID="lblDetalleMontoAfilia1" /></td>
                                                <td class="text-left">%
                                                <asp:Label runat="server" ID="lblDetallePorcentajeAfilia1" /></td>
                                            </tr>
                                            <tr>
                                                <td class="text-center">2</td>
                                                <td class="text-left">
                                                    <asp:Label runat="server" ID="lblDetalleMontoAfilia2" /></td>
                                                <td class="text-left">%
                                                <asp:Label runat="server" ID="lblDetallePorcentajeAfilia2" /></td>
                                            </tr>
                                            <tr>
                                                <td colspan="1"></td>
                                                <td class="td-total">Monto Total:
                                                </td>
                                                <td class="td-price">
                                                    <small></small>
                                                    <asp:Label runat="server" ID="lblMontoTotalDetalleAfilia" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="bloqueFastStart">
                        <div class="card">
                            <div class="card-header card-header-icon" data-background-color="cadetblue">
                                <i class="material-icons">assignment</i>
                            </div>
                            <h3 class="card-title">Bono Liderazgo</h3>
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
                                                    <asp:Label runat="server" ID="lblDetalleMontoLider1" /></td>
                                                <td class="text-left">%
                                                <asp:Label runat="server" ID="lblDetallePorcentajeLider1" /></td>
                                            </tr>
                                            <tr>
                                                <td class="text-center">2</td>
                                                <td class="text-left">
                                                    <asp:Label runat="server" ID="lblDetalleMontoLider2" /></td>
                                                <td class="text-left">%
                                                <asp:Label runat="server" ID="lblDetallePorcentajeLider2" /></td>
                                            </tr>
                                            <tr>
                                                <td class="text-center">3</td>
                                                <td class="text-left">
                                                    <asp:Label runat="server" ID="lblDetalleMontoLider3" /></td>
                                                <td class="text-left">%
                                                <asp:Label runat="server" ID="lblDetallePorcentajeLider3" /></td>
                                            </tr>
                                            <tr>
                                                <td class="text-center">4</td>
                                                <td class="text-left">
                                                    <asp:Label runat="server" ID="lblDetalleMontoLider4" /></td>
                                                <td class="text-left">%
                                                <asp:Label runat="server" ID="lblDetallePorcentajeLider4" /></td>
                                            </tr>
                                            <tr>
                                                <td colspan="1"></td>
                                                <td class="td-total">Monto Total:
                                                </td>
                                                <td class="td-price">
                                                    <small></small>
                                                    <asp:Label runat="server" ID="lblMontoTotalDetalleLider" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bloqueFastStart">
                        <div class="card">
                            <div class="card-header card-header-icon" data-background-color="cadetblue">
                                <i class="material-icons">assignment</i>
                            </div>
                            <h3 class="card-title">Bono Generacional</h3>
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
                                                <td class="text-center">0</td>
                                                <td class="text-left">
                                                    <asp:Label runat="server" ID="lblDetalleMontoGene1" /></td>
                                                <td class="text-left">%
                                                <asp:Label runat="server" ID="lblDetallePorcentajeGene1" /></td>
                                            </tr>
                                            <tr>
                                                <td class="text-center">1</td>
                                                <td class="text-left">
                                                    <asp:Label runat="server" ID="lblDetalleMontoGene2" /></td>
                                                <td class="text-left">%
                                                <asp:Label runat="server" ID="lblDetallePorcentajeGene2" /></td>
                                            </tr>
                                            <tr>
                                                <td class="text-center">2</td>
                                                <td class="text-left">
                                                    <asp:Label runat="server" ID="lblDetalleMontoGene3" /></td>
                                                <td class="text-left">%
                                                <asp:Label runat="server" ID="lblDetallePorcentajeGene3" /></td>
                                            </tr>
                                            <tr>
                                                <td colspan="1"></td>
                                                <td class="td-total">Monto Total:
                                                </td>
                                                <td class="td-price">
                                                    <small></small>
                                                    <asp:Label runat="server" ID="lblMontoTotalDetalleGene" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bloqueFastStart">
                        <div class="card">
                            <div class="card-header card-header-icon" data-background-color="cadetblue">
                                <i class="material-icons">assignment</i>
                            </div>
                            <h3 class="card-title">Bono SuperGeneracional</h3>
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
                                                <td class="text-center">0</td>
                                                <td class="text-left">
                                                    <asp:Label runat="server" ID="lblDetalleMontoSuperGene1" /></td>
                                                <td class="text-left">%
                                                <asp:Label runat="server" ID="lblDetallePorcentajeSuperGene1" /></td>
                                            </tr>
                                            <tr>
                                                <td class="text-center">1</td>
                                                <td class="text-left">
                                                    <asp:Label runat="server" ID="lblDetalleMontoSuperGene2" /></td>
                                                <td class="text-left">%
                                                <asp:Label runat="server" ID="lblDetallePorcentajeSuperGene2" /></td>
                                            </tr>
                                            <tr>
                                                <td colspan="1"></td>
                                                <td class="td-total">Monto Total:
                                                </td>
                                                <td class="td-price">
                                                    <small></small>
                                                    <asp:Label runat="server" ID="lblMontoTotalDetalleSuperGene" />
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

        <div class="bloqueDetalleComision__right" id="bloqueRow">

            <div class="bloqueDetalleComision__right__detalleComiVentaDirecta" style="display:none;">

                <div class="divTablasDetalleComision__VentaDirecta">
                    <h1 id="DetalleDeComisionVentaDirecta" class="titulo">Detalle Comisión Venta Directa
                    </h1>
                    <div id="bloqueBono2">
                        <table class="customers">
                            <tr>
                                <th>PERIODO</th>
                                <td>
                                    <asp:Label runat="server" ID="txtNomPeriodoEnVentaDirecta"></asp:Label></td>
                            </tr>
                            <tr>
                                <th>Premio al Esfuerzo</th>
                                <td>
                                    <asp:Label runat="server" ID="txtPremioAlEsfuerzo">Califica</asp:Label></td>
                            </tr>
                            <tr>
                                <th>Premio a la Constancia</th>
                                <td>
                                    <asp:Label runat="server" ID="txtPremioAlaConstancia">No Califica</asp:Label></td>
                            </tr>
                            <tr>
                                <th>Bono Escolaridad</th>
                                <td>
                                    <asp:Label runat="server" ID="txtBonoEscolaridad">0</asp:Label></td>
                            </tr>
                            <tr>
                                <th>Bono Invita y Gana</th>
                                <td>
                                    <asp:Label runat="server" ID="txtBonoInvitaYGana">0</asp:Label></td>
                            </tr>
                            <tr>
                                <th>Bono Unilevel Venta Directa</th>
                                <td>
                                    <asp:Label runat="server" ID="txtBonoUnilevelVentaDirecta">0</asp:Label></td>
                            </tr>
                        </table>
                    </div>
                    <div class="comisionTotal">
                        <p>
                            Comisión VD:
                            <asp:Label runat="server" ID="Label14">0</asp:Label>
                        </p>
                    </div>
                </div>
            </div>

            <div class="bloqueBonoUnilevelVentaDirecta" id="bloqueBonoUnilevelVentaDirecta" style="display:none;">
                <div class="card">
                    <div class="card-header card-header-icon" data-background-color="cadetblue">
                        <i class="material-icons">assignment</i>
                    </div>
                    <h3 class="card-title">Bono Unilevel Venta Directa</h3>
                    <div class="card-content">
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th class="text-center">Nivel MLM</th>
                                        <th class="text-left">Monto</th>
                                        <th class="text-left">Porcentaje %</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-center">0</td>
                                        <td class="text-left">
                                            <asp:Label runat="server" ID="Label2" /></td>
                                        <td class="text-left">%
                                            <asp:Label runat="server" ID="Label3" /></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">1</td>
                                        <td class="text-left">
                                            <asp:Label runat="server" ID="Label4" /></td>
                                        <td class="text-left">%
                                            <asp:Label runat="server" ID="Label5" /></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">2</td>
                                        <td class="text-left">
                                            <asp:Label runat="server" ID="Label6" /></td>
                                        <td class="text-left">%
                                            <asp:Label runat="server" ID="Label7" /></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">3</td>
                                        <td class="text-left">
                                            <asp:Label runat="server" ID="Label8" /></td>
                                        <td class="text-left">%
                                            <asp:Label runat="server" ID="Label9" /></td>
                                    </tr>
                                    <tr>
                                        <td colspan="1"></td>
                                        <td class="td-total">Monto Total:
                                        </td>
                                        <td class="td-price">
                                            <small></small>
                                            <asp:Label runat="server" ID="Label41" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="comisionGlobal">
                <p>
                    Comisión:
                            <asp:Label runat="server" ID="txtSumaTotal">0</asp:Label>
                </p>
                <span class="igv">
                    IGV: <span id="valorIGV"></span>
                </span>
                <p class="parrafoImportante">
                    Importante: Para los empresarios que se encuentren bajo la ley de exoneración del IGV (ley 27037) en zona de selva (Loreto, Amazonas, San Martín, Ucayali y Madre de Dios) solo facturar el valor "Comisión" (no incluir el IGV en su factura), en caso no se encontrarán en esta zona exonerada del IGV facturar la comisión más el IGV.
                </p>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.min.js"></script>

    <script src="assets/js/chartist.min.js"></script>
    <script src="assets/js/dataTables.bootstrap.js"></script>
    <script src="../assets/js/jquery-ui.min.js" type="text/javascript"></script>
    <script src="assets/js/jquery.datatables.js"></script>
    <script src="../assets/js/jquery.tagsinput.js"></script>
    <script src="../assets/js/material-dashboard.js"></script>
    <script src="../assets/js/material.min.js" type="text/javascript"></script>
    <script src="../assets/js/perfect-scrollbar.jquery.min.js" type="text/javascript"></script>

    <script src="js/Comisiones4.js?Fv55"></script>

    <script>
        $(".js-example-templating").select2({
        });

        window.onload = function () {
            if (window.innerWidth < 1148) {
                //var naranja = document.getElementById("navbonificiones");
                //naranja.classList.add('menu__item--active2');
                document.getElementById("clicBonif").style.fontWeight = '700';

                document.getElementById("idSubComisionesMLM").style.fontWeight = "700";
            }
            else {
                document.getElementById("clicBonif").style.color = 'var(--Primary-green)';
                document.getElementById("clicBonif").style.borderBottom = '3px solid var(--Primary-green)';
                document.getElementById("clicBonif").style.fontWeight = "600";

                document.getElementById("idSubMenuVerComi").style.fontWeight = "700";
                document.getElementById("idSubMenuVerComi").style.color = "#fff";
            }
        }

        $(document).ready(function () {
            demo2.initCharts();
        });
    </script>
</asp:Content>
