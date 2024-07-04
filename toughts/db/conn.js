const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("toughts2", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Conectamos ao Banco MySQL!");
} catch (error) {
  console.log(`Não fopi possível conectar: ${error}`);
}

module.exports = sequelize;
