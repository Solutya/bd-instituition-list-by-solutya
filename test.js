const { getAllInstituteNames, getAllCollegeNames, getAllInstitute, getAllCollege,getAllInstituteByType,getAllInstituteNameByType,getAllSchools, getUniByShortName, getAllUniNames } = require("./index");

const runTest = async () => {
    try {
        const schoolNames = await getAllUniNames();
        console.log(schoolNames);
    } catch (error) {
        console.error("Error:", error);
    }
};

runTest();
