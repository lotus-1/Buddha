const dbConnection = require("../db_connection.js");

const addProgram = (data, cb) => {
  dbConnection.query(
    `INSERT INTO program
    (
      programs,
      program_manager,
      program_lab_related,
      active
    ) VALUES (
      $1, $2, $3, $4
    )`,
    [
      data.programs,
      data.program_manager,
      data.program_lab_related,
      data.active
    ],
    (err, res) => {
      if (err) return cb(err);
      cb(null, true);
    }
  );
};

module.exports = addProgram;
