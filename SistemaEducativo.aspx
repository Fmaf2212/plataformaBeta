<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="SistemaEducativo.aspx.cs" Inherits="SantaNaturaNetworkV3.SistemaEducativo" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

    <style>
        .content_box {
            float: left;
            width: 100%;
        }

        .left_bar {
            float: left;
            width: 15%;
            background: #eaf4ff;
            height: 100vh;
        }

        .right_bar {
            float: left;
            width: 85%;
            padding: 15px;
            /*border-left:1px solid #ccc;*/
            height: 100%;
        }

        .nav-tabs--vertical li {
            float: left;
            width: 100%;
            padding: 0;
            position: relative;
        }


            .nav-tabs--vertical li a {
                float: left;
                width: 100%;
                padding: 15px;
                border-bottom: 1px solid #adcff7;
                color: #1276F0;
            }

                .nav-tabs--vertical li a.active::after {
                    content: "";
                    border-color: #1276F0;
                    border-style: solid;
                    position: absolute;
                    right: -8px;
                    /* border-top: transparent; */
                    border-right: transparent;
                    border-left: 15px solid transparent;
                    border-right: 15px solid transparent;
                    /*border-bottom: 16px solid #1276F0;*/
                    border-bottom: 16px solid #fff;
                    border-top: 0;
                    transform: rotate(270deg);
                    z-index: 999;
                }









        #accordion .panel {
            border: none;
            border-radius: 0;
            box-shadow: none;
            margin-bottom: -5px;
        }

        #accordion .panel-heading {
            padding: 0;
            border: none;
            border-radius: 0;
        }

        #accordion .panel-title a {
            display: block;
            padding: 15px 70px 15px 5px;
            background: #fff;
            /*    font-size: 18px;
font-weight: 700;*/
            letter-spacing: 1px;
            color: #d21d54;
            border-bottom: 1px solid #d1d1d1;
            position: relative;
            font-size: 14px;
            font-weight: 500;
        }

        #accordion .title a.collapsed {
            color: #1d2e3b;
        }

            #accordion .title a.collapsed:hover {
                color: #d21d54;
            }

        #accordion .title a:before,
        #accordion .title a:after {
            content: "";
            width: 3px;
            height: 10px;
            background: #d21d54;
            font-size: 15px;
            position: absolute;
            top: 20px;
            right: 35px;
            /*transform: rotate(-45deg);*/
            transform: rotate(45deg);
            transition: all 0.3s ease-in-out 0;
        }

        #accordion .title a:after {
            right: 29px;
            /*transform: rotate(45deg);*/
            transform: rotate(-45deg);
        }

        #accordion .title a.collapsed:before {
            transform: rotate(-45deg);
            background: #1d2e3b;
        }

        #accordion .title a.collapsed:after {
            /*transform: rotate(-45deg);*/
            transform: rotate(45deg);
            background: #1d2e3b;
        }

        #accordion .title a.collapsed:hover:before,
        #accordion .title a.collapsed:hover:after {
            background: #d21d54;
        }

        #accordion .panel-body {
            padding: 10px 10px 0;
            background: #fff;
            border-top: none;
            font-size: 15px;
            color: #000;
            line-height: 25px;
        }
    </style>


    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Goblin+One" />

    <link href="css/CrearCuentaCss.css" rel="stylesheet" />

    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>


    <!--Estilos para los cuadrados-->
    <link href="css/proyecto2/estilosDocumentos.css" rel="stylesheet" />

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <div id="imgFondo" style="background-image: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url('../../img/imagen6.jpg'); height: 100vh; background-repeat: no-repeat;">
        <div class="content_box" style="margin-top: 70px; display: flex;">
            <%--<div class="left_bar">
                <ul class=" nav-tabs--vertical nav" role="navigation">
                    <li class="nav-item">
                        <a href="#lorem" class="nav-link active" data-toggle="tab" role="tab" aria-controls="lorem">Lorem</a>
                    </li>
                    <li class="nav-item">
                        <a href="#ipsum" class="nav-link" data-toggle="tab" role="tab" aria-controls="ipsum">Ipsum</a>
                    </li>
                    <li class="nav-item">
                        <a href="#dolor" class="nav-link " data-toggle="tab" role="tab" aria-controls="dolor">Dolor</a>
                    </li>
                    <li class="nav-item">
                        <a href="#sit-amet" class="nav-link" data-toggle="tab" role="tab" aria-controls="sit-amet">Sit Amet</a>
                    </li>
                </ul>
            </div>--%>
            <div id="columnaListaMenus" class="col-xs-2 row left_bar" style="margin-left: 0; height: -webkit-fill-available; padding: 0;">
                <div class="panel-group" id="accordion" style="width: 100%">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title ">
                                <a href="#tabla1" class="nav-link active" data-toggle="tab" role="tab" aria-controls="lorem">Menú 1</a>
                            </h4>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title title" style="text-shadow: none; text-align: inherit;">
                                <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo1" aria-expanded="false">Menú 2</a>
                            </h4>
                        </div>
                        <div id="collapseTwo1" class="panel-collapse collapse" aria-expanded="true" style="">
                            <div class="panel-body">
                                <!-- nested -->
                                <div class="panel-group" id="nested">
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h4 class="panel-title " style="text-shadow: none; text-align: inherit;">
                                                <a href="#tabla2" data-toggle="tab">Sub Menú 2.1</a>
                                            </h4>
                                        </div>
                                    </div>
                                    <!-- /.panel -->
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h4 class="panel-title " style="text-shadow: none; text-align: inherit;">
                                                <a href="#tabla3" data-toggle="tab">Sub Menú 2.2</a>
                                            </h4>
                                        </div>
                                    </div>
                                    <!-- /.panel -->
                                </div>
                                <!-- /.panel-group -->
                                <!-- nested -->
                            </div>
                            <!--/.panel-body -->
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title title" style="text-shadow: none; text-align: inherit;">
                                <a class=" collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo2" aria-expanded="false">Menú 3
                                </a>
                            </h4>
                        </div>
                        <!--/.panel-heading -->
                        <div id="collapseTwo2" class="panel-collapse collapse" aria-expanded="true" style="">
                            <div class="panel-body">
                                <!-- nested -->
                                <div class="panel-group" id="nested1">
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h4 class="panel-title " style="text-shadow: none; text-align: inherit;">
                                                <a href="#tabla4" class="collapsed" data-toggle="tab" data-parent="#nested" href="#nested-collapseTwo">Sub Menú 3.1</a>
                                            </h4>
                                        </div>
                                        <!--/.panel-heading -->
                                    </div>
                                    <!-- /.panel -->
                                </div>
                                <!-- /.panel-group -->
                                <!-- nested -->
                            </div>
                            <!--/.panel-body -->
                        </div>
                        <!--/.panel-collapse -->
                    </div>
                    <!-- /.panel -->

                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title ">
                                <a href="#tabla5" data-toggle="tab">Menú 4</a>
                            </h4>
                        </div>
                    </div>

                </div>

            </div>





            <div id="columnaCuerpoCuadrados" class="col-xs-10 right_bar " style="width: 100%; padding: 0; height: 100vh;">
                <div class="tab-content " style="margin-left: 15px; padding: 30px;">
                    <div id="tabla1" class="tab-pane fade show active" role="tabpanel">
                        <%--id="lorem"--%>

                        <%--<table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>John</td>
                                    <td>Doe</td>
                                    <td>john@example.com</td>
                                </tr>
                                <tr>
                                    <td>Mary</td>
                                    <td>Moe</td>
                                    <td>mary@example.com</td>
                                </tr>
                                <tr>
                                    <td>July</td>
                                    <td>Dooley</td>
                                    <td>july@example.com</td>
                                </tr>
                            </tbody>
                        </table>--%>

                        <h1 class="tituloDeCajas" style="text-align: center">Menú 1</h1>

                        <div class="row scrollBar" style="height: auto; margin-top: -5px; margin: 0">
                            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                <div class="offer offer-radius offer-danger">
                                    <div class="shape">
                                        <div class="shape-text">
                                            PDF								
				
                                        </div>
                                    </div>
                                    <div class="offer-content">
                                        <h3 class="leadDocumentos">COMO EMITIR FACTURAS
                                        </h3>
                                            <p>
                                                Link: &nbsp;

                                                <a href="img/como emitir facturas SNN.pdf"  >
                                                <img src="img/icono_adobe_pdf.png" />&nbsp;enlace_pdf</a>
                                            </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                <div class="offer offer-radius offer-success">
                                    <div class="shape">
                                        <div class="shape-text">
                                            Imagen							
				
                                        </div>
                                    </div>
                                    <div class="offer-content">
                                        <h3 class="leadDocumentos">CUENTAS BANCARIAS
                                        </h3>
                                        <p>
                                            Link: &nbsp;

                            <a href="img/CuentasSN.jpeg"  >
                                <img src="img/icono_imagen.png" />&nbsp;enlace_doc</a>

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                <div class="offer offer-radius offer-danger">
                                    <div class="shape">
                                        <div class="shape-text">
                                            PDF							
				
                                        </div>
                                    </div>
                                    <div class="offer-content">
                                        <h3 class="leadDocumentos">PAGO DE COMISIONES Y BONOS
                                        </h3>
                                        <p>
                                            Link: &nbsp;

                            <a href="img/comunicado-comision.pdf"  >
                                <img src="img/icono_adobe_pdf.png" />&nbsp;enlace_pdf</a>

                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div id="tabla2" class="tab-pane fade" id="ipsum" role="tabpanel">
                        <%--<table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Nickname</th>
                                    <th>Patrocinador</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Lexus</td>
                                    <td>Doe</td>
                                    <td>john@example.com</td>
                                </tr>
                                <tr>
                                    <td>Desvirguensen</td>
                                    <td>Moe</td>
                                    <td>mary@example.com</td>
                                </tr>
                                <tr>
                                    <td>ThePeluka</td>
                                    <td>Dooley</td>
                                    <td>july@example.com</td>
                                </tr>
                            </tbody>
                        </table>--%>

                        <h1 class="tituloDeCajas" style="text-align: center">Sub Menú 2.1</h1>

                        <div class="row scrollBar" style="margin-top: -5px; margin: 0">
                            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                <div class="offer offer-radius offer-danger">
                                    <div class="shape">
                                        <div class="shape-text">
                                            PDF								
				
                                        </div>
                                    </div>
                                    <div class="offer-content">
                                        <h3 class="leadDocumentos">COMO EMITIR FACTURAS
                                        </h3>
                                        <p>
                                            Link: &nbsp;

                            <a href="img/como emitir facturas SNN.pdf"  >
                                <img src="img/icono_adobe_pdf.png" />&nbsp;enlace_pdf</a>

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                <div class="offer offer-radius offer-success">
                                    <div class="shape">
                                        <div class="shape-text">
                                            Imagen							
				
                                        </div>
                                    </div>
                                    <div class="offer-content">
                                        <h3 class="leadDocumentos">CUENTAS BANCARIAS
                                        </h3>
                                        <p>
                                            Link: &nbsp;

                            <a href="img/CuentasSN.jpeg"  >
                                <img src="img/icono_imagen.png" />&nbsp;enlace_doc</a>

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                <div class="offer offer-radius offer-danger">
                                    <div class="shape">
                                        <div class="shape-text">
                                            PDF							
				
                                        </div>
                                    </div>
                                    <div class="offer-content">
                                        <h3 class="leadDocumentos">PAGO DE COMISIONES Y BONOS
                                        </h3>
                                        <p>
                                            Link: &nbsp;

                            <a href="img/comunicado-comision.pdf"  >
                                <img src="img/icono_adobe_pdf.png" />&nbsp;enlace_pdf</a>

                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div id="tabla3" class="tab-pane fade" id="dolor" role="tabpanel">
                        <%--<table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>DNI</th>
                                    <th>UpLine</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>10301567</td>
                                    <td>Doris</td>
                                    <td>john@example.com</td>
                                </tr>
                                <tr>
                                    <td>10302537</td>
                                    <td>Moises</td>
                                    <td>mary@example.com</td>
                                </tr>
                                <tr>
                                    <td>14303587</td>
                                    <td>Danny</td>
                                    <td>july@example.com</td>
                                </tr>
                            </tbody>
                        </table>--%>

                        <h1  class="tituloDeCajas" style="text-align: center">Sub Menú 2.2</h1>

                        <div class="row scrollBar" style="margin-top: -5px; margin: 0">
                            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                <div class="offer offer-radius offer-danger">
                                    <div class="shape">
                                        <div class="shape-text">
                                            PDF								
				
                                        </div>
                                    </div>
                                    <div class="offer-content">
                                        <h3 class="leadDocumentos">COMO EMITIR FACTURAS
                                        </h3>
                                        <p>
                                            Link: &nbsp;

                            <a href="img/como emitir facturas SNN.pdf"  >
                                <img src="img/icono_adobe_pdf.png" />&nbsp;enlace_pdf</a>

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                <div class="offer offer-radius offer-success">
                                    <div class="shape">
                                        <div class="shape-text">
                                            Imagen							
				
                                        </div>
                                    </div>
                                    <div class="offer-content">
                                        <h3 class="leadDocumentos">CUENTAS BANCARIAS
                                        </h3>
                                        <p>
                                            Link: &nbsp;

                            <a href="img/CuentasSN.jpeg"  >
                                <img src="img/icono_imagen.png" />&nbsp;enlace_doc</a>

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                <div class="offer offer-radius offer-danger">
                                    <div class="shape">
                                        <div class="shape-text">
                                            PDF							
				
                                        </div>
                                    </div>
                                    <div class="offer-content">
                                        <h3 class="leadDocumentos">PAGO DE COMISIONES Y BONOS
                                        </h3>
                                        <p>
                                            Link: &nbsp;

                            <a href="img/comunicado-comision.pdf"  >
                                <img src="img/icono_adobe_pdf.png" />&nbsp;enlace_pdf</a>

                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div id="tabla4" class="tab-pane fade" id="sit-amet" role="tabpanel">
                        <%--<table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Vitalina</td>
                                    <td>30</td>
                                    <td>8.50</td>
                                </tr>
                                <tr>
                                    <td>Huanarpo</td>
                                    <td>40</td>
                                    <td>30.00</td>
                                </tr>
                                <tr>
                                    <td>Miel de Abeja</td>
                                    <td>50</td>
                                    <td>20.00</td>
                                </tr>
                            </tbody>
                        </table>--%>

                        <h1 class="tituloDeCajas" style="text-align: center">Sub Menú 3.1</h1>

                        <div class="row scrollBar" style="margin-top: -5px; margin: 0">
                            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                <div class="offer offer-radius offer-danger">
                                    <div class="shape">
                                        <div class="shape-text">
                                            PDF								
				
                                        </div>
                                    </div>
                                    <div class="offer-content">
                                        <h3 class="leadDocumentos">COMO EMITIR FACTURAS
                                        </h3>
                                        <p>
                                            Link: &nbsp;

                            <a href="img/como emitir facturas SNN.pdf"  >
                                <img src="img/icono_adobe_pdf.png" />&nbsp;enlace_pdf</a>

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                <div class="offer offer-radius offer-success">
                                    <div class="shape">
                                        <div class="shape-text">
                                            Imagen							
				
                                        </div>
                                    </div>
                                    <div class="offer-content">
                                        <h3 class="leadDocumentos">CUENTAS BANCARIAS
                                        </h3>
                                        <p>
                                            Link: &nbsp;

                            <a href="img/CuentasSN.jpeg"  >
                                <img src="img/icono_imagen.png" />&nbsp;enlace_doc</a>

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                <div class="offer offer-radius offer-danger">
                                    <div class="shape">
                                        <div class="shape-text">
                                            PDF							
				
                                        </div>
                                    </div>
                                    <div class="offer-content">
                                        <h3 class="leadDocumentos">PAGO DE COMISIONES Y BONOS
                                        </h3>
                                        <p>
                                            Link: &nbsp;

                            <a href="img/comunicado-comision.pdf"  >
                                <img src="img/icono_adobe_pdf.png" />&nbsp;enlace_pdf</a>

                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div id="tabla5" class="tab-pane fade" id="sit-amet" role="tabpanel">
                        <%--<table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Bono Tiburón</th>
                                    <th>Bono escolaridad</th>
                                    <th>Puntos</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>13</td>
                                    <td>30</td>
                                    <td>85</td>
                                </tr>
                                <tr>
                                    <td>15</td>
                                    <td>40</td>
                                    <td>30</td>
                                </tr>
                                <tr>
                                    <td>16</td>
                                    <td>50</td>
                                    <td>20</td>
                                </tr>
                            </tbody>
                        </table>--%>

                        <h1 class="tituloDeCajas" style="text-align: center">Menú 4</h1>

                        <div class="row scrollBar" style="margin-top: -5px; margin: 0">
                            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                <div class="offer offer-radius offer-danger">
                                    <div class="shape">
                                        <div class="shape-text">
                                            PDF								
				
                                        </div>
                                    </div>
                                    <div class="offer-content">
                                        <h3 class="leadDocumentos">COMO EMITIR FACTURAS
                                        </h3>
                                        <p>
                                            Link: &nbsp;

                            <a href="img/como emitir facturas SNN.pdf"  >
                                <img src="img/icono_adobe_pdf.png" />&nbsp;enlace_pdf</a>

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                <div class="offer offer-radius offer-success">
                                    <div class="shape">
                                        <div class="shape-text">
                                            Imagen							
				
                                        </div>
                                    </div>
                                    <div class="offer-content">
                                        <h3 class="leadDocumentos">CUENTAS BANCARIAS
                                        </h3>
                                        <p>
                                            Link: &nbsp;

                            <a href="img/CuentasSN.jpeg"  >
                                <img src="img/icono_imagen.png" />&nbsp;enlace_doc</a>

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                <div class="offer offer-radius offer-danger">
                                    <div class="shape">
                                        <div class="shape-text">
                                            PDF							
				
                                        </div>
                                    </div>
                                    <div class="offer-content">
                                        <h3 class="leadDocumentos">PAGO DE COMISIONES Y BONOS
                                        </h3>
                                        <p>
                                            Link: &nbsp;

                            <a href="img/comunicado-comision.pdf"  >
                                <img src="img/icono_adobe_pdf.png" />&nbsp;enlace_pdf</a>

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <%--<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>--%>
        <script src="js/proyecto2/estilosTerminosDePromociones.js"></script>


        <%--<script src="//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>--%>

        <%--<script src="js/crearCuenta.js"></script>--%>

</asp:Content>
