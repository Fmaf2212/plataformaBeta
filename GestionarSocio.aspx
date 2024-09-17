<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="GestionarSocio.aspx.cs" Inherits="SantaNaturaNetwork.EditarSocio" ClientIDMode="Static" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <link rel="stylesheet" type="text/css" href="css/file-upload.css" />
    <link rel="stylesheet" type="text/css" href="css/select2.css" />
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />


    <style media="screen">
        #imagePreview {
            width: 350px;
            height: 350px;
            margin: 0 auto;
        }

        .img {
            max-width: 400px;
        }
    </style>
    <section class="content-header">
        <h1 style="text-align: center">Socio Santa Natura</h1>
    </section>
    <section class="content">
        <div>
            <div class="row">
                <br>
                <div class="col-md-12">
                    <div class="box box-success">
                        <div role="tabpanel">
                            <ul class="nav nav-tabs" role="tablist">
                                <li role="presentation" class="active"><a href="#panel1" aria-controls="panel1" data-toggle="tab" role="tab" style="color: forestgreen"><b>Datos de la cuenta</b></a></li>
                                <li role="presentation"><a href="#panel2" aria-controls="panel2" data-toggle="tab" role="tab" style="color: forestgreen"><b>Datos Personales</b></a></li>
                                <li role="presentation"><a href="#panel3" aria-controls="panel3" data-toggle="tab" role="tab" style="color: forestgreen"><b>Datos Bancarios</b></a></li>
                            </ul>
                            <div class="tab-content">

                                <div role="tabpanel" class="tab-pane active" id="panel1" style="height: 530px">
                                    <div class="modal-body">
                                        <div class="row" style="padding-left: 10px; padding-bottom: 15px">
                                            <div class="col-md-4">
                                                <label>Usuario</label>
                                                <p>Escriba nombre de Usuario</p>
                                                <asp:TextBox Style="width: 300px" ID="txtUsuario" runat="server" CssClass="form-control" BackColor="LightGreen" />
                                            </div>
                                            <div class="col-md-3">
                                                <label>Contraseña</label>
                                                <p>Escriba clave de Usuario</p>
                                                <asp:TextBox ID="txtClave" runat="server" CssClass="form-control" BackColor="LightGreen" />
                                            </div>
                                            <div class="col-md-5">
                                                <label>Url de imagen</label>
                                                <p>Foto frontal, sin lentes o gorras en formato *.jpg</p>
                                                <label style="width: 350px" class="file-upload btn btn-success">
                                                    Ingrese la imagen ...
                                                                        <asp:FileUpload CssClass="imagen" ID="fileUpload" runat="server" />
                                                </label>
                                            </div>
                                        </div>
                                        <div class="row" style="padding-left: 10px">
                                            <div class="col-md-5">
                                                <label>Foto de Perfil</label>
                                                <div id="imagePreview">
                                                    <img src="img/Preview-icon1.png" style="padding-left: 60px" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" class="tab-pane" id="panel2">
                                    <div class="modal-body">

                                        <div class="row" style="padding-left: 10px; padding-bottom: 15px">
                                            <div class="col-md-3">
                                                <label>UpLine</label>
                                                <asp:TextBox ID="txtUpLine" runat="server" CssClass="form-control" BackColor="LightGreen" />
                                            </div>
                                            <div class="col-md-3">
                                                <label>Tipo de Cliente</label>
                                                <asp:DropDownList runat="server" ID="cboTipoCliente" CssClass="form-control" BackColor="LightGreen" />
                                            </div>
                                            <div class="col-md-3">
                                                <label>Tipo de Establecimiento</label>
                                                <asp:DropDownList runat="server" ID="cboTipoEstablecimiento" CssClass="form-control" BackColor="LightGreen" />
                                            </div>
                                            <div class="col-md-3">
                                                <label>Apodo</label>
                                                <asp:TextBox ID="txtApodo" runat="server" CssClass="form-control" BackColor="LightGreen" />
                                            </div>
                                        </div>
                                        <div class="row" style="padding-left: 10px; padding-bottom: 15px">
                                            <div class="col-md-3">
                                                <label>Patrocinador</label>
                                                <asp:TextBox ID="txtPatrocinador" runat="server" CssClass="form-control" BackColor="LightGreen" />
                                            </div>
                                            <div class="col-md-3">
                                                <label>Nombres</label>
                                                <asp:TextBox ID="txtNombres" runat="server" CssClass="form-control" BackColor="LightGreen"></asp:TextBox>
                                            </div>
                                            <div class="col-md-3">
                                                <label>Ap. Paterno</label>
                                                <asp:TextBox ID="txtApPat" runat="server" CssClass="form-control" BackColor="LightGreen"></asp:TextBox>
                                            </div>
                                            <div class="col-md-3">
                                                <label>Ap. Materno</label>
                                                <asp:TextBox ID="txtApMat" runat="server" CssClass="form-control" BackColor="LightGreen"></asp:TextBox>
                                            </div>
                                        </div>
                                        <div class="row" style="padding-left: 10px; padding-bottom: 15px">
                                            <div class="col-md-3">
                                                <label>Tipo de Documento</label>
                                                <select id="cboTipoDoc" class="form-control" style="background-color: lightgreen" runat="server">
                                                    <option value="0" hidden>SELECCIONE</option>
                                                    <option value="1">DNI</option>
                                                    <option value="2">PASAPORTE</option>
                                                </select>
                                            </div>
                                            <div class="col-md-3">
                                                <label>Nro. Doc.</label>
                                                <asp:TextBox ID="txtNroDoc" runat="server" CssClass="form-control solo-numero" BackColor="LightGreen" />
                                            </div>
                                            <div class="col-md-3">
                                                <label>Fecha de Nacimiento</label>
                                                <input type="text" id="txtFecNac" class="form-control daterange" style="background-color: lightgreen" runat="server">
                                            </div>
                                            <div class="col-md-3">
                                                <label>Sexo</label>
                                                <select id="cboSexo" class="form-control" style="background-color: lightgreen" runat="server">
                                                    <option value="0" hidden>SELECCIONE</option>
                                                    <option value="1">MASCULINO</option>
                                                    <option value="2">FEMENINO</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row" style="padding-left: 10px; padding-bottom: 15px">
                                            <div class="col-md-3">
                                                <label>Correo</label>
                                                <asp:TextBox ID="txtCorreo" runat="server" CssClass="form-control" BackColor="LightGreen"></asp:TextBox>
                                            </div>
                                            <div class="col-md-3">
                                                <label>Telefono</label>
                                                <asp:TextBox ID="txtTelefono" runat="server" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                            </div>
                                            <div class="col-md-3">
                                                <label>Celular</label>
                                                <asp:TextBox ID="txtCelular" runat="server" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                            </div>
                                            <div class="col-md-3">
                                                <label>Pais de operaciones</label>
                                                <asp:DropDownList runat="server" ID="cboPais" CssClass="form-control" BackColor="LightGreen"/>
                                            </div>
                                        </div>
                                        <div class="row" style="padding-left: 10px; padding-bottom: 15px">
                                            <div class="col-md-3">
                                                <label>Departamento</label>
                                                <div class="col-md-12" style="padding-left: 0px">
                                                    <asp:DropDownList runat="server" ID="cboDepartamento" CssClass="form-control js-example-templating"
                                                        BackColor="LightGreen" Width="235px"  />
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <label>Provincia</label>
                                                <div class="col-md-12" style="padding-left: 0px">
                                                    <asp:DropDownList runat="server" ID="cboProvincia" CssClass="form-control js-example-templating"
                                                        BackColor="LightGreen" Width="235px"  />
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <label>Distrito</label>
                                                <div class="col-md-12" style="padding-left: 0px">
                                                    <asp:DropDownList runat="server" ID="cboDistrito" CssClass="form-control js-example-templating"
                                                        BackColor="LightGreen" Width="235px" />
                                                </div>

                                            </div>
                                            <div class="col-md-3">
                                                <label>Direccion</label>
                                                <asp:TextBox ID="txtxDireccion" runat="server" CssClass="form-control" BackColor="LightGreen" />
                                            </div>
                                        </div>
                                        <div class="row" style="padding-left: 10px; padding-bottom: 15px">
                                            <div class="col-md-12">
                                                <label>Referencia</label>
                                                <asp:TextBox ID="txtReferencia" runat="server" CssClass="form-control" BackColor="LightGreen" />
                                            </div>
                                        </div>
                                        <div class="row" style="padding-left: 400px; padding-bottom: 15px; display: inline-block">
                                            <div class="col-md-3">
                                                <asp:Button runat="server" Text="Registrar" CssClass="btn btn-success" Style="font-weight: bold; width: 250px" ID="btnRegistrarCliente" OnClick="RegistrarCliente" />
                                            </div>
                                        </div>
                                        <div class="row" style="padding-left: 400px; padding-bottom: 15px; display: inline-block">
                                            <div class="col-md-3">
                                                <asp:Button runat="server" Text="prueba" CssClass="btn btn-success" Style="font-weight: bold; width: 250px" ID="Button1" OnClick="prueba" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div role="tabpanel" class="tab-pane" id="panel3">
                                    <div class="modal-body">
                                        <div class="row" style="padding-left: 10px; padding-bottom: 15px">
                                            <div class="col-md-4">
                                                <label>RUC</label>
                                                <asp:TextBox runat="server" ID="txtRuc" CssClass="form-control solo-numero" BackColor="LightGreen" />
                                            </div>
                                            <div class="col-md-4">
                                                <label>Banco</label>
                                                <asp:TextBox runat="server" ID="txtBanco" CssClass="form-control" BackColor="LightGreen" />
                                            </div>
                                            <div class="col-md-4">
                                                <label>Numero Cta. Deposito</label>
                                                <asp:TextBox runat="server" ID="txtCtaDeposito" CssClass="form-control solo-numero" BackColor="LightGreen" />
                                            </div>
                                        </div>
                                        <div class="row" style="padding-left: 10px; padding-bottom: 15px">
                                            <div class="col-md-6">
                                                <label>Numero Cta. Detracciones</label>
                                                <asp:TextBox runat="server" ID="txtCtaDetraccion" CssClass="form-control solo-numero" BackColor="LightGreen" />
                                            </div>
                                            <div class="col-md-6">
                                                <label>Numero Cta. Interbancaria</label>
                                                <asp:TextBox runat="server" ID="txtCtaInterbancaria" CssClass="form-control solo-numero" BackColor="LightGreen" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="js/sweetAlert.js" type="text/javascript"> </script>
        <script src="js/moment.js"></script>
        <script src="js/file-uploadv1.js"></script>
        <script src="js/jquery.numeric.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js" type="text/javascript"></script>
        
        <script src="js/gestionarSocio.js" type="text/javascript"></script>
        <script type="text/javascript">
            function alertme() {
                Swal.fire({
                    title: 'Perfecto!',
                    text: 'Cliente Registrado',
                    type: "success"
                }).then(function () {
                    window.location = "SociosRed.aspx";
                });
            }
            function FaltaUsuario() {
                Swal.fire({
                    title: 'Ooops...!',
                    text: 'No registró el campo Usuario',
                    type: "error"
                });
            }
            function FaltaTipoCliente() {
                Swal.fire({
                    title: 'Ooops...!',
                    text: 'No definió el Tipo de Cliente',
                    type: "error"
                });
            }
            function FaltaNombre() {
                Swal.fire({
                    title: 'Ooops...!',
                    text: 'No registró el campo Nombres',
                    type: "error"
                });
            }
            function FaltaApellido() {
                Swal.fire({
                    title: 'Ooops...!',
                    text: 'No registró un Apellido',
                    type: "error"
                });
            }
            function FaltaTipoDoc() {
                Swal.fire({
                    title: 'Ooops...!',
                    text: 'No definió el Tipo de Documento',
                    type: "error"
                });
            }
            function FaltaDocumento() {
                Swal.fire({
                    title: 'Ooops...!',
                    text: 'No registró el Número de Documento',
                    type: "error"
                });
            }
            function FaltaFechaNac() {
                Swal.fire({
                    title: 'Ooops...!',
                    text: 'Fecha de Nacimiento Incorrecta',
                    type: "error"
                });
            }
            function FaltaSexo() {
                Swal.fire({
                    title: 'Ooops...!',
                    text: 'No definió el Sexo',
                    type: "error"
                });
            }
            function FaltaCorreo() {
                Swal.fire({
                    title: 'Ooops...!',
                    text: 'No registró el Correo',
                    type: "error"
                });
            }
            function FaltaPais() {
                Swal.fire({
                    title: 'Ooops...!',
                    text: 'No definió el País',
                    type: "error"
                });
            }
            function FaltaDepartamento() {
                Swal.fire({
                    title: 'Ooops...!',
                    text: 'No definió el Departamento',
                    type: "error"
                });
            }
            function FaltaProvincia() {
                Swal.fire({
                    title: 'Ooops...!',
                    text: 'No definió la Provincia',
                    type: "error"
                });
            }
            function FaltaDistrito() {
                Swal.fire({
                    title: 'Ooops...!',
                    text: 'No definió el Distrito',
                    type: "error"
                });
            }
            function FaltaDireccion() {
                Swal.fire({
                    title: 'Ooops...!',
                    text: 'No registró la Dirección',
                    type: "error"
                });
            }
            function CodigoRepetido() {
                Swal.fire({
                    title: 'Ooops...!',
                    text: 'DNI ya registrado',
                    type: "error"
                });
            }

            $('.daterange').daterangepicker({
                    singleDatePicker: true,
                    showDropdowns: true,
                    locale: { format: "DD/MM/YYYY" },
                    autoApply: false
                });
                $("[id*=cboTipoCliente] option[value='0']").hide();
                $("[id*=cboPais] option[value='0']").hide();
                $("[id*=cboDepartamento] option[value='0']").hide();
                $("[id*=cboProvincia] option[value='0']").hide();
                $("[id*=cboDistrito] option[value='0']").hide();
                $('.solo-numero').numeric();
                $('.file-upload').file_upload();
                $(".js-example-templating").select2({
                });

                function filePreview(input) {
                    if (input.files && input.files[0]) {
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            $('#imagePreview').html("<img src='" + e.target.result + "' style='height:250px' />");
                        }
                        reader.readAsDataURL(input.files[0]);
                    }
                }
                $('.imagen').change(function () {
                    filePreview(this);
                });

           
        </script>

    </section>
</asp:Content>
