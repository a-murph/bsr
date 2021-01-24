const BlogPost = require('../models/blogPosts');

class BlogPostStore {
  // Get list of blog posts
  static async getPosts() {
    
    return await BlogPost.find();
  }
}

module.exports = BlogPostStore;