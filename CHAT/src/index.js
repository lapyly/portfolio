//Importación de módulos: 
//Se importa el módulo express es el framework web utilizado para construir la aplicación.
const express = require("express");
//Se importa la variable PORT desde el archivo de configuración app.config. Esta variable representa el puerto en el que el servidor escuchará las solicitudes entrantes.
const { PORT } = require("./configs/app.config");
//Se importa el enrutador (router) que contiene todas las rutas y controladores de la aplicación.
const router = require("./controllers/router");

//Creación de la aplicación Express
const app = express();

//Configuración de middleware
//Analiza el cuerpo de las solicitudes entrantes, lo que permite a la aplicación manejar datos en formato JSON y datos codificados en URL.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Este middleware se utiliza para servir archivos estáticos, como archivos CSS, imágenes o archivos JavaScript.
app.use(express.static(`${process.cwd()}/src/public`));

//Configuración de las rutas
router(app);

//Inicio del servidor
app.listen(PORT, () => {
  console.log(PORT);
});