$(document).ready(function() {
// seleccion de input
  var $inputTelephone = $('#inputTelephone');
  var $submit = $('a[type=submit]')
  // variable verificadora

  var verifyTelephone = false;

  // asociando eventos a los elementos seleccionados

  $inputTelephone.on('input', function(event) {
    var patternTelephone = /^[9|6|7][0-9]{8}$/;
    
    if (patternTelephone.test($(this).val())) {
      verifyTelephone = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });

  // activar boton 

  function activeButton() {
    if (verifyTelephone) {
      $submit.attr('disabled', false);
    }
  }

  function desactiveButton() {
    $submit.attr('disabled', true);
  } 

});


