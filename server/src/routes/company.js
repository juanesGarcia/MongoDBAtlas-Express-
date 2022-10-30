const express=require('express');
const companySchema = require('../models/companymodel')
const router= express.Router();

//creando rutas req obj peticion res objeto respuesta

//metodo post
router.post('/company',(req,res)=>{
    const company=companySchema(req.body);
    company.save().then((data)=>res.json(data)).catch((err)=>res.json({message: err}));
})

//metodo get
router.get('/company',(req,res)=>{
    companySchema.find().then((data)=>res.json(data)).catch((err)=>res.json({message: err}));
})

//get user 
router.get('/company/:id',(req,res)=>{
    const {id}= req.params;
    companySchema.findById(id).then((data)=>res.json(data)).catch((err)=>res.json({message: err}));
})

//update user 
router.put('/company/:id',(req,res)=>{
    const {id}= req.params;
    const{name,foundation}=req.body;
    companySchema.updateOne({_id:id},{$set: {name,foundation}}).then((data)=>res.json(data)).catch((err)=>res.json({message: err}));
})

//delete user 
router.delete('/company/:id',(req,res)=>{
    const {id}= req.params;
    companySchema.remove({_id:id}).then((data)=>res.json(data)).catch((err)=>res.json({message: err}));
})

module.exports = router;