$(document).ready(function() {
  // selección de elementos
  var $inputName = $('#inputName'); // seleccionando input de nombre de Usuario
  var $inputLastName = $('#inputLastName'); // seleccionnando input de Apellido
  var $inputEmail = $('#inputEmail');// seleccionando al input email
  var $checkBox = $('input[type=checkbox]'); // seleccionando atribut checkbox
  var $submit = $('a[type=submit]'); // sleccionando boton

  // variables verificadoras booleanas
  var verifyName = false;
  var verifyLastName = false;
  var verifyCheck = false;
  var verifyEmail = false;
  
  // Asociando eventos a los elementos selecionados
 
 
  // validando nombre
  $inputName.on('input', function(event) {
    $(this).val();

    var patternName = /[a-zA-ZñÑ\s]{2,50}/;

    if (patternName.test($(this).val())) {
      verifyName = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });


  // validando apellido
  $inputLastName.on('input', function(event) {
    var patternName = /[a-zA-ZñÑ\s]{2,50}/;
       
    if (patternName.test($(this).val())) {
      verifyLastName = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });
  // validando email
  $inputEmail.on('input', function(event) {
    // console.log(event.target.value);
    var patternEmail = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    console.log(patternEmail.test($(this).val()));
    console.log($(this).val());
    if (patternEmail.test($(this).val())) {
      verifyEmail = true;
      activeButton(); 
    } else {
      desactiveButton();
    }
  });

  // validando checkbox

  $checkBox.on('click', function(event) {
    if (event.target.checked) {
      verifyCheck = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });
  // local storage 
  $submit.on('click', function(event) {
    event.preventDefault();
    localStorage.email = $inputEmail.val();
    localStorage.name = $inputName.val();
    localStorage.lastname = $inputLastName.val();

    window.location.href = 'login.html';
  });


  // Activar y desactivar botón

  function activeButton() {
    if (verifyEmail && verifyName && verifyLastName && verifyCheck) {
      $submit.attr('disabled', false);
    }
  }

  function desactiveButton() {
    $submit.attr('disabled', true);
  } 
}); 