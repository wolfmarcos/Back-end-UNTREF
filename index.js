
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3005;
const path = require('path');

let objetoGuardado = []; // Array para almacenar los objetos recibidos


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/formulario')));

app.post('/formulario', (req, res) => {
  const { nombre, email } = req.body;

  // Generar un ID único para el objeto
  const id = Date.now().toString();

  const objeto = {
    nombre: nombre,
    email: email,
    id: id
  };

  // Guardar el objeto en el array
  objetoGuardado.push(objeto);

  res.send(objeto); // Devolver el objeto como respuesta
});

app.get('/objetos', (req, res) => {
  console.log(objetoGuardado);
  res.send(objetoGuardado); // Devolver el array de objetos como respuesta
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});













// const express = require('express');
// const app = express();

// // Ruta para recibir la solicitud POST
// app.post('/formulario', (req, res) => {
//   // Obtener los datos enviados desde el cliente
//   const nombre = req.body.nombre;
//   const email = req.body.email;

//   // Generar un ID o clave para el objeto
//   const id = generateID(); // Esta función debe generar un ID único

//   // Crear un objeto con el ID, nombre y email recibidos
//   const objeto = {
//     id: id,
//     nombre: nombre,
//     email: email
//   };

//   // Realizar cualquier otra manipulación o lógica necesaria aquí

//   // Enviar el objeto con el ID, nombre y email como respuesta
//   res.json(objeto);
// });

// // Iniciar el servidor
// app.listen(3000, () => {
//   console.log('Servidor iniciado en el puerto 3000');
// });