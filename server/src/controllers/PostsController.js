const {Post} = require('../models')

module.exports = {
    async index (req, res) {
        try {
          const post = await Post.findAll({
              limit: 10
          })
          res.send(post)
        } catch (err) {
          console.log(err)
          res.status(500).send({
            error: 'An error has occured trying to fetch posts'
          })
        }
    },
  async post (req, res) {
    try {
      const post = await Post.create(req.body)
      res.send(post)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error has occured trying to create post'
      })
    }
  }
}