<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="GestionarCanjesComisiones.aspx.cs" Inherits="SantaNaturaNetworkV3.GestionarCanjesComisiones" ClientIDMode="Static" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <link href="css/datatables/dataTables.bootstrap.css" rel="stylesheet" />
    <style>
        .swal2-popup {
            font-size: 1.3rem !important;
        }
    </style>

    <section class="content-header">
        <h1 style="text-align: center">Control de Canjes y Abono de Comisiones</h1>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="box box-success">
                    <div class="box box-header">
                        <h3 class="box-title">Lista de datos</h3>
                    </div>
                    <div style="padding-left: 11px; margin-bottom: 30px" class="col-md-12">
                        <div class="col-md-1">
                            <label>Periodo</label>
                        </div>
                        <div class="col-md-2" style="margin-bottom: 10px;">
                            <asp:DropDownList runat="server" ID="cboPeriodo" CssClass="form-control" />
                        </div>
                        <div class="col-md-2">
                            <button class="btn btn-success" type="button" style="font-weight: bold" id="btnFiltrar"><img src="img/FiltroPeriodoIcon.png" alt="Alternate Text" /> Filtrar</button>
                        </div>
                    </div>
                    <div class="box-body table-responsive">
                        <div class="col-md-12">
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
                        <table id="tbl_facturacion" class="table table-bordered table-hover text-center">
                            <thead>
                                <tr>
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
                                </tr>
                            </thead>
                            <tbody id="tbl_body_table">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.10.4/dist/sweetalert2.all.min.js" type="text/javascript"> </script>
        <script src="js/plugins/datatables/jquery.dataTables.js" type="text/javascript"></script>
        <script src="js/plugins/datatables/dataTables.bootstrap.js" type="text/javascript"></script>
        <script src="js/GestionarCanjesYComisionSocios.js?Fv44" type="text/javascript"></script>
        <script type="text/javascript">
            window.onload = function () {
                document.getElementById("GestionRedes").classList.add("active");

                document.getElementById("gestMulti").style.color = '#79B729';
                document.getElementById("gestMulti").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';

                document.getElementById("contrCanjAbo").style.color = '#79B729';
                document.getElementById("contrCanjAbo").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';
            }
        </script>
    </section>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="footer" runat="server">
</asp:Content>
