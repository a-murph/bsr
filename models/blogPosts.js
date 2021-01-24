const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.set('debug', true);

const blogPostSchema = new Schema({
  postDate: Date,
  postTitle: String,
  postContent: String,
}, {
  collation: { locale: 'en_US', strength: 1 }
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);
module.exports = BlogPost;