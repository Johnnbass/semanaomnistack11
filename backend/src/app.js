const express = require("express");
const cors = require("cors");
const { errors } = require("celebrate");
const routes = require("./routes");

const app = express();

// em caso de publicação em produção
// app.use(cors({
//   origin: 'http://meuapp.com'
// }));

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

/**
 * Rotas / Recursos
 */

/**
 * Métodos HTTP:
 *
 * GET : Buscar/listar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no bakcend
 * DELETE: Deletar uma informação no backend
 */

/**
 * Tipos de parâmetros:
 *
 * Query Params: parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: parâmetros utilizados para identificar recursos
 * Request Body: o corpo da requisição utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */
