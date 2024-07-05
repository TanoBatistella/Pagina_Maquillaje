

 let historias=[ 
  {descripcion:'Anillos de resina'}, 
  {descripcion:'LipBalm Baby'}, 
  {descripcion:'Paleta Uh-Huh-Honey'},
  {descripcion:'Labiales KYLIE'}
] 
let lista= document.querySelector(".productos") 
let txtbusca= document.getElementById("buscador") 
 
txtbusca.onkeyup= function(){  
  lista.innerHTML='' 
  let texto= txtbusca.value.toLowerCase() 
   
  for(let historia of historias){ 
    let res= historia.descripcion.toLowerCase() 
    if(res.indexOf(texto)!==-1){ 
       lista.innerHTML+=` 
      <a href='labialesinfo1.html' class='items'>${historia.descripcion}</a> 
    ` 
       } 
  } 
  if(lista.innerHTML==""){ 
      lista.innerHTML=` 
      <a href='#' class='items'>No hay resultados</a> 
      ` 
    } 
} 
