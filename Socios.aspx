<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="Socios.aspx.cs" Inherits="SantaNaturaNetwork.Socios" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

    <style>
        .ddlSocios {
            border-radius: 4px 5px;
        }

        .lblMedioDePago {
            margin-left: auto
        }
    </style>
    <link href="css/proyecto2/bootstrap-3.3.0-css-bootstrap.min.css" rel="stylesheet">
    <link href="css/proyecto2/tienda.css" rel="stylesheet" />

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <h2 style="text-align:center;margin-top:70px">Socios</h2>

    <div class="row" style="margin-top: 50px; padding-bottom: 40px">

        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div id="Div1" runat="server" style="display: block">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 center-block">
                    <div class="col-lg-3 col-lg-offset-9 col-md-3 col-md-offset-9 col-sm-4 col-sm-offset-8 col-xs-8 col-xs-offset-4" style="margin-right:-40px">
                        <asp:Label Style="margin-left:-10px" ID="Label1" runat="server" Text="Periodo:" CssClass="lblMedioDePago"></asp:Label>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 center-block ddlMedioDePago">
                    <asp:DropDownList Style="margin-left:-90px;height: 31px; box-shadow: 0 0 12px 2px #c2b917" ID="idSocios" BackColor="White" CssClass="ddlSocios" Width="250px" ForeColor="#7d6754" Font-Names="Andalus" runat="server">
                    </asp:DropDownList>
                </div>
            </div>
        </div>
    </div>


    <div style="border: 1px solid">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
    </div>

    <script>
        window.onload = function () {
            document.getElementById("idMenuRed").style.color = 'lime';
            document.getElementById("idMenuRed").style.borderBottom = '3px solid lawngreen';

            document.getElementById("idSubMenuEstadisticas").style.color = 'lime';

            document.getElementById("idSubMenuSocios").style.color = 'lime';
        }
    </script>

</asp:Content>
