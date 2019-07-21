BEGIN;

DROP TABLE IF EXISTS program CASCADE;
DROP TABLE IF EXISTS content_package CASCADE;
DROP TABLE IF EXISTS department CASCADE;
DROP TABLE IF EXISTS work_team CASCADE;
DROP TABLE IF EXISTS employee CASCADE;

CREATE TABLE program (
  program_ID SERIAL PRIMARY KEY,
  projects TEXT NOT NULL,
  program_Manager TEXT NOT NULL,
  program_Lab_related TEXT NOT NULL,
  active BOOLEAN NOT NULL
);

CREATE TABLE content_package (
  project_ID SERIAL PRIMARY KEY,
  program_ID INTEGER,
  related_WT TEXT NOT NULL,
  package_level_1 TEXT NOT NULL,
  package_level_2 TEXT NOT NULL,
  priority INTEGER CHECK(priority BETWEEN 1 AND 10),
  package_status TEXT NOT NULL,
  -- generic ,
  year INTEGER NOT NULL,
  Q419_Flag INT,
  package_level_3 TEXT NOT NULL,
  q TEXT NOT NULL,
  motivation TEXT NOT NULL,
  related_Sections TEXT NOT NULL
);

CREATE TABLE department (
  department_id SERIAL PRIMARY KEY,
  subject VARCHAR(100) NOT NULL,
  active BOOLEAN NOT NULL
);

CREATE TABLE employee (
  department_id SERIAL PRIMARY KEY,
  lab TEXT NOT NULL,
  section TEXT NOT NULL,
  department TEXT NOT NULL,
  cost_center INTEGER NOT NULL,
  employee_id INTEGER UNIQUE NOT NULL,
  employee_name TEXT NOT NULL,
  employee_percent_job FLOAT CHECK(employee_percent_job BETWEEN 0 AND 100),
  resource_type TEXT NOT NULL,
  overhead TEXT NOT NULL,
  sw_role TEXT NOT NULL
);

CREATE TABLE work_team (
  WT_ID SERIAL PRIMARY KEY,
  project_ID INTEGER REFERENCES content_package(project_ID),
  WT_Name TEXT NOT NULL,
  WT_Leader TEXT NOT NULL,
  sponsor TEXT NOT NULL,
  active BOOLEAN NOT NULL,
  WT_Program_Focus TEXT NOT NULL,
  WT_group TEXT NOT NULL,
  sponsors_Lab TEXT NOT NULL,
  sponsors_Section TEXT NOT NULL,
  sponsors_Department TEXT NOT NULL
);

CREATE TABLE department_employee (
  department_id INTEGER REFERENCES department(department_id),
  employee_id INTEGER REFERENCES employee(employee_id)
);

CREATE TABLE departmentProject (
  project_ID INTEGER REFERENCES content_package(project_ID),
  department_id INTEG ER REFERENCES department(department_id)
);


COMMIT;
