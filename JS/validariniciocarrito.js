$(".volver").click(function(){
	$().show(alert("Debe iniciar sesión para realizar esta acción"))
	setTimeout( function() { window.location.href = "log-in.html"; }, 1000 );
})