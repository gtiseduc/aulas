
//importando as funcionalidades do express
const express = require('express');

//importando o cors para colocar o projeto em produção
//modulo de segurança determina quem vai poder acessar a aplicação
const cors = require('cors');

//importando as rotas do arquivo routes
const routes = require('./routes');

//criando uma variavel que vai armazenar minha aplicação
const app = express();

app.use(cors());

//converte o corpo da requisição que está em json para um objeto
app.use(express.json());
app.use(routes);

//criando uma rota para aplicação 



app.listen(3333);





