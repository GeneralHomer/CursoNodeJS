const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const basePath = path.join(__dirname,'template')

// ler o body
app.use(
    express.urlencoded({
        extended:true,
    })
)
app.use(express.json())

app.get('/users/add',(req,res)=>{
    res.sendFile(`${basePath}/userForm.html`)    

})


app.post('/users/save',(req,res)=>{
console.log(req.body)
res.sendFile(`${basePath}/userForm.html`)
const name = req.body.name
const age = req.body.age

console.log(`O nome do Usuário é ${name} e ele tem ${age} anos`)
})

app.get('/',(req,res)=>{
    //req recebe dados
    //res envia dados
    res.sendFile( `${basePath}/index.html`)
   
})

app.listen(port,()=>{
    console.log(`app rodando na porta ${port}`)
})