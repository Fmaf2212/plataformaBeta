<%@ Page Title="" Language="C#" MasterPageFile="~/Home.Master" AutoEventWireup="true" CodeBehind="Seguros.aspx.cs" Inherits="SantaNaturaNetworkV3.Seguros" ClientIDMode="Static" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.min.css" />

    <link href="css/proyecto2/segurosStyle.css?Fv48" rel="stylesheet" />
    <style>
        .dataTables_filter {
            display: none
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <link href="css/estilosTablaMisCompras2-v1.css?Fv43" rel="stylesheet" />
    <link rel="stylesheet" href="css/bootstrapv2.min.css?Fv35">

    <asp:HiddenField ID="hf_IdCliente" ClientIDMode="Static" runat="server" />


    <div class="bloqueSeguros" id="nav-tabContent">
        <section class="bloqueSeguros__seguro">
            <div class="titleTablaSeguros">
                <h6>Seguro MLM de Salud y Vida SN</h6>
            </div>
            <div class="tab-pane fade show active" id="seguro" role="tabpanel">
                <div class="responsiveTbl table-responsive">
                    <table class="table table-hover table-condensed table-bordered w-auto table2" style="text-align: center; width: 100%" id="TableSeguro">
                        <thead class="table-success">
                            <tr class="text-center tr2" style="color: white">
                                <th class="th2">Dni Asegurado</th>
                                <th class="th2">Vigencia</th>
                                <th class="th2">Estado de Seguro</th>
                            </tr>
                        </thead>
                        <tfoot>
                        </tfoot>
                    </table>
                </div>
            </div>
        </section>
        <section class="bloqueSeguros__seguroAdicional">
            <div class="titleTablaSeguros">
                <h6>Seguro MLM de Salud y Vida SN - Adicional</h6>
            </div>
            <div class="tab-pane fade show active" id="seguroAdicional" role="tabpanel">
                <div class="responsiveTbl table-responsive">
                    <table class="table table-hover table-condensed table-bordered w-auto table2" style="text-align: center; width: 100%" id="TableSeguroAdicional">
                        <thead class="table-success">
                            <tr class="text-center tr2" style="color: white">
                                <th class="th2">Prioridad</th>
                                <th class="th2">Dni Asegurado</th>
                                <th class="th2">Vigencia</th>
                                <th class="th2">Fecha Última Actualización</th>
                                <th class="th2">Estado de Seguro</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tfoot>
                        </tfoot>
                    </table>
                </div>
            </div>
        </section>
    </div>

    <div class="modal" id="comprasPendientesEfectivoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" data-backdrop="static" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content modalDetalleContent">
                <div class="modal-header modalDetalleHeader">
                    <h5 class="modal-title font-weight-bold modalDetalleHeader__titulo">DETALLE DE MI COMPRA</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body modalDetalleBody">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-12">
                            <div class="table-responsive">
                                <table id="tablaDetalleComprasRealizadasEfectivo" class="table table-bordred table-striped">
                                    <thead class="table-success">
                                        <tr class="text-center" style="color: white">
                                            <th>Super alimento</th>
                                            <th>Nombre</th>
                                            <th>Cantidad</th>
                                            <th>Precio</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                    </tfoot>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="modal-footer modalDetalleFooter">
                    <button type="button" class="btn btn-lg" data-dismiss="modal">CERRAR</button>
                </div>
            </div>
        </div>
    </div>



    <script type="text/javascript" src="https://cdn.datatables.net/v/dt/dt-1.10.25/datatables.min.js" defer></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="js/bootstrap4.min.js"></script>
    <script>

        
        window.onload = function () {
            if (window.innerWidth < 1148) {
                //document.getElementById("liHistCompras").style.background = '#E8E8E8';

                document.getElementById("idMenuSeguros").style.color = 'white';
                //document.getElementById("idMenuTienda").style.fontWeight = "700";
                document.getElementById("idMenuSeguros").classList.add("peso700")


                //var naranja = document.getElementById("navtienda2");
                //naranja.classList.add('menu__item--active2');
            }
            else {
                document.getElementById("idMenuSeguros").style.color = 'white';
                document.getElementById("idMenuSeguros").style.borderBottom = '3px solid white';
            }

        }
        

        function VerDetalle(Ticket) {
            $('#comprasPendientesEfectivoModal').modal('show');
            //LlenarDatatableComprasRealizadasEfectivo(Ticket);
        }
        TabPendingSeguro();

        function TabPendingSeguro() {
            var IdCliente = document.getElementById('hf_IdCliente').value;
            LlenarDatatableSeguro(IdCliente);
            console.log(IdCliente);
        }

        function LlenarDatatableSeguro(IdCliente) {
            var ndata; var table;
            $.ajax({
                type: 'POST',
                url: 'MisComprasV2.aspx/DetallePendingPurchasesMadeDeposit',
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                cache: false,
                data: '{IdCliente: "' + IdCliente + '"}',
                success: function (data) {
                    ndata = data.d;
                    table = $('#TableSeguro').DataTable({
                        order: [[0, "asc"]],
                        data: ndata,
                        columns: [
                            { data: 'Ticket' },
                            { data: 'FechaPago2' },
                            {
                                "data": 'Ticket',
                                "render": function (Ticket) {
                                    var label1 = '<label for="name">REALIZADO</label>';
                                    return label1;
                                }
                            }
                            //{
                            //    "data": { 'Ticket': 'Ticket' },
                            //    "render": function (data) {
                            //        var btnDetalle = '';
                            //        btnDetalle = ' <button type="button" title="Ver detalle" class="btn newButtonTableHistorial btnDetalle btn-lg btn-xs" onclick="VerDetalle(' + "'" + data.Ticket + "'" + ',);" > <img src="img/iconosNavHeadHistorial/ver detalle.png" alt="Alternate Text" width="15" style="transition: .3s ease all" /> Ver detalle</button>';
                            //        return btnDetalle;
                            //    }
                            //},
                        ],
                        language: {
                            "decimal": "",
                            "emptyTable": "There is no information",
                            "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
                            "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
                            "infoFiltered": "(Filtrado de _MAX_ total entradas)",
                            "infoPostFix": "",
                            "thousands": ",",
                            "lengthMenu": "Mostrar _MENU_ Entradas",
                            "loadingRecords": "Cargando...",
                            "processing": "Procesando...",
                            "search": "Buscar: ",
                            "zeroRecords": "Sin resultados encontrados",
                            "paginate": {
                                "first": "First",
                                "last": "Latest",
                                "next": "Siguiente",
                                "previous": "Anterior"
                            }
                        },
                        "scrollY": false,
                        "scrollX": true,
                        "scrollCollapse": true,
                        "ordering": true,
                        "bInfo": false,
                        "bLengthChange": false,
                        "paging": true,
                        "responsive": true,
                        "select": false,
                        "bDestroy": true,
                        "autoWidth": true


                    });
                }
            })
        }


        TabPendingSeguroAdicional();

        function TabPendingSeguroAdicional() {
            var IdCliente = document.getElementById('hf_IdCliente').value;
            LlenarDatatableSeguroAdicional(IdCliente);
            console.log(IdCliente);
        }

        function LlenarDatatableSeguroAdicional(IdCliente) {
            var ndata; var table;
            $.ajax({
                type: 'POST',
                url: 'MisComprasV2.aspx/DetallePendingPurchasesMadeDeposit',
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                cache: false,
                data: '{IdCliente: "' + IdCliente + '"}',
                success: function (data) {
                    ndata = data.d;
                    table = $('#TableSeguroAdicional').DataTable({
                        order: [[0, "asc"]],
                        data: ndata,
                        columns: [
                            { data: 'Cantidad' },
                            { data: 'Ticket' },
                            { data: 'FechaPago2' },
                            { data: 'FechaPago2' },
                            {
                                "data": 'Ticket',
                                "render": function (Ticket) {
                                    var label1 = '<label for="name">REALIZADO</label>';
                                    return label1;
                                }
                            },
                            {
                                "data": { 'Ticket': 'Ticket' },
                                "render": function (data) {
                                    var btnDetalle = '';
                                    btnDetalle = ' <button type="button" title="Ver detalle" class="btn newButtonTableHistorial btnDetalle btn-lg btn-xs" onclick="VerDetalle(' + "'" + data.Ticket + "'" + ',);" > <img src="img/iconosNavHeadHistorial/ver detalle.png" alt="Alternate Text" width="15" style="transition: .3s ease all" /> Actualizar</button>';
                                    return btnDetalle;
                                }
                            },
                        ],
                        language: {
                            "decimal": "",
                            "emptyTable": "There is no information",
                            "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
                            "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
                            "infoFiltered": "(Filtrado de _MAX_ total entradas)",
                            "infoPostFix": "",
                            "thousands": ",",
                            "lengthMenu": "Mostrar _MENU_ Entradas",
                            "loadingRecords": "Cargando...",
                            "processing": "Procesando...",
                            "search": "Buscar: ",
                            "zeroRecords": "Sin resultados encontrados",
                            "paginate": {
                                "first": "First",
                                "last": "Latest",
                                "next": "Siguiente",
                                "previous": "Anterior"
                            }
                        },
                        "scrollY": false,
                        "scrollX": true,
                        "scrollCollapse": true,
                        "ordering": true,
                        "bInfo": false,
                        "bLengthChange": false,
                        "paging": true,
                        "responsive": true,
                        "select": false,
                        "bDestroy": true,
                        "autoWidth": true


                    });
                }
            })
        }

    </script>
</asp:Content>
