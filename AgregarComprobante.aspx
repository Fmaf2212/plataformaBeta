<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="AgregarComprobante.aspx.cs" Inherits="SantaNaturaNetworkV3.AgregarComprobante" ClientIDMode="Static" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <link href="assets/css/demo.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <link rel="stylesheet" type="text/css" href="css/file-upload.css" />
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

        /*.modal-body {
            overflow: hidden;
        }

            .modal-body:hover {
                overflow-y: auto;
            }*/



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
            <h1>ADJUNTAR COMPROBANTE</h1>
        </section>
        <section class="content" style="padding: 20px 15px 0px">
            <div class="row">
                <div class="col-md-12">
                    <div>
                        <div class="bloqueListaPedidos">
                            <div style="justify-content: center; display: flex; align-items: center;">
                                <h3 style="color: #1c1c72" class="box-title">LISTA DE PEDIDOS</h3>
                            </div>
                        </div>
                        <!-- Modal -->
                                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="container modal-dialog" id="modalTamano" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h4 style="text-align: center; font-weight: bold" class="modal-title" id="exampleModalLabel">Comprobante</h4>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="modal-body1">
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <div class="form-group">
                                                                    <label>Adjunte Comprobante</label>
                                                                    <label style="width: auto; margin-left:20px;" class="file-upload btn btn-success">
                                                                        Ingrese el archivo ...
                                                                                    <asp:FileUpload ID="archivo" runat="server" accept=".png,.jpg,.jpeg" />
                                                                    </label>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button id="btnCancelar" type="reset" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                                    <button id="btnRegistrar" type="button" class="btn btn-success">Registrar</button>
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
                                        <th>Tipo de Compra</th>
                                        <th>Monto</th>
                                        <th>Comprobante</th>
                                        <th>Adjuntar</th>
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
            <script src="js/AgregarComprobanteCDR.js?v1"></script>
            <script type="text/javascript">

                window.onload = function () {
                    document.getElementById("adjuntarComprobante").style.color = '#79B729';
                    document.getElementById("adjuntarComprobante").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';
                }
            </script>
        </section>
    </div>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="footer" runat="server">
</asp:Content>
