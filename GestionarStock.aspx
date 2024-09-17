<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="GestionarStock.aspx.cs" Inherits="SantaNaturaNetworkV3.GestionarStock" ClientIDMode="Static" %>

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
        <h1 style="text-align: center">Stock CDR</h1>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="box box-success">
                    <div class="box box-header">
                        <h3 class="box-title">Lista de CDR</h3>
                    </div>
                    <div style="padding-left: 11px">
                        <div class="row">
                            <div class="col-md-2">
                                <label>CDR</label>
                                <asp:DropDownList runat="server" ID="cboCDR" CssClass="form-control" BackColor="LightGreen" />
                            </div>
                            <%--<div class="col-md-2">--%>
                            <br />
                            <button runat="server" type="button" class="btn btn-success" style="font-weight: bold; margin-left: 15px;" id="btnModals">Registrar </button>
                            <%--</div>--%>
                            <%--<div class="col-md-2">--%>
                            <%--<br />--%>
                            <button runat="server" type="button" class="btn btn-success" style="font-weight: bold; margin-left: 15px;" id="btnActualizarGlobal" data-toggle="modal" data-target="#exampleModalG">Actualizar Stock Global</button>
                            <%--</div>--%>
                        </div>
                        <br />
                    </div>
                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="container modal-dialog" id="modalTamano2" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 style="text-align: center; font-weight: bold" class="modal-title" id="exampleModalLabel2">Registrar Stock</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="modal-body1">
                                        <div class="row">
                                            <div class="col-md-5">
                                                <label>Despacho</label>
                                                <asp:TextBox runat="server" ID="txtCDR" CssClass="form-control" BackColor="LightGreen" ReadOnly="true" />
                                            </div>
                                            <div class="col-md-3">
                                                <br />
                                                <button id="btnRellenarRegistro" type="button" class="btn btn-success">Rellenar</button>
                                            </div>
                                        </div>
                                        <br />
                                        <div class="row">
                                            <div class="box-body table-responsive">
                                                <table id="tbl_registro" class="table table-bordered table-hover text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>Orden</th>
                                                            <th>Producto</th>
                                                            <th>Imagen</th>
                                                            <th>ID PS</th>
                                                            <th>Cantidad</th>
                                                            <th>Control Stock</th>
                                                            <th>Cantidad Real</th>
                                                            <th>Stock Inicial</th>
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
                                    <button id="btnRegistrar" type="button" class="btn btn-success">Registrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Modal -->
                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="container modal-dialog" id="modalTamano" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 style="text-align: center; font-weight: bold" class="modal-title" id="exampleModalLabel">Actualizar Stock</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="modal-body1">
                                        <div class="row">
                                            <div class="col-md-5">
                                                <label>Despacho</label>
                                                <asp:TextBox runat="server" ID="txtCDRActualizar" CssClass="form-control" BackColor="LightGreen" ReadOnly="true" />
                                            </div>
                                            <div class="col-md-3">
                                                <br />
                                                <button id="btnRellenar" type="button" class="btn btn-success">Rellenar</button>
                                            </div>
                                        </div>
                                        <br />
                                        <div class="row">
                                            <div class="box-body table-responsive">
                                                <table id="tbl_actualizar" class="table table-bordered table-hover text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>Orden</th>
                                                            <th>Producto</th>
                                                            <th>Imagen</th>
                                                            <th>ID PS</th>
                                                            <th>Cantidad</th>
                                                            <th>Control Stock</th>
                                                            <th>Cantidad Real</th>
                                                            <th>Stock Inicial</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="tbActualiza">
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button id="btnCancelar" type="reset" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                    <button id="btnActualizar" type="button" class="btn btn-success">Actualizar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Modal -->
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
                                        <div class="row" style="display: flex; justify-content: center; margin-top: 30px;" id="dvProd">
                                            <div class="col-md-4">
                                                <label>Producto</label>
                                                <asp:DropDownList runat="server" ID="cboProducto" class="form-control js-example-templating" Style="width: 235px" />
                                            </div>
                                        </div>
                                        <div class="row" style="display: flex; justify-content: center; margin-top: 30px;">
                                            <div class="col-md-3">
                                                <label>Cantidad</label>
                                                <asp:TextBox runat="server" ID="txtCantidad" CssClass="form-control"/>
                                            </div>
                                            <div class="col-md-2">
                                                <label>Estado</label>
                                                <div class="checkbox switchTamano" style="margin-top: 0px !important;">
                                                    <input id="chkEstadoConsultor" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button id="btnCancelarG" type="reset" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                    <button id="btnActualizarG" type="button" class="btn btn-success">Actualizar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Modal Global -->
                    <div class="box-body table-responsive">
                        <table id="tbl_cdr" class="table table-bordered table-hover text-center">
                            <thead>
                                <tr>
                                    <th>DNI</th>
                                    <th>Apodo</th>
                                    <th>Id PeruShop</th>
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
        <script src="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.min.js"></script>
        <script src="js/sweetAlert.js" type="text/javascript"> </script>
        <script src="js/plugins/datatables/jquery.dataTables.js"></script>
        <script src="js/plugins/datatables/dataTables.bootstrap.js"></script>
        <script src="js/CrearStockV2.js?v7"></script>
        <script type="text/javascript">
            $(".js-example-templating").select2({
                dropdownParent: $('#exampleModalG')
            });
            window.onload = function () {
                document.getElementById("GestionarCDR").classList.add("active");


                document.getElementById("gestCDR").style.color = '#79B729';
                document.getElementById("gestCDR").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';

                document.getElementById("gestStock").style.color = '#79B729';
                document.getElementById("gestStock").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';
            }
        </script>

    </section>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="footer" runat="server">
</asp:Content>
