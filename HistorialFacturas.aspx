<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="HistorialFacturas.aspx.cs" Inherits="SantaNaturaNetworkV3.HistorialFacturas1" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

    <link href="assets/css/demo.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <style>
        .swal2-checkbox, .swal2-radio {
            display: none !important;
        }

        label {
            display: flex !important;
            align-items: baseline;
            justify-content: space-evenly;
        }

        #bloqueMayor {
            display: flex;
            justify-content: space-around;
            margin-top: 160px;
            flex-wrap: wrap
        }

        .bajarCombo {
            margin-top: 0px !important;
        }

        .content-table {
            border-collapse: collapse;
            margin: 25px auto;
            font-size: 0.9em;
            min-width: 400px;
            width: 100%;
            border-radius: 5px 5px 0 0;
            overflow: hidden;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
        }

            .content-table thead tr {
                background-color: var(--Light-primary);
                color: #ffffff;
                font-weight: 900;
                font-size: 18px;
            }

            .content-table th, .content-table td {
                padding: 12px 15px !important;
            }

            .content-table tbody tr {
                border-bottom: 1px solid #dddddd;
            }

                .content-table tbody tr:nth-of-type(even) {
                    background-color: #f3f3f3;
                    font-weight: bold;
                    color: #009897;
                }

                .content-table tbody tr:last-of-type {
                    border-bottom: 2px solid #009897;
                }

                .content-table tbody tr.active-row {
                    font-weight: bold;
                    color: #009897;
                }

            .content-table > thead > tr > th:nth-child(1) {
                width: 22%;
            }

        .table-bordered > thead > tr > th, .table-bordered > thead > tr > td {
            font-weight: 600;
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
            max-width: 100% !important;
            height: min-content;
            /*width: min-content !important;*/
        }

        .select2-container {
            width: 100% !important;
        }

        .btn-ft {
            font-size: 1.7rem !important;
        }

        .btnClose {
            transform: scale(1.5);
            transition: .2s ease all;
        }


        .centrarSpan{
            text-align: center;
            height: 20px;
            overflow: hidden;
        }

        .movimiento1{
            animation: shake 0.4s 1;
        }
        .movimiento2{
            animation: shake2 0.4s 1;
        }

        @keyframes shake {
            0% {
                transform: rotate(3deg) scale(1);
            }

            20% {
                transform: rotate(-3deg) scale(1);
            }

            40% {
                transform: rotate(3deg) scale(1);
            }

            60% {
                transform: rotate(-3deg) scale(1);
            }

            80% {
                transform: rotate(3deg) scale(1);
            }

            100% {
                transform: rotate(0) scale(1);
            }
        }
        @keyframes shake2 {
            0% {
                transform: rotate(3deg) scale(1);
            }

            20% {
                transform: rotate(-3deg) scale(1);
            }

            40% {
                transform: rotate(3deg) scale(1);
            }

            60% {
                transform: rotate(-3deg) scale(1);
            }

            80% {
                transform: rotate(3deg) scale(1);
            }

            100% {
                transform: rotate(0) scale(1);
            }
        }
    </style>
    <link rel="stylesheet" type="text/css" href="css/file-upload.css" />
    <link rel="stylesheet" href="css/bootstrapv2.min.css">
    <link href="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/css/select2.min.css" rel="stylesheet" />

    <link href="css/proyecto2/estilosHistorialFacturas.css?Fv39" rel="stylesheet" />
    <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
        integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V"
        crossorigin="anonymous" />

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="box box-success">
        <h1>RECEPCIÓN DE FACTURAS DE COMISIÓN</h1>
        <div class="seccionAdjuntarPDF">
            <div class="bloqueAdjuntarPDF">
                <div class="cboPais combito">
                    <asp:DropDownList ID="cboPais" CssClass="ddlMapaDeRed" Width="100%" runat="server">                   
                    </asp:DropDownList>
                </div>
                <div class="cboPeriodo combito">
                    <asp:DropDownList ID="cboPeriodo" CssClass="ddlMapaDeRed" Width="100%" runat="server">
                    </asp:DropDownList>
                </div>
                <div class="btnAdjuntar">
                    <button id="btnNuevaFacturacion" type="button" value="Adjuntar" >Adjuntar</button>
                </div>
            </div>
        </div>
        <div class="box-body table-responsive" style="display: flex; justify-content: space-around; flex-wrap: wrap">
            <%--<div class="col-md-7">
                <button type="button" class="btn btn-primary" style="font-weight: bold; font-size: 1.1rem; margin-left: 11px" data-toggle="modal" data-target="#exampleModal" id="btnNuevaFacturacion">
                    Nueva Factura
                </button>
            </div>--%>
            <div class="col-md-4">
                <div class="box-body">
                    <div class="form-group">
                        <!-- Modal -->
                        <%--<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="container2 container modal-dialog" id="modalTamano" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 style="text-align: center; font-weight: bold" class="modal-title" id="exampleModalLabel">Ingrese Factura</h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="modal-body1">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label>Seleccione Periodo</label>
                                                        <asp:DropDownList runat="server" ID="ddlPeriodo" CssClass="form-control js-example-templating" Width="100%" />
                                                        <label style="margin-top:8px;">Factura a nombre de:</label>
                                                        <asp:DropDownList runat="server" ID="ddlCliente" CssClass="form-control" onchange="mostrarRUC(this);">
                                                            <asp:ListItem Text="Seleccione" Value="0"></asp:ListItem>
                                                        </asp:DropDownList>
                                                        <br>
                                                        <div id="bloqRUC">
                                                            <label>Nro. RUC</label>
                                                            <asp:TextBox runat="server" ID="txtRUC" CssClass="form-control solo-numero"></asp:TextBox>
                                                        </div>
                                                        <br>
                                                        <div id="bloqPDF">
                                                            <label>Adjunte PDF</label>
                                                        <label style="width: auto;" class="file-upload btn btn-success">
                                                            Ingrese el archivo PDF ...
                                                                                    <asp:FileUpload ID="archivoPDF" runat="server" accept=".pdf" />
                                                        </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button id="btnCancelar" type="reset" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                        <button id="btnRegistrar" type="button" class="btn btn-success">Registrar</button>
                                        <button id="btnActualizar" type="button" class="btn btn-success">Actualizar</button>
                                    </div>
                                </div>
                            </div>
                        </div>--%>
                        <!-- Modal 01-->
                        <div class="modal fade bloqueModal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="container2 container modal-dialog" id="modalTamano" role="document">
                                <div class="modal-content contenidoModal">
                                    <div class="modal-header bloqueHeaderImagenes">
                                        <h4 class="bloqueHeaderImagenes__title" id="exampleModalLabel">Adjunte el archivo que desee registrar</h4>
                                        <button id="btnCerrarModal" type="button" class="close btnClose" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true"><i class="fas fa-times"></i></span>
                                        </button>
                                    </div>
                                    <div class="modal-body bloqueBodyImagenes">
                                        <div class="modal-body1">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group bodyImagenes">
                                                        <div>
                                                            <label for="archivoEXCEL"></label>
                                                            <span class="archivoEXCEL">
                                                                <input type="file" id="archivoEXCEL" class="input-file" value="Nngun archivo ha seleccionado"></span>
                                                            <div id="bloqueNombreXML" class="centrarSpan">
                                                                <span id="nombreXML" class="nombreDelArchivo"></span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <label for="archivoPDF"></label>
                                                            <span class="archivoPDF">
                                                                <input type="file" id="archivoPDF" class="input-file" value="Nngun archivo ha seleccionado"></span>
                                                            <div id="bloqueNombrePDF" class="centrarSpan">
                                                                <span id="nombrePDF" class="nombreDelArchivo"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                    <div class="modal-footer bloqueFooterImagenes">
                                        <button id="btnValidar" type="button" class="btnValidar" >Validar</button>
                                        <div style="height: 66.5px">
                                            <p id="mensajeErrorValidacion" class="mensajeErrorValidacion">* El nombre del archivo PDF debe coincidir con el archivo XML adjunto. Vuelva a intentarlo.</p>
                                            <p id="mensajeErrorValidacion2" class="mensajeErrorValidacion2">* Debe ingresar ambos archivo.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Modal 02-->
                        <div class="modal fade bloqueModal" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="container2 container modal-dialog" id="modalTamano2" role="document">
                                <div class="modal-content contenidoModalDatosCorregidos">
                                    <div class="modal-header bloqueHeaderDatosCorregidos">
                                        <h4 class="bloqueHeaderImagenes__title" id="exampleModalLabel2">La validación no se logró completar, porfavor corrija los datos como se detalla en la columna <span style="font-weight: 500;">Datos Corregidos</span> y vuelva a adjuntar el archivo:</h4>
                                        <button id="btnCerrarModal2" type="button" class="close btnClose" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true"><i class="fas fa-times"></i></span>
                                        </button>
                                    </div>
                                    <div class="modal-body bloqueBodyDatosCorregidos">
                                        <div class="modal-body1">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group bodyImagenes">
                                                        <table class="table-responsive table-fill">
                                                            <thead>
                                                                <tr>
                                                                    <th class="table-left">Datos Originales</th>
                                                                    <th class="table-left">Datos Corregidos</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody class="table-hover">
                                                                <tr>
                                                                    <td class="text-left">1. N° RUC Empresa:<br />1070178852858558525854</td>
                                                                    <td class="text-left">1. N° RUC Empresa:<br /><span class="green">Correcto</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="text-left">2. Detracción:<br /> 12.6</td>
                                                                    <td class="text-left">2. Detracción:<br /> <span class="red">Reemplazar por 16.5</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="text-left">3. Campo 3:<br /> Lorem Ipsum</td>
                                                                    <td class="text-left">3. Campo 3:<br /> <span class="green">Correcto</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="text-left">4. Campo 4:<br /> Lorem Ipsum</td>
                                                                    <td class="text-left">4. Campo 4:<br /> <span class="green">Correcto</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="text-left">5. Campo 5:<br /> Lorem Ipsum</td>
                                                                    <td class="text-left">5. Campo 5:<br /> <span class="green">Correcto</span></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer bloqueFooterImagenes">
                                        <button id="btnValidar2" type="button" class="btnValidar" >Aceptar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Modal 03-->
                        <div class="modal fade bloqueModal" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="container2 container modal-dialog" id="modalTamano3" role="document">
                                <div class="modal-content contenidoModalValidadoCorrectamente">
                                    <div class="modal-body bloqueBodyValidadoCorrectamente">
                                        <div class="modal-body1">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group bodyValidadoCorrectamente">
                                                        <div class="imgValidadoCorrectamente">
                                                            <img src="img/perfectoImg.jpg" width="90" alt="Alternate Text" />
                                                        </div>
                                                        <div class="tituloValidadoCorrectamente">
                                                            <span>PERFECTO!</span>
                                                        </div>
                                                        <div class="descripcionValidadoCorrectamente"><span>Los archivos han sido validados correctamente</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer bloqueFooterImagenes">
                                        <button id="btnValidar3" type="button" class="btnValidar">OK</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <table id="tbl_facturacion" class="content-table table-bordered table-hover text-center">
                    <thead>
                        <tr>
                            <%--<th style="text-align: center;">DNI</th>
                            <th style="text-align: center;">SOCIO</th>
                            <th style="text-align: center;">COMISIÓN</th>
                            <th style="text-align: center;">FECHA REGISTRO FACTURA</th>
                            <th style="text-align: center;">FACTURA DE 3RO.</th>
                            <th style="text-align: center;">NRO RUC</th>
                            <th style="text-align: center;">OBSERVACION</th>
                            <th style="text-align: center;">MONTO DEL CANJE</th>
                            <th style="text-align: center;">PERIODO DEL CANJE</th>
                            <th style="text-align: center;">SALDO DISPONIBLE</th>
                            <th style="text-align: center;">ESTADO CANJE</th>
                            <th style="text-align: center;">ESTADO SALDO DISPONIBLE</th>
                            <th style="text-align: center;">CORREGIR INFORMACIÓN</th>--%>
                            <th style="text-align: center;">Periodo de comisión</th>
                            <th style="text-align: center;">Factura</th>
                            <th style="text-align: center;">Monto</th>
                            <th style="text-align: center;">Fecha</th>
                            <th style="text-align: center;">Estado</th>
                            <th style="text-align: center;">Saldo</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <script src="js/bootstrap4.min.js" type="text/javascript"></script>
    <script src="js/file-uploadv1.js" type="text/javascript"></script>
    <script src="js/proyecto2/jqueryDataTablesPremioSocios.js" type="text/javascript"></script>
    <script src="js/proyecto2/estiloTablasPremioSocios.js" type="text/javascript"></script>
    <script src="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.min.js" type="text/javascript"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@8.8.7/dist/sweetalert2.all.min.js" type="text/javascript"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js" type="text/javascript"></script>
    <script src="js/jquery.numeric.js" type="text/javascript"></script>
    <%--<script src="js/GestionarFacturacionCliente.js?v3" type="text/javascript"></script>--%>
    <script src="js/proyecto2/historialFacturas.js?Fv39"></script>
    <script type="application/javascript">
        $(".js-example-templating").select2({
        });
        function pageLoad() {
            $('.solo-numero').numeric();
        }

        $('#archivoEXCEL').change(function () {
            var filename = $(this).val().split('\\').pop();
            var idname = $(this).attr('id');
            //console.log('this: ' + $(this));
            //console.log('filename: ' + filename);
            //console.log('idname: ' + idname);
            
            if (filename.length <= 15) {  
                const str1 = filename.slice(0, -4);
                $('span.' + idname).next().html(str1);
            }
            else {
                const str1 = filename.slice(0, 12);
                const newStr1 = str1.concat('...');
                $('span.' + idname).next().html(newStr1);
            }
            //$('span.' + idname).next().css({ "color": "red", "border": "2px solid red" });
        });
        $('#archivoPDF').change(function () {
            var filename = $(this).val().split('\\').pop();
            var idname = $(this).attr('id');
            if (filename.length <= 15) {        
                const str2 = filename.slice(0, -4);
                $('span.' + idname).next().html(str2);
            } else {
                const str2 = filename.slice(0, 12);
                const newStr2 = str2.concat('...');
                $('span.' + idname).next().html(newStr2);
            }
            //console.log('this: ' + $(this));
            //console.log('filename: ' + filename);
            //console.log('idname: ' + idname);
            //const str2 = filename.slice(0, 12);
            //const newStr2 = str2.concat('...');
            //$('span.' + idname).next().html(newStr2);
            //$('span.' + idname).next().css({ "color": "red", "border": "2px solid red" });
        });
    </script>

    
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</asp:Content>
