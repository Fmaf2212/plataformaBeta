<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="ListadoComprasPECDR.aspx.cs" Inherits="SantaNaturaNetworkV3.ListadoComprasPECDR" ClientIDMode="Static" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
    <link href="css/proyecto2/listadoComprasPECDR.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="listaComprasPECDR">
        <section class="content-header">
            <h1>PEDIDOS DE PAGOEFECTIVO</h1>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div>
                        <div class="box-header">
                            <h3 class="box-title">LISTA DE PEDIDOS</h3>
                        </div>
                        <div class="box-body table-responsive" style="padding: 15px;">
                            <table id="tbl_Pedidos" class="table table-bordered table-hover text-center">
                                <thead>
                                    <tr class="tablaHeader">
                                        <th>ID</th>
                                        <th>Fecha Creacion</th>
                                        <th>Fecha Expiración</th>
                                        <th>CIP</th>
                                        <th>Monto</th>
                                        <th>Estado</th>
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

        </section>
    </div>
    <script src="js/sweetAlert.js" type="text/javascript"> </script>
    <script src="js/plugins/datatables/jquery.dataTables.js"></script>
    <script src="js/plugins/datatables/dataTables.bootstrap.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js" type="text/javascript"></script>
    <script src="js/ListadoComprasPECDR.js"></script>
    <script type="text/javascript">
        window.onload = function () {
            document.getElementById("GestionarCDR").classList.add("active");


            document.getElementById("listaPagoEfectivo").style.color = '#79B729';
            document.getElementById("listaPagoEfectivo").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';

        }
    </script>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="footer" runat="server">
</asp:Content>
