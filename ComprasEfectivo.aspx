<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="ComprasEfectivo.aspx.cs" Inherits="SantaNaturaNetwork.ComprasEfectivo" ClientIDMode="Static" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
    <link href="css/bootstrap-toggle.min.css" rel="stylesheet">
    <link href="css/datatables/dataTables.bootstrap.css" rel="stylesheet" />
    <section class="content-header">
        <h1 style="text-align: center">Reporte de Compras Efectivo</h1>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-xs-12">
                <div class="box box-success">
                    <div class="box box-header">
                        <h3 class="box-title">Listado de Compras en Efectivo</h3>
                    </div>
                    <div style="padding-left: 11px">
                        <div class="row">
                            <div class="col-md-2">
                                <label>Rango de Inicio</label>
                                <input type="text" id="fecha" name="" class="form-control daterange" style="background-color: lightgreen">
                            </div>
                            <div class="col-md-2">
                                <label>Rango de Fin</label>
                                <input type="text" id="fechaFin" name="" class="form-control daterange" style="background-color: lightgreen">
                            </div>
                            <div class="col-md-2">
                                <br />
                                <asp:Button runat="server" Text="Filtrar" CssClass="btn btn-success " style="font-weight: bold" id="btnGenerar"/>
                            </div>
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
                                                            <div class="box-body table-responsive">
                                                                <table id="tbl_detalle" class="table table-bordered table-hover text-center">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Producto</th>
                                                                            <th>Imagen</th>
                                                                            <th>Cantidad</th>
                                                                            <th>Precio</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody id="tbe">
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button id="btnId" type="reset" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Modal -->
                                </div>
                            </div>
                        </div>
                        <table id="tbl_compras" class="table table-bordered table-hover text-center">
                            <thead>
                                <tr>
                                    <th>Ticket</th>
                                    <th>Fecha Pago</th>
                                    <th>IDOP</th>
                                    <th>Cliente</th>
                                    <th>Cantidad</th>
                                    <th>Monto total</th>
                                    <th>Puntos Total</th>
                                    <th>Despacho</th>
                                    <th>Tipo Pago</th>
                                    <th>Estado</th>
                                    <th>Detalle</th>
                                    <th>Validar</th>
                                </tr>
                            </thead>
                            <tbody id="tbl_body_table">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <script src="js/moment.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js" type="text/javascript"></script>
        <script src="js/sweetAlert.js" type="text/javascript"> </script>
        <script src="js/plugins/datatables/jquery.dataTables.js"></script>
        <script src="js/plugins/datatables/dataTables.bootstrap.js"></script>
        <script src="js/CompraEfectivov4.js?v6" type="text/javascript"></script>
        <script type="text/javascript">
            $(document).ready(function () {
            });

            window.onload = function () {
                document.getElementById("gestCompras").style.color = '#79B729';
                document.getElementById("gestCompras").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';

                document.getElementById("comprEfect").style.color = '#79B729';
                document.getElementById("comprEfect").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';
            }
        </script>
    </section>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="footer" runat="server">
</asp:Content>
