const scriptUrl = 'https://script.google.com/macros/s/AKfycbzeVU1sLyiBEtsd1nIeWOWvRGhF0PYP0jcF6yhpRlhdAEjiqvpZG-M9hMU07tP5Oww/exec'; // asegurate de que esté completa
const form = document.forms['asistenciaform'];

form.addEventListener('submit', e => {
  e.preventDefault();

  Swal.fire({
    title: 'Enviando...',
    text: 'Por favor, esperá un momento',
    allowOutsideClick: false,
    didOpen: () => Swal.showLoading()
  });

  fetch(scriptUrl, { method: 'POST', mode: 'no-cors', body: new FormData(form) })
    .then(() => {
      Swal.fire('¡MUCHAS GRACIAS!', 'Formulario enviado', 'success');
      setTimeout(() => location.reload(), 1500);
    })
    .catch(() =>
      Swal.fire('Error', 'No se pudo enviar el formulario', 'error')
    );
});