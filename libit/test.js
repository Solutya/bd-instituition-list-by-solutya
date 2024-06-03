const { getAllInstituteNames, getAllSchoolNames} = require("../index");

const runTest = async () => {
    try {
        console.log(getAllSchoolNames());
    } catch (error) {
        console.error("Error:", error);
    }
};

runTest();
