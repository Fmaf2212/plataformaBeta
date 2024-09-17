<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="GestionarDatosPersonalesCDR.aspx.cs" Inherits="SantaNaturaNetworkV3.DatosPersonalesCDR_ADMIN" ClientIDMode="Static" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <link rel="stylesheet" type="text/css" href="css/file-upload.css" />
    <link href="css/datatables/dataTables.bootstrap.css" rel="stylesheet" />
    <style>
        .table > tbody > tr > td, .table > tbody > tr > th, .table > tfoot > tr > td,
        .table > tfoot > tr > th, .table > thead > tr > td, .table > thead > tr > th {
            vertical-align: middle;
        }
    </style>
    <section class="content-header">
        <h1 style="text-align: center">Gestionar Datos Personales CDR</h1>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-xs-12">
                <div class="box box-success">
                    <div class="box box-header">
                        <h3 class="box-title">Lista CDR</h3>
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
                                                    <h4 style="text-align: center; font-weight: bold" class="modal-title" id="exampleModalLabel">Promoción</h4>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="modal-body1">
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <div class="form-group">
                                                                    <label>Documento</label>
                                                                    <asp:TextBox runat="server" ID="txtDocumento" CssClass="form-control" BackColor="LightGreen"></asp:TextBox>
                                                                    <br>
                                                                    <label>Nombres</label>
                                                                    <asp:TextBox runat="server" ID="txtNombres" CssClass="form-control" BackColor="LightGreen"></asp:TextBox>
                                                                    <br>
                                                                    <label>Apellido Pat.</label>
                                                                    <asp:TextBox runat="server" ID="txtApellidoPat" CssClass="form-control" BackColor="LightGreen"></asp:TextBox>
                                                                    <br>
                                                                    <label>Apellido Mat.</label>
                                                                    <asp:TextBox runat="server" ID="txtApellidoMat" CssClass="form-control" BackColor="LightGreen"></asp:TextBox>
                                                                    <br>
                                                                    <label>Documento Extorno</label>
                                                                    <asp:TextBox runat="server" ID="txtDocumentoExt" CssClass="form-control" BackColor="LightGreen"></asp:TextBox>
                                                                    <br>
                                                                    <label>Razon Social Extorno</label>
                                                                    <asp:TextBox runat="server" ID="txtRazonExt" CssClass="form-control" BackColor="LightGreen"></asp:TextBox>
                                                                    <br>
                                                                    <label>Dirección Extorno</label>
                                                                    <asp:TextBox runat="server" ID="txtDireccionExt" CssClass="form-control" BackColor="LightGreen"></asp:TextBox>
                                                                    <br>
                                                                </div>
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
                                    <th>ID</th>
                                    <th>DNI CDR</th>
                                    <th>APODO CDR</th>
                                    <th>ACTUALIZAR</th>
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
        <script src="js/GestionarDatosPersonalesCDR.js?v2"></script>
        <script>
            window.onload = function () {
                document.getElementById("gestCDR").style.color = '#79B729';
                document.getElementById("gestCDR").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';

                document.getElementById("gestDatPerCDR").style.color = '#79B729';
                document.getElementById("gestDatPerCDR").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';
            }
        </script>
    </section>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="footer" runat="server">
</asp:Content>
