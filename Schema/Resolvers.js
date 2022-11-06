const {Population} = require("../Data")

const resolvers = {
    Query:{
        getAllPopulations(){
            return Population;
        }
    },

    Mutation:{
        createPopulation(parent, args){
            const newp = args;
            Population.push(newp)
            return newp
        }
    }
}

module.exports = {resolvers}