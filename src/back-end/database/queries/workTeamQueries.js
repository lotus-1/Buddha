const dbConnection = require("../db_connection.js");

const addWorkTeam = (data, cb) => {
  dbConnection.query(`INSERT INTO work_team
    (
      package_id,
      wt_name,
      wt_leader,
      sponsor,
      active,
      wt_program_focus,
      wt_group,
      sponsors_lab,
      sponsors_section,
      sponsors_department
    ) VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8, $9, $10
    )`,
    [
    data.package_id,
    data.wt_name,
    data.wt_leader,
    data.sponsor,
    data.active,
    data.wt_program_focus,
    data.wt_group,
    data.sponsors_lab,
    data.sponsors_section,
    data.sponsors_department,
    data.package_id,
    data.wt_name,
    data.wt_leader,
    data.sponsor,
    data.active,
    data.wt_program_focus,
    data.wt_group,
    data.sponsors_lab,
    data.sponsors_section,
    data.sponsors_department,
  ],
  (err, res) => {
    if (err) return cb(err);
    cb(null, true);
  });
};

module.exports = addWorkTeam;
