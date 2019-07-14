const dbConnection = require('../db_connection.js');

const addContentPackage = (related_WT,
package_level_1,
package_level_2,
priority,
package_status,
generic,
year,
[q419_Flag],
package_level_3,
q,
motivation,
related_Sections,
cb => {
  dbConnection.query(
    `INSERT INTO content_package(related_WT, package_level_1, package_level_2, priority,
     package_status, generic, year, q419_Flag, package_level_3, q, motivation, related_Sections)
    VALUES (($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12))`,
    [
      program,
      related_WT,
      package_level_1,
      package_level_2,
      priority,
      package_status,
      generic,
      year,
      q419_Flag,
      package_level_3,
      q,
      motivation,
      related_Sections,
      task_Name,
      hc_Gap
    ],
    (err, res) => {
      if (err) return cb(err);
      console.log("data been inserted to content_package table");
      cb(null, true);
    }
  );
});

const updateContentPackage = ()

module.export = {
  addContentPackage,
  updateContentPackage
};
