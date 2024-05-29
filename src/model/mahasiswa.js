const db = require("../config/database");

const getAll = () => {
  const sqlQuery = "SELECT * FROM user";
  return db.execute(sqlQuery);
};

const createNewUser = (body) => {
  const sqlQuery = `INSERT INTO user (nama, alamat, umur) VALUES ('${body.nama}', '${body.alamat}', '${body.umur}')`;
  return db.execute(sqlQuery);
};

const updateUser = (body, id) => {
  const sqlQuery = `UPDATE user SET nama="${body.nama}", alamat="${body.alamat}", umur=${body.umur} WHERE ID=${id}`;
  return db.execute(sqlQuery);
};

const deleteUser = (id) => {
  const sqlQuery = `DELETE FROM user WHERE ID=${id}`;
  return db.execute(sqlQuery);
};

module.exports = {
  getAll,
  createNewUser,
  updateUser,
  deleteUser,
};
