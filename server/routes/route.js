const express = require('express')
const router= express.Router()

router.get('/',(req,res ,next)=>{
    res.send('Backend home')
})


router.get('/chords',(req,res ,next)=>{
    res.send('Sending the file')
})

module.exports=router