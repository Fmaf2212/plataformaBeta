<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="ResumenVentas.aspx.cs" Inherits="SantaNaturaNetworkV3.ResumenVentas" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.10.23/r-2.2.7/datatables.min.css" />

    <link href="css/proyecto2/resumenVentas.css?Fv69" rel="stylesheet" />

    <link href="css/proyecto2/circleProgressBar.css?Fv34" rel="stylesheet" />

    <link href="css/proyecto2/loaderRipple.css" rel="stylesheet" />

    <style>
        .modal {
            display: none; /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0,0,0); /* Fallback color */
            background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
            transition: all 5s ease-in-out;
        }

        /* Modal Content/Box */
        .modal-content {
            background-color: #fefefe;
            margin: 15% auto; /* 15% from the top and centered */
            padding: 20px;
            border: 1px solid #888;
            width: 80%; /* Could be more or less, depending on screen size */
        }

        /* The Close Button */
        .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }

            .close:hover,
            .close:focus {
                color: black;
                text-decoration: none;
                cursor: pointer;
            }

        .myBtn {
            font-size: 12px;
            color: #153285;
            font-weight: 400;
            text-align: center;
            border-radius: 8px;
            border: 1px solid #153285;
            padding: 6.5px 14.5px;
            line-height: .8;
            transition: .3s background, .3s color, .3s border;
            width: fit-content;
        }

            .myBtn:hover {
                background: #D9D9D9;
                border: 1px solid #153285;
            }

            .myBtn:focus {
                background: #F1EFEF;
                outline: none;
                border: 1px solid #153285;
            }

            /*-------------------------------------------------------*/
            .sectionLoader{
                position: relative;
            }
            .lds-ripple div{
                border: 4px solid #6884d3;
            }





    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div id="myModal" class="modal">

        <!-- Modal content -->
        <div class="modal-content">
            <span class="close">&times;</span>
            <p>Some text in the Modal..</p>
        </div>

    </div>

    <div class="bloqueResumenVentas">
        <section class="bloqueResumenVentas__sectionCircle">
            <div class="sectionCircleTop">
                <p>REPORTES MULTINIVEL</p>
                <a href="HistoricoResumenVentas.aspx">Ver histórico</a>
            </div>
            <div class="sectionCircleBody">
                <div class="sectionCircleBody__circle activos">
                    <div class="img"></div>
                    <div class="sectionMiProgreso__porcentaje">
                        <svg id="valuePercentage2" data-percentage="" class="radial-progress2" viewBox="0 0 80 80">
                            <circle class="incomplete" cx="40" cy="40" r="35"></circle>
                            <circle class="complete2" cx="40" cy="40" r="35"></circle>
                            <text class="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)"></text>
                        </svg>
                        <%--<p class="textoProgresoPorcentajeGalaxyFold" >
                            Progreso de Rango Actual
                        </p>--%>
                    </div>
                    <div class="sectionMiProgreso__datos">
                        <p id="clientesActivos"><span></span>/<span></span></p>
                        <span class="number" id="loaderActivos"></span>
                        <p class="title">Activos</p>
                        <p class="desc">Empresarios mínimo 40 ptos.</p>
                        <%--<button id="myBtn2" class="myBtn">Listado</button>--%>
                    </div>
                </div>
                <div class="sectionCircleBody__circle actividad">
                    <div class="img"></div>
                    <div id="bloqueClientesConPedidos" class="sectionMiProgreso__porcentaje">
                        <svg id="valuePercentage1" data-percentage="" class="radial-progress1" viewBox="0 0 80 80">
                            <circle class="incomplete" cx="40" cy="40" r="35"></circle>
                            <circle class="complete1" cx="40" cy="40" r="35"></circle>
                            <text class="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)"></text>
                        </svg>
                        <%--<p class="textoProgresoPorcentajeGalaxyFold" >
                            Progreso de Rango Actual
                        </p>--%>
                    </div>
                    <div>
                        <p id="clientesConPedidos"><span></span>/<span></span></p>
                        <span class="number" id="loaderPedidos"></span>
                        <p class="title">Actividad</p>
                        <p class="desc">Empresarios con pedidos</p>
                        <%--<button id="myBtn" class="myBtn">Listado</button>--%>
                    </div>
                </div>
                <div class="sectionCircleBody__circle capitalizacion" style="display: flex; flex-direction: column; justify-content: center">
                    
                    <div >
                        <%--<p><span style="color: #4a63a9">-30 </span>/<span style="color: #b6c2ce"> 60</span></p>--%>
                        <%--<p>Ingresos</p>--%>
                        <ul style="margin-left: 20px; margin-bottom: 0;">
                            <li style="list-style-type: square; ">Afiliaciones del periodo: <span style="color: green" id="ingresos"></span><span class="number2" id="loaderIngresos"></span></li>
                            
                            <li style="list-style-type: square; ">Empresarios por Comprimir: <span style="color: red" id="comprimidos"></span><span class="number2" id="loaderComprimidos"></span></li>
                                                        
                            <li style="list-style-type: square; ">Capitalización: <span id="capitalizacion"></span><span class="number2" id="loaderCapitalización"></span></li>
                            
                        </ul>
                        <%--<button style="margin: auto" id="myBtn3" class="myBtn">Listado</button>--%>
                        <%--<p>Afiliados: 30% <br /> Por comprimir: 70% </p>--%>
                    </div>
                </div>
                <div class="sectionCircleBody__txtVenta">
                    <div>
                        <p>Empresarios VIP 150</p>
                        <p id="empresarioVIP150"></p>
                        <span class="number" id="loaderEmpresarioVIP150"></span>
                    </div>
                    <div>
                        <p>Puntaje Promedio VIP 150</p>
                        <p id="puntosVIP150promedio"></p>
                        <span class="number" id="loaderVIP150Promedio"></span>
                    </div>
                    
                </div>
                
                <div class="sectionCircleBody__circle actividad">
                    <div class="img"></div>
                    <div id="bloqueRandom" class="sectionMiProgreso__porcentaje">
                        <svg id="valuePercentage3" data-percentage="" class="radial-progress3" viewBox="0 0 80 80">
                            <circle class="incomplete" cx="40" cy="40" r="35"></circle>
                            <circle class="complete3" cx="40" cy="40" r="35"></circle>
                            <text class="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)"></text>
                        </svg>
                        <%--<p class="textoProgresoPorcentajeGalaxyFold" >
                            Progreso de Rango Actual
                        </p>--%>
                    </div>
                    <div>
                        <p id="clientesRandom"><span></span>/<span></span></p>
                        <span class="number" id="loaderRandom"></span>
                        <p class="title">Random</p>
                        <p class="desc">Descripción random</p>
                        <%--<button id="myBtn" class="myBtn">Listado</button>--%>
                    </div>
                </div>
            </div>
        </section>
        <section class="bloqueResumenVentas__sectionTables">
            <div class="sectionTablesTop">
                <div>
                    <span>
                        Top Reportes
                    </span>
                    <p>
                        * El Empresario SNN puede visualizar sus Top reportes, solo si tiene un mínimo de 10 Empresarios en el mapa de patrocinio.
                    </p>
                </div>
                <a href="HistoricoDeTopYVentasPorNivel.aspx">Ver histórico</a>
            </div>
            <div class="sectionTablesBody">
                <div class="bloqueTabla" >
                    <p>Top patrocinio</p>
                    <table id="table_id" class="table table-condensed display nowrap" cellspacing="0" width="100%">
                        <thead>
                            <%--<tr>
                                <th>Ranking</th>
                                <th>Nombres y Apellidos</th>
                                <th>Celular</th>
                                <th>Rango Máximo</th>
                                <th>N° Afiliados</th>
                                <th>Edad Promedio de Afiliados</th>
                                <th>Puntos Patrocinados</th>
                                <th>Departamento</th>
                                <th>Provincia</th>
                                <th>Distrito</th>
                                <th>Patrocinador</th>
                                <th>Celular Patrocinador</th>
                                <th>Diamante Ascendente</th>
                                <th>Celular Diamante Ascendente</th>
                            </tr>--%>
                            <tr>
                                <th>Ranking</th>
                                <th>Nombres y Apellidos</th>
                                <th>Puntos Personales</th>
                                <th>Puntos Patrocinados</th>
                                <th>N° Afiliados</th>
                                <th>Edad Promedio de Afiliados</th>
                                <th>Celular</th>
                                <th>Rango Máximo</th>
                                <th>Departamento</th>
                                <th>Provincia</th>
                                <th>Distrito</th>
                                <th>Patrocinador</th>
                                <th>Celular Patrocinador</th>
                                <th>Diamante Ascendente</th>
                                <th>Celular Diamante Ascendente</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
                <div class="bloqueTabla">
                    <p>Top ventas</p>
                    <div>
                        <table id="table_id2" class="table table-condensed display nowrap" cellspacing="0" width="100%">
                            <thead>
                                <%--<tr>
                                    <th>Ranking</th>
                                    <th>Nombres y Apellidos</th>
                                    <th>Celular</th>
                                    <th>Rango Máximo</th>
                                    <th>Puntos Personales</th>
                                    <th>Departamento</th>
                                    <th>Provincia</th>
                                    <th>Distrito</th>
                                    <th>Patrocinador</th>
                                    <th>Celular Patrocinador</th>
                                    <th>Diamante Ascendente</th>
                                    <th>Celular Diamante Ascendente</th>
                                </tr>--%>
                                <tr>
                                    <th>Ranking</th>
                                    <th>Nombres y Apellidos</th>
                                    <th>Puntos Personales</th>
                                    <th>Celular</th>
                                    <th>Rango Máximo</th>
                                    <th>Departamento</th>
                                    <th>Provincia</th>
                                    <th>Distrito</th>
                                    <th>Patrocinador</th>
                                    <th>Celular Patrocinador</th>
                                    <th>Diamante Ascendente</th>
                                    <th>Celular Diamante Ascendente</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="bloqueTabla">
                    <p>Top emperador</p>
                    <div>
                        <table id="table_id3" class="table table-condensed display nowrap" cellspacing="0" width="100%">
                            <thead>
                                <%--<tr>
                                    <th>Ranking</th>
                                    <th>Nombres y Apellidos</th>
                                    <th>Celular</th>
                                    <th>Rango Máximo</th>
                                    <th>N° Empresarios Vip 150</th>
                                    <th>Puntos Vip</th>
                                    <th>Departamento</th>
                                    <th>Provincia</th>
                                    <th>Distrito</th>
                                    <th>Patrocinador</th>
                                    <th>Celular Patrocinador</th>
                                    <th>Diamante Ascendente</th>
                                    <th>Celular Diamante Ascendente</th>
                                </tr>--%>
                                <tr>
                                    <th>Ranking</th>
                                    <th>Nombres y Apellidos</th>
                                    <th>Puntos Personales</th>
                                    <th>N° Empresarios VIP 150</th>
                                    <th>Puntos VIP 150</th>
                                    <th>Celular</th>
                                    <th>Rango Máximo</th>
                                    <th>Departamento</th>
                                    <th>Provincia</th>
                                    <th>Distrito</th>
                                    <th>Patrocinador</th>
                                    <th>Celular Patrocinador</th>
                                    <th>Diamante Ascendente</th>
                                    <th>Celular Diamante Ascendente</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
                <%--<div class="bloqueTabla">
                    <p>Tabla de ventas por nivel y línea</p>
                    <div>
                        <table id="table_id4" class="table table-condensed display nowrap" cellspacing="0" width="100%">
                            <thead>
                                <tr>
                                    <th>Nivel</th>
                                    <th>LG</th>
                                    <th>LS</th>
                                    <th>LC</th>
                                    <th>Promoción</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>--%>
                <div class="bloqueTabla">
                    <p>Empresarios Inactivos</p>
                    <div class="bloqueSelectEmpresariosInactivos">
                        <label style="font-weight: 600">Periodos Inactivo: </label>
                        <select id="mySelect4" onchange="fillTable4()">
                        </select>
                    </div>
                        
                    
                    <div>
                        <table id="table_id4" class="table table-condensed display nowrap" cellspacing="0" width="100%">
                            <thead>
                                <tr>
                                    <th>Periodos Inactivo</th>
                                    <th>Nombres y Apellidos</th>
                                    <th>Celular</th>
                                    <th>Rango Máximo</th>
                                    <th>Patrocinador</th>
                                    <th>Celular Patrocinador</th>
                                    <th>Diamante Ascendente</th>
                                    <th>Celular Diamante Ascendente</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <!--Para el circle progress bar-->
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha384-tsQFqpEReu7ZLhBV2VZlAu7zcOV+rXbYlF2cqB8txI/8aZajjp4Bqd+V6D5IgvKT" crossorigin="anonymous"></script>

    <!--Para las tablas-->
    <script src="js/bootstrap4.min.js" type="text/javascript"></script>
    <script src="js/proyecto2/jqueryDataTablesPremioSocios.js" type="text/javascript"></script>
    <script src="js/proyecto2/estiloTablasPremioSocios.js" type="text/javascript"></script>

    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

    <script src="js/proyecto2/resumenVentasScript.js?Fv68"></script>
    <script>
        window.onload = function () {
            if (window.innerWidth < 1148) {
                //document.getElementById("liMapaRed").style.background = '#E8E8E8';

                document.getElementById("idMenuRed").style.color = 'white';
                //document.getElementById("idMenuRed").style.fontWeight = "700";
                document.getElementById("idMenuRed").classList.add("peso700");
                document.getElementById("idSubMenuTopReportes").style.fontWeight = "700";


                //var naranja = document.getElementById("navDesplegable");
                //naranja.classList.add('menu__item--active2');
            }
            else {
                document.getElementById("idMenuRed").style.color = 'var(--Primary-green)';
                document.getElementById("idMenuRed").style.borderBottom = '3px solid var(--Primary-green)';
                document.getElementById("idMenuRed").style.fontWeight = "600";

                document.getElementById("idSubMenuTopReportes").style.color = 'white';
                document.getElementById("idSubMenuTopReportes").style.fontWeight = "700";
            }
        };
    </script>
    

</asp:Content>
