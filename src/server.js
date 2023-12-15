const express = require('express'); //como se fosse uma importação
const mongoose = require('mongoose');
const cors = require('cors');

const app = express(); //pegou as funcionalidades do express e jogou dentro do app
const routes = require('./routes');

mongoose.connect('mongodb+srv://mathferreira726:Tii2023apiresT@uc9apirest.2k9ahpz.mongodb.net/uc9apirest?retryWrites=true&w=majority');

app.use(cors())
app.use(express.json());
app.use(routes);

 
app.listen(3333, () => {
    console.log(`Server is listening on Port 3333`);
}) //o listen abre uma porta http



 // GET, POST, PUT e DELETE
 
 // query params = acessa query params (para filtros) => parametros na URL
 // route params = req.params, são usados para (edição e delete)
 // req.body = acessar o corpo da requisição (para criação e edição)
 
 // app.put('/users', (req, res) => {
 //     return res.json({id: req.params.id});
 // }) //o primeiro parametro é a rota, entao colocamos barra dentro dos parenteses para pegar a rota raiz 