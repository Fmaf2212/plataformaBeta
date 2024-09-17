<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="DatosPersonalesCDR.aspx.cs" Inherits="SantaNaturaNetworkV3.DatosPersonalesCDR" ClientIDMode="Static" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <link href="css/datatables/dataTables.bootstrap.css" rel="stylesheet" />
    <link href="css/proyecto2/datosPersonalesCDR.css" rel="stylesheet"/>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="datosPersoCDR">

        <section class="content-header">
            <h1>DATOS PERSONALES</h1>
        </section>
        <section class="content datosPersonales">
            <div class="row">
                <div class="col-md-6 bloqueIzquierda">
                    <div>
                        <div class="espaciado">
                            <div class="form-group">
                                <label>DOCUMENTO DE IDENTIDAD</label>
                            </div>
                            <div class="form-group">
                                <asp:TextBox ID="txtDocumento" runat="server" CssClass="form-control solo-numero cajita" MaxLength="8" ReadOnly="true"></asp:TextBox>
                            </div>
                            <div class="form-group">
                                <label>NOMBRES</label>
                            </div>
                            <div class="form-group">
                                <asp:TextBox ID="txtNombres" runat="server" CssClass="form-control cajita" ReadOnly="true"></asp:TextBox>
                            </div>
                            <div class="form-group">
                                <label>PRIMER APELLIDO</label>
                            </div>
                            <div class="form-group">
                                <asp:TextBox ID="txtApPaterno" runat="server" CssClass="form-control cajita" ReadOnly="true"></asp:TextBox>
                            </div>
                            <div class="form-group">
                                <label>SEGUNDO APELLIDO</label>
                            </div>
                            <div class="form-group">
                                <asp:TextBox ID="txtApMaterno" runat="server" CssClass="form-control cajita" ReadOnly="true"></asp:TextBox>
                            </div>
                            <div class="form-group">
                                <label>SEUDÓNIMO</label>
                            </div>
                            <div class="form-group">
                                <asp:TextBox ID="txtApodo" runat="server" CssClass="form-control cajita" ReadOnly="true"></asp:TextBox>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 bloqueDerecha">
                    <div>
                        <div>
                            <span class="titleDatCompraExt">DATOS PARA COMPRA EXTORNO</span>
                        </div>
                        <div class="espaciado">
                            <div class="form-group">
                                <label>DOCUMENTO DE IDENTIDAD / RUC</label>
                            </div>
                            <div class="form-group">
                                <asp:TextBox ID="txtDocExtorno" runat="server" CssClass="form-control solo-numero cajita" ReadOnly="true"></asp:TextBox>
                            </div>
                            <div class="form-group">
                                <label>NOMBRES Y APELLIDOS / RAZON SOCIAL</label>
                            </div>
                            <div class="form-group">
                                <asp:TextBox ID="txtRazonExtorno" runat="server" CssClass="form-control cajita" ReadOnly="true"></asp:TextBox>
                            </div>
                            <div class="form-group">
                                <label>DIRECCION / DIRECCION FISCAL</label>
                            </div>
                            <div class="form-group">
                                <asp:TextBox ID="txtDireccionExtorno" runat="server" CssClass="form-control cajita" ReadOnly="true"></asp:TextBox>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bloqueBtnActualizar">
                <asp:Button ID="btnActualizar" runat="server" CssClass="btn btnActualizar" Width="200px" Text="Actualizar" />
            </div>


        </section>
    </div>

    <script src="js/sweetAlert.js" type="text/javascript"> </script>
    <script src="js/DatosPersonalesCDR.js?v3"></script>
    <script type="text/javascript">
        window.onload = function () {
            $('.solo-numero').numeric();
            document.getElementById("GestionarCDR").classList.add("active");


            document.getElementById("datosPersonales").style.color = '#79B729';
            document.getElementById("datosPersonales").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';
        }

    </script>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="footer" runat="server">
</asp:Content>
