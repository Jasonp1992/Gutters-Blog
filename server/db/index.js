const db = require("./database");
const BlogPost = require("./models/blogPost");
const User = require("./models/user");

User.hasMany(BlogPost);
BlogPost.belongsTo(User);

module.exports = {
  db,
  BlogPost,
  User,
};
