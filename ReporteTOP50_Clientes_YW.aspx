<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="ReporteTOP50_Clientes_YW.aspx.cs" Inherits="SantaNaturaNetworkV3.ReporteTOP50_Clientes_YW" ClientIDMode="Static" %>
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
            <h1>REPORTE TOP 50 DE CLIENTES</h1>
        </section>
        <section class="content" style="padding: 20px 15px 0px">
            <div class="row">
                <div class="col-md-12">
                    <div>
                        <div class="bloqueListaPedidos">
                            <div style="justify-content: center; display: flex; align-items: center;">
                                <h3 style="color: #1c1c72" class="box-title">LISTA DE CLIENTES</h3>
                            </div>
                            <div class="bloqueTipoPago">
                                <div class="col-xs-12 col-lg-8">
                                    <label style="color: #1c1c72">PERIODO</label>
                                    <asp:DropDownList Style="color: #1c1c72" runat="server" ID="cboPeriodo" CssClass="form-control js-example-templating" />
                                </div>
                                <div class="col-md-8 col-lg-6 bloqueBtnCrearPedido">
                                    <button runat="server" type="button" class="btn btnCrearPedido" id="btnFiltrar">FILTRAR</button>
                                </div>
                            </div>
                        </div>
                        <div class="box-body table-responsive" style="padding: 15px;">
                            <table id="tbl_clientes" class="table table-bordered table-hover text-center">
                                <thead>
                                    <tr class="tablaHeader">
                                        <th>Nombre Socio</th>
                                        <th>Paquete</th>
                                        <th>Nro. Pedidos Realizados</th>
                                        <th>Monto Total Facturado</th>
                                        <th>Puntaje Real Acumulado</th>
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
            <script src="//cdn.datatables.net/1.10.25/js/jquery.dataTables.min.js"></script>
            <script src="js/plugins/datatables/dataTables.bootstrap.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.min.js"></script>
            <script src="js/ReporteTOP50_YW.js"></script>
            <script type="text/javascript">
                $(document).ready(function () {
                    $(".js-example-templating").select2({
                    });
                });

                window.onload = function () {
                    document.getElementById("ReportesYW").classList.add("active");
                    document.getElementById("gestReporYW").style.color = '#79B729';
                    document.getElementById("gestReporYW").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';

                }
            </script>
        </section>
    </div>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="footer" runat="server">
</asp:Content>
