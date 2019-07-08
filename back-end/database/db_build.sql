BEGIN;

DROP TABLE IF EXISTS program CASCADE;
DROP TABLE IF EXISTS content_package CASCADE;
DROP TABLE IF EXISTS group CASCADE;
DROP TABLE IF EXISTS work_team CASCADE;
DROP TABLE IF EXISTS head_count CASCADE;

-- This table need to be finished in the next sprint
-- CREATE TABLE program (
--   program_id SERIAL PRIMARY KEY,
--   projects
--   program_manager
--   project_lab_related
--   active
-- )

-- This table is for team-2 to do
-- CREATE TABLE content_package (
--
-- )

CREATE TABLE group (
  group_id SERIAL PRIMARY KEY,
  subject VARCHAR(100) NOT NULL
  -- active
)

-- This table is for team-2 to do
-- CREATE TABLE work_team (
--
-- )

CREATE TABLE head_count (
  lab TEXT NOT NULL,
  section TEXT NOT NULL,
  department TEXT NOT NULL,
  department_id SERIAL PRIMARY KEY,
  cost_center INTEGER NOT NULL,
  employee_id INTEGER UNIQUE NOT NULL,
  employee_name TEXT NOT NULL,
  employee_%_job FLOAT CHECK(employee_%_job BETWEEN 0 AND 100),
  resource_type TEXT NOT NULL,
  overhead TEXT NOT NULL,
  sw_role TEXT NOT NULL
)

CREATE TABLE Group_HC (
  group_id INTEGER REFERENCES group(id)
  employee_id INTEGER REFERENCES employee(id)
  -- % job
)


COMMIT;
