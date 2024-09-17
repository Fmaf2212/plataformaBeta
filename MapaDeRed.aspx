<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="MapaDeRed.aspx.cs" Inherits="SantaNaturaNetwork.MapaDeRed" ClientIDMode="Static" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
   
    <link href="css/proyecto2/tienda.css" rel="stylesheet" />
    <script type="text/javascript" src="jqwidgets/modernizr.js"></script>
    <link href="css/proyecto2/vendors/elegant-icon/style.css" rel="stylesheet" />
    <link href="css/AdminLTE-v1.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="jqwidgets/styles/jqx.base.css" type="text/css" />
    <link href="https://unpkg.com/gijgo@1.9.13/css/gijgo.min.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="jqwidgets/styles/jqx.darkblue.css" media="screen">
    <style>
        .ddlMapaDeRed {
            border-radius: 4px 5px;
        }

        .lblMedioDePago {
            margin-left: auto;
        }

        .no-js #loader {
            display: none;
        }

        .js #loader {
            display: block;
            position: absolute;
            left: 100px;
            top: 0;
        }

        .se-pre-con {
            position: fixed;
            left: 0px;
            top: 0px;
            width: 100%;
            height: 100%;
            z-index: 9999;
            background: url(img/loadingPageSantanatura.gif) center no-repeat #fff;
        }
    </style>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <h2 style="text-align: center; margin-top: 100px">MAPA DE RED</h2>

    <%--    <div>

        <asp:Label runat="server" Text="Periodo: "></asp:Label>

        <asp:DropDownList runat="server" CssClass="ddl-MapaDeRed"></asp:DropDownList>

    </div>--%>
    <br />
    <div id="page_loader" style="display: none" class="se-pre-con"></div>
    <div class="row" style="margin-top: 50px; padding-bottom: 40px">
        <div class="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-xs-12">
            <div id="Div1" runat="server" style="display: block">

                <div class="col-xs-3 col-sm-3">
                    <asp:Label ID="Label1" runat="server" Text="Periodo:" CssClass="lblPeriodo"></asp:Label>
                </div>
                <div class="col-xs-6 col-sm-6">
                    <asp:DropDownList Style="height: 35px; box-shadow: 0 0 12px 2px #c2b917; transition: all 1s" ID="cboPeriodo" BackColor="White" CssClass="ddlMapaDeRed" Width="100%" ForeColor="#7d6754" Font-Names="Andalus" runat="server">
                    </asp:DropDownList>
                </div>
                <div class="col-xs-3 col-sm-3">
                    <button class="btn btn-success botonFiltrar" style="width: 100%; transition: all 1s" id="btnFiltro">FILTRAR</button>
                </div>

            </div>
        </div>
    </div>


    <div style="border: 1px solid">
        <br />
        <div class="row">
            <div class="col-md-12">
                <div class="box box-success">
                    <div class="box box-header">
                    </div>
                    <div style="margin-left: auto; margin-right: auto; width: 95%;">
                        <div id="treegrid" style="margin-left: auto; margin-right: auto;"></div>
                    </div>

                </div>
            </div>
        </div>
        <br />
    </div>
    <script type="text/javascript" src="scripts2/jquery-1.11.1.min.js"></script>
    <script type="text/javascript" src="jqwidgets/jqxcore.js"></script>
    <script type="text/javascript" src="jqwidgets/jqxdata.js"></script>
    <script type="text/javascript" src="jqwidgets/jqxbuttons.js"></script>
    <script type="text/javascript" src="jqwidgets/jqxscrollbar.js"></script>
    <script type="text/javascript" src="jqwidgets/jqxdatatable.js"></script>
    <script type="text/javascript" src="jqwidgets/jqxtreegrid.js"></script>
    <script type="text/javascript" src="jqwidgets/jqxdragdrop.js"></script>
    <script type="text/javascript" src="scripts2/demos.js"></script>
    <script src="https://unpkg.com/gijgo@1.9.13/js/gijgo.min.js" type="text/javascript"></script>
    <script src="js/sweetAlert.js" type="text/javascript"> </script>
    <script src="js/EstructuraTreeGridv6.js" type="text/javascript"></script>
    <script>
        window.onload = function () {
            document.getElementById("idMenuRed").style.color = 'white';
            document.getElementById("idMenuRed").style.borderBottom = '3px solid white';

            document.getElementById("idSubMenuMapaDeRed").style.color = 'white';
            document.getElementById("idSubMenuMapaDeRed").style.borderBottom = '3px solid white';
        }
    </script>

    <%--
    <script src="js/bootstrap.min.js"></script>--%>

</asp:Content>
