//Middleware que genera mayor información sobre passport.
const passport = require("passport");

const passportCall = (strategy) => {
  //Recibe el nombre de la estrategia y retorna el middleware.
  return (req, res, next) => {
    passport.authenticate(strategy, function (error, user, info) {
      if (error) return next(error);

      if (!user)
        return res.status(401).json({
          status: "error",
          error: info.messages ? info.messages : info.toString(),
        });
      req.user = user;
      next();
    })(req, res, next);
  };
};
module.exports = passportCall;