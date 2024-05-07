
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
  return [banSchoolData, engSchoolData];
}
function getAllInstitute(){
   return [banSchoolData,engSchoolData, madrashaData, collegeData, govtUniData, govtMediData, govtDentData, pvtUniData, pvtMediData, pvtDentData]
}

function getAllInstituteName(){
  const data = [banSchoolData,engSchoolData, madrashaData, collegeData, govtUniData, govtMediData, govtDentData, pvtUniData, pvtMediData, pvtDentData]
  const allNames = [];

  data.forEach(dataset => {
    dataset.forEach(item => {
      if (item.name) {
        allNames.push(item.name);
      }
    });
  });

  return allNames;

 }

 function getFilterData(key,type){
   console.log(key,type)
   const banSchool= banSchoolData.filter((institute)=> institute.key === type);
   const engSchool = engSchoolData.filter((institute)=> institute.key === type);
   const college = collegeData.filter((institute)=> institute.key === type);
   const madrasa = madrashaData.filter((institute)=> institute.key === type);
   const govtUni = govtUniData.filter((institute)=> institute.key === type);
   const govtMedi = govtMediData.filter((institute)=> institute.key === type);
   const govtDent = govtDentData.filter((institute)=> institute.key === type);
   const pvtUni = pvtUniData.filter((institute)=> institute.key === type);
   const pvtMedi = pvtMediData.filter((institute)=> institute.key === type);
   const pvtDent = pvtDentData.filter((institute)=> institute.key === type);

   return [...banSchool, ...engSchool,...college,...madrasa,...govtUni,...govtMedi,...govtDent,...pvtUni,...pvtMedi,...pvtDent].filter(institute => institute !== undefined)
 }
 function getAllInstituteByType(type) {
   const banSchool= banSchoolData.filter((institute)=> institute.institutionType === type);
   const engSchool = engSchoolData.filter((institute)=> institute.institutionType === type);
   const college = collegeData.filter((institute)=> institute.institutionType === type);
   const madrasa = madrashaData.filter((institute)=> institute.institutionType === type);
   const govtUni = govtUniData.filter((institute)=> institute.institutionType === type);
   const govtMedi = govtMediData.filter((institute)=> institute.institutionType === type);
   const govtDent = govtDentData.filter((institute)=> institute.institutionType === type);
   const pvtUni = pvtUniData.filter((institute)=> institute.institutionType === type);
   const pvtMedi = pvtMediData.filter((institute)=> institute.institutionType === type);
   const pvtDent = pvtDentData.filter((institute)=> institute.institutionType === type);

   return [...banSchool, ...engSchool,...college,...madrasa,...govtUni,...govtMedi,...govtDent,...pvtUni,...pvtMedi,...pvtDent].filter(institute => institute !== undefined)
 }

 function getAllInstituteNameByType(type){

   const data = getFilterData('institutionType', type);


   return data.map(item => item.name);
 }

function getAllSchoolNames() {
  const banSchoolNames = banSchoolData.map((school) => school.name);
  const engSchoolNames = engSchoolData.map((school) => school.name);

  return [...banSchoolNames, ...engSchoolNames];
}

function getAllSchoolEiins() {
  const banSchoolEiins = banSchoolData.map((school)=> school.eiin);
  const engSchoolEiins = engSchoolData.map((school)=> school.eiin);

  return [...banSchoolEiins, ...engSchoolEiins]
}

function getAllSchoolByVersion(version) {
  const banSchool= banSchoolData.filter((school)=> school.version === version);
  const engSchool = engSchoolData.filter((school)=> school.version === version);

  return [...banSchool, ...engSchool].filter(school => school !== undefined)
}

function getAllNameSchoolByVersion(version) {
  const banSchool= banSchoolData.filter((school)=> school.version === version).map((school)=> school.name);
  const engSchool = engSchoolData.filter((school)=> school.version === version).map((school)=> school.name);

  return [...banSchool, ...engSchool].filter(school => school !== undefined)
}

function getAllSchoolEiinByVersion(version) {
  const banSchool= banSchoolData.filter((school)=> school.version === version).map((school)=> school.eiin);
  const engSchool = engSchoolData.filter((school)=> school.version === version).map((school)=> school.eiin);

  return [...banSchool, ...engSchool].filter(school => school !== undefined)
}
//
function getSchoolByEiin(eiin) {
  const banSchoolName = banSchoolData.find((school) => school.eiin === eiin);
  const engSchoolName = engSchoolData.find((school) => school.eiin === eiin)

  return [banSchoolName, engSchoolName].filter(school => school !== undefined);
}

function getSchoolNameByEiin(eiin) {
  const banSchool = banSchoolData.find((school) => school.eiin === eiin);
  const engSchool = engSchoolData.find((school) => school.eiin === eiin);

  const data = [banSchool, engSchool].filter(school => school !== undefined);
  return data[0].name
 }



function getSchoolByName(name) {
  const banSchoolName = banSchoolData.find((school) => school.name === name);
  const engSchoolName = engSchoolData.find((school) => school.name === name)

  return [banSchoolName, engSchoolName].filter(school => school !== undefined);
}

function ge() {

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
  getFilterData
  // getAllCollege,
  // getAllCollegeName
};
