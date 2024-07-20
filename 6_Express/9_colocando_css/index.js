const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const basePath = path.join(__dirname,'template')
const users  = require('./users')


//arquivos estáticos
app.use(express.static('public'))
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
app.get('/users/:id',(req,res)=>{
    //req recebe dados
    //res envia dados
    const id = req.params.id;
    //leitura da tabela users, resgatar um usuário do banco;

    res.sendFile( `${basePath}/users.html`)
   console.log(`Estamos buscando pelo Usuário: ${id}`)
})
app.use('/users',users)

app.get('/',(req,res)=>{
    //req recebe dados
    //res envia dados
    res.sendFile( `${basePath}/index.html`)
   
})

app.listen(port,()=>{
    console.log(`app rodando na porta ${port}`)
})