


$(document).ready(function () {

  $(".reveal").addClass("visible");


  $(".barra-directas, .barra-repechaje").each(function () {
    let valor = $(this).attr("data-valor");   // cuánto vale esa barra
    let max = $(this).attr("data-max");        // el máximo de la escala
    let porcentaje = (valor / max) * 100;      // regla de tres simple
    $(this).css("width", porcentaje + "%");    // le aplicamos el ancho
  });



  $("#btn-participar").click(function () {
    let mail = $("#form-mail").val();
    let nombre = $("#form-name").val();
    let apellido = $("#form-apellido").val();
    let pais = $("#form-pais").val();

    if (mail == "" || nombre == "" || apellido == "" || pais == "") {
      alert("Por favor completá todos los campos para participar.");
    } else {
      $("#cartel").fadeIn();   // muestra el cartel con un desvanecido
    }
  });


  setInterval(function () {
    let fechaMundial = new Date("2026-07-19T16:00:00");  // día de la final
    let ahora = new Date();                               // momento actual
    let diferencia = fechaMundial - ahora;                // milisegundos que faltan

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

function dosDigitos(numero) {
  if (numero < 10) {
    return "0" + numero;
  } else {
    return numero;
  }
}
