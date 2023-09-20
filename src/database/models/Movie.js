module.exports = (sequelize, dataTypes) => {
    const alias = "Movie"
    const cols = {
        id : {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title:{
            type: dataTypes.STRING(500),
            allowNull: false,
        },
        rating: {
            type: dataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull: false
        },
        awards : {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue : 0
        },
        release_date:{
            type: dataTypes.DATE,
            allowNull: false
        },
        length:{
            type: dataTypes.INTEGER.UNSIGNED,
            defaultValue: null
        },
        genre_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            defaultValue: null
        }
    }
    const config = {
        tableName: "movies",
        timestamps : true, // si no tiene marca del tiempo el valor tiene que ser false
        underscored: true //si es que tenemos nombres con "_" le debemos decir que underscored es true, de lo contrario no es necesario ponerlo
    }
    const Movie = sequelize.define(alias,cols,config);
    return Movie
}