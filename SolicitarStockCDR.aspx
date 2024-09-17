<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="SolicitarStockCDR.aspx.cs" Inherits="SantaNaturaNetworkV3.SolicitarStockCDR" ClientIDMode="Static" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <link href="assets/css/demo.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <link href="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/css/select2.min.css" rel="stylesheet" />
    <link href="css/datatables/dataTables.bootstrap.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />

    <link href="css/proyecto2/solicitarStockCDR.css" rel="stylesheet" />

    <style>
        .table > tbody > tr > td, .table > tbody > tr > th, .table > tfoot > tr > td,
        .table > tfoot > tr > th, .table > thead > tr > td, .table > thead > tr > th {
            vertical-align: middle;
        }

        .ui-front {
            z-index: 2000 !important;
        }

        .modal-body {
            overflow: hidden;
        }

            .modal-body:hover {
                overflow-y: auto;
            }


            
#tbl_cdr_wrapper .row .col-xs-6 .dataTables_length, .dataTables_filter label{
    color: #1c1c72
}

#tbl_cdr_wrapper .row .col-xs-6 .dataTables_info{
    color: #1c1c72
}

#tbl_cdr_wrapper .row .col-xs-6 .dataTables_paginate ul .prev a,.next a{
    color: #1c1c72 !important
}

#tbl_cdr_wrapper .row .col-xs-6 .dataTables_paginate ul .active a{
    background: #1c1c72
}

            
.tablaHeader>th {
    background: #1c1c72 !important;
    color: white;
    text-transform: uppercase
}

.odd td:nth-child(2n+1), .even td:nth-child(2n+1){
    background:#A686D1
}

.odd td:nth-child(2n+2), .even td:nth-child(2n+2){
    background:#dbcfe8
}

.odd, .even td{
    color: #1c1c72
}


#tbl_cdr tbody tr td>button{
        background-color: #1c1c72;
}
    </style>
    <div class="SoliStockCDR">
        <section class="content-header">
            <h1>GENERAR PEDIDO</h1>
        </section>
        <section class="content" style="padding: 20px 15px 0px">
            <div class="row">
                <div class="col-md-12">
                    <div>
                        <div class="bloqueListaPedidos">
                            <div style="justify-content: center; display: flex; align-items: center;">
                                <h3 style="color:#1c1c72" class="box-title">LISTA DE PEDIDOS</h3>
                            </div>
                            <div class="bloqueTipoPago">
                                <div class="col-xs-12 col-lg-8">
                                    <label style="color:#1c1c72">TIPO DE PAGO</label>
                                    <asp:DropDownList style="color:#1c1c72" runat="server" ID="cboTipoPago" CssClass="form-control" />
                                </div>
                                <div class="col-md-8 col-lg-6 bloqueBtnCrearPedido">
                                    <button runat="server" type="button" class="btn btnCrearPedido" id="btnModals">CREAR PEDIDO</button>
                                </div>
                            </div>
                            <div class="bloqueSaldos" style="display: none; justify-content: center;">
                                <div class="col-xs-12 col-sm-7 col-md-5 col-lg-10 bloqueSaldos__hijo">
                                    <div class="col-md-12 saldoComi" style="display:none;">
                                        <p style="display: flex; justify-content: space-between; align-items: center; font-family: 'Dancing Script', cursive; font-size: 18px;">
                                            SALDO DE COMISIONES:
                        <asp:Label runat="server" ID="txtSaldoComision">0</asp:Label>
                                        </p>
                                    </div>
                                    <div class="col-md-12 saldoDispo" style="display:none;">
                                        <p style="display: flex; justify-content: space-between; align-items: center; font-family: 'Dancing Script', cursive; font-size: 18px;">
                                            SALDO DISPONIBLE:
                        <asp:Label runat="server" ID="txtLineaCredito">0</asp:Label>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="container modal-dialog modal-lg" id="modalTamano2" role="document" style="height: 100%; display: flex; align-items: center;">
                                <div class="modal-content" style="max-height: 700px; overflow-y: scroll; max-width: 1000px; width: 100%;">
                                    <div class="modal-header">
                                        <h4 style="text-align: center; font-weight: bold" class="modal-title" id="exampleModalLabel2">Registrar Stock</h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="modal-body1">
                                            <div class="bloqueAgregarProd">
                                                <%--                                            <div class="col-md-5">
                                                <label>Despacho</label>
                                                <asp:TextBox runat="server" ID="txtCDR" CssClass="form-control" BackColor="LightGreen" ReadOnly="true" />
                                            </div>--%>
                                                <div class="centrado">
                                                    <label>Total Pagar:  </label>
                                                    <asp:Label runat="server" ID="txtTotPagar" />
                                                </div>
                                                <div class="centrado">
                                                    <label>Fecha: </label>
                                                    <asp:Label runat="server" ID="txtFecha" />
                                                </div>
                                                <div id="dvSaldo" style="display: none;">
                                                    <label>Saldo Disponible:  </label>
                                                    <asp:Label runat="server" ID="SD" />
                                                </div>
                                                <div class="bloqueAgregarProd__dropdownProd">
                                                    <label>Producto</label>
                                                    <select style="box-shadow: 0 0 5px 5px aliceblue; width: 100%; background-color: white; color: #7d6754; font-family: Andalus" id="cboProductoCDR" class="ddl js-example-templating" runat="server"></select>
                                                </div>
                                                <div class="bloqueAgregarProd__btnAgregar">
                                                    <button id="btnAgregar" type="button" class="btn btn-success">Agregar</button>
                                                </div>
                                            </div>
                                            <br />
                                            <div class="row">
                                                <div class="box-body table-responsive registrarStock">
                                                    <table id="tbl_registro" class="table table-bordered table-hover text-center">
                                                        <tbody id="tbe2">
                                                            <%--<tr>
                                                            <td rowspan="2" class="borderBottom">
                                                                <img src="https://picsum.photos/52" alt="Alternate Text" />
                                                            </td>
                                                            <td>
                                                                <div class="flex">
                                                                    <label>Nombre</label>
                                                                    <asp:Label runat="server" ID="lblNombre" />asdasd
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="flex">
                                                                    <label>Cantidad</label>
                                                                    <div class="custom-input-number">
                                                                        <button type="button" class="cin-btn cin-btn-1 cin-btn-md cin-increment">
                                                                            +
                                                                        </button>
                                                                        <input type="number" class="cin-input basket-quantity" step="1" value="1" min="0" max="100">
                                                                        <button type="button" class="cin-btn cin-btn-1 cin-btn-md cin-decrement">
                                                                            -
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td rowspan="2" class="borderBottom">
                                                                <button type="button" class="cin-btn cin-btn-1 cin-btn-md cin-increment">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="borderBottom">
                                                                <div class="flex">
                                                                    <label>Precio</label>
                                                                    <asp:Label runat="server" ID="lblPrecio" />58.52
                                                                </div>
                                                            </td>
                                                            <td class="borderBottom">
                                                                <div class="flex">
                                                                    <label>ID PS</label>
                                                                    <asp:Label runat="server" ID="lblIDPS" />285
                                                                </div>
                                                            </td>
                                                            
                                                        </tr>--%>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <table>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button id="btnCancelar2" type="reset" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                        <button id="btnRegistrar2" type="button" class="btn btn-success">Comprar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Modal -->
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
                                                <div class="form-group col-md-6">
                                                    <div class="col-md-6">
                                                        <label>YACHAY WASI: </label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <asp:Label runat="server" ID="lblNameCDR" />
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <div class="col-md-6">
                                                        <label>Monto Total:  </label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <asp:Label runat="server" ID="lblMontoTo" />
                                                    </div>
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
                                                                <th>Cantidad de Packs</th>
                                                                <th>Unidades</th>
                                                                <th>SubTotal</th>
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
                                        <button id="btnCancelar" type="reset" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Modal -->
                        <div class="box-body table-responsive" style="padding: 15px;">
                            <table id="tbl_cdr" class="table table-bordered table-hover text-center">
                                <thead>
                                    <tr class="tablaHeader">
                                        <th>ID Pedido</th>
                                        <th>Fecha Solicitud</th>
                                        <th>ID Yachai Wasi</th>
                                        <th>Tipo de Compra</th>
                                        <th>Monto</th>
                                        <th>Cantidad Total</th>
                                        <th>PDF</th>
                                        <th>Ver Detalle</th>
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
            <script src="../assets/js/jquery-ui.min.js" type="text/javascript"></script>
            <script src="js/sweetAlert.js" type="text/javascript"> </script>
            <script src="js/plugins/datatables/jquery.dataTables.js"></script>
            <script src="js/plugins/datatables/dataTables.bootstrap.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.min.js"></script>
            <script src="js/SolicitarProductosCDRV2.js?v47"></script>
            <script type="text/javascript">
                $(document).ready(function () {
                    $(".js-example-templating").select2({
                        dropdownParent: $("#exampleModal2")
                    });
                });

                window.onload = function () {
                    document.getElementById("generarPedidos").style.color = '#79B729';
                    document.getElementById("generarPedidos").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';
                }
            </script>
        </section>
    </div>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="footer" runat="server">
</asp:Content>
