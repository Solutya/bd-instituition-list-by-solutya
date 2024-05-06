// index.js

const data = require("./data/bd_schoolName_data.json");

function getAllSchools() {
  return data;
}

function getAllSchoolNames() {
  return data.map((school) => school.name);
}

function getAllEiins() {
  return data.map((school) => school.eiin);
}

function getSchoolByEiin(eiin) {
  return data.find((school) => school.eiin === eiin);
}

function getSchoolNameByEiin(eiin) {
  const school = getSchoolByEiin(eiin);
  return school ? school.name : "School Not Found!";
}

function getSchoolByName(name) {
  return data.find(
    (school) => school.name.toLowerCase() === name.toLowerCase()
  );
}
function getNameByType(type) {
  return data.filter(
    (school) => school.institutionType?.toLowerCase() === type.toLowerCase()
  );
}

module.exports = {
  getAllSchools,
  getAllSchoolNames,
  getAllEiins,
  getSchoolByEiin,
  getSchoolNameByEiin,
  getSchoolByName,
  getNameByType,
};
