var inputTCompra = document.getElementById('selectTipoCliente');
var inputTienda = document.getElementById('selectYachayWasi');

inputTCompra.onchange = function () {
    localStorage['STipoCompra'] = this.value;
    GuardarIDCombos('TCompra', this.value);
}
inputTienda.onchange = function () {
    localStorage['ComboTienda'] = this.value;
    var textoSeleccionado = $("#selectYachayWasi option:selected").text();
    localStorage['ComboTiendaName'] = textoSeleccionado;
    GuardarIDCombos('TiendaS', this.value, textoSeleccionado);
}

function GuardarIDCombos(combo, idcombo, nameCombo) {
    var obj = JSON.stringify({
        comboS: combo, idComboS: idcombo, nameComboS: nameCombo
    });
    $.ajax({
        type: "POST",
        url: "TiendaSN.aspx/GuardarIDCombos",
        data: obj,
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, throwError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
        },
        success: function (dataS) {
            var Datos = dataS.d;
            if (combo == "TCompra") {
                $('#LbPrecioPagar').text("S/." + Datos.MontoPago);
            }
            if (combo == "Pregis" && (idcombo != "0" && idcombo != "" && idcombo != null)) {
                localStorage['STipoCompra'] = Datos.IdPaquete;
                $('#STipoCompra').val(Datos.IdPaquete);
            }
        }
    });
}