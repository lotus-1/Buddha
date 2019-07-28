BEGIN;

DROP TABLE IF EXISTS program CASCADE;
DROP TABLE IF EXISTS content_package CASCADE;
DROP TABLE IF EXISTS department CASCADE;
DROP TABLE IF EXISTS work_team CASCADE;
DROP TABLE IF EXISTS employee CASCADE;
DROP TABLE IF EXISTS department_employee CASCADE;
DROP TABLE IF EXISTS department_project CASCADE;
DROP TABLE IF EXISTS department_workTeam CASCADE;
DROP TABLE IF EXISTS employee_workTeam CASCADE;

CREATE TABLE program (
  project_id SERIAL PRIMARY KEY,
  programs TEXT NOT NULL,
  program_manager TEXT NOT NULL,
  program_lab_related TEXT NOT NULL,
  active BOOLEAN NOT NULL
);

CREATE TABLE content_package (
  package_id SERIAL PRIMARY KEY,
  program_id INTEGER,
  package_level_1 TEXT NOT NULL,
  package_level_2 TEXT NOT NULL,
  priority INTEGER CHECK(priority BETWEEN 1 AND 10),
  related_wt TEXT NOT NULL,
  package_status TEXT NOT NULL,
  generic BOOLEAN NOT NULL,
  year INTEGER NOT NULL,
  q419_flag BOOLEAN NOT NULL,
  package_level_3 TEXT NOT NULL,
  q TEXT NOT NULL,
  motivation TEXT NOT NULL,
  related_sections TEXT NOT NULL,
  task_name TEXT NOT NULL,
  employee_gap FLOAT CHECK(employee_gap BETWEEN 0 AND 100)
);

CREATE TABLE department (
  department_id SERIAL PRIMARY KEY,
  subject VARCHAR(100) NOT NULL,
  active BOOLEAN NOT NULL
);

CREATE TABLE employee (
  employee_idSERIAL PRIMARY KEY,
  lab TEXT NOT NULL,
  section TEXT NOT NULL,
  department_id INTEGER UNIQUE NOT NULL,
  department TEXT NOT NULL,
  cost_center INTEGER NOT NULL,
  employee_name TEXT NOT NULL,
  employee_percent_job FLOAT CHECK(employee_percent_job BETWEEN 0 AND 100),
  resource_type TEXT NOT NULL,
  overhead TEXT NOT NULL,
  sw_role TEXT NOT NULL
);

CREATE TABLE work_team (
  wt_id SERIAL PRIMARY KEY,
  package_id INTEGER REFERENCES content_package(package_id),
  wt_name TEXT NOT NULL,
  wt_leader TEXT NOT NULL,
  sponsor TEXT NOT NULL,
  active BOOLEAN NOT NULL,
  wt_program_focus TEXT NOT NULL,
  wt_group TEXT NOT NULL,
  sponsors_lab TEXT NOT NULL,
  sponsors_section TEXT NOT NULL,
  sponsors_department TEXT NOT NULL
);

CREATE TABLE department_employee (
  department_id INTEGER REFERENCES department(department_id),
  employee_id INTEGER REFERENCES employee(employee_id)
);

CREATE TABLE department_project (
  department_id INTEGER REFERENCES department(department_id),
  package_id INTEGER REFERENCES content_package(package_id)
);

 CREATE TABLE department_workTeam (
   department_id INTEGER REFERENCES department(department_id),
   wt_id INTEGER REFERENCES work_team(wt_id)
 );

CREATE TABLE employee_workTeam (
  employee_id INTEGER REFERENCES employee(employee_id),
  wt_id INTEGER REFERENCES work_team(wt_id)
);

COMMIT;
