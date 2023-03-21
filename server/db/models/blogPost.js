const Sequelize = require('sequelize')
const db = require('../database')

const BlogPost = db.define('blogPost', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imgRef: {
    type: Sequelize.STRING,
    defaultValue:
      'https://static.vecteezy.com/system/resources/thumbnails/009/273/280/small/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-free-photo.jpg',
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
})

BlogPost.addHook('beforeCreate', (post) => {
  if (post.dataValues.imgRef === '') {
    post.dataValues.imgRef = undefined
  }
})

module.exports = BlogPost
