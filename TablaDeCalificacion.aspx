<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="TablaDeCalificacion.aspx.cs" Inherits="SantaNaturaNetwork.TablaDeCalificacion" ClientIDMode="Static" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="css/datatables/dataTables.bootstrap.css" rel="stylesheet" />
    <link href="css/AdminLTE-v1.css" rel="stylesheet" type="text/css" />
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

    <style>
        .table-dark {
            color: #fff;
            background-color: #212529;
        }

        .ddlTablaDeCalificacion {
            border-radius: 4px 5px;
        }

        .lblMedioDePago {
            margin-left: auto
        }

        .table > tbody > tr > td, .table > tbody > tr > th, .table > tfoot > tr > td,
        .table > tfoot > tr > th, .table > thead > tr > td, .table > thead > tr > th {
            vertical-align: middle;
        }

        .cross {
            display: none;
        }

        .comple {
            display: none;
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
            width: 100%;
            height: 100%;
            z-index: 9999;
            background: url(img/loadingPageSantanatura.gif) center no-repeat #fff;
        }
    </style>

    <link href="css/proyecto2/tienda.css" rel="stylesheet" />
    <link href="css/proyecto2/vendors/elegant-icon/style.css" rel="stylesheet" />

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <h2 style="text-align: center; margin-top: 100px">TABLA DE CALIFICACIÓN</h2>
    <div id="page_loader" style="display: none" class="se-pre-con"></div>
    <div style="border: 1px solid">
        <br />
        <div class="row">
            <div class="col-md-12">
                    <div class="box-body table-responsive">
                        <div>
                            <div class="box-body">
                                <div class="form-group">
                                </div>
                            </div>
                        </div>
                        <table id="tbl_downline" class="table table-dark table-bordered table-hover text-center col-md-11" style="background-color: #5e7892;">
                            <thead>
                                <tr class="bg-blue">
                                    <th style="font-size: 1.4rem"></th>
                                    <th style="font-size: 1.4rem">ACTUAL</th>
                                    <th style="font-size: 1.4rem">EMPRENDEDOR</th>
                                    <th style="font-size: 1.4rem">BRONCE</th>
                                    <th style="font-size: 1.4rem">PLATA</th>
                                    <th style="font-size: 1.4rem">ORO</th>
                                    <th style="font-size: 1.4rem">ZAFIRO</th>
                                    <th style="font-size: 1.4rem">RUBÍ</th>
                                    <th style="font-size: 1.4rem">DIAMANTE</th>
                                    <th style="font-size: 1.4rem">D.DIAMANTE</th>
                                    <th style="font-size: 1.4rem">T.DIAMANTE</th>
                                    <th style="font-size: 1.4rem">D. MILLONARIO</th>
                                    <th style="font-size: 1.4rem">DD. MILLONARIO</th>
                                    <th style="font-size: 1.4rem">TD. MILLONARIO</th>
                                    <th style="font-size: 1.4rem">D. IMPERIAL</th>
                                    <th style="font-size: 1.4rem">IMPERIAL ELITE</th>
                                    <th style="font-size: 1.4rem">IMPERIAL FUNDADOR</th>
                                    <th style="font-size: 1.4rem">IMPERIAL CORONA</th>
                                    <th style="font-size: 1.4rem">ROYAL</th>
                                </tr>
                            </thead>
                            <tbody id="tbl_body_table">
                                <tr>
                                    <th scope="row">REQUISITOS</th>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <img src="imagenes/pines/1-Bronce-50x50.png" style="height: 50px"></td>
                                    <td>
                                        <img src="imagenes/pines/2-Plata-50x50.png" style="height: 50px"></td>
                                    <td>
                                        <img src="imagenes/pines/3-Oro-50x50.png" style="height: 50px"></td>
                                    <td>
                                        <img src="imagenes/pines/4-Zafiro-50x50.png" style="height: 50px"></td>
                                    <td>
                                        <img src="imagenes/pines/5-Rubí-50x50.png" style="height: 50px"></td>
                                    <td>
                                        <img src="imagenes/pines/6-Diamante-50x50.png" style="height: 50px"></td>
                                    <td>
                                        <img src="imagenes/pines/7-DDiamante-50x50.png" style="height: 50px"></td>
                                    <td>
                                        <img src="imagenes/pines/8-TDiamante-50x50.png" style="height: 50px"></td>
                                    <td>
                                        <img src="imagenes/pines/9-DiamanteMillonario-50x50.png" style="height: 50px"></td>
                                    <td>
                                        <img src="imagenes/pines/10-DDiamanteMillonario-50x50.png" style="height: 50px"></td>
                                    <td>
                                        <img src="imagenes/pines/11-TDiamanteMillonario-50x50.png" style="height: 50px"></td>
                                    <td>
                                        <img src="imagenes/pines/12-DiamanteImperial-50x50.png" style="height: 50px"></td>
                                    <td>
                                        <img src="imagenes/pines/12-DiamanteImperial-50x50.png" style="height: 50px"></td>
                                    <td>
                                        <img src="imagenes/pines/12-DiamanteImperial-50x50.png" style="height: 50px"></td>
                                    <td>
                                        <img src="imagenes/pines/12-DiamanteImperial-50x50.png" style="height: 50px"></td>
                                    <td>
                                        <img src="imagenes/pines/12-DiamanteImperial-50x50.png" style="height: 50px"></td>
                                </tr>
                                <tr class="bg-blue">
                                    <th scope="row">PUNTOS PERSONALES</th>
                                    <td id="pts"></td>
                                    <td>20 ptos.&nbsp;<i id="xEmpA" class="fas fa-times"></i><i id="cEmpA" class="fas fa-check"></i></td>
                                    <td>20 ptos.&nbsp;<i id="xBroA" class="fas fa-times"></i><i id="cBroA" class="fas fa-check"></i></td>
                                    <td>40 ptos.&nbsp;<i id="xPlaA" class="fas fa-times"></i><i id="cPlaA" class="fas fa-check"></i></td>
                                    <td>40 ptos.&nbsp;<i id="xOroA" class="fas fa-times"></i><i id="cOroA" class="fas fa-check"></i></td>
                                    <td>40 ptos.&nbsp;<i id="xZafA" class="fas fa-times"></i><i id="cZafA" class="fas fa-check"></i></td>
                                    <td>40 ptos.&nbsp;<i id="xRubA" class="fas fa-times"></i><i id="cRubA" class="fas fa-check"></i></td>
                                    <td>60 ptos.&nbsp;<i id="xDiaA" class="fas fa-times"></i><i id="cDiaA" class="fas fa-check"></i></td>
                                    <td>60 ptos.&nbsp;<i id="xDDiA" class="fas fa-times"></i><i id="cDDiA" class="fas fa-check"></i></td>
                                    <td>60 ptos.&nbsp;<i id="xTDiA" class="fas fa-times"></i><i id="cTDiA" class="fas fa-check"></i></td>
                                    <td>80 ptos.&nbsp;<i id="xDMiA" class="fas fa-times"></i><i id="cDMiA" class="fas fa-check"></i></td>
                                    <td>80 ptos.&nbsp;<i id="xDDMA" class="fas fa-times"></i><i id="cDDMA" class="fas fa-check"></i></td>
                                    <td>80 ptos.&nbsp;<i id="xTDMA" class="fas fa-times"></i><i id="cTDMA" class="fas fa-check"></i></td>
                                    <td>100 ptos.&nbsp;<i id="xImpA" class="fas fa-times"></i><i id="cImpA" class="fas fa-check"></i></td>
                                    <td>100 ptos.&nbsp;<i id="xEliteA" class="fas fa-times"></i><i id="cEliteA" class="fas fa-check"></i></td>
                                    <td>100 ptos.&nbsp;<i id="xFundA" class="fas fa-times"></i><i id="cFundA" class="fas fa-check"></i></td>
                                    <td>100 ptos.&nbsp;<i id="xCoronaA" class="fas fa-times"></i><i id="cCoronaA" class="fas fa-check"></i></td>
                                    <td>150 ptos.&nbsp;<i id="xRoyalA" class="fas fa-times"></i><i id="cRoyalA" class="fas fa-check"></i></td>
                                </tr>
                                <tr id="proceso">
                                    <th scope="row">ACTIVOS DIRECTOS</th>
                                    <td id="CAN"></td>
                                    <td>0&nbsp;<i class="fas fa-check comple"></i></td>
                                    <td>2&nbsp;<i class="fas fa-times cross"></i><i class="fas fa-check comple"></i></td>
                                    <td>2&nbsp;<i class="fas fa-times cross"></i><i class="fas fa-check comple"></i></td>
                                    <td>2&nbsp;<i class="fas fa-times cross"></i><i class="fas fa-check comple"></i></td>
                                    <td>2&nbsp;<i class="fas fa-times cross"></i><i class="fas fa-check comple"></i></td>
                                    <td>2&nbsp;<i class="fas fa-times cross"></i><i class="fas fa-check comple"></i></td>
                                    <td>2&nbsp;<i class="fas fa-times cross"></i><i class="fas fa-check comple"></i></td>
                                    <td>2&nbsp;<i class="fas fa-times cross"></i><i class="fas fa-check comple"></i></td>
                                    <td>2&nbsp;<i class="fas fa-times cross"></i><i class="fas fa-check comple"></i></td>
                                    <td>2&nbsp;<i class="fas fa-times cross"></i><i class="fas fa-check comple"></i></td>
                                    <td>2&nbsp;<i class="fas fa-times cross"></i><i class="fas fa-check comple"></i></td>
                                    <td>2&nbsp;<i class="fas fa-times cross"></i><i class="fas fa-check comple"></i></td>
                                    <td>2&nbsp;<i class="fas fa-times cross"></i><i class="fas fa-check comple"></i></td>
                                    <td>2&nbsp;<i class="fas fa-times cross"></i><i class="fas fa-check comple"></i></td>
                                    <td>2&nbsp;<i class="fas fa-times cross"></i><i class="fas fa-check comple"></i></td>
                                    <td>2&nbsp;<i class="fas fa-times cross"></i><i class="fas fa-check comple"></i></td>
                                    <td>2&nbsp;<i class="fas fa-times cross"></i><i class="fas fa-check comple"></i></td>
                                </tr>
                                <tr class="bg-blue">

                                    <th scope="row">VOLÚMEN CALIFICACIÓN (VQ)</th>
                                    <td id="VQ"></td>
                                    <td>0 ptos.&nbsp;   <i class="fas fa-check"></i></td>
                                    <td>800 ptos.&nbsp; <i id="xBroVC" class="fas fa-times"></i><i id="cBroVC" class="fas fa-check"></i></td>
                                    <td>1500 ptos.&nbsp;<i id="xPlaVC" class="fas fa-times"></i><i id="cPlaVC" class="fas fa-check"></i></td>
                                    <td>3K ptos.&nbsp;  <i id="xOroVC" class="fas fa-times"></i><i id="cOroVC" class="fas fa-check"></i></td>
                                    <td>6K ptos.&nbsp;  <i id="xZafVC" class="fas fa-times"></i><i id="cZafVC" class="fas fa-check"></i></td>
                                    <td>10K ptos.&nbsp; <i id="xRubVC" class="fas fa-times"></i><i id="cRubVC" class="fas fa-check"></i></td>
                                    <td>20K ptos.&nbsp; <i id="xDiaVC" class="fas fa-times"></i><i id="cDiaVC" class="fas fa-check"></i></td>
                                    <td>40K ptos.&nbsp; <i id="xDDiVC" class="fas fa-times"></i><i id="cDDiVC" class="fas fa-check"></i></td>
                                    <td>80K ptos.&nbsp; <i id="xTDiVC" class="fas fa-times"></i><i id="cTDiVC" class="fas fa-check"></i></td>
                                    <td>160K ptos.&nbsp;<i id="xDMiVC" class="fas fa-times"></i><i id="cDMiVC" class="fas fa-check"></i></td>
                                    <td>300K ptos.&nbsp;<i id="xDDMVC" class="fas fa-times"></i><i id="cDDMVC" class="fas fa-check"></i></td>
                                    <td>500K ptos.&nbsp;<i id="xTDMVC" class="fas fa-times"></i><i id="cTDMVC" class="fas fa-check"></i></td>
                                    <td>1M ptos.&nbsp;  <i id="xImpVC" class="fas fa-times"></i><i id="cImpVC" class="fas fa-check"></i></td>
                                    <td>2.5M ptos.&nbsp;  <i id="xEliteVC" class="fas fa-times"></i><i id="cEliteVC" class="fas fa-check"></i></td>
                                    <td>5M ptos.&nbsp;  <i id="xFundaVC" class="fas fa-times"></i><i id="cFundaVC" class="fas fa-check"></i></td>
                                    <td>10M ptos.&nbsp;  <i id="xCoronaVC" class="fas fa-times"></i><i id="cCoronaVC" class="fas fa-check"></i></td>
                                    <td>20M ptos.&nbsp;  <i id="xRoyalVC" class="fas fa-times"></i><i id="cRoyalVC" class="fas fa-check"></i></td>
                                </tr>
                                <tr>
                                    <th scope="row">LÍNEAS CALIFICADAS</th>
                                    <td></td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>2 Bronce&nbsp;    <i id="xZafLC" class="fas fa-times"></i><i id="cZafLC" class="fas fa-check"></i></td>
                                    <td>2 Plata&nbsp;     <i id="xRubLC" class="fas fa-times"></i><i id="cRubLC" class="fas fa-check"></i></td>
                                    <td>3 Oro&nbsp;       <i id="xDiaLC" class="fas fa-times"></i><i id="cDiaLC" class="fas fa-check"></i></td>
                                    <td>3 Zafiro&nbsp;    <i id="xDDiLC" class="fas fa-times"></i><i id="cDDiLC" class="fas fa-check"></i></td>
                                    <td>3 Rubí&nbsp;      <i id="xTDiLC" class="fas fa-times"></i><i id="cTDiLC" class="fas fa-check"></i></td>
                                    <td>3 Diamante&nbsp;<i id="xDMiLC" class="fas fa-times"></i><i id="cDMiLC" class="fas fa-check"></i></td>
                                    <td>3 D.Diamante&nbsp;<i id="xDDMLC" class="fas fa-times"></i><i id="cDDMLC" class="fas fa-check"></i></td>
                                    <td>2 T.Diamante + 1 D.Diamante&nbsp;     <i id="xTDMLC" class="fas fa-times"></i><i id="cTDMLC" class="fas fa-check"></i></td>
                                    <td>4 T.Diamante&nbsp;     <i id="xImpLC" class="fas fa-times"></i><i id="cImpLC" class="fas fa-check"></i></td>
                                    <td>4 D.Millonario&nbsp;     <i id="xEliteLC" class="fas fa-times"></i><i id="cEliteLC" class="fas fa-check"></i></td>
                                    <td>4 D.D.Millonario&nbsp;     <i id="xFundaLC" class="fas fa-times"></i><i id="cFundaLC" class="fas fa-check"></i></td>
                                    <td>4 T.D.Millonario&nbsp;     <i id="xCoronaLC" class="fas fa-times"></i><i id="cCoronaLC" class="fas fa-check"></i></td>
                                    <td>5 Imperial&nbsp;     <i id="xRoyalLC" class="fas fa-times"></i><i id="cRoyalLC" class="fas fa-check"></i></td>
                                </tr>
                                <tr class="bg-blue">
                                    <th scope="row">ESTADO</th>
                                    <td></td>
                                    <td id="Estado1"></td>
                                    <td id="Estado2"></td>
                                    <td id="Estado3"></td>
                                    <td id="Estado4"></td>
                                    <td id="Estado5"></td>
                                    <td id="Estado6"></td>
                                    <td id="Estado7"></td>
                                    <td id="Estado8"></td>
                                    <td id="Estado9"></td>
                                    <td id="Estado10"></td>
                                    <td id="Estado11"></td>
                                    <td id="Estado12"></td>
                                    <td id="Estado13"></td>
                                    <td id="Estado14"></td>
                                    <td id="Estado15"></td>
                                    <td id="Estado16"></td>
                                    <td id="Estado17"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
        </div>
        <br />
        <br />
    </div>
    <%--<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>--%>
    <script src="js/AdminLTE/app.js"></script>
    <script src="js/plugins/datatables/jquery.dataTables.js"></script>
    <script src="js/plugins/datatables/dataTables.bootstrap.js"></script>
    <script src="js/calificacion3.js?v1"></script>
    <script>
        window.onload = function () {
            document.getElementById("idMenuRed").style.color = 'white';
            document.getElementById("idMenuRed").style.borderBottom = '3px solid white';

            document.getElementById("idSubMenuTablaDeCalificacion").style.color = 'white';
            document.getElementById("idSubMenuTablaDeCalificacion").style.borderBottom = '3px solid white';
        }
    </script>


    <%--<script src="js/bootstrap.min.js"></script>--%>
</asp:Content>
