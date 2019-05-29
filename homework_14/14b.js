var mas = ['2019-05-28 14:40', 'ABH785', 5000, 118];
document.getElementById('main').innerHTML = mas[0];
document.getElementById('main1').innerHTML = mas[1];
document.getElementById('main2').innerHTML = mas[2];
document.getElementById('main3').innerHTML = mas[3];

function carSpeed() {
    var s = (mas[2]/1000)/(mas[3]/120);
    return s;
}
document.getElementById('kmh').innerHTML = carSpeed().toFixed(0);