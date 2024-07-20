const bodyParser = require("body-parser");
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path")
const port  = 3000;
const app = express();

const hbs = exphbs.create({
    partialsDir:["views/partials"]
})
app.use(express.static(path.join(__dirname, 'public')))
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
const produtos = [
    {
        Marca:'Golden',
        description:'Ração Golden Special para Cães Adultos Sabor Frango e Carne',
        price:149.99,
        estoque: 100,
        imagem:'img/GoldenSpecial.png'
    },
    {
        Marca:'Premier Raças Especiais',
        description:'Ração Premier Raças Específicas Golden Retrivier',
        price:249.99,
        estoque: 100,
        imagem:'img/PremierGold.png'
    },
    {
        Marca:'Royal Canin',
        description:'Ração Seca Royal Canin Veterinary Diet Hypoallergenic Moderate Calorie para Cães Adultos com Sensibilidades Alimentares',
        price:160.00,
        estoque: 100,
        imagem:'img/Royal Canine.png'
    },
    {
        Marca:'Viva Verde',
        description:'Areia Higiênica Viva Verde Grãos Finos para Gatos - 4kg',
        price:60.00,
        estoque: 100,
        imagem:'img/Viva Verde.png'
    },
    {
        Marca:'GoldenCats',
        description:'Ração Golden para Gatos Adultos Castrados Sabor Frango',
        price:29.00,
        estoque: 100,
        imagem:'img/GoldenCats.png'
    },
    {
        Marca:'Pipicat',
        description:'Ração Golden para Gatos Adultos Castrados Sabor Frango',
        price:29.00,
        estoque: 100,
        imagem:'img/GoldenCats.png'
    }
  
]
app.get('/home',(req,res)=>{


    res.render('home',{produtos:produtos })
})
app.get('/',(req,res)=>{
    const mensagem ={
        boasVindas:'Bem vindo'
    }
    res.render('home',{mensagem:mensagem})
})


app.listen(port,()=>{
    console.log('App iniciado')
})