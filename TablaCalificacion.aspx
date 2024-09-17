<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="TablaCalificacion.aspx.cs" Inherits="SantaNaturaNetworkV3.CabinaCalificacion" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="css/proyecto2/estilosTablaCalificacion.css?Fv42" rel="stylesheet" />
    <style>
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="cabinaCali">
        <div class="cabinaCali__titulo">
            <p>TABLA DE CALIFICACION</p>
        </div>
        <div class="cabinaCali__contenido">
            <div class="progresoRango">
                <div class="progresoRango__titulo">
                    <p>PROGRESO DE MI RANGO</p>
                </div>
                <div class="progresoRango__semiCirculo">
                    <div id="valuePercentage" class="circular-progress rango"></div>
                </div>
            </div>
            <div class="tablaInfoProgreso">
                <table class="table-bordered">
                    <thead>
                        <tr>
                            <th><p>RANGO ACTUAL</p><p class="thead__valor"> <%=RANGO %></p></th>
                            <th><p>OBJETIVO</p><p class="thead__valor"><%=RANGOPROXIMO %></p></th>
                            <th>PROGRESO</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <p class="tbody__titulo">Puntos Personales</p>
                                <p><%=PUNTOS %></p>
                            </td>
                            <td>
                                <p class="tbody__titulo">Puntos Personales requeridos</p>
                                <p><%=PUNTOS_R %></p>
                            </td>
                            <td class="tbody__valorProgreso"><%=PUNTOS_P %>%</td>
                        </tr>
                        <tr>
                            <td>
                                <p class="tbody__titulo">Activos Directos</p>
                                <p><%=ACTIVOS_DIRECTOS %></p>
                            </td>
                            <td>
                                <p class="tbody__titulo">Activos Directos requeridos</p>
                                <p><%=ACTIVOS_DIRECTOS_R %></p>
                            </td>
                            <td class="tbody__valorProgreso"><%=ACTIVOS_DIRECTOS_P %>%</td>
                        </tr>
                        <tr>
                            <td>
                                <p class="tbody__titulo">Líneas Calificadas</p>
                                <p><%=LINEAS_CALIFICADAS %></p>
                            </td>
                            <td>
                                <p class="tbody__titulo">Líneas Calificadas requeridas</p>
                                <p><%=LINEAS_CALIFICADAS_R %></p>
                            </td>
                            <td class="tbody__valorProgreso"><%=LINEAS_CALIFICADAS_P %>%</td>
                        </tr>
                        <tr>
                            <td>
                                <p class="tbody__titulo">Volumen de Calificación</p>
                                <p><%=VOLUMEN %></p>
                            </td>
                            <td>
                                <p class="tbody__titulo">Volumen de Calificación requerida</p>
                                <p><%=VOLUMEN_R %></p>
                            </td>
                            <td class="tbody__valorProgreso"><%=VOLUMEN_P %>%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <script type="text/javascript">

        window.onload = function () {
            if (window.innerWidth < 1148) {
                //document.getElementById("liTablaCali").style.background = '#E8E8E8';
                
                document.getElementById("idMenuRed").style.color = 'white';
                //document.getElementById("idMenuRed").style.fontWeight = "700";
                document.getElementById("idMenuRed").classList.add("peso700");
                document.getElementById("idSubMenuTablaCalificacion").style.fontWeight = "700";


                //var naranja = document.getElementById("navDesplegable");
                //naranja.classList.add('menu__item--active2');
            }
            else {
                document.getElementById("idMenuRed").style.color = 'var(--Primary-green)';
                document.getElementById("idMenuRed").style.borderBottom = '3px solid var(--Primary-green)';
                document.getElementById("idMenuRed").style.fontWeight = "600";
                document.getElementById("idSubMenuTablaCalificacion").style.color = 'white';
                document.getElementById("idSubMenuTablaCalificacion").style.fontWeight = "700";
            }            
        }

        $(document).ready(function () {
            var rango = <%=PORCENTAJE %>;
            var porcentaje = (rango / 100) * 180;

            $("#valuePercentage").attr('style', 'transform:rotate(' + porcentaje + 'deg); ');

            document.styleSheets[0].addRule('.rango:before', 'content: "' + rango + '%"; transform: rotate(-' + porcentaje + 'deg);');

            document.styleSheets[0].addRule('.rango:after', 'transform: scale(1.1) rotate(-' + porcentaje + 'deg); ');

            document.styleSheets[0].addRule('.rango:after', 'content: "<%=RANGOPROXIMO %>"; ');

            //if (rango > 90) {
            //    var color3 = rango /2;
            //    var color2 = color3-5;
            //    var color1 = 0;
            //    var angulo = 0;

            //    document.styleSheets[0].addRule('.rango', 'background: linear-gradient(' + angulo + 'deg, #204B9E ' + color1 + '%, #3179CC ' + color2 + '%, #fff ' + color3 + '% );');
            //}
            //else {
            //    var color3 = rango;
            //    var color2 = (color3 - (rango / 3));
            //    var color1 = (color3 - color2);
            //    var angulo = 0;

            //    document.styleSheets[0].addRule('.rango', 'background: linear-gradient(' + angulo + 'deg, #204B9E ' + color1 + '%, #3179CC ' + color2 + '%, #fff ' + color3 + '% );');
            //}

            

        });


    </script>
</asp:Content>
