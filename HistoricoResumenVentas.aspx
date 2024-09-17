<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="HistoricoResumenVentas.aspx.cs" Inherits="SantaNaturaNetworkV3.HistoricoResumenVentas" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.10.23/r-2.2.7/datatables.min.css" />

    <link href="css/proyecto2/historicoResumenVentas.css?Fv71" rel="stylesheet" />

    <link href="css/proyecto2/resumenVentas.css?Fv59" rel="stylesheet" />

    <link href="css/proyecto2/circleProgressBar.css?Fv34" rel="stylesheet" />

    <link href="css/proyecto2/loaderRipple.css" rel="stylesheet" />

    <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
        integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V"
        crossorigin="anonymous" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="bloqueHistoricoResumenVentas">
        <section class="sectionHistoricoResumenVentas">
            <div class="sectionHistoricoResumenVentas__top">
                <a href="ResumenVentas.aspx">
                    <i id="regresarResumenVentas" class="fas fa-arrow-left regresarResumenVentas"></i>
                </a>
                <span>HISTÓRICO DE REPORTES MULTINIVEL</span>
            </div>
            <div class="bloqueTabla__top">
                <select id="mySelect1" onchange="fillTable1()">
                </select>
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
                        <p class="desc">Clientes mínimo 40 ptos.</p>
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
                        <p class="desc">Clientes con pedidos</p>
                        <%--<button id="myBtn" class="myBtn">Listado</button>--%>
                    </div>
                </div>
                <div class="sectionCircleBody__circle capitalizacion" style="display: flex; flex-direction: column; justify-content: center">

                    <div>
                        <%--<p><span style="color: #4a63a9">-30 </span>/<span style="color: #b6c2ce"> 60</span></p>--%>
                        <%--<p>Ingresos</p>--%>
                        <ul style="margin-left: 20px;">
                            <li style="list-style-type: square;">Afiliaciones del periodo: <span style="color: green" id="ingresos"></span><span class="number2" id="loaderIngresos"></span></li>

                            <li style="list-style-type: square;">Comprimidos: <span style="color: red" id="comprimidos"></span><span class="number2" id="loaderComprimidos"></span></li>

                            <li style="list-style-type: square;">Capitalización: <span id="capitalizacion"></span><span class="number2" id="loaderCapitalización"></span></li>

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
            <div class="sectionHistoricoResumenVentas__body" style="display: none">
                <table id="table_id" class="table table-condensed display nowrap" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Cabecera 1</th>
                            <th>Cabecera 2</th>
                            <th>Cabecera 3</th>
                            <th>Cabecera 4</th>
                            <th>Cabecera 5</th>
                            <th>Cabecera 6</th>
                            <th>Cabecera 7</th>
                            <th>Cabecera 8</th>
                            <th>Cabecera 9</th>
                            <th>Cabecera 10</th>
                            <th>Cabecera 11</th>
                            <th>Cabecera 12</th>
                            <th>Cabecera 13</th>
                            <th>Cabecera 14</th>
                            <th>Cabecera 15</th>
                            <th>Cabecera 16</th>
                            <th>Cabecera 17</th>
                            <th>Cabecera 18</th>
                            <th>Cabecera 19</th>
                            <th>Cabecera 20</th>
                            <th>Cabecera 21</th>
                            <th>Cabecera 22</th>
                            <th>Cabecera 23</th>
                            <th>Cabecera 24</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </section>
    </div>

    <script src="js/bootstrap4.min.js" type="text/javascript"></script>
    <script src="js/proyecto2/jqueryDataTablesPremioSocios.js" type="text/javascript"></script>
    <script src="js/proyecto2/estiloTablasPremioSocios.js" type="text/javascript"></script>

    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

    <script src="js/proyecto2/historicoResumenVentas.js?Fv66"></script>
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
    <script>
        //Para colocar valores a las tablas
        var tabla = $('#table_id').dataTable({
            responsive: true
        });

        for (var i = 0; i < 8; i++) {
            tabla.fnAddData([
                "",
                "S/00.00",
                "S/00.00",
                "S/00.00",
                "S/00.00",
                "S/00.00",
                "S/00.00",
                "S/00.00",
                "S/00.00",
                "S/00.00",
                "S/00.00",
                "S/00.00",
                "S/00.00",
                "S/00.00",
                "S/00.00",
                "S/00.00",
                "S/00.00",
                "S/00.00",
                "S/00.00",
                "S/00.00",
                "S/00.00",
                "S/00.00",
                "S/00.00",
                "S/00.00",
                "S/00.00",
            ]);
        }

        let eliminarFiltroMostrarRegistros = document.getElementById("table_id_length");
        eliminarFiltroMostrarRegistros.parentNode.style.position = "absolute";
        eliminarFiltroMostrarRegistros.parentNode.removeChild(eliminarFiltroMostrarRegistros);
        let cambiarClase = document.querySelector("#table_id_wrapper > div:nth-child(1) > div:nth-child(2)");
        cambiarClase.classList.remove("col-sm-6");
        cambiarClase.classList.add("col-sm-12");

        const miPrimerCodiguito = () => {

            let eliminarMostrandoTotalRegistros1 = document.querySelector("#table_id_wrapper>div:nth-child(3)>div:nth-child(1)");
            let eliminarMostrandoTotalRegistros2 = document.querySelector("#table_id_wrapper>div:nth-child(3)");
            eliminarMostrandoTotalRegistros2.removeChild(eliminarMostrandoTotalRegistros1)

            let expandirAnteriorSiguiente = document.querySelector("#table_id_wrapper>div:nth-child(3)>div>div");
            expandirAnteriorSiguiente.style.width = "100%";
            expandirAnteriorSiguiente.style.display = "flex";
            expandirAnteriorSiguiente.style.justifyContent = "center";
            expandirAnteriorSiguiente.style.margin = "0";

            let añadiendoTableResponsive = document.querySelector("#table_id_wrapper>div:nth-child(2)>div");
            añadiendoTableResponsive.classList.add("table-responsive");

            let quitandoTextoLabelBuscar = document.querySelector("#table_id_wrapper>div:nth-child(1)>div:nth-child(2)>div>label");

            quitandoTextoLabelBuscar.firstChild.textContent = "";

            let añadiendoPlaceholder = document.querySelector("#table_id_wrapper>div:nth-child(1)>div:nth-child(2)>div>label>input");
            añadiendoPlaceholder.placeholder = '  Buscar';
            console.log(window.innerWidth);

            let cambiarColDe7a12 = document.querySelector("#table_id_wrapper>div:nth-child(3)>div");
            cambiarColDe7a12.classList.replace("col-sm-7", "col-sm-12")

        }

        miPrimerCodiguito();
    </script>
</asp:Content>


