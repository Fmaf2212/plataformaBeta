<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="DiasPedidoLineaCredito.aspx.cs" Inherits="SantaNaturaNetworkV3.DiasPedidoLineaCredito" ClientIDMode="Static" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <link href="css/datatables/dataTables.bootstrap.css" rel="stylesheet" />
    <style>
        .table > tbody > tr > td, .table > tbody > tr > th, .table > tfoot > tr > td,
        .table > tfoot > tr > th, .table > thead > tr > td, .table > thead > tr > th {
            vertical-align: middle;
        }
    </style>
    <section class="content-header">
        <h1 style="text-align: center">Días Pedido Linea de Credito CDR</h1>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-xs-12">
                <div class="box box-success">
                    <div class="box box-header">
                        <h3 class="box-title">Lista de días</h3>
                    </div>
                    <div class="box-body table-responsive">
                        <table id="tbl_dias" class="table table-bordered table-hover text-center">
                            <thead>
                                <tr>
                                    <th>ID DÍA</th>
                                    <th>NOMBRE</th>
                                    <th>ESTADO</th>
                                    <th>ACTUALIZAR</th>
                                </tr>
                            </thead>
                            <tbody id="tbl_body_table">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <script src="js/sweetAlert.js" type="text/javascript"> </script>
        <script src="js/plugins/datatables/jquery.dataTables.js"></script>
        <script src="js/plugins/datatables/dataTables.bootstrap.js"></script>
        <script src="js/DiasPedidoLineaCredito.js?v1"></script>
        <script type="text/javascript">
            window.onload = function () {
                document.getElementById("GestionarCDR").classList.add("active");

                document.getElementById("gestCDR").style.color = '#79B729';
                document.getElementById("gestCDR").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';

                document.getElementById("gestDiasSaldDispo").style.color = '#79B729';
                document.getElementById("gestDiasSaldDispo").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';
            }
        </script>

    </section>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="footer" runat="server">
</asp:Content>
