<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="ReglasProductosVD.aspx.cs" Inherits="SantaNaturaNetworkV3.ReglasProductosVD" ClientIDMode="Static" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <link href="css/bootstrap-toggle.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/css/select2.min.css" rel="stylesheet" />
    <section class="content-header">
        <h1 style="text-align: center">Reglas de Productos</h1>
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
            <div class="col-md-12">
                <div class="box box-success">
                    <div class="box box-header">
                        <h3 class="box-title">Lista</h3>
                    </div>
                    <div style="padding-bottom: 13px; padding-left: 11px">
                        <button type="button" class="btn btn-success" style="font-weight: bold" data-toggle="modal" data-target="#exampleModal" id="btnNuevaRegla">
                            Nueva Regla
                        </button>
                    </div>
                    <div class="box-body table-responsive">
                        <table id="tbl_regla" class="table table-bordered table-hover text-center">
                            <thead>
                                <tr>
                                    <th>ID Regla</th>
                                    <th>Producto</th>
                                    <th>Fecha</th>
                                    <th>País</th>
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
        <div class="col-md-12">
            <div class="box-body">
                <div class="form-group">
                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="container modal-dialog" id="modalTamano" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 style="text-align: center; font-weight: bold" class="modal-title" id="exampleModalLabel">Nueva Regla</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="row" style="display: flex; justify-content: center;">
                                        <div class="col-md-4">
                                            <label>Pais</label>
                                            <select runat="server" id="cboPais" class="form-control js-example-templating" style="width: 235px" onchange=listaProductos(this);/>
                                        </div>
                                    </div>
                                    <div class="row" style="display: flex; justify-content: center; margin-top: 30px;" id="dvProd">
                                        <div class="col-md-4">
                                            <label>Producto</label>
                                            <asp:DropDownList runat="server" id="cboProducto" class="form-control js-example-templating" style="width: 235px" />
                                        </div>
                                    </div>
                                    <div class="row" style="margin-top: 30px;">
                                        <div class="col-md-2">
                                            <label>Consultor</label>
                                        </div>
                                        <div class="col-md-2">
                                            <label>Estado</label>
                                            <div class="checkbox switchTamano">
                                                <input id="chkEstadoConsultor" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <label>Máximo Unds.</label>
                                            <asp:TextBox runat="server" ID="txtUnidadesConsultor" CssClass="form-control" BackColor="LightGreen" />
                                        </div>
                                        <div class="col-md-3">
                                            <label>Periodo Visualización</label>
                                            <asp:DropDownList runat="server" ID="cboPeriodoConsultor" CssClass="form-control" BackColor="LightGreen" />
                                        </div>
                                        <div class="col-md-2">
                                            <label>Antigüedad</label>
                                            <asp:TextBox runat="server" ID="txtAntiguedadConsultor" CssClass="form-control" BackColor="LightGreen" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-2">
                                            <label>Patrocinador</label>
                                        </div>
                                        <div class="col-md-2">
                                            <label>Estado</label>
                                            <div class="checkbox switchTamano">
                                                <input id="chkEstadoPatrocinador" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <label>Máximo Unds.</label>
                                            <asp:TextBox runat="server" ID="txtUnidadesPatrocinador" CssClass="form-control" BackColor="LightGreen" />
                                        </div>
                                        <div class="col-md-3">
                                            <label>Periodo Visualización</label>
                                            <asp:DropDownList runat="server" ID="cboPeriodoPatrocinador" CssClass="form-control" BackColor="LightGreen" />
                                        </div>
                                        <div class="col-md-2">
                                            <label>Antigüedad</label>
                                            <asp:TextBox runat="server" ID="txtAntiguedadPatrocinador" CssClass="form-control" BackColor="LightGreen" />
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
                    <!-- Modal -->
                </div>
            </div>
        </div>
        <script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>
        <script src="js/sweetAlert.js" type="text/javascript"> </script>
        <script src="js/plugins/datatables/jquery.dataTables.js"></script>
        <script src="js/plugins/datatables/dataTables.bootstrap.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.min.js"></script>
        <script src="js/ReglasProductos.js?v2" type="text/javascript"></script>
        <script type="text/javascript">

            $(".js-example-templating").select2({
                dropdownParent: $('#exampleModal')
            });
            window.onload = function () {
                document.getElementById("gestProducProm").style.color = '#79B729';
                document.getElementById("gestProducProm").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';

                document.getElementById("reglasPro").style.color = '#79B729';
                document.getElementById("reglasPro").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';
            }
        </script>
    </section>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="footer" runat="server">
</asp:Content>
