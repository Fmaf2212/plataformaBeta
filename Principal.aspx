<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="Principal.aspx.cs" Inherits="SantaNaturaNetwork.Novedades" %>

<%@ OutputCache Location="None" NoStore="true" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="css/proyecto2/IndexCDRStyles.css" rel="stylesheet" />
    
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <script src="js/JQUERY1.1.min.js"></script>
    <script src="js/bootstrap4.min.js"></script>
    <div class="fondoYacha">
        <img class="imgLogoYachaPagPrin" src="img/logoYACHAYWASIPagPrincipal.png" alt="Alternate Text" />
        <img class="imgPagPrin" src="img/imgPagPrincipal1920x1378.png" alt="Alternate Text" />
    </div>
    <div class="modal" id="ModalTerminos" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" data-backdrop="static" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title font-weight-bold" id="Index_h5_1" runat="server">Términos y condiciones</h5>
                    </div>
                    <div class="modal-body">
                        <fieldset id="ContenidoVerificarPreguntas" class="scheduler-border" style="margin-top: 10px;">
                            <div class="row">
                                <div class="col-lg-11" style="margin: 0px 0px 5px 20px;">
                                    <span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span>&nbsp;<a href="https://tienda.mundosantanatura.com/TerminosYachaiWasi.aspx" target="_blank" id="Index_a_1" runat="server">Click</a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-11" style="margin: 0px 0px 5px 20px; background-color: lemonchiffon">
                                    <label id="Index_label_1" runat="server"><input type="checkbox" id="cbox1" value="first_checkbox">&nbsp;Aceptar</label>
                                </div>
                            </div>
                            <br>
                        </fieldset>
                    </div>
                    <div class="modal-footer ">
                        <button type="button" class="btn btn-lg btn-success" id="btn_validar_termino" runat="server" onclick="GuardarTerminos();" style="background-color:#262660">
                            <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>&nbsp;Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    <link rel="stylesheet" href="assets/Estilos/alertify.core.css" />
    <link rel="stylesheet" href="assets/Estilos/alertify.default.css" id="toggleCSS" />
    <script src="assets/Estilos/alertify.min.js" type="text/javascript"></script>

    <style>
        .alertify {
            background: #FFF;
            border: 10px solid #f8f9fa;
            border: 10px solid #f8f9fa;
        }
        .alertify-button-ok, .alertify-button-ok:hover, .alertify-button-ok:focus {
            background-color: #1B1464;
            border: 1px solid #3B7808;
        }
    </style>
    <script>
        window.onload = function () {
            document.getElementById("principal").style.color = '#79B729';
            document.getElementById("principal").style.textShadow = '0px 0px 4px rgbA(229, 246, 27, 0.8)';
        }

        function Open_Terminos() {
            $('#ModalTerminos').modal('show');
        }

        function GuardarTerminos() {
            var check = document.getElementById("cbox1").checked;        
            if (check == true) {
                $.ajax({
                    type: 'POST',
                    url: 'Principal.aspx/GuardarTerminos',
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    cache: false,
                    data: '{}',
                    success: function (data) {
                        ndata = data.d;
                        if (ndata == 'OK') {
                            alerta("OK");
                            $('#ModalTerminos').modal('hide');
                        } else {
                             error("NOK");
                        }
                    }
                })
            }
            else {
               error("VACIO");
            }           
        }

        function alerta(mensaje) {
            if (mensaje == 'OK') {
                alertify.alert("<b>Correct Registration</b>", function () {
                });
            }

        }

        function error(mensaje) {
            if (mensaje == "VACIO") {
                alertify.error("You must accept the terms.");
            }
            if (mensaje == "NOK") {
                alertify.error("Incorrect registration. Please try again. If it persists, Inform the System Administrator.");
            }
        }
    </script>
</asp:Content>
