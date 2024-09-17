<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="GenerarPacketeProducto.aspx.cs" Inherits="SantaNaturaNetwork.GenerarPacketeProducto" ClientIDMode="Static" %>

<%@ OutputCache Location="None" NoStore="true" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <link href="css/bootstrap-toggle.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/file-upload.css" />
    <link href="css/datatables/dataTables.bootstrap.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js" type="text/javascript"></script>
    <section class="content-header">
        <h1 style="text-align: center">Gestion de Paquetes</h1>
    </section>
    <style>
        #modalTamano {
            width: 62% !important;
        }

        .ui-front {
            z-index: 2000 !important;
        }

        .table > tbody > tr > td, .table > tbody > tr > th, .table > tfoot > tr > td,
        .table > tfoot > tr > th, .table > thead > tr > td, .table > thead > tr > th {
            vertical-align: middle;
        }

        .switchTamano {
            width: 25rem !important;
            top: -1.1rem;
        }

        .modal-body {
            height: 470px;
            overflow: hidden;
        }

            .modal-body:hover {
                overflow-y: auto;
            }

        
    </style>
    <section class="content">
        <div class="row">
            <div class="col-xs-12">
                <div class="box box-success">
                    <div class="box box-header">
                        <h3 class="box-title">Lista de Paquetes</h3>
                    </div>
                    <div style="padding-bottom: 13px; padding-left: 11px">
                        <button type="button" class="btn btn-success" style="font-weight: bold" data-toggle="modal" data-target="#exampleModal" id="btnNuevoPaquete">
                            Nuevo Paquete
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
                                                    <h4 style="text-align: center; font-weight: bold" class="modal-title" id="exampleModalLabel">Nuevo Paquete</h4>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="modal-body1">
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <label>Nombre de Paquete</label>
                                                                <asp:TextBox ID="txtNombrePaquete" BackColor="LightGreen" placeholder="Nombre" CssClass="form-control" runat="server" />
                                                            </div>
                                                            <div class="col-md-6">
                                                                <label>Observacion</label>
                                                                <asp:TextBox runat="server" ID="txtObservacion" TextMode="MultiLine" Rows="2" CssClass="form-control" BackColor="LightGreen"></asp:TextBox>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <div class="row">
                                                            <div class="box-body table-responsive">
                                                                <table id="tblRegistroProducto" class="table table-bordered table-hover text-center">
                                                                    <thead>
                                                                        <tr>
                                                                            <th style="width: 30%">Pais</th>
                                                                            <th style="width: 30%">Dato1</th>
                                                                            <th style="width: 30%">Estado y Cantidad</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody id="tbl_body_table2">
                                                                        <tr>
                                                                            <th>Perú</th>
                                                                            <th>Datos del Paquete para Perú
                                                                            </th>
                                                                            <th>
                                                                                <div class="checkbox switchTamano" id="switchTamano1">
                                                                                    <input id="tooglePeru" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                                                </div>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-1</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDPeru1"  BackColor="LightGreen" placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioPeru1" MaxLength="6" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-2</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDPeru2" BackColor="LightGreen"  placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioPeru2" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-3</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDPeru3" BackColor="LightGreen"  placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioPeru3" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-4</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDPeru4" BackColor="LightGreen"  placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioPeru4" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-5</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDPeru5" BackColor="LightGreen"  placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioPeru5" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Bolivia</th>
                                                                            <th>Datos del Paquete para Bolivia
                                                                            </th>
                                                                            <th>
                                                                                <div class="checkbox switchTamano" id="switchTamano2">
                                                                                    <input id="toogleBolivia" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                                                </div>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-1</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDBolivia1" BackColor="LightGreen"  placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioBolivia1" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-2</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDBolivia2" BackColor="LightGreen"  placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioBolivia2" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-3</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDBolivia3" BackColor="LightGreen"  placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioBolivia3" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-4</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDBolivia4" BackColor="LightGreen"  placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioBolivia4" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-5</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDBolivia5" BackColor="LightGreen"  placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioBolivia5" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Ecuador</th>
                                                                            <th>Datos del Paquete para Ecuador
                                                                            </th>
                                                                            <th>
                                                                                <div class="checkbox switchTamano" id="switchTamano3">
                                                                                    <input id="toogleEcuador" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                                                </div>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-1</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDEcuador1" BackColor="LightGreen"  placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioEcuador1" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-2</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDEcuador2" BackColor="LightGreen"  placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioEcuador2" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-3</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDEcuador3" BackColor="LightGreen"  placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioEcuador3" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-4</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDEcuador4" BackColor="LightGreen"  placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioEcuador4" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-5</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDEcuador5" BackColor="LightGreen"  placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioEcuador5" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Panama</th>
                                                                            <th>Datos del Paquete para Panama
                                                                            </th>
                                                                            <th>
                                                                                <div class="checkbox switchTamano" id="switchTamano4">
                                                                                    <input id="tooglePanama" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                                                </div>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-1</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDPanama1" BackColor="LightGreen"  placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioPanama1" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-2</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDPanama2" BackColor="LightGreen"  placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioPanama2" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-3</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDPanama3" BackColor="LightGreen"  placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioPanama3" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-4</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDPanama4" BackColor="LightGreen"  placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioPanama4" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-5</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDPanama5" BackColor="LightGreen"  placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioPanama5" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Costa Rica</th>
                                                                            <th>Datos del Paquete para Costa Rica
                                                                            </th>
                                                                            <th>
                                                                                <div class="checkbox switchTamano" id="switchTamano5">
                                                                                    <input id="toogleCR" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                                                </div>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-1</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDCR1" BackColor="LightGreen"  placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioCR1" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-2</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDCR2" BackColor="LightGreen"  placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioCR2" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-3</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDCR3" BackColor="LightGreen"  placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioCR3" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-4</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDCR4" BackColor="LightGreen"  placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioCR4" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-5</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDCR5" BackColor="LightGreen"  placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioCR5" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Argentina</th>
                                                                            <th>Datos del Paquete para Argentina
                                                                            </th>
                                                                            <th>
                                                                                <div class="checkbox switchTamano" id="switchTamano6">
                                                                                    <input id="toogleArgentina" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                                                </div>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-1</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDArgentina1" BackColor="LightGreen"  placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioArgentina1" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-2</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDArgentina2" BackColor="LightGreen"  placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioArgentina2" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-3</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDArgentina3" BackColor="LightGreen"  placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioArgentina3" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-4</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDArgentina4" BackColor="LightGreen"  placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioArgentina4" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-5</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDArgentina5" BackColor="LightGreen"  placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioArgentina5" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Chile</th>
                                                                            <th>Datos del Paquete para Chile
                                                                            </th>
                                                                            <th>
                                                                                <div class="checkbox switchTamano" id="switchTamano7">
                                                                                    <input id="toogleChile" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                                                </div>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-1</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDChile1" BackColor="LightGreen"  placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioChile1" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-2</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDChile2" BackColor="LightGreen"  placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioChile2" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-3</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDChile3" BackColor="LightGreen"  placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioChile3" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-4</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDChile4" BackColor="LightGreen"  placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioChile4" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>P-5</th>
                                                                            <th>
                                                                                <asp:TextBox ID="txtIDChile5" BackColor="LightGreen"  placeholder="IdPerushop" class="form-control" runat="server" />
                                                                            </th>
                                                                            <th>
                                                                                <asp:TextBox runat="server" ID="txtPrecioChile5" MaxLength="6" placeholder="Precio" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                                            </th>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button id="btnId" type="reset" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                                    <button id="btnRegistrar" type="button" class="btn btn-success">Aceptar</button>
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
                        <table id="tbl_paquetes" class="table table-bordered table-hover text-center">
                            <thead>
                                <tr>
                                    <th>ID Paquete</th>
                                    <th>Nombre</th>
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
        <script src="js/Paquete.js" type="text/javascript"></script>

        <script>
            window.onload = function () {
                document.getElementById("gestProducProm").style.color = '#79B729';
                document.getElementById("gestProducProm").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';

                document.getElementById("paquetes").style.color = '#79B729';
                document.getElementById("paquetes").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';
            }
        </script>
    </section>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="footer" runat="server">
</asp:Content>
