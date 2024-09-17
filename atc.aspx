<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="atc.aspx.cs" Inherits="SantaNaturaNetworkV3.atc" ClientIDMode="Static" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

    <style>
        .campo {
            margin: 20px 0 20px 0;
            display: flex;
            justify-content: center
        }
    </style>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div style="margin-top: 70px; display: flex; justify-content: center">
        <div class="form-horizontal">
            <fieldset>

                <div class="control-group campo" style="padding-top: 40px">
                    <div class="controls">
                        <input id="txtNom" type="text" placeholder="Nombres y Apellidos..." class="input-medium form-control" required style="font-size: 1.3rem;" value="<%=Nombre_Completo %>">
                    </div>
                </div>

                <div class="control-group campo">
                    <div class="controls">
                        <input id="txtDoc" type="text" placeholder="Número de documento..." class="input-medium form-control solo-numero" required style="font-size: 1.3rem;" value="<%=Documento %>">
                    </div>
                </div>

                <div class="control-group campo">
                    <div class="controls">
                        <input id="txtTelf" type="text" placeholder="Teléfono de contacto..." class="input-medium form-control solo-numero" required style="font-size: 1.3rem;">
                    </div>
                </div>

                <div class="control-group campo">
                    <div class="controls">
                        <input id="txtEmail" runat="server" type="email" placeholder="Email (opcional)" class="input-large form-control" style="font-size: 1.3rem;" pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}">
                    </div>
                </div>

                <div class="control-group campo">
                    <select id="cboTipoEmpresario" class="form-control" required style="font-size: 1.1rem;">
                        <option value="" hidden>Seleccione el tipo de empresario...</option>
                    </select>
                </div>

                <div class="control-group campo">
                    <select id="cboTema" class="form-control" required style="font-size: 1.1rem;">
                        <option value="">Seleccione el tema...</option>
                    </select>
                </div>

                <div class="control-group campo">
                    <select id="cboTemaEspecifico" class="form-control" required style="font-size: 1.1rem;">
                        <option value="">Seleccione el tema específico...</option>
                    </select>
                </div>

                <div class="control-group campo">
                    <div class="controls">
                        <textarea id="Detalle" runat="server" placeholder="Detalle aquí por favor..." cols="40" rows="6" required></textarea>
                    </div>
                </div>

                <div class="control-group campo">
                    <div class="controls">
                        <button class="btn btn-success" id="btnSend2" runat="server" style="font-size: 1.3rem;">Enviar </button>
                    </div>
                </div>

            </fieldset>
        </div>
    </div>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="js/sweetAlert.js" type="text/javascript"> </script>
    <script src="js/GestionarATC.js?v4"></script>
    <script src="js/jquery.numeric.js"></script>
    <script type="text/javascript">

        function pageLoad() {
            $('.solo-numero').numeric();
        }

        window.onload = function () {
            if (window.innerWidth < 1148) {
                //var naranja = document.getElementById("navContactenos");
                //naranja.classList.add('menu__item--active2');
                document.getElementById("idMenuContactenos").style.fontWeight = '700';
            }
            else {
                document.getElementById("idMenuContactenos").style.color = 'var(--Primary-green)';
                document.getElementById("idMenuContactenos").style.borderBottom = '3px solid var(--Primary-green)';
            }
        }
    </script>
</asp:Content>
