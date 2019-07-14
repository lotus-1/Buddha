const tape = require("tape");
const runDBbuild = require("../database/db_build");

test('Tape is working', t => {
  t.equal(1, 1, 'one equals one');
  t.end();
});

const data = {
  lab : 'lab 1',
  section : 'section 1',
  department : 'department 1',
  cost_center : 'cost_center 1',
  employee_name : 'employee_name 1',
  employee_percent_job : 10,
  resource_type : 'resource_type 1',
  over_head : 'over_head 1',
  sw_role : 'sw_role 1'
}

test('testing addEmployee function', t => {
  runDBbuild((err, res) => {
    t.error(err, 'No Error');
    addEmployee (data, (err, result) => {
        if (err) console.log(err);
        t.deepEqual(result, true, 'Retun true when adding emploee to the table');
        t.end();
      };
  });
});


test('testing showEmployee function', t => {
  runDBbuild((err, res) => {
    t.error(err, 'No Error');
    showEmployee('employee_name', (err, result) => {
      if (err) console.log(err);
      t.deepEqual(result, expected.employee_name, 'return "employee_name 1" when showing the name');
      t.end();
    });
  });
});

test('testing removeEmployee function', t => {
  runDBbuild((err, res) => {
    t.error(err, 'No Error');
    const expected = 0;
    removeEmployee('1', (err, result) => {
      if (err) console.log (err);
      t.deepEqual(expected, res.rows.length , 'should return 0 when removing the employee');
      t.end();
    });
  });
});
