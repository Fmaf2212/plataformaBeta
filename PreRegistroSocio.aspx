<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="PreRegistroSocio.aspx.cs" ClientIDMode="Static" Inherits="SantaNaturaNetworkV3.PreRegistroSocio" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link rel="stylesheet" href="css/Banner de Store Template/animate.css">
    <link rel="stylesheet" type="text/css" href="css/file-upload.css" />
    <link href="css/estilosDetalleCompra.css" rel="stylesheet" />

    <link href="css/proyecto2/formularioRegistroValidaciones.css?v1" rel="stylesheet" />

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="js/proyecto2/eskju.jquery.scrollflow.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@10" type="text/javascript"></script>
    <%--<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>--%>

    <link href="css/proyecto2/estilosPreRegistroSocio.css?Fv42" rel="stylesheet" />

    <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
        integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V"
        crossorigin="anonymous" />

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:ScriptManager runat="server">
        <Scripts>
            <asp:ScriptReference Name="WebForms.js" Assembly="System.Web" Path="~/Scripts/WebForms/WebForms.js" />
            <asp:ScriptReference Name="WebUIValidation.js" Assembly="System.Web" Path="~/Scripts/WebForms/WebUIValidation.js" />
            <asp:ScriptReference Name="MenuStandards.js" Assembly="System.Web" Path="~/Scripts/WebForms/MenuStandards.js" />
            <asp:ScriptReference Name="GridView.js" Assembly="System.Web" Path="~/Scripts/WebForms/GridView.js" />
            <asp:ScriptReference Name="DetailsView.js" Assembly="System.Web" Path="~/Scripts/WebForms/DetailsView.js" />
            <asp:ScriptReference Name="TreeView.js" Assembly="System.Web" Path="~/Scripts/WebForms/TreeView.js" />
            <asp:ScriptReference Name="WebParts.js" Assembly="System.Web" Path="~/Scripts/WebForms/WebParts.js" />
            <asp:ScriptReference Name="Focus.js" Assembly="System.Web" Path="~/Scripts/WebForms/Focus.js" />
        </Scripts>
    </asp:ScriptManager>
    <link href="https://unpkg.com/gijgo@1.9.13/css/gijgo.min.css" rel="stylesheet" type="text/css" />
    <div id="page_loader" style="display: none" class="se-pre-con"></div>

    <div style="margin: 70px auto 0; max-width: 1440px;">
        <div class="preRegistroSeleccione" id="Banderas">
            <div class="preRegistroSeleccione__titulo">
                <label>Realiza el registro de un nuevo empresario</label>
            </div>
            <div class="seleccionPais">
                <div class="seleccionPais__titulo">
                    <label>SELECCIONA EL PAÍS</label>
                </div>
                <div class="seleccionPais__banderas">
                    <div style="display: none">
                        <div class="bandera banderaBolivia"></div>
                        <label>BOLIVIA</label>
                    </div>
                    <%-- <div>
                        <div class="bandera banderaEcuador"></div>
                        <label>ECUADOR</label>
                    </div>--%>
                    <div class="seleccionPais__banderas__EEUU" style="display: none">
                        <div class="bandera banderaEEUU"></div>
                        <label>ESTADOS UNIDOS</label>
                    </div>
                    <%--<div>
                        <div class="bandera banderaPanama"></div>
                        <label>PANAMA</label>
                    </div>--%>
                    <div>
                        <div class="bandera banderaPeru"></div>
                        <label>PERÚ</label>
                    </div>
                </div>
            </div>
        </div>

        <div id="ContenidoFluido" class="preRegistroSocio">
            <div class="form-group scrollflow -pop -opacity preRegistroSocio__bloqueTitulo">
                <i id="regresarBanderas" class="fas fa-arrow-left regresarBanderas"><span>Regresar</span></i>
                <p>REGISTRO DE UN NUEVO EMPRESARIO</p>
            </div>
            <div class="preRegistroSocio__bloqueCrearCuenta">
                <label>Crear cuenta</label>

                <div id="formulario" class="formulario">
                    <div class="scrollflow -opacity formulario__photo">
                        <%--<label>Mi foto de perfil</label>
                        <div id="imagePreview" class="center-block align-content-center">
                            <img src="img/usuario1.png" class="img-fluid" />
                        </div>--%>
                        <div id="imagePreview" style="background-image: url(img/usuario-gris.png); background-size: cover; background-repeat: no-repeat; width: 100%; height: 100%; border-radius: 50%;">
                        </div>
                        <%--<img style="" width="186" src="img/usuario-azul.png" class="" />--%>
                        <input class="inputAddPhoto" type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
                        <label for="imageUpload">
                            <img class="imgAddPhoto" src="img/add-photo.png" alt="" /></label>

                        <%--<asp:FileUpload CssClass="form-control imagen" ID="fileUpload1" runat="server" />--%>
                    </div>
                    <%--<div class="form-group col-md-4 scrollflow -opacity" id="btnCargaImagen" runat="server">
                        <label class="label" style="font-weight: bold">Foto de Perfil</label>
                        <label class="file-upload btn btn-success form-control marginTop" style="font-size: 15px">
                            Ingresa tu foto
                                    <asp:FileUpload CssClass="form-control imagen" ID="fileUpload" runat="server" />
                        </label>
                    </div>--%>
                    <div class="scrollflow -opacity formulario__crearUsuario">
                        <label class="labelPreRegistro">Crear usuario</label>
                        <asp:TextBox ID="txtUl" title="Se necesita un nombre de Usuario" MaxLength="8" runat="server" CssClass="form-controlPreRegistro marginTop"></asp:TextBox>
                        <label class="labelPreRegistro" style="font-size:12px; margin-top:5px;">** Max. 8 digitos</label>
                    </div>

                    <div class="formulario__grupo formulario__crearCrearContraseña" id="grupo__password">
                        <label for="password" class="labelPreRegistro formulario__label">Crear contraseña</label>
                        <div class="formulario__grupo-input">
                            <input type="password" class="form-controlPreRegistro marginTop formulario__input" name="password" id="password" maxlength="12" autocomplete="new-password">
                            <%--<asp:TextBox ID="password" runat="server" CssClass="form-controlPreRegistro text-uppercase marginTop formulario__input" MaxLength="12" TextMode="Password"></asp:TextBox>--%>
                            <img id="ojito1" class="ojito1" onclick="mostrarContrasena()" src="img/ojito.png" alt="" style="display: none" />
                            <button id="btnOjitos1" type="button" aria-label="Mostrar contraseña" class="eyePassword ojito1">
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
                            <i class="formulario__validacion-estado fas fa-times-circle"></i>
                        </div>
                        <label class="labelPreRegistro" style="font-size:15px; margin-top:5px;">**</label>
                    </div>
                    <div class="formulario__grupo formulario__confirmarContraseña" id="grupo__password2">
                        <label for="password2" class="labelPreRegistro formulario__label">Confirmar contraseña</label>
                        <div class="formulario__grupo-input">
                            <input type="password" class="form-controlPreRegistro marginTop formulario__input" name="password2" id="password2">
                            <img id="ojito2" class="ojito2" onclick="mostrarContrasena2()" src="img/ojito.png" alt="" style="display: none" />
                            <%--<svg id="eyeIcon" width="24px" height="24px" viewBox="0 0 64 64" version="1.1" style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2;">
                                <rect id="Icons" x="-896" y="-256" width="1280" height="800" style="fill: none;"></rect>
                                <g id="Icons1">
                                    <g id="eye">
                                        <path d="M32.513,13.926c10.574,0.15 19.249,9.657 23.594,17.837c0,0 -1.529,3.129 -2.963,5.132c-0.694,0.969 -1.424,1.913 -2.191,2.826c-0.547,0.65 -1.112,1.283 -1.698,1.898c-5.237,5.5 -12.758,9.603 -20.7,8.01c-8.823,-1.77 -16.02,-9.33 -20.346,-17.461c0,0 1.536,-3.132 2.978,-5.132c0.646,-0.897 1.324,-1.77 2.034,-2.617c0.544,-0.649 1.108,-1.282 1.691,-1.897c4.627,-4.876 10.564,-8.63 17.601,-8.596Zm-0.037,4c-5.89,-0.022 -10.788,3.267 -14.663,7.35c-0.527,0.555 -1.035,1.127 -1.527,1.713c-0.647,0.772 -1.265,1.569 -1.854,2.386c-0.589,0.816 -1.193,1.846 -1.672,2.721c3.814,6.409 9.539,12.198 16.582,13.611c6.563,1.317 12.688,-2.301 17.016,-6.846c0.529,-0.555 1.04,-1.128 1.534,-1.715c0.7,-0.833 1.366,-1.694 1.999,-2.579c0.586,-0.819 1.189,-1.851 1.667,-2.727c-3.958,-6.625 -10.73,-13.784 -19.082,-13.914Z" />
                                        <path d="M32.158,23.948c4.425,0 8.018,3.593 8.018,8.017c0,4.425 -3.593,8.017 -8.018,8.017c-4.424,0 -8.017,-3.592 -8.017,-8.017c0,-4.424 3.593,-8.017 8.017,-8.017Zm0,4.009c2.213,0 4.009,1.796 4.009,4.008c0,2.213 -1.796,4.009 -4.009,4.009c-2.212,0 -4.008,-1.796 -4.008,-4.009c0,-2.212 1.796,-4.008 4.008,-4.008Z" />
                                    </g>
                                </g>
                            </svg>--%>
                            <button id="btnOjitos2" type="button" aria-label="Mostrar contraseña" class="eyePassword ojito2">
                                <svg id="eyeIcon2" width="24px" height="24px" viewBox="0 0 64 64" version="1.1" style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2;">
                                    <rect id="Icons2" x="-896" y="-256" width="1280" height="800" style="fill: none;"></rect>
                                    <g id="Icons1.2">
                                        <g id="eye2">
                                            <path d="M32.513,13.926c10.574,0.15 19.249,9.657 23.594,17.837c0,0 -1.529,3.129 -2.963,5.132c-0.694,0.969 -1.424,1.913 -2.191,2.826c-0.547,0.65 -1.112,1.283 -1.698,1.898c-5.237,5.5 -12.758,9.603 -20.7,8.01c-8.823,-1.77 -16.02,-9.33 -20.346,-17.461c0,0 1.536,-3.132 2.978,-5.132c0.646,-0.897 1.324,-1.77 2.034,-2.617c0.544,-0.649 1.108,-1.282 1.691,-1.897c4.627,-4.876 10.564,-8.63 17.601,-8.596Zm-0.037,4c-5.89,-0.022 -10.788,3.267 -14.663,7.35c-0.527,0.555 -1.035,1.127 -1.527,1.713c-0.647,0.772 -1.265,1.569 -1.854,2.386c-0.589,0.816 -1.193,1.846 -1.672,2.721c3.814,6.409 9.539,12.198 16.582,13.611c6.563,1.317 12.688,-2.301 17.016,-6.846c0.529,-0.555 1.04,-1.128 1.534,-1.715c0.7,-0.833 1.366,-1.694 1.999,-2.579c0.586,-0.819 1.189,-1.851 1.667,-2.727c-3.958,-6.625 -10.73,-13.784 -19.082,-13.914Z" />
                                            <path d="M32.158,23.948c4.425,0 8.018,3.593 8.018,8.017c0,4.425 -3.593,8.017 -8.018,8.017c-4.424,0 -8.017,-3.592 -8.017,-8.017c0,-4.424 3.593,-8.017 8.017,-8.017Zm0,4.009c2.213,0 4.009,1.796 4.009,4.008c0,2.213 -1.796,4.009 -4.009,4.009c-2.212,0 -4.008,-1.796 -4.008,-4.009c0,-2.212 1.796,-4.008 4.008,-4.008Z" />
                                        </g>
                                    </g>
                                </svg>
                            </button>
                            <i class="formulario__validacion-estado fas fa-times-circle"></i>
                        </div>
                        <label class="labelPreRegistro" style="font-size:15px; margin-top:5px;">**</label>
                        <span class="formulario__input-error">
                            <img width="12" src="img/aviso-error.png" alt="Alternate Text" />Las contraseñas no coinciden. Inténtalo nuevamente.</span>
                    </div>

                    <%--                    <div id="grupo__password" class="scrollflow -opacity " style="margin-bottom: 18px;">
                        <label class="labelPreRegistro formulario__label">Crear contraseña</label>
                        <div class="formulario__grupo-input">
                            <asp:TextBox ID="TxtCl" runat="server" CssClass="form-controlPreRegistro text-uppercase marginTop formulario__input" MaxLength="12" TextMode="Password"></asp:TextBox>
                            <i class="formulario__validacion-estado fas fa-times-circle"></i>
                        </div>
                        <img id="ojito1" style="position: absolute; right: 20px; top: 40px; cursor: pointer;" onclick="mostrarContrasena()"
                            src="img/ojito.png" alt="" />
                    </div>
                    <div id="grupo__password3" class="scrollflow -opacity">
                        <label class="labelPreRegistro">Confirmar contraseña</label>
                        <div class="formulario__grupo-input">
                            <asp:TextBox ID="TxtCl2" runat="server" CssClass="form-controlPreRegistro text-uppercase marginTop formulario__input" MaxLength="12" TextMode="Password"></asp:TextBox>
                            <i class="formulario__validacion-estado fas fa-times-circle"></i>
                            <img id="ojito2" style="position: absolute; right: 20px; top: 40px; cursor: pointer;" onclick="mostrarContrasena2()"
                                src="img/ojito.png" alt="" />
                        </div>
                        <span class="formulario__input-error mensajeContraseñasNoCoinciden">
                            <img width="12" src="img/aviso-error.png" alt="Alternate Text" />Las contraseñas no coinciden. Inténtalo nuevamente.</span>
                    </div>--%>
                </div>
            </div>
            <div class="row justify-content-md-center preRegistroSocio__bloqueFormulario">
                <!--REGISTRO AFILIACION-->
                <div id="MostrarRegistroCliente">
                    <div class="row form-group colorlib-form">
                        <div class="form-group">

                            <div class="bloqueInfoContacto">
                                <label class="bloqueInfoContacto__titulo">Documento de Identidad</label>

                                <div class="bloqueInfoContacto__body">
                                    <div class="scrollflow -opacity">
                                        <label class="labelPreRegistro">Tipo de documento</label>
                                        <select runat="server" id="ComboTipoDocumento" class="select form-controlPreRegistro text-uppercase">
                                            <option value="01">DOCUMENTO DE IDENTIDAD</option>
                                            <option value="02">PASAPORTE</option>
                                        </select>
                                    </div>
                                    <div class="form-group scrollflow -opacity">
                                        <label class="labelPreRegistro">N° Documento</label>
                                        <asp:TextBox ID="txtNumDocumento" runat="server" onkeypress="return validarNumerosPD(event)" CssClass="form-controlPreRegistro text-uppercase "></asp:TextBox>
                                        <label class="labelPreRegistro" style="font-size:15px; margin-top:5px;">**</label>
                                    </div>
                                    <div class="scrollflow -opacity" id="bloqBtnValidar">
                                        <button class="validarIdentidad" type="button" id="btnValidar">Validar</button>
                                    </div>
                                </div>
                            </div>

                            <div class="bloqueInfoAfiliacion">
                                <label class="bloqueInfoAfiliacion__titulo">Información de Afiliación</label>

                                <div class="bloqueInfoAfiliacion__body">
                                    <div class="scrollflow -opacity">
                                        <label class="labelPreRegistro">Tipo de Cliente</label>
                                        <select runat="server" id="ddlTC" class="select form-controlPreRegistro text-uppercase">
                                            <option value="01">Socio</option>
                                            <%--<option value="05">Consultor MLM</option>
                                            <option value="03">C. Inteligente</option>--%>
                                            <option value="11">Consultor</option>
                                        </select>
                                        <%--<asp:DropDownList ID="ddlPaquete" runat="server" CssClass="form-controlPreRegistro text-uppercase" onchange="paqueteCliente(this);" >
                                        <asp:ListItem Value="0"> Seleccione</asp:ListItem>
                                        <asp:ListItem Value="01">Básico</asp:ListItem>
                                        <asp:ListItem Value="02">Profesional</asp:ListItem>
                                        <asp:ListItem Value="03">Empresarial</asp:ListItem>
                                        <asp:ListItem Value="04">Millonario</asp:ListItem>
                                        <asp:ListItem Value="23">Imperial</asp:ListItem>
                                        <asp:ListItem Value="05">Consultor</asp:ListItem>
                                        <asp:ListItem Value="06">C. Inteligente</asp:ListItem>
                                    </asp:DropDownList>--%>
                                    </div>
                                    <div class="scrollflow -opacity">
                                        <label class="labelPreRegistro">Upline</label>
                                        <%--<asp:DropDownList ID="CboUpLine" runat="server" CssClass="form-controlPreRegistro text-uppercase" />--%>
                                        <select runat="server" id="CboUpLine" class="select form-controlPreRegistro text-uppercase"></select>
                                        <label class="labelPreRegistro" style="font-size:15px; margin-top:5px;">**</label>
                                    </div>
                                    <div class="scrollflow -opacity">
                                        <label class="labelPreRegistro">Patrocinador</label>
                                        <asp:TextBox ID="txtPatrocinador" runat="server" CssClass="form-controlPreRegistro noEditable" ReadOnly="true"></asp:TextBox>
                                    </div>
                                </div>
                            </div>
                            <div class="row col-md-12">

                                <div class="form-group col-md-3 scrollflow -opacity" style="display: none;">
                                    <label class="labelPreRegistro">Pais de tienda</label>
                                    <asp:DropDownList ID="cboPaisTienda" runat="server" CssClass="form-controlPreRegistro " />
                                </div>
                                <div class="form-group col-md-3 scrollflow -opacity" style="display: none;">
                                    <label class="labelPreRegistro">CDR Preferido</label>
                                    <asp:DropDownList ID="cboTipoEstablecimiento" runat="server" CssClass="form-controlPreRegistro btn-lg " />
                                </div>
                            </div>
                            <div class="bloqueDatosPersonales">
                                <label class="bloqueDatosPersonales__titulo">Datos Personales</label>

                                <div class="bloqueDatosPersonales__body">
                                    <div class="form-group scrollflow -opacity">
                                        <label class="labelPreRegistro">Nombres</label>
                                        <asp:TextBox ID="txtNombre" runat="server" CssClass="form-controlPreRegistro text-uppercase " onkeydown="validarLetras(event)"
                                            onkeyup="validarLetras(event)"></asp:TextBox>
                                        <label class="labelPreRegistro" style="font-size:15px; margin-top:5px;">**</label>
                                    </div>
                                    <div class="form-group scrollflow -opacity">
                                        <label class="labelPreRegistro">Primer Apellido</label>
                                        <asp:TextBox ID="txtApPaterno" runat="server" CssClass="form-controlPreRegistro text-uppercase " onkeydown="validarLetras(event)"
                                            onkeyup="validarLetras(event)"></asp:TextBox>
                                        <label class="labelPreRegistro" style="font-size:15px; margin-top:5px;">**</label>
                                    </div>
                                    <div class="form-group scrollflow -opacity">
                                        <label class="labelPreRegistro">Segundo Apellido</label>
                                        <asp:TextBox ID="txtApMaterno" runat="server" CssClass="form-controlPreRegistro text-uppercase " onkeydown="validarLetras(event)"
                                            onkeyup="validarLetras(event)"></asp:TextBox>
                                    </div>


                                    <div class="form-group scrollflow -opacity">
                                        <label class="labelPreRegistro">Género</label>
                                        <select runat="server" id="ComboSexo" class="select form-controlPreRegistro text-uppercase">
                                            <option value="0">Seleccione</option>
                                            <option value="01">MASCULINO</option>
                                            <option value="02">FEMENINO</option>
                                            <option value="03">NO ESPECIFICA</option>
                                        </select>
                                        <label class="labelPreRegistro" style="font-size:15px; margin-top:5px;">**</label>
                                        <%--<asp:DropDownList ID="ComboSexo" runat="server" CssClass="form-controlPreRegistro text-uppercase">
                                        <asp:ListItem Value="0">Seleccione</asp:ListItem>
                                        <asp:ListItem Value="1">MASCULINO</asp:ListItem>
                                        <asp:ListItem Value="2">FEMENINO</asp:ListItem>
                                        <asp:ListItem Value="3">NO ESPECIFICA</asp:ListItem>
                                    </asp:DropDownList>--%>
                                    </div>

                                    <div class="scrollflow -opacity">
                                        <label class="labelPreRegistro">Fecha de nacimiento</label>
                                        <input type="text" id="datepicker" class="form-controlPreRegistro text-uppercase inputDatepicker" readonly runat="server" />
                                        <label class="labelPreRegistro" style="font-size:15px; margin-top:5px;">**</label>
                                    </div>
                                </div>
                            </div>

                            <div class="bloqueInfoContacto">
                                <label class="bloqueInfoContacto__titulo">Información de Contacto</label>

                                <div class="bloqueInfoContacto__body">
                                    <div class="scrollflow -opacity">
                                        <label class="labelPreRegistro">Correo electrónico</label>
                                        <asp:TextBox ID="TxtCorreo" runat="server" CssClass="form-controlPreRegistro" TextMode="Email"></asp:TextBox>
                                        <label class="labelPreRegistro" style="font-size:15px; margin-top:5px;">**</label>
                                    </div>
                                    <div class="scrollflow -opacity">
                                        <label class="labelPreRegistro">Teléfono</label>
                                        <asp:TextBox ID="TxtTelefono" runat="server" onkeypress="return validarNumeros(event)" CssClass="form-controlPreRegistro text-uppercase"></asp:TextBox>
                                    </div>
                                    <div class="scrollflow -opacity">
                                        <label class="labelPreRegistro">Celular</label>
                                        <asp:TextBox ID="TxtCelular" runat="server" onkeypress="return validarNumeros(event)" CssClass="form-controlPreRegistro text-uppercase solo-numero" MaxLength="12"></asp:TextBox>
                                        <label class="labelPreRegistro" style="font-size:15px; margin-top:5px;">**</label>
                                    </div>
                                </div>
                            </div>

                            <div class="bloqueInfoResidencia" style="margin-bottom: 19px !important;">
                                <label class="bloqueInfoResidencia__titulo">Información de Residencia</label>

                                <div class="bloqueInfoResidencia__body">
                                    <div class="scrollflow -opacity" style="display: none">
                                        <label class="labelPreRegistro">Pais de operaciones</label>
                                        <select runat="server" id="cboPais" class="select form-controlPreRegistro text-uppercase"></select>
                                        <%--<asp:DropDownList ID="cboPais" runat="server" CssClass="form-controlPreRegistro text-uppercase" />--%>
                                    </div>
                                    <div class="scrollflow -opacity">
                                        <label class="labelPreRegistro" id="lblEstado">Estado</label>
                                        <select runat="server" id="cboDepartamento" class="select form-controlPreRegistro text-uppercase"></select>
                                        <label class="labelPreRegistro" style="font-size:15px; margin-top:5px;">**</label>
                                        <%--<asp:DropDownList ID="cboDepartamento" runat="server" CssClass="form-controlPreRegistro text-uppercase" />--%>
                                    </div>

                                    <div class="scrollflow -opacity">
                                        <label class="labelPreRegistro" id="lblCondado">Condado</label>
                                        <select runat="server" id="cboProvincia" class="select form-controlPreRegistro text-uppercase"></select>
                                        <label class="labelPreRegistro" style="font-size:15px; margin-top:5px;">**</label>
                                        <%--<asp:DropDownList ID="cboProvincia" runat="server" CssClass="form-controlPreRegistro text-uppercase" />--%>
                                    </div>
                                    <div class="scrollflow -opacity" id="dvDistrito">
                                        <label class="labelPreRegistro" id="lblDistrito">Distrito</label>
                                        <select runat="server" id="cboDistrito" class="select form-controlPreRegistro text-uppercase"></select>
                                        <label class="labelPreRegistro" style="font-size:15px; margin-top:5px;">**</label>
                                        <%--<asp:DropDownList ID="cboDistrito" runat="server" CssClass="form-controlPreRegistro text-uppercase" />--%>
                                    </div>
                                    <div class="scrollflow -opacity" id="blogCdrPremio">
                                        <label class="labelPreRegistro">Y.W. Premio</label>
                                        <select runat="server" id="cboPremio" class="select form-controlPreRegistro text-uppercase"></select>
                                        <label class="labelPreRegistro" style="font-size:15px; margin-top:5px;">**</label>
                                        <%--<asp:DropDownList ID="cboPremio" runat="server" CssClass="form-controlPreRegistro text-uppercase" />--%>
                                    </div>
                                    <div class="scrollflow -opacity">
                                        <label class="labelPreRegistro">Dirección</label>
                                        <asp:TextBox ID="txtDireccion" runat="server" CssClass="form-controlPreRegistro text-uppercase "></asp:TextBox>
                                        <label class="labelPreRegistro" style="font-size:15px; margin-top:5px;">**</label>
                                    </div>
                                    <div class="scrollflow -opacity">
                                        <label class="labelPreRegistro refDireccion">Referencia de dirección</label>
                                        <asp:TextBox ID="TxtReferencia" runat="server" CssClass="form-controlPreRegistro text-uppercase "></asp:TextBox>
                                    </div> 
                                    <div class="scrollflow -opacity" id="bloqUbigeo">
                                        <label class="labelPreRegistro refDireccion">Ubigeo</label>
                                        <asp:TextBox ID="txtUbigeo" runat="server" CssClass="form-controlPreRegistro text-uppercase "></asp:TextBox>
                                    </div>
                                    <div class="scrollflow -opacity" id="bloqPostal">
                                        <label class="labelPreRegistro">Código Postal</label>
                                        <asp:TextBox ID="txtCodigoPostal" runat="server" CssClass="form-controlPreRegistro text-uppercase " onkeypress="return validarNumeros(event)"></asp:TextBox>
                                        <label class="labelPreRegistro" style="font-size:15px; margin-top:5px;">**</label>
                                    </div>
                                </div>
                            </div>

                            <div class="bloqueInfoContacto" id="bloq_Identidad">
                                <label class="bloqueInfoContacto__titulo">Verificación de Identidad</label>

                                <div class="bloqueInfoContacto__body">
                                    <div class="scrollflow -opacity">
                                        <label id="lblArchiveDni" style="width: 200px; font-size: 15px;" class="file-upload btn btn-success">
                                            Subir Archivo ...
                                        <asp:FileUpload ID="archiveDNI" runat="server" />
                                        </label>
                                        <label id="lbl2ArchiveDni" class="labelPreRegistro" style="font-size:15px">** Archivo DNI</label>
                                    </div>

                                    <div class="scrollflow -opacity">
                                        <label style="width: 200px; font-size: 15px;" class="file-upload btn btn-success">
                                            Archivo Dirección ...
                                        <asp:FileUpload ID="archiveAddress" runat="server" />
                                        </label>
                                        <label class="labelPreRegistro" style="font-size:15px">** Recibo de dirección (luz, agua, teléfono, etc.)</label>
                                    </div>
                                </div>
                            </div>
                            <label class="labelPreRegistro" style="font-size:15px;">** Campos obligatorios</label>
                        </div>

                        <div class="form-group" style="display: none;">
                            <label style="font-weight: bold; font-size: 16px">DATOS BANCARIOS</label>
                            <div class="row col-md-12">
                                <div class="col-md-4 scrollflow -opacity">
                                    <label class="labelPreRegistro">RUC</label>
                                    <asp:TextBox ID="TxtRUC" runat="server" CssClass="form-controlPreRegistro " onkeypress="return validarNumeros(event)"></asp:TextBox>
                                </div>
                                <div class="col-md-4 scrollflow -opacity">
                                    <label class="labelPreRegistro">Banco</label>
                                    <asp:TextBox ID="TxtBanco" runat="server" CssClass="form-controlPreRegistro text-uppercase " onkeydown="validarLetras(event)"
                                        onkeyup="validarLetras(event)"></asp:TextBox>
                                </div>
                                <div class="col-md-4 scrollflow -opacity">
                                    <label class="labelPreRegistro">N° Cuenta depósito</label>
                                    <asp:TextBox ID="TxtNumCuenDeposito" runat="server" CssClass="form-controlPreRegistro "></asp:TextBox>
                                </div>
                            </div>

                            <div class="row col-md-12">
                                <div class="form-group col-md-6 scrollflow -opacity">
                                    <label class="labelPreRegistro">N° Cuenta detracciones</label>
                                    <asp:TextBox ID="TxtNumCuenDetracciones" runat="server" CssClass="form-controlPreRegistro "></asp:TextBox>
                                </div>
                                <div class="form-group col-md-6 scrollflow -opacity">
                                    <label class="labelPreRegistro">N° Cuenta interbancaria</label>
                                    <asp:TextBox ID="TxtNumCuenInterbancaria" runat="server" CssClass="form-controlPreRegistro "></asp:TextBox>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div class="text-center preRegistroSocio__bloqueBotones">
                <button class="form-controlEPP btnCancelar" type="button" id="btnCancelar">ELIMINAR</button>
                <button class="form-controlEPP btnRegistrar" type="button" id="btnRegistrar">REGISTRAR</button>
            </div>
        </div>

    </div>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js" type="text/javascript"></script>
    <script src="https://unpkg.com/gijgo@1.9.13/js/gijgo.min.js" type="text/javascript"></script>
    <script src="js/file-uploadv1.js"></script>
    <script src="js/moment.js"></script>
    <script src="js/jquery.numeric.js"></script>
    <script src="js/PreRegistroSocios.js?v37"></script>
    <script></script>

    <script src="js/proyecto2/formularioRegistro.js?Fv41"></script>

    <script type="text/javascript">
        //Para que el menu del navbar se quede de un color cuando esté seleccionado
        window.onload = function () {
            //document.getElementById("idMenuPreRegistro").style.color = 'white';
            //document.getElementById("idMenuPreRegistro").style.borderBottom = '3px solid white';
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

        function pageLoad() {
            $('.file-upload').file_upload();
            $('.solo-numero').numeric();

            function filePreview(input) {
                if (input.files && input.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        $('#imagePreview').html("<img src='" + e.target.result + "' style='height:200px' />");
                    }
                    reader.readAsDataURL(input.files[0]);
                }
            }
            $('.imagen').change(function () {
                filePreview(this);
            });
            $('#datepicker').datepicker({
                uiLibrary: 'bootstrap4',
                format: 'dd/mm/yyyy'
            });


        }

        //Para subir una imagen en el icono add-photo
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                    $('#imagePreview').hide();
                    $('#imagePreview').fadeIn(650);
                }
                reader.readAsDataURL(input.files[0]);
            }
        }
        $("#imageUpload").change(function () {
            readURL(this);
        });



    </script>

</asp:Content>
