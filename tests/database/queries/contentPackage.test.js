const tape = require("tape");
const buildDB = require("../../../buddha-system/src/database/db_build.sql");
const addContentPackage = require("../../../buddha-system/src/database/queries/addContentPackageQueries");
const updateContentPackage = require("../../../buddha-system/src/database/queries/addContentPackageQueries");

tape("tape is working", t => {
  t.equals(1, 1, "one equals one");
  t.end();
});

tape("add content package", t => {
  buildDB((err, res) => {
    t.error("this is an error: ", err);
    let expected = {
      package_id: 14682354,
      program_id: 45679235,
      package_level_1: "package level 1",
      package_level_2: "package_level_2",
      package_level_3: "package_level_3",
      priorty: 5,
      related_wt: "related_wt",
      package_status: "inactive",
      generic: "yes",
      year: 1988,
      Q419_flag: "Q4'19_flag"
    };
    addContentPackage((error, result) => {
      if (err) console.log("this is an error: ", error);
      t.deepEqual(result, expected, "content package has been added");
      t.end();
    });
  });
});

tape("update content package by updating priorty", t => {
  buildDB((err, res) => {
    t.error("this is an error: ", err);
    let expected = {
      priorty: 5
    };
  });
  updateContentPackage((error, result) => {
    if (err) console.log("this is an error: ", error);
    t.deepEqual(result, expected, "priorty has been added");
    t.end();
  });
});
