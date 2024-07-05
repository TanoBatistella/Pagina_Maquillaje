$(document).ready(
  function(){
  var desabilitar = 0;
  $('#limpiar').attr('disabled', true)
  $("#asignar").click(
  function(){
  var valorImagen = $("#selectImagen").val();
  
  switch(valorImagen){
  case '0':
  alert("porfavor, elija una imagen");
  break
  
  case '1':
  SaberPosicion("fotos/foto1.jpg")
  break
  
  case '2':
  SaberPosicion("fotos/foto2.jpg")
  break
  
  case '3':
  SaberPosicion("fotos/foto3.jpeg")
  break
  
  case '4':
  SaberPosicion("fotos/foto4.jpeg")
  break
  
  case '5':
  SaberPosicion("fotos/foto5.jpeg")
  break
  }
  
  if(desabilitar > 0){
  $('#limpiar').attr('disabled', false);
  }
  
  if(desabilitar === 3){
  $('#asignar').attr('disabled', true);
  $('#asignar').addClass('desabilitado');
  }
  }
  
  );
  
  $("#limpiar").click(
  function(){
  $('#img1').attr('src', 'img/ph.jpg');
  $('#img2').attr('src', 'img/ph.jpg');
  $('#img3').attr('src', 'img/ph.jpg');
  
  $('#asignar').attr('disabled', false);
  $('#asignar').removeClass('desabilitado');
  
  $('#posicion1').attr("disabled", false);
  $('#posicion2').attr("disabled", false);
  $('#posicion3').attr("disabled", false);
  
  $('#posi1').removeClass('desabilitado');
  $('#posi2').removeClass('desabilitado');
  $('#posi3').removeClass('desabilitado');
  
  desabilitar = 0;
  }
  )
  
  function SaberPosicion(imagenPasada){
  var valorPosicion = $('input[name=posicion]:checked').val();
  
  switch(valorPosicion){
  case '1':
  $('#img1').attr('src', imagenPasada);
  $('#posicion1').attr("disabled", true);
  $('#posi1').addClass('desabilitado');
  
  desabilitar = desabilitar + 1;
  break
  
  case '2':
  $('#img2').attr("src", imagenPasada);
  $('#posicion2').attr("disabled", true);
  $('#posi2').addClass('desabilitado');
  
  desabilitar = desabilitar + 1;
  break
  
  case '3':
  $('#img3').attr("src", imagenPasada);
  $('#posicion3').attr('disabled', true);
  $('#posi3').addClass('desabilitado');
  
  desabilitar = desabilitar + 1;
  break
  }
  }
  
  $("#limpiar").click(
  function(){
  $('#img1').attr('src', 'fotos/ph.png');
  $('#img2').attr('src', 'fotos/ph.png');
  $('#img3').attr('src', 'fotos/ph.png');
  }
  )
    }
  )
  