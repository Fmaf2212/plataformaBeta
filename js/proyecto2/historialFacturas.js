

//AL DAR CLICK AL BOTON ADJUNTAR
let boton = document.getElementById("btnNuevaFacturacion"); // Encuentra el elemento "p" en el sitio
boton.onclick = abrirPrimerModal; // Agrega función onclick al elemento

function abrirPrimerModal(evento) {
    $('#exampleModal').modal({
        keyboard: true,
        id: 'nuevoModal',
        fadeDuration: 5000,
        fadeDelay: 0.50
    });
    //Se pone en vacío los valores de los archivos xml y pdf.
    $("#archivoEXCEL").val('');
    $("#archivoPDF").val('');
    //Se pone en vacío los nombres de los archivos.
    var nombreXML = document.getElementById('bloqueNombreXML');
    nombreXML.textContent = "";
    var nombrePDF = document.getElementById('bloqueNombrePDF');
    nombrePDF.textContent = "";
    //Le quito los efectos de movivimiento del botón
    let btn = document.getElementById('btnValidar');
    btn.removeAttribute('style');
    btn.classList.remove("movimiento1", "movimiento2");
    //Si el elemento con id exampleModal cuenta con la clase fade, se le coloca el estilo transition con valor none; PARA QUE AL CERRAR NO SE VEA UNA TRANSICION DESAGRADABLE
    let modal = document.getElementById('exampleModal');
    if (modal.classList.contains('fade')) {
        modal.style.transition = 'none';
    }
    let body = document.getElementById('body');
    //const newDiv = document.createElement("div");

    //document.body.appendChild(newDiv);
    //newDiv.setAttribute('id', 'modalBackdrop');
    //newDiv.classList.add('modal-backdrop');
    //newDiv.classList.add('fade');
    //newDiv.classList.add('show');
    modal.classList.toggle("show");
    body.classList.toggle("show");

    //OCULTAMOS LOS MENSAJES DE ERROR
    let mensaje1 = document.getElementById('mensajeErrorValidacion');
    let mensaje2 = document.getElementById('mensajeErrorValidacion2');
    if (modal.classList.contains('show')) {
        mensaje2.style.display = 'none';
        mensaje1.style.visibility = 'hidden';
    }

    //VALIDACIONES PARA INGRESAR UN ARCHIVO XML
    //Guardamos el input tipo file
    const inputXML = document.getElementById('archivoEXCEL');

    inputXML.addEventListener('change', e => {
        //guardamos el archivo seleccionado con la API "FILE"
        const fileXML = e.currentTarget.files[0];

        //si el arhcivo es diferente a xml
        if (fileXML.type !== 'text/xml') {
            //reseteo el valor del input
            e.currentTarget.value = '';
            //muestro una alerta 
            //alert('Por favor seleccione un archivo XML');
            Swal.fire({
                text: "Por favor seleccione un archivo XML",
                icon: "error",
                confirmButtonText: "Aceptar",
                //width: 260,
                backdrop: true,
                allowOutsideClick: true
            });
            var nombreXML = document.getElementById('bloqueNombreXML');
            nombreXML.textContent = "";
            return;
        }
    });

    //VALIDACIONES PARA INGRESAR UN ARCHIVO PDF
    //Guardamos el input tipo file
    const inputPDF = document.getElementById('archivoPDF');

    inputPDF.addEventListener('change', e => {
        //guardamos el archivo seleccionado con la API "FILE"
        const filePDF = e.currentTarget.files[0];

        //si el arhcivo es diferente a PDF
        if (filePDF.type !== 'application/pdf') {
            //reseteo el valor del input
            e.currentTarget.value = '';
            //muestro una alerta 
            //alert('Por favor seleccione un archivo PDF');
            Swal.fire({
                text: "Por favor seleccione un archivo PDF",
                icon: "error",
                confirmButtonText: "Aceptar",
                backdrop: true,
                allowOutsideClick: true
            });
            var nombrePDF = document.getElementById('bloqueNombrePDF');
            nombrePDF.textContent = "";
            return;
        }
    });
};

//PARA CERRAR EL PRIMER MODAL
let botonCerrarModal = document.getElementById("btnCerrarModal");
botonCerrarModal.addEventListener("click", (e) =>{
    let modal = document.getElementById('exampleModal');
    let body = document.getElementById('body');
    modal.classList.toggle("show");
    body.classList.toggle("show");
    let btn = document.getElementById('btnValidar');
    btn.removeAttribute('style');
    btn.classList.remove("movimiento1", "movimiento2");
    $("#archivoEXCEL").val('');
    $("#archivoPDF").val('');
    var nombreXML = document.getElementById('bloqueNombreXML');
    nombreXML.textContent = "";
    var nombrePDF = document.getElementById('bloqueNombrePDF');
    nombrePDF.textContent = "";
});

//AL DAR CLICK EN EL MODAL-BACKDROP
//let clickModalBackdrop = document.getElementById("nuevoModal");
//clickModalBackdrop.addEventListener("click", (e) => {
//    console.log('entré en clickModalBackdrop');

//    $("#archivoEXCEL").val('');
//    $("#archivoPDF").val('');
//    var nombreXML = document.getElementById('bloqueNombreXML');
//    nombreXML.textContent = "";
//    var nombrePDF = document.getElementById('bloqueNombrePDF');
//    nombrePDF.textContent = "";
//});


//AL DAR CLICK AL BOTON VALIDAR
let botonModal1 = document.getElementById("btnValidar");
botonModal1.onclick = muestraAlerta3;

function muestraAlerta3(evento) {

    if (document.getElementById('archivoEXCEL').files.length == 0 || document.getElementById('archivoPDF').files.length == 0) {//Basta que no ingrese un archivo, que muestre el mensaje de error.
        let mensajeErrorValidacion2 = document.getElementById('mensajeErrorValidacion2');
        let mensajeErrorValidacion = document.getElementById('mensajeErrorValidacion');
        mensajeErrorValidacion2.style.display = 'block';
        mensajeErrorValidacion.style.display = 'none';
        //Animaciones para el boton Validar
        let btn = document.getElementById('btnValidar');
        let movimiento = btn.classList.contains('movimiento1');
        let movimiento2 = btn.classList.contains('movimiento2');
        btn.classList.toggle('movimiento1', movimiento);
        btn.classList.toggle('movimiento1', movimiento2);
        btn.classList.toggle('movimiento1');
        if (btn.classList.contains('movimiento1')) {
            btn.classList.replace('movimiento1', 'movimiento2');
        } else {
            btn.classList.replace('movimiento2', 'movimiento1');
        }
    } else if (document.getElementById('archivoEXCEL').files[0].name.slice(0, -4) !== document.getElementById('archivoPDF').files[0].name.slice(0, -4)) { //Si ambos archivos tienen distinto nombre, que muestre el mensaje de error.
        //Alerta o mensaje
        let mensajeErrorValidacion2 = document.getElementById('mensajeErrorValidacion2');
        let mensajeErrorValidacion = document.getElementById('mensajeErrorValidacion');
        mensajeErrorValidacion.style.display = 'block';
        mensajeErrorValidacion.style.visibility = 'visible';
        mensajeErrorValidacion2.style.display = 'none';
        //Animaciones para el boton Validar
        let btn = document.getElementById('btnValidar');
        let movimiento = btn.classList.contains('movimiento1');
        let movimiento2 = btn.classList.contains('movimiento2');
        btn.classList.toggle('movimiento1', movimiento);
        btn.classList.toggle('movimiento1', movimiento2);
        btn.classList.toggle('movimiento1');
        if (btn.classList.contains('movimiento1')) {
            btn.classList.replace('movimiento1', 'movimiento2');
        } else {
            btn.classList.replace('movimiento2', 'movimiento1');
        }
    } else {
        //let mensaje1 = document.getElementById('mensajeErrorValidacion');
        //let mensaje2 = document.getElementById('mensajeErrorValidacion2');
        //let modal = document.getElementById('exampleModal');
        //if (modal.classList.contains('show')) {
        //    mensaje2.style.display = 'none';
        //    mensaje1.style.visibility = 'hidden';
        //}
        //var nombreXML = document.getElementById('bloqueNombreXML');
        //nombreXML.textContent = "";
        //var nombrePDF = document.getElementById('bloqueNombrePDF');
        //nombrePDF.textContent = "";
        let modal = document.getElementById('exampleModal');
        let mensaje1 = document.getElementById('mensajeErrorValidacion');
        let mensaje2 = document.getElementById('mensajeErrorValidacion2');
        if (modal.classList.contains('show')) {
            mensaje2.style.display = 'none';
            mensaje1.style.visibility = 'hidden';
        }
        $('#exampleModal2').modal({ keyboard: true, id: 'nuevoModal2' });
        //alert("archivos ingresados correctamente");
        //Swal.fire({
        //    title: "PERFECTO!",
        //    text: "Los archivos han sido validados correctamente.",
        //    icon: "success",
        //    confirmButtonText: "OK",
        //    backdrop: true,
        //    allowOutsideClick: true
        //});

        /*/*/
        //Consumir y validar servicio
    }

};


//PARA CERRAR EL SEGUNDO MODAL
let botonCerrarModal2 = document.getElementById("btnCerrarModal2");
botonCerrarModal2.addEventListener("click", (e) =>{
    //$("#archivoEXCEL").val('');
    //$("#archivoPDF").val('');
    //var nombreXML = document.getElementById('bloqueNombreXML');
    //nombreXML.textContent = "";
    //var nombrePDF = document.getElementById('bloqueNombrePDF');
    //nombrePDF.textContent = "";
});

//Da click al boton Aceptar del MODAL 2
let botonModal2 = document.getElementById("btnValidar2"); // Encuentra el elemento en el sitio
botonModal2.onclick = muestraAlerta; // Agrega función onclick al elemento

function muestraAlerta(evento) {
    var intro = document.getElementById('exampleModal1');
    //intro.style.backgroundColor = '#FF00FF';
    //let modal1 = document.getElementById("exampleModal");
    ////modal1.style.display = 'none';
    //$("#exampleModal").css("display", "none");
    //$("#exampleModal").attr('style', 'display: none !important');
    //let modal2 = document.getElementById("exampleModal2");
    ////modal2.style.display = 'none';
    //$("#exampleModal2").css("display", "none !important");
    //$("#exampleModal2").attr('style', 'display: none !important');
    
    //CIERRA LOS MODALES 1 Y 2
    var modalito1 = document.getElementById('exampleModal');
    var modalito2 = document.getElementById('exampleModal2');
    modalito1.classList.remove('show');
    modalito2.classList.remove('show');
    modalito1.removeAttribute("style");
    modalito2.removeAttribute("style");

    //remueve los bloques con opacidad, para que se vea claro
    $('.modal-backdrop').remove();

    //Quita las clases modal-open y show del div con id body
    var body = document.getElementById('body');
    body.classList.remove('modal-open');
    body.classList.remove('show');

    $('#exampleModal3').modal({ keyboard: true, id: 'nuevoModal3' });

    //MENSAJE POPUP DE PERFECTO
    //Swal.fire({
    //    title: "PERFECTO!",
    //    text: "Los archivos han sido validados correctamente.",
    //    icon: "success",
    //    confirmButtonText: "OK",
    //    backdrop: true,
    //    allowOutsideClick: true
    //});
    //location.reload(true);
};


let botonModal3 = document.getElementById("btnValidar3"); 
botonModal3.onclick = muestraAlerta2; 

function muestraAlerta2(evento) {

    location.reload(true);
    $("#exampleModal3").attr('style', 'display: none !important');
    //$(".modal-backdrop").attr('style', 'opacity: 0 !important');
    //$(".modal-backdrop").attr('style', 'display: none !important');
    $(".modal-backdrop").remove('div');
}

//PARA CERRAR EL TERCER MODAL
let asd = document.getElementById("exampleModal3");
asd.addEventListener("click", (e) => {
    location.reload(true);
    $("#exampleModal3").attr('style', 'display: none !important');
    //$(".modal-backdrop").attr('style', 'opacity: 0 !important');
    //$(".modal-backdrop").attr('style', 'display: none !important');
    $(".modal-backdrop").remove('div');
    //$("#archivoEXCEL").val('');
    //$("#archivoPDF").val('');
    //var nombreXML = document.getElementById('bloqueNombreXML');
    //nombreXML.textContent = "";
    //var nombrePDF = document.getElementById('bloqueNombrePDF');
    //nombrePDF.textContent = "";
});

//----------------------------------------------------------------------------------------------------------------------//
$.ajax({
    type: "POST",
    url: "Bonificaciones.aspx/ComboPeriodoComision",
    data: {},
    contentType: "application/json; charset=utf-8",
    success: function (result) {
        console.log(result.d);
        $("#cboPeriodo").empty();
        $("#cboPeriodo").append("<option value='0'>Seleccione periodo</option>");
        $.each(result.d, function (key, value) {
            $("#cboPeriodo").append($("<option></option>").val(value.idPeriodo).html(value.nombrePeriodo));
        });
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus + ": " + XMLHttpRequest.responseText);
    }
});



$.ajax({
    type: "POST",
    url: "EditarPerfil.aspx/GetPais",
    data: "{}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    async: false,
    success: function (result) {
        $("#cboPais").empty();
        $("#cboPais").append("<option value='0'>Seleccione país</option>");
        $.each(result.d, function (key, value) {
            $("#cboPais").append($("<option></option>").val(value.Codigo).html(value.Nombre));
        });
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus + ": " + XMLHttpRequest.responseText);
    }
});


//------------------------------------------------------------------------------------------------------------------//
