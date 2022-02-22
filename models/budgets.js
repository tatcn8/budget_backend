const mongoose = require('../db/connection')


const BudgetSchema = new mongoose.Schema({
    Month: Object,
    Housing: String,
    Groceries: String,
    Water: String,
    Trash: String,
    Natural_Gas: String,
    Electric: String,
    Sewer: String,
    Fuel: String,
    Entertainment: String,
    Allowance: String,
    Retirement: String,
    Savings: String
})

const Budget = mongoose.model('Budget', BudgetSchema)

module.exports = Budget