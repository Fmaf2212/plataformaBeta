<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="CobroComision.aspx.cs" Inherits="SantaNaturaNetworkV3.CobroComision" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <style>
        .container-parent {
            height: 100vh;
            display: flex;
            align-items: center;
            margin-top: 73px
        }
        @media (orientation: landscape) and (max-width: 1024px) {
            .container-parent {
                height: auto;
            }
        }
        .container {
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 40px 20px 50px;
            max-width: 500px;
            width: 100%;
            text-align: center;
            margin-top: 0;
        }

        /*.container label {
            font-weight: bold;
            font-size: 18px;
        }*/


        /* Selección de Periodo */
        .select-period {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 40px;
            grid-gap: 20px;
        }
        .select-period__label {
            font-weight: bold;
            font-size: 16px;
            margin-bottom: 0;
        }
        .select-period__select {
            padding: 8px;
            font-size: 14px;
            border-radius: 5px;
            border: 1px solid #ccc;
            background-color: #f1f1f1;
            width: 150px;
        }
            .select-period__select:focus-visible {
                outline: none;
            }
        .select-period__select:disabled {
            cursor: not-allowed;
        }

        /* Botones */
        .button-group {
            display: flex;
            justify-content: center;
            gap: 40px;
            margin-bottom: 20px;
        }
        .button-group__button {
            color: white;
            border: none;
            border-radius: 5px;
            padding: 10px 20px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.2s ease;
        }
        .button-group__button:focus {
            outline: none
        }
        .button-group__button--clear {
            background-color: #E9E9E9;
        }
            .button-group__button--clear:hover {
                background-color: #666;
            }
        .button-group__button--consult {
            background-color: #254ab1;
        }
            .button-group__button--consult:not(.button--disabled):hover {
                background-color: #1e3e8b;
            }

        /* Sección de Comisiones */
        .commission-summary {
            background: #E9E9E9;
            border-radius: 40px;
            filter: drop-shadow(0px 5px 2px rgba(0, 0, 0, 0.45));
            width: 40%;
            margin: 60px auto 70px;
            padding: 15px 40px;

            display: flex; 
            flex-direction: column; 
            align-items: center; 
            justify-content: center; 
            height: 100%;
        }
        .commission-summary article{
            display: grid;
            grid-template-columns: 1fr .8fr;
            align-items: center;
            width: 100%;
        }
        .commission-summary article .commission-summary__text{
            font-size: 15px;
            font-weight: 500;
            margin: 0;
            line-height: 1;
            text-align: end;
        }
        .commission-summary article .commission-summary__text#commission-available-title{
            font-size: 16px;
            font-weight: bolder;
        }
        .commission-summary article .commission-summary__amount#valorComiDispo{
            font-size: 22px;
            font-weight: bolder;
        }
        .commission-summary article .commission-summary__amount {
            font-size: 20px;
            color: #153285;
            font-weight: 500;
            text-align: end;
            line-height: 1;
            margin-top: 5px;
            margin-bottom: 10px;
        }
        /* Estilo para el título oculto visualmente */
        .visually-hidden {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }

        /*.comision-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-row-gap: 10px;
            text-align: right;
            width: 30%;
            margin: 40px auto;
        }
        .comision-container label {
            text-align: left;
            font-weight: bold;
            font-size: 14px;
        }*/

        .file-container {
            display: flex;
            justify-content: space-evenly;
            margin-bottom: 0;
        }
        .file-container .file-container__group {
            display: flex; 
            flex-direction: column; 
            align-items: center;
            flex: 1;
            max-width: 400px;
        }
        .file-container .file-container__group label {
            cursor: pointer;
            transition: transform 0.3s ease;
        }
        .file-container .file-container__group label:hover {
            transform: scale(1.05);
        }        
        .file-container .file-container__group input[type="file"] {
            display: none; 
        }
        .file-container .file-container__group .file-name {
            margin-top: 10px;
            display: block;
            font-size: 14px;
            color: #555;
            text-wrap: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            width: 100%;
        }

        .file-upload button {     
            justify-content: center; 
            margin-top: 70px;
        }
        .file-upload button.file-upload__button {            
            background-color: #9F8948;
            color: white;
            font-size: 16px;
            font-weight: bold;
            padding: 12px 24px;
            border-radius: 5px;
            border: 1px solid transparent;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: background-color 0.2s ease, filter 0.2s ease;
        }
        .file-upload button.file-upload__button:not(.button--disabled):hover {            
            background-color: #8F7B42;
        }        

        .button-group__button.button--disabled,
        .file-upload button.file-upload__button.button--disabled { 
            cursor: not-allowed;
            filter: opacity(0.5);
        }
        .file-upload button.file-upload__button:focus {
            outline: none
        }

        .moneda{
            display: none
        }

        @media (max-width: 1199px){
            .commission-summary{
                width: 50%;
            }            
            .file-container .file-container__group {
                max-width: 300px;
            }
        }

        @media (max-width: 992px){
            .container{
                box-shadow: none;
            }
            .commission-summary{
                width: 465px;
            }
        }        

        @media (max-width: 767px){
            .commission-summary{
                width: 80%;
                padding: 20px 30px 10px;
            }
            .file-container .file-container__group{
                max-width: 200px;
            }
        }

        @media (max-width: 575px){
            .commission-summary{
                width: 90%;
            }
        }

        @media (max-width: 501px){
            .container-parent{
                margin-top: 45px;                
                height: calc(100vh - 95px);
            }
        }

        @media (max-width: 541px) and (max-height: 880px) {
            .container-parent {
                height: 100%;
            }
        }

        @media (max-width: 462px){
            .commission-summary{
                grid-gap: 15px;
            }
            .commission-summary article{
                grid-template-columns: 1fr;
            }
            .commission-summary article .commission-summary__text,
            .commission-summary article .commission-summary__amount{
                text-align: center;
            }
            .file-container{
                flex-direction: column;
                grid-gap: 40px;
                align-items: center;
            }
            .commission-summary{
                margin: 40px auto 50px;
            }
            .file-upload button{
                margin-top: 50px;
            }
            .file-container .file-container__group label img{
                width: 20%;
            }
        }
        div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm),
        div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){
            font-size: 12px !important;
        }
        div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus,
        div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus{
            outline: none;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="container-parent">
        <div class="container">
            <div class="select-period">
                <label for="periodo" class="select-period__label">PERIODO COMISIÓN</label>
                <select id="periodo" class="select-period__select" onchange="searchSelect()">
                </select>
            </div>

            <div class="button-group">
                <button id="btnLimpiar" class="button-group__button button-group__button--clear" type="button">Limpiar</button>
                <button id="btnConsultar" class="button-group__button button-group__button--consult" type="button" disabled>Consultar</button>
            </div>

            <section class="commission-summary" aria-labelledby="commission-summary-title">
                <div style="display: none; flex-direction: column; justify-content: flex-start; margin-bottom: 10px; background-color: #fff; box-shadow: inset 0px 0px 14px 2px #E9E9E9; padding: 10px 15px;">
                    <span style="display: none">Período comisión seleccionado: </span>
                    <div style="font-size: 16px; color: #153285; text-transform: uppercase;"><strong id="strMesPer"></strong> <strong id="strAnioPer"></strong> <strong id="strCicloPer"></strong></div>
                </div>
                <article aria-labelledby="commission-without-igv-title">
                    <h3 id="commission-without-igv-title" class="commission-summary__text">COMISIÓN SIN IGV:</h3>
                    <p class="commission-summary__amount" id="valorMontoSinIgv" aria-describedby="commission-without-igv-title">
                        <span class="moneda">S/. </span>S/. 0.00
                    </p>
                </article>
                <article aria-labelledby="igv-title">
                    <h3 id="igv-title" class="commission-summary__text">IGV:</h3>
                    <p class="commission-summary__amount" id="valorIgv" aria-describedby="igv-title">
                        <span class="moneda">S/. </span>S/. 0.00
                    </p>
                </article>
                <article aria-labelledby="commission-available-title">
                    <h3 id="commission-available-title" class="commission-summary__text">COMISIÓN DISPONIBLE:</h3>
                    <p class="commission-summary__amount" id="valorComiDispo" aria-describedby="commission-available-title">
                        <span class="moneda">S/. </span>S/. 0.00
                    </p>
                </article>
            </section>

            <div class="file-container">
                <div class="file-container__group" style="">
                    <label for="pdfUpload" class="btn-file">
                        <img src="img/pdf-Img.png" alt="Alternate Text" width="96"/>
                    </label>
                    <input type="file" id="pdfUpload" name="pdfUpload" accept=".pdf" />
                    <span id="file-name-pdf" class="file-name">Ningún archivo seleccionado</span>
                </div>
    
                <div class="file-container__group" style="display: flex; flex-direction: column; align-items: center">
                    <label for="xmlUpload" class="btn-file">
                        <img src="img/xml-Img.png" alt="Alternate Text" width="96"/>
                    </label>
                    <input type="file" id="xmlUpload" name="xmlUpload" accept=".xml" />
                    <span id="file-name-xml" class="file-name">Ningún archivo seleccionado</span>
                </div>
            </div>

            <div class="file-upload" style="">
                <button id="btnCargarArchivos" class="file-upload__button" type="button">Cargar archivos</button>
            </div>
        </div>
    </div>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>    
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="js/ArrayComisionesPrueba.js"></script>
    <script src="js/proyecto2/cobroComision.js"></script>
    <script type="text/javascript">        
        window.onload = function () {
            if (window.innerWidth < 1148) {
                //document.getElementById("liMapaRed").style.background = '#E8E8E8';

                document.getElementById("clicBonif").style.color = 'white';
                //document.getElementById("idMenuRed").style.fontWeight = "700";
                document.getElementById("clicBonif").classList.add("peso700");
                document.getElementById("idSubMenuCobrarComi").style.fontWeight = "700";


                //var naranja = document.getElementById("navDesplegable");
                //naranja.classList.add('menu__item--active2');
            }
            else {
                document.getElementById("clicBonif").style.color = 'white';
                document.getElementById("clicBonif").style.borderBottom = '3px solid white';

                document.getElementById("idSubMenuCobrarComi").style.color = 'white';
                document.getElementById("idSubMenuCobrarComi").style.fontWeight = "700";
            }
        };
    </script>

</asp:Content>
