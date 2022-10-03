const validateToken = require('../middleware/validateToken.middleware');

module.exports = (app) => {
    app.use('/api/survey', require('./survey.routes'));
    app.use('/api/auth', require('./auth.routes'));
    app.use('/api/user', validateToken, require('./user.routes')); //validateToken
}