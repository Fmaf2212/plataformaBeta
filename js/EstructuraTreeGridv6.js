$(document).ready(function () {

    $.ajax({
        type: "POST",
        url: "MapaDeRed.aspx/ListaPeriodos",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            $("#cboPeriodo").empty();
            $("#cboPeriodo").append("<option value='0'>--Select--</option>");
            $.each(result.d, function (key, value) {
                $("#cboPeriodo").append($("<option></option>").val(value.idPeriodo).html(value.nombre));
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + ": " + XMLHttpRequest.responseText);
        }
    });


    //$(".se-pre-con").fadeOut("slow");
    $('#page_loader').show();
    var employees = [];
    var employees2 = [];
    var dni = "";
    var filtroaplicado = 0;
    var source;

    $.ajax({
        type: "POST",
        url: "MapaDeRed.aspx/CapturarDNI",
        data: {},
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            var r = data.d;
            dni = r;
            console.log(data.d);
        }
    });


    if (filtroaplicado == 0) {
        $.ajax({
            type: "POST",
            url: "MapaDeRed.aspx/ListarEstructura",
            data: {},
            contentType: 'application/json; charset=utf-8',
            error: function (xhr, ajaxOptions, throwError) {
                console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
            },
            success: function (data) {
                //console.log(data.d);
                var prueba = [];
                prueba = data.d;
                prueba.forEach(function (element) {
                    var objp = {
                        "EmployeeID": element.EmployeeID,
                        "LastName": element.LastName,
                        "ReportsTo": element.ReportsTo,
                        "Country": element.Country,
                        "Title": element.Title,
                        "City": element.City,
                        "VIP": element.VIP,
                        "VR": element.VR,
                        "Address": element.Address,
                        "Rango": element.Rango,
                        "Fecha": element.Fecha,
                        "Telefono": element.Telefono,
                        "Pais": element.Pais,
                        "IDRANGO": element.IDRANGO,
                        "MAXIMORANGO": element.MAXIMORANGO
                    }
                    employees.push(objp);
                });
                console.log(employees);
                source =
                {
                    dataType: "json",
                    dataFields: [
                        { name: 'EmployeeID', type: 'string' },
                        { name: 'ReportsTo', type: 'string' },
                        { name: 'LastName', type: 'string' },
                        { name: 'Country', type: 'string' },
                        { name: 'City', type: 'string' },
                        { name: 'VIP', type: 'string' },
                        { name: 'VR', type: 'string' },
                        { name: 'Address', type: 'string' },
                        { name: 'Title', type: 'string' },
                        { name: 'Rango', type: 'string' },
                        { name: 'Fecha', type: 'string' },
                        { name: 'Telefono', type: 'string' },
                        { name: 'Pais', type: 'string' },
                        { name: 'IDRANGO', type: 'string' },
                        { name: 'MAXIMORANGO', type: 'string' }
                    ],
                    hierarchy:
                    {
                        keyDataField: { name: 'EmployeeID' },
                        parentDataField: { name: 'ReportsTo' }
                    },
                    id: 'EmployeeID',
                    localData: employees
                };
                var dataAdapter = new $.jqx.dataAdapter(source);
                // create Tree Grid
                $("#treegrid").jqxTreeGrid(
                    {
                        theme: 'darkblue',
                        source: dataAdapter,
                        width: '100%',
                        height: '400',
                        showHeader: true,
                        showToolbar: true,
                        ready: function () {
                            $("#treegrid").jqxTreeGrid('expandRow', dni.trim());
                        },
                        columns: [
                            //{ text: 'Nivel', dataField: 'IDRANGO', width: '30', align: 'center', cellsalign: 'left' },
                            { text: 'Nombres', dataField: 'LastName', width: '380', align: 'center' },
                            { text: 'PP', dataField: 'Country', width: '80', align: 'center', cellsalign: 'center' },
                            { text: 'VIP', dataField: 'VIP', width: '80', align: 'center', cellsalign: 'center' },
                            { text: 'VP', dataField: 'City', width: '80', align: 'center', cellsalign: 'center' },
                            { text: 'VR', dataField: 'VR', width: '100', align: 'center', cellsalign: 'center' },
                            { text: 'VG', dataField: 'Address', width: '100', align: 'center', cellsalign: 'center' },
                            { text: 'VQ', dataField: 'Title', width: '100', align: 'center', cellsalign: 'center' },
                            { text: 'Rango Actual', dataField: 'Rango', width: '125', align: 'center', cellsalign: 'center' },
                            { text: 'Rango Maximo', dataField: 'MAXIMORANGO', width: '125', align: 'center', cellsalign: 'center' },
                            { text: 'Inscripcion', dataField: 'Fecha', width: '100', align: 'center', cellsalign: 'center' },
                            { text: 'Telefono', dataField: 'Telefono', width: '90', align: 'center', cellsalign: 'center' },
                            { text: 'Pais', dataField: 'Pais', width: '90', align: 'center', cellsalign: 'center' }

                        ]
                        //,
                        //columnGroups: [
                        //    { text: 'Nombre', name: 'Nombre' }
                        //]
                    });
                $('#page_loader').hide();
            }
        });
    } else { filtroaplicado = 0; }


    $("#btnFiltro").click(function (e) {
        e.preventDefault();
        $('#page_loader').show();
        filtroaplicado = 1;
        var periodo = $("#cboPeriodo").val();
        var obj = JSON.stringify({ IDP: periodo });
        $.ajax({
            type: "POST",
            url: "MapaDeRed.aspx/ListarEstructurabyPeriodo",
            data: obj,
            contentType: 'application/json; charset=utf-8',
            error: function (xhr, ajaxOptions, throwError) {
                console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
            },
            success: function (data2) {
                //console.log(data.d);
                employees2 = [];
                var prueba2 = [];
                prueba2 = data2.d;
                prueba2.forEach(function (element) {
                    var objp = {
                        "EmployeeID": element.EmployeeID,
                        "LastName": element.LastName,
                        "ReportsTo": element.ReportsTo,
                        "Country": element.Country,
                        "Title": element.Title,
                        "City": element.City,
                        "VIP": element.VIP,
                        "VR": element.VR,
                        "Address": element.Address,
                        "Rango": element.Rango,
                        "Fecha": element.Fecha,
                        "Telefono": element.Telefono,
                        "Pais": element.Pais,
                        "IDRANGO": element.IDRANGO,
                        "MAXIMORANGO": element.MAXIMORANGO
                    }
                    employees2.push(objp);
                });
                NuevaLeida();
            }
        });
        
    });

    function NuevaLeida() {
        source.localData = employees2;
        $("#treegrid").jqxTreeGrid('updateBoundData');
        var dataAdapter = new $.jqx.dataAdapter(source);

        $("#treegrid").jqxTreeGrid({ source: dataAdapter });
        $("#treegrid").jqxTreeGrid('expandRow', dni.trim());
        
        $('#page_loader').hide();
    }
    
});

var employees = [];


$("#btnVQC").click(function (e) {
    e.preventDefault();
    $('#page_loader').show();
    calculaVQ();
});

function calculaVQ() {
    $.ajax({
        type: "POST",
        url: "MapaDeRed.aspx/GenerarVQ",
        data: {},
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data3) {
            console.log(data3.d);
            $('#page_loader').hide();
            alertme();
            
        }
    });
}


function alertme() {
    Swal.fire({
        title: 'Perfecto!',
        text: 'Actualización Exitosa',
        type: "success"
    }).then(function () {
        
        window.location = "MapaDeRed.aspx";
    });
}


