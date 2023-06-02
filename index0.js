// const express=require("express")
// const app = express()
// app.get('/', (req, res) => { res.send("hola"); })
// app.listen(3001,() => {console.log("port3001");})


const express = require('express');
const app = express();
 const bodyParser = require('body-parser');

// // Middleware para analizar los datos codificados en URL
app.use(bodyParser.urlencoded({ extended: true }));

// // Ruta para la solicitud POST
app.post('/formulario', (req, res) => {
    const dato = req.body.dato;
    console.log(dato);
    // Resto de la lógica para procesar el dato
  
    const datoProcesado = dato + " ya procesado";
    
    const datoJson = JSON.stringify({ dato: datoProcesado });// Imprime "Hola mundo" en la consola
  // Resto de la lógica para manejar el dato recibido


  res.json({ dato: datoProcesado })
// res.redirect(`/?DatoJson=${encodeURIComponent(datoJson)}`);
// res.redirect("/",{ dato: dato });


// res.sendFile(__dirname + '/frontend/respuesta.html', {
//     headers: {
//       'Content-Type': 'text/html',
//       'X-SSI': 'enabled'
//     },
//     variables: {
//       dato: datoProcesado
//     }
//   });



});

// // Ruta para otro renderizado aparte del formulario
app.get('/', (req, res) => {
//   // Resto de la lógica para manejar esta ruta
//   // Renderizar el otro archivo HTML o plantilla aquí
  res.sendFile(__dirname + '/formulario/index3.html');

  

});

app.listen(3004, () => {
  console.log('Servidor en ejecución en el puerto 3001');
});