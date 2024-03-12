const express = require('express'); //como se fosse uma importação
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');

const app = express(); //pegou as funcionalidades do express e jogou dentro do app
const server = http. createServer(app);
const io = socketio(server, {
    cors: { origin: "*"}
});

const connectedUsers = {}

io.on('connection', socket => {
    console.log('Usuário conectado', socket.id);
    //enviar mensagem -> emit para enviar a mensagem
     // //ouvir a mensagem
     // ouvir on
    // socket.on('message', data =>{
    //   console.log(data);
   // socket.on('messagem', data =>{
        //console.log(data);
   // });
//    console.log(socket.handshake.query);

   const { user_id } = socket.handshake.query;
   connectedUsers[user_id] = socket.id
})

// deixar disponivel para toda aplicação
// use -> adicionar uma funcionalidade em todas as rotas
// executar isso anteas das rotas
// mindlleware
app.use((req, res, next) =>{
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
})

const routes = require('./routes');

mongoose.connect('mongodb+srv://mathferreira726:Tii2023apiresT@uc9apirest.2k9ahpz.mongodb.net/uc9apirest?retryWrites=true&w=majority');

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname,'..', 'uploads')));
app.use(routes);

 
server.listen(3333, () => {
    console.log(`Server is listening on Port 3333`);
}) //o listen abre uma porta http



 // GET, POST, PUT e DELETE
 
 // query params = acessa query params (para filtros) => parametros na URL
 // route params = req.params, são usados para (edição e delete)
 // req.body = acessar o corpo da requisição (para criação e edição)
 
 // app.put('/users', (req, res) => {
 //     return res.json({id: req.params.id});
 // }) //o primeiro parametro é a rota, entao colocamos barra dentro dos parenteses para pegar a rota raiz 
 // o cors é uma maneira segura de não deixar qualquer um usar aquela api