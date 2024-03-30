const express=require('express')

const router=express.Router()

router.get('/01',(req,res)=>{
    res.send("get 01")
})

router.get('/02',(req,res)=>{
    res.send("get 02")
})


module.exports = router