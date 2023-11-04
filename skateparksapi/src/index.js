const express = require('express');
require('dotenv').config(); // Cargar las variables de entorno
const app = express();
const port = process.env.PORT || 4000;

// Añadir middleware para que Express pueda procesar JSON
app.use(express.json());

// Importar las rutas de los difirentes modelos
const usersRouter = require('./routes/User.routes');
const skateparksRouter = require('./routes/Skate.routes');

// Usar las rutas con sus prefijos
app.use('/users', usersRouter);
app.use('/skateparks', skateparksRouter);

// Empezar el servidor
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});