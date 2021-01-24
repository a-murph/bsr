const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./graphql/schema');
const app = express();
const mongoose = require('mongoose');

// Set up mongoose connection
const mongo = 'mongodb://localhost:27017/bsr'
mongoose.connect(mongo, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
db.on('open', console.log.bind(console, 'MongoDB connection established'));
mongoose.set('debug', true);

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'ui/build')));

// Apollo GraphQL Middleware
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

// Endpoint for testing connection to the server
app.get('/api/test', (req, res) => {
  res.json(['item1', 'item2', 'item3']);
  console.log('Sent test items');
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname+'/ui/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);