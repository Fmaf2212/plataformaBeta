<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="CompraVisaNet.aspx.cs" Inherits="SantaNaturaNetworkV3.CompraVisaNet" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <script src="https://unpkg.com/gijgo@1.9.13/js/gijgo.min.js" type="text/javascript"></script>
    <link href="https://unpkg.com/gijgo@1.9.13/css/gijgo.min.css" rel="stylesheet" type="text/css" />
    <link href="css/AdminLTE.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="scripts2/jquery-1.11.1.min.js"></script>


    <script type="text/javascript" src="jqwidgets/modernizr.js"></script>

    <section class="content-header">
        <h1 style="text-align: center"><b>DATOS DEL PEDIDO</b></h1>
    </section>
    <section class="content">
        <div id="page_loader" style="display: none" class="se-pre-con"></div>
        <div class="row">
            <div class="col-md-12">
                <div class="box box-success">
                    <div class="box box-header">
                        <h3 class="box-title" style="font-size: 23px"></h3>
                    </div>
                    <div style="margin-left: auto; margin-right: auto; width: 95%;">
                        <div class="row text-center">
                            <div class="col-md-3">
                            </div>
                            <div class="col-md-4">
                                <img src="https://mundosantanatura.com/logo/logoSantaNatura.jpeg" />
                                <br />
                                <span style="font-weight: bold;">www.mundosantanatura.com</span>
                            </div>
                            <div class="col-md-3">
                            </div>
                        </div>
                        <br />
                        <br />
                        <div class="row" id="errorDespacho" runat="server">
                            <div class="col-md-2">
                                <span style="font-weight: bold;">Tienda:</span>
                            </div>
                            <div class="col-md-3">
                                <asp:Label runat="server" ID="txtDespacho"></asp:Label>
                            </div>
                        </div>
                        <div class="row" id="errorTelefono" runat="server">
                            <div class="col-md-2">
                                <span style="font-weight: bold;">Teléfono:</span>
                            </div>
                            <div class="col-md-3">
                                <asp:Label runat="server" ID="txtTelefono"></asp:Label>
                            </div>
                        </div>
                        <div class="row" id="errorDireccion" runat="server">
                            <div class="col-md-2">
                                <span style="font-weight: bold;">Dirección:</span>
                            </div>
                            <div class="col-md-3">
                                <asp:Label runat="server" ID="txtDireccion"></asp:Label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                                <span style="font-weight: bold;">Número de Pedido:</span>
                            </div>
                            <div class="col-md-3">
                                <asp:Label runat="server" ID="txtPedido"></asp:Label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                                <span style="font-weight: bold;">Número de Tarjeta:</span>
                            </div>
                            <div class="col-md-3">
                                <asp:Label runat="server" ID="txtTarjeta"></asp:Label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                                <span style="font-weight: bold;">Fecha y Hora Pedido:</span>
                            </div>
                            <div class="col-md-3">
                                <asp:Label runat="server" ID="txtFechaHora"></asp:Label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                                <span style="font-weight: bold;">Importe de Transacción:</span>
                            </div>
                            <div class="col-md-3">
                                <asp:Label runat="server" ID="txtImporte"></asp:Label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                                <span style="font-weight: bold;">Moneda:</span>
                            </div>
                            <div class="col-md-3">
                                <span>Soles</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                                <span style="font-weight: bold;"><%=nameProductos%></span>
                            </div>
                        </div>
                        <% foreach (var item in productos)
                            { %>
                        <div class="row">
                            <div class="col-md-2">
                            </div>
                            <div class="col-md-3">
                                <span style="font-weight: bold;"><%=item.Descripcion%></span>
                            </div>
                        </div>
                        <br />
                        <% } %>
                        <div class="row">
                            <div class="col-md-2">
                                <span style="font-weight: bold;">Nombre de Tarjetahabiente:</span>
                            </div>
                            <div class="col-md-3">
                                <asp:Label runat="server" ID="txtNombres"></asp:Label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                                <span style="font-weight: bold;">Codigo de Acción:</span>
                            </div>
                            <div class="col-md-3">
                                <asp:Label runat="server" ID="txtCodigoAccion"></asp:Label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                                <span style="font-weight: bold;">Teminos y Condiciones:</span>
                            </div>
                            <div class="col-md-3">
                                <a href="Términos y Condiciones.aspx">Click Aquí</a>
                            </div>
                        </div>
                        <br />
                        <div class="row">
                            <div class="col-md-6">
                                <span style="font-weight: bold;">POR MOTIVOS DE SEGURIDAD, DEBE IMPRIMIR Y GUARDAR EL RECIBO DE LA TRANSACCION. </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </section>
</asp:Content>
