const userModel = require('../models/user.model')
const bcrypt = require('bcrypt');
const { signJwt } = require('../utils/jwt.utils');
const SALT = 10

const RegistroController = (req, res, next) => {
  const { firstName,
    lastName,
    email,
    gender,
    age,
    sport,
    city,
    password,

  } = req.body;
  userModel.findOne({ email })
    .then((user) => {
      if (user) {
        throw new Error('Email Address in used already')
        // res.status(400).json({ errorMessage: 'Email ya en uso' });//error mas comun 400 "Bad Request'" (email wrong)
      }
      const saltBcrypt = bcrypt.genSaltSync(SALT)
      const hashBcrypt = bcrypt.hashSync(password, saltBcrypt);

      return userModel.create({ firstName, lastName, email, gender, age, sport, city, password: hashBcrypt, })
    })
    .then(() => {

      res.sendStatus(201); // Sends a message with created content. I have created a user . All gucci!
    })
    // codigo de bloque para que no pete la aplicacion cuando ya exista el usuario con ese email
    .catch((err) => {
      // console.log(err)
      if (err.message === 'Email Address in used already') {
        res.status(400).json({ errorMessage: err.message });
        return;
      }
      next(err);
    });

}

const LoginController = (req, res, next) => {
  const { email, password } = req.body;
  userModel.findOne({ email })
    .then((user) => {
      // if (user) {
      //   if (bcrypt.compareSync(password, user.password)) {
      //     res.status(200).json({ token: signJwt(user._id, user.email) });
      //   }
      // }
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({ token: signJwt(user._id.toString(), user.email) });
      } else {
        res.status(400).json({ errorMessage: 'Email Address or password not valid' })

      }

    })
    .catch(next)
};

module.exports = {
  RegistroController,
  LoginController
};

