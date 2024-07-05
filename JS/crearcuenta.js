/* Crear cuenta */


$('#check').click(function () {

      if ($('.log-in').is(':disabled')) {
        $('.log-in').removeAttr('disabled');
      } else {
        $('.log-in').attr('disabled', 'disabled');
      }
});

$('.log-in').ready(function() {
	$("#mi-formulario").validate({
        
		rules: {
			nombre: {
				required: true,
				minlength: 3
			},
			apellido: {
						required:true,
						number: false
			},
	        usuario: {
			            required: true,
			            minlength: 4
	        },
			contra: {
				required: true,
				minlength: 10
			}
		},
		messages: {
			nombre: {
				required: "Debes completar tu Nombre",
				minlength: "Tu nombre debe tener al menos 3 caracteres"
			},
			apellido: {
						required: "Este campo es obligatorio",
						number: "Este campo no debe contener números"
			},
	        usuario: {
			            required: "Debes ingresar tu usuario",
			            minlength: "Tu usuario debe contener al menos 4 caracteres"
	        },
			contra: {
				required: "El campo contraseña es obligatorio",
				minlength: "El campo contraseña debe tener al menos 8 caracteres"
			},
		}
	});
});

/*function verificarPasswords() {
	contra = document.getElementById ('contra');
	contra2 = document.getElementById ('contra2');

	if (contra1.value != contra2.value) {
		document.getElementById("error").classList.add("mostrar");
		return false;
	}
	else {
		document.getElementById("error").classList.remove("mostrar");
		document.getElementById("ok").classList.remove("ocultar");
		document.getElementById("log-in").disable = true;

		setTimeout (function() {
			location.reload();
		} ,3000);

		return true;
	}


$.validator.setDefaults({
	submitHandler: function() {
		alert("Formulario completado correctamente");
        $("#mi-formulario")[0].reset();
        setTimeout( function() { window.location.href = "home.html"; }, 1000 );
	}
});*/
