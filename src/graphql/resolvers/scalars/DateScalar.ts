const { GraphQLScalarType, Kind } = require('graphql');

const dateScalar = new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value: Date) {
        return value.toISOString(); 
    },
    parseValue(value: number) {
        return new Date(value); 
    },
    parseLiteral(ast: any) {
        if (ast.kind === Kind.INT) {
            return new Date(parseInt(ast.value, 10)); 
        }
        return null; 
    },
});

export default dateScalar;