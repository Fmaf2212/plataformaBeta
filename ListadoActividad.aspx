<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="ListadoActividad.aspx.cs" Inherits="SantaNaturaNetworkV3.ListadoActividad" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="css/proyecto2/tiendaV2.css" rel="stylesheet" />
    <%--<link href="css/proyecto2/vendors/elegant-icon/style.css" rel="stylesheet" />--%>
    <link href="css/AdminLTE-v1.css?v1" rel="stylesheet" type="text/css" />
    <link href="https://unpkg.com/gijgo@1.9.13/css/gijgo.min.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <link href="css/tree-table/jquery.treegrid.css?v2" rel="stylesheet" type="text/css" />

    <link href="css/proyecto2/MapaRedSocios.css?Fv41" rel="stylesheet" />

    <style>
        

    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
     <div class="bloqueMapaRedSocios">
        <div>
            <p class="titulo">LISTADO DE ACTIVIDAD</p>
        </div>
        <div id="page_loader" style="display: none" class="se-pre-con"></div>

        <div>
            <br />
            <div class="box-body">
                <div class="row" style="width: 100%; margin: 0;">
                    <div class="col-md-12 centerTable">
                        <div class="box box-success table-responsive" style="border: none;">
                            <div class="box box-header" style="border: none;">
                            </div>
                            <div class="bloqueTablaMapaDeRed">
                                <table id="tbl_red" class="tree content-table table-bordered table-hover text-center table">
                                    <thead id="tb_head">
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    </div>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="js/tree-table/jquery.cookie.js?v2"></script>
    <script src="js/proyecto2/jqueryDataTablesPremioSocios.js"></script>
    <script src="js/proyecto2/estiloTablasPremioSocios.js"></script>
    <script src="js/tree-table/jquery.treegrid.js"></script>
    <script src="js/tree-table/jquery.treegrid.bootstrap3.js"></script>
    <script src="https://unpkg.com/gijgo@1.9.13/js/gijgo.min.js" type="text/javascript"></script>
    <script src="js/sweetAlert.js" type="text/javascript"> </script>
    <script src="js/ListadoActividad.js?v2" type="text/javascript"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            $('.tree').treegrid({
                expanderExpandedClass: 'glyphicon glyphicon-minus',
                expanderCollapsedClass: 'glyphicon glyphicon-plus',
                'saveState': true,
                'saveStateMethod': 'cookie',
                'saveStateName': 'tree-grid-state'
            })
        });
        window.onload = function () {
            if (window.innerWidth < 1148) {
                //document.getElementById("liMapaRed").style.background = '#E8E8E8';

                document.getElementById("idMenuRed").style.color = 'white';
                //document.getElementById("idMenuRed").style.fontWeight = "700";
                document.getElementById("idMenuRed").classList.add("peso700");
                document.getElementById("idSubMenuMapaDeRed").style.fontWeight = "700";


                //var naranja = document.getElementById("navDesplegable");
                //naranja.classList.add('menu__item--active2');
            }
            else {
                document.getElementById("idMenuRed").style.color = 'var(--Primary-green)';
                document.getElementById("idMenuRed").style.borderBottom = '3px solid var(--Primary-green)';
                document.getElementById("idMenuRed").style.fontWeight = "600";

                document.getElementById("idSubMenuListadoActividad").style.color = 'white';
                document.getElementById("idSubMenuListadoActividad").style.fontWeight = "700";
            }
        };
    </script>
</asp:Content>
