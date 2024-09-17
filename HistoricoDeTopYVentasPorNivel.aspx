<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="HistoricoDeTopYVentasPorNivel.aspx.cs" Inherits="SantaNaturaNetworkV3.HistoricoDeTopYVentasPorNivel" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.10.23/r-2.2.7/datatables.min.css" />

    <link href="css/proyecto2/historicoTopYVentasXNivel.css?Fv69" rel="stylesheet" />

    <link href="css/proyecto2/loaderRipple.css" rel="stylesheet" />

    <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
        integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V"
        crossorigin="anonymous" />
    <style>
        .sectionLoader{
                position: relative;
            }
            .lds-ripple div{
                border: 4px solid #6884d3;
            }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="bloqueHistoricoTopVentasXNivel">
        <section class="sectionHistoricoTopVentasXNivel__top">
            <a href="ResumenVentas.aspx">
                <i id="regresarResumenVentas" class="fas fa-arrow-left regresarResumenVentas"></i>
            </a>
            <div>
                <span>TOP REPORTES HISTÓRICO</span>            
                <p>
                    * El Empresario SNN puede visualizar sus Top reportes históricos, solo si tiene un mínimo de 10 Empresarios en el mapa de patrocinio en el periodo seleccionado.
                </p>
            </div>
        </section>
        <section class="sectionHistoricoTopVentasXNivel__body">
            <div class="bloqueTabla">
                <div class="bloqueTabla__top">
                    <p>Top patrocinio</p>
                    <select id="mySelect1" onchange="fillTable1()">
                        
                    </select>
                </div>
                <div class="bloqueTabla__body">
                    <table id="table_id" class="table table-condensed display nowrap" cellspacing="0" width="100%">
                        <thead>
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
                            <%--<tr>
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
                            </tr>--%>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="bloqueTabla">
                <div class="bloqueTabla__top">
                    <p>Top ventas</p>
                    <select id="mySelect2" onchange="fillTable2()">
                        
                    </select>
                </div>
                <div class="bloqueTabla__body">
                    <table id="table_id2" class="table table-condensed display nowrap" cellspacing="0" width="100%">
                        <thead>
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
                            <%--<tr>
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
                                </tr>--%>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="bloqueTabla">
                <div class="bloqueTabla__top">
                    <p>Top emperador</p>
                    <select id="mySelect3" onchange="fillTable3()">
                        
                    </select>
                </div>
                <div class="bloqueTabla__body">
                    <table id="table_id3" class="table table-condensed display nowrap" cellspacing="0" width="100%">
                        <thead>
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
                                <%--<tr>
                                    <th>Ranking</th>
                                    <th>Nombres y Apellidos</th>
                                    <th>Puntos Personales</th>
                                    <th>N° Empresarios Vip 150</th>
                                    <th>Puntos Vip</th>
                                    <th>Celular</th>
                                    <th>Rango Máximo</th>
                                    <th>Departamento</th>
                                    <th>Provincia</th>
                                    <th>Distrito</th>
                                    <th>Patrocinador</th>
                                    <th>Celular Patrocinador</th>
                                    <th>Diamante Ascendente</th>
                                    <th>Celular Diamante Ascendente</th>
                                </tr>--%>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>

            </div>
            <div class="bloqueTabla" style="display: none">
                <div class="bloqueTabla__top">
                    <p>Empresarios Inactivos</p>
                    <select id="mySelect4" onchange="fillTable4()">
                        
                    </select>
                </div>
                <div class="bloqueTabla__body">
                    <table id="table_id4" class="table table-condensed display nowrap" cellspacing="0" width="100%">
                        <thead>
                            <tr>
                                <th>Periodo Inactivo</th>
                                <th>Nombres y Apellidos</th>
                                <th>Celular</th>
                                <th>Rango Máximo</th>
                                <th>Patrocinador</th>
                                <th>Celular Patrocinador</th>
                                <th>Diamante Ascendente</th>
                                <th>Celular Diamante Ascendente</th>
                            </tr>
                                <%--<tr>
                                    <th>Ranking</th>
                                    <th>Nombres y Apellidos</th>
                                    <th>Puntos Personales</th>
                                    <th>N° Empresarios Vip 150</th>
                                    <th>Puntos Vip</th>
                                    <th>Celular</th>
                                    <th>Rango Máximo</th>
                                    <th>Departamento</th>
                                    <th>Provincia</th>
                                    <th>Distrito</th>
                                    <th>Patrocinador</th>
                                    <th>Celular Patrocinador</th>
                                    <th>Diamante Ascendente</th>
                                    <th>Celular Diamante Ascendente</th>
                                </tr>--%>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>

            </div>
            <%--<div class="bloqueTabla">
                <div class="bloqueTabla__top">
                    <p>Tabla de ventas por nivel y línea</p>
                    <select>
                        <option value="value">Periodo</option>
                    </select>
                </div>
                <div class="bloqueTabla__body">
                    <table id="table_id4" class="table table-condensed display nowrap" cellspacing="0" width="100%">
                        <thead>
                            <tr>
                                <th>Nivel</th>
                                <th>LG</th>
                                <th>LS</th>
                                <th>LE</th>
                                <th>H</th>
                                <th>Promoción</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>--%>

        </section>
    </div>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha384-tsQFqpEReu7ZLhBV2VZlAu7zcOV+rXbYlF2cqB8txI/8aZajjp4Bqd+V6D5IgvKT" crossorigin="anonymous"></script>


    <!--Para las tablas-->
    <script src="js/bootstrap4.min.js" type="text/javascript"></script>
    <script src="js/proyecto2/jqueryDataTablesPremioSocios.js" type="text/javascript"></script>
    <script src="js/proyecto2/estiloTablasPremioSocios.js" type="text/javascript"></script>

    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

    <script src="js/proyecto2/historicoTopVentasPorNivel.js?Fv68"></script>
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

                document.getElementById("idSubMenuTopReportes").style.color = 'white';
                document.getElementById("idSubMenuTopReportes").style.fontWeight = "700";
            }
        };
    </script>
</asp:Content>
