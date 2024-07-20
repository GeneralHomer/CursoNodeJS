const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const basePath = path.join(__dirname,'template')

app.get('/',(req,res)=>{
    //req recebe dados
    //res envia dados
    res.sendFile( `${basePath}/index.html`)
})
app.listen(port,()=>{
    console.log(`app rodando na porta ${port}`)
})