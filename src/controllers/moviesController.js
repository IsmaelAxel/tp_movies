const db = require('../database/models')
const Op = db.Sequelize.Op
module.exports = {
    list: (req,res) => {
        db.Movie.findAll()
            .then(function(movies){
                res.render('moviesList',{
                    movies:movies
                })
            })
            .catch(error => console.log(error))
        },
    detail: (req,res) => {
        db.Movie.findByPk(req.params.id)
            .then(function(movie){
                res.render('moviesDetail',{
                    movie: movie
                })
            })
            .catch(error => console.log(error))
        },
    new: (req,res) => {
        db.Movie.findAll({
            order:[
                ['release_date','DESC']
            ]
        }).then(function(movies){
            res.render('newestMovies',{
                movies:movies
            })
        })
        .catch(error => console.log(error))
    },
    recomended:(req,res) => {
        db.Movie.findAll({
            where: {
                id: {[Op.gte]: 17}
            },
            limit: 5,
            order:[
                ['rating','DESC']
            ]
        }).then(function(movies){
            res.render('recommendedMovies',{
                movies: movies
            })
        })
        .catch(error => console.log(error))
    }
}