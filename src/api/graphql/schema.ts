export const typeDefs = `
    type User {
        
        username: String
        email: String
        password: String
    }
    type Query {
        users: [User]
    }
    type Mutation {
        createUser(username: String!, email: String!, password: String!): User
    }
 `;
