//Importación de controladores:
const loginController = require("../login.controller")
const chatController = require("../chat.controller")


//Definición del enrutador:
const router = app => {
    app.use('/login', loginController);
    app.use('/chat', chatController);
}

module.exports=router;