/* Validar que se inicie sesión al agregar algo al carrito */

$(".boton").click(function(){
	$().show(alert("Debe iniciar sesión para agregar un producto al carrito"))
	setTimeout( function() { window.location.href = "log-in.html"; }, 1000 );
})

/* Validar que se inicie sesión al ingresar al carrito */

$(".volver").click(function(){
	$().show(alert("Debe iniciar sesión para realizar esta acción"))
	setTimeout( function() { window.location.href = "log-in.html"; }, 1000 );
})
