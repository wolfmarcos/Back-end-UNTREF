
const formulario = document.getElementById('miFormulario');
const listaObjetos = document.getElementById('listaObjetos');

const btnMostrarObjetos = document.getElementById('btnMostrarObjetos');
const listaObjetos2 = document.getElementById('listaObjetos2');

formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  const nombre = formulario.elements.nombre.value;
  const email = formulario.elements.email.value;

  // Crea un objeto con los datos a enviar
  const datos = {
    nombre: nombre,
    email: email
  };

  // Realiza la solicitud POST al servidor
  fetch('/formulario', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos) // Convierte el objeto a JSON
  })
    .then(response => response.json())
    .then(data => {
      // Actualiza el contenido del elemento resultado con los datos recibidos
      const objetoHTML = `<li>Nombre: ${data.nombre}, Email: ${data.email}, ID: ${data.id}</li>`;
      listaObjetos.insertAdjacentHTML('beforeend', objetoHTML);
    })
    .catch(error => {
      console.error(error);
    });
});






btnMostrarObjetos.addEventListener('click', () => {
  fetch('/objetos')
    .then(response => response.json())
    .then(data => {
      const fragmento = document.createDocumentFragment(); // Crea un fragmento

      // Genera una cadena de HTML que contiene todos los elementos li
      const html = data.map(objeto => `<li>Nombre: ${objeto.nombre}, Email: ${objeto.email}, ID: ${objeto.id}</li>`).join('');

      // Crea un elemento contenedor (div) para el contenido HTML
      const contenedor = document.createElement('div');
      contenedor.innerHTML = html;

      // Agrega los elementos del contenedor al fragmento
      while (contenedor.firstChild) {
        fragmento.appendChild(contenedor.firstChild);
      }

      // Vacía el contenido actual de listaObjetos2
      listaObjetos2.innerHTML = '';

      // Agrega el fragmento al elemento listaObjetos2
      listaObjetos2.appendChild(fragmento);
    })
    .catch(error => {
      console.error(error);
    });
});



// Realiza la solicitud GET al servidor para obtener los objetos guardados
// fetch('/objetos')
//   .then(response => response.json())
//   .then(data => {
//     const fragmento = document.createDocumentFragment(); // Crea un fragmento

//     // Genera una cadena de HTML que contiene todos los elementos li
//     const html = data.map(objeto => `<li>Nombre: ${objeto.nombre}, Email: ${objeto.email}, ID: ${objeto.id}</li>`).join('');

//     // Asigna la cadena de HTML al contenido del fragmento
//     fragmento.innerHTML = html;

//     // Agrega el fragmento al elemento listaObjetos
//     listaObjetos2.appendChild(fragmento);
//   })
//   .catch(error => {
//     console.error(error);
//   });


// btnMostrarObjetos.addEventListener('click', () => {
//   fetch('/objetos')
//     .then(response => response.json())
//     .then(data => {
//       const fragmento = document.createDocumentFragment(); // Crea un fragmento

//       // Genera una cadena de HTML que contiene todos los elementos li
//       const html = data.map(objeto => `<li>Nombre: ${objeto.nombre}, Email: ${objeto.email}, ID: ${objeto.id}</li>`).join('');

//       // Asigna la cadena de HTML al contenido del fragmento
//       fragmento.innerHTML = html;
// console.log(html);
//       // Agrega el fragmento al elemento listaObjetos
//       // listaObjetos2.appendChild(fragmento);
//       listaObjetos2.innerHTML = fragmento
//     })
//     .catch(error => {
//       console.error(error);
//     });
// });







//   btnMostrarObjetos.addEventListener('click', () => {
//     fetch('/objetos')
//       .then(response => response.json())
//       .then(data => {
//         const fragmento = document.createDocumentFragment(); // Crea un fragmento

//         // Genera una cadena de HTML que contiene todos los elementos li
//         const html = data.map(objeto => `<li>Nombre: ${objeto.nombre}, Email: ${objeto.email}, ID: ${objeto.id}</li>`);
// console.log(html);
//         // Asigna la cadena de HTML al contenido del fragmento
//         fragmento.innerHTML = html;

//         // Agrega el fragmento al elemento listaObjetos
//         listaObjetos2.appendChild(fragmento);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   });





























// 2
// const formulario = document.getElementById('miFormulario');
// const listaObjetos = document.getElementById('listaObjetos');

// formulario.addEventListener('submit', function(event) {
//   event.preventDefault(); // Evita que el formulario se envíe automáticamente

//   const nombre = formulario.elements.nombre.value;
//   const email = formulario.elements.email.value;

//   // Crea un objeto con los datos a enviar
//   const datos = {
//     nombre: nombre,
//     email: email
//   };

//   // Realiza la solicitud POST al servidor
//   fetch('/formulario', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(datos) // Convierte el objeto a JSON
//   })
//     .then(response => response.json())
//     .then(data => {
//       // Actualiza el contenido del elemento resultado con los datos recibidos
//       const objetoHTML = `<li>Nombre: ${data.nombre}, Email: ${data.email}, ID: ${data.id}</li>`;
//       listaObjetos.insertAdjacentHTML('beforeend', objetoHTML);
//     })
//     .catch(error => {
//       console.error(error);
//     });
// });

// // Realiza la solicitud GET al servidor para obtener los objetos guardados
// fetch('/objetos')
//   .then(response => response.json())
//   .then(data => {
//     const fragmento = document.createDocumentFragment(); // Crea un fragmento

//     // Itera sobre el array de objetos y agrega los elementos al fragmento
//     data.forEach(objeto => {
//       const objetoHTML = `<li>Nombre: ${objeto.nombre}, Email: ${objeto.email}, ID: ${objeto.id}</li>`;
//       const elemento = document.createElement('li');
//       elemento.innerHTML = objetoHTML;
//       fragmento.appendChild(elemento);
//     });

//     // Agrega el fragmento al elemento listaObjetos
//     listaObjetos.appendChild(fragmento);
//   })
//   .catch(error => {
//     console.error(error);
//   });










// !3





// const formulario = document.getElementById('miFormulario');
// const listaObjetos = document.getElementById('listaObjetos');

// formulario.addEventListener('submit', function(event) {
//   event.preventDefault(); // Evita que el formulario se envíe automáticamente

//   const nombre = formulario.elements.nombre.value;
//   const email = formulario.elements.email.value;

//   // Crea un objeto con los datos a enviar
//   const datos = {
//     nombre: nombre,
//     email: email
//   };

//   // Realiza la solicitud POST al servidor
//   fetch('/formulario', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(datos) // Convierte el objeto a JSON
//   })
//     .then(response => response.json())
//     .then(data => {
//       // Actualiza el contenido del elemento resultado con los datos recibidos
//       const objetoHTML = `<li>Nombre: ${data.nombre}, Email: ${data.email}, ID: ${data.id}</li>`;
//       listaObjetos.insertAdjacentHTML('beforeend', objetoHTML);
//     })
//     .catch(error => {
//       console.error(error);
//     });
// });

// // Realiza la solicitud GET al servidor para obtener los objetos guardados
// fetch('/objetos')
//   .then(response => response.json())
//   .then(data => {
//     // Itera sobre el array de objetos y los agrega al HTML
//     data.forEach(objeto => {
//       const objetoHTML = `<li>Nombre: ${objeto.nombre}, Email: ${objeto.email}, ID: ${objeto.id}</li>`;
//       listaObjetos.insertAdjacentHTML('beforeend', objetoHTML);
//     });
//   })
//   .catch(error => {
//     console.error(error);
//   });