<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="Top10.aspx.cs" Inherits="SantaNaturaNetworkV3.Top10" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <!--Posicionamiento de ciertos elementos-->
    <link href="assets/css/demo.css" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/css/select2.min.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Dancing+Script&display=swap" rel="stylesheet">
    <style>
        .content-table {
            border-collapse: collapse;
            margin: 25px 0;
            font-size: 0.9em;
            min-width: 400px;
            border-radius: 5px 5px 0 0;
            overflow: hidden;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
        }

            .content-table thead tr {
                background-color: #009897;
                color: #ffffff;
                text-align: left;
                font-weight: bold;
            }

            .content-table th, .content-table td {
                padding: 12px 15px !important;
            }

            .content-table tbody tr {
                border-bottom: 1px solid #dddddd;
            }

                .content-table tbody tr:nth-of-type(even) {
                    background-color: #f3f3f3;
                    font-weight: bold;
                    color: #009897;
                }

                .content-table tbody tr:last-of-type {
                    border-bottom: 2px solid #009897;
                }

                .content-table tbody tr.active-row {
                    font-weight: bold;
                    color: #009897;
                }

        .bajarCombo {
            margin-top: 0px !important;
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
    <h1 style="text-align: center; margin-top: 100px">TOP 10</h1>
    <div id="page_loader" style="display: none" class="se-pre-con"></div>
     <div id="bloqueCombitoyButtonPeriodoVQ" class="row" style="margin-top: 40px" runat="server">
        <div>
            <asp:DropDownList runat="server" ID="dllPeriodoVQ" CssClass="form-control js-example-templating" Width="235px" />
        </div>
        <div class="bajarCombo">
            <button type="button" id="btnObtenerPeriodoVQ" class="btnObtener">Obtener</button>
        </div>
         <div id="div1" runat="server">
            <asp:DropDownList runat="server" ID="ddlPeriodo" CssClass="form-control js-example-templating" Width="235px"/>
        </div>
        <div class="bajarCombo" id="div2" runat="server">
            <button type="button" id="btnObtenerPeriodo" class="btnObtener">Comisiones</button>
        </div>
    </div>
    <%--<div id="bloqueCombitoyButtonPeriodo" class="row" style="margin-top: 20px" runat="server">
        <div>
            <asp:DropDownList runat="server" ID="ddlPeriodo" CssClass="form-control js-example-templating" Width="235px" />
        </div>
        <div class="bajarCombo">
            <button type="button" id="btnObtenerPeriodo" class="btnObtener">Comisiones</button>
        </div>
    </div>--%>

    <div style="display: flex; justify-content: space-around; margin-top: 50px; flex-wrap: wrap">
        <table class="content-table" id="tableTOP10VQ">
            <thead>
                <tr>
                    <th colspan="4" style="text-align: center">TOP 10 VQ</th>
                </tr>
                <tr>
                    <th>NOMBRES</th>
                    <th>VQ</th>
                    <th>RANGO</th>
                    <th>CELULAR</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        <div id="comisionesdiv" runat="server">
            
        <table class="content-table" id="tableTOP10COMISIONES" >
            <thead>
                <tr>
                    <th colspan="4" style="text-align: center">TOP 10 COMISIONES</th>
                </tr>
                <tr>
                    <th>NOMBRES</th>
                    <th>COMISIONES</th>
                    <th>RANGO</th>
                    <th>CELULAR</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
            </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.min.js"></script>
    <script src="js/ListasTop10V2.js" type="text/javascript"></script>
    <script>
        $(".js-example-templating").select2({
        });

        window.onload = function () {
            document.getElementById("clicBonif").style.color = 'lime';
            document.getElementById("clicBonif").style.borderBottom = '3px solid lawngreen';
        }

    </script>
</asp:Content>
