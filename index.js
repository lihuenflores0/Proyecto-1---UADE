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


/*boton participar*/

function sorteo() {
    const formulario = document.getElementById("form-sorteo");

    /* Validación nativa del navegador (required + tipo email) */
    if (!formulario.reportValidity()) {
        return;
    }

    /* Refuerzo: rechaza campos que solo tienen espacios en blanco */
    const campos = formulario.querySelectorAll("input[required]");
    let hayCampoVacio = false;

    campos.forEach(function (campo) {
        if (campo.value.trim() === "") {
            hayCampoVacio = true;
            campo.classList.add("input-error");
        } else {
            campo.classList.remove("input-error");
        }
    });

    if (hayCampoVacio) {
        return;
    }

    document.getElementById("cartel").classList.remove("oculto");
}

const btnParticipar = document.getElementById("btn-participar");
if (btnParticipar) {
    btnParticipar.addEventListener("click", sorteo);
}


/* Gráfico animado de Cupos por Federaciones */

function animarGraficoCupos() {
    const barras = document.querySelectorAll(".barra-directas, .barra-repechaje");

    barras.forEach(function (barra) {
        const valor = Number(barra.dataset.valor);
        const max = Number(barra.dataset.max);
        const porcentaje = (valor / max) * 100;
        barra.style.width = porcentaje + "%";
    });
}

const graficoCupos = document.getElementById("grafico-cupos");

if (graficoCupos) {
    const observerCupos = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                animarGraficoCupos();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observerCupos.observe(graficoCupos);
}


/* Animaciones al hacer scroll (reveal) */

const elementosReveal = document.querySelectorAll(".reveal");

if (elementosReveal.length > 0) {
    const observerReveal = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    elementosReveal.forEach(function (el) {
        observerReveal.observe(el);
    });
}