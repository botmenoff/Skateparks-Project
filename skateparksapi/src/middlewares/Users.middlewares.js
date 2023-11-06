const bcrypt = require('bcrypt');
const Joi = require('joi');

// VERIFY DATA OF USER
const verifyUserData = async (req, res, next) => {
  try {
    // Creamos el esquema
    const UserSchema = Joi.object({
      userName: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

      email: Joi.string()
        .email()
        .required(),

      password: Joi.string()
        .pattern(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
        .required(),
    });

    // Definimos el usuario que nos pasan de la ruta
    const user = req.body;
    // Definimos el error
    const { error } = UserSchema.validate(user);
    // Si los datos son correctos pasamos a la ruta
    if (error) {
      res.status(400).json({'Bad request': error.details});
    } else {
      next();
    }
  } catch (error) {
    res.status(500).json({'Unexpected Error:': error});
  }
}

// CHECK IF EMAIL IS VALID


// CHECK ADMIN


// Exportar los middlewares
module.exports = {
  verifyUserData,
};
