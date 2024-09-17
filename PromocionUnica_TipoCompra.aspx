<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="PromocionUnica_TipoCompra.aspx.cs" Inherits="SantaNaturaNetworkV3.PromocionUnica_TipoCompra" ClientIDMode="Static" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <link href="css/bootstrap-toggle.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/css/select2.min.css" rel="stylesheet" />
    <section class="content-header">
        <h1 style="text-align: center">Promoción Unica por Tipo Compra</h1>
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
                        <button type="button" class="btn btn-success" style="font-weight: bold" data-toggle="modal" data-target="#exampleModal" id="btnNuevaPromo">
                            Nueva Promoción
                        </button>
                    </div>
                    <div class="box-body table-responsive">
                        <table id="tbl_promo" class="table table-bordered table-hover text-center">
                            <thead>
                                <tr>
                                    <th>ID Promo</th>
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
                                    <h4 style="text-align: center; font-weight: bold" class="modal-title" id="exampleModalLabel">Nueva Promoción</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="row" style="display: flex; justify-content: center;">
                                        <div class="col-md-4">
                                            <label>Pais</label>
                                            <select runat="server" id="cboPais" class="form-control js-example-templating" style="width: 235px" onchange="listaProductos(this);" />
                                        </div>
                                    </div>
                                    <div class="row" style="display: flex; justify-content: center; margin-top: 30px;" id="dvProd">
                                        <div class="col-md-4">
                                            <label>Producto</label>
                                            <asp:DropDownList runat="server" ID="cboProducto" class="form-control js-example-templating" Style="width: 235px" />
                                        </div>
                                    </div>
                                    <div class="row" style="margin-top: 30px; display: flex; justify-content: center;">
                                        <%--<div class="col-md-4">
                                            <label>Tipo de Compra</label>
                                            <select id="cboTipoCompra" class="select form-control">
                                                <option value="01">Afiliación</option>
                                                <%--<option value="02">Upgrade</option>--%>
                                        <%--<option value="03">Consumo</option>
                                            </select>
                                        </div>--%>
                                        <div class="col-md-4">
                                            <label>Máximo Unds.</label>
                                            <asp:TextBox runat="server" ID="txtMaxUnidades" CssClass="form-control" />
                                        </div>
                                        <div class="col-md-2">
                                            <label>Estado</label>
                                            <div class="checkbox switchTamano">
                                                <input id="chkEstado" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <label>Obligatorio</label>
                                            <div class="checkbox switchTamano">
                                                <input id="chkObligatorio" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row" style="display: flex; justify-content: center; margin-top: 15px;">
                                        <div class="col-md-3" style="display: flex; justify-content: space-between;">
                                            <label>Socio</label>
                                            <input id="chkSocio" type="checkbox" class="form-check-input">
                                        </div>
                                        <div class="col-md-3" style="display: flex; justify-content: space-between;">
                                            <label>Consultor</label>
                                            <input id="chkConsultor" type="checkbox" class="form-check-input">
                                        </div>
                                        <div class="col-md-3" style="display: flex; justify-content: space-between;">
                                            <label>C. Inteligente</label>
                                            <input id="chkC_Inteligente" type="checkbox" class="form-check-input">
                                        </div>
                                        <div class="col-md-3" style="display: flex; justify-content: space-between;">
                                            <label>Venta Directa</label>
                                            <input id="chkTC_VD" type="checkbox" class="form-check-input">
                                        </div>
                                    </div>
                                    <div class="row" style="margin-top: 15px;">
                                        <div class="col-md-4" style="display: flex; justify-content: space-between;">
                                            <label>Afiliación Consumidor</label>
                                            <input id="chkBasico" type="checkbox" class="form-check-input">
                                        </div>
                                        <div class="col-md-4" style="display: flex; justify-content: space-between;">
                                            <label>Afiliación Profesional</label>
                                            <input id="chkProfesional" type="checkbox" class="form-check-input">
                                        </div>
                                        <div class="col-md-4" style="display: flex; justify-content: space-between;">
                                            <label>Afiliación Empresarial</label>
                                            <input id="chkEmpresarial" type="checkbox" class="form-check-input">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4" style="display: flex; justify-content: space-between;">
                                            <label>Afiliación Millonario</label>
                                            <input id="chkMillonario" type="checkbox" class="form-check-input">
                                        </div>
                                        <div class="col-md-4" style="display: flex; justify-content: space-between;">
                                            <label>Afiliación Imperial</label>
                                            <input id="chkImperial" type="checkbox" class="form-check-input">
                                        </div>
                                        <div class="col-md-4" style="display: flex; justify-content: space-between;">
                                            <label>Afiliación Consultor MLM</label>
                                            <input id="chkAf_ConsultorMLM" type="checkbox" class="form-check-input">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4" style="display: flex; justify-content: space-between;">
                                            <label>Afiliación C. Inteligente</label>
                                            <input id="chkAf_Inteligente" type="checkbox" class="form-check-input">
                                        </div>
                                        <div class="col-md-4" style="display: flex; justify-content: space-between;">
                                            <label>Afiliación Networker</label>
                                            <input id="chkNetworker" type="checkbox" class="form-check-input">
                                        </div>
                                        <div class="col-md-4" style="display: flex; justify-content: space-between;">
                                            <label>Afiliación VD</label>
                                            <input id="chkVD" type="checkbox" class="form-check-input">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4" style="display: flex; justify-content: space-between;">
                                            <label>Consumo</label>
                                            <input id="chkConsumo" type="checkbox" class="form-check-input">
                                        </div>
                                    </div>
                                    <div class="row" style="display: flex; justify-content: center; margin-top: 15px;">
                                        <div class="col-md-4" style="display: flex; justify-content: space-between;">
                                            <label>UPG: Consu.-Prof.</label>
                                            <input id="chkBasico_Profesional" type="checkbox" class="form-check-input">
                                        </div>
                                        <div class="col-md-4" style="display: flex; justify-content: space-between;">
                                            <label>UPG: Consu.-Empr.</label>
                                            <input id="chkBasico_Empresarial" type="checkbox" class="form-check-input">
                                        </div>
                                        <div class="col-md-4" style="display: flex; justify-content: space-between;">
                                            <label>UPG: Consu.-Mill.</label>
                                            <input id="chkBasico_Millonario" type="checkbox" class="form-check-input">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4" style="display: flex; justify-content: space-between;">
                                            <label>UPG: Consu.-Imp.</label>
                                            <input id="chkBasico_Imperial" type="checkbox" class="form-check-input">
                                        </div>
                                        <div class="col-md-4" style="display: flex; justify-content: space-between;">
                                            <label>UPG: Prof.-Empr.</label>
                                            <input id="chkProfesional_Empresarial" type="checkbox" class="form-check-input">
                                        </div>
                                        <div class="col-md-4" style="display: flex; justify-content: space-between;">
                                            <label>UPG: Prof.-Mill.</label>
                                            <input id="chkProfesional_Millonario" type="checkbox" class="form-check-input">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4" style="display: flex; justify-content: space-between;">
                                            <label>UPG: Prof.-Imp.</label>
                                            <input id="chkProfesional_Imperial" type="checkbox" class="form-check-input">
                                        </div>
                                        <div class="col-md-4" style="display: flex; justify-content: space-between;">
                                            <label>UPG: Empr.-Mill.</label>
                                            <input id="chkEmpresarial_Millonario" type="checkbox" class="form-check-input">
                                        </div>
                                        <div class="col-md-4" style="display: flex; justify-content: space-between;">
                                            <label>UPG: Empr.-Imp.</label>
                                            <input id="chkEmpresarial_Imperial" type="checkbox" class="form-check-input">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4" style="display: flex; justify-content: space-between;">
                                            <label>UPG: Mill.-Imp.</label>
                                            <input id="chkMillonario_Imperial" type="checkbox" class="form-check-input">
                                        </div>
                                        <div class="col-md-4" style="display: flex; justify-content: space-between;">
                                            <label>UPG: Netw.-Mill.</label>
                                            <input id="chkNetworker_Millonario" type="checkbox" class="form-check-input">
                                        </div>
                                        <div class="col-md-4" style="display: flex; justify-content: space-between;">
                                            <label>UPG: Netw.-Imp.</label>
                                            <input id="chkNetworker_Imperial" type="checkbox" class="form-check-input">
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
        <script src="js/PromocionUnica_Paquete.js?v6" type="text/javascript"></script>
        <script type="text/javascript">

            $(".js-example-templating").select2({
                dropdownParent: $('#exampleModal')
            });
            window.onload = function () {
                document.getElementById("gestProducProm").style.color = '#79B729';
                document.getElementById("gestProducProm").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';

                document.getElementById("PromUnicaTC").style.color = '#79B729';
                document.getElementById("PromUnicaTC").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';
            }
        </script>
    </section>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="footer" runat="server">
</asp:Content>
