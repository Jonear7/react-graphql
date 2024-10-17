const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./resolvers');
const sequelize = require('./config/database');

const server = new ApolloServer({ typeDefs, resolvers });

sequelize.sync().then(() => {
  server.listen({ port: process.env.PORT || 4004 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}).catch(console.error);
