$(document).ready(function() {
  $('#numCode').on('input', function(event) {
    // seleccionando elementos
    var $submit = $('a[type=submit]'); // obtiene submit
    var codeLab = localStorage.getItem('saveCode'); // local storage de sign-up
    
    // variable verificadora
    var correctCode = false;

    // verificando si es el código correcto
    if ($(this).val() === codeLab) {
      correctCode = true;
      activeButton();
    } else {
      desactiveButton();
    }

    // desactiva y activa el botón
    function activeButton() {
      if (correctCode) {
        $submit.attr('disabled', false);
      }
    }
    
    function desactiveButton() {
      $submit.attr('disabled', true);
    }
  });
});
