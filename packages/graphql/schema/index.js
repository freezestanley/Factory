const { buildSchema, graphql } = require('graphql')

// const schema = buildSchema(`
//   type Query {
//     hello: String
//     name: String
//   }
// `);

// query getUser($id: Int!){
//   user(id: $id){
//     age
//     email
//     hobbies
//     id
//     name
//   }
// }
// const schema = buildSchema(`
//   type Query {
//     user(id:Int!, name:String!):User
//     allUsers(id:Int!): [User]
//   }
//   type User {
//     age: Int!
//     email: String!
//     hobbies: [String!]
//     id: Int
//     name: String!
//   }
// `);

const schema = buildSchema(`
  type Query{
    some(name: Int!, time: Int!): Test
  }
  type Test{
    a: String!
    b: String!
    c: String!
  }
`)

// graphql({
//   schema,
//   source: query,
//   rootValue: root
// }).then((result) => {
//   console.log('=================')
//   console.log(result)
//   console.log('=================')
// })

module.exports = schema
