<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="ComisionXSocio.aspx.cs" Inherits="SantaNaturaNetwork.ComisionXSocio" %>
<%@ OutputCache Location="None" NoStore="true"%>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <section class="content-header">
        <h1 style="text-align: center">Comisión de ...</h1>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="box box-success">
                    <div class="box box-header">
                        <h3 class="box-title">Lista de Comisiones</h3>
                    </div>
                    <div class="box-body table-responsive">
                        <div class="col-md-4">
                            <div class="box-body">
                                <div class="form-group">
                                    <p style="color:transparent">Codigo de usuario registrado</p>
                                </div>
                               
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="box-body">
                                <div class="form-group">
                                    <p style="color:transparent">Codigo de usuario registrado</p>
                                </div>
                               
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="box-body">
                                <div class="form-group">
                                    <label>Buscar Fecha</label>
                                </div>
                                <div class="form-group">
                                    <asp:TextBox runat="server" ID="txtBuscarFecha" CssClass="form-control" BackColor="LightGreen"></asp:TextBox>
                                </div>
                            </div>
                        </div>

                        <table id="tbl_comisionxsocio" class="table table-bordered table-hover text-center">
                            <thead>
                                <tr>
                                    <th>Periodo</th>
                                    <th>Rango</th>
                                    <th>Fecha</th>
                                    <th>Comisión</th>
                                    <th>Detalle</th>
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
    </section>
</asp:Content>

