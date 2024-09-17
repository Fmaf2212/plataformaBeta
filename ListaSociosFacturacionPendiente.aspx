<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="ListaSociosFacturacionPendiente.aspx.cs" Inherits="SantaNaturaNetworkV3.ListaSociosFacturacionPendiente" ClientIDMode="Static" %>
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
        <h1 style="text-align: center">Lista Socios con facturación pendiente</h1>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="box box-success">
                    <div class="box box-header">
                        <h3 class="box-title">Lista de socios</h3>
                    </div>
                    <div style="padding-left: 11px; margin-bottom: 30px" class="col-md-12">
                        <div class="col-md-1">
                            <label>Periodo</label>
                        </div>
                        <div class="col-md-2" style="margin-bottom: 10px;">
                            <asp:DropDownList runat="server" ID="cboPeriodo" CssClass="form-control" />
                        </div>
                        <div class="col-md-2">
                            <button class="btn btn-success" type="button" style="font-weight: bold" id="btnFiltrar">Filtrar</button>
                        </div>
                    </div>
                    <div class="box-body table-responsive">
                        <table id="tbl_lista" class="table table-bordered table-hover text-center">
                            <thead>
                                <tr>
                                    <th>ID SOCIO</th>
                                    <th>DNI</th>
                                    <th>NOMBRES</th>
                                    <th>CELULAR</th>
                                    <th>CORREO</th>
                                    <th>LINEA MULTINIVEL</th>
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
        <script src="js/plugins/datatables/jquery.dataTables.js" type="text/javascript"></script>
        <script src="js/plugins/datatables/dataTables.bootstrap.js" type="text/javascript"></script>
        <script src="js/ListaPendienteFacturacion.js?v1" type="text/javascript"></script>
        <script type="text/javascript">
            window.onload = function () {
                document.getElementById("GestionRedes").classList.add("active");

                document.getElementById("gestMulti").style.color = '#79B729';
                document.getElementById("gestMulti").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';

                document.getElementById("listaSocPendFact").style.color = '#79B729';
                document.getElementById("listaSocPendFact").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';
            }
        </script>

    </section>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="footer" runat="server">
</asp:Content>
