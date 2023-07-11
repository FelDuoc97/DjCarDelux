// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Selecionar el formulario y el elemento donde se mostrará el cartel
    const form = document.querySelector('#formulario');
    const mensaje = document.querySelector('#mensaje');
  
    // Agregar un evento cuando se valide el formulario
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevenir que se envíe el formulario
      if (form.checkValidity()) { // Verificar si el formulario es válido
        mensaje.textContent = 'Tus datos han sido validados correctamente.';
        mensaje.classList.add('mensaje-exito');
      } else {
        mensaje.textContent = '';
        mensaje.classList.remove('mensaje-exito');
      }
    });
  });
  