<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="ValidacionMontosYW.aspx.cs" Inherits="SantaNaturaNetworkV3.ValidacionMontosYW" ClientIDMode="Static" %>
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
        <h1 style="text-align: center">Montos de validación YW</h1>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="box box-success">
                    <div class="box box-header">
                        <h3 class="box-title">Lista de montos</h3>
                    </div>
                    <div style="padding-left: 11px">
                        <div class="row">
                            <div class="col-md-2">
                                <button runat="server" type="button" class="btn btn-success" style="font-weight: bold" id="btnModals">Crear Validación</button>
                            </div>
                        </div>
                        <br />
                    </div>
                    <div class="box-body">
                        <table id="tbl_cdr" class="table table-bordered table-hover text-center">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Monto</th>
                                    <th>Descripción</th>
                                    <th>Actualizar</th>
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

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="container modal-dialog" id="modalTamano" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 style="text-align: center; font-weight: bold" class="modal-title" id="exampleModalLabel">Detalle sustracción</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="modal-body1">
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Monto</label>
                                    <input type="text" class="form-control solo-numero" id="txtMonto" placeholder="Monto"/>
                                </div>
                                <div class="col-md-6">
                                    <label>Descripción</label>
                                    <textarea rows="5" class="form-control" id="txtDescripcion" placeholder="Descripción"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button id="btnCancelar" type="reset" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                        <button id="btnRegistrar" type="button" class="btn btn-success">Registrar</button>
                        <button id="btnActualizar" type="button" class="btn btn-success">Actualizar</button>
                    </div>
                </div>
            </div>
        </div>
        <script src="js/sweetAlert.js" type="text/javascript"> </script>
        <script src="js/plugins/datatables/jquery.dataTables.js"></script>
        <script src="js/plugins/datatables/dataTables.bootstrap.js"></script>
        <script src="js/MontosValidacion.js?v1"></script>
        <script type="text/javascript">
            window.onload = function () {
                $('.solo-numero').numeric();
                document.getElementById("GestionarCDR").classList.add("active");


                document.getElementById("gestCDR").style.color = '#79B729';
                document.getElementById("gestCDR").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';

                document.getElementById("gestMontosCDR").style.color = '#79B729';
                document.getElementById("gestMontosCDR").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';
            }
        </script>

    </section>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="footer" runat="server">
</asp:Content>
