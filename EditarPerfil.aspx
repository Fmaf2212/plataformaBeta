<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="EditarPerfil.aspx.cs" Inherits="SantaNaturaNetworkV3.EditarPerfil" ClientIDMode="Static" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link rel="stylesheet" type="text/css" href="css/file-upload.css" />
    <link href="css/proyecto2/estilosCrearCuenta.css?v2" rel="stylesheet" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="js/proyecto2/eskju.jquery.scrollflow.min.js"></script>

    <style>
        .efectoImagenSocioEPP {
            -webkit-transform: scale(2);
            -o-transform: scale(2);
            -moz-transform: scale(2);
            transform: scale(2);
        }

        .anchoBotonGuardar {
            width: 40% !important;
        }


        /* User Cards */
        .user-box {
            width: 110px;
            margin: auto;
            margin-bottom: 20px;
        }

            .user-box img {
                width: 100%;
                border-radius: 50%;
                padding: 3px;
                background: #fff;
                -webkit-box-shadow: 0 5px 25px 0 #000000;
                -webkit-box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.2);
                -moz-box-shadow: 0 5px 25px 0 #000000;
                -moz-box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.2);
                box-shadow: 0 5px 25px 0 #000000;
                box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.2);
                box-shadow: 0 5px 25px 0 #000000;
                box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.2);
            }

        .profile-card-2 .card {
            position: relative;
        }

            .profile-card-2 .card .card-body {
                z-index: 1;
            }

            .profile-card-2 .card::before {
                content: "";
                position: absolute;
                top: 0;
                right: 0;
                left: 0;
                border-top-left-radius: .25rem;
                border-top-right-radius: .25rem;
                height: 112px;
                background-color: #e6e6e6;
            }

            .profile-card-2 .card.profile-primary::before {
                background-color: #008cff;
            }

            .profile-card-2 .card.profile-success::before {
                background-color: #15ca20;
            }

            .profile-card-2 .card.profile-danger::before {
                background-color: #fd3550;
            }

            .profile-card-2 .card.profile-warning::before {
                background-color: #ff9700;
            }

        .profile-card-2 .user-box {
            margin-top: 30px;
        }

        .profile-card-3 .user-fullimage {
            position: relative;
        }

            .profile-card-3 .user-fullimage .details {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
            }

        .profile-card-4 .user-box {
            width: 110px;
            margin: auto;
            margin-bottom: 10px;
            margin-top: 15px;
        }

        .profile-card-4 .list-icon {
            display: table-cell;
            font-size: 30px;
            padding-right: 20px;
            vertical-align: middle;
            color: #223035;
        }

        .profile-card-4 .list-details {
            display: table-cell;
            vertical-align: middle;
            font-weight: 600;
            color: #223035;
            font-size: 15px;
            line-height: 15px;
        }

            .profile-card-4 .list-details small {
                display: table-cell;
                vertical-align: middle;
                font-size: 12px;
                font-weight: 400;
                color: #808080;
            }

        /*Nav Tabs & Pills */
        .nav-tabs .nav-link {
            color: #223035;
            font-size: 12px;
            text-align: center;
            letter-spacing: 1px;
            font-weight: 600;
            margin: 2px;
            margin-bottom: 0;
            padding: 12px 20px;
            text-transform: uppercase;
            border: 1px solid transparent;
            border-top-left-radius: .25rem;
            border-top-right-radius: .25rem;
        }

            .nav-tabs .nav-link:hover {
                border: 1px solid transparent;
            }

            .nav-tabs .nav-link i {
                margin-right: 2px;
                font-weight: 600;
            }

        .top-icon.nav-tabs .nav-link i {
            margin: 0;
            font-weight: 500;
            display: block;
            font-size: 20px;
            padding: 5px 0;
        }

        .nav-tabs-primary.nav-tabs {
            border-bottom: 1px solid #008cff;
        }

        .nav-tabs-primary .nav-link.active, .nav-tabs-primary .nav-item.show > .nav-link {
            color: #008cff;
            background-color: #fff;
            border-color: #008cff #008cff #fff;
            border-top: 3px solid #008cff;
        }

        .nav-tabs-success.nav-tabs {
            border-bottom: 1px solid #15ca20;
        }

        .nav-tabs-success .nav-link.active, .nav-tabs-success .nav-item.show > .nav-link {
            color: #15ca20;
            background-color: #fff;
            border-color: #15ca20 #15ca20 #fff;
            border-top: 3px solid #15ca20;
        }

        .nav-tabs-info.nav-tabs {
            border-bottom: 1px solid #0dceec;
        }

        .nav-tabs-info .nav-link.active, .nav-tabs-info .nav-item.show > .nav-link {
            color: #0dceec;
            background-color: #fff;
            border-color: #0dceec #0dceec #fff;
            border-top: 3px solid #0dceec;
        }

        .nav-tabs-danger.nav-tabs {
            border-bottom: 1px solid #fd3550;
        }

        .nav-tabs-danger .nav-link.active, .nav-tabs-danger .nav-item.show > .nav-link {
            color: #fd3550;
            background-color: #fff;
            border-color: #fd3550 #fd3550 #fff;
            border-top: 3px solid #fd3550;
        }

        .nav-tabs-warning.nav-tabs {
            border-bottom: 1px solid #ff9700;
        }

        .nav-tabs-warning .nav-link.active, .nav-tabs-warning .nav-item.show > .nav-link {
            color: #ff9700;
            background-color: #fff;
            border-color: #ff9700 #ff9700 #fff;
            border-top: 3px solid #ff9700;
        }

        .nav-tabs-dark.nav-tabs {
            border-bottom: 1px solid #223035;
        }

        .nav-tabs-dark .nav-link.active, .nav-tabs-dark .nav-item.show > .nav-link {
            color: #223035;
            background-color: #fff;
            border-color: #223035 #223035 #fff;
            border-top: 3px solid #223035;
        }

        .nav-tabs-secondary.nav-tabs {
            border-bottom: 1px solid #75808a;
        }

        .nav-tabs-secondary .nav-link.active, .nav-tabs-secondary .nav-item.show > .nav-link {
            color: #75808a;
            background-color: #fff;
            border-color: #75808a #75808a #fff;
            border-top: 3px solid #75808a;
        }

        .tabs-vertical .nav-tabs .nav-link {
            color: #223035;
            font-size: 12px;
            text-align: center;
            letter-spacing: 1px;
            font-weight: 600;
            margin: 2px;
            margin-right: -1px;
            padding: 12px 1px;
            text-transform: uppercase;
            border: 1px solid transparent;
            border-radius: 0;
            border-top-left-radius: .25rem;
            border-bottom-left-radius: .25rem;
        }

        .tabs-vertical .nav-tabs {
            border: 0;
            border-right: 1px solid #dee2e6;
        }

            .tabs-vertical .nav-tabs .nav-item.show .nav-link, .tabs-vertical .nav-tabs .nav-link.active {
                color: #495057;
                background-color: #fff;
                border-color: #dee2e6 #dee2e6 #fff;
                border-bottom: 1px solid #dee2e6;
                border-right: 0;
                border-left: 1px solid #dee2e6;
            }

        .tabs-vertical-primary.tabs-vertical .nav-tabs {
            border: 0;
            border-right: 1px solid #008cff;
        }

            .tabs-vertical-primary.tabs-vertical .nav-tabs .nav-item.show .nav-link, .tabs-vertical-primary.tabs-vertical .nav-tabs .nav-link.active {
                color: #008cff;
                background-color: #fff;
                border-color: #008cff #008cff #fff;
                border-bottom: 1px solid #008cff;
                border-right: 0;
                border-left: 3px solid #008cff;
            }

        .tabs-vertical-success.tabs-vertical .nav-tabs {
            border: 0;
            border-right: 1px solid #15ca20;
        }

            .tabs-vertical-success.tabs-vertical .nav-tabs .nav-item.show .nav-link, .tabs-vertical-success.tabs-vertical .nav-tabs .nav-link.active {
                color: #15ca20;
                background-color: #fff;
                border-color: #15ca20 #15ca20 #fff;
                border-bottom: 1px solid #15ca20;
                border-right: 0;
                border-left: 3px solid #15ca20;
            }

        .tabs-vertical-info.tabs-vertical .nav-tabs {
            border: 0;
            border-right: 1px solid #0dceec;
        }

            .tabs-vertical-info.tabs-vertical .nav-tabs .nav-item.show .nav-link, .tabs-vertical-info.tabs-vertical .nav-tabs .nav-link.active {
                color: #0dceec;
                background-color: #fff;
                border-color: #0dceec #0dceec #fff;
                border-bottom: 1px solid #0dceec;
                border-right: 0;
                border-left: 3px solid #0dceec;
            }

        .tabs-vertical-danger.tabs-vertical .nav-tabs {
            border: 0;
            border-right: 1px solid #fd3550;
        }

            .tabs-vertical-danger.tabs-vertical .nav-tabs .nav-item.show .nav-link, .tabs-vertical-danger.tabs-vertical .nav-tabs .nav-link.active {
                color: #fd3550;
                background-color: #fff;
                border-color: #fd3550 #fd3550 #fff;
                border-bottom: 1px solid #fd3550;
                border-right: 0;
                border-left: 3px solid #fd3550;
            }

        .tabs-vertical-warning.tabs-vertical .nav-tabs {
            border: 0;
            border-right: 1px solid #ff9700;
        }

            .tabs-vertical-warning.tabs-vertical .nav-tabs .nav-item.show .nav-link, .tabs-vertical-warning.tabs-vertical .nav-tabs .nav-link.active {
                color: #ff9700;
                background-color: #fff;
                border-color: #ff9700 #ff9700 #fff;
                border-bottom: 1px solid #ff9700;
                border-right: 0;
                border-left: 3px solid #ff9700;
            }

        .tabs-vertical-dark.tabs-vertical .nav-tabs {
            border: 0;
            border-right: 1px solid #223035;
        }

            .tabs-vertical-dark.tabs-vertical .nav-tabs .nav-item.show .nav-link, .tabs-vertical-dark.tabs-vertical .nav-tabs .nav-link.active {
                color: #223035;
                background-color: #fff;
                border-color: #223035 #223035 #fff;
                border-bottom: 1px solid #223035;
                border-right: 0;
                border-left: 3px solid #223035;
            }

        .tabs-vertical-secondary.tabs-vertical .nav-tabs {
            border: 0;
            border-right: 1px solid #75808a;
        }

            .tabs-vertical-secondary.tabs-vertical .nav-tabs .nav-item.show .nav-link, .tabs-vertical-secondary.tabs-vertical .nav-tabs .nav-link.active {
                color: #75808a;
                background-color: #fff;
                border-color: #75808a #75808a #fff;
                border-bottom: 1px solid #75808a;
                border-right: 0;
                border-left: 3px solid #75808a;
            }

        .nav-pills .nav-link {
            border-radius: .25rem;
            color: #223035;
            font-size: 12px;
            text-align: center;
            letter-spacing: 1px;
            font-weight: 600;
            text-transform: uppercase;
            margin: 3px;
            padding: 12px 20px;
            -webkit-transition: all 0.3s ease;
            -moz-transition: all 0.3s ease;
            -o-transition: all 0.3s ease;
            transition: all 0.3s ease;
        }

            .nav-pills .nav-link:hover {
                background-color: #28a745;
            }

            .nav-pills .nav-link i {
                margin-right: 2px;
                font-weight: 600;
            }

        .top-icon.nav-pills .nav-link i {
            margin: 0;
            font-weight: 500;
            display: block;
            font-size: 20px;
            padding: 5px 0;
        }

        .nav-pills .nav-link.active, .nav-pills .show > .nav-link {
            color: #fff;
            background-color: #008cff;
            box-shadow: 0 4px 20px 0 #000000, 0 7px 10px -5px #008cff;
        }

        .nav-pills-success .nav-link.active, .nav-pills-success .show > .nav-link {
            color: #fff;
            background-color: #15ca20;
            box-shadow: 0 4px 20px 0 #000000, 0 7px 10px -5px #15ca20;
        }

        .nav-pills-info .nav-link.active, .nav-pills-info .show > .nav-link {
            color: #fff;
            background-color: #0dceec;
            box-shadow: 0 4px 20px 0 #000000, 0 7px 10px -5px #0dceec;
        }

        .nav-pills-danger .nav-link.active, .nav-pills-danger .show > .nav-link {
            color: #fff;
            background-color: #fd3550;
            box-shadow: 0 4px 20px 0 #000000, 0 7px 10px -5px #fd3550;
        }

        .nav-pills-warning .nav-link.active, .nav-pills-warning .show > .nav-link {
            color: #fff;
            background-color: #ff9700;
            box-shadow: 0 4px 20px 0 #000000, 0 7px 10px -5px #ff9700;
        }

        .nav-pills-dark .nav-link.active, .nav-pills-dark .show > .nav-link {
            color: #fff;
            background-color: #223035;
            box-shadow: 0 4px 20px 0 #000000, 0 7px 10px -5px #223035;
        }

        .nav-pills-secondary .nav-link.active, .nav-pills-secondary .show > .nav-link {
            color: #fff;
            background-color: #75808a;
            box-shadow: 0 4px 20px 0 #000000, 0 7px 10px -5px #75808a;
        }

        .card .tab-content {
            padding: 1rem 0 0 0;
        }

        .z-depth-3 {
            -webkit-box-shadow: 0 11px 7px 0 #000000,0 13px 25px 0 #000000;
            -webkit-box-shadow: 0 11px 7px 0 rgba(0,0,0,0.19),0 13px 25px 0 rgba(0,0,0,0.3);
            box-shadow: 0 11px 7px 0 #000000,0 13px 25px 0 #000000;
            box-shadow: 0 11px 7px 0 rgba(0,0,0,0.19),0 13px 25px 0 rgba(0,0,0,0.3);
        }

        .form-group input.btnGuardar {
            line-height: 1;
            max-width: 140px;
            margin-top: 30px;
            height: calc(4rem);
            font-size: 16px;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <input id="hdnContador" name="hdnContador" type="hidden">
    <asp:HiddenField ID="hf_IdCliente" ClientIDMode="Static" runat="server" />
    <input id="hdn_clave_actual" name="hdn_clave_actual" type="hidden">
    <link href="https://unpkg.com/gijgo@1.9.13/css/gijgo.min.css" rel="stylesheet" type="text/css" />

    <div class="main-content">
        <!-- Header -->
        <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" id="imagenSocioEPP" style="min-height: 600px; background-image: url(https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/profile-cover.jpg); background-size: cover; background-position: center top; background-attachment: fixed">
            <!-- Mask -->
            <span class="mask bg-gradient-default opacity-8"></span>
            <!-- Header container -->
            <div class="container-fluid d-flex align-items-center">
                <div class="row">
                    <div class="col-lg-7 col-md-10">
                        <h1 class="display-2 text-white">Hola <%=nombres %></h1>
                        <h2 class="text-white"><%=nombres %></h2>
                        <p class="text-white mt-0 mb-5">Esta es tu página de perfil. Puede ver el progreso que ha logrado con su trabajo y administrar su información</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Page content -->
        <div class="container-fluid mt--7">
            <div class="row" style="margin-bottom: 50px;">
                <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0 slide scrollflow -slide-top">
                    <div class="profile-card-4 z-depth-3">
                        <div class="card shadow">
                            <div class="row justify-content-center">
                                <div class="col-lg-3 order-lg-2">
                                    <div class="card-profile-image">
                                        <a href="#">
                                            <div id="FotoCliente2">
                                                <img id="FotoCliente" src="img/usuario1.png" class="rounded-circle" alt="user avatar" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="card-body pt-0 pt-md-4">
                                <div class="row" style="margin-top: 5.5rem;">
                                    <div class="col">
                                        <div class="card-profile-stats d-flex justify-content-center mt-md-5">
                                            <div>
                                            </div>
                                            <div>
                                            </div>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center" style="display:none;">
                                    <h3 id="NombrePerfil" runat="server" class="mb-1"></h3>
                                    <span class="">MILLONARIO</span>
                                </div>
                                <div class="card-body">
                                    <ul class="list-group shadow-none">
                                        <li class="list-group-item">
                                            <label class="col-lg-3 col-form-label form-control-label"></label>
                                            <div class="col-lg-9">
                                                <label class="file-upload btn btn-success form-control">
                                                    Cambiar foto
                    <%--<input type="file" class="form-control" accept="image/x-png,image/jpeg" runat="server" style="display: contents;" />--%>
                                                    <asp:FileUpload CssClass="form-control imagen" ID="fileUpload" runat="server" />
                                                </label>
                                            </div>
                                        </li>

                                        <li class="list-group-item">
                                            <div class="list-icon">
                                                <i class="fa fa-phone-square"></i>
                                            </div>
                                            <div class="list-details">
                                                <span id="PerfilNumeroCelular" runat="server"></span>
                                                <small>
                                                    <label id="NumeroEditar">Número de Celular</label></small>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="list-icon">
                                                <i class="fa fa-envelope"></i>
                                            </div>
                                            <div class="list-details">
                                                <span id="PerfilCorreo" runat="server"></span>
                                                <small>
                                                    <label id="CorreoEditar">Correo</label></small>
                                            </div>
                                        </li>
                                    </ul>
                                    <div class="row text-center mt-4">
                                        <div class="col p-2">
                                            <h4 class="mb-1">2.2k</h4>
                                            <small class="mb-0 font-weight-bold">180 Puntos</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-8 order-xl-1 slide scrollflow -slide-top">
                    <div class="card bg-secondary1 shadow">
                        <div class="card-header bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">Mi Perfil</h3>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="tab-content p-3">
                                <div class="tab-pane active show" id="edit">
                                     <div class="form-group row">
                                           <div class="col-lg-4">
                                            <div class="form-group focused">                                                              
                                                 <button type="button" class="btn btn-success col-sm-5" id="btnCambiarClave" onclick="open_cambiar_password();" style="max-width: 100px;">Cambiar Clave &nbsp   <i class="glyphicon glyphicon-edit" onclick="open_cambiar_password();"></i></button>
                                                 <input class="form-controlEPP form-control-alternative" style="display:none" maxlength="12" id="txtCla" placeholder="CLAVE..." required runat="server" type="text" />
                                            </div>
                                           </div>
                                          <div class="col-lg-6">
                                            <div class="form-group focused">                                                              
                                                 <button type="button" class="btn btn-success col-sm-5" id="btnPreguntasSeguridad" onclick="open_config_preguntas_seguridad();">Preguntas Seguridad &nbsp   <i class="glyphicon glyphicon-question-sign" onclick="open_config_preguntas_seguridad();"></i></button>
                                                 <input class="form-controlEPP form-control-alternative" style="display:none" maxlength="12" id="Text1" placeholder="CLAVE..." required runat="server" type="text" />
                                            </div>
                                           </div>
                                    </div>
                                    <div class="form-group row">
                                       
                                        <div class="col-lg-4">
                                            <div class="form-group focused">
                                                <label class="col-form-label form-control-label">Usuario</label>
                                                <input class="form-controlEPP form-control-alternative" maxlength="8" id="txtUs" placeholder="USUARIO..." required runat="server" type="text" />
                                            </div>
                                        </div>
                                        
                                        <div class="col-lg-4">
                                            <div class="form-group focused">
                                                <label class="col-form-label form-control-label">CDR Premio</label>
                                                <asp:DropDownList CssClass="form-controlEPP btn-lg" required="" runat="server" ID="ddlPremio" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-lg-4">
                                            <div class="form-group focused">
                                                <label class="col-form-label form-control-label">Nombre</label>
                                                <input class="form-controlEPP text-uppercase form-control-alternative" id="txtNombre" placeholder="Nombre..." required runat="server" type="text" readonly/>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="form-group focused">
                                                <label class="col-form-label form-control-label">Apellido Paterno</label>
                                                <input class="form-controlEPP text-uppercase form-control-alternative" id="txtApePat" placeholder="Apellido Paterno..." required runat="server" type="text" readonly/>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="form-group focused">
                                                <label class="col-form-label form-control-label">Apellido Materno</label>
                                                <input class="form-controlEPP text-uppercase form-control-alternative" id="txtApeMat" placeholder="Apellido Materno..." required runat="server" type="text" readonly/>
                                            </div>
                                        </div>
                                    </div>
                                    <hr class="my-4">

                                    <div class="form-group row">
                                        <div class="col-lg-4" hidden>
                                            <div class="form-group focused">
                                                <label class="col-form-label form-control-label">UpLine</label>
                                                <input class="form-control form-control-alternative" placeholder="UpLine..." runat="server" type="text" />
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <label class="col-form-label form-control-label">Tipo de Cliente</label>
                                            <asp:DropDownList CssClass="form-controlEPP btn-lg" Enabled="false" runat="server" ID="cboTipoCliente" />
                                        </div>
                                        <div class="col-lg-4">
                                            <label class="col-form-label form-control-label">Tipo de Establecimiento</label>
                                            <asp:DropDownList CssClass="form-controlEPP btn-lg" required="" runat="server" ID="cboTipoEstablecimiento" />
                                        </div>

                                        <div class="col-lg-4">
                                            <div class="form-group focused">
                                                <label class="col-form-label form-control-label">Fecha de Nacimiento</label>
                                                <div>
                                                    <input type="text" required id="datepicker" class="btn-lg" readonly />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <div class="col-lg-4" hidden>
                                            <div class="form-group focused">
                                                <label class="col-form-label form-control-label">Patrocinador</label>
                                                <input class="form-controlEPP text-uppercase form-control-alternative" placeholder="Patrocinador..." runat="server" type="text" />
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <label class="col-form-label form-control-label">Sexo</label>
                                            <asp:DropDownList required="" runat="server" CssClass="form-controlEPP" ID="ComboSexo">
                                                <asp:ListItem Value="">Seleccione</asp:ListItem>
                                                <asp:ListItem Value="1">MASCULINO</asp:ListItem>
                                                <asp:ListItem Value="2">FEMENINO</asp:ListItem>
                                            </asp:DropDownList>
                                        </div>
                                        <div class="col-lg-4">
                                            <label class="col-form-label form-control-label">Tipo de Documento</label>
                                            <asp:DropDownList required="" runat="server" CssClass="form-controlEPP" ID="cboTipoDoc">
                                                <asp:ListItem Value="">Seleccione</asp:ListItem>
                                                <asp:ListItem Value="1">DNI</asp:ListItem>
                                                <asp:ListItem Value="2">PASAPORTE</asp:ListItem>
                                            </asp:DropDownList>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="form-group focused">
                                                <label class="col-form-label form-control-label">N° Documento</label>
                                                <input class="form-controlEPP form-control-alternative" id="txtDocumento" placeholder="N° Documento..." required runat="server" type="text" readonly/>
                                            </div>
                                        </div>
                                    </div>
                                    <hr class="my-4">
                                    <div class="form-group row">
                                        <div class="col-lg-4">
                                            <div class="form-group focused">
                                                <label class="col-form-label form-control-label">Dirección</label>
                                                <input class="form-controlEPP text-uppercase form-control-alternative" id="txtDireccion" placeholder="Dirección..." required runat="server" type="text" readonly/>
                                                <label class="col-form-label form-control-label" style="color:red">** Si desea modificar la dirección contactesé con atención al cliente</label>
                                            </div>
                                        </div>
                                        <div class="col-lg-8">
                                            <div class="form-group focused">
                                                <label class="col-form-label form-control-label">Referencia</label>
                                                <input class="col-lg-12 form-controlEPP text-uppercase form-control-alternative" id="txtReferencia" placeholder="Referencia..." runat="server" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-lg-4">
                                            <label class="col-form-label form-control-label">País de Operaciones</label>
                                            <asp:DropDownList CssClass="form-controlEPP" required="" runat="server" ID="cboPais" />
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="form-group focused">
                                                <label class="col-form-label form-control-label">Telefono</label>
                                                <input class="form-controlEPP form-control-alternative" placeholder="Teléfono..." id="txtTelefono" runat="server" type="text" />
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="form-group focused">
                                                <label class="col-form-label form-control-label">Celular</label>
                                                <input class="form-controlEPP form-control-alternative" placeholder="Celular..." id="txtCelular" required="" runat="server" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-lg-4">
                                            <label class="col-form-label form-control-label">Departamento</label>
                                            <asp:DropDownList CssClass="form-controlEPP" required="" runat="server" ID="cboDepartamento" />
                                        </div>
                                        <div class="col-lg-4">
                                            <label class="col-form-label form-control-label">Provincia</label>
                                            <asp:DropDownList CssClass="form-controlEPP" required="" runat="server" ID="cboProvincia" />
                                        </div>
                                        <div class="col-lg-4">
                                            <label class="col-form-label form-control-label">Distrito</label>
                                            <asp:DropDownList CssClass="form-controlEPP" required="" runat="server" ID="cboDistrito" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-lg-4">
                                            <label class="col-form-label form-control-label">Ubigeo</label>
                                            <input class="form-controlEPP form-control-alternative" id="txtUbigeo" runat="server" type="text" readonly/>
                                        </div>
                                    </div>
                                    <hr class="my-4">
                                    <div class="form-group row">
                                        <div class="col-lg-4">
                                            <div class="form-group focused">
                                                <label class="col-form-label form-control-label">Correo</label>
                                                <input class="form-controlEPP form-control-alternative" placeholder="Correo..." id="txtCorreo" required runat="server" type="text" />
                                            </div>
                                        </div>

                                        <div class="col-lg-4">
                                            <div class="form-group focused">
                                                <label class="col-form-label form-control-label">RUC</label>
                                                <input class="form-controlEPP form-control-alternative" placeholder="RUC..." id="txtRuc" runat="server" type="text" />
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="form-group focused">
                                                <label class="col-form-label form-control-label">N° Cuenta Interbancaria</label>
                                                <input class="form-controlEPP form-control-alternative" placeholder="N° Cuenta Bancaria..." id="txtCuenta" runat="server" type="text" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <div class="col-lg-4">
                                            <div class="form-group focused">
                                                <label class="col-form-label form-control-label">Banco</label>
                                                <input class="form-controlEPP text-uppercase form-control-alternative" placeholder="Banco..." id="txtBanco" runat="server" type="text" />
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="form-group focused">
                                                <label class="col-form-label form-control-label">N° Cuenta Depósito</label>
                                                <input class="form-controlEPP form-control-alternative" placeholder="N° Cuenta Deposito..." id="txtDeposito" runat="server" type="text" />
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="form-group focused">
                                                <label class="col-form-label form-control-label">N° Cuenta Detracciones</label>
                                                <input class="form-controlEPP form-control-alternative" placeholder="N° Cuenta Detracciones..." id="txtDetracciones" runat="server" type="text" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <div class="col-lg-4">
                                            <div class="form-group focused">
                                                <label class="col-form-label form-control-label"  style="display: flex !important;">Archivo DNI</label>
                                                <label id="lblArchiveDni" class="file-upload btn btn-success col-sm-5">
                                                    Subir Archivo ...
                                                    <asp:FileUpload ID="archiveDNI" runat="server" />
                                                </label>
                                            </div>
                                        </div>
                                        
                                        <div class="col-lg-4">
                                                <label class="col-form-label form-control-label"  style="display: flex !important;">Recibo de dirección (luz, agua, teléfono, etc.)</label>

                                            <label class="file-upload btn btn-success col-sm-5">
                                            Archivo Dirección ...
                                                <asp:FileUpload ID="archiveAddress" runat="server" />
                                            </label>
                                        </div>
                                    </div>

                                    <div class="form-group row text-center">
                                        <div class="col-lg-12">
                                            <asp:Button CssClass="btn-lg btn1 btn-success form-controlEPP anchoBotonGuardar btnGuardar" ID="btnSave" runat="server" Text="GUARDAR" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

           <div class="modal" id="ModalCambioPassword" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" data-backdrop="static" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                 <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title font-weight-bold"">Cambiar Clave</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-12">
                                <div class="form-group row">    
                                    <div class="col-lg-12">
                                         <div class="form-group focused">
                                              <label class="col-form-label form-control-label">Clave Actual</label>
                                              <input class="form-controlEPP text-uppercase form-control-alternative" id="id_clave_actual" placeholder="Ingrese Clave Actual..." type="password" oncopy="return false" onpaste="return false"/>
                                             <label class="col-form-label form-control-label" id="mensaje_clave_actual" style="display:none">Correcto</label>
                                          </div>
                                    </div>
                                 </div>
                               <div class="form-group row">
                                    <div class="col-lg-12">
                                         <div class="form-group focused">
                                              <label class="col-form-label form-control-label">Nueva Clave</label>
                                              <input class="form-controlEPP text-uppercase form-control-alternative" id="id_nueva_clave" placeholder="Ingrese Nueva Clave..." type="password" oncopy="return false" onpaste="return false"/>
                                              <label class="col-form-label form-control-label" id="mensaje_nueva_clave" style="display:none"></label>           
                                          </div>
                                    </div>
                               </div>
                                 <div class="form-group row">
                                        <div class="col-lg-12">
                                             <div class="form-group focused">
                                                  <label class="col-form-label form-control-label">Confirmar Clave</label>
                                                  <input class="form-controlEPP text-uppercase form-control-alternative" id="id_confirmar_clave" placeholder="Confirmar Nueva Clave..." type="password" oncopy="return false" onpaste="return false"/>
                                                    <label class="col-form-label form-control-label" id="mensaje_confirmar_clave" style="display:none"></label>            
                                             </div>
                                        </div>
                                        
                                   </div>
                                 <div class="form-group row" style="display: none;">
                                        <div class="col-lg-12">
                                             <div class="form-group focused">
                                                <div class="alert alert-danger" role="alert">
                                                 <i class="glyphicon glyphicon-info-sign"></i>&nbsp;Alerta: Tu Clave debe contener una letra mayúscula, minúscula,numero,caracter especial y debe tener mínimo 8 dígitos. Ejemplo: Peru321.
                                                </div>
                                             </div>
                                        </div>
                                        
                                   </div>
                            </div>
                        </div>
                    </div>                 
                    <div class="modal-footer ">
                        <button type="button" class="btn btn-lg btn-danger" data-dismiss="modal">
                            <span class="glyphicon glyphicon-ban-circle" aria-hidden="true"></span>&nbsp;Cerrar
                        </button>
                        <%--<button type="button" class="btn btn-lg btn-success" data-dismiss="modal" id="btn_guardar_clave" style="display:none" onclick="validar_cambio_clave();">Guardar</button>--%>
                        <button type="button" class="btn btn-lg btn-success" id="btn_guardar_clave" style="display:none" onclick="validar_cambio_clave();">
                                        <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>&nbsp;Guardar
                                    </button>

                     <%-- <div class="form-group row" style="text-align:center">
                                
                               
                                <div class="col-lg-6" style="margin: 0px 0px 5px 0px;">
                                    <button type="button" class="btn btn-success" id="btn_guardar_clave" style="display:none" onclick="validar_cambio_clave();">
                                        <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>&nbsp;Guardar
                                    </button>
                                </div>
                                <div class="col-lg-6" style="margin: 00px 0px 5px 0px;">
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">
                                        <span class="glyphicon glyphicon-ban-circle" aria-hidden="true"></span>&nbsp;Cerrar
                                    </button>
                                </div>
                          
                               
                            </div>--%>
                        
                    </div>
                     </div>
                </div>
            </div>
        
             <div class="modal" id="ModalPreguntasSeguridad" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" data-backdrop="static" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                     <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title font-weight-bold">Preguntas de Seguridad</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <fieldset id="ContenidoVerificarPreguntas" class="scheduler-border" style="margin-top: 10px;">
                            <div class="row">
                                <div class="col-lg-11" style="margin: 0px 0px 5px 20px;background-color:lemonchiffon">
                                    <span class="lblMedio-sm" >Recuerde, éstas preguntas le ayudarán a recuperar su clave.<br> Por favor ingresar su respuesta.</span>
                                </div>
                            </div>
                            <br>
                             <div id="idpreguntas">

                             
                            <div class="row">
                                <div class="col-lg-11" style="margin: 0px 0px 5px 10px;">
                                    <span class="lblMedio input-sm" id="span_pregunta"><b></b></span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-11" style="margin: 0px 0px 5px 10px;">
                                    <textarea id="txt_Respuesta_1" name="txt_Respuesta" class="form-control input-sm" title="Repuesta 1" placeholder="Ingresar Respuesta 1" maxlength="200"></textarea>
                                </div>
                            </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-11" style="margin: 0px 0px 0px 15px;">
                                    <div id="Leyenda4" class="alert alert-danger" style="display: none">
                                        <p><strong>¡Alerta!</strong></p>
                                        <ul style="list-style-type: circle" id="ListaDescripcionValidacion4"></ul>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        </div>                 
                        <div class="modal-footer ">
                            <%--<div class="form-group row" style="text-align:center">
                                <div class="col-lg-2" style="margin: 0px 0px 5px 0px;">
                                   
                                </div>
                                <div class="col-lg-4" style="margin: 0px 0px 5px 0px;">
                                </div>
                                <div class="col-lg-2" style="margin: 0px 0px 5px 0px;">
                                    <button type="button" class="btn btn-success" id="btn_validar_preguntas" onclick="prueba();">
                                        <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>&nbsp;Continuar
                                    </button>
                                </div>
                                <div class="col-lg-1" style="margin: 0px 0px 5px 0px;">
                                </div>
                                <div class="col-lg-2" style="margin: 00px 0px 5px 0px;">
                                    <button type="button" class="btn btn-danger" onclick="prueba();">
                                        <span class="glyphicon glyphicon-ban-circle" aria-hidden="true"></span>&nbsp;Cancelar
                                    </button>
                                </div>
                            </div>--%>
                            <button type="button" class="btn btn-lg btn-danger" data-dismiss="modal">
                            <span class="glyphicon glyphicon-ban-circle" aria-hidden="true"></span>&nbsp;Cerrar
                        </button>
                        <%--   <button type="button" class="btn btn-lg btn-success" data-dismiss="modal" id="btn_validar_preguntas" style="display:block" onclick="validar_cambio_clave();">Guardar</button>
                        --%>    <button type="button" class="btn btn-lg btn-success" id="btn_validar_preguntas" onclick="validar_preguntas_seguridad();">
                                        <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>&nbsp;Guardar
                                    </button>
                        </div>
                      </div>
                  </div>
            </div>
        </div>
    
    <asp:HiddenField ID="Hdn_CaducidadClave" ClientIDMode="Static" runat="server" />
    <asp:HiddenField ID="FechaNaci" runat="server" />
    <asp:HiddenField ID="FechaNaciAyuda" runat="server" />

    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://unpkg.com/gijgo@1.9.13/js/gijgo.min.js" type="text/javascript"></script>
    <script src="js/sweetAlert.js" type="text/javascript"> </script>
    <script src="js/file-uploadv1.js"></script>
    <script src="js/EditarPerfilNuevoV3.js?v3"></script>
    
    <script src="js/bootstrap4.min.js"></script>
     <!---->
    <link rel="stylesheet" href="assets/Estilos/alertify.core.css" />
    <link rel="stylesheet" href="assets/Estilos/alertify.default.css" id="toggleCSS" />
    <script src="assets/Estilos/alertify.min.js" type="text/javascript"></script>

    <style>

          .alertify {
              background: #FFF;
              border: 10px solid #f8f9fa;
              border: 10px solid #f8f9fa;
          }

          </style>

    <script>
          //Para que el menu del navbar se quede de un color cuando esté seleccionado
          window.onload = function () {
              document.getElementById("idEditarPerfil").style.color = 'var(--Dark-grises)';
              document.getElementById("idEditarPerfil").style.fontWeight = '700';
              $('.file-upload').file_upload();
          }

          $('#datepicker').datepicker({
              uiLibrary: 'bootstrap4',
              format: 'dd/mm/yyyy'
          });

          function filePreview(input) {
              if (input.files && input.files[0]) {
                  var reader = new FileReader();
                  reader.onload = function (e) {
                      document.getElementById("FotoCliente").src = e.target.result;
                  }
                  reader.readAsDataURL(input.files[0]);
              }
          }
          $('.imagen').change(function () {
              filePreview(this);
          });

          var fechaNacimiento = document.getElementById('<%= FechaNaciAyuda.ClientID %>');

          $('#datepicker').val(fechaNacimiento.value);

          function GuardarCambios() {
              var fechaNacimiento = document.getElementById('<%= FechaNaciAyuda.ClientID %>');
              fechaNacimiento.value = $("[id$=datepicker]").val();
          }

          function validarLetras(e) {
              var keyCode = (e.keyCode ? e.keyCode : e.which);
              if (keyCode > 47 && keyCode < 58 || keyCode > 95 && keyCode < 107) {
                  e.preventDefault();
              }
          }

          function validarNumeros(evt) {
              var charCode = (evt.which) ? evt.which : event.keyCode;
              if (charCode > 31 && (charCode < 48 || charCode > 57))
                  return false;
              return true;
          }

          $(document).ready(function () {
              $("#id_clave_actual").on("change", function () {
                  ValidarClaveActual();
              });
              $("#id_nueva_clave").on("change", function () {
                  ValidarNuevaClave();
              });
              $("#id_confirmar_clave").on("change", function () {
                  ValidarConfirmarClave();
              });
          })
          function open_cambiar_password() {
              //     alert("dsdd");
              limpiar();
              $('#ModalCambioPassword').modal('show');
          }
          function open_config_preguntas_seguridad() {
              ListadoPreguntas();
              $('#ModalPreguntasSeguridad').modal('show');

          }

          function ValidarClaveActual() {

              var clave_actual = $("#id_clave_actual").val();
              var nueva_clave = $("#id_nueva_clave").val();
              var confirmar_clave = $("#id_confirmar_clave").val();
              var element_btn_guardar_clave = document.getElementById("btn_guardar_clave");

              var IdCliente = document.getElementById('hf_IdCliente').value;
              var usuario = IdCliente;
              var clave = $("#id_clave_actual").val();
              var tipo = "Actual";
              $.ajax({
                  type: 'POST',
                  url: 'EditarPerfil.aspx/ValidarClaveUsuario',
                  contentType: 'application/json; charset=utf-8',
                  dataType: 'json',
                  cache: false,
                  data: '{usuario: "' + usuario + '",clave: "' + clave + '",tipo: "' + tipo + '"}',
                  success: function (data) {
                      ndata = data.d;
                      var element_mensaje_clave_actual = document.getElementById("mensaje_clave_actual");
                      if (ndata == 'Clave Correcta') {
                          element_mensaje_clave_actual.style.display = "block";
                          //element_mensaje_clave_actual.style.backgroundColor = "Green";
                          element_mensaje_clave_actual.style.color = "Green";
                          document.getElementById('mensaje_clave_actual').innerHTML = "Clave Correcta";
                          document.getElementById("id_nueva_clave").focus();
                          // alert(ndata);

                          if (nueva_clave == "" || confirmar_clave == "" || clave_actual == "") {
                              element_btn_guardar_clave.style.display = "none";
                              return;
                          }

                          element_btn_guardar_clave.style.display = "block";
                          hdn_clave_actual.value = "clave correcto";

                      } else {
                          element_mensaje_clave_actual.style.display = "block";
                          // element_mensaje_clave_actual.style.backgroundColor = "Red";
                          element_mensaje_clave_actual.style.color = "Red";
                          document.getElementById('mensaje_clave_actual').innerHTML = "Clave Incorrecta.";
                          document.getElementById("id_clave_actual").focus();
                          element_btn_guardar_clave.style.display = "none";
                          hdn_clave_actual.value = "clave incorrecto";
                      }

                      var NombreCliente;
                      var idTipoCompra;
                      var FechaPago;
                      var TipoCompra;
                      var NotaDelivery;
                      var Ruc;
                  }
              })
          }

          function ValidarNuevaClave() {

              var clave_actual = $("#id_clave_actual").val();
              var nueva_clave = $("#id_nueva_clave").val();
              var confirmar_clave = $("#id_confirmar_clave").val();
              var element_btn_guardar_clave = document.getElementById("btn_guardar_clave");


              var tipo = "Nueva";
              var IdCliente = document.getElementById('hf_IdCliente').value;
              var usuario = IdCliente;
              var clave = $("#id_nueva_clave").val();

              //Debe contener 8 o mas caracteres
              var WeakPass = /(?=.{8,}).*/;
              var validar_WeakPass = WeakPass.test(nueva_clave);

              //Debe contener letras minusculas y al menos un numero
              var MediumPass = /^(?=\S*?[a-z])(?=\S*?[0-9])\S{5,}$/;

              //Debe contener una letra Mayuscula, letras minusculas y al menos un numero
              var StrongPass = /^(?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9])\S{5,}$/;
              //Debe contener una Mayuscula, letras minusculas, un numero, y un caracter especial

              var VryStrongPass = /^(?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9])(?=\S*?[^\w\*])\S{8,}$/;
              var validar_VryStrongPass = VryStrongPass.test(nueva_clave);


              var validar_MediumPass = MediumPass.test(nueva_clave);
              var element_mensaje_nueva_clave = document.getElementById("mensaje_nueva_clave");

              if (nueva_clave == '') {
                  // document.getElementById('mensaje_nueva_clave').innerHTML = "Debe elegir una clave diferente a: Peru321.";
                  element_mensaje_nueva_clave.style.display = "none";
                  document.getElementById("id_nueva_clave").focus();
                  element_btn_guardar_clave.style.display = "none";
                  //element_mensaje_nueva_clave.style.color = "Red";
                  document.getElementById('id_confirmar_clave').innerHTML = "";

                  return;
              }
              //if (nueva_clave == 'Peru321.') {
              //    document.getElementById('mensaje_nueva_clave').innerHTML = "Debe elegir una clave diferente a: Peru321.";
              //    element_mensaje_nueva_clave.style.display = "block";
              //    element_mensaje_nueva_clave.style.color = "Red";
              //    document.getElementById("id_nueva_clave").focus();
              //    element_btn_guardar_clave.style.display = "none";
              //    document.getElementById('id_confirmar_clave').innerHTML = "";
              //    return;
              //}
              //if (validar_WeakPass == false)
              //{
              //    document.getElementById('mensaje_nueva_clave').innerHTML = "Debe contener 8 o mas caracteres";
              //    element_mensaje_nueva_clave.style.display = "block";
              //    element_mensaje_nueva_clave.style.color = "Red";
              //    document.getElementById("id_nueva_clave").focus();
              //    element_btn_guardar_clave.style.display = "none";
              //    document.getElementById('id_confirmar_clave').innerHTML = "";
              //    return;
              //}
              //if (validar_VryStrongPass == false)
              //{
              //    document.getElementById('mensaje_nueva_clave').innerHTML = "Debe contener letra mayúscula, minúscula, número, caracter especial y debe tener mínimo 8 dígitos <br> Eje: Peru321.";
              //    element_mensaje_nueva_clave.style.display = "block";
              //    element_mensaje_nueva_clave.style.color = "Red";
              //    document.getElementById("id_nueva_clave").focus();
              //    element_btn_guardar_clave.style.display = "none";
              //    document.getElementById('id_confirmar_clave').innerHTML = "";
              //    return;
              //}


              $.ajax({
                  type: 'POST',
                  url: 'EditarPerfil.aspx/ValidarClaveUsuario',
                  contentType: 'application/json; charset=utf-8',
                  dataType: 'json',
                  cache: false,
                  data: '{usuario: "' + usuario + '",clave: "' + clave + '",tipo: "' + tipo + '"}',
                  success: function (data) {
                      ndata = data.d;
                      var element_mensaje_nueva_clave = document.getElementById("mensaje_nueva_clave");
                      if (ndata == 'Clave Correcta') {
                          element_mensaje_nueva_clave.style.display = "block";
                          //element_mensaje_clave_actual.style.backgroundColor = "Green";
                          element_mensaje_nueva_clave.style.color = "Green";
                          document.getElementById('mensaje_nueva_clave').innerHTML = "Clave Válida";
                          document.getElementById("id_confirmar_clave").focus();

                          if (confirmar_clave != "" && clave_actual != "") {
                              element_btn_guardar_clave.style.display = "block";
                          }
                          $("#id_confirmar_clave").val('');
                          document.getElementById('mensaje_confirmar_clave').innerHTML = "";
                          // document.getElementById('id_confirmar_clave').innerHTML = "";

                          var clave_actual = hdn_clave_actual.value;//$('#hdn_clave_actual').val('');
                          if (clave_actual == "clave incorrecto") {
                              error("Clave Actual Incorrecto");
                              element_btn_guardar_clave.style.display = "none";
                              return;
                          }
                          element_btn_guardar_clave.style.display = "none";

                          // alert(ndata);
                      } else if (ndata == 'Clave Existe') {
                          element_mensaje_nueva_clave.style.display = "block";
                          // element_mensaje_clave_actual.style.backgroundColor = "Red";
                          element_mensaje_nueva_clave.style.color = "Red";
                          document.getElementById('mensaje_nueva_clave').innerHTML = "La Clave ya fue usado anteriormente. Debe ser una clave nueva";
                          document.getElementById("id_nueva_clave").focus();
                          element_btn_guardar_clave.style.display = "none";
                          //document.getElementById('id_confirmar_clave').innerHTML = "";

                          $("#id_confirmar_clave").val('');
                          document.getElementById('mensaje_confirmar_clave').innerHTML = "";
                      }
                      else {
                          element_mensaje_nueva_clave.style.display = "block";
                          // element_mensaje_clave_actual.style.backgroundColor = "Red";
                          element_mensaje_nueva_clave.style.color = "Red";
                          document.getElementById('mensaje_nueva_clave').innerHTML = "Clave Incorrecta";
                          document.getElementById("id_nueva_clave").focus();
                          element_btn_guardar_clave.style.display = "none";
                          //document.getElementById('id_confirmar_clave').innerHTML = "";

                          $("#id_confirmar_clave").val('');
                          document.getElementById('mensaje_confirmar_clave').innerHTML = "";

                      }

                  }
              })

          }

          function ValidarConfirmarClave() {

              var clave_actual = $("#id_clave_actual").val();
              var nueva_clave = $("#id_nueva_clave").val();
              var confirmar_clave = $("#id_confirmar_clave").val();
              var element_mensaje_confirmar_clave = document.getElementById("mensaje_confirmar_clave");
              var element_btn_guardar_clave = document.getElementById("btn_guardar_clave");



              if (nueva_clave != confirmar_clave) {
                  document.getElementById('mensaje_confirmar_clave').innerHTML = "Claves no Coinciden. Debe ser igual a Nueva Clave.";
                  element_mensaje_confirmar_clave.style.display = "block";
                  element_mensaje_confirmar_clave.style.color = "Red";
                  document.getElementById('id_confirmar_clave').innerHTML = "";
                  document.getElementById("id_confirmar_clave").focus();
                  element_btn_guardar_clave.style.display = "none";
                  return;
              }
              document.getElementById('mensaje_confirmar_clave').innerHTML = "Confirmación Correcta.";
              element_mensaje_confirmar_clave.style.display = "block";
              element_mensaje_confirmar_clave.style.color = "Green";
              element_mensaje_confirmar_clave.style.display = "block";


              if (nueva_clave == "" || confirmar_clave == "" || clave_actual == "") {
                  element_btn_guardar_clave.style.display = "none";
                  return;
              }

              element_btn_guardar_clave.style.display = "block";

              var clave_actual2 = hdn_clave_actual.value;//$('#hdn_clave_actual').val('');
              if (clave_actual2 == "clave incorrecto") {
                  error("Clave Actual Incorrecto");
                  element_btn_guardar_clave.style.display = "none";
                  return;
              }

          }

          function validar_cambio_clave() {
              var clave_actual = $("#id_clave_actual").val();
              var nueva_clave = $("#id_nueva_clave").val();
              var confirmar_clave = $("#id_confirmar_clave").val();

              if (nueva_clave != confirmar_clave) {
                  error("Clave No Coinciden");
                  return;
              }
              if (clave_actual == "" || nueva_clave == "" || confirmar_clave == "") {
                  error("Clave Actual Vacio");
                  return;
              }

              var clave_actual = hdn_clave_actual.value;//$('#hdn_clave_actual').val('');
              if (clave_actual == "clave incorrecto") {
                  error("Clave Actual Incorrecto");
                  return;
              }

              var IdCliente = document.getElementById('hf_IdCliente').value;
              var usuario = IdCliente;
              var clave = nueva_clave;


              $.ajax({
                  type: 'POST',
                  url: 'EditarPerfil.aspx/ActualizarClaveUsuario',
                  contentType: 'application/json; charset=utf-8',
                  dataType: 'json',
                  cache: false,
                  data: '{usuario: "' + usuario + '",clave: "' + clave + '"}',
                  success: function (data) {
                      ndata = data.d;
                      var element_mensaje_nueva_clave = document.getElementById("mensaje_nueva_clave");
                      if (ndata == 'Correcto') {
                          alerta("Correcto");
                          $('#ModalCambioPassword').modal('hide');
                      } else {
                          error("Error");
                      }

                  }
              });
          }
          function alerta(mensaje) {
              //un alert
              if (mensaje == 'Correcto') {
                  alertify.alert("<b>Clave Actualizado Correctamente</b>", function () {
                      //aqui introducimos lo que haremos tras cerrar la alerta.
                      //por ejemplo -->  location.href = 'http://www.google.es/';  <-- Redireccionamos a GOOGLE.
                  });
              }
              if (mensaje == 'Registro Preguntas Correcto') {
                  alertify.alert("<b>Actualización Correcta</b>", function () {
                      //aqui introducimos lo que haremos tras cerrar la alerta.
                      //por ejemplo -->  location.href = 'http://www.google.es/';  <-- Redireccionamos a GOOGLE.
                  });
              }

          }
          function confirmar() {
              //un confirm
              alertify.confirm("<p>Aquí confirmamos algo.<br><br><b>ENTER</b> y <b>ESC</b> corresponden a <b>Aceptar</b> o <b>Cancelar</b></p>", function (e) {
                  if (e) {
                      alertify.success("Has pulsado '" + alertify.labels.ok + "'");
                  } else {
                      alertify.error("Has pulsado '" + alertify.labels.cancel + "'");
                  }
              });
              return false
          }
          function datos() {
              //un prompt
              alertify.prompt("Esto es un <b>prompt</b>, introduce un valor:", function (e, str) {
                  if (e) {
                      alertify.success("Has pulsado '" + alertify.labels.ok + "'' e introducido: " + str);
                  } else {
                      alertify.error("Has pulsado '" + alertify.labels.cancel + "'");
                  }
              });
              return false;
          }
          function notificacion() {
              //una notificación normal
              alertify.log("Esto es una notificación cualquiera.");
              return false;
          }
          function ok() {
              //una notificación correcta
              alertify.success("Visita nuestro <a href=\"https://blog.reaccionestudio.com/\" style=\"color:white;\" target=\"_blank\"><b>BLOG.</b></a>");
              return false;
          }
          function error(mensaje) {
              if (mensaje == "Clave No Coinciden") {
                  alertify.error("Las claves no coinciden. Validar");
              }
              if (mensaje == "Clave Actual Vacio") {
                  alertify.error("Todos los campos son Obligatorios.");
              }
              if (mensaje == "Error") {
                  alertify.error("Error al Actualizar. Notificar al Administrador del Sistema.");
                  return false;
              }
              if (mensaje == "Clave Actual Incorrecto") {
                  alertify.error("Su clave actual es incorrecta.");
                  return false;
              }
              if (mensaje == "Preguntas Vacias") {
                  alertify.error("Debe ingresar sus respuestas.");
                  return false;
              }
              if (mensaje == "No Coincide") {
                  alertify.error("Sus respuestas no coinciden con lo registrado.");
                  return false;
              }
          }

          function limpiar() {
              $('#id_clave_actual').val('');
              $("#id_nueva_clave").val('');
              $("#id_confirmar_clave").val('');

              document.getElementById('mensaje_clave_actual').innerHTML = "";
              document.getElementById('mensaje_nueva_clave').innerHTML = "";
              document.getElementById('mensaje_confirmar_clave').innerHTML = "";
              var element_btn_guardar_clave = document.getElementById("btn_guardar_clave");
              element_btn_guardar_clave.style.display = "none";
          }

          function ListadoPreguntas() {
              var IdCliente = document.getElementById('hf_IdCliente').value;
              var usuario = IdCliente;
              $.ajax({
                  type: 'POST',
                  url: 'EditarPerfil.aspx/ListadoPreguntas',
                  contentType: 'application/json; charset=utf-8',
                  dataType: 'json',
                  async: true,
                  cache: false,
                  data: '{usuario: "' + usuario + '"}',
                  success: function (data) {
                      var Datos = data.d;
                      var pregunta;
                      var respuesta;
                      var contador = 0;
                      var html;

                      $.each(Datos, function (i) {
                          pregunta = Datos[i].Pregunta;
                          respuesta = Datos[i].Respuesta;
                          contador = contador + 1;
                          if (contador == 1) {
                              html = `<div class="row">
                                <div class="col-lg-11" style="margin: 0px 0px 5px 10px;">
                                    <span class="lblMedio input-sm" id="span_pregunta${contador}" style="font-weight: bold;white-space: pre-wrap; padding: 0px 0px;">${pregunta}</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-11" style="margin: 0px 0px 5px 10px;">
                                    <textarea id="txt_Respuesta${contador}" name="txt_Respuesta${contador}" class="form-control input-sm" title="Ingresar Repuesta" placeholder="Ingresar Respuesta" maxlength="200">${respuesta}</textarea>
                                </div>
                            </div>`;

                          }
                          else {
                              html = html + `<div class="row">
                                <div class="col-lg-11" style="margin: 0px 0px 5px 10px;">
                                    <span class="lblMedio input-sm" id="span_pregunta${contador}" style="font-weight: bold;">${pregunta}</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-11" style="margin: 0px 0px 5px 10px;">
                                    <textarea id="txt_Respuesta${contador}" name="txt_Respuesta${contador}" class="form-control input-sm" title="Ingresar Repuesta" placeholder="Ingresar Respuesta" maxlength="200">${respuesta}</textarea>
                                </div>
                            </div>`;
                          }
                      });
                      hdnContador.value = contador;
                      $("#idpreguntas").html(html);

                  },
                  error: function (xhr, status, error) {
                      var error_especifico = eval("(" + xhr.responseText + ")");
                      var error_mostrar = '';
                      if (xhr.status === 0) {
                          error_mostrar = ('Verificar conexión a internet - ' + error_especifico.Message);
                      } else if (xhr.status == 404) {
                          error_mostrar = ('URL solicitada no encontrada [Error 404] - ' + error_especifico.Message);
                      } else if (xhr.status == 500) {
                          error_mostrar = ('Error interno del servidor [Error 500] - ' + error_especifico.Message);
                      } else if (status === 'parsererror') {
                          error_mostrar = ('JSON solicitado falló - ' + error_especifico.Message);
                      } else if (status === 'timeout') {
                          error_mostrar = ('Error en tiempo de espera - ' + error_especifico.Message);
                      } else if (status === 'abort') {
                          error_mostrar = ('Solicitud Ajax abortada - ' + error_especifico.Message);
                      } else {
                          error_mostrar = ('Error desconocido: - ' + error_especifico.Message);
                      }

                  }
              });
          }

          function validar_preguntas_seguridad() {
              var IdCliente = document.getElementById('hf_IdCliente').value;
              var usuario = IdCliente;
              var contador = hdnContador.value;
              var variable_id_respuesta = 'txt_Respuesta';
              var respuesta;
              var variable_id_pregunta = 'span_pregunta';
              var pregunta;
              var result_respuesta;
              var contador_item;
              var result;

              //var variable_id_respuesta_oculta = 'txt_Respuesta_oculto';
              //var respuesta_oculta;

              for (let item = 1; item <= contador; item++) {
                  // Se ejecuta 5 veces, con valores del paso 0 al 4.
                  contador_item = item;
                  pregunta = document.getElementById(variable_id_pregunta + item).innerHTML;//document.getElementById(variable_id_pregunta + item).value;
                  respuesta = document.getElementById(variable_id_respuesta + item).value;
                  //respuesta_oculta = document.getElementById(variable_id_respuesta_oculta + item).value;

                  //variable_respuesta = variable_respuesta + item;
                  if (respuesta == "") {
                      document.getElementById(variable_id_respuesta + item).focus();
                      result_respuesta = "vacio";
                      break;
                  }

              }
              if (result_respuesta == "vacio") {
                  error("Preguntas Vacias");
                  return;
              }
              var result;
              for (let item = 1; item <= contador; item++) {
                  // Se ejecuta 5 veces, con valores del paso 0 al 4.
                  contador_item = item;
                  pregunta = document.getElementById(variable_id_pregunta + item).innerHTML;//document.getElementById(variable_id_pregunta + item).value;
                  respuesta = document.getElementById(variable_id_respuesta + item).value;

                  $.ajax({
                      type: 'POST',
                      url: 'EditarPerfil.aspx/ActualizarPreguntasSeguridad',
                      contentType: 'application/json; charset=utf-8',
                      dataType: 'json',
                      cache: false,
                      data: '{usuario: "' + usuario + '",pregunta: "' + pregunta + '",respuesta: "' + respuesta + '"}',
                      success: function (data) {
                          ndata = data.d;
                          //var element_mensaje_nueva_clave = document.getElementById("mensaje_nueva_clave");
                          if (ndata == 'Correcto') {
                              //$('#ModalPreguntasSeguridad').modal('hide');
                          } else {
                              error("Error");
                          }

                      }
                  });

              }
              //alert(result);
              alerta("Registro Preguntas Correcto");
              $('#ModalPreguntasSeguridad').modal('hide');
          }

    </script>
</asp:Content>
