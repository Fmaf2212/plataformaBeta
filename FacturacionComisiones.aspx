<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="FacturacionComisiones.aspx.cs" Inherits="SantaNaturaNetworkV3.FacturacionComisiones" ClientIDMode="Static" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <link href="css/datatables/dataTables.bootstrap.css" rel="stylesheet" />

    <link href="css/proyecto2/facturacionComisiones.css?Fv42" rel="stylesheet" />

    <style>
        :root {
            /*Tamaño Texto*/
            --tamaño-texto: 11px;
        }

        .swal2-popup {
            font-size: 1.3rem !important;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <section class="content-header">
    </section>
    <section class="content contenidoFacturaciónComisiones">
        <div class="row">
            <div class="col-md-12">
                <div class="box divFacturaciónComisiones">
                    <div class="divFacturaciónComisiones__bloqueSuperior" style="">
                        <span class="spanTituloFacturaciónComisiones">Facturas por comisión</span>
                        <button class="btnExportar" onclick="exportTableToExcel('tblData')">
                            <img src="img/imgExport.png" />&nbsp Exportar</button>
                    </div>
                    <div class="divFacturaciónComisiones__bloqueInferior" style="display: flex; justify-content: space-between">
                        <div class="bloqueInferior__izquierda">
                            <select name="cboEnviarAPeruShop" class="cboEnviarAPeruShop">
                                <option value="value1">Enviar a Perú Shop</option>
                                <option value="value2">Enviados</option>
                                <option value="value3">Por enviar</option>
                            </select>
                            <input class="btnEnviar" type="submit" name="Enviar" value="Enviar" />
                        </div>
                        <div class="bloqueInferior__derecha">
                            <asp:DropDownList runat="server" ID="cboPeriodo" CssClass="form-control" />
                            <button class="btn" type="button" id="btnFiltrar">
                                Filtrar</button>
                            <button class="btn" type="button" id="btnValidacionSunat">
                                Validación Sunat</button>
                        </div>
                    </div>

                    <div class="box-body table-responsive">
                        <div class="col-md-12" style="display: none">
                            <div class="box-body">
                                <div class="form-group">
                                    <!-- Modal -->
                                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="container modal-dialog" id="modalTamano" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h4 style="text-align: center; font-weight: bold" class="modal-title" id="exampleModalLabel">Detalle de Compra</h4>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="modal-body1">
                                                        <div class="row">
                                                            <div class="col-md-4">
                                                                <label>Periodo del Canje</label>
                                                                <asp:DropDownList runat="server" ID="ddlPeriodoCanje" CssClass="form-control" BackColor="#3c8dbc" ForeColor="White" />
                                                            </div>
                                                            <div class="col-md-4">
                                                                <label>Estado Saldo Disponible</label>
                                                                <asp:DropDownList runat="server" ID="ddlEstadoSaldo" CssClass="form-control" BackColor="#3c8dbc" ForeColor="White">
                                                                    <asp:ListItem Value="PENDIENTE" Text="PENDIENTE" />
                                                                    <asp:ListItem Value="EN PROCESO" Text="EN PROCESO" />
                                                                    <asp:ListItem Value="PENDIENTE DE ABONO" Text="PENDIENTE DE ABONO" />
                                                                    <asp:ListItem Value="ABONADO" Text="ABONADO" />
                                                                </asp:DropDownList>
                                                            </div>
                                                            <div class="col-md-4">
                                                                <label>Habilitar Correción</label>
                                                                <asp:DropDownList runat="server" ID="ddlCorrecion" CssClass="form-control" BackColor="#3c8dbc" ForeColor="White">
                                                                    <asp:ListItem Value="SI" Text="SI" />
                                                                    <asp:ListItem Value="NO" Text="NO" />
                                                                </asp:DropDownList>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <div class="row">
                                                            <div class="col-md-4">
                                                                <label>Solicita Canje</label>
                                                                <asp:DropDownList runat="server" ID="ddlSolicitaCanje" CssClass="form-control" BackColor="#3c8dbc" ForeColor="White">
                                                                    <asp:ListItem Value="SI" Text="SI" />
                                                                    <asp:ListItem Value="NO" Text="NO" />
                                                                </asp:DropDownList>
                                                            </div>
                                                            <div class="col-md-4">
                                                                <label>Monto del Canje</label>
                                                                <asp:TextBox runat="server" ID="txtMontoCanje" CssClass="form-control solo-numero" BackColor="#3c8dbc" ForeColor="White" />
                                                            </div>
                                                            <div class="col-md-4">
                                                                <label>Estado Canje</label>
                                                                <asp:DropDownList runat="server" ID="ddlEstadoCanje" CssClass="form-control" BackColor="#3c8dbc" ForeColor="White">
                                                                    <asp:ListItem Value="" Text="" />
                                                                    <asp:ListItem Value="ATENDIDO" Text="ATENDIDO" />
                                                                </asp:DropDownList>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <label>Tickets</label>
                                                                <asp:TextBox runat="server" ID="txtTickets" TextMode="MultiLine" Rows="2" CssClass="form-control" BackColor="#3c8dbc" ForeColor="White"></asp:TextBox>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <label>Observación</label>
                                                                <asp:TextBox runat="server" ID="txtObservacion" TextMode="MultiLine" Rows="2" CssClass="form-control" BackColor="#3c8dbc" ForeColor="White"></asp:TextBox>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button id="btnCancelar" type="reset" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                                    <button id="btnActualizar" type="button" class="btn btn-success">Actualizar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Modal -->
                                </div>
                            </div>
                        </div>
                        <div id="ejm">
                            <table id="tbl_facturacion" class="table table-bordered table-hover text-center">
                                <thead>
                                    <%--<tr>
                                    <th>DNI</th>
                                    <th>SOCIO</th>
                                    <th>COMISION BRUTA</th>
                                    <th>FACTURA DE 3RO</th>
                                    <th>NRO. RUC</th>
                                    <th>PDF</th>
                                    <th>COMISIÓN A ABONAR</th>
                                    <th>ESTADO</th>
                                    <th>LINEA MULTINIVEL</th>
                                    <th>ACTUALIZAR</th>
                                    <th>ELIMINAR PDF</th>
                                    <th>ELIMINAR REGISTRO</th>
                                    <th>SELLAR</th>
                                </tr>--%>
                                    <tr>
                                        <th>Periodo</th>
                                        <th>ID Socio</th>
                                        <th>Nombre del cliente</th>
                                        <th>Tipo de documento</th>
                                        <th>N° de documento</th>
                                        <th>Nombre de emisor de factura</th>
                                        <th>RUC del emisor</th>
                                        <th>RUC del receptor</th>
                                        <th>N° Cta. Perfil</th>
                                        <th>N° Cta. Factura</th>
                                        <th>Banco</th>
                                        <th>N° Cta. Detracción</th>
                                        <th>N° Cta. Detracción factura</th>
                                        <th>Comisión Generada</th>
                                        <th>Subtotal (Sin IGV)</th>
                                        <th>IGV</th>
                                        <th>Total facturado (con IGV)</th>
                                        <th>Ubígeo</th>
                                        <th>¿Afecto a detracción? (si/no)</th>
                                        <th>Detracción</th>
                                        <th>Total a Pagar (Total facturado - Detracción)</th>
                                        <th>N° de comprobante</th>
                                        <th>Fecha de emisión del comprobante</th>
                                        <th>Presente otras facturas (SI/NO)</th>
                                        <th>XML</th>
                                        <th>PDF</th>
                                        <th>Fecha de envío a Perú Shop</th>
                                        <th>Estado Perú Shop (enviado - pendiente)</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody id="tbl_body_table">
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.10.4/dist/sweetalert2.all.min.js" type="text/javascript"> </script>
    <script src="js/plugins/datatables/jquery.dataTables.js" type="text/javascript"></script>
    <script src="js/plugins/datatables/dataTables.bootstrap.js" type="text/javascript"></script>
    <script src="js/GestionarCanjesYComisionSocios.js?Fv42" type="text/javascript"></script>
    <script type="text/javascript">
        window.onload = function () {
            document.getElementById("GestionRedes").classList.add("active");

            document.getElementById("gestMulti").style.color = '#79B729';
            document.getElementById("gestMulti").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';

            document.getElementById("contrCanjAbo").style.color = '#79B729';
            document.getElementById("contrCanjAbo").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';
        }
    </script>
</asp:Content>
