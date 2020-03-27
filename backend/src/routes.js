// ARQUIVO CRIADO PARA ARMAZENAR AS ROTAS DA APLIAÇÃO

const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');



const routes = express.Router();

/**
 * MÉTODOS HTTP
 * GET: BUSCAR UMA INFORMAÇÃO DO BACK-END
 * POST: CRIAR UMA INFORMAÇÃO NO BACK-END
 * PUT: ALTERAR UMA INFORMAÇÃO NO BACK-END
 * DELETE: DELETAR UMA INFORMAÇÃO NO BACK-END
 */

/**
 * TIPOS DE PARÂMETROS:
 * QUERY PARAMS: PARÂMETROS NOMEADOS ENVIADOS NA ROTA APÓS "?" (FILTRO,PAGINAÇÃO)
 * ROUTE PARAMS: PARÂMETROS UTILIZADOS PARA IDENTIFICAR RECURSOS
 * REQUEST BODY: CORPO DA REQUISIÇÃO, UTILIZADO PARA CRIAR OU ALTERAR RECURSOS
 */


routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);


routes.get('/profile', ProfileController.index);

routes.post('/session', SessionController.create);


routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

//DEIXANDO ROTAS DISPONÍVEIS PARA O INDEX ACESSAR
module.exports = routes;