const dbConnection = require('../db_connection.js');

const addEmployee = (lab, section, department, cost_center, employee_name,
   employee_percent_job, resource_type, over_head, sw_role, cb) => {
  dbConnection.query(`INSERT INTO employee
     (lab, section, department, cost_center, employee_name,
     employee_percent_job, resource_type, over_head, sw_role)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
    [data.lab, data.section, data.department, data.cost_center, data.employee_name,
       data.employee_percent_job, data.resource_type, data.over_head, data.sw_role],
       (err, res) => {
    if (err) return cb (err);
    cb(null, true)
  })
};

const removeEmployee = (data, cb) => {
  db_connection.query(`DELETE FROM department_employee WHERE employee_id = ($1))`,
  [data.employee_id], (err, res) => {
    if (err) return cb (err);
    cb(null, true);
  }
};

// const showEmployee = (employee_id, cb) = {
//   dbConnection.query('SELECT employee_name FROM head_count WHERE employee_id = ($1) ', (err, res) => {
//     if (err) return cb(err);
//     cb(null, res.rows);
//   });
// };

const util = require('util');
const fs = require('fs');

const showEmployee = util.promisify(fs.stat);
stat('.').then((stats) => {
  dbConnection.query('SELECT employee_name FROM employee WHERE employee_id = ($1)')
}).catch((error) => {
  stats.rows;
});


const updateEmployee = (data, cb) => {
  db_connection.query(`UPDATE employee
    SET employee_percent_job = ($1) WHERE employee_name = ($2)`,
    [data.employee_percent_job, data.employee_name] (err, res) => {
      if (err) return cb (err);
      cb(null, true);
    });
};


module.exports = {
  addEmployee,
  removeEmployee,
  showEmployee,
  updateEmployee
}
