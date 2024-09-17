<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="MapaRedSocios.aspx.cs" Inherits="SantaNaturaNetworkV3.MapaRedSocios" ClientIDMode="Static" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="css/proyecto2/tiendaV2.css" rel="stylesheet" />
    <%--<link href="css/proyecto2/vendors/elegant-icon/style.css" rel="stylesheet" />--%>
    <link href="css/AdminLTE-v1.css?v1" rel="stylesheet" type="text/css" />
    <link href="https://unpkg.com/gijgo@1.9.13/css/gijgo.min.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <link href="css/tree-table/jquery.treegrid.css?v2" rel="stylesheet" type="text/css" />

    <link href="css/proyecto2/MapaRedSocios.css?Fv42" rel="stylesheet" />

    <style>
        

    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="bloqueMapaRedSocios">
        <div>
            <p class="titulo">MAPA DE RED</p>
        </div>
        <div id="page_loader" style="display: none" class="se-pre-con"></div>
        <div class="bloqueFiltrado">
            <div class="datosUsuario">
                <p>Total Empresarios: <span id="TS"><%=TOTALSOCIOS %></span></p>
                <p>Empresarios Activos: <span id="AS"><%=ACTIVOS_SOCIOS %></span></p>
                <p>Nuevos Empresarios: <span id="NS"><%=NUEVOS_SOCIOS %></span></p>
                <p>Empresarios Inactivos: <span id="IS"><%=INACTIVOS_SOCIOS %></span></p>
            </div>
            <div id="Div1" class="filtrar">
                <div class="combito">
                    <asp:DropDownList ID="cboPeriodo" CssClass="ddlMapaDeRed" Width="100%" runat="server">
                    </asp:DropDownList>
                </div>
                <div style="display: flex; align-items: center;">
                    <button class="botonFiltrar" type="button" id="btnFiltro" style="outline: none;">FILTRAR</button>
                </div>
            </div>
        </div>

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
                                    <thead>
                                        <tr>
                                            <th style="padding: 12px 16.26px !important;">
                                                <label>Nivel</label></th>
                                            <th>Nombres y Apellidos</th>
                                            <th style="display: none;">Corazones</th>
                                            <th>PP</th>
                                            <th>VIP</th>
                                            <th>VP</th>
                                            <th>VR</th>
                                            <th>VG</th>
                                            <th>VQ</th>
                                            <th>Rango Actual</th>
                                            <th>Rango Máximo</th>
                                            <th>Inscripción</th>
                                            <th>Teléfono</th>
                                            <th>País</th>
                                            <th id="thGen">Generación</th>
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
    <script src="js/EstructuraRed.js?Af41" type="text/javascript"></script>
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

                document.getElementById("idSubMenuMapaDeRed").style.color = 'white';
                document.getElementById("idSubMenuMapaDeRed").style.fontWeight = "700";
            }
        };
    </script>
</asp:Content>
