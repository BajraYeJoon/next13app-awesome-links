import { createYoga } from "graphql-yoga";
import { schema } from "@/graphql/schema";
import createContext from "@/graphql/context";

const { handleRequest } = createYoga({
  schema,
  context: createContext,
  graphqlEndpoint: "/api/gql",

  fetchAPI: { Response },
});

export { handleRequest as GET, handleRequest as POST };
