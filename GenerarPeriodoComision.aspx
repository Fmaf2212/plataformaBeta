<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="GenerarPeriodoComision.aspx.cs" Inherits="SantaNaturaNetworkV3.GenerarPeriodoComision" ClientIDMode="Static" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
     <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
    <link rel="stylesheet" type="text/css" href="css/file-upload.css" />
    <link href="css/bootstrap-toggle.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js" type="text/javascript"></script>
    <section class="content-header">
        <h1 style="text-align: center">Periodos Comision</h1>
    </section>
    <style>
        .ui-front {
            z-index: 2000 !important;
        }

        .switchTamano {
            width: 5rem !important;
            top: -1rem;
        }

    </style>
    <section class="content">
        <div class="row">
            <div class="col-xs-12">
                <div class="box box-success">
                    <div class="box box-header">
                        <h3 class="box-title">Lista de Periodos Comision</h3>
                    </div>
                    <div style="padding-bottom: 13px; padding-left: 11px">
                        <button type="button" class="btn btn-success" style="font-weight: bold" data-toggle="modal" data-target="#exampleModal" id="btnNuevoPeriodo">
                            Nuevo Periodo
                        </button>
                    </div>
                    <div class="box-body table-responsive">
                        <div class="col-md-4">
                            <div class="box-body">
                                <div class="form-group">
                                    <!-- Modal -->
                                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="container modal-dialog" id="modalTamano" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h4 style="text-align: center; font-weight: bold" class="modal-title" id="exampleModalLabel">Nuevo Periodo</h4>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <label>Nombre Periodo</label>
                                                            <asp:TextBox runat="server" ID="txtNombrePeriodo" CssClass="form-control" BackColor="LightGreen"/>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <label>Rango de Inicio</label>
                                                            <input type="text" id="fecha" name="" class="form-control daterange" style="background-color: lightgreen">
                                                        </div>
                                                        <div class="col-md-3">
                                                            <label>Rango de Fin</label>
                                                            <input type="text" id="fechaFin" name="" class="form-control daterange" style="background-color: lightgreen">
                                                        </div>
                                                        <div class="col-md-2">
                                                            <label>Estado</label>
                                                            <div class="checkbox switchTamano">
                                                                <input id="chkGeneral" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-3">
                                                            <label>Periodo Rango</label>
                                                                <asp:DropDownList runat="server" ID="cboRango" CssClass="form-control" BackColor="LightGreen" />
                                                        </div>
                                                        <div class="col-md-2">
                                                            <label>Visualizar</label>
                                                            <div class="checkbox switchTamano">
                                                                <input id="chkVisu" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button id="btnId" type="reset" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                                    <button id="btnRegistrar" type="button" class="btn btn-success">Registrar</button>
                                                    <button id="btnActualizar" type="button" class="btn btn-success">Actualizar</button>
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
                        <table id="tbl_periodo" class="table table-bordered table-hover text-center">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Rango</th>
                                    <th>Rango Fin</th>
                                    <th>Estado</th>
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
        <script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>
        <script src="js/sweetAlert.js" type="text/javascript"> </script>
        <script src="js/plugins/datatables/jquery.dataTables.js"></script>
        <script src="js/plugins/datatables/dataTables.bootstrap.js"></script>
        <script src="js/GenerarPeriodoComision.js?v2" type="text/javascript"></script>
        <script type="text/javascript">
            window.onload = function () {
                document.getElementById("gestMulti").style.color = '#79B729';
                document.getElementById("gestMulti").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';

                document.getElementById("genePeriComi").style.color = '#79B729';
                document.getElementById("genePeriComi").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';
            }
        </script>
    </section>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="footer" runat="server">
</asp:Content>
