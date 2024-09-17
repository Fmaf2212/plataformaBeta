<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="MapaDePatrocinio.aspx.cs" Inherits="SantaNaturaNetwork.MapaDePatrocinio" ClientIDMode="Static" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

    <link href="css/proyecto2/tienda.css" rel="stylesheet" />
    <%--<link href="css/proyecto2/vendors/elegant-icon/style.css" rel="stylesheet" />--%>
    <link href="css/AdminLTE-v1.css?v1" rel="stylesheet" type="text/css" />
    <link href="https://unpkg.com/gijgo@1.9.13/css/gijgo.min.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <link href="css/tree-table/jquery.treegrid.css?v2" rel="stylesheet" type="text/css" />
    <link href="css/proyecto2/estilosMapaDePatrocinio.css?Fv43" rel="stylesheet" />
    <style>
        
    </style>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="bloqueMapaDePatrocinio">
        <div>
            <p class="titulo">MAPA DE PATROCINIO</p>
        </div>
        <div id="page_loader" style="display: none" class="se-pre-con"></div>
        <div class="bloqueFiltrado">
            <div id="Div1"  class="filtrar">
                <div class="combito">
                    <asp:DropDownList ID="cboPeriodo" CssClass="ddlMapaDeRed" Width="100%" runat="server">
                    </asp:DropDownList>
                </div>
                <div style="display: flex; align-items: center;">
                    <%--<button class="btn btn-success botonFiltrar" type="button" style="width: 100%; transition: all 1s" id="btnFiltro">FILTRAR</button>--%>
                    <button class="botonFiltrar" type="button" id="btnFiltro" style="outline: none;">FILTRAR</button>
                </div>
            </div>
        </div>

        <div>
            <br />
            <div class="box-body ">
                <div class="row" style="width: 100%; margin: 0;">
                    <div class="col-md-12 centerTable">
                        <div class="box box-success table-responsive" style="border: none;">
                            <div class="box box-header" style="border: none;">
                            </div>
                            <div class="bloqueTablaMapaDePatrocinio">
                                <table id="tbl_red" class="tree content-table table-bordered table-hover text-center table">
                                    <thead>
                                        <tr>
                                            <th style="text-align: center;">
                                            <label style="width: 100px;">Nivel</label></th>
                                            <th style="text-align: center;">Nombres</th>
                                            <th style="text-align: center;">Tipo Cliente</th>
                                            <th style="text-align: center;">PP</th>
                                            <th style="text-align: center;">Paquete</th>
                                            <%--<th style="text-align: center;">Teléfono</th>--%>
                                            <th style="text-align: center;">País</th>
                                            <th style="text-align: center;">Fecha Registro</th>
                                        </tr>
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
    <script src="js/MapaPatrocinio.js?v3" type="text/javascript"></script>
    <script>
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
                //document.getElementById("liMapaPatro").style.background = '#E8E8E8';

                document.getElementById("idMenuRed").style.color = 'white';
                //document.getElementById("idMenuRed").style.fontWeight = "700";
                document.getElementById("idMenuRed").classList.add("peso700");
                document.getElementById("idSubMenuMapaDePatrocinio").style.fontWeight = "700";


                //var naranja = document.getElementById("navDesplegable");
                //naranja.classList.add('menu__item--active2');
            }
            else {
                document.getElementById("idMenuRed").style.color = 'var(--Primary-green)';
                document.getElementById("idMenuRed").style.borderBottom = '3px solid var(--Primary-green)';
                document.getElementById("idMenuRed").style.fontWeight = "600";

                document.getElementById("idSubMenuMapaDePatrocinio").style.color = 'white';
                document.getElementById("idSubMenuMapaDePatrocinio").style.fontWeight = "700";
            }
        }
    </script>

    <%--<script src="js/bootstrap.min.js"></script>--%>
</asp:Content>
