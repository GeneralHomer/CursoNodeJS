const fs = require('fs');

fs.readFile('desafio.txt','utf-8',(erro,data)=>{
    if(erro){
        console.log(erro);
    }else{
        console.log("Conteúdo do arquivo: ",data)
    }
})