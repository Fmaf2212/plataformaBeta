﻿<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="GestionarPremios.aspx.cs" Inherits="SantaNaturaNetworkV3.GestionarPremios" ClientIDMode="Static" %>
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
        <h1 style="text-align: center">Gestionar Anuncio de Premios</h1>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-xs-12">
                <div class="box box-success">
                    <div class="box box-header">
                        <h3 class="box-title">Lista de pdf premios</h3>
                    </div>
                    <div style="padding-bottom: 2px; padding-left: 11px">
                        <button type="button" class="btn btn-success" style="font-weight: bold" data-toggle="modal" data-target="#exampleModal" id="btnNuevoPDF">
                            Nuevo PDF      
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
                                                    <h4 style="text-align: center; font-weight: bold" class="modal-title" id="exampleModalLabel">PDF Premio</h4>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="modal-body1">
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <div class="form-group">
                                                                    <label>Nombre de Anuncio</label>
                                                                    <asp:TextBox runat="server" ID="txtNombre" CssClass="form-control" BackColor="LightGreen"></asp:TextBox>
                                                                    <br>
                                                                    <label>Vigencia</label>
                                                                    <asp:TextBox runat="server" ID="txtVigencia" CssClass="form-control" BackColor="LightGreen"></asp:TextBox>
                                                                    <br>
                                                                    <label>Pais</label>
                                                                    <select id="cboPais" class="form-control" style="background-color: lightgreen"></select>
                                                                    <br>
                                                                    <label>Adjunte PDF</label>
                                                                    <label style="width: auto; margin-left:20px;" class="file-upload btn btn-success">
                                                                        Ingrese el archivo PDF ...
                                                                                    <asp:FileUpload ID="archivoPDF" runat="server" accept=".pdf" />
                                                                    </label>

                                                                </div>
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
                        <table id="tbl_pdf" class="table table-bordered table-hover text-center">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Vigencia</th>
                                    <th>Archivo</th>
                                    <th>Pais</th>
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
        <script src="js/sweetAlert.js" type="text/javascript"> </script>
        <script src="js/plugins/datatables/jquery.dataTables.js"></script>
        <script src="js/plugins/datatables/dataTables.bootstrap.js"></script>
        <script src="js/GestionarPremiosPDF.js?v6"></script>
        <script type="text/javascript">
            window.onload = function () {
                document.getElementById("gestArchImage").style.color = '#79B729';
                document.getElementById("gestArchImage").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';

                document.getElementById("gestPDFPrem").style.color = '#79B729';
                document.getElementById("gestPDFPrem").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';
            }
        </script>
    </section>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="footer" runat="server">
</asp:Content>
