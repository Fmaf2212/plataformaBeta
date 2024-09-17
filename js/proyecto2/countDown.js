//const output = document.querySelector("#h1CountDown");
//const input = document.querySelector("#inputCountDown");

//const countDownDate = new Date(input.value).getTime();
//console.log(countDownDate);
//const now = new Date().getTime();
//console.log(now);
//const distance = countDownDate - now;
//console.log(distance);


//const countDown = () => {
//    const input = document.querySelector("#inputCountDown");
//    //const countDownDate = "2022-12-31T23:59";

//    const countDownDate = new Date(input.value).getTime();
//    const now = new Date().getTime();

//    const distance = countDownDate - now;

//    const dd = Math.floor(distance / (1000 * 60 * 60 * 24));

//    const hh = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

//    const mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

//    const ss = Math.floor((distance % (1000 * 60)) / 1000);

//    output.innerText = `${dd}d ${hh}h ${mm}m ${ss}s`;

//    if (distance < 0) {
//        output.innerText = "El Periodo a finalizado";
//    }
//};

//countDown();
//setInterval(countDown, 1000);

//------------------------------------PARA EL INDEX--------------------------------------------


const countDownIndex = () => {
    //const input = document.querySelector("#inputCountDown");
    const now = new Date().getTime();

    const countDownDate = new Date(fecha).getTime();

    const distance = countDownDate - now;

    if (distance < 0) {
        countDown = getInfoForCountDownAndPeriodo();
        popupArticle.style.display = 'block';
        document.getElementById('body').style.overflow = 'hidden';
    }

    let dd = Math.floor(distance / (1000 * 60 * 60 * 24));

    let hh = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    let mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    let ss = Math.floor((distance % (1000 * 60)) / 1000);

    let transformaNumberDD = dd.toString();
    let transformaNumberHH = hh.toString();
    let transformaNumberMM = mm.toString();
    let transformaNumberSS = ss.toString();

    if (transformaNumberDD.length < 2) {
        transformaNumberDD = '0' + transformaNumberDD;
    } else {
        transformaNumberDD = transformaNumberDD;
    }

    if (transformaNumberHH.length < 2) {
        transformaNumberHH = '0' + transformaNumberHH;
    } else {
        transformaNumberHH = transformaNumberHH;
    }

    if (transformaNumberMM.length < 2) {
        transformaNumberMM = '0' + transformaNumberMM;
    } else {
        transformaNumberMM = transformaNumberMM;
    }

    if (transformaNumberSS.length < 2) {
        transformaNumberSS = '0' + transformaNumberSS;
    } else {
        transformaNumberSS = transformaNumberSS;
    }

    const outputIndex = document.querySelector("#h1CountDownIndex");//Saldrá error si estoy en otra página ya que este elemento no existe en dicha página, si no, solo en el index.
    if (!!outputIndex) {
        outputIndex.innerText = `${transformaNumberDD}d : ${transformaNumberHH}h : ${transformaNumberMM}m : ${transformaNumberSS}s`;

        if (distance < 0) {
            outputIndex.innerText = "El Periodo a finalizado";
        }
    }

};

getInfoForCountDownAndPeriodo();
let fecha = '';
function getInfoForCountDownAndPeriodo() {
    axios.post('https://api.mundosantanatura.com/api/Room/GetPeriod_Counter', {})
        .then(response => {

            let countDown = response.data.data.fechaFin;
            //let countDown = '2023-02-01T10:29:00';
            fecha = countDown;

            const namePeriodoActual = document.getElementById('namePeriodoActual');
            if (!!namePeriodoActual) {
                namePeriodoActual.innerText = response.data.data.nombre;
            }

            countDownIndex();
            return fecha;
        })
        .catch(error => console.error(error));
}


let popupArticle = document.getElementById('popup-article');

let popupClose = document.getElementById('popup__close');
popupClose.addEventListener('click', function(){
    popupArticle.style.display = 'none';
})
            setInterval(countDownIndex, 1000);


//const inputIndex = document.querySelector("#inputCountDownIndex");

//function getDataServiceCountdow() {
//    axios.post('https://api.mundosantanatura.com/api/Room/GetPeriod_Counter', {})
//        .then(response => {
//            console.log(response);
//            return response.data.data.fechaFin;
//        })
//        .catch(error => console.error(error));
//}
//getDataServiceCountdow();