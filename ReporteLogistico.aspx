<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="ReporteLogistico.aspx.cs" Inherits="SantaNaturaNetworkV3.ReporteLogistico" ClientIDMode="Static" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <link rel="stylesheet" type="text/css" href="css/file-upload.css" />
    <link href="css/datatables/dataTables.bootstrap.css" rel="stylesheet" />
    <style>
        .se-pre-con {
            position: fixed;
            left: 0px;
            top: 0px;
            width: 100%;
            height: 100%;
            z-index: 9999;
            background: url(img/loadingPageSantanatura.gif) center no-repeat #fff;
        }

        .table > tbody > tr > td, .table > tbody > tr > th, .table > tfoot > tr > td,
        .table > tfoot > tr > th, .table > thead > tr > td, .table > thead > tr > th {
            vertical-align: middle;
        }
    </style>
    <section class="content-header">
        <h1 style="text-align: center">Gestionar Reporte Logistico</h1>
    </section>
    <section class="content">
        <div id="page_loader" style="display: none" class="se-pre-con"></div>
        <div class="row">
            <div class="col-xs-12">
                <div class="box box-success">
                    <div class="box box-header">
                        <h3 class="box-title">Lista de recepción de guias</h3>
                    </div>
                    <div style="padding-bottom: 2px; padding-left: 11px">
                        <button type="button" class="btn btn-success" style="font-weight: bold" id="btnDownloadRG">
                            Descargar
                        </button>
                    </div>
                    <div class="box-body table-responsive">
                        <table id="tbl_RG" class="table table-bordered table-hover text-center">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Fecha</th>
                                    <th>Descargar</th>
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

        <div class="row">
            <div class="col-xs-12">
                <div class="box box-success">
                    <div class="box box-header">
                        <h3 class="box-title">Lista de pedidos a despachar</h3>
                    </div>
                    <div style="padding-bottom: 2px; padding-left: 11px; display: flex; align-items: center;" class="row">
                        <div class="col-md-1">
                            <label>IDOP</label>
                            <asp:TextBox runat="server" ID="txtIDOP" CssClass="form-control" BackColor="LightGreen"></asp:TextBox>
                        </div>
                        <div class="col-md-1">
                            <button type="button" class="btn btn-success" style="font-weight: bold" data-toggle="modal" data-target="#exampleModal" id="btnDownloadPD">
                                Descargar
                            </button>
                        </div>
                    </div>
                    <div class="box-body table-responsive">
                        <table id="tbl_PD" class="table table-bordered table-hover text-center">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Fecha</th>
                                    <th>Descargar</th>
                                </tr>
                            </thead>
                            <tbody id="tbl_body_table2">
                                <!--Data por medio de Ajax-->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>


        <script src="js/sweetAlert.js" type="text/javascript"> </script>
        <script src="js/plugins/datatables/jquery.dataTables.js"></script>
        <script src="js/plugins/datatables/dataTables.bootstrap.js"></script>
        <script src="js/GestionarReporteLogistico.js?v2"></script>
        <script type="text/javascript">
            window.onload = function () {
                document.getElementById("ReporteLogistico").classList.add("active");

                document.getElementById("reporteLogistico").style.color = '#79B729';
                document.getElementById("reporteLogistico").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';
            }
        </script>
    </section>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="footer" runat="server">
</asp:Content>
