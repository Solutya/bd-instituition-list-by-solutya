
const banSchoolData = require("./data/bd_schoolName_data.json");
const collegeData = require("./data/bd_collegeName_data.json")
const madrashaData = require("./data/bd_madrashaName_data.json")
const govtUniData = require("./data/public_Uni_data.json")
const engSchoolData = require("./data/english_medium_data.json")
const govtDentData = require("./data/govt_dental_medical_college_data.json")
const govtMediData = require("./data/govt_medical_college_data.json")
const pvtDentData = require("./data/private_dental_medical_college.json")
const pvtMediData = require("./data/private_medical_college_data.json")
const pvtUniData = require('./data/private_Uni_data.json')


//All school (eng-ban)
function getAllSchools() {
  return [banSchoolData, engSchoolData, madrashaData];
}

function getAllCollege(){
  return [collegeData]
}
function getAllInstitute(){
   return [banSchoolData,engSchoolData, madrashaData, collegeData, govtUniData, govtDentData, govtMediData, pvtUniData, pvtMediData, pvtDentData]
}

function getAllInstituteName() {
  return getAllInstitute().flatMap(dataset => dataset.map(item => item.name)).filter(name => name);
}

 function getFilterData(key,type){
   return  getAllInstitute().flatMap(institute=> institute.filter(item => item[key] === type));

   // return [institute].filter(institute => institute !== undefined)
 }
 function getAllInstituteByType(type) {
   return  getFilterData('institutionType', type);
   // return data.map(item => item)
 }

 function getAllInstituteNameByType(type){

   const data = getFilterData('institutionType', type);


   return data.map(item => item.name);
 }

function getAllSchoolNames() {
  const allNames = getAllSchools().flatMap(school => school.map(item =>item.name));
  return allNames.filter(name => name)

}

function getAllSchoolEiins() {
  const allEiins = getAllSchools().flatMap(school => school.map(item => item.eiin))
  return allEiins.filter(eiin => eiin)
}

function getAllSchoolByVersion(version) {
  const filterSchool = getAllSchools().flatMap(school => school.filter(item => item.version === version))
  return filterSchool.filter(school => school !== undefined)
}

function getAllNameSchoolByVersion(version) {
  const filterSchool = getAllSchools().flatMap(school => school.filter(item => item.version === version).map((school)=> school.name))
  return filterSchool.filter(school => school !== undefined)
}

function getAllSchoolEiinByVersion(version) {
  const filterSchool = getAllSchools().flatMap(school => school.filter(item => item.version === version).map((school)=> school.eiin))
  return filterSchool.filter(school => school !== undefined)
}
//
function getSchoolByEiin(eiin) {
  const filterSchool = getAllSchools().flatMap(school => school.filter(item => item.eiin === eiin));
  return filterSchool.filter(school => school !==undefined)
}

function getSchoolNameByEiin(eiin) {
  const filterSchool = getAllSchools().flatMap(school => school.filter(item => item.eiin === eiin));
  const sclData = filterSchool.map(school => school.name)
  return sclData.filter(school => school !==undefined)
}



function getSchoolByName(name) {
  const filterSchool = getAllSchools().flatMap(school => school.filter(item => item.name === name));
  return filterSchool.filter(school => school !==undefined)
}














// function getAllBanSclEiins() {
//   return banSchoolData.map((school) => school.eiin);
// }
//
// function getSchoolByEiin(eiin) {
//   return banSchoolData.find((school) => school.eiin === eiin);
// }
//
// function getSchoolNameByEiin(eiin) {
//   const school = getSchoolByEiin(eiin);
//   return school ? school.name : "School Not Found!";
// }
//
// function getSchoolByName(name) {
//   return banSchoolData.find(
//     (school) => school.name.toLowerCase() === name.toLowerCase()
//   );
// }
// function getNameByType(type) {
//   return banSchoolData.filter(
//     (school) => school.institutionType?.toLowerCase() === type.toLowerCase()
//   );
// }


//college
// function getAllCollege(){
//   return collegeData;
// }
//
// function getAllCollegeName(){
//   return collegeData.map((college) => college.name);
// }



module.exports = {
  getAllSchools,
  getAllCollege,
  getAllSchoolNames,
  getAllSchoolEiins,
  getSchoolByEiin,
  getSchoolByName,
  getAllSchoolByVersion,
  getAllNameSchoolByVersion,
  getSchoolNameByEiin,
  getAllSchoolEiinByVersion,

  getAllInstitute,
  getAllInstituteName,
  getAllInstituteByType,
  getAllInstituteNameByType,



  //getAllSchoolNames,
  //getAllBdSclEiins
  // getAllBdSclEiins,
  // getBdSchoolByEiin,
  // getSchoolNameByEiin,
  // getSchoolByName,
  // getNameByType,
  // getAllCollege,
  // getAllCollegeName
};
