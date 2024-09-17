
$(document).ready(function () {
    //VARIABLES
    calculaRango();

    function calculaRango() {
        $.ajax({
            type: "POST",
            url: "GeneraRangoAutomatico.aspx/GeneraRangoCompleto",
            data: {},
            contentType: 'application/json; charset=utf-8',
            error: function (xhr, ajaxOptions, throwError) {
                console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
            },
            success: function (data) {
                console.log(data.d);
                console.log("2xx");
            }
        });
    }

});
