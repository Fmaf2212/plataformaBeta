<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="LineaMultinivelControlAbono.aspx.cs" Inherits="SantaNaturaNetworkV3.LineaMultinivelControlAbono" ClientIDMode="Static" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <!--Posicionamiento de ciertos elementos-->
    <link href="assets/css/demo.css" rel="stylesheet" />
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

        div.centerTable {
            text-align: center;
        }

            div.centerTable table {
                margin: 0 auto;
                text-align: left;
                margin-bottom: 70px;
            }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div id="page_loader" style="display: none" class="se-pre-con"></div>
    <section class="content-header">
        <h1 style="text-align: center; margin-bottom: 35px;">Linea Multinivel del Socio</h1>
    </section>
    <section class="content">
        <div class="box box-success">
            <div class="box box-header">
                <h3 class="box-title">Lista de nombres</h3>
            </div>
            <div class="box-body table-responsive">
                <div style="justify-content: space-around; margin-top: 20px; flex-wrap: wrap">
                    <div class="col-md-6 centerTable">
                        <table class="content-table" id="tbl_upline" style="">
                            <thead>
                                <tr>
                                    <th colspan="4" style="text-align: center">Linea Upline</th>
                                </tr>
                                <tr>
                                    <th style="text-align: center;">NOMBRES</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-md-6 centerTable">
                        <table class="content-table" id="tbl_patrocinio">
                            <thead>
                                <tr>
                                    <th colspan="4" style="text-align: center">Linea Patrocinio</th>
                                </tr>
                                <tr>
                                    <th style="text-align: center;">NOMBRES</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <script src="js/LineaMultinivelAbono.js?v1" type="text/javascript"></script>
    </section>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="footer" runat="server">
</asp:Content>
