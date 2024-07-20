const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

// Configura o engine do handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');


app.get('/dashboard',(req,res)=>{

    const itens = ['Filme 1','Filme 2','Filme 3']
    const tamanho  = itens.forEach(function(el,index){
        
    })
    res.render('dashboard',{itens,tamanho})
})
app.get('/blogpost',(req,res)=>{
    const post = {
        title:'Aprender Node.js',
        category:'JavaScript',
        body:'Este artigo vai te ajudar a aprender Node.js',
        comments:4
    }
    res.render('blogpost',{post})
})
app.get('/', (req, res) => {
    const user = {
        name: "Homero",
        surname: "Oliveira",
        idade:"30"
    };
    const auth = true;
    const approved = false;
    const frase = 'Você está na tela inicial'
    res.render('home', { user: user,frase,auth,approved });
});

app.listen(3000, () => {
    console.log('App funcionando!');
});
