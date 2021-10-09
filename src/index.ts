import { ApolloServer } from 'apollo-server';
import typeDefs from './graphql/typedefs';
import { port } from './environment';
import resolvers from './graphql/resolvers/resolvers';

const server = new ApolloServer({typeDefs: typeDefs, resolvers: resolvers });

server.listen(port, ()=> {
    console.log(`app started at ${port}`);
})