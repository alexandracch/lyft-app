$(document).ready(function() {
// selección de elementos
  var $inputName = $('#inputName'); // seleccionando input de nombre de Usuario
  var $inputLastName = $('#inputLastName'); // seleccionnando input de Apellido
  var $inputEmail = $('#inputEmail');// seleccionando al input email
  var $submit = $('a[type=submit]'); // sleccionando boton
  // asociar los eventos a los elementos

  $inputEmail.on('input', function() {
    if ($(this).val() === localStorage.name) {
      console.log('datos encontrados');
    } else {
      console.log('no tas');
    }
  });

  $inputLastName.on('input', function() {
    if ($(this).val() === localStorage.lastname) {
      console.log('datos encontrados');
    } else {
      console.log('no tas');
    }
  });

  $inputName.on('input', function() {
    if ($(this).val() === localStorage.name) {
      console.log('datos encontrados');
    } else {
      console.log('no tas');
    }
  });
  $submit.on('click', function() {
    event.preventDefault();
    if ($email.val() === localStorage.email && $inputName.val() === localStorage.name && $inputLastName.val() === localStorage.lastname) {
      alert('Hi! U are in :D');
      window.location.href = 'check.html';
    } else {
      alert('You need register :(');
      window.location.href = 'sign-up.html';
    }
  });
});