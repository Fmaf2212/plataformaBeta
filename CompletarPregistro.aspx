<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="CompletarPregistro.aspx.cs" Inherits="SantaNaturaNetworkV3.CompletarPregistro" ClientIDMode="Static" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="assets/css/demo.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.10.23/r-2.2.7/datatables.min.css" />    
    
    <link href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" rel="stylesheet" type="text/css" />
    <%--<link rel="stylesheet" href="css/bootstrapv2.min.css">--%>
    <link href="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/css/select2.min.css" rel="stylesheet" />

    <link href="css/proyecto2/estilosCompletarPreRegistro.css?Fv43" rel="stylesheet" />

    <style>
        .table tbody tr td:last-child {
            display: flex;
            justify-content: center;
        }

        .sorting_1 {
            background-color: inherit !important;
        }

        .table thead tr th {
            text-align: center;
        }

        .table tbody tr td {
            text-align: center;
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

        .container2 {
            max-width: 400px !important;
        }

        .select2-container {
            width: 100% !important;
        }

        .btn-ft {
            font-size: 1.7rem !important;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="completarPreReg">
        <div class="completarPreReg__bloqueTitulo">
            <h1>COMPLETAR PRE REGISTRO</h1>
        </div>
        <div class="completarPreReg__bloqueTabla">
            <table id="table_id" class="table table-condensed display nowrap" cellspacing="0" width="100%">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Documento</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Upline</th>
                        <th>Paquete</th>
                        <th>Actualizar</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="container2 container modal-dialog" id="modalTamano" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 style="text-align: center; font-weight: bold" class="modal-title" id="exampleModalLabel">Actualizar Registro</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="modal-body1">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label>NOMBRE :</label>
                                    <asp:TextBox runat="server" ID="txtNombre" CssClass="form-control" ReadOnly="true"></asp:TextBox>
                                    <label style="margin-top: 7px;">TIPO DE CLIENTE :</label>
                                    <select runat="server" id="ddlTC" class="form-control text-uppercase">
                                            <option value="01">Socio</option>
                                            <option value="05">Consultor MLM</option>
                                            <option value="03">C. Inteligente</option>
                                    </select>
                                    <label style="margin-top: 7px;">UPLINE :</label>
                                    <select runat="server" id="ddlUpline" class="form-control js-example-templating"></select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button id="btnCancelar" type="reset" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                    <button id="btnActualizar" type="button" class="btn btn-success">Actualizar</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->

    <script src="js/bootstrap4.min.js" type="text/javascript"></script>
    <script src="js/file-uploadv1.js" type="text/javascript"></script>
    <script src="js/proyecto2/jqueryDataTablesPremioSocios.js" type="text/javascript"></script>
    <script src="js/proyecto2/estiloTablasPremioSocios.js" type="text/javascript"></script>
    <script src="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.min.js" type="text/javascript"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@8.8.7/dist/sweetalert2.all.min.js" type="text/javascript"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js" type="text/javascript"></script>
    <script src="js/jquery.numeric.js" type="text/javascript"></script>
    <script type="text/javascript" src="js/CompletarPreRegistro.js?Fv45"></script>
    <script type="text/javascript">
        window.onload = function () {
            if (window.innerWidth < 1148) {
                //document.getElementById("liEmprRegis").style.background = '#E8E8E8';

                document.getElementById("idMenuRed").style.color = 'white';
                //document.getElementById("idMenuRed").style.fontWeight = "700";
                document.getElementById("idMenuRed").classList.add("peso700");
                document.getElementById("idSubMenuDatosPre").style.fontWeight = "700";


                //var naranja = document.getElementById("navDesplegable");
                //naranja.classList.add('menu__item--active2');
            }
            else {
                document.getElementById("idMenuRed").style.color = 'var(--Primary-green)';
                document.getElementById("idMenuRed").style.borderBottom = '3px solid var(--Primary-green)';
                document.getElementById("idMenuRed").style.fontWeight = "600";
                document.getElementById("idSubMenuDatosPre").style.color = 'white';
                document.getElementById("idSubMenuDatosPre").style.fontWeight = "700";
            }

        }
        $(document).ready(function () {
            $(".js-example-templating").select2({
            }); 
        });

        


        
        if (screen.width < 500) {
            let eliminarFiltroMostrarRegistros = document.getElementById("table_id_length");
            eliminarFiltroMostrarRegistros.parentNode.style.position = "absolute";
            eliminarFiltroMostrarRegistros.parentNode.removeChild(eliminarFiltroMostrarRegistros);

            let añadiendoClaseBootstrapXS = document.querySelectorAll("#table_id_wrapper>div:nth-child(1)>div");
            añadiendoClaseBootstrapXS.forEach(function (userItem) {
                userItem.classList.add("col-xs-12");
                //userItem.style.display = "flex";
                //userItem.style.alignItems = "center";
            });
            let añadiendoMarginTopNone = document.querySelector("#table_id_wrapper>div:nth-child(1)>div:nth-child(2)>div");
            añadiendoMarginTopNone.style.marginTop = "0";

            let añadiendoFlexDirectionRow = document.querySelector("#table_id_wrapper>div:nth-child(1)>div:nth-child(2)>div>label");
            añadiendoFlexDirectionRow.style.display = "flex";
            añadiendoFlexDirectionRow.style.alignItems = "center";

            let añadiendoAnchoTotal1 = document.querySelector("#table_id_filter>label");
            añadiendoAnchoTotal1.style.width = "100%";
            let añadiendoAnchoTotal2 = document.querySelector("#table_id_filter>label>input");
            añadiendoAnchoTotal2.style.width = "100%";
        }
        else if (screen.width < 541) {
            let eliminarFiltroMostrarRegistros = document.getElementById("table_id_length");
            eliminarFiltroMostrarRegistros.parentNode.style.position = "absolute";
            eliminarFiltroMostrarRegistros.parentNode.removeChild(eliminarFiltroMostrarRegistros);

            let añadiendoClaseBootstrapXS = document.querySelectorAll("#table_id_wrapper>div:nth-child(1)>div");
            añadiendoClaseBootstrapXS.forEach(function (userItem) {
                userItem.classList.add("col-xs-12");
                userItem.style.display = "flex";
                userItem.style.alignItems = "center";
            });

            let añadiendoMarginTopNone = document.querySelector("#table_id_wrapper>div:nth-child(1)>div:nth-child(2)>div");
            añadiendoMarginTopNone.style.marginTop = "0";

            let añadiendoFlexDirectionRow = document.querySelector("#table_id_wrapper>div:nth-child(1)>div:nth-child(2)>div>label");
            añadiendoFlexDirectionRow.style.display = "flex";
            añadiendoFlexDirectionRow.style.alignItems = "center";

            let añadiendoAnchoTotal1 = document.querySelector("#table_id_filter>label");
            añadiendoAnchoTotal1.style.width = "100%";
            let añadiendoAnchoTotal2 = document.querySelector("#table_id_filter>label>input");
            añadiendoAnchoTotal2.style.width = "100%";
        }
        window.addEventListener("resize", cambiosDeDimensiones);
        function cambiosDeDimensiones() {
            if (screen.width < 500) {
                let eliminarFiltroMostrarRegistros = document.getElementById("table_id_length");
                eliminarFiltroMostrarRegistros.parentNode.style.position = "absolute";
                eliminarFiltroMostrarRegistros.parentNode.removeChild(eliminarFiltroMostrarRegistros);

                let añadiendoClaseBootstrapXS = document.querySelectorAll("#table_id_wrapper>div:nth-child(1)>div");
                añadiendoClaseBootstrapXS.forEach(function (userItem) {
                    userItem.classList.add("col-xs-12");
                    //userItem.style.display = "flex";
                    //userItem.style.alignItems = "center";
                });
                let añadiendoMarginTopNone = document.querySelector("#table_id_wrapper>div:nth-child(1)>div:nth-child(2)>div");
                añadiendoMarginTopNone.style.marginTop = "0";

                let añadiendoFlexDirectionRow = document.querySelector("#table_id_wrapper>div:nth-child(1)>div:nth-child(2)>div>label");
                añadiendoFlexDirectionRow.style.display = "flex";
                añadiendoFlexDirectionRow.style.alignItems = "center";
            }
            else if (screen.width < 541) {
                let eliminarFiltroMostrarRegistros = document.getElementById("table_id_length");
                eliminarFiltroMostrarRegistros.parentNode.style.position = "absolute";
                eliminarFiltroMostrarRegistros.parentNode.removeChild(eliminarFiltroMostrarRegistros);

                let añadiendoClaseBootstrapXS = document.querySelectorAll("#table_id_wrapper>div:nth-child(1)>div");
                añadiendoClaseBootstrapXS.forEach(function (userItem) {
                    userItem.classList.add("col-xs-6");
                    userItem.style.display = "flex";
                    userItem.style.alignItems = "center";
                });

                let añadiendoMarginTopNone = document.querySelector("#table_id_wrapper>div:nth-child(1)>div:nth-child(2)>div");
                añadiendoMarginTopNone.style.marginTop = "0";

                let añadiendoFlexDirectionRow = document.querySelector("#table_id_wrapper>div:nth-child(1)>div:nth-child(2)>div>label");
                añadiendoFlexDirectionRow.style.display = "flex";
                añadiendoFlexDirectionRow.style.alignItems = "center";

                let añadiendoAnchoTotal1 = document.querySelector("#table_id_filter>label");
                añadiendoAnchoTotal1.style.width = "100%";
                let añadiendoAnchoTotal2 = document.querySelector("#table_id_filter>label>input");
                añadiendoAnchoTotal2.style.width = "100%";
            }
        }
        
    </script>
    
</asp:Content>
