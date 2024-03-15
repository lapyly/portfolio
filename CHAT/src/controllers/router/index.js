//Importación de controladores:
const signUpController = require("../singup.controller")
const loginController = require("../auth.controller")
const chatController = require("../chat.controller")


//Definición del enrutador:
const router = app => {
    app.use('/signup', signUpController)
    app.use('/login', loginController);
    //app.use('/chat', chatController);
}

module.exports=router;