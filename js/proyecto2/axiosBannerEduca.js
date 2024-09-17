getInfoImagenForBanner();
function getInfoImagenForBanner() {
    axios.post('https://api.mundosantanatura.com/api/Room/GetActive_PopUp', {})
        .then(response => {
            console.log(response);
            const imgName = response.data.data;
            //console.log(typeof lista);
            let imgPopup = document.getElementById("imgPopup");
            if (!!imgPopup) {
                imgPopup.src = 'https://tienda.mundosantanatura.com/popups/' + imgName;
            }
            $(".sectionLoader").fadeOut("slow");//fadeIn: ocultamos el objeto, slow: velocidad de la duración del efecto
        })
        .catch(error => console.error(error));
}
// Obtiene el modal
var modal = document.getElementById("modal");

// Obtiene el elemento <span> que cierra el modal
var span = document.getElementById("cerrar");

if (!!modal && !!span) {
    // Cuando el usuario haga clic en <span> (x), cierre el modal
    span.onclick = function () {
        modal.style.display = "none";
    }
}