module.exports = (sequelize, DataTypes) => {
    const Task= sequelize.define("task", {
      title:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      Status:{
        type: DataTypes.ENUM('Pending','Completed'),
        allowNull: false,
      }, 
    });
    return Task;
};
