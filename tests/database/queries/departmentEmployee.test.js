const tape = require("tape");
const runDBbuild = require("../database/db_build");


test('testing addDepartmentEmployee function', t => {
  runDBbuild((err, res) => {
    t.error(err, 'No Error');
        addDepartmentEmployee('department_id', 'employee_id', err, result) => {
        if (err) console.log(err);
        t.deepEqual(result, true, 'Retun true when adding to the table');
        t.end();
      };
  });
});
