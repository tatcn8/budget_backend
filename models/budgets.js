const mongoose = require('../db/connection')


const BudgetSchema = new mongoose.Schema({
    Month: Object,
    Housing: Number,
    Groceries: Number,
    Water: Number,
    Trash: Number,
    Natural_Gas: Number,
    Electric: Number,
    Sewer: Number,
    Fuel: Number,
    Entertainment: Number,
    Allowance: Number,
    Retirement: Number,
    Savings: Number,
    Phone: Number,
    Internet: Number,
    Charitable_Giving: Number
})

const Budget = mongoose.model('Budget', BudgetSchema)

module.exports = Budget