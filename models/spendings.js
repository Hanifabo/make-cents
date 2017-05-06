/**
 * Created by hanifa on 5/4/17.
 */

module.exports = function (sequelize, DataTypes) {
    var Spendings = sequelize.define('Spendings',{
            groceries: {
                type: DataTypes.FLOAT,
                validate:{
                    len:[0, 4],
                    isFloat:true
                }
            },
            gas: {
                type: DataTypes.FLOAT,
                validate:{
                    len:[0, 4],
                    isFloat:true
                }
            },
            leisure: {
                type: DataTypes.FLOAT,
                validate:{
                    len:[0, 4],
                    isFloat:true
                }
            }
        },
            {
            classMethods: {
                associate: function(models) {
                    Spendings.belongsTo(models.Users, {
                        foreignKey: {
                            allowNull: false
                        }
                    });
                }
            }
        }
    );
    return Spendings;
};