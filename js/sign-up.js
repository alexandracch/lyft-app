$(document).ready(function() {
  // seleccion de input
  var $inputTelephone = $('#inputTelephone');
  var $submit = $('a[type=submit]');
  // variable verificadora

  var verifyTelephone = false;
  var submitAll = true;

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
	// local storage y codigo 
	$submit.on('click', function() {
		event.preventDefault();
		if (submitAll) {
      var code = 'LAB';
      for (var i = 0; i < 3; i++) {
        var nums = Math.round(Math.random() * 9);
        code += nums;
      }

      alert(code);

      localStorage.setItem('saveCode', code);

      var obtNum = $('#inputTelephone').val();
      localStorage.setItem('Telephone', obtNum);


			window.location.href = 'verify.html';

      var verify = window.location.href;
      if (verify < 0) {
        submitAll = false;
      }
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