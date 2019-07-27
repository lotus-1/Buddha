const test = require('tape');
const { runDbBuild } = require('../../../src/back-end/database/db_build.js');
const { createDepartment } = require('../buddha-system/src/database/queries/departmentQueries');

test('Testing createDepartment function', t => {
  runDbBuild((err, res) => {
    t.error(err, 'No Error');
    createDepartment('subject1', (err, result) => {
      if (err) console.log(err);
      t.deepEqual(result, true, 'Return true when adding subject to the department');
      t.end();
    });
  });
});
