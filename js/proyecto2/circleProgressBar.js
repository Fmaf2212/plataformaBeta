const circle = document.getElementById('circle');
//const input = document.getElementById('percent');
const input = 50;
const number = document.querySelector('.card__number');
const tooltip = document.querySelector('.tooltip');

function circlePercent() {
    let change = 565.49 - (565.49 * input) / 100;
    number.innerHTML = Number(input) + '%';
    circle.style.strokeDashoffset = change;
};
(circlePercent)();
function isNumeric(event) {
    if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode > 31)) {
        return false;
    }
    if (event.keyCode == 13) {
        changePercent();
    }
};
