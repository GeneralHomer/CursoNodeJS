const fs = require("fs")

if(!fs.existsSync('./minhapasta')){
    console.log("não existe")


}else if(fs.existsSync('./minhapasta')){
    console.log("Existe")
}