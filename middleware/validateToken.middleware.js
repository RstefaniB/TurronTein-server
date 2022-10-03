const { verifyJwt } = require('./../utils/jwt.utils');
const deleteBearer = require('./../utils/string.utils');

const validateToken = (req, res, next) => {

    // console.log(req.headers);
    // next()

    const { authorization } = req.headers;
    if (authorization) {
        const token = deleteBearer(authorization);
        const { sub, email } = verifyJwt(token);
        req.user = { _id: sub, email };
    } else {
        res.sendStatus(401);
        return;
    }

    next();
}

module.exports = validateToken;

