<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Home.aspx.cs" Inherits="SantaNaturaNetwork._Default" %>
<%@ OutputCache Location="None" NoStore="true"%>
<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link href="css/home.css" rel="stylesheet" type="text/css"/>



    <div style="margin-top: -20px">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <!-- Wrapper for slides -->
            <div class="carousel-inner">
                <div class="item active">
                    <img class="img-fluid"  src="imagenes/otherImagenes/LíneaVerde-1350x400.jpg" />
                </div>
                <div class="item">
                    <img class="img-fluid"  src="imagenes/otherImagenes/Plataforma--SIN-REUMA-2.jpg" />
                </div>
            </div>

            <!-- Left and right controls -->
            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <br />
        <br />
        <div class="container text-center" style="width: 70%">
            <div class="row">
                <div class="col-md-16 center-block">
                    <h2>PRODUCTOS MÁS VENDIDOS</h2>
                </div>
            </div>
            <%--Productos más vendidos --%>
            <div class="row center-block" style="margin-top: 38px">
                <% foreach (var producto in listaProductos)
                    { %>
                <div class="col-sm-6 col-md-4">
                    <div class="dorHoverProduct2 dor-list-effect-pizza2 center-block">
                        <ul class="product_list grid center-block" style="list-style-type: none; margin: 0; padding: 0; display: flex; justify-content: center">
                            <li class="ajax_block_product">
                                <div class="box" style="width: 180px; height: 185px;">
                                    <div class="product-container center-block" style="background-color: #fbfbfb">
                                        <div class="dor-display-product-info">
                                            <div class="product-image-container center-block">
                                                <a href="Tienda.aspx" onclick="irDetalleProducto('<%=producto.Codigo%>')" title="Producto Natura" itemprop="url">
                                                    <img class="img-responsive" src="products/<%=producto.Foto%>" /></a>
                                            </div>
                                            <h5 style="text-align: center" class="product-name"><%=producto.NombreProducto %></h5>
                                            <div class="content_price" style="text-align: center">
                                                <h5 class="price product-price">S/. <%=producto.PrecioUnitario.ToString().Replace(",", ".") %></h5>
                                            </div>
                                        </div>                                    
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <% } %>

                <%--Productos menos vendidos --%>
                <% foreach (var producto in listaProductos2)
                    { %>
                <div class="col-sm-6 col-md-4">
                    <div class="dorHoverProduct2 dor-list-effect-pizza2 center-block">
                        <ul class="product_list grid center-block" style="list-style-type: none; margin: 0; padding: 0; display: flex; justify-content: center">
                            <li class="ajax_block_product">
                                <div class="box" style="width: 180px; height: 211px;">
                                    <div class="product-container center-block" style="background-color: #fbfbfb">
                                        <div class="dor-display-product-info">
                                            <div class="product-image-container center-block">
                                                <a href="Tienda.aspx" title="Producto Natura" itemprop="url">
                                                    <img class="img-responsive" src="products/<%=producto.Foto%>" /></a>
                                            </div>
                                            <h5 style="text-align: center" class="product-name"><%=producto.NombreProducto %></h5>
                                            <div class="content_price" style="text-align: center">
                                                <h5 class="price product-price">S/. <%=producto.PrecioUnitario.ToString().Replace(",", ".") %></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
                <% } %>

            </div>
        </div>
        <br />

        <div style="margin-top: 10px">
            <hr />
        </div>
        <div style="margin-top: 23px; width: 100%">
            <br />
            <div class="row">
                <div class="col-md-16 center-block">
                    <h2>PUBLICACIONES</h2>
                </div>
            </div>
            <br />

            <div class="container scroll style-1" style="width: 75%;">

                <div class="row">
                    <div class="col-md-6">
                        <div class="center-block" style="width: 95%; margin-top: 19px; margin-bottom: 19px">
                            <img class="img-fluid" id="imgPubli" src="imagenes/otherImagenes/Zoom-447x250.jpg" />
                        </div>
                    </div>
                    <div class="col-md-6 padre">
                        <div class="center-block" style="width: 95%; margin-top: 19px; margin-bottom: 19px;">
                            <p style="text-align: justify" id="txtDesPubli">LLAMADA DE LIDERAZGO<br />
En todo emprendimiento se requiere preparación, esfuerzo y dedicación. Conscientes de ello, los socios líderes de Santa Natura Network realizan capacitaciones o “Llamadas de Liderazgo” los días Domingo a las 10pm a través de la plataforma ZOOM. A través de esta vía, todos los socios del sistema no sólo reciben pautas y sugerencias para el desarrollo de su negocio, también se mantienen informados sobre las novedades de la red.
</p>
                        </div>
                    </div>
                </div>

            </div>
            <br />
            <div class="container" style="width: 30%">
                <hr />
            </div>

            <br />
            <div class="row">
                <div class="col-md-16 center-block">
                    <h2>NOVEDADES</h2>
                </div>
            </div>
            <br />
            <div class="container scroll style-1" style="width: 75%;">

                <div class="row">
                    <div class="col-md-6">
                        <div class="center-block" style="width: 95%; margin-top: 19px; margin-bottom: 19px">
                            <img class="img-fluid" id="imgNove" src="imagenes/otherImagenes/FaceLive.jpg" />
                        </div>
                    </div>
                    <div class="col-md-6 padre">
                        <div class="center-block" style="width: 95%; margin-top: 19px; margin-bottom: 19px;">
                            <p style="text-align: justify" id="txtDesNove">JEANETTE VÍA LIVE <br />
Jeanette Enmanuel, Directora de Santa Natura, comparte todos sus conocimientos con los socios de Santa Natura Network y con las miles de personas e instituciones que recurren a ella como referente de la salud natural en nuestro país. Es por ello que todos los días miércoles a las 10pm (hora local), Jeanette realiza transmisiones vía Facebook Live, a través de la Página Santa Natura Network. Participan amantes de la naturaleza de todo el mundo. ¡Serás Bienvenido!
</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</asp:Content>
