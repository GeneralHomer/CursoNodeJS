const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const basePath = path.join(__dirname,'template')


app.get('/users/:id',(req,res)=>{
    //req recebe dados
    //res envia dados
    const id = req.params.id;
    //leitura da tabela users, resgatar um usuário do banco;

    res.sendFile( `${basePath}/users.html`)
   console.log(`Estamos buscando pelo Usuário: ${id}`)
})
app.get('/',(req,res)=>{
    //req recebe dados
    //res envia dados
    res.sendFile( `${basePath}/index.html`)
   
})
app.listen(port,()=>{
    console.log(`app rodando na porta ${port}`)
})