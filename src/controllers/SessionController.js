// index() -> listagem de session //list
// show() -> lista 1 session  //show
// store() -> cria 1 session //create / insert
// update() -> altera 1 session //update
// destroy() -> exclui 1 session //delete / remove

const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { email } = req.body;
        // const email = req.body.email -> desestruturação 

        if (email) {

            let user = await User.findOne({ email }) //verifica se o usuario existe

            if (!user) {
                user = await User.create({ email });

            }


            return res.json(user);

        } else {
            return res.json({ message: 'Nenhum email enviado !!!' })
        }


    },
    async index(req, res) {
        user = await User.find();

        return res.json(user);
    }



}