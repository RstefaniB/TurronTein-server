const jwt = require('jsonwebtoken')


//creamos una funcion que se encarge de generar el token
//ojo fijaos que no se ha pasado el idUser como parametro de la funcion ya que se pasa mas adelante. para tneder un identificaxddor que identifique el user. Asi hacemos que le toquen sea menos PESADO. MENOS TIMEPO EN GENERARSE, LEERSE Y PASARSE.
const signJwt = (idUser, email) => {
    return jwt.sign({ email }, 'SECRET', { expiresIn: '7d', subject: idUser }) //Payload o information que tenga el token, necesitamos aqui el Id del user, {tiempo de vida del token} {subject es un identificdor que lleva el token}
}

const verifyJwt = (token) => {
    console.log(token)
    return jwt.verify(token, 'SECRET');
}

module.exports = {
    signJwt,
    verifyJwt
}