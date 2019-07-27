const test = require("tape");
const runDbBuild = require("../../../src/back-end/database/db_build.js");
const addDepartmentEmployee = require("../../../src/back-end/database/queries/departmentEmployeeQueries.js");

test("Testing addUser function", t => {
  runDbBuild((err, res) => {
    t.error(err, "No Error");

    addDepartmentEmployee("1", "1", (err, result) => {
      if (err) console.log(err);
      t.deepEqual(result, true, "Returns expected data");
      t.end();
    });
  });
});
