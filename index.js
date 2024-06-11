// const urls = {
//     banSchoolData: 'https://package-solutya.vercel.app/data/bd_schoolName_data.json',
//     collegeData: 'https://package-solutya.vercel.app/data/bd_collegeName_data.json',
//     madrashaData: 'https://package-solutya.vercel.app/data/bd_madrashaName_data.json',
//     govtUniData: 'https://package-solutya.vercel.app/data/public_Uni_data.json',
//     engSchoolData: 'https://package-solutya.vercel.app/data/english_medium_data.json',
//     pvtUniData: 'https://package-solutya.vercel.app/data/private_Uni_data.json',
//     nuData: 'https://package-solutya.vercel.app/data/nu_Uni_data.json',
// };

// async function fetchData(url) {
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return await response.json();
//     } catch (error) {
//         console.error(`Error fetching data from ${url}:`, error);
//         return null;
//     }
// }

// async function getAllData() {
//     const dataPromises = Object.values(urls).map(fetchData);
//     const [
//         banSchoolData,
//         collegeData,
//         madrashaData,
//         govtUniData,
//         engSchoolData,
//         pvtUniData,
//         nuData
//     ] = await Promise.all(dataPromises);
//     return {
//         banSchoolData: banSchoolData || [],
//         collegeData: collegeData || [],
//         madrashaData: madrashaData || [],
//         govtUniData: govtUniData || [],
//         engSchoolData: engSchoolData || [],
//         pvtUniData: pvtUniData || [],
//         nuData: nuData || []
//     };
// }

// General Helper Functions

const urls = {
    banSchoolData: 'https://bd-institution-data.solutya.com/data/bd_schoolName_data.json',
    collegeData: 'https://bd-institution-data.solutya.com/data/bd_collegeName_data.json',
    madrashaData: 'https://bd-institution-data.solutya.com/data/bd_madrashaName_data.json',
    govtUniData: 'https://bd-institution-data.solutya.com/data/public_Uni_data.json',
    engSchoolData: 'https://bd-institution-data.solutya.com/data/english_medium_data.json',
    pvtUniData: 'https://bd-institution-data.solutya.com/data/private_Uni_data.json',
    nuData: 'https://bd-institution-data.solutya.com/data/nu_Uni_data.json',
};

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        return null;
    }
}

function getCacheKey(url) {
    return `cache_${url}`;
}

function setCache(url, data) {
    const cacheKey = getCacheKey(url);
    const cacheData = {
        timestamp: Date.now(),
        data: data
    };
    localStorage.setItem(cacheKey, JSON.stringify(cacheData));
}

function getCache(url, maxAge = 3600000) { // maxAge in milliseconds (1 hour default)
    const cacheKey = getCacheKey(url);
    const cacheData = JSON.parse(localStorage.getItem(cacheKey));
    if (cacheData) {
        const isCacheValid = (Date.now() - cacheData.timestamp) < maxAge;
        if (isCacheValid) {
            return cacheData.data;
        } else {
            localStorage.removeItem(cacheKey);
        }
    }
    return null;
}

async function fetchWithCache(url) {
    const cachedData = getCache(url);
    if (cachedData) {
        return cachedData;
    } else {
        const data = await fetchData(url);
        if (data) {
            setCache(url, data);
        }
        return data;
    }
}

async function getAllData() {
    const dataPromises = Object.values(urls).map(fetchWithCache);
    const [
        banSchoolData,
        collegeData,
        madrashaData,
        govtUniData,
        engSchoolData,
        pvtUniData,
        nuData
    ] = await Promise.all(dataPromises);
    return {
        banSchoolData: banSchoolData || [],
        collegeData: collegeData || [],
        madrashaData: madrashaData || [],
        govtUniData: govtUniData || [],
        engSchoolData: engSchoolData || [],
        pvtUniData: pvtUniData || [],
        nuData: nuData || []
    };
}
async function getAllInstitute() {
    const {
        banSchoolData,
        engSchoolData,
        madrashaData,
        collegeData,
        govtUniData,
        pvtUniData,
        nuData
    } = await getAllData();
    return [
        ...banSchoolData,
        ...engSchoolData,
        ...madrashaData,
        ...collegeData,
        ...govtUniData,
        ...pvtUniData,
        ...nuData
    ];
}

async function getAllInstituteNames() {
    const allInstitutes = await getAllInstitute();
    return allInstitutes.map(data => data.name);
}

async function getFilterData(key, type) {
    const allInstitutes = await getAllInstitute();
    return allInstitutes.filter(item => item[key] === type);
}

async function getAllInstituteByType(type) {
    return await getFilterData('institutionType', type);
}

async function getAllInstituteNameByType(type) {
    const filteredData = await getFilterData('institutionType', type);
    return filteredData.map(item => item.name);
}

// School-specific Functions
async function getAllSchools() {
    const {
        banSchoolData,
        engSchoolData,
        madrashaData
    } = await getAllData();
    return [
        ...banSchoolData,
        ...engSchoolData,
        ...madrashaData
    ];
}

async function getAllSchoolNames() {
    const allSchools = await getAllSchools();
    return allSchools.map(school => school.name);
}

async function getAllSchoolByVersion(version) {
    const allSchools = await getAllSchools();
    return allSchools.filter(item => item.version === version);
}

async function getAllSchoolNameByVersion(version) {
    const allSchools = await getAllSchools();
    return allSchools.filter(item => item.version === version).map(school => school.name);
}

async function getSchoolByEiin(eiin) {
    const allSchools = await getAllSchools();
    return allSchools.filter(item => item.eiin === eiin);
}

async function getSchoolNameByEiin(eiin) {
    const allSchools = await getAllSchools();
    return allSchools.filter(item => item.eiin === eiin).map(school => school.name);
}

async function getSchoolByName(name) {
    const allSchools = await getAllSchools();
    return allSchools.filter(item => item.name === name);
}

// College-specific Functions
async function getAllCollege() {
    const { collegeData } = await getAllData();
    return collegeData;
}

async function getAllCollegeNames() {
    const allColleges = await getAllCollege();
    return allColleges.map(item => item.name);
}

async function getCollegeByEiin(eiin) {
    const allColleges = await getAllCollege();
    return allColleges.filter(item => item.eiin === eiin);
}

async function getCollegeNameByEiin(eiin) {
    const allColleges = await getAllCollege();
    return allColleges.filter(item => item.eiin === eiin).map(college => college.name);
}

async function getCollegeByName(name) {
    const allColleges = await getAllCollege();
    return allColleges.filter(item => item.name === name);
}

// University-specific Functions
async function getAllUnis() {
    const {
        govtUniData,
        pvtUniData,
        nuData
    } = await getAllData();
    return [
        ...govtUniData,
        ...pvtUniData,
        ...nuData
    ];
}

async function getAllUniNames() {
    const allUnis = await getAllUnis();
    return allUnis.map(item => item.name);
}

async function getUniByName(name) {
    const allUnis = await getAllUnis();
    return allUnis.filter(item => item.name === name);
}

async function getUniByShortName(shortName) {
    const allUnis = await getAllUnis();
    return allUnis.filter(item => item.shortName === shortName);
}

async function getUniNameByShortName(shortName) {
    const allUnis = await getAllUnis();
    return allUnis.filter(item => item.shortName === shortName).map(unis => unis.name);
}

async function getAllUniByCategory(category) {
    const allUnis = await getAllUnis();
    return allUnis.filter(item => item.category === category);
}

async function getAllUniNameByCategory(category) {
    const allUnis = await getAllUnis();
    return allUnis.filter(item => item.category === category).map(unis => unis.name);
}

async function getAllUnisByDepartment(department) {
    const allUnis = await getAllUnis();
    return allUnis.filter(item => item.department === department);
}

async function getAllUniNameByDepartment(department) {
    const allUnis = await getAllUnis();
    return allUnis.filter(item => item.department === department).map(unis => unis.name);
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
