const dbConnection = require("../db_connection.js");

const addContentPackage = (data, cb) => {
  dbConnection.query(
    `INSERT INTO content_package(
      program_id,
    package_level_1,
    package_level_2,
    priority,
    related_wt,
    package_status,
    generic,
    year,
    q419_flag,
    package_level_3,
    q,
    motivation,
    related_sections,
    task_name,
    employee_gap)
    VALUES (($1, $2, $3, $4, $5, $6,
      $7, $8, $9, $10, $11, $12))`,
    [
      data.program_id,
      data.package_level_1,
      data.package_level_2,
      data.priority,
      data.related_wt,
      data.package_status,
      data.generic,
      data.year,
      data.q419_flag,
      data.package_level_3,
      data.q,
      data.motivation,
      data.related_sections,
      data.task_name,
      data.employee_gap
    ],
    (err, res) => {
      if (err) return cb(err);
      console.log("data been inserted to content_package table");
      cb(null, true);
    }
  );
};

module.export = {
  addContentPackage
};
