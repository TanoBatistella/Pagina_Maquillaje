<?php
$nombre = $_POST['nombre']
$numero = $_POST['numero']
$email = $_POST['email']
$direccion = $_POST['direccion']
$select = $_POST['select']
$rb = $_POST['rb']
$fecha = $_POST['fecha']
$mensaje = $_POST['mensaje']


$header = 'From:  ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";


$message = "Este mensaje fue enviado por: " . $nombre . " \r\n";
$message .= "Su e-mail es: " . $email . " \r\n";
$message .= "El teléfono del contacto es: " . $numero . " \r\n";
$message .= "Es de La Provincia De: " . $select . " \r\n";
$message .= "Su Género Es: " . $rb . " \r\n"; 
$message .= "Su Fecha De Nacimiento Es: " . $fecha . " \r\n"; 
$message .= "La direccion Del Distanatario Es: " . $direccion .  " \r\n";
$message .= "Su Mensaje Es: " . $_POST['message'] . " \r\n";
$message .= "Enviado El: " . date('d/m/Y', time());


$para = 'est.batistella.tiziano@latecnicalf.com.ar';
$asunto = 'Asunto Del Mensaje';

mail($para, $asunto, utf8_decode($message), $header);

header("Location: home.html");