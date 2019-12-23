module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
      user: DataTypes.STRING,
      exercise: DataTypes.STRING,
      timereps: DataTypes.STRING
    })
  return Post
}