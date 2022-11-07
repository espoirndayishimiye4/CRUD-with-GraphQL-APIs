
const Population = require('./models/population')

const resolvers = {
    Query:{
        getAllPopulations: async ()=>{
            return await Population.find()
        },
        getOnePopulation: async (parent, args)=>{
            const {id} = args
            return await Population.findById(id)
        } 
    },

    Mutation:{
        createPopulation: async (parent, args) =>{
            const newpopulation = args;
            const population = new Population(newpopulation)
            await population.save()
            return population;
        },
        deleteOnePopulation: async (parent, args)=>{
            const {id} = args
            await Population.findByIdAndDelete(id)
            return "Record deleted"
        },
        updatePopulation: async (parent, args)=>{
            const {id} = args
            const { Country, Year, Area, TotalPopulation} = args
            const updatedPopulation = await Population.findByIdAndUpdate(id, {Country, Year, Area, TotalPopulation}, {new: true})
            return updatedPopulation;
        }

    }
}

module.exports = {resolvers}