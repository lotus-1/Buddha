const dbConnection = require('../../db_connection.js');

const addDepartmentEmployee = (department_id, employee_id, cb) => {
  dbConnection.query(`INSERT INTO department_employee
     (department_id, employee_id)
     VALUES ((SELECT department_id FROM department), (SELECT employee_id FROM employee))`,
    [department_id, employee_id],
       (err, res) => {
    if (err) return cb (err);
    cb(null, true)
  })
};

const removeEmployee = (data, cb) => {
  dbConnection.query(
    `DELETE FROM department_employee WHERE employee_id = ($1))`,
    [data.employee_id],
    (err, res) => {
      if (err) return cb(err);
      cb(null, true);
    }
  );
};

module.exports = {
  addDepartmentEmployee,
  removeEmployee
};
