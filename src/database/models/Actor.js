module.exports = (sequelize, dataTypes) => {
    const alias = "Actor"
    const cols = {
        id : {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        first_name:{
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        last_name:{
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        rating: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        favorite_movie_id : {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        }
    }
    const config = {
        tableName: "actors",
        timestamps : true, // si no tiene marca del tiempo el valor tiene que ser false
        underscored: true //si es que tenemos nombres con "_" le debemos decir que underscored es true, de lo contrario no es necesario ponerlo
    }
    const Actor = sequelize.define(alias,cols,config);
    return Actor
}