const dbConnection = require('../db_connection.js');

const createDepartment = (data, cb) => {
  dbConfiguration.query(`INSERT INTO department
    (subject) VALUES ($1)`,
    [data.subject], (err, res) => {
      if (err) return cb(err);
      cb(null, true);
    });
};

const addWorkTeamToDepartment = (data, cb) => {
  dbConfiguration.query(`INSERT INTO department (work_team_name) VALUES ($1)`,
  [data.work_team_name], (err, res) => {
    if (err) return cb(err);
    cb(null, true);
  });
};

const addEmployeeToDepartment = (data, cb) => {
  dbConfiguration.query(`INSERT INTO department (employee_name) VALUES ($2)`,
  [data.employee_name], (err, res) => {
    if (err) return cb(err);
    cb(null, true);
  });
};


module.export = {
  createDepartment,
  addWorkTeamToDepartment,
  addEmployeeToDepartment
};
