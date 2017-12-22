module.exports = function(sequelize, Sequelize) {
	var Apple = sequelize.define('Apple', {
		id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
		type: { type: Sequelize.STRING, notEmpty: true},
    color: { type: Sequelize.STRING, notEmpty: true},
    status: { type: Sequelize.ENUM('eaten','uneaten'), defaultValue:'uneaten' }
	});

	return Apple;
}
