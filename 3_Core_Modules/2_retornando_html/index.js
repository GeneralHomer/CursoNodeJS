const hhtp  = require('http');
const port = 3000;

const server = hhtp.createServer((req,res)=>{
res.statusCode = 200;
res.setHeader('COntenty-Type','text/html');
res.end('<h1>Olá, este é meu primeiro server com HTML</h1><p>Testando atualização</p>')
})

server.listen(port,()=>{
    console.log(`Servidor usando a porta: ${port}`)
})