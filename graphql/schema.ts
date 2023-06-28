// export const typeDefs = `
//   type Link {
//     id: ID
//     title: String
//     description: String
//     url: String
//     category: String
//     imageUrl: String
//     users: [String]
//   }

//   type Query {
//     links: [Link]!
//   }

// `;

import "./types/Link";
import "./types/User";

import { builder } from "./builder";

export const schema = builder.toSchema({});
