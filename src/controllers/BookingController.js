const Booking = require('../models/Booking');


module.exports = {
  async store(req, res) {
    const { user_id } = req.headers;
    const { spot_id } = req.params;
    const { date } = req.body;

    const booking = await Booking.create({
      user: user_id,
      spot: spot_id,
      date,
    });

    // await booking.populate('spot').populate('user').execPopulate();
    await booking.populate('spot');
    await booking.populate('user');

    console.log(booking);

    // onwner é o Dono do Spot
    const ownerSocket = req.connectedUsers[booking.spot.user];

    if (ownerSocket) {
      req.io.to(ownerSocket).emit('booking_request', booking);
    }

    return res.json(booking);
  }
};
