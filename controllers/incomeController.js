const express = require('express')

const router = express.Router()

const Income = require('../models/incomes')  

router.get('/', async (req, res, next) => {
    try {
        const incomes = await Income.find({})
        res.json(incomes)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next)=>{
    try{
        const income = await Income.findById(req.params.id)
        if(playlist){
            res.json(income)
        }else {
            res.sendStatus(404)
        }
    }catch(err){
        next(err)
    }
})

router.post('/', async (req, res, next)=>{
    try{
        const newIncome = await Income.create(req.body)
        res.status(201).json(newIncome)
    } catch(err){
        next(err)
    }
 
})

router.put('/:id', async (req, res, next)=>{
    try{
        const incomeToUpdate = await Income.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true
            }
        )
        if (incomeToUpdate) {
            res.json(incomeToUpdate)
        } else{
            res.sendStatus(404)
        }
    }catch(err){
        next(err)
    }
})

router.delete('/:id', async (req, res, next)=>{
    try{
        const incomeToDelete = await Income.findByIdAndDelete(
            req.params.id)
            if (incomeToDelete){
                res.sendStatus(204)
            }else{
                res.sendStatus(404)
            }
    }catch(err){
        next(err)
    }
})


module.exports = router