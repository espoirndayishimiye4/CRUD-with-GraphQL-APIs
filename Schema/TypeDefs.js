const {gql} = require("apollo-server-express")

const typeDefs = gql`

   type Population {
    Country: String!
    Year: String!
    Area: Int!
    TotalPopulation: Int!
   }

   #Queries 
   type Query {
        getAllPopulations: [Population!]!
   }
   
   #Mutation
   type Mutation {
        createPopulation(Country: String!,Year: String!,Area: Int!,TotalPopulation: Int! ): Population!
   }
`
module.exports = {typeDefs}