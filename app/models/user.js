
module.exports = function(sequelize, Sequelize) {
	var User = sequelize.define('user', {
		id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
		email: { type:Sequelize.STRING, validate: {isEmail:true} },
		password : {type: Sequelize.STRING,allowNull: false },
		last_login: {type: Sequelize.DATE},
		spyingOn : {type: Sequelize.STRING}
	});

	return User;
}
