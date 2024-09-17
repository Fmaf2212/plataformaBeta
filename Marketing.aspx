<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="Marketing.aspx.cs" Inherits="SantaNaturaNetworkV3.Documentos2" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
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
            margin-bottom: 20px;
            /*font-size: 16px;*/
            /* font-size: 1.25rem; */
            font-weight: 300;
            line-height: 1.4;
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




    <!--NUEVO para los botones TODO, PDF, IMAGEN, VIDEO-->
    <link href="css/proyecto2/documentos2/style.css" rel="stylesheet" />


</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <section id="portfolio">
        <div class="container" style="margin-top: 70px">
            <div class="center">
                <div style="padding-top: 50px; margin-bottom: 50px">
                    <h1 style="text-align: center; font-family: system-ui; font-size: 34px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 26.4px; color: forestgreen">MATERIALES
                    </h1>
                </div>
            </div>

            <ul class="portfolio-filter text-center">
                <li><a class="btn btn-default active" href="#" data-filter="*">Todo</a></li>
                <li><a class="btn btn-default" href="#" data-filter=".ppt">POWER P.</a></li>
                <li><a class="btn btn-default" href="#" data-filter=".word">WORD</a></li>
                <li><a class="btn btn-default" href="#" data-filter=".pdf">PDF</a></li>
                <li><a class="btn btn-default" href="#" data-filter=".imagen">Imagen</a></li>
                <li><a class="btn btn-default" href="#" data-filter=".video">Video</a></li>
            </ul>
        </div>
        <div class="container">
            <div class="portfolio-items" id="resultado">
                <% foreach (var archivo in Lista)
                    {%>
                <%if (archivo.TipoArchivo != "Video")
                    {%>
                <div class="portfolio-item apps <%=archivo.TipoArchivo.ToLower()%> col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 animated-item-1">
                    <div class="recent-work-wrap">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="offer offer-radius <%=archivo.CodigoClass%>">
                                <div class="shape">
                                    <div class="shape-text">
                                        <%=archivo.TipoArchivo%>
                                    </div>
                                </div>
                                <div class="offer-content">
                                    <h3 class="leadDocumentos"><%=archivo.Nombre%>
                                    </h3>
                                    <p>
                                        Link: &nbsp;

                            <a href="marketing/<%=archivo.Archivo%>">
                                <img src="img/<%=archivo.TipoArchivo%>.png" />&nbsp;Enlace</a>

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <%}%>
                <%else
                    {%>
                <div class="portfolio-item video col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 animated-item-1">
                    <div class="recent-work-wrap">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="offer offer-radius offer-info">
                                <iframe style="display: table; margin-left: auto; margin-right: auto; width: 100%; height: 100%;" src="<%=archivo.Archivo%>"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <%}%>

                <% } %>
            </div>
        </div>
    </section>

    <%-- Añadiendo buscador, y consumo de servicio local para los documentos --%>
    <%--<section id="portfolio">
        <div class="container" style="margin-top: 70px">
            <div class="center">
                <div style="padding-top: 50px; margin-bottom: 50px">
                    <h1 style="text-align: center; font-family: sans-serif; font-size: 34px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 26.4px; color: forestgreen">MATERIALES
                    </h1>
                </div>
            </div>

            <ul class="portfolio-filter text-center">
                <li><a class="btn btn-default active" href="#" data-filter="*">Todo</a></li>
                <li><a class="btn btn-default" href="#" data-filter=".ppt">POWER P.</a></li>
                <li><a class="btn btn-default" href="#" data-filter=".word">WORD</a></li>
                <li><a class="btn btn-default" href="#" data-filter=".pdf">PDF</a></li>
                <li><a class="btn btn-default" href="#" data-filter=".imagen">Imagen</a></li>
                <li><a class="btn btn-default" href="#" data-filter=".video">Video</a></li>
            </ul>

            <section>
                <h2>Buscar archivo</h2>
                <input type="text" id="buscador" name="buscador" />
            </section>
        </div>
        <div class="container">
            <div class="portfolio-items" id="resultado">
            </div>
        </div>
    </section>--%>
    
    <script src="js/proyecto2/documentos2/jquery-2.1.1.min.js"></script>
    <script src="js/proyecto2/documentos2/jquery.isotope.min.js"></script>
    <script src="js/proyecto2/documentos2/wow.js"></script>
    <script src="js/proyecto2/documentos2/functions.js"></script>
    
    <%--<script src="js/proyecto2/PruebaMarketing.js"></script>--%>

    <script>
        //Para que el menu del navbar se quede de un color cuando esté seleccionado
        window.onload = function () {
            if (window.innerWidth < 1148) {
                document.getElementById("idMenuDocumentos").style.color = 'white';
                document.getElementById("idMenuDocumentos").classList.add("peso700");
                document.getElementById("idSubMenuMarketinheader").style.fontWeight = "700";
            }
            else {
                document.getElementById("idMenuDocumentos").style.color = 'var(--Primary-green)';
                document.getElementById("idMenuDocumentos").style.borderBottom = '3px solid var(--Primary-green)';
                document.getElementById("idMenuDocumentos").style.fontWeight = "600";

                document.getElementById("idSubMenuMarketinheader").style.color = 'white';
                document.getElementById("idSubMenuMarketinheader").style.fontWeight = "700";
            }
        }

    </script>

    <%--<script>
        window.onload = function () {
            fetch("http://localhost:3000/archivos")
                .then(res => res.json())
                .then(response => {
                    //console.log(response)
                    llamarDocu(response)
                })
            function llamarDocu(respuesta) {
                respuesta.forEach(docu => {
                    //console.log(docu.NOMBRE);
                })

                const busc = document.querySelector('#buscador');
                const resul = document.querySelector('#resultado');

                const filtrar = () => {
                    resul.innerHTML = '';
                    console.log(resul);
                    const texto = busc.value.toLowerCase();
                    for (let documento of respuesta) {
                        //console.log(documento.NOMBRE);
                        let nombre = documento.NOMBRE.toLowerCase();
                        if (nombre.indexOf(texto) !== -1) {

                            resul.innerHTML += `
                    
                            <div class="portfolio-item apps ${documento.TIPO_ARCHIVO.toLowerCase()} col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 animated-item-1">
                                <div class="recent-work-wrap">
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <div class="offer offer-radius ${documento.CODIGO_CLASS}">
                                            <div class="shape">
                                                <div class="shape-text">
                                                    ${documento.TIPO_ARCHIVO}
                                                </div>
                                            </div>
                                            <div class="offer-content">
                                                <h3 class="leadDocumentos">${documento.NOMBRE}
                                                </h3>
                                                <p>
                                                    Link: &nbsp;

                                        <a href="marketing/${documento.ARCHIVO}">
                                            <img src="img/${documento.TIPO_ARCHIVO}.png" />&nbsp;Enlace</a>

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            `

                        }
                    }
                    if (resul.innerHTML === '') {
                        resul.innerHTML += `
                        <li>Producto no encontrado...</li>
                    `
                    }
                }
                busc.addEventListener('keyup', filtrar);

                filtrar();
            }
        }
      //x.forEach(docu => {
      //    console.log(docu.NOMBRE);
      //})


    </script>--%>
</asp:Content>
