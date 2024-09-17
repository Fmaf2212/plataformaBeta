<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="SantaNaturaNetwork.Login" %>

<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" />
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Inicio de Sesión</title>

    <link rel="icon" href="https://tienda.mundosantanatura.com/img/Natural_Food_icon.png" type="image/x-icon" />
    <!-- Dışarıdan Çağırılan Dosyalar Font we Materyal İkonlar -->
    <link href='https://fonts.googleapis.com/css?family=Roboto:400,700' rel='stylesheet' type='text/css' />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <!-- #Dışarıdan Çağırılan Dosyalar Font we Materyal İkonlar Bitiş -->
    <link href="css/estilos-login5.css?v1" rel="stylesheet" type='text/css' />
    <%--<link href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" rel="stylesheet" type="text/css" />--%>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

    <link href="css/bootstrap-sweetalert-master/sweetalert.css" rel="stylesheet" />
    <script src="js/bootstrap-sweetalert-master/sweetalert.min.js" type="text/javascript"></script>

    <link rel="stylesheet" href="assets/Estilos/alertify.core.css" />
    <link rel="stylesheet" href="assets/Estilos/alertify.default.css" id="toggleCSS" />
    <script src="assets/Estilos/alertify.min.js" type="text/javascript"></script>

    <style>
        .form-controlEPP2 {
            font-size: 0.8rem;
            line-height: 1.5;
            display: block;
            width: 100%;
            height: calc(2.75rem + 2px);
            padding: .625rem .75rem;
            transition: all .2s cubic-bezier(.68, -.55, .265, 1.55);
            color: #8898aa;
            border: 1px solid #cad1d7;
            border-radius: .375rem;
            background-color: #fff;
            background-clip: padding-box;
            box-shadow: none;
        }
    </style>

    <style>
        .alertify {
            background: #FFF;
            border: 10px solid #f8f9fa;
            border: 10px solid #f8f9fa;
        }

        .alertify-button-ok, .alertify-button-ok:hover, .alertify-button-ok:focus {
            background-color: #1B1464;
            border: 1px solid #3B7808;
        }

        .btn-success {
            color: #fff;
            background-color: #1B1464;
            border-color: #4cae4c;
        }
    </style>

    <style>
        .passwordLogin {
            width: 88%
        }

        #password_visibility {
            width: 12%
        }

        .claseFuente1 {
            font-size: 60px;
            font-family: 'HurmeGeometricSans1 BlackOblique';
            color: #1B1464;
        }

        .claseFuente2 {
            font-size: 30px;
            font-family: 'HurmeGeometricSans1';
            color: #1B1464;
            font-weight: bold;
        }

        .claseFuente3 {
            font-size: 15px;
            font-family: 'HurmeGeometricSans1 Oblique';
            color: #1B1464 !important;
            font-weight: bold !important;
        }

        .claseFuente4 {
            font-size: 10px;
            font-family: 'HurmeGeometricSans1 Oblique';
            color: #1B1464;
            font-weight: bold;
            margin-left: -95px;
        }

        .claseFuente5 {
            font-size: 14px !important;
            font-family: 'HurmeGeometricSans1 Black';
            color: #1B1464 !important;
            font-weight: bold;
        }
        /*-------------------------------------------------------------*/

        .input-group {
            position: relative;
            width: 100%;
        }

            .input-group .input {
                padding: 10px 19px;
                border: none;
                border-radius: 4px;
                font: inherit;
                color: #555;
                background-color: transparent;
                outline: 2px solid #A556AF;
                transition: 0.3s ease outline;
            }
                .input-group .input:-webkit-autofill,
                .input-group .input:-webkit-autofill:hover,
                .input-group .input:-webkit-autofill:focus {
                  transition: background-color 5000s ease-in-out 0s;
                }

            .input-group .input-label {
                position: absolute;
                top: 50%;
                left: 10px;
                transform: translateY(-50%);
                transition: transform 0.25s;
                cursor: text;
                line-height: 1;
                font-size: 1em;
                color: #B89EBB;
                margin-bottom: 0;
                font-weight: 600;
            }

            .input-group .input:focus + .input-label,
            .input-group .input:valid + .input-label {
                transform: translate(-5px, -30px) scale(0.8);
                color: #8F4B96;
                padding-inline: 5px;
                background-color: #fff;
                line-height: 1;
            }

            .input-group .input:is(:focus, :valid) {
                outline-color: #872C6C;
            }

            .input-group .eyePassword {
                background: white;
                border: none;
                position: absolute;
                top: 50%;
                right: 0;
                transform: translateY(-50%)
            }

            .input-group .eyePassword:focus,
            .input-group .eyePassword:target{
                outline: none
            }
    </style>
    <link href="css/proyecto2/fonts-v2.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <input id="hdnContador" name="hdnContador" type="hidden">
    <input id="hdn_clave_actual" name="hdn_clave_actual" type="hidden">
    <input type="hidden" class="form-control" id="hdnRespuesta" />
    <div id="fondoFormularioLogin">
        <div class="login-card">
            <form id="form1" runat="server" class="col-lg-12">
                <asp:Login ID="LoginUser" runat="server" EnableViewState="false" OnAuthenticate="LoginUser_Authenticate" Width="100%">
                    <LayoutTemplate>
                        <!-- Logo -->
                        <div class="col-lg-12 logo-kapsul">
                            <img id="imgLogoParaLogin" width="160" class="logo" src="https://tienda.mundosantanatura.com/img/Login/logoFinalSNN.png" alt="Logo" style="padding-top: -40px; padding-bottom: -40px" />
                            <br />
                            <%--<img width="110" src="https://dqcgrsy5v35b9.cloudfront.net/cruiseplanner/assets/img/icons/login-w-icon.png" style="top: 20px; padding-bottom: 50px; padding-top: -30px" />--%>
                            <%--<img id="bienvenidosLogin" width="250" src="img/bienvenidos-login.png" style="top: 20px; padding-bottom: 50px" />--%>
                            <%--<div>
                                <p class="claseFuente1">¡Bienvenidos!</p>
                            </div>
                            <br />
                            <h4 class="claseFuente2" id="ingreseDatos">Ingrese sus datos para continuar</h4>
                            <br />
                            <div id="bloqueNoEresEmpresario" style="display: none; justify-content: space-evenly; align-items: center;">
                                <div>
                                    <h6 class="claseFuente3" id="noEresEmpresario">¿NO ERES EMPRESARIO SNN? &nbsp;&nbsp;</h6>
                                </div>
                                <div>
                                    <a class="claseFuente4" id="ClickAqui" href="#">HAGA CLICK AQUI</a>
                                </div>
                            </div>--%>
                        </div>
                        <!-- #Logo Bitiş -->

                        <div style="clear: both"></div>

                        <!-- Kullanıcı Adı Giriş İnput -->
                        <%--<div style="display: none">
                            <div class="group" id="campoUsuario">
                                <asp:TextBox ID="UserName" runat="server" placeholder="Usuario" MaxLength="10"></asp:TextBox>
                            </div>
                            <div class="group" id="campoClave">
                                <div class="pass_show" style="display: flex; align-items: center">
                                    <asp:TextBox CssClass="passwordLogin" TextMode="Password" ID="Password" runat="server" placeholder="Contraseña" MaxLength="12"></asp:TextBox>
                                    <button type="button" aria-label="Mostrar contraseña" class="toggle-button" onclick="toggleShowPassword()">
                                        <svg id="eyeIcon" width="24px" height="24px" viewBox="0 0 64 64" version="1.1" style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2;">
                                            <rect id="Icons" x="-896" y="-256" width="1280" height="800" style="fill: none;"></rect>
                                            <g id="Icons1">
                                                <g id="eye">
                                                    <path d="M32.513,13.926c10.574,0.15 19.249,9.657 23.594,17.837c0,0 -1.529,3.129 -2.963,5.132c-0.694,0.969 -1.424,1.913 -2.191,2.826c-0.547,0.65 -1.112,1.283 -1.698,1.898c-5.237,5.5 -12.758,9.603 -20.7,8.01c-8.823,-1.77 -16.02,-9.33 -20.346,-17.461c0,0 1.536,-3.132 2.978,-5.132c0.646,-0.897 1.324,-1.77 2.034,-2.617c0.544,-0.649 1.108,-1.282 1.691,-1.897c4.627,-4.876 10.564,-8.63 17.601,-8.596Zm-0.037,4c-5.89,-0.022 -10.788,3.267 -14.663,7.35c-0.527,0.555 -1.035,1.127 -1.527,1.713c-0.647,0.772 -1.265,1.569 -1.854,2.386c-0.589,0.816 -1.193,1.846 -1.672,2.721c3.814,6.409 9.539,12.198 16.582,13.611c6.563,1.317 12.688,-2.301 17.016,-6.846c0.529,-0.555 1.04,-1.128 1.534,-1.715c0.7,-0.833 1.366,-1.694 1.999,-2.579c0.586,-0.819 1.189,-1.851 1.667,-2.727c-3.958,-6.625 -10.73,-13.784 -19.082,-13.914Z" />
                                                    <path d="M32.158,23.948c4.425,0 8.018,3.593 8.018,8.017c0,4.425 -3.593,8.017 -8.018,8.017c-4.424,0 -8.017,-3.592 -8.017,-8.017c0,-4.424 3.593,-8.017 8.017,-8.017Zm0,4.009c2.213,0 4.009,1.796 4.009,4.008c0,2.213 -1.796,4.009 -4.009,4.009c-2.212,0 -4.008,-1.796 -4.008,-4.009c0,-2.212 1.796,-4.008 4.008,-4.008Z" />
                                                </g>
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>--%>
                        <div>
                            <div class="input-group">
                                <asp:TextBox
                                    type="text"
                                    ID="UserName"
                                    required="true"
                                    CssClass="input"
                                    name="usuario"
                                    runat="server" 
                                ></asp:TextBox>
                                <label for="LoginUser_UserName" class="input-label">
                                    Usuario:
                                </label>
                            </div>
                            <!-- #Kullanıcı Adı Giriş İnput Bitiş -->
                            <br />
                            <!-- Şifre İnput Giriş-->
                            <div class="input-group" style="position: relative">
                                
                                <asp:TextBox
                                    TextMode="password"
                                    ID="Password"
                                    CssClass="input"
                                    name="contraseña"
                                    runat="server"
                                    MaxLength="12"
                                    required="true"
                                ></asp:TextBox>
                                <label for="LoginUser_Password" class="input-label">
                                    Contraseña:
                                </label>
                                <button type="button" aria-label="Mostrar contraseña" class="eyePassword" onclick="toggleShowPassword()">
                                    <svg id="eyeIcon" width="24px" height="24px" viewBox="0 0 64 64" version="1.1" style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2;">
                                        <rect id="Icons" x="-896" y="-256" width="1280" height="800" style="fill: none;"></rect>
                                        <g id="Icons1">
                                            <g id="eye">
                                                <path d="M32.513,13.926c10.574,0.15 19.249,9.657 23.594,17.837c0,0 -1.529,3.129 -2.963,5.132c-0.694,0.969 -1.424,1.913 -2.191,2.826c-0.547,0.65 -1.112,1.283 -1.698,1.898c-5.237,5.5 -12.758,9.603 -20.7,8.01c-8.823,-1.77 -16.02,-9.33 -20.346,-17.461c0,0 1.536,-3.132 2.978,-5.132c0.646,-0.897 1.324,-1.77 2.034,-2.617c0.544,-0.649 1.108,-1.282 1.691,-1.897c4.627,-4.876 10.564,-8.63 17.601,-8.596Zm-0.037,4c-5.89,-0.022 -10.788,3.267 -14.663,7.35c-0.527,0.555 -1.035,1.127 -1.527,1.713c-0.647,0.772 -1.265,1.569 -1.854,2.386c-0.589,0.816 -1.193,1.846 -1.672,2.721c3.814,6.409 9.539,12.198 16.582,13.611c6.563,1.317 12.688,-2.301 17.016,-6.846c0.529,-0.555 1.04,-1.128 1.534,-1.715c0.7,-0.833 1.366,-1.694 1.999,-2.579c0.586,-0.819 1.189,-1.851 1.667,-2.727c-3.958,-6.625 -10.73,-13.784 -19.082,-13.914Z" />
                                                <path d="M32.158,23.948c4.425,0 8.018,3.593 8.018,8.017c0,4.425 -3.593,8.017 -8.018,8.017c-4.424,0 -8.017,-3.592 -8.017,-8.017c0,-4.424 3.593,-8.017 8.017,-8.017Zm0,4.009c2.213,0 4.009,1.796 4.009,4.008c0,2.213 -1.796,4.009 -4.009,4.009c-2.212,0 -4.008,-1.796 -4.008,-4.009c0,-2.212 1.796,-4.008 4.008,-4.008Z" />
                                            </g>
                                        </g>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <!-- Şifre İnput Giriş Bitiş-->

                        <!-- Giriş Yap Buton -->
                        <%--<a href="Index.aspx" class="giris-yap-buton">Iniciar Sesión</a>--%>
                        <div id="iniciarSesion" class="group">
                            <asp:Button ID="Button1" CommandName="Login" runat="server" Text="INICIAR SESIÓN" CssClass="giris-yap-buton" />
                        </div>
                        <!-- #Giriş Yap Buton Bitiş -->
                        <!-- Şifremi Unuttum ve Kaydol Linkleri Bitiş -->

                        <!-- Şifremi Unuttum ve Kaydol Linkleri -->
                        <div class="forgot-and-create tab-menu">
                            <a class="sifre-hatirlat-link" href="javascript:void('sifre-hatirlat-link');">¿Olvidaste tu contraseña?</a>
                            <%--   <a id="signoInterrogacion1" class="claseFuente3" style="font-size: 15px; margin-right: -1px">¿</a><a class="sifre-hatirlat-link claseFuente3" href="RestablecerClave.aspx">Olvidaste tu contraseña</a><a id="signoInterrogacion2" class="claseFuente3" style="font-size: 15px; margin-left: -10px">?</a>--%>

                            <%-- <a id="signoInterrogacion1" class="claseFuente3" href="RestableceClave2.aspx" style="font-size: 13px">Olvidaste tu contraseña</a>--%>

                            <%--<a class="hesap-olustur-link" href="javascript:void('hesap-olustur-link');" style="font-size: 15px; float: right; color: aquamarine">Crear cuenta</a>--%>
                        </div>
                    </LayoutTemplate>
                </asp:Login>

            </form>

            <!-- Sifre Hatirlat Form Sayfası -->
            <form id="sifre-hatirlat-form" class="col-lg-12" style="margin-bottom: auto; margin-top: auto;">

                <div class="col-lg-12 logo-kapsul">
                    <%--<img id="imgLogoParaLogin" width="250" class="logo" src="https://tienda.mundosantanatura.com/img/LOGO-PARA-LOGIN-NEW.png" alt="Logo" style="padding-top: -40px; padding-bottom: -40px" />--%>
                    <img id="imgLogoParaLogin" width="160" class="logo" src="https://tienda.mundosantanatura.com/img/Login/logoFinalSNN.png" alt="Logo" style="padding-top: -40px; padding-bottom: -40px" />
                    <br />
                    <%--<img width="110" src="https://dqcgrsy5v35b9.cloudfront.net/cruiseplanner/assets/img/icons/login-w-icon.png" style="top: 20px; padding-bottom: 50px; padding-top: -30px" />--%>
                    <%--<img id="bienvenidosLogin" width="250" src="img/bienvenidos-login.png" style="top: 20px; padding-bottom: 50px" />--%>
                    <%--<div>
                        <p class="claseFuente5">Recuperar mi Cuenta</p>
                    </div>
                    <br />
                    <h4 class="claseFuente2" id="ingreseDatos">Ingrese sus datos para continuar</h4>
                    <br />--%>

                </div>


                <div class="col-lg-12 logo-kapsul">
                    <img width="110" class="logo" src="https://tienda.mundosantanatura.com/img/contraseña.png" alt="Logo" />
                </div>

                <div style="clear: both"></div>

                <!-- Şifre Hatırlat Email İnput -->
                <%--<div class="group" style="margin-bottom: 30px;">
                    <input type="text" required="required" id="id_usuario" />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label><i class="material-icons input-ikon">person</i><span class="span-input" style="color: #1B1464; font-weight: bold">Usuario</span></label>
                </div>--%>

                <div class="input-group" style="margin-bottom: 30px;">
                    <input
                        type="text"
                        id="id_usuario"
                        required
                        class="input"
                        name="usuario"
                        style="width: 100%"
                    />
                    <label for="id_usuario" class="input-label">
                        Usuario:
                    </label>
                </div>

                <!-- #Şifre Hatırlat Email İnput Bitiş -->

                <!-- Şifremi Hatırlat Buton -->

                <div id="btnEnviarCorreoLogin" class="group">
                    <a class="giris-yap-buton claseFuente5" style="text-decoration: none !important; cursor: pointer" onclick="open_restablecer_clave();">Verificar</a>
                </div>
                <!-- #Şifremi Hatırlat Buton Bitiş -->

                <!-- Zaten Hesap Var Link -->

                <div class="forgot-and-create tab-menu">
                    <a class="zaten-hesap-var-link" href="javascript:void('zaten-hesap-var-link');">¿Ya tienes una cuenta? Inicia sesión.</a>
                </div>
                <!-- #Zaten Hesap Var Link Bitiş -->

            </form>

            <div class="modal" id="ModalCambioPassword" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" data-backdrop="static" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title font-weight-bold">Cambiar Clave</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-12 col-sm-12 col-md-12">
                                    <div class="form-group row" style="display: none;">
                                        <div class="col-lg-12">
                                            <div class="form-group focused">
                                                <label class="col-form-label form-control-label" style="font-size: .875rem">Clave Actual</label>
                                                <input class="form-controlEPP2 text-uppercase form-control-alternative" id="id_clave_actual" placeholder="Ingrese Clave Actual..." type="password" oncopy="return false" onpaste="return false" />
                                                <label class="col-form-label form-control-label" id="mensaje_clave_actual" style="display: none; font-size: .875rem">Correcto</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-lg-12">
                                            <div class="form-group focused">
                                                <label class="col-form-label form-control-label" style="font-size: .875rem">Nueva Clave</label>
                                                <input class="form-controlEPP2 text-uppercase form-control-alternative" id="id_nueva_clave" placeholder="Ingrese Nueva Clave..." type="password" oncopy="return false" onpaste="return false" />
                                                <label class="col-form-label form-control-label" id="mensaje_nueva_clave" style="display: none; font-size: .875rem"></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-lg-12">
                                            <div class="form-group focused">
                                                <label class="col-form-label form-control-label" style="font-size: .875rem">Confirmar Clave</label>
                                                <input class="form-controlEPP2 text-uppercase form-control-alternative" id="id_confirmar_clave" placeholder="Confirmar Nueva Clave..." type="password" oncopy="return false" onpaste="return false" />
                                                <label class="col-form-label form-control-label" id="mensaje_confirmar_clave" style="display: none; font-size: .875rem"></label>
                                            </div>
                                        </div>

                                    </div>
                                    <%-- <div class="form-group row">
                                        <div class="col-lg-12">
                                             <div class="form-group focused">
                                                <div class="alert alert-danger" role="alert">
                                                 <i class="glyphicon glyphicon-info-sign"></i>&nbsp;Alerta: Tu Clave debe contener una letra mayúscula, minúscula,numero,caracter especial y debe tener mínimo 8 dígitos. Ejemplo: Peru321.
                                                </div>
                                             </div>
                                        </div>
                                        
                                   </div>--%>
                                </div>
                            </div>
                        </div>
                        <%-- <div class="modal-footer ">
                        <button type="button" class="btn btn-lg btn-danger" data-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-lg btn-success" data-dismiss="modal" id="btn_guardar_clave" style="display:none" onclick="validar_cambio_clave();">Guardar</button>
                    </div>--%>
                        <div class="modal-footer ">
                            <div class="form-group row" style="text-align: center">


                                <div class="col-sm-4" style="margin: 0px 0px 5px 0px;"></div>
                                <div class="col-sm-2" style="margin: 00px 0px 5px 0px;">
                                    <button type="button" class="btn btn-danger" style="width: auto;" onclick="close_cambiar_clave();">
                                        <span class="glyphicon glyphicon-ban-circle" aria-hidden="true"></span>&nbsp;Cancelar
                                    </button>
                                </div>

                                <div class="col-sm-5" style="margin: 0px 0px 5px 0px;">
                                    <div class="form-group row" style="text-align: center">
                                        <div class="col-sm-10" style="margin: 0px 0px 5px 0px;">
                                            <button type="button" class="btn btn-success" id="btn_guardar_clave" style="display: none" onclick="validar_cambio_clave();">
                                                <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>&nbsp;Guardar&nbsp;
                                            </button>
                                        </div>
                                        <div class="col-sm-2" style="margin: 0px 0px 0px 0px;">
                                            <center>
                                                <img src="Imagenes/Spin.gif" id="id_spiner_save" style="display: none" class="rounded float-center" alt="..."></center>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div class="modal" id="ModalElegirValidacion" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" data-backdrop="static" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title font-weight-bold">Código de Verificación</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="container">
                                <div class="row">
                                    <div class="col-12 col-sm-12 col-md-12">
                                        <div class="form-group row">
                                            <div class="col-lg-12">
                                                <div class="form-group focused">
                                                    <label class="col-form-label form-control-label">¿Cómo quieres que enviemos el código de verificación para cambiar tu clave?</label>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-lg-12">
                                                <div class="form-group focused">
                                                    <%-- <input type="radio" class="form-controlEPP text-uppercase form-control-alternative" style="display:none" id="id_sms" name="id_sms" value="1" disabled>
                                                  <label for="male" class="col-form-label form-control-label" style="color:black;display:none" id="lbl_sms"><i class="glyphicon glyphicon-phone"></i>&nbsp;</label><br>--%>
                                                    <input type="radio" class="form-controlEPP text-uppercase form-control-alternative" id="id_correo" name="id_correo" value="2">
                                                    <label for="female" class="col-form-label form-control-label" style="color: black" id="lbl_correo"><i class="glyphicon glyphicon-envelope"></i>&nbsp;</label><br>
                                                    <input type="radio" class="form-controlEPP text-uppercase form-control-alternative" id="id_preguntas_seguridad" name="id_preguntas_seguridad" value="3">
                                                    <label for="other" class="col-form-label form-control-label" style="color: black" id="lbl_preguntas_seguridad"><i class="glyphicon glyphicon-list"></i>&nbsp; Responder Preguntas secretas</label>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer ">
                            <div class="form-group row" style="text-align: center">


                                <div class="col-sm-4" style="margin: 0px 0px 5px 0px;"></div>
                                <div class="col-sm-2" style="margin: 00px 0px 5px 0px;">
                                    <button type="button" class="btn btn-danger" style="width: auto;" onclick="close_correo_sms();">
                                        <span class="glyphicon glyphicon-ban-circle" aria-hidden="true"></span>&nbsp;Cancelar
                                    </button>
                                </div>

                                <div class="col-sm-5" style="margin: 0px 0px 5px 0px;">
                                    <div class="form-group row" style="text-align: center">
                                        <div class="col-sm-10" style="margin: 0px 0px 5px 0px;">
                                            <button type="button" class="btn btn-success" id="btn_enviar_codigo_verificacion" onclick="open_correo_sms();">
                                                <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>&nbsp;Continuar&nbsp;
                                            </button>
                                        </div>
                                        <div class="col-sm-2" style="margin: 0px 0px 0px 0px;">
                                            <center>
                                                <img src="Imagenes/Spin.gif" id="id_spiner" style="display: none" class="rounded float-center" alt="..."></center>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div class="modal" id="ModalSMS" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" data-backdrop="static" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title font-weight-bold">Ingrese el Código de Seguridad</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="container">
                                <div class="row">
                                    <div class="col-12 col-sm-12 col-md-12">
                                        <div class="form-group row">
                                            <div class="col-lg-12">
                                                <div class="form-group focused">
                                                    <label class="col-form-label form-control-label" style="margin-bottom: -15px">Busca en tu Celular el código de seguridad enviado.</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-lg-12">
                                                <div class="form-group focused">
                                                    <div class="col-sm-2" style="margin: 0px 0px 0px 0px;">
                                                        <input type="text" class="form-control " required="" id="txt_codigo" title="Código de seguridad" autocomplete="off" placeholder="Ingresar Código">
                                                    </div>
                                                    <%-- <div class="col-lg-5"><span><b>Hemos enviado el código a:</b></span></div>--%>
                                                    <div class="col-sm-5" style="margin: 0px 0px 0px 15px;">
                                                        <div class="row">
                                                            <span><b>Hemos enviado el código a:</b></span>
                                                        </div>
                                                        <div class="row">
                                                            <span id="span_fono_correo">al*****@entel.pe</span>
                                                        </div>
                                                    </div>
                                                    <%-- <input type="radio" class="form-controlEPP text-uppercase form-control-alternative" id="male" name="gender" value="male">
                                                  <label for="male" class="col-form-label form-control-label" style="color:black"><i class="glyphicon glyphicon-phone"></i>&nbsp; Enviar Código por SMS: ******712</label><br>
                                                  <input type="radio"  class="form-controlEPP text-uppercase form-control-alternative"id="female" name="gender" value="female">
                                                  <label for="female" class="col-form-label form-control-label" style="color:black"><i class="glyphicon glyphicon-envelope"></i>&nbsp; Enviar Código por correo: al*****@entel.pe</label><br>
                                                  <input type="radio" class="form-controlEPP text-uppercase form-control-alternative" id="other" name="gender" value="other">
                                                  <label for="other" class="col-form-label form-control-label" style="color:black"><i class="glyphicon glyphicon-list"></i>&nbsp; Responder Preguntas secretas</label>--%>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer ">
                            <div class="form-group row" style="text-align: center">
                                <div class="col-lg-2" style="margin: 0px 0px 5px 0px;">
                                    <button type="button" class="btn btn-success" style="width: auto;" id="btn_enviar_reenviar" onclick="open_correo_sms();">
                                        <span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>&nbsp;Reenviar
                                    </button>
                                </div>
                                <div class="col-lg-4" style="margin: 0px 0px 5px 0px;">
                                </div>
                                <div class="col-lg-2" style="margin: 0px 0px 5px 0px;">
                                    <button type="button" class="btn btn-success" style="width: auto;" id="btn_enviar_continuar" onclick="open_correo_sms();">
                                        <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>&nbsp;Continuar
                                    </button>
                                </div>
                                <div class="col-lg-1" style="margin: 0px 0px 5px 0px;">
                                </div>
                                <div class="col-lg-2" style="margin: 00px 0px 5px 0px;">
                                    <button type="button" class="btn btn-danger" style="width: auto;" onclick="Cerrar_Modal('div_Identificar_Cuenta')">
                                        <span class="glyphicon glyphicon-ban-circle" aria-hidden="true"></span>&nbsp;Cancelar
                                    </button>
                                </div>
                            </div>
                            <%--<div class="col-sm-2" style="margin: 0px 0px 5px 0px;">
                                    <button type="button" class="btn btn-lg btn-success" style="width: auto;" data-dismiss="modal" id="btn_enviar_reenviar" onclick="open_correo_sms();">
                                        <span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>&nbsp;Reenviar
                                    </button>
                                </div>--%>
                            <%--<button type="button" style="text-align:left" class="btn btn-lg btn-success" data-dismiss="modal" id="btn_enviar_reenviar" onclick="open_correo_sms();">Reenviar</button>--%>
                            <%--<button type="button" class="btn btn-lg btn-success" data-dismiss="modal" id="btn_enviar_validacion" onclick="open_correo_sms();">Continuar</button>
                            <button type="button" class="btn btn-lg btn-danger" data-dismiss="modal">Cancelar</button>--%>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal" id="ModalCorreo" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" data-backdrop="static" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title font-weight-bold">Ingrese el Código de Seguridad</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="container">
                                <div class="row">
                                    <div class="col-12 col-sm-12 col-md-12">
                                        <div class="form-group row">
                                            <div class="col-lg-12">
                                                <div class="form-group focused">
                                                    <label class="col-form-label form-control-label" style="margin-bottom: -15px">Busca en tu correo el código de seguridad enviado.</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-lg-12">
                                                <div class="form-group focused">
                                                    <div class="col-sm-2" style="margin: 0px 0px 0px 0px;">
                                                        <input type="text" class="form-control " required="" id="txt_codigo_correo" title="Código de seguridad" onkeypress="return valideKey(event);" autocomplete="off" placeholder="Ingresar Código">
                                                    </div>
                                                    <%-- <div class="col-lg-5"><span><b>Hemos enviado el código a:</b></span></div>--%>
                                                    <div class="col-sm-5" style="margin: 0px 0px 0px 15px;">
                                                        <div class="row">
                                                            <span><b>Hemos enviado el código a:</b></span>
                                                        </div>
                                                        <div class="row">
                                                            <%-- <span id="span_correo">al*****@entel.pe</span>--%>
                                                            <label for="male" class="col-form-label form-control-label" style="color: black" id="span_correo">&nbsp;</label><br>
                                                        </div>
                                                    </div>
                                                    <%-- <input type="radio" class="form-controlEPP text-uppercase form-control-alternative" id="male" name="gender" value="male">
                                                  <label for="male" class="col-form-label form-control-label" style="color:black"><i class="glyphicon glyphicon-phone"></i>&nbsp; Enviar Código por SMS: ******712</label><br>
                                                  <input type="radio"  class="form-controlEPP text-uppercase form-control-alternative"id="female" name="gender" value="female">
                                                  <label for="female" class="col-form-label form-control-label" style="color:black"><i class="glyphicon glyphicon-envelope"></i>&nbsp; Enviar Código por correo: al*****@entel.pe</label><br>
                                                  <input type="radio" class="form-controlEPP text-uppercase form-control-alternative" id="other" name="gender" value="other">
                                                  <label for="other" class="col-form-label form-control-label" style="color:black"><i class="glyphicon glyphicon-list"></i>&nbsp; Responder Preguntas secretas</label>--%>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer ">
                            <div class="form-group row" style="text-align: center">
                                <div class="col-lg-4" style="margin: 0px 0px 5px 0px;">


                                    <div class="form-group row" style="text-align: center">
                                        <div class="col-sm-10" style="margin: 0px 0px 5px 0px;">
                                            <button type="button" class="btn btn-success" style="width: auto;" id="btn_enviar_reenviar_correo" onclick="open_reenvio_codigo_correo();">
                                                <span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>&nbsp;Reenviar
                                            </button>
                                        </div>
                                        <div class="col-sm-2" style="margin: 0px 0px 0px 0px;">
                                            <center>
                                                <img src="Imagenes/Spin.gif" id="id_spiner_correo" style="display: none" class="rounded float-center" alt="..."></center>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-lg-1" style="margin: 0px 0px 5px 0px;">
                                </div>

                                <div class="col-lg-2" style="margin: 00px 0px 5px 0px;">
                                    <button type="button" class="btn btn-danger" style="width: auto;" onclick="close_elegir_codigo_seguridad();">
                                        <span class="glyphicon glyphicon-ban-circle" aria-hidden="true"></span>&nbsp;Cancelar
                                    </button>
                                </div>
                                <%-- <div class="col-lg-1" style="margin: 0px 0px 5px 0px;">
                                </div> --%>

                                <%-- <div class="col-lg-2" style="margin: 0px 0px 5px 0px;">
                                    <button type="button" class="btn btn-success" style="width: auto;" id="btn_enviar_continuarxs" onclick="validar_codigo_seguridad();">
                                        <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>&nbsp;Continuar
                                    </button>
                                </div>--%>
                                <div class="col-lg-4" style="margin: 0px 0px 5px 0px;">
                                    <div class="form-group row" style="text-align: center">
                                        <div class="col-sm-10" style="margin: 0px 0px 5px 0px;">
                                            <button type="button" class="btn btn-success" style="width: auto;" id="btn_validar_codigo_correo" onclick="validar_codigo_seguridad();">
                                                <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>&nbsp;Continuar
                                            </button>
                                        </div>
                                        <div class="col-sm-2" style="margin: 0px 0px 0px 0px;">
                                            <center>
                                                <img src="Imagenes/Spin.gif" id="id_spiner_validar_codigo" style="display: none" class="rounded float-center" alt="..."></center>
                                        </div>
                                    </div>

                                </div>


                            </div>
                            <%--<div class="col-sm-2" style="margin: 0px 0px 5px 0px;">
                                    <button type="button" class="btn btn-lg btn-success" style="width: auto;" data-dismiss="modal" id="btn_enviar_reenviar" onclick="open_correo_sms();">
                                        <span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>&nbsp;Reenviar
                                    </button>
                                </div>--%>
                            <%--<button type="button" style="text-align:left" class="btn btn-lg btn-success" data-dismiss="modal" id="btn_enviar_reenviar" onclick="open_correo_sms();">Reenviar</button>--%>
                            <%--<button type="button" class="btn btn-lg btn-success" data-dismiss="modal" id="btn_enviar_validacion" onclick="open_correo_sms();">Continuar</button>
                            <button type="button" class="btn btn-lg btn-danger" data-dismiss="modal">Cancelar</button>--%>
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
                                    <div class="col-lg-11" style="margin: 0px 0px 5px 20px;">
                                        <span class="lblMedio-sm">Responde las siguientes preguntas:</span>
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
                            <div class="form-group row" style="text-align: center">
                                <div class="col-lg-2" style="margin: 0px 0px 5px 0px;">
                                </div>
                                <div class="col-lg-4" style="margin: 0px 0px 5px 0px;">
                                </div>
                                <div class="col-lg-2" style="margin: 0px 0px 5px 0px;">
                                    <button type="button" class="btn btn-success" style="width: auto;" id="btn_validar_preguntas" onclick="validar_preguntas_seguridad();">
                                        <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>&nbsp;Continuar
                                    </button>
                                </div>
                                <div class="col-lg-1" style="margin: 0px 0px 5px 0px;">
                                </div>
                                <div class="col-lg-2" style="margin: 00px 0px 5px 0px;">
                                    <button type="button" class="btn btn-danger" style="width: auto;" onclick="close_preguntas_seguridad();">
                                        <span class="glyphicon glyphicon-ban-circle" aria-hidden="true"></span>&nbsp;Cancelar
                                    </button>
                                </div>
                            </div>
                            <%--<div class="col-sm-2" style="margin: 0px 0px 5px 0px;">
                                    <button type="button" class="btn btn-lg btn-success" style="width: auto;" data-dismiss="modal" id="btn_enviar_reenviar" onclick="open_correo_sms();">
                                        <span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>&nbsp;Reenviar
                                    </button>
                                </div>--%>
                            <%--<button type="button" style="text-align:left" class="btn btn-lg btn-success" data-dismiss="modal" id="btn_enviar_reenviar" onclick="open_correo_sms();">Reenviar</button>--%>
                            <%--<button type="button" class="btn btn-lg btn-success" data-dismiss="modal" id="btn_enviar_validacion" onclick="open_correo_sms();">Continuar</button>
                            <button type="button" class="btn btn-lg btn-danger" data-dismiss="modal">Cancelar</button>--%>
                        </div>
                    </div>
                </div>
            </div>
            <%--<form id="kayit-form" class="col-lg-12">
                <div class="col-lg-12 logo-kapsul">
                    <img width="100" class="logo" src="https://dqcgrsy5v35b9.cloudfront.net/cruiseplanner/assets/img/icons/login-w-icon.png" alt="Logo" />
                </div>

                <div style="clear: both;"></div>

                <!-- Kayıt Form Kullanıcı Adı İnput -->
                <div class="group">
                    <input type="text" required="required" />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label><i class="material-icons input-ikon">person_outline</i><span class="span-input">Su nombre de usuario</span></label>
                </div>
                <!-- #Kayıt Form Kullanıcı Adı İnput Bitiş -->

                <!-- Kayıt Form Email İnput -->
                <div class="group">
                    <input type="text" required="required" />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label><i class="material-icons input-ikon">mail_outline</i><span class="span-input">E-Mail</span></label>
                </div>
                <!-- #Kayıt Form Email İnput Bitiş -->

                <!-- Kayıt Form Şifre İnput -->
                <div class="group">
                    <input type="password" required="required" />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label><i class="material-icons input-sifre-ikon">lock</i><span class="span-input">Contraseña</span></label>
                </div>
                <!-- #Kayıt Form Şifre İnput Bitiş -->

                <!-- Kayıt Form Şifre-Tekrarı İnput -->
                <div class="group">
                    <input type="password" required="required" />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label><i class="material-icons input-sifre-ikon">lock</i><span class="span-input">Repetir contraseña</span></label>
                </div>
                <!-- #Kayıt Form Şifre-Tekrarı İnput Bitiş -->

                <!-- Kayıt Ol Buton -->
                <a href="javascript:void(0);" class="giris-yap-buton">Crear una cuenta</a>
                <!-- #Kayıt Ol Buton Bitiş -->

                <!-- Zaten Hesap Var Link -->
                <a class="zaten-hesap-var-link" href="javascript:void('zaten-hesap-var-link');">¿Ya tienes una cuenta? Inicia sesión.</a>
                <!--# Zaten Hesap Var Link Bitiş -->
            </form>--%>
            <!-- ##Kayıt Form  Sayfası Bitis -->
        </div>
    </div>


    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
    <script src="js/estilos-login3.js?v1"></script>

    <script>

        $(document).ready(function () {

            var obtenerAnchoPagina = $("#fondoFormularioLogin").width();
            console.log("obtenerAnchoPagina: " + obtenerAnchoPagina);

            // $("#id_sms").on("change", function () {
            //     document.querySelector('#id_correo').checked = false;
            //     document.querySelector('#id_preguntas_seguridad').checked = false;
            //});
            $("#id_correo").on("change", function () {
                //  document.querySelector('#id_sms').checked = false;
                document.querySelector('#id_preguntas_seguridad').checked = false;
            });
            $("#id_preguntas_seguridad").on("change", function () {
                // document.querySelector('#id_sms').checked = false;
                document.querySelector('#id_correo').checked = false;
            });
            $("#id_clave_actual").on("change", function () {
                //ValidarClaveActual();               

            });
            $("#id_nueva_clave").on("change", function () {
                ValidarNuevaClave();
            });
            $("#id_confirmar_clave").on("change", function () {
                ValidarConfirmarClave();
            });


        });
        function ValidarClaveActual() {
            var clave_actual = $("#id_clave_actual").val();
            var nueva_clave = $("#id_nueva_clave").val();
            var confirmar_clave = $("#id_confirmar_clave").val();
            var element_btn_guardar_clave = document.getElementById("btn_guardar_clave");

            //  var IdCliente = document.getElementById('hf_IdCliente').value;
            var usuario = $("#id_usuario").val();
            //var usuario=IdCliente;
            var clave = $("#id_clave_actual").val();
            var tipo = "Actual";
            $.ajax({
                type: 'POST',
                url: 'Login.aspx/ValidarClaveUsuario2',
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
                        //$('#hdn_clave_actual').val('clave correcto');
                        hdn_clave_actual.value = "clave correcto";
                    } else {
                        element_mensaje_clave_actual.style.display = "block";
                        // element_mensaje_clave_actual.style.backgroundColor = "Red";
                        element_mensaje_clave_actual.style.color = "Red";
                        document.getElementById('mensaje_clave_actual').innerHTML = "Clave Incorrecta.";
                        document.getElementById("id_clave_actual").focus();
                        element_btn_guardar_clave.style.display = "none";
                        //$('#hdn_clave_actual').val('clave incorrecto');
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
            // var IdCliente = document.getElementById('hf_IdCliente').value;
            var usuario = $("#id_usuario").val();
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
                url: 'Login.aspx/ValidarClaveUsuario2',
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

                        if (confirmar_clave != "") {
                            element_btn_guardar_clave.style.display = "block";
                        }
                        $("#id_confirmar_clave").val('');
                        document.getElementById('mensaje_confirmar_clave').innerHTML = "";

                        //var clave_actual = hdn_clave_actual.value;//$('#hdn_clave_actual').val('');
                        // if (clave_actual == "clave incorrecto") {
                        //     error("Clave Actual Incorrecto");   
                        //     element_btn_guardar_clave.style.display = "none";
                        //     return;
                        //}
                        // element_btn_guardar_clave.style.display = "none";
                        // alert(ndata);
                    } else if (ndata == 'Clave Existe') {
                        element_mensaje_nueva_clave.style.display = "block";
                        // element_mensaje_clave_actual.style.backgroundColor = "Red";
                        element_mensaje_nueva_clave.style.color = "Red";
                        document.getElementById('mensaje_nueva_clave').innerHTML = "La Clave ya fue usado anteriormente. Debe ser una clave nueva";
                        $("#id_nueva_clave").val('');
                        $("#id_confirmar_clave").val('');
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
                // document.getElementById('id_spiner_save').style.display = 'none';

                return;
            }
            document.getElementById('mensaje_confirmar_clave').innerHTML = "Confirmación Correcta.";
            element_mensaje_confirmar_clave.style.display = "block";
            element_mensaje_confirmar_clave.style.color = "Green";
            element_mensaje_confirmar_clave.style.display = "block";
            // document.getElementById('id_spiner_save').style.display = 'block';


            if (nueva_clave == "" || confirmar_clave == "") {
                element_btn_guardar_clave.style.display = "none";
                //  document.getElementById('id_spiner_save').style.display = 'none';
                return;
            }

            element_btn_guardar_clave.style.display = "block";
            // document.getElementById('id_spiner_save').style.display = 'block';

            //var clave_actual2 = hdn_clave_actual.value;//$('#hdn_clave_actual').val('');
            //if (clave_actual2 == "clave incorrecto") {
            //    error("Clave Actual Incorrecto");     
            //    element_btn_guardar_clave.style.display = "none";
            //    return;
            //}


        }

        function validar_cambio_clave() {

            var clave_actual = $("#id_clave_actual").val();
            var nueva_clave = $("#id_nueva_clave").val();
            var confirmar_clave = $("#id_confirmar_clave").val();

            document.getElementById('id_spiner_save').style.display = 'block';

            if (nueva_clave != confirmar_clave) {
                error("Clave No Coinciden");
                document.getElementById('id_spiner_save').style.display = 'none';
                return;
            }
            if (nueva_clave == "" || confirmar_clave == "") {
                error("Clave Actual Vacio");
                document.getElementById('id_spiner_save').style.display = 'none';
                return;
            }

            //var clave_actual = hdn_clave_actual.value;//$('#hdn_clave_actual').val('');
            //if (clave_actual == "clave incorrecto") {
            //    document.getElementById('id_spiner_save').style.display = 'none';
            //      error("Clave Actual Incorrecto");
            //     return;
            //}

            // var IdCliente = document.getElementById('hf_IdCliente').value;
            var usuario = $("#id_usuario").val();
            // var usuario=IdCliente;
            var clave = nueva_clave;


            $.ajax({
                type: 'POST',
                url: 'Login.aspx/ActualizarClaveUsuario2',
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                cache: false,
                data: '{usuario: "' + usuario + '",clave: "' + clave + '"}',
                success: function (data) {
                    ndata = data.d;
                    var element_mensaje_nueva_clave = document.getElementById("mensaje_nueva_clave");
                    if (ndata == 'Correcto') {
                        limpiar();
                        alerta("Actualizacion Correcta");
                        document.getElementById('id_spiner_save').style.display = 'none';
                    } else {
                        error("Error al Actualizar");
                        document.getElementById('id_spiner_save').style.display = 'none';
                    }

                }
            })



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
        function open_restablecer_clave() {
            //alert("hola");
            var usuario = $("#id_usuario").val();
            //$('#ModalCambioPassword').modal('show');
            //return;

            $.ajax({
                type: 'POST',
                url: 'Login.aspx/ValidarClaveUsuario',
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                cache: false,
                data: '{usuario: "' + usuario + '"}',
                success: function (data) {
                    ndata = data.d;
                    // var element_mensaje_clave_actual = document.getElementById("mensaje_clave_actual");                      
                    if (ndata == 'Usuario Existe') {
                        alerta("Correcto");
                        // document.querySelector('#id_sms').checked = false;
                        document.querySelector('#id_correo').checked = false;
                        document.querySelector('#id_preguntas_seguridad').checked = false;
                        document.getElementById('id_spiner').style.display = 'none';
                        obtener_datos_cliente(usuario);
                        //$('#ModalElegirValidacion').modal('show');
                    } else {
                        alert("Usuario No Existe");
                    }
                }
            })


        }
        function obtener_datos_cliente(usuario) {
            //alert("hola");
            // var usuario = usuario;// $("#id_usuario").val();

            $.ajax({
                type: 'POST',
                url: 'Login.aspx/ListaDatosClienteUsuario',
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                cache: false,
                data: '{usuario: "' + usuario + '"}',
                success: function (data) {
                    var Datos = data.d;
                    var Correo;
                    var Celular;
                    $.each(Datos, function (i) {
                        Correo = Datos[i].correo_encrip;
                        Celular = Datos[i].celular_encrip;

                        //document.getElementById('lbl_sms').innerHTML = "<i class='glyphicon glyphicon-phone'></i>&nbsp Enviar Código por SMS:" + "<label class='col-form-label form-control-label' style='color:#1B1464'>" + Celular + "</label>";
                        document.getElementById('lbl_correo').innerHTML = "<i class='glyphicon glyphicon-envelope'></i>&nbsp; Enviar Código por correo al: " + "<label class='col-form-label form-control-label' style='color:#1B1464'>" + Correo;

                        document.getElementById('span_correo').innerHTML = "<label for='male' class='col-form-label form-control-label' style='color:#1B1464' id='span_correo'>&nbsp;" + Correo + "</label><br>";

                        $('#ModalElegirValidacion').modal('show');

                         <%--$("#TxtMonto").val(MontoPagar);
                         $("#cmbTienda option[value='" + Despacho + "']").attr("selected", true);
                         $('#<%=HiddenTienda.ClientID%>').val(Despacho);
                         $('#<%=HiddenMondoPagar.ClientID%>').val(MontoPagar);--%>
                    });
                }
            })


        }


        function open_correo_sms() {
            //var id_sms = document.querySelector('#id_sms').checked;
            var id_correo = document.querySelector('#id_correo').checked;
            var id_preguntas_seguridad = document.querySelector('#id_preguntas_seguridad').checked;

            if (id_correo == false & id_preguntas_seguridad == false) {
                error("Codigo Vacio");
            }
            else {
                //if (id_sms == true) {
                //    $('#ModalElegirValidacion').modal('hide');
                //    $('#ModalSMS').modal('show');
                //}
                if (id_correo == true) {
                    open_envio_codigo();
                }
                if (id_preguntas_seguridad == true) {
                    ListadoPreguntas();
                    $('#ModalElegirValidacion').modal('hide');
                    $('#ModalPreguntasSeguridad').modal('show');
                }
            }

        }
        function close_correo_sms() {
            $('#ModalElegirValidacion').modal('hide');
        }
        function validar_codigo_seguridad() {
            var codigo_correo = $("#txt_codigo_correo").val();
            var usuario = $("#id_usuario").val();
            document.getElementById('id_spiner_validar_codigo').style.display = 'block';

            if (codigo_correo == "") {
                error("Codigo Correo Vacio");
                document.getElementById('id_spiner_validar_codigo').style.display = 'none';
                return;
            }

            $.ajax({
                type: 'POST',
                url: 'Login.aspx/ValidarCodigoCorreo',
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                cache: false,
                data: '{usuario: "' + usuario + '",codigo_correo: "' + codigo_correo + '"}',
                success: function (data) {
                    var resultado = data.d;

                    if (resultado == "CODIGO INCORRECTO") {
                        error("CODIGO INCORRECTO");
                        document.getElementById('id_spiner_validar_codigo').style.display = 'none';
                    }
                    else {
                        //$('#ModalElegirValidacion').modal('hide');     
                        limpiar();
                        alerta("Codigo Correcto");
                        //$('#ModalCorreo').modal('show');
                        //document.getElementById('id_spiner').style.display = 'none';
                        $('#ModalCorreo').modal('hide');
                        $('#ModalCambioPassword').modal('show');
                        document.getElementById('id_spiner_validar_codigo').style.display = 'none';
                    }


                }
            })


        }

        function open_envio_codigo() {
            var usuario = $("#id_usuario").val();
            document.getElementById('id_spiner').style.display = 'block';
            $.ajax({
                type: 'POST',
                url: 'Login.aspx/EnviarCorreo',
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                cache: false,
                data: '{usuario: "' + usuario + '"}',
                success: function (data) {
                    var resultado = data.d;

                    if (resultado == "0") {
                        error("Intentos Superados");
                        document.getElementById('id_spiner').style.display = 'none';
                    }
                    else {

                        $('#txt_codigo_correo').val('');
                        $('#ModalElegirValidacion').modal('hide');
                        alerta("Enviado");
                        $('#ModalCorreo').modal('show');
                        document.getElementById('id_spiner').style.display = 'none';
                    }


                }
            })
        }

        function open_reenvio_codigo_correo() {
            var usuario = $("#id_usuario").val();
            document.getElementById('id_spiner_correo').style.display = 'block';
            $.ajax({
                type: 'POST',
                url: 'Login.aspx/EnviarCorreo',
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                cache: false,
                data: '{usuario: "' + usuario + '"}',
                success: function (data) {
                    var resultado = data.d;
                    // alert(resultado);
                    if (resultado == "0") {
                        error("Intentos Superados");
                        document.getElementById('id_spiner_correo').style.display = 'none';
                    }
                    else {
                        alerta("Enviado");
                        document.getElementById('id_spiner_correo').style.display = 'none';
                    }


                }
            })
        }
        function alerta(mensaje) {

            if (mensaje == 'Actualizacion Correcta') {
                alertify.alert("<b>Actualización Correcta.</b>", function () {
                    //aqui introducimos lo que haremos tras cerrar la alerta.
                    location.href = "Login.aspx";
                    //por ejemplo -->  location.href = 'http://www.google.es/';  <-- Redireccionamos a GOOGLE.
                });
            }

            //un alert
            if (mensaje == 'Correcto') {
                alertify.alert("<b>Usuario Validado. Continuar...</b>", function () {
                    //aqui introducimos lo que haremos tras cerrar la alerta.
                    //por ejemplo -->  location.href = 'http://www.google.es/';  <-- Redireccionamos a GOOGLE.
                });
            }
            if (mensaje == 'Enviado') {
                alertify.alert("<b>El Código fue envíado correctamente. Revise su Bandeja de Entrada o Bandeja de SPAM</b>", function () {
                    //aqui introducimos lo que haremos tras cerrar la alerta.
                    //por ejemplo -->  location.href = 'http://www.google.es/';  <-- Redireccionamos a GOOGLE.
                });
            }
            if (mensaje == 'Codigo Correcto') {
                alertify.alert("<b>Código Correcto. Continuar con el Cambio de Clave.</b>", function () {
                    //aqui introducimos lo que haremos tras cerrar la alerta.
                    //por ejemplo -->  location.href = 'http://www.google.es/';  <-- Redireccionamos a GOOGLE.
                });
            }
            if (mensaje == 'Respuesta Correcta') {
                alertify.alert("<b>Sus Repuestas son correctas. Continuar con el Cambio de Clave.</b>", function () {
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
            if (mensaje == "Codigo Vacio") {
                alertify.error("Debe Elegir una opción.");
                return false;
            }
            if (mensaje == "Intentos Superados") {
                alertify.error("Superó el límite de envío por día. Inténtelo dentro de 24 horas");
                return false;
            }
            if (mensaje == "Codigo Correo Vacio") {
                alertify.error("Debe Ingresar el Código de Seguridad");
                return false;
            }
            if (mensaje == "CODIGO INCORRECTO") {
                alertify.error("Código Incorrecto. Inténtelo nuevamente.");
                return false;
            }
            if (mensaje == "Error al Actualizar") {
                alertify.error("Error al Actualizar. Inténtelo nuevamente");
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
            if (mensaje == "Clave Actual Incorrecto") {
                alertify.error("Su clave actual es incorrecta.");
                return false;
            }

        }

        function close_cambiar_clave() {
            $('#ModalCambioPassword').modal('hide');
        }
        function close_preguntas_seguridad() {
            $('#ModalPreguntasSeguridad').modal('hide');
        }
        function close_elegir_codigo_seguridad() {
            $('#ModalCorreo').modal('hide');
        }
        function ListadoPreguntas() {
            var usuario = $("#id_usuario").val();
            $.ajax({
                type: 'POST',
                url: 'Login.aspx/ListadoPreguntasUsuario',
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
                                    <span class="lblMedio input-sm" id="span_pregunta${contador}" style="font-weight: bold;">${pregunta}</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-11" style="margin: 0px 0px 5px 10px;">
                                    <textarea id="txt_Respuesta${contador}" name="txt_Respuesta${contador}" class="form-control input-sm" title="Ingresar Repuesta" placeholder="Ingresar Respuesta" maxlength="200"></textarea>
                                    <textarea id="txt_Respuesta_oculto${contador}" name="txt_Respuesta_oculto${contador}" style="display:none;" class="form-control input-sm" title="Ingresar Repuesta" placeholder="Ingresar Respuesta" maxlength="200">${respuesta}</textarea>
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
                                    <textarea id="txt_Respuesta${contador}" name="txt_Respuesta${contador}" class="form-control input-sm" title="Ingresar Repuesta" placeholder="Ingresar Respuesta" maxlength="200"></textarea>
                                    <textarea id="txt_Respuesta_oculto${contador}" name="txt_Respuesta_oculto${contador}" style="display:none;" class="form-control input-sm" title="Ingresar Repuesta" placeholder="Ingresar Respuesta" maxlength="200">${respuesta}</textarea>
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

            var usuario = $("#id_usuario").val();
            var contador = hdnContador.value;
            var variable_id_respuesta = 'txt_Respuesta';
            var respuesta;
            var variable_id_pregunta = 'span_pregunta';
            var pregunta;
            var result_respuesta;
            var contador_item;
            var result;

            var variable_id_respuesta_oculta = 'txt_Respuesta_oculto';
            var respuesta_oculta;

            for (let item = 1; item <= contador; item++) {
                // Se ejecuta 5 veces, con valores del paso 0 al 4.
                contador_item = item;
                pregunta = document.getElementById(variable_id_pregunta + item).innerHTML;//document.getElementById(variable_id_pregunta + item).value;
                respuesta = document.getElementById(variable_id_respuesta + item).value;
                respuesta_oculta = document.getElementById(variable_id_respuesta_oculta + item).value;

                //variable_respuesta = variable_respuesta + item;
                if (respuesta == "") {
                    document.getElementById(variable_id_respuesta + item).focus();
                    result_respuesta = "vacio";
                    break;
                }
                if (respuesta != respuesta_oculta) {
                    document.getElementById(variable_id_respuesta + item).focus();
                    //result_respuesta ="vacio";
                    result = "No Coincide";
                    break;
                }

            }
            if (result_respuesta == "vacio") {
                error("Preguntas Vacias");
                return;
            }
            else {
                if (result == "No Coincide") {
                    error("No Coincide");
                    return;
                }
                else {
                    limpiar();
                    alerta("Respuesta Correcta");
                    $('#ModalPreguntasSeguridad').modal('hide');
                    $('#ModalCambioPassword').modal('show');
                    return;
                }
            }




        }

        function valideKey(evt) {
            // code is the decimal ASCII representation of the pressed key.
            var code = (evt.which) ? evt.which : evt.keyCode;

            if (code == 8) { // backspace.
                return true;
            } else if (code >= 48 && code <= 57) { // is a number.
                return true;
            } else { // other keys.
                return false;
            }
        }

    </script>

</body>
</html>
