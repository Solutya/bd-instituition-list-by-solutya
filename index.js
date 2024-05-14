
const banSchoolData = require("./data/bd_schoolName_data.json");
const collegeData = require("./data/bd_collegeName_data.json")
const madrashaData = require("./data/bd_madrashaName_data.json")
const govtUniData = require("./data/public_Uni_data.json")
const engSchoolData = require("./data/english_medium_data.json")
const pvtUniData = require('./data/private_Uni_data.json')
const nuData = require('./data/nu_Uni_data.json')


//All institute
function getAllInstitute(){
   return [banSchoolData,engSchoolData, madrashaData, collegeData, govtUniData, pvtUniData, nuData].flatMap(dataset => dataset.map(item => item))
}
function getAllInstituteNames() {
  return getAllInstitute().map(data => data.name);
}
 function getFilterData(key,type){
   return  getAllInstitute().filter(item => item[key] === type);

 }
 function getAllInstituteByType(type) {
   return  getFilterData('institutionType', type);
 }

 function getAllInstituteNameByType(type){
   return getFilterData('institutionType', type).map(item => item.name);
 }


 //all school (bengali, english, arabic)
function getAllSchools() {
  return [banSchoolData, engSchoolData, madrashaData].flatMap(dataset => dataset.map(item => item));
}

function getAllSchoolNames() {
  return  getAllSchools().map(school => school.name)

}
function getAllSchoolByVersion(version) {
  const filterSchool = getAllSchools().filter(item => item.version === version)
  return filterSchool.filter(school => school !== undefined)
}
function getAllSchoolNameByVersion(version) {
  const filterSchool = getAllSchools().filter(item => item.version === version).map((school)=> school.name)
  return filterSchool.filter(school => school !== undefined)
}
function getSchoolByEiin(eiin) {
  const filterSchool = getAllSchools().filter(item => item.eiin === eiin);
  return filterSchool.filter(school => school !==undefined)
}
function getSchoolNameByEiin(eiin) {
  const filterSchool = getAllSchools().filter(item => item.eiin === eiin).map(school => school.name)
  return filterSchool.filter(school => school !==undefined)
}
function getSchoolByName(name) {
  const filterSchool = getAllSchools().filter(item => item.name === name);
  return filterSchool.filter(school => school !==undefined)
}



//college
function getAllCollege(){
  return [collegeData].flatMap(dataset => dataset.map(item => item))
}
function getAllCollegeNames() {
  return getAllCollege().map(item => item.name)
}

function getCollegeByEiin(eiin) {
  const filterCollege = getAllCollege().filter(item => item.eiin === eiin);
  return filterCollege.filter(college => college !==undefined)
}

function getCollegeNameByEiin(eiin) {
  return getAllCollege().filter(item => item.eiin === eiin).map(college => college.name);
}

function getCollegeByName(name){
  const filterCollege = getAllCollege().filter(item => item.name === name);
  return filterCollege.filter(college => college !==undefined)
}


//university (govt, medical, pvt, nu)

function getAllUnis() {
  return [govtUniData, pvtUniData, nuData].flatMap(dataset => dataset.map(item => item))
}

function getAllUniNames() {
  return getAllUnis().map(item => item.name)
}

function getUniByName(name){
  const filterUnis = getAllUnis().filter(item => item.name === name);
  return filterUnis.filter(unis => unis !==undefined)
}

function getUniByShortName(shortName) {
  const filterUnis = getAllUnis().filter(item => item.shortName === shortName);
  return filterUnis.filter(unis => unis !==undefined)
}

function getUniNameByShortName(shortName) {
  const filterUnis = getAllUnis().filter(item => item.shortName === shortName).map(unis => unis.name);
  return filterUnis.filter(unis => unis !==undefined)
}

function getAllUniByCategory(category) {
  const filterUnis = getAllUnis().filter(item => item.category === category);
  return filterUnis.filter(unis => unis !==undefined)
}

function getAllUniNameByCategory(category) {
  const filterUnis = getAllUnis().filter(item => item.category === category).map(unis => unis.name);
  return filterUnis.filter(unis => unis !==undefined)
}

function getAllUnisByDepartment(department){
  const filterUnis = getAllUnis().filter(item => item.department === department);
  return filterUnis.filter(unis => unis !==undefined)
}

function getAllUniNameByDepartment(department){
  const filterUnis = getAllUnis().filter(item => item.department === department).map(unis => unis.name);
  return filterUnis.filter(unis => unis !==undefined)
}




module.exports = {
  getAllInstitute,
  getAllInstituteNames,
  getAllInstituteByType,
  getAllInstituteNameByType,


  getAllSchools,
  getAllSchoolNames,
  getSchoolByEiin,
  getSchoolByName,
  getAllSchoolByVersion,
  getAllSchoolNameByVersion,
  getSchoolNameByEiin,

  getAllCollege,
  getAllCollegeNames,
  getCollegeByEiin,
  getCollegeNameByEiin,
  getCollegeByName,


  getAllUnis,
  getAllUniNames,
  getUniByName,
  getUniByShortName,
  getUniNameByShortName,
  getAllUniByCategory,
  getAllUniNameByCategory,
  getAllUnisByDepartment,
  getAllUniNameByDepartment
};
