const mongoose = require('mongoose')

const dbConnect = async ()=>{
    try {
        await mongoose.connect("mongodb+srv://solvit:test123@cluster0.dpvag.mongodb.net/countryDB?retryWrites=true&w=majority",{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConnect