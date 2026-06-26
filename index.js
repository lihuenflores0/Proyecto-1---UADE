

/* Todo el código jQuery va dentro de document.ready, así nos
   aseguramos de que la página haya terminado de cargar antes
   de manipular los elementos. */
$(document).ready(function () {

  /* ---------- 1) Mostrar las secciones (efecto aparecer) ----------
     En el CSS, los elementos con clase "reveal" arrancan invisibles
     (opacity: 0). Al agregarles la clase "visible", aparecen con una
     transición suave que ya está definida en el CSS. */
  $(".reveal").addClass("visible");


  /* ---------- 2) Animar las barras del gráfico de cupos ----------
     Cada barra guarda su valor en data-valor y el máximo en data-max.
     Recorremos todas las barras y le calculamos el ancho en porcentaje.
     El efecto de "llenado" lo hace solo el CSS (transition: width). */
  $(".barra-directas, .barra-repechaje").each(function () {
    let valor = $(this).attr("data-valor");   // cuánto vale esa barra
    let max = $(this).attr("data-max");        // el máximo de la escala
    let porcentaje = (valor / max) * 100;      // regla de tres simple
    $(this).css("width", porcentaje + "%");    // le aplicamos el ancho
  });


  /* ---------- 3) Botón "Participar" del sorteo (validación) ----------
     Leemos los 4 campos del formulario. Si alguno está vacío,
     avisamos. Si están todos completos, mostramos el cartel de éxito. */
  $("#btn-participar").click(function () {
    let mail = $("#form-mail").val();
    let nombre = $("#form-name").val();
    let apellido = $("#form-apellido").val();
    let pais = $("#form-pais").val();

    // El || significa "o": si CUALQUIERA está vacío, entra al if
    if (mail == "" || nombre == "" || apellido == "" || pais == "") {
      alert("Por favor completá todos los campos para participar.");
    } else {
      $("#cartel").fadeIn();   // muestra el cartel con un desvanecido
    }
  });


  /* ---------- 4) Cuenta regresiva para la final ----------
     setInterval repite el bloque cada 1000 ms (1 segundo).
     Calculamos cuánto falta y lo mostramos en cada bloque. */
  setInterval(function () {
    let fechaMundial = new Date("2026-07-19T16:00:00");  // día de la final
    let ahora = new Date();                               // momento actual
    let diferencia = fechaMundial - ahora;                // milisegundos que faltan

    // Pasamos los milisegundos a días, horas, minutos y segundos.
    // parseInt corta los decimales (nos quedamos con la parte entera).
    let segundosTotales = parseInt(diferencia / 1000);
    let dias = parseInt(segundosTotales / 86400);             // 86400 seg = 1 día
    let horas = parseInt((segundosTotales % 86400) / 3600);   // 3600 seg = 1 hora
    let minutos = parseInt((segundosTotales % 3600) / 60);    // 60 seg = 1 min
    let segundos = segundosTotales % 60;

    // Mostramos cada número en su lugar (con dos dígitos)
    $("#contador-dias").text(dosDigitos(dias));
    $("#contador-horas").text(dosDigitos(horas));
    $("#contador-minutos").text(dosDigitos(minutos));
    $("#contador-segundos").text(dosDigitos(segundos));
  }, 1000);

});


/* ---------- Función auxiliar ----------
   Si el número es menor a 10, le agrega un 0 adelante
   (para que se vea "05" en vez de "5"). Devuelve el resultado. */
function dosDigitos(numero) {
  if (numero < 10) {
    return "0" + numero;
  } else {
    return numero;
  }
}
