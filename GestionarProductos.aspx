<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="GestionarProductos.aspx.cs" Inherits="SantaNaturaNetwork.GestionarProductos" ClientIDMode="Static" %>

<%@ OutputCache Location="None" NoStore="true" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <link href="css/bootstrap-toggle.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/file-upload.css" />
    <link href="css/datatables/dataTables.bootstrap.css" rel="stylesheet" />

    <section class="content-header">
        <h1 style="text-align: center">Gestion de Productos</h1>
    </section>
    <style>
        #modalTamano {
            width: auto !important;
        }

        .table > tbody > tr > td, .table > tbody > tr > th, .table > tfoot > tr > td,
        .table > tfoot > tr > th, .table > thead > tr > td, .table > thead > tr > th {
            vertical-align: middle;
        }

        .switchTamano {
            width: 5rem !important;
            top: -0.5rem;
        }

        .modal-body {
            height: 470px;
            overflow: hidden;
        }

            .modal-body:hover {
                overflow-y: auto;
            }
    </style>

    <section class="content">
        <div class="row">
            <div class="col-xs-12">
                <div class="box box-success">
                    <div class="box box-header">
                        <h3 class="box-title">Lista de Productos</h3>
                    </div>
                    <div style="padding-bottom: 13px; padding-left: 11px">
                        <button type="button" class="btn btn-success" style="font-weight: bold" data-toggle="modal" data-target="#exampleModal" id="btnNuevoProducto">
                            Nuevo Producto
                        </button>
                    </div>
                    <div class="box-body table-responsive">
                        <div class="col-md-4">
                            <div class="box-body">
                                <div class="form-group">
                                    <!-- Modal -->
                                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="container modal-dialog" id="modalTamano" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h4 style="text-align: center; font-weight: bold" class="modal-title" id="exampleModalLabel">Nuevo Producto</h4>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="modal-body1">
                                                        <div class="row">
                                                            <div class="col-md-2">
                                                                <div class="form-group">
                                                                    <label>Codigo</label>
                                                                    <asp:TextBox runat="server" ReadOnly="true" ID="txtCodigo" CssClass="form-control"></asp:TextBox>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <label>Linea</label>
                                                                <asp:DropDownList runat="server" ID="cboLinea" CssClass="form-control" />
                                                            </div>
                                                            <div class="col-md-2">
                                                                <label>Unidad de Medida</label>
                                                                <select id="cboUnidad" class="form-control">
                                                                    <option value="0" hidden>Seleccione</option>
                                                                    <option value="1">GR.</option>
                                                                    <option value="2">KG.</option>
                                                                    <option value="3">ML.</option>
                                                                </select>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <label>Precio CDR</label>
                                                                <asp:TextBox runat="server" ID="txtPecioCDR" placeholder="PrecioCDR" CssClass="form-control solo-numero"></asp:TextBox>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <label>Contenido</label>
                                                                <asp:TextBox runat="server" ID="txtPeso" placeholder="Contenido" CssClass="form-control solo-numero"></asp:TextBox>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <label>Presentacion</label>
                                                                <asp:DropDownList runat="server" ID="cboPresentacion" CssClass="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-2">
                                                                <label>Precio Unitario</label>
                                                                <asp:TextBox runat="server" ID="txtPrecioBase" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero"></asp:TextBox>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <label>Unidades Prese.</label>
                                                                <asp:TextBox runat="server" ID="txtUnidadPresentacion" placeholder="Unidades" MaxLength="6" CssClass="form-control solo-numero"></asp:TextBox>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <label>Puntos</label>
                                                                <asp:TextBox ID="txtPuntosProdPeru" MaxLength="6" placeholder="Puntos" CssClass="form-control solo-numero" runat="server" />
                                                            </div>
                                                            <div class="col-md-2">
                                                                <label>Paquete</label>
                                                                <asp:DropDownList runat="server" ID="cboPaquete" CssClass="form-control"/>
                                                            </div>
                                                            <div class="col-md-4">
                                                                <label>Beneficios</label>
                                                                <asp:TextBox runat="server" ID="txtBeneficios" TextMode="MultiLine" Rows="2" CssClass="form-control"></asp:TextBox>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <div class="row">
                                                            <div class="col-md-2">
                                                                <label>Denegar Vista en CDR</label>
                                                                <div class="checkbox switchTamano" id="switchBox">
                                                                    <input id="chkPromo" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                                </div>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <label>Puntos Promocion</label>
                                                                <asp:TextBox ID="txtPuntosPromocion" MaxLength="6" placeholder="Puntos" CssClass="form-control solo-numero" runat="server" />
                                                            </div>
                                                            <div class="col-md-2">
                                                                <label>Corazones</label>
                                                                <asp:TextBox ID="txtCorazones" MaxLength="6" placeholder="Puntos" CssClass="form-control solo-numero" runat="server" Text="0" />
                                                            </div>
                                                            <div class="col-md-2">
                                                                <label>Linea CDR</label>
                                                                <asp:DropDownList runat="server" ID="cboLineaCDR" CssClass="form-control" />
                                                            </div>
                                                            <div class="col-md-4">
                                                                <label>Ingredientes</label>
                                                                <asp:TextBox runat="server" ID="txtIngredientes" TextMode="MultiLine" Rows="2" CssClass="form-control"></asp:TextBox>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <div class="row">
                                                            <div class="col-md-2">
                                                                <label>Producto Promoción</label>
                                                                <div class="checkbox switchTamano" id="switchBox2">
                                                                    <input id="chkStockPromo" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4">
                                                                <label>Consumo</label>
                                                                <asp:TextBox runat="server" ID="txtConsumo" TextMode="MultiLine" Rows="2" CssClass="form-control"></asp:TextBox>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <label>Canal</label>
                                                                <select id="cboCanal" class="form-control">
                                                                    <option value="01">RED</option>
                                                                    <option value="02">CALL CENTER</option>
                                                                    <option value="03">QR</option>
                                                                </select>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <label>Pais</label>
                                                                <select id="cboPais" class="form-control">
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <div class="row">
                                                            <div class="box-body table-responsive">
                                                                <table id="tblRegistroProducto" class="table table-bordered table-hover text-center">
                                                                    <thead>
                                                                        <tr>
                                                                            <th style="width: 9%">Pais</th>
                                                                            <th style="width: 30%">Nombre</th>
                                                                            <th style="width: 9%">IdPeruShop</th>
                                                                            <th style="width: 11%">% Aumento</th>
                                                                            <th>Imagen</th>
                                                                            <th style="width: 15%">Estado</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody id="tbl_body_table2">
                                                                        <tr>
                                                                            <th>Perú</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtNombreProdPeru" placeholder="Nombre" CssClass="form-control text-uppercase" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIdPeruShopPeru" MaxLength="20" placeholder="IdPerushop" CssClass="form-control solo-numero" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtAumentoPeru" MaxLength="3" placeholder="% Aumento" CssClass="form-control solo-numero" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <div class="form-group">
                                                                                    <label style="width: 200px" class="file-upload btn btn-success">
                                                                                        Ingrese la imagen ...
                                                                                    <asp:FileUpload ID="imgPeru" runat="server" />
                                                                                    </label>

                                                                                </div>
                                                                            </th>
                                                                            <th>
                                                                                <div class="checkbox switchTamano" id="switchTamano1">
                                                                                    <input id="tooglePeru" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                                                </div>
                                                                            </th>
                                                                        </tr>
                                                                        <tr style="display:none;">
                                                                            <th>Colombia</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtNombreProdColombia" BackColor="LightGreen" placeholder="Nombre" class="form-control text-uppercase" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIdPeruShopColombia" BackColor="LightGreen" MaxLength="6" placeholder="IdPerushop" CssClass="form-control solo-numero" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtAumentoColombia" MaxLength="3" BackColor="LightGreen" placeholder="% Aumento" CssClass="form-control solo-numero" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <div class="form-group">
                                                                                    <label style="width: 200px" class="file-upload btn btn-success">
                                                                                        Ingrese la imagen ...
                                                                                <asp:FileUpload ID="imgColombia" runat="server" />
                                                                                    </label>

                                                                                </div>
                                                                            </th>
                                                                            <th>
                                                                                <div class="checkbox switchTamano" id="switchTamano3">
                                                                                    <input id="toogleColombia" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                                                </div>
                                                                            </th>

                                                                        </tr>
                                                                        <tr style="display:none;">
                                                                            <th>Panama</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtNombreProdPanama" BackColor="LightGreen" placeholder="Nombre" CssClass="form-control text-uppercase" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIdPeruShopPanama" BackColor="LightGreen" MaxLength="6" placeholder="IdPerushop" CssClass="form-control solo-numero" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtAumentoPanama" MaxLength="3" BackColor="LightGreen" placeholder="% Aumento" CssClass="form-control solo-numero" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <div class="form-group">
                                                                                    <label style="width: 200px" class="file-upload btn btn-success">
                                                                                        Ingrese la imagen ...
                                                                                <asp:FileUpload ID="imgPanama" runat="server" />
                                                                                    </label>

                                                                                </div>
                                                                            </th>
                                                                            <th>
                                                                                <div class="checkbox switchTamano" id="switchTamano4">
                                                                                    <input id="tooglePanama" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                                                </div>
                                                                            </th>

                                                                        </tr>
                                                                        <tr style="display:none;">
                                                                            <th>Bolivia</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtNombreProdBolivia" BackColor="LightGreen" placeholder="Nombre" CssClass="form-control text-uppercase" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIdPeruShopBolivia" BackColor="LightGreen" MaxLength="6" placeholder="IdPerushop" class="form-control solo-numero" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtAumentoBolivia" BackColor="LightGreen" MaxLength="3" placeholder="% Aumento" class="form-control solo-numero" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <div class="form-group">
                                                                                    <label style="width: 200px" class="file-upload btn btn-success">
                                                                                        Ingrese la imagen ...
                                                                                <asp:FileUpload ID="imgBolivia" runat="server" />
                                                                                    </label>

                                                                                </div>
                                                                            </th>
                                                                            <th>
                                                                                <div class="checkbox switchTamano" id="switchTamano2">
                                                                                    <input id="toogleBolivia" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                                                </div>
                                                                            </th>
                                                                        </tr>
                                                                        <tr style="display:none;">
                                                                            <th>Costa Rica</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtNombreProdCR" BackColor="LightGreen" placeholder="Nombre" CssClass="form-control text-uppercase" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIdPeruShopCR" BackColor="LightGreen" MaxLength="6" placeholder="IdPerushop" CssClass="form-control solo-numero" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtAumentoCR" MaxLength="3" BackColor="LightGreen" placeholder="% Aumento" CssClass="form-control solo-numero" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <div class="form-group">
                                                                                    <label style="width: 200px" class="file-upload btn btn-success">
                                                                                        Ingrese la imagen ...
                                                                                <asp:FileUpload ID="imgCR" runat="server" />
                                                                                    </label>

                                                                                </div>
                                                                            </th>
                                                                            <th>
                                                                                <div class="checkbox switchTamano" id="switchTamano5">
                                                                                    <input id="toogleCR" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                                                </div>
                                                                            </th>

                                                                        </tr>
                                                                        <tr style="display:none;">
                                                                            <th>Argentina</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtNombreProdArgentina" BackColor="LightGreen" placeholder="Nombre" CssClass="form-control text-uppercase" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIdPeruShopArgentina" BackColor="LightGreen" MaxLength="6" placeholder="IdPerushop" class="form-control solo-numero" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtAumentoArgentina" MaxLength="3" BackColor="LightGreen" placeholder="% Aumento" class="form-control solo-numero" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <div class="form-group">
                                                                                    <label style="width: 200px" class="file-upload btn btn-success">
                                                                                        Ingrese la imagen ...
                                                                                <asp:FileUpload ID="imgArgentina" runat="server" />
                                                                                    </label>

                                                                                </div>
                                                                            </th>
                                                                            <th>
                                                                                <div class="checkbox switchTamano" id="switchTamano6">
                                                                                    <input id="toogleArgentina" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                                                </div>
                                                                            </th>

                                                                        </tr>
                                                                        <tr style="display:none;">
                                                                            <th>Chile</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtNombreProdChile" BackColor="LightGreen" placeholder="Nombre" CssClass="form-control text-uppercase" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIdPeruShopChile" BackColor="LightGreen" MaxLength="6" placeholder="IdPerushop" class="form-control solo-numero" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtAumentoChile" MaxLength="3" BackColor="LightGreen" placeholder="% Aumento" class="form-control solo-numero" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <div class="form-group">
                                                                                    <label style="width: 200px" class="file-upload btn btn-success">
                                                                                        Ingrese la imagen ...
                                                                                <asp:FileUpload ID="imgChile" runat="server" />
                                                                                    </label>

                                                                                </div>
                                                                            </th>
                                                                            <th>
                                                                                <div class="checkbox switchTamano" id="switchTamano7">
                                                                                    <input id="toogleChile" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                                                </div>
                                                                            </th>

                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button id="btnId" type="reset" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                                    <button id="btnRegistrar" type="button" class="btn btn-success">Aceptar</button>
                                                    <button id="btnActualizar" type="button" class="btn btn-success">Actualizar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Modal -->
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="box-body">
                                <div class="form-group"></div>
                            </div>
                        </div>
                        <table id="tbl_productos" class="table table-bordered table-hover text-center">
                            <thead>
                                <tr>
                                    <th>ID PS</th>
                                    <th>Linea</th>
                                    <th>Producto</th>
                                    <th>Imagen</th>
                                    <th>Puntaje</th>
                                    <th>Precio</th>
                                    <th>Estado</th>
                                    <th>Pais</th>
                                    <th>Actualizar</th>
                                    <th>Eliminar</th>
                                </tr>
                            </thead>
                            <tbody id="tbl_body_table">
                                <!--Data por medio de Ajax-->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>
        <script src="js/sweetAlert.js" type="text/javascript"> </script>
        <script src="js/plugins/datatables/jquery.dataTables.js"></script>
        <script src="js/plugins/datatables/dataTables.bootstrap.js"></script>
        <script src="js/productoV2.js?v19" type="text/javascript"></script>
        <script type="text/javascript">
        window.onload = function () {
            document.getElementById("GestionarProductos").classList.add("active");

            document.getElementById("gestProducProm").style.color = '#79B729';
            document.getElementById("gestProducProm").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';

            document.getElementById("gestProduct").style.color = '#79B729';
            document.getElementById("gestProduct").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';
        }
        </script>
    </section>
</asp:Content>

