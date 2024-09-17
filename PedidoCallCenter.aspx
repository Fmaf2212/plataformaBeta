<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="PedidoCallCenter.aspx.cs" Inherits="SantaNaturaNetworkV3.PedidoCallCenter" ClientIDMode="Static" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <link href="assets/css/demo.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <link href="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/css/select2.min.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
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



        #tbl_cdr_wrapper .row .col-xs-6 .dataTables_length, .dataTables_filter label {
            color: #1c1c72
        }

        #tbl_cdr_wrapper .row .col-xs-6 .dataTables_info {
            color: #1c1c72
        }

        #tbl_cdr_wrapper .row .col-xs-6 .dataTables_paginate ul .prev a, .next a {
            color: #1c1c72 !important
        }

        #tbl_cdr_wrapper .row .col-xs-6 .dataTables_paginate ul .active a {
            background: #1c1c72
        }


        .tablaHeader > th {
            background: #1c1c72 !important;
            color: white;
            text-transform: uppercase
        }

        .odd td:nth-child(2n+1), .even td:nth-child(2n+1) {
            background: #A686D1
        }

        .odd td:nth-child(2n+2), .even td:nth-child(2n+2) {
            background: #dbcfe8
        }

        .odd, .even td {
            color: #1c1c72
        }


        #tbl_cdr tbody tr td > button {
            background-color: #1c1c72;
        }
    </style>

    <div class="SoliStockCDR">
        <section class="content-header">
            <h1>PEDIDOS CALLCENTER</h1>
        </section>
        <section class="content" style="padding: 20px 15px 0px">
            <br />
            <div class="row">
                <div class="col-md-12">
                    <div>
                        <div class="bloqueListaPedidos">
                            <div class="bloqueTipoPago">
                                <div class="col-xs-12 col-lg-8">
                                    <label style="color: #1c1c72">Fecha Inicio</label>
                                    <input type="text" id="fechaInicio" name="" class="form-control daterange">
                                </div>
                                <div class="col-xs-12 col-lg-8">
                                    <label style="color: #1c1c72">Fecha Fin</label>
                                    <input type="text" id="fechaFin" name="" class="form-control daterange">
                                </div>

                                <div class="col-md-8 col-lg-6 bloqueBtnCrearPedido">
                                    <button runat="server" type="button" class="btn btnCrearPedido" id="btnFiltrar">FILTRAR</button>
                                </div>
                            </div>
                            <div>
                                <div class="col-md-8 col-lg-6 bloqueBtnCrearPedido">
                                    <button runat="server" type="button" class="btn btnCrearPedido" id="btnModals">CREAR PEDIDO</button>
                                </div>
                            </div>
                        </div>
                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="container modal-dialog modal-lg" id="modalTamano2" role="document" style="height: 100%; display: flex; align-items: center;">
                                <div class="modal-content" style="max-height: 700px; overflow-y: scroll; max-width: 1000px; width: 100%;">
                                    <div class="modal-header">
                                        <h4 style="text-align: center; font-weight: bold" class="modal-title" id="exampleModalLabel2">Pedido Call Center</h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="modal-body1">
                                            <div class="bloqueAgregarProd">
                                                <div class="centrado">
                                                    <label>Total Pagar:  </label>
                                                    <asp:Label runat="server" ID="txtTotPagar" />
                                                </div>
                                                <div class="centrado">
                                                    <label>Fecha: </label>
                                                    <asp:Label runat="server" ID="txtFecha" />
                                                </div>
                                                <div class="bloqueAgregarProd__dropdownProd">
                                                    <label>Producto</label>
                                                    <select style="box-shadow: 0 0 5px 5px aliceblue; width: 100%; background-color: white; color: #7d6754; font-family: Andalus" id="cboProductoCall" class="ddl js-example-templating" runat="server"></select>
                                                </div>
                                                <div class="bloqueAgregarProd__btnAgregar">
                                                    <button id="btnAgregar" type="button" class="btn btn-success">Agregar</button>
                                                </div>
                                                <div class="bloqueAgregarProd__dropdownProd">
                                                    <label>Yachai Wasi</label>
                                                    <select style="box-shadow: 0 0 5px 5px aliceblue; width: 100%; background-color: white; color: #7d6754; font-family: Andalus" id="cboYW" class="ddl js-example-templating" runat="server"></select>
                                                </div>
                                            </div>
                                            <br />
                                            <div class="row">
                                                <div class="box-body table-responsive registrarStock">
                                                    <table id="tbl_registro" class="table table-bordered table-hover text-center">
                                                        <tbody id="tbe2">
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
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="container modal-dialog" id="modalTamano" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 style="text-align: center; font-weight: bold" class="modal-title" id="exampleModalLabel">Datos del Delivery</h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="modal-body1">
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <div class="col-md-3">
                                                        <label>Ticket: </label>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <asp:Label runat="server" ID="lblTicket" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <div class="col-md-12">
                                                        <label>Tipo de Pago: </label>
                                                        <select style="box-shadow: 0 0 5px 5px aliceblue; width: 100%; background-color: white; color: #7d6754; font-family: Andalus" id="cboTipoPago" class="ddl js-example-templating" runat="server">
                                                            <option value="02">EFECTIVO</option>
                                                            <option value="04">PAGOEFECTIVO</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <div class="col-md-12">
                                                        <label>Nombres: </label>
                                                        <input type="text" class="form-control" id="txtNombres">
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <div class="col-md-12">
                                                        <label>Apellidos: </label>
                                                        <input type="text" class="form-control" id="txtApellidos">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <div class="col-md-12">
                                                        <label>Tipo Documento: </label>
                                                        <select style="box-shadow: 0 0 5px 5px aliceblue; width: 100%; background-color: white; color: #7d6754; font-family: Andalus" id="cboTipoDoc" class="ddl js-example-templating" runat="server">
                                                            <option value="DNI">DNI</option>
                                                            <option value="PASAPORTE">PASAPORTE</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <div class="col-md-12">
                                                        <label>Documento: </label>
                                                        <input onkeypress="return validarNumerosPD(event)" type="text" class="form-control" id="txtDocumento">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <div class="col-md-12">
                                                        <label>Celular: </label>
                                                        <input type="text" class="form-control" id="txtCelular">
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <div class="col-md-12">
                                                        <label>Correo: </label>
                                                        <input type="text" class="form-control" id="txtCorreo">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <div class="col-md-12">
                                                        <label>Dirección: </label>
                                                        <input type="text" class="form-control" id="txtDireccion">
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <div class="col-md-12">
                                                        <label>Referencia: </label>
                                                        <input type="text" class="form-control" id="txtReferencia">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <div class="col-md-12">
                                                        <label>Latitud: </label>
                                                        <input type="text" class="form-control" id="txtLatitud">
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <div class="col-md-12">
                                                        <label>Longitud: </label>
                                                        <input type="text" class="form-control" id="txtLongitud">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <div class="col-md-12">
                                                        <label>Comprobante: </label>
                                                        <select style="box-shadow: 0 0 5px 5px aliceblue; width: 100%; background-color: white; color: #7d6754; font-family: Andalus" id="cboComprobante" class="ddl js-example-templating" runat="server">
                                                            <option value="Boleta">BOLETA</option>
                                                            <option value="Factura">FACTURA</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <div class="col-md-12">
                                                        <label>Doc. Comprobante: </label>
                                                        <input type="text" class="form-control" id="txtDocComprobante">
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                            <div class="row">
                                                <div class="box-body table-responsive">
                                                    <table id="tbl_detalle" class="table table-bordered table-hover text-center">
                                                        <thead>
                                                            <tr>
                                                                <th>Producto</th>
                                                                <th>Imagen</th>
                                                                <th>Cantidad</th>
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
                                        <button id="btnActualizar" type="button" class="btn btn-success">Actualizar</button>
                                        <button id="btnCancelar" type="reset" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Modal -->
                        <div class="box-body table-responsive" style="padding: 15px;">
                            <table id="tbl_Call" class="table table-bordered table-hover text-center">
                                <thead>
                                    <tr class="tablaHeader">
                                        <th>Ticket</th>
                                        <th>Fecha</th>
                                        <th>Estado</th>
                                        <th>IDOP</th>
                                        <th>Monto</th>
                                        <th>Despacho</th>
                                        <th>Tipo Pago</th>
                                        <th>Detalle</th>
                                        <th>Generar CIP</th>
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
            <script src="../assets/js/jquery-ui.min.js" type="text/javascript"></script>
            <script src="js/sweetAlert.js" type="text/javascript"> </script>
            <script type="text/javascript" src="https://cdn.datatables.net/v/dt/dt-1.10.25/datatables.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.min.js"></script>
            <script src="js/moment.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js" type="text/javascript"></script>
            <script src="js/PedidoCallCenter.js?v3"></script>
            <script type="text/javascript">
                $(document).ready(function () {

                    var day = moment().format("DD/MM/YYYY");
                    $('#fecha').val(day);
                    $('.daterange').daterangepicker({
                        singleDatePicker: true,
                        showDropdowns: true,
                        locale: { format: "DD/MM/YYYY" },
                        autoApply: false
                    });
                });

                window.onload = function () {
                    document.getElementById("gestCompras").style.color = '#79B729';
                    document.getElementById("gestCompras").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';

                    document.getElementById("gstCall").style.color = '#79B729';
                    document.getElementById("gstCall").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';
                }
            </script>
        </section>
    </div>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="footer" runat="server">
</asp:Content>
