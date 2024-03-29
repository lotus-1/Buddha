BEGIN;

DROP TABLE IF EXISTS program CASCADE;
DROP TABLE IF EXISTS content_package CASCADE;
DROP TABLE IF EXISTS department CASCADE;
DROP TABLE IF EXISTS work_team CASCADE;
DROP TABLE IF EXISTS employee CASCADE;

-- This table need to be finished in the next sprint
-- CREATE TABLE program (
--   program_id SERIAL PRIMARY KEY,
--   projects
--   program_manager
--   project_lab_related
--   active
-- )


CREATE TABLE content_package (
  project_ID SERIAL PRIMARY KEY,
  program_ID INTEGER REFERENCES,
  related_WT TEXT NOT NULL,
  package_level_1 TEXT NOT NULL,
  package_level_2 TEXT NOT NULL,
  priority INTEGER LIMIT (10),
  package_status TEXT NOT NULL,
  -- generic ,
  year INTEGER NOT NULL,
   [Q419_Flag] INT ,
  package_level_3 TEXT NOT NULL,
  q TEXT NOT NULL,
  motivation TEXT NOT NULL,
  related_Sections TEXT NOT NULL,
);

CREATE TABLE departmentProject (
  project_ID INTEGER REFERENCES project(id),
  package_ID INTEGER REFERENCES package(id)
);

CREATE TABLE department (
  department_id SERIAL PRIMARY KEY,
  subject VARCHAR(100) NOT NULL
  -- active
);

CREATE TABLE employee (
  lab TEXT NOT NULL,
  section TEXT NOT NULL,
  department TEXT NOT NULL,
  department_id SERIAL PRIMARY KEY,
  cost_center INTEGER NOT NULL,
  employee_id INTEGER UNIQUE NOT NULL,
  employee_name TEXT NOT NULL,
  employee_percent_job FLOAT CHECK(employee_percent_job BETWEEN 0 AND 100),
  resource_type TEXT NOT NULL,
  overhead TEXT NOT NULL,
  sw_role TEXT NOT NULL
);

CREATE TABLE department_employee (
  department_id INTEGER REFERENCES department(department_id)
  employee_id INTEGER REFERENCES employee(employee_id)
  -- % job
);


COMMIT;
