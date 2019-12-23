const AuthenticationController = require('./controllers/AuthenticationController')
const PostsController = require('./controllers/PostsController')
const AuthenticationConteollerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  app.post('/register',
    AuthenticationConteollerPolicy.register,
    AuthenticationController.register)

    app.post('/login',
    AuthenticationController.login)

    app.get('/posts',
      PostsController.index)
    app.post('/posts',
        PostsController.post)
}
