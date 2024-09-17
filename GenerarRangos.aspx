<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="GenerarRangos.aspx.cs" Inherits="SantaNaturaNetworkV3.GenerarRangos" ClientIDMode="Static" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <link href="css/bootstrap-toggle.min.css" rel="stylesheet">
    <link href="css/datatables/dataTables.bootstrap.css" rel="stylesheet" />
    <section class="content-header">
        <h1 style="text-align: center">Reporte de Compras</h1>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="box box-success">
                    <div class="box box-header">
                        <h3 class="box-title">Listado de Compras</h3>
                    </div>
                    <div style="padding-left: 11px; margin-bottom: 30px" class="col-md-12">
                        <div class="col-md-6">
                            <asp:Button runat="server" Text="Rangos" CssClass="btn btn-success" Style="font-weight: bold; margin-right: 10px; margin-top:20px" ID="btnRango" />
                            <asp:Button runat="server" Text="Re-Calculo" CssClass="btn btn-success" Style="font-weight: bold; margin-right: 10px; margin-top:20px" ID="btnRecalculo" />
                            <asp:Button runat="server" Text="Generar VQ" CssClass="btn btn-success" Style="font-weight: bold; margin-right: 10px; margin-top:20px" ID="btnVQ" Visible="false"/>
                            <asp:Button runat="server" Text="Comisiones" CssClass="btn btn-twitter" Style="font-weight: bold; margin-right: 10px; margin-top:20px" ID="btnComisiones" Visible="false"/>
                            <asp:Button runat="server" Text="C. Afiliacion" CssClass="btn btn-twitter" Style="font-weight: bold; margin-right: 10px; margin-top:20px" ID="btnComAfi" />
                            <asp:Button runat="server" Text="C. Tiburon" CssClass="btn btn-twitter" Style="font-weight: bold; margin-right: 10px; margin-top:20px" ID="btnComTibu" Visible="false"/>
                            <asp:Button runat="server" Text="C. Mercadeo" CssClass="btn btn-twitter" Style="font-weight: bold; margin-right: 10px; margin-top:20px" ID="btnComMerc" />
                            <asp:Button runat="server" Text="C. Bronce" CssClass="btn btn-twitter" Style="font-weight: bold; margin-right: 10px; margin-top:20px" ID="btnComBron" />
                            <asp:Button runat="server" Text="C. Escolaridad" CssClass="btn btn-twitter" Style="font-weight: bold; margin-right: 10px; margin-top:20px" ID="btnEsco" />
                            <asp:Button runat="server" Text="C. Matricial" CssClass="btn btn-twitter" Style="font-weight: bold; margin-right: 10px; margin-top:20px" ID="btnComMatri" />
                            <asp:Button runat="server" Text="C. Unilevel" CssClass="btn btn-twitter" Style="font-weight: bold; margin-right: 10px; margin-top:20px" ID="btnComUnilevel" />
                            <asp:Button runat="server" Text="C. Cliente I." CssClass="btn btn-twitter" Style="font-weight: bold; margin-right: 10px; margin-top:20px" ID="btnComClienteI" />
                            <asp:Button runat="server" Text="C. Consultor" CssClass="btn btn-twitter" Style="font-weight: bold; margin-right: 10px; margin-top:20px" ID="btnComConsultor" />
                            <asp:Button runat="server" Text="C. Tiburon" CssClass="btn btn-twitter" Style="font-weight: bold; margin-right: 10px; margin-top:20px" ID="btnComTiburon1" />
                            <asp:Button runat="server" Text="C. Tiburon E." CssClass="btn btn-twitter" Style="font-weight: bold; margin-right: 10px; margin-top:20px" ID="btnComTiburon2" />
                            <asp:Button runat="server" Text="Monto C.CI" CssClass="btn btn-instagram" Style="font-weight: bold; margin-right: 10px; margin-top:20px; display:none;" ID="btnMontoCI" />
                            <button type="button" runat="server" class="btn btn-instagram" style="font-weight: bold; margin-right: 10px; margin-top:20px; display:none;" id="btnActRanCom" data-toggle="modal" data-target="#exampleModal">Act. Rango C. </button>
                            <asp:Button runat="server" Text="Generar Regalos" CssClass="btn btn-instagram" Style="font-weight: bold; margin-right: 10px; margin-top:20px;" ID="btnTiburonPrueba" Visible="false"/>
                        </div>
                        <%--<div class="col-md-1">
                            <label>Periodo</label>
                        </div>--%>
                        <div class="col-md-2">
                            <label>Periodo Puntos</label>
                            <asp:DropDownList runat="server" ID="cboPeriodo" CssClass="form-control" BackColor="LightGreen" />
                        </div>
                        <div class="col-md-2">
                            <label>Periodo Comision</label>
                            <asp:DropDownList runat="server" ID="cboPeriodoComision" CssClass="form-control" BackColor="LightGreen" />
                        </div>

                    </div>
                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="container modal-dialog" id="modalTamano" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 style="text-align: center; font-weight: bold" class="modal-title" id="exampleModalLabel">Actualizar Rangos en Comision</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label>Periodo Rango</label>
                                            <asp:DropDownList runat="server" ID="ddlPeriodoRango" CssClass="form-control" BackColor="LightGreen" />
                                        </div>
                                        <div class="col-md-4">
                                            <label>Periodo Comision</label>
                                            <asp:DropDownList runat="server" ID="ddlPeriodoComision" CssClass="form-control" BackColor="LightGreen" />
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button id="btnId" type="reset" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                    <button id="btnActualizar" type="button" class="btn btn-success">Actualizar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Modal -->
                    <div class="box-body table-responsive">

                        <table id="tbl_rangos" class="table table-bordered table-hover text-center">
                            <thead>
                                <tr>
                                    <th>Usuario</th>
                                    <th>Proceso</th>
                                    <th>Mensaje </th>
                                    <th>Fecha</th>
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
        <script src="http://cdn.datatables.net/plug-ins/725b2a2115b/sorting/date-eu.js"></script>
        <script src="js/CalculaRangov6.js?V3" type="text/javascript"></script>
        <script type="text/javascript">
            $(document).ready(function () {
            });

            window.onload = function () {
                document.getElementById("gestMulti").style.color = '#79B729';
                document.getElementById("gestMulti").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';

                document.getElementById("geneRanComi").style.color = '#79B729';
                document.getElementById("geneRanComi").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';
            }
        </script>
    </section>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="footer" runat="server">
</asp:Content>
