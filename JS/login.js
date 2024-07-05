/* Formulario */

$('#log-in').ready(function() {
	$("#mi-formulario").validate({
        
		rules: {
			nombre: {
				required: true,
				minlength: 3
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
			contra: {
				required: "El campo contraseña es obligatorio",
				minlength: "El campo contraseña debe tener al menos 8 caracteres"
				}
		}
	});
});

$.validator.setDefaults({
	submitHandler: function() {
		alert("Sesión iniciada correctamente");
        $("#mi-formulario")[0].reset();
        setTimeout( function() { window.location.href = "homeperfil.html"; }, 1000 );
	}
});
