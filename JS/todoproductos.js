document.addEventListener('DOMContentLoaded', () => {
          // Variables
          const baseDeDatos = [
              {
                  id: 1,
                  nombre: 'Paleta GoingCoconuts',
                  precio: 1300,
                  imagen: 'fotos/paleta1.png'
              },
                            {
                  id: 2,
                  nombre: 'Set de pulseras para compartir',
                  precio: 450,
                  imagen: 'fotos/pulsera3.jpeg'
              },
              {
                  id: 3,
                  nombre: 'Aretes de mariposa',
                  precio: 450,
                  imagen: 'fotos/aros4.jpeg'
              },
              {
                  id: 4,
                  nombre: 'Vinchas de Spa',
                  precio: 600,
                  imagen: 'fotos/vinchas.jpg'
              },
              {
                  id: 5,
                  nombre: 'Cepillo limpiador facial',
                  precio: 650,
                  imagen: 'fotos/cepillofacial.jpg'
              },
              {
                  id: 6,
                  nombre: 'Paleta BabyGotPeach',
                  precio: 1200,
                  imagen: 'fotos/paleta2.jpg'
              },
              {
                  id: 7,
                  nombre: 'Cepillo facial "FOREO"',
                  precio: 2200,
                  imagen: 'fotos/foreo.jpg'
              },
              {
                  id: 8,
                  nombre: 'Paleta MainSqueeze',
                  precio: 1100,
                  imagen: 'fotos/paleta3.jpg'
              },
              {
                  id: 9,
                  nombre: 'Collar de osito',
                  precio: 450,
                  imagen: 'fotos/collar1.jpg'
              },
              {
                  id: 10,
                  nombre: 'Labiales KYLIE',
                  precio: 250,
                  imagen: 'fotos/labiales2.jpg'
              },
              {
                  id: 11,
                  nombre: 'Vaselina para labios',
                  precio: 350,
                  imagen: 'fotos/labiales5.jpeg'
              },
              {
                  id: 12,
                  nombre: 'Paleta Uh-Huh-Honey',
                  precio: 1200,
                  imagen: 'fotos/paleta5.png'
              },
              {
                  id: 13,
                  nombre: 'Labiales HudaBeauty',
                  precio: 400,
                  imagen: 'fotos/labiales3.jpg'
              },
              {
                  id: 14,
                  nombre: 'Brochas para mascarillas',
                  precio: 250,
                  imagen: 'fotos/brochas.jpg'
              },
              {
                  id: 15,
                  nombre: 'Paleta ColourPop',
                  precio: 1500,
                  imagen: 'fotos/paleta6.jpg'
              },
              {
                  id: 16,
                  nombre: 'Esponja limpiadora facial',
                  precio: 400,
                  imagen: 'fotos/esponjas.jpg'
              },
              {
                  id: 17,
                  nombre: 'Collar de mostacillas',
                  precio: 350,
                  imagen: 'fotos/collar2.jpeg'
              },
              {
                  id: 18,
                  nombre: 'Scrunchie blanca con estrellas',
                  precio: 250,
                  imagen: 'fotos/colita5.jpg'
              },
              {
                  id: 19,
                  nombre: 'Anillos de resina',
                  precio: 400,
                  imagen: 'fotos/anillos6.jpeg'
              },
              {
                  id: 20,
                  nombre: 'Paleta StrawberryShake',
                  precio: 1300,
                  imagen: 'fotos/paleta4.jpg'
              },
              {
                  id: 21,
                  nombre: 'Rodillo de Jade',
                  precio: 700,
                  imagen: 'fotos/rodillojade.jpg'
              }

          ];

          let carrito = [];
          const divisa = '$';
          const DOMitems = document.querySelector('#items');
          const DOMcarrito = document.querySelector('#carrito');
          const DOMtotal = document.querySelector('#total');
          const DOMbotonVaciar = document.querySelector('#boton-vaciar');
          const DOMbotoncompra = document.querySelector('#realizar');

          /*Funciones*/

          /* Acá manipulamos toda la estructura de los objetos */
          function renderizarProductos() {
              baseDeDatos.forEach((info) => {
                  /*Estructura*/
                  const miNodo = document.createElement('div');
                  miNodo.classList.add('card', 'col-sm-4');
                  /*Body*/
                  const miNodoCardBody = document.createElement('div');
                  miNodoCardBody.classList.add('card-body');
                  /*Titulo*/
                  const miNodoTitle = document.createElement('h5');
                  miNodoTitle.classList.add('card-title');
                  miNodoTitle.textContent = info.nombre;
                  /*Imagen*/
                  const miNodoImagen = document.createElement('img');
                  miNodoImagen.classList.add('img-fluid');
                  miNodoImagen.setAttribute('src', info.imagen);
                  /*Precio*/
                  const miNodoPrecio = document.createElement('p');
                  miNodoPrecio.classList.add('card-text');
                  miNodoPrecio.textContent = `${info.precio}${divisa}`;
                  /*Boton compra*/
                  /*Boton agregar*/
                  const miNodoBoton = document.createElement('button');
                  miNodoBoton.classList.add('btn', 'btn-primary');
                  miNodoBoton.textContent = '+';
                  miNodoBoton.setAttribute('marcador', info.id);
                  miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
                  /*Insertamos*/
                  miNodoCardBody.appendChild(miNodoImagen);
                  miNodoCardBody.appendChild(miNodoTitle);
                  miNodoCardBody.appendChild(miNodoPrecio);
                  miNodoCardBody.appendChild(miNodoBoton);
                  miNodo.appendChild(miNodoCardBody);
                  DOMitems.appendChild(miNodo);
              });
          }

          /* Evento para añadir un producto al carrito de la compra */
          function anyadirProductoAlCarrito(evento) {
              // Anyadimos el Nodo a nuestro carrito
              carrito.push(evento.target.getAttribute('marcador'))
              // Actualizamos el carrito 
              renderizarCarrito();

          }

          /*Productos guardados en el carrito*/
          function renderizarCarrito() {
              // Vaciamos todo el html
              DOMcarrito.textContent = '';
              // Quitamos los duplicados
              const carritoSinDuplicados = [...new Set(carrito)];
              // Generamos los Nodos a partir de carrito
              carritoSinDuplicados.forEach((item) => {
                  // Obtenemos el item que necesitamos de la variable base de datos
                  const miItem = baseDeDatos.filter((itemBaseDatos) => {
                      // ¿Coincide las id? Solo puede existir un caso
                      return itemBaseDatos.id === parseInt(item);
                  });
                  // Cuenta el número de veces que se repite el producto
                  const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                      // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
                      return itemId === item ? total += 1 : total;
                  }, 0);
                  // Creamos el nodo del item del carrito
                  const miNodo = document.createElement('li');
                  miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
                  miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
                  // Botón de borrar
                  const miBoton = document.createElement('button');
                  miBoton.classList.add('btn', 'btn-danger', 'mx-5');
                  miBoton.textContent = 'X';
                  miBoton.style.marginLeft = '1rem';
                  miBoton.dataset.item = item;
                  miBoton.addEventListener('click', borrarItemCarrito);
                  // Mezclamos nodos
                  miNodo.appendChild(miBoton);
                  DOMcarrito.appendChild(miNodo);
              });
             // Renderizamos el precio total en el HTML
             DOMtotal.textContent = calcularTotal();
          }

          /*Evento para borrar un elemento del carrito*/
          function borrarItemCarrito(evento) {
              // Obtenemos el producto ID que hay en el boton pulsado
              const id = evento.target.dataset.item;
              // Borramos todos los productos
              carrito = carrito.filter((carritoId) => {
                  return carritoId !== id;
              });
              // volvemos a renderizar
              renderizarCarrito();
          }

          /*Calcula el precio total teniendo en cuenta los productos repetidos*/
          function calcularTotal() {
              // Recorremos el array del carrito 
              return carrito.reduce((total, item) => {
                  // De cada elemento obtenemos su precio
                  const miItem = baseDeDatos.filter((itemBaseDatos) => {
                      return itemBaseDatos.id === parseInt(item);
                  });
                  // Los sumamos al total
                  return total + miItem[0].precio;
              }, 0).toFixed(2);
          }

          /*Varia el carrito y vuelve a dibujarlo*/
          function vaciarCarrito() {
              // Limpiamos los productos guardados
              carrito = [];
              // Renderizamos los cambios
              renderizarCarrito();
          }

          // Eventos
          DOMbotonVaciar.addEventListener('click', vaciarCarrito);

          // Inicio
          renderizarProductos();
          renderizarCarrito();
        });