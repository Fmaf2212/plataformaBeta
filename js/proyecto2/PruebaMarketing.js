fetch("http://localhost:3000/archivos")
    .then(res => res.json())
    .then(response => {
        //console.log(response)
        llamarDocu(response)
    })
function llamarDocu(respuesta) {
    respuesta.forEach(docu => {
        //console.log(docu.NOMBRE);
    })

    const busc = document.querySelector('#buscador');
    const resul = document.querySelector('#resultado');

    const filtrar = () => {
        resul.innerHTML = '';
        console.log(resul);
        const texto = busc.value.toLowerCase();
        for (let documento of respuesta) {
            //console.log(documento.NOMBRE);
            let nombre = documento.NOMBRE.toLowerCase();
            if (nombre.indexOf(texto) !== -1) {

                resul.innerHTML += `
                    
                            <div class="portfolio-item apps ${documento.TIPO_ARCHIVO.toLowerCase()} col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 animated-item-1">
                                <div class="recent-work-wrap">
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <div class="offer offer-radius ${documento.CODIGO_CLASS}">
                                            <div class="shape">
                                                <div class="shape-text">
                                                    ${documento.TIPO_ARCHIVO}
                                                </div>
                                            </div>
                                            <div class="offer-content">
                                                <h3 class="leadDocumentos">${documento.NOMBRE}
                                                </h3>
                                                <p>
                                                    Link: &nbsp;

                                        <a href="marketing/${documento.ARCHIVO}">
                                            <img src="img/${documento.TIPO_ARCHIVO}.png" />&nbsp;Enlace</a>

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            `

            }
        }
        if (resul.innerHTML === '') {
            console.log('entré en resul.innerHTML === ""');
            resul.innerHTML += `
                        <li>Producto no encontrado...</li>
                    `
        }
    }
    busc.addEventListener('keyup', filtrar);

    filtrar();
}