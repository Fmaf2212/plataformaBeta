<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="ReporteCDRGene.aspx.cs" Inherits="SantaNaturaNetwork.ReporteCDR" ClientIDMode="Static" %>
<%@ OutputCache Location="None" NoStore="true" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <link href="css/datatables/dataTables.bootstrap.css" rel="stylesheet" />
    <section class="content-header">
        <h1 style="text-align: center">Reporte de CDR</h1>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-xs-12">
                <div class="box box-success">
                    <div class="box box-header">
                        <h3 class="box-title">Listado de Reporte de CDR</h3>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="col-md-2">
                                <div style="padding-top: 19px; padding-left: 2px">
                                    <button type="button" class="btn btn-success" style="font-weight: bold" id="btnGenerarReporte">
                                        Generar Reporte
                                    </button>
                                </div>
                            </div>

                            <div class="col-md-5">
                                <div style="padding-top: 19px; padding-left: 5px">
                                    <asp:Button runat="server" Text=" Exportar" class="btn btn-success" style="font-weight: bold" id="btnExportar" onclick="btnExportar_Click"/>
                                </div>
                            </div>

                            <div class="col-md-2" style="margin-left:30px">
                                <label>Rango de Inicio</label>
                                <asp:TextBox id="txtFecha" name="" class="form-control daterange" runat="server" style="background-color: lightgreen"/>
                            </div>
                            <div class="col-md-2" style="margin-left:30px">
                                <label>Rango de Fin</label>
                                <asp:TextBox type="text" id="txtFechaFin" name="" class="form-control daterange" runat="server" style="background-color: lightgreen"/>
                            </div>
                        </div>


                    </div>


                    <div class="box-body table-responsive">
                        <div class="col-md-4">
                            <div class="box-body">
                            </div>
                        </div>
                        <table id="tbl_cdr" class="table table-bordered table-hover text-center">
                            <thead>
                                <tr>
                                    <th>IDOP</th>
                                    <th>ESTABLECIMIENTO</th>
                                    <th>FECHA</th>
                                    <th>PRODUCTO</th>
                                    <th>CANTIDAD</th>
                                    <th>MONTO</th>
                                    <th>PUNTOS</th>
                                    <th>SUB-TOTAL PUNTOS</th>
                                    <th>SUB-TOTAL MONTO</th>
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
        <script src="js/reporteCDR.js"></script>
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
        </script>
    </section>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="footer" runat="server">
</asp:Content>
