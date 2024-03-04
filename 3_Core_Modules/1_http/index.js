const hhtp  = require('http');
const port = 3000;

const server = hhtp.createServer((req,res)=>{
 res.write('Oi HTTP');
 res.end();
})

server.listen(port,()=>{
    console.log(`Servidor usando a porta: ${port}`)
})