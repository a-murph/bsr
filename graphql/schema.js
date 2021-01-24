const gql = require('graphql-tag');
const BlogPostStore = require('../stores/blogPosts');

const typeDefs = gql`
  type Query {
    blogPosts: [BlogPost]!
  }

  type BlogPost {
    id: ID!
    postDate: String!
    postTitle: String!
    postContent: String!
  }
`;

const resolvers = {
  Query: {
    blogPosts: async (_, { }) => {
      const posts = await BlogPostStore.getPosts();
      return posts;
    }
  }
};

module.exports = {
  typeDefs, resolvers
};