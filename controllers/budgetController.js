const express = require('express')

const router = express.Router()

const Budget = require('../models/budgets')  

router.get('/', async (req, res, next) => {
    try {
        const budgets = await Budget.find({})
        res.json(budgets)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next)=>{
    try{
        const budget = await Budget.findById(req.params.id)
        if(playlist){
            res.json(budget)
        }else {
            res.sendStatus(404)
        }
    }catch(err){
        next(err)
    }
})

router.post('/', async (req, res, next)=>{
    try{
        const newBudget = await Budget.create(req.body)
        res.status(201).json(newBudget)
    } catch(err){
        next(err)
    }
 
})

router.put('/:id', async (req, res, next)=>{
    try{
        const budgetToUpdate = await Budget.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true
            }
        )
        if (budgetToUpdate) {
            res.json(budgetToUpdate)
        } else{
            res.sendStatus(404)
        }
    }catch(err){
        next(err)
    }
})

router.delete('/:id', async (req, res, next)=>{
    try{
        const budgetToDelete = await Budget.findByIdAndDelete(
            req.params.id)
            if (budgetToDelete){
                res.sendStatus(204)
            }else{
                res.sendStatus(404)
            }
    }catch(err){
        next(err)
    }
})


module.exports = router