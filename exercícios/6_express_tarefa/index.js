const express = require('express')
const app = express()
const port = 5000;
const path = require('path')
const basePath = path.join(__dirname,'public')



    

app.use(express.static('public'))
app.use(
    express.urlencoded({
        extended:true
    })
)
app.use(express.json())


app.get('/',(req,res)=>{
    res.sendFile(`${basePath}/html/home.html`)
})
app.get('/catalogo',(req,res)=>{
    res.sendFile(`${basePath}/html/catalogo.html`)
})
app.get('/home',(req,res)=>{
    res.sendFile(`${basePath}/html/home.html`)
})
app.get('/about',(req,res)=>{
    res.sendFile(`${basePath}/html/about.html`)
})
app.use((req,res,next)=>{
    res.status(404).sendFile(`${basePath}/html/404.html`)
})

app.listen(port,()=>{
    console.log(`app inciado com sucesso na porta: ${port}`)
})