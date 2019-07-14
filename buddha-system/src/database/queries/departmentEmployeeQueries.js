const dbConnection = require('../db_connection.js');

const addDepartmentEmployee = (department_id, employee_id, cb) => {
  dbConnection.query(`INSERT INTO department_employee
     (department_id, employee_id)
     VALUES ($1, $2)`,
    [data.department_id, data.employee_id],
       (err, res) => {
    if (err) return cb (err);
    cb(null, true)
  })
};


module.exports = addDepartmentEmployee;
