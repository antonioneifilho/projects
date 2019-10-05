const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// Caminho
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:semanamaluca@cluster0-qvqky.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// Informar a rota que o 

// req.query = acessar query params (para filtros)
// req.params = acessar route params (para edição e delete)
// req.body = acessar corpo da requisição (para criação, edição) 

app.use(cors());
app.use(express.json());
// Retornar as imagens salvas no banco de dados
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);