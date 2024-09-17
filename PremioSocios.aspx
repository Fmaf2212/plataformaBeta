<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="PremioSocios.aspx.cs" Inherits="SantaNaturaNetworkV3.PremioSocios" ClientIDMode="Static" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <style>
        label {
            display: flex !important;
            align-items: baseline;
            justify-content: space-evenly;
        }

        .form-control-select {
            display: block;
            width: 30%;
            padding: .375rem .75rem;
            font-size: 1rem;
            line-height: 1.5;
            color: #495057;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #ced4da;
            border-radius: .25rem;
            transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        }

        .form-control-filter {
            display: block;
            width: 100%;
            margin: 0px 0px 0px 10px;
            padding: .375rem .75rem;
            font-size: 1rem;
            line-height: 1.5;
            color: #495057;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #ced4da;
            border-radius: .25rem;
            transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        }

        #bloqueMayor {
            display: flex;
            justify-content: space-around;
            margin-top: 80px;
            flex-wrap: wrap
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
    <link href="assets/css/demo.css" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/css/select2.min.css" rel="stylesheet" />

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div id="page_loader" style="display: none" class="se-pre-con"></div>
    <div id="bloqueCombitoyButtonPeriodoVQ" class="row" style="margin-top: 110px">
        <div>
            <asp:DropDownList runat="server" ID="ddlPeriodo" CssClass="form-control js-example-templating" Width="235px" />
        </div>
        <div class="bajarCombo">
            <button type="button" id="btnObtenerPeriodo" class="btnObtener">Filtrar</button>
        </div>
    </div>
    <div id="bloqueMayor">
        <div>
            <h1 style="text-align: center; margin-bottom: 40px; font-family: -webkit-body">SOCIOS A COMPRIMIRSE</h1>

            <table id="example1" class="table table-striped table-bordered" cellspacing="0" width="100%">
                <thead>
                    <tr>
                        <th>DNI</th>
                        <th>NOMBRES</th>
                        <th>CELULAR</th>

                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
        <div>
            <h1 style="text-align: center; margin-bottom: 40px; font-family: -webkit-body">GANADORES DE PREMIO</h1>

            <table id="example2" class="table table-striped table-bordered" cellspacing="0" width="100%">
                <thead>
                    <tr>
                        <th>DNI</th>
                        <th>NOMBRES</th>
                        <th>CELULAR</th>
                        <th>PREMIO</th>
                        <th>CDR</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </div>

    <script src="js/proyecto2/jqueryDataTablesPremioSocios.js"></script>
    <script src="js/proyecto2/estiloTablasPremioSocios.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.min.js" type="text/javascript"></script>
    <script src="js/ListasCompresionPremios.js" type="text/javascript"></script>
    <script>
        $(document).ready(function () {
            //$('#example1').DataTable();
            //$('#example2').DataTable();
        });
    </script>
</asp:Content>
