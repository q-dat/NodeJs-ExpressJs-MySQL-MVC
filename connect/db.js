const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "demodb",
});
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Lỗi kết nối CSDL:", err);
    return;
  }
  console.log("Kết nối CSDL thành công!");
  connection.release();
});

module.exports = pool.promise();
