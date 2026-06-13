/*contador*/
const FECHA_MUNDIAL = new Date("2026-07-19T16:00:00");

setInterval(function() {
    const ahora = new Date();
    const diferencia = FECHA_MUNDIAL - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("contador-dias").textContent = String(dias).padStart(2, 0);
    document.getElementById("contador-horas").textContent = String(horas).padStart(2, 0);
    document.getElementById("contador-minutos").textContent = String(minutos).padStart(2, 0);
    document.getElementById("contador-segundos").textContent = String(segundos).padStart(2, 0);

}, 1000);


/*boto participar*/

function sorteo() {
    document.getElementById("cartel").classList.remove("oculto");
}


document.getElementById("btn-participar").addEventListener("click", sorteo);