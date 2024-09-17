<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="DetalleProducto.aspx.cs" Inherits="SantaNaturaNetworkV3.DetalleProducto" ClientIDMode="Static" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="css/proyecto2/estilosCatalogo.css?v3" rel="stylesheet" />
    <style>
        .input-group-btn button {
            border-radius: 0;
            height: 40px;
            display: table;
            border: 1px solid #e6e6e6;
            padding: 10px;
        }

        #quantity {
            text-align: center;
            height: 40px;
            font-weight: 400;
            position: relative;
            z-index: 2;
            float: left;
            width: 100%;
            margin-bottom: 0;
            border: none !important;
            box-shadow: none;
            font-size: 1em;
        }

        .colorlib-shop-master {
            background: radial-gradient(black 3px, transparent 4px), radial-gradient(black 3px, transparent 4px), linear-gradient(#fff 4px, transparent 0), linear-gradient(45deg, transparent 74px, transparent 75px, #a4a4a4 75px, #a4a4a4 76px, transparent 77px, transparent 109px), linear-gradient(-45deg, transparent 75px, transparent 76px, #a4a4a4 76px, #a4a4a4 77px, transparent 78px, transparent 109px), #fff;
            background-size: 109px 109px, 109px 109px,100% 6px, 109px 109px, 109px 109px;
            background-position: 54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;
            margin-top: 70px;
        }

        .colorlib-shop .contenido {
            background: #fff;
            margin-top: 70px;
            padding: 50px 15px;
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

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div id="page_loader" style="display: none" class="se-pre-con"></div>
    <aside id="colorlib-hero" class="breadcrumbs">
        <div class="flexslider">
            <ul class="slides">
                <li style="background-image: url(img/detalledecompra.png);">
                    <div class="overlay"></div>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6 col-md-offset-3 col-sm-12 col-xs-12 slider-text">
                                <div class="slider-text-inner text-center">
                                    <h1 style="font-size: 28px; font-family: 'Roboto', Arial, sans-serif; font-weight: 400;">Detalle Producto</h1>
                                    <h2 class="bread" style="line-height: 1.6;"><span style="letter-spacing: 1px;"><a href="Index.aspx" style="font-family: 'Roboto', Arial, sans-serif;font-size: 14px;">Inicio</a></span> <span style="letter-spacing: 1px; margin-left: 10px;"><a href="TiendaSN.aspx" style="font-family: 'Roboto', Arial, sans-serif;font-size: 14px;">Tienda</a></span> <span style="font-family: 'Roboto', Arial, sans-serif; font-size: 14px; margin-left: 10px; letter-spacing: 1px;">Detalle Producto</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </aside>
    <div class="colorlib-shop-master">
        <div class="colorlib-shop">
            <div class="contenido">
                <div class="fila fila-pb-lg" style="padding: 0 40px;">
                    <div class="input-field col s12 m6 l4 xl4">
                        <select runat="server" id="cboTCompra"/>
                        <label>Tipo de Compra</label>
                    </div>
                    <div class="input-field col s12 m6 l4 xl4">
                        <select runat="server" id="cboTiendaS"/>
                        <label>Tienda</label>
                    </div>
                    <div class="input-field col s12 m6 offset-m3 l4 xl4"">
                        <select runat="server" id="cboMPago"/>
                        <label>Medio de pago</label>
                    </div>
                </div>
                <div class="row fila-pb-lg">
                    <div class="col-md-10 col-md-offset-1">
                        <div class="product-detail-wrap">
                            <div class="product-detail-top">
                                <div class="product-detail-images">
                                    <div class="product-entry">
                                        <div class="product-image">
                                            <img id="imagen" src="#" alt="" class="imagen" data-img="products/COLAGENO-PREMIUM.png">
                                        </div>
                                        <div class="thumb-nail">
                                            <img src="products/270x270-ColagenoPremium.png" alt="" class="thumb-img imagen" data-img="products/COLAGENO-PREMIUM.png">
                                            <img src="products/270x270-ColagenoPremium.png" alt="" class="thumb-img imagen" data-img="products/COLAGENO-PREMIUM.png">
                                            <img src="products/270x270-ColagenoPremium.png" alt="" class="thumb-img imagen" data-img="products/COLAGENO-PREMIUM.png">
                                        </div>
                                    </div>
                                </div>
                                <div class="product-detail-info">
                                    <div class="desc">
                                        <h3 id="lblNombre" style="font-family: 'Roboto', Arial, sans-serif;"></h3>
                                        <p class="price">
                                            <span>S/.<label id="lblPrecio"></label></span>
                                        </p>
                                        <p style="display:none">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                                        <div class="transaction">
                                            <div class="top">
                                                <div class="cantProd">
                                                    <div class="col-xs-12">
                                                        <div class="input-group" style="position: relative; display: table; border-collapse: separate;">
                                                            <span class="input-group-btn">
                                                                <button type="button" class="quantity-left-minus btn" data-type="minus" data-field="">
                                                                    <i class="icon-minus2"></i>
                                                                </button>
                                                            </span>
                                                            <input type="text" id="quantity" name="quantity" class="form-control input-number" value="1" min="1" max="100">
                                                            <span class="input-group-btn">
                                                                <button type="button" class="quantity-right-plus btn" data-type="plus" data-field="">
                                                                    <i class="icon-plus2"></i>
                                                                </button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <p><a href="#" class="btn btn-primary btn-addtocart btn-añadir"><i class="icon-shopping-cart"></i>Añadir</a></p>
                                                </div>
                                                <div class="amount">
                                                    <div class="row">
                                                        <asp:Label Text="Total a pagar: " runat="server" />
                                                        <asp:Label ID="txtMonto" runat="server" />
                                                    </div>
                                                    <div class="row">
                                                        <asp:Label Text="Puntos totales: " runat="server" />
                                                        <asp:Label ID="txtPuntos" runat="server" />
                                                    </div>
                                                    <div class="row">
                                                        <asp:Label Text="Puntos promoción: " runat="server" />
                                                        <asp:Label ID="txtPuntosPromo" runat="server" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="bottom">
                                                <p><a href="TiendaSN.aspx" class="btn btn-arrow-left btn-primary btn-addtocart btn-ir-tienda">Ir a Tienda</a></p>
                                                <p><a href="DetalleDeCompra.aspx" class="btn btn-arrow-right btn-primary btn-addtocart btn-ir-carrito">Pagar Compra</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-10 col-md-offset-1">
                        <div class="row">
                            <div class="col-md-12 tabulation">
                                <ul class="nav nav-pestañas">
                                    <li class="active"><a data-toggle="tab" href="#beneficios">Beneficios</a></li>
                                    <li><a data-toggle="tab" href="#ingredientes">Ingredientes</a></li>
                                    <li><a data-toggle="tab" href="#consumo">Modo de Consumo</a></li>
                                </ul>
                                <div class="tab-content">
                                    <div id="beneficios" class="tab-pane fade in active">
                                        <label style="white-space: pre-wrap;" id="lblBeneficios"></label>
                                    </div>
                                    <div id="ingredientes" class="tab-pane fade">
                                        <label style="white-space: pre-wrap;" id="lblIngredientes"></label>
                                    </div>
                                    <div id="consumo" class="tab-pane fade">
                                        <label style="white-space: pre-wrap;" id="lblConsumo"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>

        <div class="colorlib-shop">
            <div class="contenido">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3 text-center colorlib-heading">
                        <h2><span>Productos Similares</span></h2>
                        <p>Nos encanta contar nuestro éxito muy lejos, detrás de la palabra montañas, lejos de los países Vokalia y Consonantia, allí viven los textos ciegos.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 text-center">
                        <div class="product-entry">
                            <div class="product-img" style="background-image: url(products/MIEL-DE-ABEJAS-CEBOLLA-RABANITO-Y-AJOS.png);">
                                <div class="cart">
                                    <p>
                                        <span class="addtocart"><a href="TiendaSN.aspx"><i class="icon-shopping-cart"></i></a></span>
                                        <span><a href="DetalleProducto.aspx"><i class="icon-eye"></i></a></span>
                                    </p>
                                </div>
                            </div>
                            <div class="desc">
                                <h3><a href="shop.html">Floral Dress</a></h3>
                                <p class="price"><span>$300.00</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 text-center">
                        <div class="product-entry">
                            <div class="product-img" style="background-image: url(products/MIEL-DE-ABEJAS.png);">
                                <div class="cart">
                                    <p>
                                        <span class="addtocart"><a href="TiendaSN.aspx"><i class="icon-shopping-cart"></i></a></span>
                                        <span><a href="DetalleProducto.aspx"><i class="icon-eye"></i></a></span>
                                    </p>
                                </div>
                            </div>
                            <div class="desc">
                                <h3><a href="shop.html">Floral Dress</a></h3>
                                <p class="price"><span>$300.00</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 text-center">
                        <div class="product-entry">
                            <div class="product-img" style="background-image: url(products/MORINGA_CON_PROTEINAS.png);">
                                <div class="cart">
                                    <p>
                                        <span class="addtocart"><a href="TiendaSN.aspx"><i class="icon-shopping-cart"></i></a></span>
                                        <span><a href="DetalleProducto.aspx"><i class="icon-eye"></i></a></span>
                                    </p>
                                </div>
                            </div>
                            <div class="desc">
                                <h3><a href="shop.html">Floral Dress</a></h3>
                                <p class="price"><span>$300.00</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 text-center">
                        <div class="product-entry">
                            <div class="product-img" style="background-image: url(products/TOXIZERO.png);">
                                <div class="cart">
                                    <p>
                                        <span class="addtocart"><a href="TiendaSN.aspx"><i class="icon-shopping-cart"></i></a></span>
                                        <span><a href="DetalleProducto.aspx"><i class="icon-eye"></i></a></span>
                                    </p>
                                </div>
                            </div>
                            <div class="desc">
                                <h3><a href="shop.html">Floral Dress</a></h3>
                                <p class="price"><span>$300.00</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="js/sweetAlert.js" type="text/javascript"> </script>
    <script src="Scripts/jquery.flexslider.js"></script>
    <script type="text/javascript" src="js/proyecto2/jquery.elevatezoom.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script src="js/DetalleDeProducto.js" type="text/javascript"></script>
    <script>

        $('#colorlib-hero .flexslider').flexslider({
            animation: "fade",
            slideshowSpeed: 5000,
            directionNav: true,
            start: function () {
                setTimeout(function () {
                    $('.slider-text').removeClass('animated fadeInUp');
                    $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
                }, 1000);
            },
            before: function () {
                setTimeout(function () {
                    $('.slider-text').removeClass('animated fadeInUp');
                    $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
                }, 1000);
            }

        });

        $(".imagen").click(function (e) {
            var enlaceImagen = e.target.src;
            var data = $(this).attr("data-img");
            var lightbox = '<div class="ligthbox">' +
                '<img src="' + enlaceImagen + '" alt="" id="zoom_mw" data-zoom-image="' + data + '">' +
                '<div class="btn-close">X</div>' +
                '</div>';

            $("body").append(lightbox)
            $(".btn-close").click(function () {
                $(".ligthbox").remove();
                $(".zoomContainer").remove();
            })

        });



        $(document).ready(function () {
            $('select').formSelect();
        });


        $(document).ready(function () {

            var quantitiy = 0;
            $('.quantity-right-plus').click(function (e) {

                // Stop acting like a button
                e.preventDefault();
                // Get the field name
                var quantity = parseInt($('#quantity').val());

                // If is not undefined

                $('#quantity').val(quantity + 1);


                // Increment

            });

            $('.quantity-left-minus').click(function (e) {
                // Stop acting like a button
                e.preventDefault();
                // Get the field name
                var quantity = parseInt($('#quantity').val());

                // If is not undefined

                // Increment
                if (quantity > 0) {
                    $('#quantity').val(quantity - 1);
                }
            });

        });

    </script>
</asp:Content>
