const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

// Creates a relationship between User and Project model, with the User having a "has many" relationship with Project model.
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Creates a relationship between User and Project model, with a "belongs to" relationship of the Project to the User.
Post.belongsTo(User, {
  foreignKey: 'user_id'
});

// Creates a relationship between User and Comment model, with the User having a "has many" relationship with Comment model.
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
// Creates a relationship between User and Comment model, with a "belongs to" relationship of the Comment to the User.
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});
// Creates a relationship between Post and Comment model, with the Post having a "has many" relationship with Comment model.
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});
// Creates a relationship between Post and Comment model, with a "belongs to" relationship of the Comment to the Post.
Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});



module.exports = { User, Post, Comment };
