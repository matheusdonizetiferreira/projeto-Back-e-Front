const express = require('express');

const SessionController = require('./controllers/SessionController');
const DashboardController = require('./controllers/DashboardController');
const SpotController = require('./controllers/SpotController')

const routes = express.Router();

// routes.get('/users', (req, res) => {
//     return res.json(req.body);
// }) -> exemplo de rota

routes.post('/session', SessionController.store)
routes.get('/dashboard', SessionController.index);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots', SpotController.store);    


module.exports = routes;