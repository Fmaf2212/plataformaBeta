<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="GestionarDocumentosMarketing.aspx.cs" Inherits="SantaNaturaNetworkV3.GestionarDocumentosMarketing" ClientIDMode="Static" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <link rel="stylesheet" type="text/css" href="css/file-upload.css" />
    <link href="css/datatables/dataTables.bootstrap.css" rel="stylesheet" />
    <style>
        .table > tbody > tr > td, .table > tbody > tr > th, .table > tfoot > tr > td,
        .table > tfoot > tr > th, .table > thead > tr > td, .table > thead > tr > th {
            vertical-align: middle;
        }
    </style>
    <section class="content-header">
        <h1 style="text-align: center">Gestionar Documentos Marketing</h1>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-xs-12">
                <div class="box box-success">
                    <div class="box box-header">
                        <h3 class="box-title">Lista de archivos</h3>
                    </div>
                    <div style="padding-bottom: 2px; padding-left: 11px">
                        <button type="button" class="btn btn-success" style="font-weight: bold" data-toggle="modal" data-target="#exampleModal" id="btnNuevoArchivo">
                            Nuevo Archivo      
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
                                                    <h4 style="text-align: center; font-weight: bold" class="modal-title" id="exampleModalLabel">Nuevo Archivo</h4>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="modal-body1">
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <div class="form-group">
                                                                    <label>Nombre de Archivo</label>
                                                                    <asp:TextBox runat="server" ID="txtNombre" CssClass="form-control"></asp:TextBox>
                                                                    <br>
                                                                    <label>Tipo de Archivo</label>
                                                                    <select id="cboTipoArchivo" class="form-control" required style="font-size: 1.3rem;" onchange="mostrarURL(this);">
                                                                        <option value="" hidden>Seleccione</option>
                                                                        <option value="offer-primary">WORD</option>
                                                                        <option value="offer-primary">PPT</option>
                                                                        <option value="offer-danger">PDF</option>
                                                                        <option value="offer-success">Imagen</option>
                                                                        <option value="offer-info">Video</option>
                                                                    </select>
                                                                    <br>
                                                                    <div id="divLink" style="display:none;">
                                                                        <label>URL del Video</label>
                                                                    <asp:TextBox runat="server" ID="txtUrl" CssClass="form-control"></asp:TextBox>
                                                                    </div>
                                                                    <div id="divPDF">
                                                                        <label>Adjunte PDF</label>
                                                                        <label style="width: auto; margin-left: 20px;" class="file-upload btn btn-success">
                                                                            Ingrese el archivo ...
                                                                                    <asp:FileUpload ID="archivoDoc" runat="server" accept=".pdf,.png,.jpg,.jpeg,.docx" />
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-4 icheck-primary" style="display: flex; justify-content: space-between;">
                                                                    <label>Consumidor</label>
                                                                    <input id="chkBasico" type="checkbox" class="form-check-input">
                                                            </div>
                                                            <div class="col-md-4" style="display: flex; justify-content: space-between;">
                                                                    <label>Profesional</label>
                                                                    <input id="chkProfesional" type="checkbox" class="form-check-input">
                                                            </div>
                                                            <div class="col-md-4" style="display: flex; justify-content: space-between;">
                                                                    <label>Empresarial</label>
                                                                    <input id="chkEmpresarial" type="checkbox" class="form-check-input">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-4" style="display: flex; justify-content: space-between;">
                                                                    <label>Millonario</label>
                                                                    <input id="chkMillonario" type="checkbox" class="form-check-input">
                                                            </div>
                                                            <div class="col-md-4" style="display: flex; justify-content: space-between;">
                                                                    <label>Imperial</label>
                                                                    <input id="chkImperial" type="checkbox" class="form-check-input">
                                                            </div>
                                                            <div class="col-md-4" style="display: flex; justify-content: space-between;">
                                                                    <label>Consultor MLM</label>
                                                                    <input id="chkConsultorMLM" type="checkbox" class="form-check-input">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-4" style="display: flex; justify-content: space-between;">
                                                                    <label>Networker</label>
                                                                    <input id="chkNetworker" type="checkbox" class="form-check-input">
                                                            </div>
                                                            <div class="col-md-4" style="display: flex; justify-content: space-between;">
                                                                    <label>C. Inteligente</label>
                                                                    <input id="chkInteligente" type="checkbox" class="form-check-input">
                                                            </div>
                                                            <div class="col-md-4" style="display: flex; justify-content: space-between;">
                                                                    <label>Consultor</label>
                                                                    <input id="chkConsultor" type="checkbox" class="form-check-input">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-4" style="display: flex; justify-content: space-between;">
                                                                    <label>Paquete 20%</label>
                                                                    <input id="chkPaquete20" type="checkbox" class="form-check-input">
                                                            </div>
                                                            <div class="col-md-4" style="display: flex; justify-content: space-between;">
                                                                    <label>Paquete 25%</label>
                                                                    <input id="chkPaquete25" type="checkbox" class="form-check-input">
                                                            </div>
                                                            <div class="col-md-4" style="display: flex; justify-content: space-between;">
                                                                    <label>Paquete 30%</label>
                                                                    <input id="chkPaquete30" type="checkbox" class="form-check-input">
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
                                    <!-- Modal -->
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="box-body">
                                <div class="form-group"></div>
                            </div>
                        </div>
                        <table id="tbl_archivo" class="table table-bordered table-hover text-center">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Tipo Archivo</th>
                                    <th>Archivo</th>
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
        <script src="js/sweetAlert.js" type="text/javascript"> </script>
        <script src="js/plugins/datatables/jquery.dataTables.js"></script>
        <script src="js/plugins/datatables/dataTables.bootstrap.js"></script>
        <script src="js/GestionarDocumentosMarketing.js?v3"></script>
        <script type="text/javascript">
            window.onload = function () {
                document.getElementById("gestArchImage").style.color = '#79B729';
                document.getElementById("gestArchImage").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';

                document.getElementById("gestDocuMark").style.color = '#79B729';
                document.getElementById("gestDocuMark").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';
            }
        </script>
    </section>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="footer" runat="server">
</asp:Content>
