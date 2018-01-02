$(document).ready(function() {
  var $inputTelephone = $('#inputTelephone');
  var $submit = $('a[type=submit]'); // sleccionando boton
  var verifyTelephone = false;
  // $expresion = '/^[9|6|7][0-9]{8}$/'
  
  // validando telefono
  $inputTelephone.on('input', function(event) {
    var patternTelephone = /^[9|6|7][0-9]{8}$/;

    if (patternTelephone.test($(this).val())) {
      console.log('ta bien');
    } else {
        console.log('ta mal');
    }
  });

  // Activar y desactivar botón

// 
});


//function activeButton() {
    //     if (verifyTelephone) {
    //       $submit.attr('disabled', false);
    //     }
    //   }
    
    //   function desactiveButton() {
    //     $submit.attr('disabled', true);
    //   }