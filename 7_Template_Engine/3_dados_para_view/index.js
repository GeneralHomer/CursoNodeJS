const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

// Configura o engine do handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    const user = {
        name: "Homero",
        surname: "Oliveira",
        idade:"30"
    };
    const frase = "Essa é a sua tela inicial"
    res.render('home', { user: user,frase });
});

app.listen(3000, () => {
    console.log('App funcionando!');
});
