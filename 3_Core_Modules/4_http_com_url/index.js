const hhtp  = require('http');

const port = 3000;

const server = hhtp.createServer((req,res)=>{
 const urlInfo = require('url').parse(req.url,true);
const name = urlInfo.query.name;
res.statusCode = 200;
res.setHeader('COntenty-Type','text/html');

if(!name){
res.end(
    '<h1>Preencha o seu nome:</h1><form method="GET"><input type="text" name = "name" /><input type="submit" value="Enviar"/>'
)
}else{
    res.end(`<h1> Seja bem vindo ${name}!</h1>`)
}
})
server.listen(port,()=>{
    console.log(`Servidor usando a porta: ${port}`)
})