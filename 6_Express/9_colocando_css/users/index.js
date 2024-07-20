const express = require('express');
const router = express.Router();

const path = require('path');
const basePath = path.join(__dirname,'../template')

router.use(
    express.urlencoded({
        extended:true,
    })
)
router.use(express.json())

router.get('/add',(req,res)=>{
    res.sendFile(`${basePath}/userForm.html`)    

})


router.post('/save',(req,res)=>{
console.log(req.body)
res.sendFile(`${basePath}../userForm.html`)
const name = req.body.name
const age = req.body.age

console.log(`O nome do Usuário é ${name} e ele tem ${age} anos`)
})

router.get('/',(req,res)=>{
    //req recebe dados
    //res envia dados
    res.sendFile( `${basePath}/index.html`)
   
})
module.exports = router;