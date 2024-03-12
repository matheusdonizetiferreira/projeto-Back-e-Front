const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const DashboardController = require('./controllers/DashboardController');
const SpotController = require('./controllers/SpotController');
const BookingController = require('./controllers/BookingController');
const ApprovalController = require('./controllers/ApprovalController');
const RejectionController = require('./controllers/RejectionController');

const routes = express.Router();
const upload = multer(uploadConfig);

// routes.get('/users', (req, res) => {
//     return res.json(req.body);
// }) -> exemplo de rota

routes.post('/session', SessionController.store)
routes.get('/session', SessionController.index)
// routes.get('/dashboard', SessionController.index);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots', upload.single('thumbnail'), SpotController.store);    
routes.get('/spots', SpotController.index);

routes.post('/spots/:spot_id/bookings', BookingController.store )

routes.post('/booking/:booking_id/approvals', ApprovalController.store);
routes.post('/booking/:booking_id/rejections', RejectionController.store);

module.exports = routes;