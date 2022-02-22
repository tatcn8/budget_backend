const mongoose = require('../db/connection')


const IncomeSchema = new mongoose.Schema({
    Income: String,
    Income_2: String,
    Side_Hustle: String,
    Side_Hustle_2: String
})

const Income = mongoose.model('Income', IncomeSchema)

module.exports = Income