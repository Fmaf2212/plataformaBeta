<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="Ofertas.aspx.cs" Inherits="SantaNaturaNetwork.Ofertas" ClientIDMode="Static" %>

<%@ OutputCache Location="None" NoStore="true" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
    <link href="css/bootstrap-toggle.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js" type="text/javascript"></script>
    <section class="content-header">
        <h1 style="text-align: center">Ofertas</h1>
    </section>
    <style>
        #modalTamano {
            width: auto !important;
        }
        .ui-front {
            z-index: 2000 !important;
        }

        .switchTamano {
            width: 5rem !important;
            top: -1rem;
        }

        .modal-body {
            height: 620px;
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
                        <h3 class="box-title">Lista de Ofertas</h3>
                    </div>
                    <div style="padding-bottom: 13px; padding-left: 11px">
                        <button type="button" class="btn btn-success" style="font-weight: bold" data-toggle="modal" data-target="#exampleModal" id="btnNuevaOferta">
                            Nueva Oferta
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
                                                    <h4 style="text-align: center; font-weight: bold" class="modal-title" id="exampleModalLabel">Nueva Oferta</h4>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <label>Nombre Promocion</label>
                                                            <asp:TextBox runat="server" ID="txtNombrePromo" CssClass="form-control" BackColor="LightGreen"/>
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
                                                        <div class="col-md-12">
                                                            <h5><b>Promoción para Consumo</b></h5>
                                                        </div>
                                                    </div>
                                                    <div class="row" style="padding-top: 8px">
                                                        <div class="col-md-2">
                                                            <label>Pts N°1</label>
                                                            <asp:TextBox runat="server" ID="txtPuntos1" CssClass="form-control" BackColor="LightGreen"></asp:TextBox>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <label>Producto 1</label>
                                                            <asp:TextBox runat="server" ID="txtProducto1" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                        </div>
                                                        <div class="col-md-2" style="width: 13.33333333%">
                                                            <label>Estado 1</label>
                                                            <div class="checkbox switchTamano">
                                                                <input id="chkEstado1" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-2" style="width: 13.33333333%">
                                                            <label>PxC 1</label>
                                                            <div class="checkbox switchTamano">
                                                                <input id="chkPorCada1" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-2" style="width: 13.33333333%">
                                                            <label>Regalo 1</label>
                                                            <div class="checkbox switchTamano" >
                                                                <input id="chkRegalo1" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row" style="padding-top: 8px">
                                                        <div class="col-md-2">
                                                            <label>Pts N°2</label>
                                                            <asp:TextBox runat="server" ID="txtPuntos2" CssClass="form-control" BackColor="LightGreen"></asp:TextBox>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <label>Producto 2</label>
                                                            <asp:TextBox runat="server" ID="txtProducto2" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                        </div>
                                                        <div class="col-md-2" style="width: 13.33333333%">
                                                            <label>Estado 2</label>
                                                            <div class="checkbox switchTamano">
                                                                <input id="chkEstado2" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-2" style="width: 13.33333333%">
                                                            <label>PxC 2</label>
                                                            <div class="checkbox switchTamano">
                                                                <input id="chkPorCada2" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-2" style="width: 13.33333333%">
                                                            <label>Regalo 2</label>
                                                            <div class="checkbox switchTamano">
                                                                <input id="chkRegalo2" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row" style="padding-top: 8px">
                                                        <div class="col-md-2">
                                                            <label>Pts N°3</label>
                                                            <asp:TextBox runat="server" ID="txtPuntos3" CssClass="form-control" BackColor="LightGreen"></asp:TextBox>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <label>Producto 3</label>
                                                            <asp:TextBox runat="server" ID="txtProducto3" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                        </div>
                                                        <div class="col-md-2" style="width: 13.33333333%">
                                                            <label>Estado 3</label>
                                                            <div class="checkbox switchTamano">
                                                                <input id="chkEstado3" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-2" style="width: 13.33333333%">
                                                            <label>PxC 3</label>
                                                            <div class="checkbox switchTamano">
                                                                <input id="chkPorCada3" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-2" style="width: 13.33333333%">
                                                            <label>Regalo 3</label>
                                                            <div class="checkbox switchTamano">
                                                                <input id="chkRegalo3" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row" style="padding-top: 8px">
                                                        <div class="col-md-2">
                                                            <label>Pts N°4</label>
                                                            <asp:TextBox runat="server" ID="txtPuntos4" CssClass="form-control" BackColor="LightGreen"></asp:TextBox>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <label>Producto 4</label>
                                                            <asp:TextBox runat="server" ID="txtProducto4" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                        </div>
                                                        <div class="col-md-2" style="width: 13.33333333%">
                                                            <label>Estado 4</label>
                                                            <div class="checkbox switchTamano">
                                                                <input id="chkEstado4" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-2" style="width: 13.33333333%">
                                                            <label>PxC 4</label>
                                                            <div class="checkbox switchTamano">
                                                                <input id="chkPorCada4" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-2" style="width: 13.33333333%">
                                                            <label>Regalo 4</label>
                                                            <div class="checkbox switchTamano">
                                                                <input id="chkRegalo4" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <h5><b>Promoción para Afiliaciones</b></h5>
                                                        </div>
                                                    </div>
                                                    <div class="row" style="padding-top: 8px">
                                                        <div class="col-md-2" style="padding-top: 28px">
                                                            <label>Emprendedor1</label>
                                                        </div>
                                                        <div class="col-md-2">
                                                            <label>Puntos1</label>
                                                            <asp:TextBox runat="server" ID="txtPunEmprendedor" CssClass="form-control" BackColor="LightGreen"></asp:TextBox>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <label>Producto1</label>
                                                            <asp:TextBox runat="server" ID="txtProEmprendedor" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                        </div>
                                                        <div class="col-md-2">
                                                            <label>Estado1</label>
                                                            <div class="checkbox switchTamano">
                                                                <input id="chkEmprendedor" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-2">
                                                            <label>Regalo1</label>
                                                            <div class="checkbox switchTamano">
                                                                <input id="chkRegaloBa1" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row" style="padding-top: 5px">
                                                        <div class="col-md-2" style="padding-top: 28px">
                                                            <label>Emprendedor2</label>
                                                        </div>
                                                        <div class="col-md-2">
                                                            <label>Puntos2</label>
                                                            <asp:TextBox runat="server" ID="txtPunEmprendedor2" CssClass="form-control" BackColor="LightGreen"></asp:TextBox>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <label>Producto2</label>
                                                            <asp:TextBox runat="server" ID="txtProEmprendedor2" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                        </div>
                                                        <div class="col-md-2">
                                                            <label>Estado2</label>
                                                            <div class="checkbox switchTamano">
                                                                <input id="chkEmprendedor2" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-2">
                                                            <label>Regalo2</label>
                                                            <div class="checkbox switchTamano">
                                                                <input id="chkRegaloBa2" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row" style="padding-top: 5px">
                                                        <div class="col-md-2" style="padding-top: 28px">
                                                            <label>Profesional1</label>
                                                        </div>
                                                        <div class="col-md-2">
                                                            <label>Puntos1</label>
                                                            <asp:TextBox runat="server" ID="txtPunProfesional" CssClass="form-control" BackColor="LightGreen"></asp:TextBox>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <label>Producto1</label>
                                                            <asp:TextBox runat="server" ID="txtProProfesional" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                        </div>
                                                        <div class="col-md-2">
                                                            <label>Estado1</label>
                                                            <div class="checkbox switchTamano">
                                                                <input id="chkProfesional" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-2">
                                                            <label>Regalo1</label>
                                                            <div class="checkbox switchTamano">
                                                                <input id="chkRegaloPro1" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row" style="padding-top: 5px">
                                                        <div class="col-md-2" style="padding-top: 28px">
                                                            <label>Profesional2</label>
                                                        </div>
                                                        <div class="col-md-2">
                                                            <label>Puntos2</label>
                                                            <asp:TextBox runat="server" ID="txtPunProfesional2" CssClass="form-control" BackColor="LightGreen"></asp:TextBox>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <label>Producto2</label>
                                                            <asp:TextBox runat="server" ID="txtProProfesional2" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                        </div>
                                                        <div class="col-md-2">
                                                            <label>Estado2</label>
                                                            <div class="checkbox switchTamano">
                                                                <input id="chkProfesional2" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-2">
                                                            <label>Regalo2</label>
                                                            <div class="checkbox switchTamano">
                                                                <input id="chkRegaloPro2" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row" style="padding-top: 5px">
                                                        <div class="col-md-2" style="padding-top: 28px">
                                                            <label>Empresarial1</label>
                                                        </div>
                                                        <div class="col-md-2">
                                                            <label>Puntos1</label>
                                                            <asp:TextBox runat="server" ID="txtPunEmpresarial" CssClass="form-control" BackColor="LightGreen"></asp:TextBox>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <label>Producto1</label>
                                                            <asp:TextBox runat="server" ID="txtProEmpresarial" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                        </div>
                                                        <div class="col-md-2">
                                                            <label>Estado1</label>
                                                            <div class="checkbox switchTamano">
                                                                <input id="chkEmpresarial" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-2">
                                                            <label>Regalo1</label>
                                                            <div class="checkbox switchTamano">
                                                                <input id="chkRegaloEmpre1" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row" style="padding-top: 5px">
                                                        <div class="col-md-2" style="padding-top: 28px">
                                                            <label>Empresarial2</label>
                                                        </div>
                                                        <div class="col-md-2">
                                                            <label>Puntos2</label>
                                                            <asp:TextBox runat="server" ID="txtPunEmpresarial2" CssClass="form-control" BackColor="LightGreen"></asp:TextBox>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <label>Producto2</label>
                                                            <asp:TextBox runat="server" ID="txtProEmpresarial2" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                        </div>
                                                        <div class="col-md-2">
                                                            <label>Estado2</label>
                                                            <div class="checkbox switchTamano">
                                                                <input id="chkEmpresarial2" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-2">
                                                            <label>Regalo2</label>
                                                            <div class="checkbox switchTamano">
                                                                <input id="chkRegaloEmpre2" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row" style="padding-top: 5px">
                                                        <div class="col-md-2" style="padding-top: 28px">
                                                            <label>Millonario1</label>
                                                        </div>
                                                        <div class="col-md-2">
                                                            <label>Puntos1</label>
                                                            <asp:TextBox runat="server" ID="txtPunMillonario" CssClass="form-control" BackColor="LightGreen"></asp:TextBox>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <label>Producto1</label>
                                                            <asp:TextBox runat="server" ID="txtProMillonario" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                        </div>
                                                        <div class="col-md-2">
                                                            <label>Estado1</label>
                                                            <div class="checkbox switchTamano">
                                                                <input id="chkMillonario" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-2">
                                                            <label>Regalo1</label>
                                                            <div class="checkbox switchTamano">
                                                                <input id="chkRegaloMillo1" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                            </div>
                                                        </div>
                                                    </div>
                                                     <div class="row" style="padding-top: 5px">
                                                        <div class="col-md-2" style="padding-top: 28px">
                                                            <label>Millonario2</label>
                                                        </div>
                                                        <div class="col-md-2">
                                                            <label>Puntos2</label>
                                                            <asp:TextBox runat="server" ID="txtPunMillonario2" CssClass="form-control" BackColor="LightGreen"></asp:TextBox>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <label>Producto2</label>
                                                            <asp:TextBox runat="server" ID="txtProMillonario2" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                        </div>
                                                        <div class="col-md-2">
                                                            <label>Estado2</label>
                                                            <div class="checkbox switchTamano">
                                                                <input id="chkMillonario2" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                            </div>
                                                        </div>
                                                         <div class="col-md-2">
                                                            <label>Regalo2</label>
                                                            <div class="checkbox switchTamano">
                                                                <input id="chkRegaloMillo2" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row" style="padding-top: 5px">
                                                        <div class="col-md-2" style="padding-top: 28px">
                                                            <label>C. Inteligente</label>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <label>Puntos</label>
                                                            <asp:TextBox runat="server" ID="txtPunCInteligente" CssClass="form-control" BackColor="LightGreen"></asp:TextBox>
                                                        </div>
                                                        <div class="col-md-5">
                                                            <label>Producto</label>
                                                            <asp:TextBox runat="server" ID="txtProCInteligente" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                        </div>
                                                        <div class="col-md-2">
                                                            <label>Estado</label>
                                                            <div class="checkbox switchTamano">
                                                                <input id="chkCInteligente" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row" style="padding-top: 5px">
                                                        <div class="col-md-2" style="padding-top: 28px">
                                                            <label>Consultor</label>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <label>Puntos</label>
                                                            <asp:TextBox runat="server" ID="txtPunConsultor" CssClass="form-control" BackColor="LightGreen"></asp:TextBox>
                                                        </div>
                                                        <div class="col-md-5">
                                                            <label>Producto</label>
                                                            <asp:TextBox runat="server" ID="txtProConsultor" CssClass="form-control solo-numero" BackColor="LightGreen"></asp:TextBox>
                                                        </div>
                                                        <div class="col-md-2">
                                                            <label>Estado</label>
                                                            <div class="checkbox switchTamano">
                                                                <input id="chkConsultor" type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
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
                        <table id="tbl_ofertas" class="table table-bordered table-hover text-center">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Rango</th>
                                    <th>Rango Fin</th>
                                    <th>Estado</th>
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
        <script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>
        <script src="js/sweetAlert.js" type="text/javascript"> </script>
        <script src="js/plugins/datatables/jquery.dataTables.js"></script>
        <script src="js/plugins/datatables/dataTables.bootstrap.js"></script>
        <script src="js/Promocionv2.js" type="text/javascript"></script>
        <script type="text/javascript">
            window.onload = function () {
                document.getElementById("gestProducProm").style.color = '#79B729';
                document.getElementById("gestProducProm").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';

                document.getElementById("ofertas").style.color = '#79B729';
                document.getElementById("ofertas").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';
            }


            $(document).ready(function () {

                //$('#btnAñadir').click(function () {
                //    var cantidad = document.getElementById("txtCantidadProd").value;
                //    var producto = document.getElementById("txtProducto").value;
                //    var precio = document.getElementById("txtPrecio").value;
                //    var i = 1; //contador para asignar id al boton que borrara la fila
                //    var fila = '<tr id="row' + i + '" class="all" ><td>' + cantidad + '</td><td>' + producto + '</td><td>' + precio + '</td><td><button type="button" name="remove" id="' + i + '" class="btn btn-danger btn_remove">Quitar</button></td></tr>'; //esto seria lo que contendria la fila

                //    if (cantidad && producto && precio != "") {
                //        i++;
                //        $('#tblRegistroPromo tr:first').after(fila);
                //        document.getElementById("txtCantidadProd").value = "";
                //        document.getElementById("txtProducto").value = "";
                //        document.getElementById("txtPrecio").value = "";
                //        document.getElementById("txtPrecio").focus();
                //    }
                //});

                //$(document).on('click', '.btn_remove', function () {
                //    var button_id = $(this).attr("id");
                //    //cuando da click obtenemos el id del boton
                //    $('#row' + button_id + '').remove(); //borra la fila
                //});

                //$('.modal').on('show.bs.modal', function (event) {
                //    $('.all').remove();
                //    $('#tbl_body_table2 tr:last').remove();
                //    $("#exampleModal input").val("");
                //    $("#exampleModal select").val("");
                //    // other initialization here, if you want to
                //    //poner el datepicker 
                    //$('.daterange').daterangepicker({
                    //    singleDatePicker: true,
                    //    showDropdowns: true,
                    //    locale: { format: "DD/MM/YYYY" },
                    //    autoApply: false
                    //});
                //    //obtenemos el valor de los input
                //    $('.file-upload').file_upload();
                //    $('.solo-numero').numeric();
                //    $('.file-upload-text').text("Ingrese la imagen ...");
                //    // $('.solo-numero').numeric();
                //})

            });
        </script>
    </section>
</asp:Content>
