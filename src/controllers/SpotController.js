const User = require('../models/User');
const Spot = require('../models/Spot');

    exports.index = async (req, res) =>{
        const { tech } = req.query

        const spots = await Spot.find({ techs: tech });

        return res.json(spots);
    }

exports.store = async (req, res) => {
    const { company, price, techs } = req.body;
    const { filename } = req.file;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);

if (!user){
    return res.status(400).json({ error: 'User does not exists !!!' })
}

const spot = await Spot.create({
    user: user_id,
    thumbnail: filename,
    company,
    price,
    techs: techs.split(',').map(tech => tech.trim())
})

// spot.populate('user');

    return res.json(spot);

}