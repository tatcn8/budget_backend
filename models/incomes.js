const mongoose = require('../db/connection')


const IncomeSchema = new mongoose.Schema({
    Month: Object,
    Income: Number,
    Income_2: Number,
    Side_Hustle: Number,
    Side_Hustle_2: Number
})

const Income = mongoose.model('Income', IncomeSchema)

module.exports = Income