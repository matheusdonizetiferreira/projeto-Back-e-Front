const User = require('../models/User');
const Spot = require('../models/Spot');

exports.store = async (req, res) => {
    const { company, price, techs } = req.body
    const { user_id } = req.headers;

    const user = await User.findById(user_id);

if (!user){
    return res.status(400).json({ error: 'User does not exists' })
}

const spot = await Spot.create({
    user: user_id,
    company,
    price,
    techs: techs.split(',').map(tech => tech.trim())
})

    return res.json(spot);

}