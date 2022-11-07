const {Schema, default: mongoose} = require('mongoose')

const populationSchema = new Schema({
    Country:{
        type: String,
        required: [true,'please provide Country']
    },
    Year:{
        type: String,
        required: [true,'please provide Year']
    },
    Area:{
        type: Number,
        required: [true,'please provide Area (square kilometres)']
    },
    TotalPopulation:{
        type: Number,
        required: [true,'please provide Total Population']
    }
})

const population = mongoose.model('population',populationSchema)

module.exports = population