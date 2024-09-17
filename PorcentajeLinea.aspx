<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="PorcentajeLinea.aspx.cs" Inherits="SantaNaturaNetworkV3.PorcentajeLinea" ClientIDMode="Static" %>
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
        .ui-front {
            z-index: 2000 !important;
        }
    </style>
    <section class="content-header">
        <h1 style="text-align: center">Porcentaje de Linea CDR</h1>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-xs-12">
                <div class="box box-success">
                    <div class="box box-header">
                        <h3 class="box-title">Lista de CDR</h3>
                    </div>
                    <div style="padding-bottom: 2px; padding-left: 11px">
                        <button type="button" class="btn btn-success" style="font-weight: bold" id="btnInicioPorcentaje">
                            Inicio Porcentaje      
                        </button>
                    </div>
                    <div class="box-body table-responsive">
                        <div class="col-md-4">
                            <div class="box-body">
                                <div class="form-group">
                                    <!-- Modal -->
                                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                                        <div class="container modal-dialog" id="modalTamano2" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h4 style="text-align: center; font-weight: bold" class="modal-title" id="exampleModalLabel2">Actualizar Porcentaje Linea del CDR</h4>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="modal-body1">
                                                        <br />
                                                        <div class="row">
                                                            <div class="box-body table-responsive">
                                                                <table id="tbl_actualizar" class="table table-bordered table-hover text-center">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>ID</th>
                                                                            <th>Linea</th>
                                                                            <th>Porcentaje</th>
                                                                            <th>Actualizar</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody id="tbe2">
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button id="btnCancelar2" type="reset" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Modal -->
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="box-body">
                                <div class="form-group"></div>
                            </div>
                        </div>
                        <table id="tbl_cdr" class="table table-bordered table-hover text-center">
                            <thead>
                                <tr>
                                    <th>Orden</th>
                                    <th>DNI CDR</th>
                                    <th>Apodo CDR</th>
                                    <th>Detalle</th>
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
        <script src="js/PorcentajeLinea.js?v3"></script>
        <script type="text/javascript">
            window.onload = function () {
                document.getElementById("GestionarCDR").classList.add("active");

                document.getElementById("gestCDR").style.color = '#79B729';
                document.getElementById("gestCDR").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';

                document.getElementById("gestPorcLinCDR").style.color = '#79B729';
                document.getElementById("gestPorcLinCDR").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';
            }
        </script>

    </section>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="footer" runat="server">
</asp:Content>

