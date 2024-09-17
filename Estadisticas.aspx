<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="Estadisticas.aspx.cs" Inherits="SantaNaturaNetwork.Estadisticas" ClientIDMode="Static" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

    <style>
        .ddlTablaDeCalificacion {
            border-radius: 4px 5px;
        }

        .lblMedioDePago {
            margin-left: auto
        }

        .table > tbody > tr > td, .table > tbody > tr > th, .table > tfoot > tr > td,
        .table > tfoot > tr > th, .table > thead > tr > td, .table > thead > tr > th {
            vertical-align: middle;
        }
    </style>

    <link href="css/proyecto2/tienda.css" rel="stylesheet" />
    <link href="css/proyecto2/vendors/elegant-icon/style.css" rel="stylesheet" />
    <link href="https://unpkg.com/gijgo@1.9.13/css/gijgo.min.css" rel="stylesheet" type="text/css" />
    <link href="css/datatables/dataTables.bootstrap.css" rel="stylesheet" />
    <link href="css/AdminLTE-v1.css" rel="stylesheet" type="text/css" />

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <h2 style="text-align: center; margin-top: 100px">ESTADÍSTICAS</h2>

    <div class="row" style="margin-top: 50px; padding-bottom: 40px; display: none">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div id="Div1" runat="server" style="display: block">
                <asp:Label Style="margin-left: 40px" ID="Label1" runat="server" Text="Periodo:" CssClass="lblPeriodo"></asp:Label>
                <asp:DropDownList Style="margin-left: 40px; height: 31px; box-shadow: 0 0 12px 2px #c2b917" ID="idTablaDeCalificacion" BackColor="White" CssClass="ddlTablaDeCalificacion" Width="250px" ForeColor="#7d6754" Font-Names="Andalus" runat="server">
                </asp:DropDownList>
            </div>
        </div>
    </div>

    <div style="border: 1px solid">
        <br />
        <div class="row">
                <br>
                <div class="col-md-12">
                    <div class="box box-success">
                        <div role="tabpanel">
                            <ul class="nav nav-tabs" role="tablist">
                                <li role="presentation" class="active"><a href="#panel1" aria-controls="panel1" data-toggle="tab" role="tab" style="color: forestgreen"><b>Socios</b></a></li>
                                <li role="presentation"><a href="#panel2" aria-controls="panel2" data-toggle="tab" onclick="lista2();" role="tab" style="color: forestgreen"><b>Consultores</b></a></li>
                                <li role="presentation"><a href="#panel3" aria-controls="panel3" data-toggle="tab" onclick="lista3();" role="tab" style="color: forestgreen"><b>Consumidores Inteligentes</b></a></li>
                            </ul>
                            <div class="tab-content" style="height:850px">
                                <div role="tabpanel" class="tab-pane active" id="panel1" style="height: 530px">
                                    <div class="modal-body">
                                        <div class="box-body table-responsive">
                                            <div>
                                                <div class="box-body">
                                                    <div class="form-group">
                                                    </div>
                                                </div>
                                            </div>
                                            <table id="tbl_socios" class="table table-bordered table-hover text-center col-md-11">
                                                <thead>
                                                    <tr>
                                                        <th style="font-size: 1.4rem">NIVEL</th>
                                                        <th style="font-size: 1.4rem">NOMBRES</th>
                                                        <th style="font-size: 1.4rem">TELÉFONO</th>
                                                        <th style="font-size: 1.4rem">P.P.</th>
                                                        <th style="font-size: 1.4rem">V.P.</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="tbl_body_table">
                                                    <!--Data por medio de Ajax-->
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" class="tab-pane" id="panel2">
                                    <div class="modal-body">
                                        <div class="box-body table-responsive">
                                            <div>
                                                <div class="box-body">
                                                    <div class="form-group">
                                                    </div>
                                                </div>
                                            </div>
                                            <table id="tbl_consultores" class="table table-bordered table-hover text-center col-md-11">
                                                <thead>
                                                    <tr>
                                                        <th style="font-size: 1.4rem">NIVEL</th>
                                                        <th style="font-size: 1.4rem">NOMBRES</th>
                                                        <th style="font-size: 1.4rem">TELEFONO</th>
                                                        <th style="font-size: 1.4rem">P.P.</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="tbl_body_tables">
                                                    <!--Data por medio de Ajax-->
                                                </tbody>
                                            </table>
                                        </div>
                                        
                                    </div>

                                </div>
                                <div role="tabpanel" class="tab-pane" id="panel3">
                                    <div class="modal-body">
                                        <div class="box-body table-responsive">
                                            <div>
                                                <div class="box-body">
                                                    <div class="form-group">
                                                    </div>
                                                </div>
                                            </div>
                                            <table id="tbl_cci" class="table table-bordered table-hover text-center col-md-11">
                                                <thead>
                                                    <tr>
                                                        <th style="font-size: 1.4rem">NIVEL</th>
                                                        <th style="font-size: 1.4rem">NOMBRES</th>
                                                        <th style="font-size: 1.4rem">TELEFONO</th>
                                                        <th style="font-size: 1.4rem">P.P.</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="tbl_body_tablef">
                                                    <!--Data por medio de Ajax-->
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <br />
    </div>

    <script src="https://unpkg.com/gijgo@1.9.13/js/gijgo.min.js" type="text/javascript"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <%--<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>--%>
    <script src="js/AdminLTE/app.js"></script>
    <script src="js/plugins/datatables/jquery.dataTables.js"></script>
    <script src="js/plugins/datatables/dataTables.bootstrap.js"></script>
    <script src="js/Estadisticas.js"></script>
    <script>
        window.onload = function () {
            document.getElementById("idMenuRed").style.color = 'white';
            document.getElementById("idMenuRed").style.borderBottom = '3px solid white';

            document.getElementById("idSubMenuEstadisticas").style.color = 'white';
            document.getElementById("idSubMenuEstadisticas").style.borderBottom = '3px solid white';
        }
    </script>


    <%--<script src="js/bootstrap.min.js"></script>--%>
</asp:Content>
