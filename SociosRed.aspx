<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="SociosRed.aspx.cs" Inherits="SantaNaturaNetwork.SociosRed1" ClientIDMode="Static" %>

<%@ OutputCache Location="None" NoStore="true" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <meta http-equiv="content-language" content="es" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <link href="css/datatables/dataTables.bootstrap.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="css/file-upload.css" />
    <link rel="stylesheet" type="text/css" href="css/select2.css" />
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js" type="text/javascript"></script>
    
    <section class="content-header">
        <h1 style="text-align: center">SOCIOS DE LA RED</h1>
    </section>
    <style>
        #modalTamano {
            width: auto !important;
        }
        .ui-front {
    z-index: 2000 !important;
}
    </style>
    <section class="content">
        <div class="row">
            <div class="col-xs-12">
                <div class="box box-success" <%--style="width: 1090px;"--%>>
                    <div class="box box-header">
                        <h3 class="box-title">Lista de Socios</h3>
                    </div>
                    <div style="padding-left: 11px">
                        <div class="row">
                            <div class="col-md-2">
                                <label>DNI</label>
                                <input type="text" id="FiltroDni" class="form-control solo-numero text-uppercase" style="background-color:LightGreen"/>
                            </div>
                            <div class="col-md-2">
                                <label>NOMBRES - APELLIDOS</label>
                                <input type="text" id="FiltroNombres" class="form-control text-uppercase" style="background-color:LightGreen"/>
                            </div>
                            <div class="col-md-2">
                                <br />
                                <asp:Button runat="server" Text="Filtrar" CssClass="btn btn-success " style="font-weight: bold" id="btnFiltrar"/>
                            </div>
                            <div class="col-md-2">
                                <br />
                                <asp:Button runat="server" Text="Todos los Socios" CssClass="btn btn-success " style="font-weight: bold" id="btnGeneral"/>
                            </div>
                        </div>
                        <br />
                    </div>
                    <div style="padding-bottom: 13px; padding-left: 11px">
                        <a style="font-weight: bold" id="btnRegistrarCliente" class="btn btn-success" data-toggle="modal" data-target="#exampleModal">Nuevo Registro</a>
                        
                    </div>
                    <div class="box-body table-responsive">
                        <table id="tbl_Socio" class="table table-bordered table-hover text-center">
                            <thead>
                                <tr>
                                    <th>Nombres</th>
                                    <th>Apellidos</th>
                                    <th>Apodo</th>
                                    <th>Tipo Doc.</th>
                                    <th>N° Documento</th>
                                    <th>Tipo Cliente</th>
                                    <th>Patrocinador</th>
                                    <th>Upline</th>
                                    <th>Celular</th>
                                    <th>Correo</th>
                                    <th>Pais</th>
                                    <th>Actualizar</th>
                                    <th>Eliminar</th>
                                </tr>
                            </thead>
                            <tbody id="tbl_body_table">
                                <!--Data por medio de Ajax-->
                            </tbody>
                        </table>

                        <div class="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="container modal-dialog" id="modalTamano" role="document">
                                <div class="modal-content">
                                    <div class="modal-header" style="padding-bottom: 8px">
                                        <h4 style="text-align: center; font-weight: bold" class="modal-title" id="exampleModalLabel">Nueva Publicacion</h4>
                                    </div>
                                    <div class="modal-body" style="padding: 8px">
                                        <div class="modal-body1">
                                            <div role="tabpanel">
                                                <ul class="nav nav-tabs" role="tablist">
                                                    <li role="presentation" class="active"><a href="#panel1" aria-controls="panel1" data-toggle="tab" role="tab" style="color: forestgreen"><b>Datos de la cuenta</b></a></li>
                                                    <li role="presentation"><a href="#panel2" aria-controls="panel2" data-toggle="tab" role="tab" style="color: forestgreen"><b>Datos Personales</b></a></li>
                                                    <li role="presentation"><a href="#panel3" aria-controls="panel3" data-toggle="tab" role="tab" style="color: forestgreen"><b>Datos Bancarios</b></a></li>
                                                </ul>
                                                <div class="tab-content">
                                                    <div role="tabpanel" class="tab-pane active" id="panel1" style="">
                                                        <div class="modal-body">
                                                            <div class="row" style="padding-left: 10px; padding-bottom: 15px">
                                                                <div class="col-md-4">
                                                                    <label>Usuario</label>
                                                                    <p>Escriba nombre de Usuario</p>
                                                                    <asp:TextBox ID="txtUsuario" runat="server" MaxLength="15" CssClass="form-control text-uppercase" BackColor="LightGreen" />
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <label>Contraseña</label>
                                                                    <p>Escriba clave de Usuario</p>
                                                                    <asp:TextBox ID="txtClave" runat="server" CssClass="form-control" BackColor="LightGreen" />
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <label>Paquete asignado</label>
                                                                    <p>Seleccione el Paquete</p>
                                                                    <asp:DropDownList runat="server" ID="cboPaquete" CssClass="form-control" BackColor="LightGreen" />
                                                                </div>
                                                            </div>
                                                            <div class="row" style="padding-left: 10px">
                                                                <div class="col-md-5 ">
                                                                    <label>Foto de Perfil</label>
                                                                    <div id="imagePreview" class="col-md-12">
                                                                        <img src="img/Preview-icon1.png" style="padding-left: 60px" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-5" >
                                                                    <label>Url de imagen</label>
                                                                    <p>Foto frontal, sin lentes o gorras en formato *.jpg</p>
                                                                    <label style="width: 350px" class="file-upload btn btn-success">
                                                                        Ingrese la imagen ...
                                                                       
                                                                        <asp:FileUpload CssClass="imagen" ID="fileUpload" runat="server" />
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <asp:ScriptManager ID="ScriptManager" runat="server" />
                                                    <div role="tabpanel" class="tab-pane" id="panel2">
                                                        <div class="modal-body">
                                                            <div class="row" style="padding-left: 10px; padding-bottom: 15px">
                                                                <div class="col-md-3">
                                                                    <label>UpLine</label>
                                                                    <asp:TextBox ID="txtUpLine" runat="server" CssClass="form-control solo-numero" BackColor="LightGreen" />
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <label>Tipo de Cliente</label>
                                                                    <asp:DropDownList runat="server" ID="cboTipoCliente" CssClass="form-control" BackColor="LightGreen" onchange="apodo(this);" />
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <label>Tipo de Establecimiento</label>
                                                                    <asp:DropDownList runat="server" ID="cboTipoEstablecimiento" CssClass="form-control" BackColor="LightGreen" />
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <label>Apodo</label>
                                                                    <asp:TextBox ID="txtApodo" runat="server" CssClass="form-control text-uppercase" BackColor="LightGreen" />
                                                                </div>
                                                            </div>
                                                            <div class="row" style="padding-left: 10px; padding-bottom: 15px">
                                                                <div class="col-md-3">
                                                                    <label>ID PeruShop</label>
                                                                    <asp:TextBox ID="txtPeruShop" runat="server" CssClass="form-control" BackColor="LightGreen" />
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <label>Nombres</label>
                                                                    <asp:TextBox ID="txtNombres" runat="server" CssClass="form-control text-uppercase" BackColor="LightGreen"></asp:TextBox>
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <label>Ap. Paterno</label>
                                                                    <asp:TextBox ID="txtApPat" runat="server" CssClass="form-control text-uppercase" BackColor="LightGreen"></asp:TextBox>
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <label>Ap. Materno</label>
                                                                    <asp:TextBox ID="txtApMat" runat="server" CssClass="form-control text-uppercase" BackColor="LightGreen"></asp:TextBox>
                                                                </div>
                                                            </div>
                                                            <div class="row" style="padding-left: 10px; padding-bottom: 15px">
                                                                <div class="col-md-3">
                                                                    <label>Patrocinador</label>
                                                                    <asp:TextBox ID="txtPatrocinador" runat="server" CssClass="form-control" BackColor="LightGreen" />
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <label>Tipo de Documento</label>
                                                                    <select id="cboTipoDoc" class="form-control" style="background-color: lightgreen" runat="server">
                                                                        <option value="0" hidden>SELECCIONE</option>
                                                                        <option value="1">DOCUMENTO DE IDENTIDAD</option>
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
                                                            </div>
                                                            <div class="row" style="padding-left: 10px; padding-bottom: 15px">
                                                                <div class="col-md-3">
                                                                    <label>Sexo</label>
                                                                    <select id="cboSexo" class="form-control" style="background-color: lightgreen" runat="server">
                                                                        <option value="0" hidden>SELECCIONE</option>
                                                                        <option value="1">MASCULINO</option>
                                                                        <option value="2">FEMENINO</option>
                                                                        <option value="3">NO ESPECIFICA</option>
                                                                    </select>
                                                                </div>
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
                                                            </div>

                                                            <div class="row" style="padding-left: 10px; padding-bottom: 15px">
                                                                <div class="col-md-3">
                                                                    <label>Pais</label>
                                                                    <asp:DropDownList runat="server" ID="cboPais" CssClass="form-control" BackColor="LightGreen" />
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <label>Departamento</label>
                                                                        <asp:DropDownList runat="server" ID="cboDepartamento" CssClass="form-control" 
                                                                            BackColor="LightGreen" />
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <label>Provincia</label>
                                                                        <asp:DropDownList runat="server" ID="cboProvincia" CssClass="form-control"
                                                                            BackColor="LightGreen" />
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <label>Distrito</label>
                                                                        <asp:DropDownList runat="server" ID="cboDistrito" CssClass="form-control"
                                                                            BackColor="LightGreen" />
                                                                </div>
                                                            </div>
                                                            <div class="row" style="padding-left: 10px; padding-bottom: 15px">
                                                                <div class="col-md-3">
                                                                    <label>Pais Tienda</label>
                                                                    <asp:DropDownList runat="server" ID="cboPaisTienda" CssClass="form-control" BackColor="LightGreen" />
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <label>Direccion</label>
                                                                    <asp:TextBox ID="txtxDireccion" runat="server" CssClass="form-control text-uppercase" BackColor="LightGreen" />
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <label>Referencia</label>
                                                                    <asp:TextBox ID="txtReferencia" runat="server" CssClass="form-control text-uppercase" BackColor="LightGreen" />
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <label>Ubigeo</label>
                                                                    <asp:TextBox ID="txtUbigeo" runat="server" CssClass="form-control text-uppercase" BackColor="LightGreen" />
                                                                </div>
                                                            </div>
                                                            <div class="row" style="padding-left: 10px">
                                                                <div class="col-md-3">
                                                                    <label>Archivo DNI</label>
                                                                    <p><a id="urlDNI" target="_blank" class="form-control btn btn-success" style="color:white"></a></p>
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <label>Archivo Direccion</label>
                                                                    <p><a id="urlDireccion" target="_blank" class="form-control btn btn-success" style="color:white"></a></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div role="tabpanel" class="tab-pane" id="panel3">
                                                        <div class="modal-body">
                                                            <div class="row" style="padding-left: 10px; padding-bottom: 15px">
                                                                <div class="col-md-4">
                                                                    <label>RUC</label>
                                                                    <asp:TextBox runat="server" ID="txtRuc" CssClass="form-control solo-numero" MaxLength="11" BackColor="LightGreen" />
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <label>Banco</label>
                                                                    <asp:TextBox runat="server" ID="txtBanco" CssClass="form-control text-uppercase" BackColor="LightGreen" />
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
                                    <div class="modal-footer">
                                        <button id="btnId" type="reset" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                        <button id="btnActualizar" type="button" class="btn btn-success">Actualizar</button>
                                        <button id="btnComprimir" type="button" class="btn btn-facebook">Comprimir</button>
                                        <button id="btnRegistrarModal" type="button" class="btn btn-success">Registrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="//cdn.jsdelivr.net/npm/sweetalert2@10" type="text/javascript"></script>
        <script src="js/plugins/datatables/jquery.dataTables.js"></script>
        <script src="js/plugins/datatables/dataTables.bootstrap.js"></script>
        <script src="js/clientev2.js?v17" type="text/javascript"></script>
        <script type="text/javascript">
            window.onload = function () {
                document.getElementById("SociosRed").classList.add("active");

                document.getElementById("sociosRed").style.color = '#79B729';
                document.getElementById("sociosRed").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';

            }
            function pageLoad() {
                $('.solo-numero').numeric();
                $('.file-upload').file_upload();
                $('.daterange').daterangepicker({
                    singleDatePicker: true,
                    showDropdowns: true,
                    locale: { format: "DD/MM/YYYY" },
                    autoApply: false
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
            }

        </script>
    </section>
</asp:Content>

