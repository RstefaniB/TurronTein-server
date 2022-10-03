
// const { RegistroController } = require('../controller/auth.controller')


// router.post('/registro', RegistroController)

// // router.get('/me', GetUser)

// module.exports = router;

// const { GetUser } = require('../controller/user.controller');
// const router = require('express').Router();
// const {GetUSer, GetUsers } = require('

// router.get('/




const router = require('express').Router();
const { GetUser } = require('../controller/user.controller');

router.get('/me', GetUser)

module.exports = router;


