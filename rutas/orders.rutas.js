const express = require('express');
const app = express();
router = express.router();

let ordersShema = require('../Database/order.modelo');


router.router('/create').post((req, res, next)=>{
    ordersShema.create(req.body,(error,data)=>{
        if (error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})
router.router('/').get((req, res)=>{
    ordersShema.find((error, data)=>{
        if (error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})
router.router('/:id').get((req, res)=>{
    ordersShema.findById(req.params.id,(error, data)=>{
        if (error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})
router.router('/:id').get((req, res)=>{
    ordersShema.findById(req.params.id,(
        $set:req.body,
    )=>{
        if (error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})