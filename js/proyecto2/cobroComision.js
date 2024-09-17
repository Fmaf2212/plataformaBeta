//const comisiones = require('../ArrayComisionesPrueba');

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

function unblockedBtnCargarArchivos() {
    const btnCargarArchivos = document.getElementById('btnCargarArchivos');
    const pdfUpload = document.getElementById('pdfUpload').files.length;
    const xmlUpload = document.getElementById('xmlUpload').files.length;
    if (selectTable1.value !== '0' && pdfUpload !== 0 && xmlUpload !== 0) {
        btnCargarArchivos.disabled = false;
        btnCargarArchivos.classList.remove('button--disabled');
    } else {
        btnCargarArchivos.disabled = true;
        btnCargarArchivos.classList.add('button--disabled');
    }
}
unblockedBtnCargarArchivos();

document.getElementById('pdfUpload').addEventListener('change', function () {
    const fileNamePDF = this.files[0] ? this.files[0].name : 'Ningún archivo seleccionado';
    document.getElementById('file-name-pdf').textContent = fileNamePDF;

    unblockedBtnCargarArchivos();
});

document.getElementById('xmlUpload').addEventListener('change', function () {
    const fileNameXML = this.files[0] ? this.files[0].name : 'Ningún archivo seleccionado';
    document.getElementById('file-name-xml').textContent = fileNameXML;

    unblockedBtnCargarArchivos();
});

//---------- LLENADO DE LA COMISIONES --------------------------
document.getElementById('btnConsultar').addEventListener('click', function () {
    const select = document.getElementById('periodo');
    const idPeriodoSeleccionado = parseInt(select.value);
    
    const periodo = comisiones.find(p => p.idPeriodo === idPeriodoSeleccionado);

    if (periodo) {
        const strMesPer = document.getElementById('strMesPer');
        const strAnioPer = document.getElementById('strAnioPer');
        const strCicloPer = document.getElementById('strCicloPer');

        let valueSelect = select.selectedIndex;
        let optionText = select.options[valueSelect];

        const [mes, anio, ciclo] = optionText.text.split('-');
        const añosNumericos = { 24: 2024, 23: 2023, 22: 2022, 21:2021, 20:2020 };
        const mesesNumericos = { ENE: 'Enero', FEB: 'Febrero', MAR: 'Marzo', ABR: 'Abril', MAY: 'Mayo', JUN: 'Junio', JUL: 'Julio', AGO: 'Agosto', SET: 'Setiembre', OCT: 'Octubre', NOV: 'Noviembre', DIC: 'Diciembre' };
        const ciclosNumericos = { '1PER': 'Primer periodo', '2PER': 'Segundo periodo' };

        strMesPer.textContent = mesesNumericos[mes];
        strAnioPer.textContent = añosNumericos[anio];
        strCicloPer.textContent = ` - ${ciclosNumericos[ciclo]}`;

        const comisionSinIGV = periodo.comisionSinIGV;
        const igv = comisionSinIGV * 0.18;
        const comisionDisponible = comisionSinIGV + igv;

        document.getElementById('valorMontoSinIgv').innerText = `S/. ${comisionSinIGV.toFixed(2)}`;
        document.getElementById('valorIgv').innerText = `S/. ${igv.toFixed(2)}`;
        document.getElementById('valorComiDispo').innerText = `S/. ${comisionDisponible.toFixed(2)}`;

        select.disabled = true;
        unblockedBtnCargarArchivos();
    } else {
        alert('Período no encontrado.');
    }
});

function limpiarCampos() {
    const select = document.getElementById('periodo');
    select.value = '0';
    select.disabled = false;
    searchSelect();

    document.getElementById('valorMontoSinIgv').textContent = 'S/. 0.00';
    document.getElementById('valorIgv').textContent = 'S/. 0.00';
    document.getElementById('valorComiDispo').textContent = 'S/. 0.00';

    document.getElementById('pdfUpload').value = '';
    document.getElementById('file-name-pdf').textContent = 'Ningún archivo seleccionado';
    document.getElementById('xmlUpload').value = '';
    document.getElementById('file-name-xml').textContent = 'Ningún archivo seleccionado';

    unblockedBtnCargarArchivos();
}

document.getElementById('btnLimpiar').addEventListener('click', function () {
    limpiarCampos();
});

document.getElementById('btnCargarArchivos').addEventListener('click', function () {
    const screenWidth = window.innerWidth;

    const periodoSelect = document.getElementById('periodo');
    if (periodoSelect.value === '0') {
        let modalWidth;
        if (screenWidth <= 600) {
            modalWidth = '90%';
        } else {
            modalWidth = '420px';
        }
        Swal.fire({
            icon: 'error',
            title: 'Debe seleccionar un período comisión',
            html: `
            <p>Por favor, seleccione un Periodo Comisión antes de continuar.</p>
        `,
            confirmButtonColor: '#254ab1',
            width: modalWidth  // Ancho del modal definido dinámicamente
        });
        return;
    }

    if (periodoSelect.disabled === false) {
        let modalWidth;
        if (screenWidth <= 600) {
            modalWidth = '90%';
        } else {
            modalWidth = '460px';
        }
        Swal.fire({
            icon: 'error',
            title: 'Acción Necesaria',
            html: `
                <p>Por favor, haga clic en el botón "CONSULTAR" para calcular la Comisión Disponible.</p>
            `,
            confirmButtonColor: '#254ab1',
            width: modalWidth  // Ancho del modal definido dinámicamente
        });
        return;
    }

    const pdfUpload = document.getElementById('pdfUpload').files.length;
    const xmlUpload = document.getElementById('xmlUpload').files.length;
    if (pdfUpload === 0 || xmlUpload === 0) {
        let modalWidth;
        if (screenWidth <= 600) {
            modalWidth = '90%';
        } else {
            modalWidth = '600px';
        }
        Swal.fire({
            icon: 'error',
            title: 'DEBE ADJUNTAR LOS ARCHIVOS EN EL BOTÓN QUE CORRESPONDA ANTES DE HACER CLICK EN “CARGAR ARCHIVOS',
            html: `
        <p>RECUERDE QUE EL SISTEMA HARÁ LA EVALUACIÓN DEL XML SEGÚN
        CORRESPONDA Y ATC HARÁ LA VALIDACIÓN DEL PDF CORRESPONDIENTE,
        EN CASO DE NO COINCIDIR SERÁ SANCIONADO.</p>
    `,
            confirmButtonColor: '#254ab1',
            width: modalWidth  // Ancho del modal definido dinámicamente
        });
        return;
    }
    let modalWidth;
    if (screenWidth <= 600) {
        modalWidth = '90%';
    } else {
        modalWidth = '600px';
    }
    Swal.fire({
        icon: 'warning',
        title: 'AVISO IMPORTANTE',
        html: `
        <p>ESTA ACCIÓN NO ES REVERSIBLE, UNA VEZ REALIZADA TENGA PRESENTE
QUE NO PODRÁ TRANSFERIR SALDO DE ESTA COMISIÓN AL MONEDERO.
</p>
        <p>RECUERDE QUE EL SISTEMA HARÁ LA EVALUACIÓN DEL XML SEGÚN
CORRESPONDE Y ATC HARÁ LA VALIDACIÓN DEL PDF CORRESPONDIENTE,
EN CASO DE NO COINCIDIR SERÁ SANCIONADO.</p>
    `,
        showCancelButton: true,
        cancelButtonColor: "#d33",
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar",
        confirmButtonColor: '#254ab1',
        width: modalWidth
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Excelente",
                text: "Archivos cargados satisfactoriamente.",
                icon: "success",
                confirmButtonColor: '#254ab1',
            });
            limpiarCampos();
        }
    });
});