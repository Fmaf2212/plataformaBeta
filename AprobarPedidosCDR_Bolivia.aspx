<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="AprobarPedidosCDR_Bolivia.aspx.cs" Inherits="SantaNaturaNetworkV3.AprobarPedidosCDR_Bolivia" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
     <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
    <link href="css/datatables/dataTables.bootstrap.css" rel="stylesheet" />
    <style>
        .table > tbody > tr > td, .table > tbody > tr > th, .table > tfoot > tr > td,
        .table > tfoot > tr > th, .table > thead > tr > td, .table > thead > tr > th {
            vertical-align: middle;
        }

        .ui-front {
            z-index: 2000 !important;
        }

        .modal-body {
            height: 620px;
            overflow: hidden;
        }

            .modal-body:hover {
                overflow-y: auto;
            }
    </style>
    <section class="content-header">
        <h1 style="text-align: center">PEDIDOS CDR BOLIVIA</h1>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="box box-success">
                    <div class="box box-header">
                        <h3 class="box-title">Lista de Pedidos CDR</h3>
                    </div>
                    <div style="padding-left: 11px">
                        <div class="row">
                            <div class="col-md-2">
                                <label>Rango de Inicio</label>
                                <input type="text" id="fechaInicio" name="" class="form-control daterange" style="background-color: lightgreen">
                            </div>
                            <div class="col-md-2">
                                <label>Rango de Fin</label>
                                <input type="text" id="fechaFin" name="" class="form-control daterange" style="background-color: lightgreen">
                            </div>
                            <div class="col-md-2">
                                <br />
                                <asp:Button runat="server" Text="Filtrar" CssClass="btn btn-success " Style="font-weight: bold" ID="btnFiltrar" />
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
                                                    <h4 style="text-align: center; font-weight: bold" class="modal-title" id="exampleModalLabel">Detalle de Solicitud de Stock</h4>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="modal-body1">
                                                        <div class="row">
                                                            <div class="col-md-5">
                                                                <label>CDR</label>
                                                                <asp:TextBox runat="server" ID="txtCDRDetalle" CssClass="form-control" BackColor="LightGreen" ReadOnly="true" />
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <div class="row">
                                                            <div class="box-body table-responsive">
                                                                <table id="tbl_detalle" class="table table-bordered table-hover text-center">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Orden</th>
                                                                            <th>Producto</th>
                                                                            <th>Imagen</th>
                                                                            <th>ID PS</th>
                                                                            <th>Cantidad</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody id="tbActualiza">
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button id="btnCancelar" type="reset" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Modal -->
                            </div>
                        </div>
                        <table id="tbl_cdr" class="table table-bordered table-hover text-center">
                            <thead>
                                <tr>
                                    <th>Id Solicitud</th>
                                    <th>Fecha Solicitud</th>
                                    <th>IDOP 1</th>
                                    <th>IDOP 2</th>
                                    <th>Id CDR</th>
                                    <th>Estado</th>
                                    <th>Monto</th>
                                    <th>Tipo Compra</th>
                                    <th>Voucher</th>
                                    <th>Ver Detalle</th>
                                    <th>Aprobar</th>
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
        <script src="//cdn.jsdelivr.net/npm/sweetalert2@10" type="text/javascript"></script>
        <script src="js/moment.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js" type="text/javascript"></script>
        <script src="js/plugins/datatables/jquery.dataTables.js"></script>
        <script src="js/plugins/datatables/dataTables.bootstrap.js"></script>
        <script src="js/AprobarPedidoCDR_Bolivia.js?v1"></script>
        <script type="text/javascript">
            window.onload = function () {
                document.getElementById("GestionarCDR").classList.add("active");
                var day = moment().format("DD/MM/YYYY");
                $('#fechaInicio').val(day);
                $('.daterange').daterangepicker({
                    singleDatePicker: true,
                    showDropdowns: true,
                    locale: { format: "DD/MM/YYYY" },
                    autoApply: true
                });


                document.getElementById("gestCDR").style.color = '#79B729';
                document.getElementById("gestCDR").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';

                document.getElementById("gestPedCDR").style.color = '#79B729';
                document.getElementById("gestPedCDR").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';
            }
        </script>

    </section>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="footer" runat="server">
</asp:Content>
