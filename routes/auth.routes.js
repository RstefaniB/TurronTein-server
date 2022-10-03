const router = require('express').Router();
const { RegistroController, LoginController } = require('../controller/auth.controller')

router.post('/registro', RegistroController)
router.post('/login', LoginController)

module.exports = router;




// const router = require("express").Router()
// const bcrypt = require('bcryptjs')
// const User = require("../models/User.model")
// const saltRounds = 10

// // Signup
// router.get('/registro', (req, res, next) => res.json('auth/signup'))
// router.post('/registro', (req, res, next) => {

//   const { userPwd } = req.body

//   bcrypt
//     .genSalt(saltRounds)
//     .then(salt => {
//       if (!/\d/.test(userPwd)) {
//         throw ("password must contain at least one number");
//       }
//       return bcrypt.hash(userPwd, salt)
//     })
//     .then(hashedPassword => User.create({ ...req.body, password: hashedPassword }))
//     .then(createdUser => res.redirect('/'))
//     .catch(error => res.json('auth/signup', { errorMessage: error }))
// })



// // Login
// router.get('/iniciar-sesion', (req, res, next) => res.json('auth/login'))
// router.post('/iniciar-sesion', (req, res, next) => {

//   const { email, userPwd } = req.body
//   User
//     .findOne({ email })
//     .then(user => {
//       if (!user) {
//         res.json('auth/login', { errorMessage: 'Email no registrado en la Base de Datos' })
//         return
//       } else if (bcrypt.compareSync(userPwd, user.password) === false) {
//         res.json('auth/login', { errorMessage: 'La contraseña es incorrecta' })
//         return
//       } else {
//         req.session.currentUser = user
//         res.redirect('/')
//       }
//     })
//     .catch(error => next(error))
// })


// // Logout
// router.post('/cerrar-sesion', (req, res, next) => {
//   req.session.destroy(() => res.redirect('/iniciar-sesion'))
// })

// module.exports = router
