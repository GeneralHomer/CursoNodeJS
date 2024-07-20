const fs = require('fs')


fs.stat("pasta",(err,stats)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("É um arquivo? "+stats.isFile())
    console.log("É um diretório? "+stats.isDirectory())
    console.log("É um link simbólico? "+stats.isSymbolicLink())
    console.log("Data de criação: "+stats.ctime)
    console.log("Tamanho do arquivo: "+stats.size)
})