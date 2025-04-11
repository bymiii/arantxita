window.onload = function() {
  // Mostrar las flores y decoraciones por 2 segundos y luego ocultarlas
  setTimeout(function() {
    document.getElementById('decoraciones').style.display = 'none';
    mostrarMensaje();
  }, 2000);
};

// Función para mostrar el mensaje lentamente (tipo máquina de escribir)
function mostrarMensaje() {
  const mensaje = "Enhorabuena Arantxita, has conseguido hacer algo increíble, estoy muy orgulloso de ti. Te quiero de aquí al final del mar!!!";
  let index = 0;
  const mensajeElemento = document.getElementById('mensaje');
  mensajeElemento.textContent = "";

  // Escribir el mensaje poco a poco
  const intervalo = setInterval(function() {
    mensajeElemento.textContent += mensaje.charAt(index);
    index++;
    if (index === mensaje.length) {
      clearInterval(intervalo);
      setTimeout(function() {
        document.querySelector('.contenedor').style.display = 'block';
      }, 1000);  // Mostrar el campo después de un segundo
    }
  }, 100);  // Velocidad de escritura (100ms por letra)
}

// Función para verificar la palabra
function verificar() {
  const entrada = document.getElementById('clave').value.trim().toLowerCase();
  const mensajeError = document.getElementById('mensajeError');

  if (entrada === "mariposa") {
    // Redirigir al video en Google Drive
    window.location.href = "https://drive.google.com/file/d/15sC1xWODHLmpR7MMLANfMW0Rg6pecCGF/view?usp=share_link";
  } else {
    mensajeError.textContent = "Palabra incorrecta... prueba de nuevo cariño, ¡tú puedes!";
    document.getElementById('clave').value = "";
  }
}
