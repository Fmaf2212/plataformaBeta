$(document).ready(function () {
    //$(".se-pre-con").fadeOut("slow");
    $('#page_loader').show();
    var employees = [];
    var dni = "";
    capturarDNI();
    sendDataAjax();


    function capturarDNI() {

        $.ajax({
            type: "POST",
            url: "MapaDePatrocinio.aspx/CapturarDNI",
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
    }


    function sendDataAjax() {
        $.ajax({
            type: "POST",
            url: "MapaDePatrocinio.aspx/ListarEstructuraPatrocinio",
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
                        "Telefono": element.Telefono,
                        "IDRANGO": element.IDRANGO,
                        "TIPOC": element.TIPOC,
                        "PAQUETE": element.PAQUETE,
                        "Pais": element.Pais,
                        "Fecha": element.Fecha,
                        "PP": element.PP
                    }
                    employees.push(objp);

                });
                console.log(employees);
                var source =
                {
                    dataType: "json",
                    dataFields: [
                        { name: 'EmployeeID', type: 'string' },
                        { name: 'ReportsTo', type: 'string' },
                        { name: 'LastName', type: 'string' },
                        { name: 'Telefono', type: 'string' },
                        { name: 'IDRANGO', type: 'string' },
                        { name: 'TIPOC', type: 'string' },
                        { name: 'PAQUETE', type: 'string' },
                        { name: 'Pais', type: 'string' },
                        { name: 'Fecha', type: 'string' },
                        { name: 'PP', type: 'string' }
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
                        //sortable: true,
                        ready: function () {
                            $("#treegrid").jqxTreeGrid('expandRow', dni.trim());
                        },
                        columns: [
                            //{ text: 'Nivel', dataField: 'IDRANGO', width: '380', align: 'center', cellsalign: 'left' },
                            { text: 'Nombres', dataField: 'LastName', width: '380', align: 'center' },
                            { text: 'Tipo Cliente', dataField: 'TIPOC', width: '90', align: 'center' },
                            { text: 'PP', dataField: 'PP', width: '90', align: 'center' },
                            { text: 'Paquete', dataField: 'PAQUETE', width: '140', align: 'center' },
                            { text: 'Telefono', dataField: 'Telefono', width: '150', align: 'center', cellsalign: 'center' },
                            { text: 'Pais', dataField: 'Pais', width: '150', align: 'center', cellsalign: 'center' },
                            { text: 'Fecha Registro', dataField: 'Fecha', width: '200', align: 'center', cellsalign: 'center' }

                        ]
                        //,
                        //columnGroups: [
                        //    { text: 'Nombre', name: 'Nombre' }
                        //]
                    });
                $('#page_loader').hide();
            }
        });
    }

});


