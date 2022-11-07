const {gql} = require("apollo-server-express")

const typeDefs = gql`

   type Population {
     id: ID
    Country: String!
    Year: String!
    Area: Int!
    TotalPopulation: Int!
   }

   #Queries 
   type Query {
        getAllPopulations: [Population]
        getOnePopulation(id: ID): Population
   }
   #Mutation
   type Mutation {
        createPopulation(Country: String!,Year: String!,Area: Int!,TotalPopulation: Int! ): Population!
        deleteOnePopulation(id: ID): String
        updatePopulation(id: ID,Country: String!,Year: String!,Area: Int!,TotalPopulation: Int!): Population
   }
`
module.exports = {typeDefs}