//VARIABLES
var tabla, data, paquete, tipoPag;

$.ajax({
    type: "POST",
    url: "GenerarRangos.aspx/ListaPeriodos",
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

$.ajax({
    type: "POST",
    url: "GenerarRangos.aspx/ListaPeriodosComision",
    data: "{}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    async: false,
    success: function (result) {
        $("#cboPeriodoComision").empty();
        $("#cboPeriodoComision").append("<option value='0'>--Select--</option>");
        $.each(result.d, function (key, value) {
            $("#cboPeriodoComision").append($("<option></option>").val(value.idPeriodo).html(value.nombre));
        });
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus + ": " + XMLHttpRequest.responseText);
    }
});

$.ajax({
    type: "POST",
    url: "GenerarRangos.aspx/ListaPeriodos",
    data: "{}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    async: false,
    success: function (result) {
        $("#ddlPeriodoRango").empty();
        $("#ddlPeriodoRango").append("<option value='0'>--Select--</option>");
        $.each(result.d, function (key, value) {
            $("#ddlPeriodoRango").append($("<option></option>").val(value.idPeriodo).html(value.nombre));
        });
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus + ": " + XMLHttpRequest.responseText);
    }
});

$.ajax({
    type: "POST",
    url: "GenerarRangos.aspx/ListaPeriodosComision",
    data: "{}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    async: false,
    success: function (result) {
        $("#ddlPeriodoComision").empty();
        $("#ddlPeriodoComision").append("<option value='0'>--Select--</option>");
        $.each(result.d, function (key, value) {
            $("#ddlPeriodoComision").append($("<option></option>").val(value.idPeriodo).html(value.nombre));
        });
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus + ": " + XMLHttpRequest.responseText);
    }
});

// LISTAR COMPRAS


tabla = $("#tbl_rangos").DataTable({
    "aaSorting": [[3, 'asc']],
    "aoColumnDefs": [
        {"aTargets": [0] },
        {"aTargets": [1] },
        {"aTargets": [2] },
        {"aTargets": [3], "asSorting": ["asc", "desc"], "sType": "date-eu"  }
    ],
});

function addRowDT(obj) {
    tabla.fnClearTable();
    for (var i = 0; i < obj.length; i++) {
        const date = new Date(obj[i].Fecha);
        tabla.fnAddData([
            obj[i].Usuario,
            obj[i].Proceso,
            obj[i].Mensaje,
            obj[i].Fecha.toString()
        ]);
    };
}

function sendDataAjax() {

    $.ajax({
        type: "POST",
        url: "GenerarRangos.aspx/ListaEstadosRecalculo",
        data: {},
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            addRowDT(data.d);
        }
    });
}

function calculaRango() {
    var periodo = $("#cboPeriodo").val();
    var obj = JSON.stringify({ IDP: periodo });
    $.ajax({
        type: "POST",
        //url: "GenerarRangos.aspx/GeneraRangoCompleto",
        url: "Autocompletado.asmx/GeneraRangoADO",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            console.log(data.d);
            sendDataAjax();
            alertme();
        }
    });
}

function calculaComisiones() {
    $.ajax({
        type: "POST",
        url: "GenerarRangos.aspx/GenerarComisionCompleto",
        data: {},
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            console.log(data.d);
            sendDataAjax();
            alertme();
        }
    });
}

function calculaVP() {
    $.ajax({
        type: "POST",
        url: "GenerarRangos.aspx/GenerarVP",
        data: {},
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            console.log(data.d);
            alertme();
        }
    });
}

function recalculoComisiones() {

    var periodo = $("#cboPeriodo").val();
    var obj = JSON.stringify({ IDP: periodo });
    $.ajax({
        type: "POST",
        url: "GenerarRangos.aspx/RecalculoPuntajes",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            console.log(data.d);
            alertme();
        }
    });
}

function calculoVQ() {

    var periodo = $("#cboPeriodo").val();
    var obj = JSON.stringify({ IDP: periodo });
    $.ajax({
        type: "POST",
        url: "GenerarRangos.aspx/GenerarVQ",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            console.log(data.d);
            alertme();
        }
    });
}

function calculoComAfiliacion() {

    var periodo = $("#cboPeriodoComision").val();
    var obj = JSON.stringify({ IDP: periodo });
    $.ajax({
        type: "POST",
        url: "GenerarRangos.aspx/CalculoComAfiliacion",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            console.log(data.d);
            alertme();
        }
    });
}

function calculoComTiburon() {

    var periodo = $("#cboPeriodoComision").val();
    var obj = JSON.stringify({ IDP: periodo });
    $.ajax({
        type: "POST",
        url: "GenerarRangos.aspx/CalculoTiburon",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            console.log(data.d);
            alertme();
        }
    });
}

function calculoComMercadeo() {

    var periodo = $("#cboPeriodoComision").val();
    var obj = JSON.stringify({ IDP: periodo });
    $.ajax({
        type: "POST",
        url: "GenerarRangos.aspx/CalculoComMercadeo",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            console.log(data.d);
            alertme();
        }
    });
}

function calculoComBronce() {

    var periodo = $("#cboPeriodoComision").val();
    var obj = JSON.stringify({ IDP: periodo });
    $.ajax({
        type: "POST",
        url: "GenerarRangos.aspx/CalculoComBronce",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            console.log(data.d);
            alertme();
        }
    });
}

function calculoComEscolaridad() {

    var periodo = $("#cboPeriodoComision").val();
    var obj = JSON.stringify({ IDP: periodo });
    $.ajax({
        type: "POST",
        url: "GenerarRangos.aspx/CalculoComEscolaridad",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            console.log(data.d);
            alertme();
        }
    });
}

function calculoComMatricial() {

    var periodo = $("#cboPeriodoComision").val();
    var obj = JSON.stringify({ IDP: periodo });
    $.ajax({
        type: "POST",
        url: "GenerarRangos.aspx/CalculoCoMatricial",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            console.log(data.d);
            alertme();
        }
    });
}

function calculoComUnilevel() {

    var periodo = $("#cboPeriodoComision").val();
    var obj = JSON.stringify({ IDP: periodo });
    $.ajax({
        type: "POST",
        url: "GenerarRangos.aspx/CalculoUnilevel",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            console.log(data.d);
            alertme();
        }
    });
}

function calculoComTiburon1() {

    var periodo = $("#cboPeriodoComision").val();
    var obj = JSON.stringify({ IDP: periodo });
    $.ajax({
        type: "POST",
        url: "GenerarRangos.aspx/CalculoComTiburon1",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            console.log(data.d);
            alertme();
        }
    });
}

function calculoComTiburon2() {

    var periodo = $("#cboPeriodoComision").val();
    var obj = JSON.stringify({ IDP: periodo });
    $.ajax({
        type: "POST",
        url: "GenerarRangos.aspx/CalculoComTiburon2",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            console.log(data.d);
            alertme();
        }
    });
}

function calculoComCI() {

    var periodo = $("#cboPeriodoComision").val();
    var obj = JSON.stringify({ IDP: periodo });
    $.ajax({
        type: "POST",
        url: "GenerarRangos.aspx/CalculoComCI",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            console.log(data.d);
            alertme();
        }
    });
}

function calculoComConsultor() {

    var periodo = $("#cboPeriodoComision").val();
    var obj = JSON.stringify({ IDP: periodo });
    $.ajax({
        type: "POST",
        url: "GenerarRangos.aspx/CalculoComConsultor",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            console.log(data.d);
            alertme();
        }
    });
}

function montoComisionCI() {

    var periodo = $("#cboPeriodoComision").val();
    var obj = JSON.stringify({ IDP: periodo });
    $.ajax({
        type: "POST",
        url: "GenerarRangos.aspx/ActualizarMontoComicionCI",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            console.log(data.d);
            alertme();
        }
    });
}

function actualizarRangoComision() {

    var periodoRango = $("#ddlPeriodoRango").val();
    var periodoComision = $("#ddlPeriodoComision").val();
    var obj = JSON.stringify({ IDP: periodoRango, IDPCom: periodoComision });

    $.ajax({
        type: "POST",
        url: "GenerarRangos.aspx/ActualizarRangoComision",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            console.log(data.d);
            alertme();
        }
    });
}

$("#btnRango").click(function (e) {
    e.preventDefault();
    var periodo = $("#cboPeriodo").val();

    if (periodo == "0") {
        FaltaPeriodo();
    } else {
        calculaRango();
    }
    
});

$("#btnComisiones").click(function (e) {
    e.preventDefault();
    calculaComisiones();
});

$("#btnRecalculo").click(function (e) {
    e.preventDefault();
    var periodo = $("#cboPeriodo").val();

    if (periodo == "0") {
        FaltaPeriodo();
    } else {
        recalculoComisiones();
    }
    
});

$("#btnVQ").click(function (e) {
    e.preventDefault();
    var periodo = $("#cboPeriodo").val();

    if (periodo == "0") {
        FaltaPeriodo();
    } else {
        calculoVQ();
    }

});

$("#btnComAfi").click(function (e) {
    e.preventDefault();
    var periodo = $("#cboPeriodoComision").val();

    if (periodo == "0") {
        FaltaPeriodo();
    } else {
        calculoComAfiliacion();
    }

});

$("#btnComTibu").click(function (e) {
    e.preventDefault();
    var periodo = $("#cboPeriodoComision").val();

    if (periodo == "0") {
        FaltaPeriodo();
    } else {
        calculoComTiburon();
    }

});

$("#btnEstadoTiburon").click(function (e) {
    e.preventDefault();
    var periodo = $("#cboPeriodoComision").val();

    if (periodo == "0") {
        FaltaPeriodo();
    } else {
        calculoEstadoTiburon();
    }

});

$("#btnComBron").click(function (e) {
    e.preventDefault();
    var periodo = $("#cboPeriodoComision").val();

    if (periodo == "0") {
        FaltaPeriodo();
    } else {
        calculoComBronce();
    }

});

$("#btnComClienteI").click(function (e) {
    e.preventDefault();
    var periodo = $("#cboPeriodoComision").val();

    if (periodo == "0") {
        FaltaPeriodo();
    } else {
        calculoComCI();
    }

});

$("#btnComConsultor").click(function (e) {
    e.preventDefault();
    var periodo = $("#cboPeriodoComision").val();

    if (periodo == "0") {
        FaltaPeriodo();
    } else {
        calculoComConsultor();
    }

});

$("#btnEsco").click(function (e) {
    e.preventDefault();
    var periodo = $("#cboPeriodoComision").val();

    if (periodo == "0") {
        FaltaPeriodo();
    } else {
        calculoComEscolaridad();
    }

});

$("#btnMontoCI").click(function (e) {
    e.preventDefault();
    var periodo = $("#cboPeriodoComision").val();

    if (periodo == "0") {
        FaltaPeriodo();
    } else {
        montoComisionCI();
    }

});

$("#btnComMatri").click(function (e) {
    e.preventDefault();
    var periodo = $("#cboPeriodoComision").val();

    if (periodo == "0") {
        FaltaPeriodo();
    } else {
        calculoComMatricial();
    }

});

$("#btnComMerc").click(function (e) {
    e.preventDefault();
    var periodo = $("#cboPeriodoComision").val();

    if (periodo == "0") {
        FaltaPeriodo();
    } else {
        calculoComMercadeo();
    }

});

$("#btnComUnilevel").click(function (e) {
    e.preventDefault();
    var periodo = $("#cboPeriodoComision").val();

    if (periodo == "0") {
        FaltaPeriodo();
    } else {
        calculoComUnilevel();
    }

});

$("#btnComTiburon1").click(function (e) {
    e.preventDefault();
    var periodo = $("#cboPeriodoComision").val();

    if (periodo == "0") {
        FaltaPeriodo();
    } else {
        calculoComTiburon1();
    }

});

$("#btnComTiburon2").click(function (e) {
    e.preventDefault();
    var periodo = $("#cboPeriodoComision").val();

    if (periodo == "0") {
        FaltaPeriodo();
    } else {
        calculoComTiburon2();
    }

});

$("#btnActualizar").click(function (e) {
    e.preventDefault();
    
    actualizarRangoComision();
});

$("#btnTiburonPrueba").click(function (e) {
    e.preventDefault();
    
    $.ajax({
        type: "POST",
        url: "GenerarRangos.aspx/ObtenerIDOPRegalo",
        data: "{}",
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (data) {
            console.log(data.d);
        }
    });

});


sendDataAjax();

function alertme() {
    Swal.fire({
        title: 'Perfecto!',
        text: 'Calculo Exitoso',
        type: "success"
    }).then(function () {
    });
}

function FaltaPeriodo() {
    Swal.fire({
        title: 'Ooops...!',
        text: 'No seleccionó el Periodo',
        type: "error"
    }).then(function () {
    });
}