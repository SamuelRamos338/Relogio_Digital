const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let h = dateToday.getHours();
    let m = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (h < 10) hr = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;
    
    horas.textContent = h;
    minutos.textContent = m;
    segundos.textContent = s;
})

let trilho = document.getElementById("trilho");
let body = document.querySelector('body');

trilho.addEventListener('click', (e) => {
    trilho.classList.toggle('dark')
    body.classList.toggle('dark');
})
