/**
 * Created by hanifa on 5/4/17.
 */
module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define('Users',{
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate:{
                    len:[5, 25],
                    is:["^[a-z]+$",'i']
                }
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate:{
                    isEmail:true
                }
            },
            phoneNumber: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate:{
                    isNumeric:true
                }
            }
        }

    );
    return Users;
};
