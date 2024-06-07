const db = require("../config/database");

const getAll = () => {
  const sqlQuery = "SELECT * FROM user";
  return db.execute(sqlQuery);
};

const getByEmailPassword = (email, password) => {
  const sqlQuery = `SELECT * FROM user WHERE alamat_email = ? AND password = ?`;
  return db.execute(sqlQuery, [email, password]).then(([rows]) => {
    if (rows.length === 0) {
      throw new Error("User not found"); // Melontarkan error jika tidak ada data yang ditemukan
    }
    return rows;
  });
};

const createNewUser = (body) => {
  const sqlQuery = `INSERT INTO user (avatar, nama_lengkap, alamat_email, jenjang_pendidikan, tanggal_lahir, password) VALUES ('${body.avatar}','${body.nama_lengkap}', '${body.alamat_email}', '${body.jenjang_pendidikan}', '${body.tanggal_lahir}', '${body.password}')`;
  return db.execute(sqlQuery);
};

const updateUser = (body, id) => {
  const sqlQuery = `UPDATE user SET nama_lengkap="${body.nama_lengkap}", avatar='${body.avatar}' WHERE userID=${id}`;
  return db.execute(sqlQuery);
};

const deleteUser = (id) => {
  const sqlQuery = `DELETE FROM user WHERE ID=${id}`;
  return db.execute(sqlQuery);
};

module.exports = {
  getAll,
  getByEmailPassword,
  createNewUser,
  updateUser,
  deleteUser,
};
