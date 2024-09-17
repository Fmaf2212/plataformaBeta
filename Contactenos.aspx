<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="Contactenos.aspx.cs" Inherits="SantaNaturaNetwork.Contactenos" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <!-- Animate.css para que salga de abajo hacia arriba el texto en el banner -->
    <link rel="stylesheet" href="css/Banner de Store Template/animate.css">
    <!-- Bootstrap  -->
    <%--<link rel="stylesheet" href="css/Banner de Store Template/bootstrap.css">--%>

    <!-- Magnific Popup -->
    <%--	<link rel="stylesheet" href="css/Banner de Store Template/magnific-popup.css">--%>

    <!-- Flexslider  -->
    <%--	<link rel="stylesheet" href="css/Banner de Store Template/flexslider.css">--%>

    <!-- Owl Carousel -->
    <%--	<link rel="stylesheet" href="css/Banner de Store Template/owl.carousel.min.css">
	<link rel="stylesheet" href="css/Banner de Store Template/owl.theme.default.min.css">--%>

    <!-- Date Picker -->
    <%--	<link rel="stylesheet" href="css/Banner de Store Template/bootstrap-datepicker.css">--%>

    <!-- Theme style  -->
    <style>
        .parallax2 {
            /* The image used */
            background: url("img/imagen8.jpg");
            /* Set a specific height */
            /* Create the parallax scrolling effect */
            background-attachment: fixed;
            background-position: top;
            background-repeat: no-repeat;
            background-size: cover;
        }

        iframe {
            width: 100%;
            border: whitesmoke 8px ridge !important;
        }


        .navbar-brand{
            padding: 0 !important;
        }
    </style>
    <%--<link href="//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">--%>
    <!--Para que el banner salga muy bien diseñado-->
    <link rel="stylesheet" href="css/Banner de Store Template/style-v2.css">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">


    <%--	<!-- Modernizr JS -->
	<script src="js/Banner de Store Template/modernizr-2.6.2.min.js"></script>--%>
    <!--================Categories Banner Area =================-->
    <%--    <section class="solid_banner_area" style="margin-top:80px">
        <div class="container">
            <div class="solid_banner_inner">
                <h3>Contact</h3>
                <ul>
                    <li><a href="Index.aspx">Inicio</a></li>
                    <li><a href="Contactenos.aspx">Contactenos</a></li>
                </ul>
            </div>
        </div>
    </section>--%>
    <aside id="colorlib-hero" class="breadcrumbs" style="margin-top: 70px; margin-bottom: 50px">
        <div class="flexslider">
            <ul class="slides">
                <li class="parallax2" style="position: fixed">
                    <div class="overlay">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-6 col-md-offset-3 col-sm-12 col-xs-12 slider-text">
                                    <div class="slider-text-inner text-center" style="z-index: 1">
                                        <h1>Contáctenos</h1>
                                        <h2 class="bread">
                                            <span><a href="Index.aspx">Inicio</a></span>
                                            <span style="font-size: 10px"><a style="padding-top: 5px; color: #007BFF" class="glyphicon glyphicon-chevron-right"></a></span>
                                            <span>Contáctenos</span></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </aside>
    <!--================End Categories Banner Area =================-->

    <!--================Contact Area =================-->
    <section class="contact_area p_100">
        <div class="container">
            <div class="contact_title">
                <h2>Póngase en contacto</h2>
            </div>
            <div class="row contact_details">
                <div class="col-lg-4 col-md-6">
                    <div class="media">
                        <div class="d-flex">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                        </div>
                        <div class="media-body">
                            <p>
                                Av. Jorge Basadre 990,
                                <br />
                                San Isidro, Lima, Lima
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="media">
                        <div class="d-flex">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                        </div>
                        <div class="media-body">
                            <a href="tel: 012224775">(01) 2224775</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="media" id="correoSN">
                        <div class="d-flex">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                        </div>
                        <div class="media-body">
                            <a href="mailto:administrador.multinivel@santanaturaperu.net">administrador.multinivel@santanaturaperu.net</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12 maps">
                <iframe src="https://maps.google.com/maps?q=Av.%20jorge%20basadre%20990%20san%20isidro&t=&z=17&ie=UTF8&iwloc=&output=embed" width="600" height="450" frameborder="0" style="border: 0;" allowfullscreen=""></iframe>
            </div>
        </div>
    </section>
    <!--================End Contact Area =================-->

    <!--================Contact Success and Error message Area =================-->
    <div id="success" class="modal modal-message fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <i class="fa fa-close"></i>
                    </button>
                    <h2>Thank you</h2>
                    <p>Your message is successfully sent...</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Modals error -->

    <div id="error" class="modal modal-message fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <i class="fa fa-close"></i>
                    </button>
                    <h2>Sorry !</h2>
                    <p>Something went wrong </p>
                </div>
            </div>
        </div>
    </div>

    <!--================End Contact Success and Error message Area =================-->
    <script type="text/javascript">
        window.onload = function () {
            document.getElementById("idMenuContactenos").style.color = 'white';
            document.getElementById("idMenuContactenos").style.borderBottom = '3px solid white';
        }
    </script>


    <%--<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="js/jquery-3.2.1.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <!-- Rev slider js -->

    <!-- contact js -->
    <script src="js/jquery.form.js"></script>
    <script src="js/jquery.validate.min.js"></script>
    <script src="js/contact.js"></script>

    <script src="js/theme.js"></script>--%>

    <!--scripts de shop.html del proyecto Store Template-->
    <!-- Flexslider -->


    <script src="js/Banner de Store Template/jquery.flexslider-min.js"></script>
    <!-- Magnific Popup -->
    <script src="js/Banner de Store Template/jquery.magnific-popup.min.js"></script>
    <!-- Stellar Parallax -->
    <script src="js/Banner de Store Template/jquery.stellar.min.js"></script>
    <!-- Main -->
    <script src="js/Banner de Store Template/main.js"></script>



    <!--Para que abrá el submenu "Cerrar Sesión"-->
    <%--<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>--%>
</asp:Content>
