<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="TablaLoremIpsum.aspx.cs" Inherits="SantaNaturaNetworkV3.TablaLoremIpsum" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.10.23/r-2.2.7/datatables.min.css" />


    <link href="css/proyecto2/tablaLoremIpsum.css?Fv44" rel="stylesheet" />

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="bloqueTablaLorem">
        <section class="sectionTablaLorem">
            <div class="sectionTablaLorem__top">
                <span>TABLA LOREM IPSUM</span>
            </div>
            <div class="sectionTablaLorem__body">
                <table id="table_id" class="table table-condensed display nowrap" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th>Nombres y Apellidos</th>
                            <th>Periodos de Inactividad</th>
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
    <script>
        $(function () {
            var tabla = $('#table_id').dataTable({
                responsive: true
            });

            for (var i = 0; i < 10; i++) {
                tabla.fnAddData([
                    "Antonio Arias Francia",
                    "Lorem Ipsum",
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

        });
    </script>
</asp:Content>
