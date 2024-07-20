const express = require('express')
const app = express()
const port = 3000


app.get('/',(req,res)=>{
    //req recebe dados
    //res envia dados
    res.send('Olá mundo')
})
app.listen(port,()=>{
    console.log(`app rodando na porta ${port}`)
})