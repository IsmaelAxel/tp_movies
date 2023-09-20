const db = require('../database/models')
const Op = db.Sequelize.Op
module.exports = {
    listarActores: (req,res) => {
        db.Actor.findAll()
            .then(function(actors){
                res.render('actorsList',{
                    actors:actors
                })
            })
            .catch(error => console.log(error))
    }
}