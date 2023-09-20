module.exports = (sequelize, dataTypes) => {
    const alias = "Genre"
    const cols = {
        id : {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        created_at:{
            type: dataTypes.DATE,
            allowNull: true
        },
        name:{
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        ranking: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            unique: true 
        },
        active : {
            type: dataTypes.TINYINT(1).UNSIGNED,
            allowNull: false,
            defaultValue : 1
        }
    }
    const config = {
        tableName: "genres",
        timestamps : true, // si no tiene marca del tiempo el valor tiene que ser false
        underscored: true //si es que tenemos nombres con "_" le debemos decir que underscored es true, de lo contrario no es necesario ponerlo
    }
    const Genre = sequelize.define(alias,cols,config);
    return Genre
}