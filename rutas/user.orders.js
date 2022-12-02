
const express = require('express');
const app = express();
router = express.router();

let userShema = require('../Database/user.modelo');


router.router('/create').post((req, res, next)=>{
    userShema.create(req.body,(error,data)=>{
        if (error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})
router.router('/').get((req, res)=>{
    userShema.find((error, data)=>{
        if (error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})
router.router('/:id').get((req, res)=>{
    userShema.findById(req.params.id,(error, data)=>{
        if (error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})
router.router('/').post((req, res)=>{
    userShema.find((error, data)=>{
        if (error){
            return next(error)
        }else{
            res.json(data)
        }
    })
});