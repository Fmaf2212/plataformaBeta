const selectTable1 = document.getElementById('periodo');
const firstOption = document.createElement('option');
firstOption.text = 'Seleccione:';
firstOption.value = '0';
selectTable1.appendChild(firstOption);
axios.post('GenerarRangos.aspx/ListaPeriodos', {})
    .then(response => {
        //console.log(response);
        response.data.d.forEach(e => {
            const option = document.createElement('option');
            option.text = e.nombre;
            option.value = e.idPeriodo;
            selectTable1.appendChild(option);
        })
    })
    //.then(fillTable2())
    .catch(error => {
        console.error(error);
    });


function searchSelect() {
    const btnConsultar = document.getElementById('btnConsultar');
    if (selectTable1.value === '0') {
        btnConsultar.disabled = true;
        btnConsultar.classList.add('button--disabled');
    } else {
        btnConsultar.disabled = false;
        btnConsultar.classList.remove('button--disabled');
    }
}
searchSelect();

function unblockedBtnTransferenciaFondos() {
    const btnCargarArchivos = document.getElementById('btnTransferirFondos');
    if (selectTable1.value !== '0') {
        btnCargarArchivos.disabled = false;
        btnCargarArchivos.classList.remove('button--disabled');
    } else {
        btnCargarArchivos.disabled = true;
        btnCargarArchivos.classList.add('button--disabled');
    }
}
unblockedBtnTransferenciaFondos();

// Función para formatear números con comas y dos decimales
function formatNumberWithCommas(value) {
    let [integerPart, decimalPart] = value.toString().split('.'); // Separa la parte entera y decimal

    integerPart = parseInt(integerPart, 10).toLocaleString('en-US'); // Formatea la parte entera

    if (decimalPart !== undefined) {
        // Limita los decimales a 2 dígitos
        decimalPart = decimalPart.slice(0, 2);
        return `${integerPart}.${decimalPart}`; // Combina la parte entera y decimal
    } else {
        // Añade ".00" si no hay parte decimal
        return `${integerPart}.00`;
    }
}

//---------- LLENADO DE LA COMISIONES --------------------------
document.getElementById('btnConsultar').addEventListener('click', function () {
    const select = document.getElementById('periodo');
    const idPeriodoSeleccionado = parseInt(select.value);

    const periodo = comisiones.find(p => p.idPeriodo === idPeriodoSeleccionado);

    if (periodo) {
        const comisionSinIGV = periodo.comisionSinIGV;
        const igv = comisionSinIGV * 0.18;
        const comisionDisponible = comisionSinIGV + igv;

        // Utiliza la función de formato para mostrar el valor con comas y dos decimales
        document.getElementById('valorComiDispo').innerText = `S/. ${formatNumberWithCommas(comisionDisponible.toFixed(2))}`;

        select.disabled = true;
        unblockedBtnTransferenciaFondos();
    } else {
        alert('Período no encontrado.');
    }
});

function limpiarCampos() {
    const selectPeriodo = document.getElementById('periodo');
    selectPeriodo.value = '0';
    selectPeriodo.disabled = false;

    document.getElementById('valorComiDispo').textContent = 'S/. 0.00';
    document.getElementById('inputMontTransfer').value = '';
    document.getElementById('id-empresario').value = '';
    document.getElementById('empresario').textContent = '';

    const selectDestinyTransfer = document.getElementById('destino-transferencia');
    selectDestinyTransfer.value = '0';

    searchSelect();
    toggleEmpresarioContainer();
    unblockedBtnTransferenciaFondos();
}

document.getElementById('btnLimpiar').addEventListener('click', function () {
    limpiarCampos();
});

//document.getElementById('inputMontTransfer').addEventListener('input', function (e) {
//    let value = e.target.value.replace(/,/g, ''); // Remove commas
//    let formattedValue = parseFloat(value).toLocaleString('en-US', {
//        minimumFractionDigits: 2,
//        maximumFractionDigits: 2
//    });
//    e.target.value = isNaN(formattedValue) ? '' : formattedValue;
//});

document.getElementById('inputMontTransfer').addEventListener('blur', function (e) {
    let value = e.target.value.replace(/,/g, ''); // Remueve comas
    if (!isNaN(value) && value.length > 0) {
        let [integerPart, decimalPart] = value.split('.'); // Separa la parte entera y decimal

        integerPart = parseInt(integerPart, 10).toLocaleString('en-US'); // Formatea la parte entera

        if (decimalPart !== undefined) {
            // Limita los decimales a 2 dígitos
            decimalPart = decimalPart.slice(0, 2);
            e.target.value = `${integerPart}.${decimalPart}`; // Combina la parte entera y decimal
        } else {
            // Añade ".00" si no hay parte decimal
            e.target.value = `${integerPart}.00`;
        }
    } else {
        e.target.value = '';
    }
});

document.getElementById('inputMontTransfer').addEventListener('input', function (e) {
    let value = e.target.value.replace(/[^\d.]/g, ''); // Permite solo números y puntos
    let [integerPart, decimalPart] = value.split('.'); // Separa la parte entera y decimal

    if (decimalPart !== undefined) {
        // Limita los decimales a 2 dígitos
        decimalPart = decimalPart.slice(0, 2);
        e.target.value = `${integerPart}.${decimalPart}`;
    } else {
        e.target.value = value;
    }
});

/* mostrar y ocultar Detalles del Empresario a trasnferir*/
function toggleEmpresarioContainer() {
    const select = document.getElementById('destino-transferencia');
    const empresarioContainer = document.querySelector('.business-details');

    if (select.value === "1") { // Si selecciona "OTRO"
        empresarioContainer.classList.add('show');
    } else { // Si selecciona "MI MONEDERO"
        empresarioContainer.classList.remove('show');
    }
}


/*animateNumber for TOTAL DISPONIBLE MONEDERO*/
function animateNumber(element, start, end, duration) {
    let startTime = null;

    function updateNumber(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentNumber = progress * (end - start) + start;

        // Formatear el número con separadores de miles y dos decimales
        element.textContent = new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(currentNumber);

        element.classList.add('animate');

        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        } else {
            element.classList.remove('animate');
        }
    }

    requestAnimationFrame(updateNumber);
}


const showNumber = true;
const historicalCommission = 1380.78;
const animatedNumberElement = document.getElementById('animatedNumber');

if (showNumber) {
    animateNumber(animatedNumberElement, 0, historicalCommission, 2000);
}

document.getElementById('id-empresario').addEventListener('input', function () {
    var empresario = document.getElementById('empresario');
    empresario.textContent = '';
});

document.getElementById('searchButton').addEventListener('click', function () {
    sendDataAjax();    
});

function sendDataAjax() {
    // Obtener el valor del input donde se ingresa el idCliente
    var idCliente = document.getElementById('id-empresario').value;
    var empresario = document.getElementById('empresario');

    $.ajax({
        type: "POST",
        url: "GestionMonedero.aspx/ListaNombresClienteByIdCliente",
        data: JSON.stringify({ idCliente: idCliente }),  // Enviar el idCliente
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
            empresario.textContent = 'Hubo un problema al realizar la solicitud. Por favor, intenta nuevamente.';
        },
        success: function (data) {
            if (data.d.length !== 0) {
                console.log(data.d);  // Mostrar los datos devueltos en la consola
                console.log(data.d[0].nombre);
                let nombresCompletos = data.d[0].nombre + " " + data.d[0].apellidoPat + " " + data.d[0].apellidoMat;
                console.log(nombresCompletos);
                empresario.textContent = nombresCompletos;
            } else {
                empresario.textContent = 'No se encontró al empresario. Por favor, intenta nuevamente.';
            }
        }
    });
}