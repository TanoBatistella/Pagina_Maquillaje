/* Contacto */

$('#check').click(function () {

      if ($('#enviar').is(':disabled')) {
        $('#enviar').removeAttr('disabled');
      } else {
        $('#enviar').attr('disabled', 'disabled');
      }
});

$('#enviar').ready(function() {
  $("#contacto-form").validate({
        
  rules: {
                 nombre: {
                              required: true,
                              minlength: 3,
                              maxlength: 30
                        },
                  email: {
                              required: true
                        },
                  direccion: {
                              required: true
                        },
                  mensaje: {
                              required: true,
                              minlength: 10,
                              maxlength: 100
                        }
            },    
  messages: {
                  nombre: {
                              required: "Debes completar tu Nombre",
                              minlength: "Tu nombre debe tener al menos 3 caracteres",
                              maxlength: "Tu nombre debe tener menos de 30 caracteres"
                        },
                  email: {
                              required: "Debes ingresar tu email"
                        },
                  direccion: {
                              required: "Debes completar con tu dirección"
                        },
                  mensaje: {
                              required: "Debes completar con tu mensaje",
                              minlength: "Este campo debe tener al menos 10 caracteres",
                              maxlength: "Este campo debe tener menos de 100 caracteres"
                        }
      }
  });
});

$.validator.setDefaults({
  submitHandler: function() {
    alert("Formulario completado correctamente");
        $("#contacto-form")[0].reset();
        setTimeout( function() { window.location.href = "home.html"; }, 1000 );
  }
});