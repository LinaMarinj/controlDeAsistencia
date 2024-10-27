let menu;
let contadorParticipantes = 0;
let contadorLlegadasTarde = 0;
let participante = {};
let participantes = [];

function verParticipantes() {
  let mensaje = "";
  participantes.forEach((participante) => {
    mensaje +=
      participante.id +
      " " +
      participante.nombre +
      " " +
      participante.apellido +
      " " +
      participante.horaLLegadaFormateada +
      "\n";
  });

  return mensaje;
}

function bienvenido() {
  alert("👋 Bienvenido al Control De Asistencia 🕑");
}

function penalizacion() {
  alert(
    "⚠ Llegas tarde \n Tendras una penalización del 50% en tu puntaje de asistencia."
  );
}

function resumenDelEvento() {
  alert(
    "Resumen del evento: \n\n -👤 Total participantes: " +
      contadorParticipantes +
      "\n -⚠ Total llegadas tarde: " +
      contadorLlegadasTarde +
      "\n\n Detalle de los participantes (Cedula, Nombre, Apellido, Hora de LLegada): \n" +
      verParticipantes()
  );
}

bienvenido();
alert("El evento inicia a las 🕑15:00");

do {
  menu = parseInt(
    prompt(
      "Elige una opción:\n\n 1.👤 Agregar participante.\n 2.📈 Resumen del evento.\n 0.✖ Salir"
    )
  );

  if (menu == 1) {
    contadorParticipantes++;
  }

  switch (menu) {
    case 0:
      resumenDelEvento();
      alert("Saliendo del programa...");
      break;
    case 1:
      participante = {};
      let fechaDelEvento = new Date(2024, 10, 23, 15, 0, 0); // Se define la fecha del evento
      let id = prompt("Ingrese su cédula:");
      let nombre = prompt("Ingrese su nombre");
      let apellido = prompt("Ingrese su apellido");
      let horaLLegada = prompt(
        "Ingrese la hora de entrada en formato (HH-MM): \n Ejemplo: 16-30"
      ).split("-"); //método que separa texto convirtiendolo en un arreglo y separandolo por un carácter específico

      let fechaDeLLegada = new Date(
        2024,
        10,
        23,
        horaLLegada[0],
        horaLLegada[1],
        0
      );

      participante = {
        id: id,
        nombre: nombre,
        apellido: apellido,
        horaLLegada: fechaDeLLegada.getTime(),
        horaLLegadaFormateada:
          fechaDeLLegada.getHours() + "-" + fechaDeLLegada.getMinutes(),
      };

      participantes.push(participante);

      alert("Participante registrado ✔️");

      if (participante.horaLLegada > fechaDelEvento.getTime()) {
        penalizacion();

        if (participante.horaLLegada > fechaDelEvento.getTime()) {
          contadorLlegadasTarde++;
        }
      } else {
        alert("Llegas a tiempo ☺");
      }

      break;

    case 2:
      resumenDelEvento();

      break;

    default:
      alert("Opción invalida, intentelo de nuevo");
      break;
  }
} while (menu != 0);
