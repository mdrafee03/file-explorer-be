import fileQueries from "./files/queries";
import dateScalar from "./scalars/DateScalar";

const resolvers = {
  Date: dateScalar,
  Query: {
    ...fileQueries,
  },
};

export default resolvers;
