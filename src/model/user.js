const db = require("../config/database");

const getAll = () => {
  const sqlQuery = "SELECT * FROM user";
  return db.execute(sqlQuery);
};

const createNewUser = (body) => {
  const sqlQuery = `INSERT INTO user (nama_lengkap, alamat_email, jenjang_pendidikan, tanggal_lahir, password) VALUES ('${body.name}', '${body.email}', '${body.degree}', '${body.dob}', '${body.password}')`;
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
