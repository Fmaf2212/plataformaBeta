<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="LimiteHoras_YW.aspx.cs" Inherits="SantaNaturaNetworkV3.LimiteHoras_YW" ClientIDMode="Static" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <link href="css/bootstrap-toggle.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/css/select2.min.css" rel="stylesheet" />
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
        <h1 style="text-align: center">Horas limite Yachai Wasi</h1>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="box box-success">
                    <div class="box box-header">
                        <h3 class="box-title">Lista</h3>
                    </div>
                    <div style="padding-left: 11px">
                        <div class="row">
                            <button runat="server" type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModalG" style="font-weight: bold; margin-left: 15px;" id="btnModals">Registrar </button>
                        </div>
                        <br />
                    </div>
                    <div class="box-body table-responsive">
                        <table id="tbl_horas" class="table table-bordered table-hover text-center">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Yachai Wasi</th>
                                    <th>Horas</th>
                                    <th>Actualizar</th>
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

        <!-- Modal Global -->
        <div class="modal fade" id="exampleModalG" tabindex="-1" role="dialog" aria-labelledby="exampleModalG" aria-hidden="true">
            <div class="container modal-dialog" id="modalTamanoG" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 style="text-align: center; font-weight: bold" class="modal-title" id="exampleModalLabelG">Actualizar Stock</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="modal-body1">
                            <div class="row" style="display: flex; justify-content: center; margin-top: 30px;">
                                <div class="col-md-6">
                                    <label>Yachay Wasi</label>
                                    <select id="cboYachaiWasi" class="form-control js-example-templating" style="width: 100%" runat="server"/>
                                </div>
                            </div>
                            <div class="row" style="display: flex; justify-content: center; margin-top: 30px;">
                                <div class="col-md-6">
                                    <label>Horas</label>
                                    <asp:TextBox ID="txtHoras" runat="server" CssClass="form-control"/>

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
        <!-- Modal Global -->
        <script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.min.js"></script>
        <script src="js/sweetAlert.js" type="text/javascript"> </script>
        <script src="js/plugins/datatables/jquery.dataTables.js"></script>
        <script src="js/plugins/datatables/dataTables.bootstrap.js"></script>
        <script src="js/GestionarLimiteHorasYW.js?v2"></script>
        <script type="text/javascript">
            $(".js-example-templating").select2({
                dropdownParent: $('#exampleModalG')
            });
            window.onload = function () {
                document.getElementById("GestionCompras").classList.add("active");


                document.getElementById("gestCompras").style.color = '#79B729';
                document.getElementById("gestCompras").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';

                document.getElementById("limiFechYW").style.color = '#79B729';
                document.getElementById("limiFechYW").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';
            }
        </script>

    </section>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="footer" runat="server">
</asp:Content>
