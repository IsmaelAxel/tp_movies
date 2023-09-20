const db = require('../database/models')
const Op = db.Sequelize.Op
module.exports = {
    list: (req,res) => {
        db.Genre.findAll()
            .then(function(genres){
                res.render('genresList',{
                    genres:genres
                })
            })
            .catch(error => console.log(error))
        },
    detail: (req,res) => {
        db.Genre.findByPk(req.params.id)
            .then(function(genre){
                res.render('genresDetail',{
                    genre:genre
                })
            })
            .catch(error => console.log(error))
    }
}