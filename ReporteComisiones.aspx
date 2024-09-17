<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="ReporteComisiones.aspx.cs" Inherits="SantaNaturaNetwork.ReporteComisiones" %>
<%@ OutputCache Location="None" NoStore="true"%>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <section class="content-header">
        <h1 style="text-align: center">REPORTE DE COMISIONES</h1>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="box box-success" style="width: 1793px;">
                    <div class="box box-header">
                        <h3 class="box-title">Reporte de Comisiones</h3>
                    </div>
                    <div class="box-body table-responsive">
                        <table id="tbl_comisiones" class="table table-bordered table-hover text-center">
                            <thead>
                                <tr>
                                    <th colspan="16">Datos</th>
                                    <th colspan="12">Comisiones en Puntos</th>
                                    <th colspan="4">Info</th>
                                </tr>
                                <tr>
                                    <th>Pais</th>
                                    <th>Nro. Doc.</th>
                                    <th>Nombres</th>
                                    <th>Rango</th>
                                    <th>Periodo</th>
                                    <th>Valor x Punto</th>
                                    <th>Bono Logro</th>
                                    <th>Bono Auto</th>
                                    <th>Bono Util</th>
                                    <th>Bono Const.</th>
                                    <th>Bono Lider</th>
                                    <th>Regalias</th>
                                    <th>Adicionales</th>
                                    <th>Monto</th>
                                    <th>Ajuste</th>
                                    <th>Monto ajustado final</th>
                                    <th>Bono Logro</th>
                                    <th>Bono Auto</th>
                                    <th>Bono Util</th>
                                    <th>Bono Const.</th>
                                    <th>Bono Lider</th>
                                    <th>Regalias</th>
                                    <th>Adicionales</th>
                                    <th>Monto</th>
                                    <th>Ajuste</th>
                                    <th>Monto ajustado final</th>
                                    <th>Banco</th>
                                    <th>Nro. Cuenta</th>
                                    <th>Volumen</th>
                                    <th>Nuevo Rango</th>
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


