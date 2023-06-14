const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
  let dateToday = new Date();
  let hr = dateToday.getUTCHours();  
  let min = dateToday.getUTCMinutes();  
  let s = dateToday.getUTCSeconds();  

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;


})