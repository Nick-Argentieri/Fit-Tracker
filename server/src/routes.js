const AuthenticationController = require('./controllers/AuthenticationController')

const AuthenticationConteollerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  app.post('/register',
    AuthenticationConteollerPolicy.register,
    AuthenticationController.register)

    app.post('/login',
    AuthenticationController.login)
}
