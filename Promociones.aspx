<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="Promociones.aspx.cs" Inherits="SantaNaturaNetworkV3.Terminos" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

    <!------ Include the above in your HEAD tag ---------->
    <%--    <link href="css/proyecto2/estilosTerminosDePromociones.css" rel="stylesheet" />--%>

    <style>
        .row {
            margin-top: 40px;
            padding: 0 10px;
        }

        .clickable {
            cursor: pointer;
        }

        .panel-heading div {
            margin-top: -18px;
            font-size: 15px;
        }

            .panel-heading div span {
                margin-left: 5px;
            }

        .panel-body {
            display: none;
        }


        .table th, td {
            text-align: center
        }


        .leadDocumentos {
            /*margin-bottom: 20px;*/
            /*font-size: 16px;*/
            /* font-size: 1.25rem; */
            font-weight: 300;
            line-height: 1.4;
            margin: 0 !important
        }

        .vigencia {
            margin-bottom: 10px;
        }


        /* MENU-LEFT
-------------------------- */
        /* layout */
        #left ul.nav {
            margin-bottom: 2px;
            font-size: 12px; /* to change font-size, please change instead .lbl */
        }

            #left ul.nav ul,
            #left ul.nav ul li {
                list-style: none !important;
                list-style-type: none !important;
                margin-top: 1px;
                margin-bottom: 1px;
            }

            #left ul.nav ul {
                padding-left: 0;
                width: auto;
            }

                #left ul.nav ul.children {
                    padding-left: 12px;
                    width: auto;
                }

                    #left ul.nav ul.children li {
                        margin-left: 0px;
                    }

            #left ul.nav li a:hover {
                text-decoration: none;
            }

                #left ul.nav li a:hover .lbl {
                    color: #999 !important;
                }

            #left ul.nav li.current > a .lbl {
                background-color: #999;
                color: #fff !important;
            }

            /* parent item */
            #left ul.nav li.parent a {
                padding: 0px;
                color: #ccc;
            }

            #left ul.nav > li.parent > a {
                border: solid 1px #999;
                text-transform: uppercase;
                background: white;
            }

            #left ul.nav li.parent a:hover {
                background-color: #fff;
                -webkit-box-shadow: inset 0 3px 8px rgba(0,0,0,0.125);
                -moz-box-shadow: inset 0 3px 8px rgba(0,0,0,0.125);
                box-shadow: inset 0 3px 8px rgba(0,0,0,0.125);
            }

            /* link tag (a)*/
            #left ul.nav li.parent ul li a {
                color: #222;
                border: none;
                display: block;
                padding-left: 5px;
            }

                #left ul.nav li.parent ul li a:hover {
                    background-color: #fff;
                    -webkit-box-shadow: none;
                    -moz-box-shadow: none;
                    box-shadow: none;
                }

            /* sign for parent item */
            #left ul.nav li .sign {
                display: inline-block;
                width: auto;
                padding: 5px 8px;
                background-color: transparent;
                color: #fff;
            }

            #left ul.nav li.parent > a > .sign {
                margin-left: 0px;
                background-color: #999;
            }

            /* label */
            #left ul.nav li .lbl {
                padding: 5px 12px;
                display: inline-block;
            }

            #left ul.nav li.current > a > .lbl {
                color: #fff;
            }

            #left ul.nav li a .lbl {
                font-size: 12px;
            }

            /* THEMATIQUE
------------------------- */
            /* theme 1 */
            #left ul.nav > li.item-1.parent > a {
                border: solid 1px #ff6307;
            }

                #left ul.nav > li.item-1.parent > a > .sign,
                #left ul.nav > li.item-1 li.parent > a > .sign {
                    margin-left: 0px;
                    background-color: #ff6307;
                }

            #left ul.nav > li.item-1 .lbl {
                color: #ff6307;
            }

            #left ul.nav > li.item-1 li.current > a .lbl {
                background-color: #ff6307;
                color: #fff !important;
            }

            /* theme 2 */
            #left ul.nav > li.item-8.parent > a {
                border: solid 1px #51c3eb;
            }

                #left ul.nav > li.item-8.parent > a > .sign,
                #left ul.nav > li.item-8 li.parent > a > .sign {
                    margin-left: 0px;
                    background-color: #51c3eb;
                }

            #left ul.nav > li.item-8 .lbl {
                color: #51c3eb;
            }

            #left ul.nav > li.item-8 li.current > a .lbl {
                background-color: #51c3eb;
                color: #fff !important;
            }

            /* theme 3 */
            #left ul.nav > li.item-15.parent > a {
                border: solid 1px #94cf00;
            }

                #left ul.nav > li.item-15.parent > a > .sign,
                #left ul.nav > li.item-15 li.parent > a > .sign {
                    margin-left: 0px;
                    background-color: #94cf00;
                }

            #left ul.nav > li.item-15 .lbl {
                color: #94cf00;
            }

            #left ul.nav > li.item-15 li.current > a .lbl {
                background-color: #94cf00;
                color: #fff !important;
            }

            /* theme 4 */
            #left ul.nav > li.item-22.parent > a {
                border: solid 1px #ef409c;
            }

                #left ul.nav > li.item-22.parent > a > .sign,
                #left ul.nav > li.item-22 li.parent > a > .sign {
                    margin-left: 0px;
                    background-color: #ef409c;
                }

            #left ul.nav > li.item-22 .lbl {
                color: #ef409c;
            }

            #left ul.nav > li.item-22 li.current > a .lbl {
                background-color: #ef409c;
                color: #fff !important;
            }
    </style>

    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Goblin+One" />




    <%--<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">--%>
    <%--<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>--%>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <!------ Include the above in your HEAD tag ---------->

    <%--<link href="//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css2">--%>
    <%--<script src="//netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>--%>
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    <!------ Include the above in your HEAD tag ---------->


    <link href="css/proyecto2/estilosDocumentos.css" rel="stylesheet" />


</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <div style="height: 100vh; background-repeat: no-repeat">
        <div style="padding-top: 90px; margin-bottom: 20px">
            <h1 style="text-align: center; font-family: system-ui; font-size: 34px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 26.4px; color: forestgreen">Términos de Promociones y Premios
            </h1>
        </div>

        <div class="row" style="margin-top: -10px; margin: 0">
            <div id="left" class="span3" style="width: 100%;">
                <ul id="menu-group-1" class="nav menu table-responsive" style="max-height: 500px">
                    <li class="item-1 deeper parent " style="width: 95%; margin-left: auto; margin-right: auto;">
                        <a data-toggle="collapse" data-parent="#menu-group-1" class="" href="#sub-item-1">
                            <span data-toggle="collapse" data-parent="#menu-group-1" class="sign"><i class="icon-plus icon-white"></i></span>
                            <span class="lbl">PROMOCIÓN</span>
                        </a>
                        <ul class="children nav-child unstyled small collapse" id="sub-item-1">
                            <li class="item-2 deeper parent">
                                <%--<a class="" href="#">
                                    <span data-toggle="collapse" data-parent="#menu-group-1" href="#sub-item-2" class="sign"><i class="icon-plus icon-white"></i></span>
                                    <span class="lbl">Menu 1</span>
                                </a>--%>
                                <%--<ul class="children nav-child unstyled small collapse" id="sub-item-2">
                                    <li class="item-3 current active">
                                        <a class="" href="#">
                                            <span class="sign"><i class="icon-play"></i></span>
                                            <span class="lbl">Menu 1.1</span> (current menu)
                                    </a>
                                    </li>
                                    <li class="item-4">
                                        <a class="" href="#">
                                            <span class="sign"><i class="icon-play"></i></span>
                                            <span class="lbl">Menu 1.2</span>
                                        </a>
                                    </li>
                                </ul>--%>
                                <div class="row" style="overflow-y: scroll; height: 305px; margin-top: -5px; margin: 0">
                                    <% foreach (var promocion in Lista)
                                        {%>
                                    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                        <div class="offer offer-radius offer-danger">
                                            <div class="shape">
                                                <div class="shape-text">
                                                    Prom.								
				
                                                </div>
                                            </div>
                                            <div class="offer-content">
                                                <h3 class="leadDocumentos"><%=promocion.Nombre%>
                                                </h3>
                                                <h5 class="vigencia">VIGENCIA: <%=promocion.Vigencia%></h5>
                                                <p>
                                                    Link: &nbsp;

                            <a href="promociones/<%=promocion.Archivo%>">
                                <img src="img/icono_adobe_pdf.png" />&nbsp;enlace_pdf</a>

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <% } %>
                                </div>
                            </li>
                            <%--<li class="item-5 deeper parent">
                                <a class="" href="#">
                                    <span data-toggle="collapse" data-parent="#menu-group-1" href="#sub-item-5" class="sign"><i class="icon-plus icon-white"></i></span>
                                    <span class="lbl">Menu 2</span>
                                </a>
                                <ul class="children nav-child unstyled small collapse" id="sub-item-5">
                                    <li class="item-6">
                                        <a class="" href="#">
                                            <span class="sign"><i class="icon-play"></i></span>
                                            <span class="lbl">Menu 2.1</span>
                                        </a>
                                    </li>
                                    <li class="item-7">
                                        <a class="" href="#">
                                            <span class="sign"><i class="icon-play"></i></span>
                                            <span class="lbl">Menu 2.2</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>--%>
                        </ul>
                    </li>

                    <li class="item-8 deeper parent" style="width: 95%; margin-left: auto; margin-right: auto; margin-top: 20px;">
                        <a data-toggle="collapse" data-parent="#menu-group-1" class="" href="#sub-item-8">
                            <span data-toggle="collapse" data-parent="#menu-group-1" href="" class="sign"><i class="icon-plus icon-white"></i></span>
                            <span class="lbl">PREMIO</span>
                        </a>
                        <ul class="children nav-child unstyled small collapse" id="sub-item-8">
                            <li class="item-9 deeper parent">
                                <div class="row" style="overflow-y: scroll; height: 350px; margin-top: -5px; margin: 0">
                                    <% foreach (var premios in ListaPremios)
                                        {%>
                                    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                        <div class="offer offer-radius offer-danger">
                                            <div class="shape">
                                                <div class="shape-text">
                                                    Premio								
				
                                                </div>
                                            </div>
                                            <div class="offer-content">
                                                <h3 class="leadDocumentos"><%=premios.Nombre%>
                                                </h3>
                                                <h5 class="vigencia">VIGENCIA: <%=premios.Vigencia%></h5>
                                                <p>
                                                    Link: &nbsp;

                            <a href="premios/<%=premios.Archivo%>">
                                <img src="img/icono_adobe_pdf.png" />&nbsp;enlace_pdf</a>

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <% } %>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="js/proyecto2/estilosTerminosDePromociones.js"></script>


    <script type="text/javascript">  
        //Para que el menu del navbar se quede de un color cuando esté seleccionado
        window.onload = function () {
            if (window.innerWidth < 1148) {
                //document.getElementById("liPromo").style.background = '#E8E8E8';

                document.getElementById("idMenuDocumentos").style.color = 'white';
                //document.getElementById("idMenuDocumentos").style.fontWeight = "700";
                document.getElementById("idMenuDocumentos").classList.add("peso700");
                document.getElementById("idSubMenuPromociones").style.fontWeight = "700";


                //var naranja = document.getElementById("navDocumentos");
                //naranja.classList.add('menu__item--active2');
            }
            else {
                document.getElementById("idMenuDocumentos").style.color = 'var(--Primary-green)';
                document.getElementById("idMenuDocumentos").style.borderBottom = '3px solid var(--Primary-green)';
                document.getElementById("idMenuDocumentos").style.fontWeight = "600";

                document.getElementById("idSubMenuPromociones").style.color = 'white';
                document.getElementById("idSubMenuPromociones").style.fontWeight = "700";
            }
        }


        $(document).ready(function () {

            // Le left-menu sign
            /* for older jquery version
            $('#left ul.nav li.parent > a > span.sign').click(function () {
                $(this).find('i:first').toggleClass("icon-minus");
            }); */

            $(document).on("click", "#left ul.nav li.parent > a", function () {
                $(this).find('i:first').toggleClass("icon-minus");
            });

            // Open Le current menu
            $("#left ul.nav li.parent.active > a").find('i:first').addClass("icon-minus");
            $("#left ul.nav li.current").parents('ul.children').addClass("in");

        });
    </script>
</asp:Content>
