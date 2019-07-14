const tape = require("tape");
const dbConnection = require("../../../buddha-system/src/database/queries/contentPackagrQueries.js");

const expected = {
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
test("test add project function", t => {
  dbConnection((err, res) => {
    t.error("this is an error: ", err);
    addContentPackage(
      14682354,
      45679235,
      "package level 1",
      "package_level_2",
      "package_level_3",
      5,
      "related_wt",
      "inactive",
      "yes",
      1988,
      "Q4'19_flag",
      (error, result) => {
        if (err) console.log("this is an error: ", error);
        t.deepEqual(result, expected, "output as expected");
      }
    );
  });
});
