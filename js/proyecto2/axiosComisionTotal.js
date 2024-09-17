getIdcliente();

function getIdcliente() {
    let body = {};
    axios.post('Index.aspx/GetIdCliente', body)
        .then(response => {

            console.log(response);
            getInfoForComisionTotal(response.data.d);
        })
        .catch(error => console.error(error));

}

function getInfoForComisionTotal(idCliente) {
    let body = {
        "idCliente": idCliente
    }
    axios.post('https://api.mundosantanatura.com/api/Room/GetTotal_Comission', body)
        .then(response => {
            let comision = response.data.data;
            let comisionParseado = comision.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            let valorComisionTotal = document.getElementById('valorComisionTotal');
            let puntosViajes = document.getElementById('puntosViajes');
            if (!!valorComisionTotal) {
                valorComisionTotal.innerHTML = `<span class='moneda'>S/ </span>${comisionParseado}`;
            }
            if (!!puntosViajes) {
                puntosViajes.innerHTML = `<span class='moneda'>S/ </span>0`;
            }
        })
        .catch(error => console.error(error));

}