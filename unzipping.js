const AdmZip = require('adm-zip');
const path = require('path');

let cache = {};

// Load the zip file
const zip = new AdmZip(path.join(__dirname, 'data.zip'));

// Helper function to read and parse JSON files from the zip with caching
const readJsonFromZip = (filePath) => {
    if (cache[filePath]) {
        return cache[filePath];
    }

    const fileEntry = zip.getEntry(filePath);
    if (fileEntry) {
        const fileContent = fileEntry.getData().toString('utf8');
        const jsonData = JSON.parse(fileContent);
        cache[filePath] = jsonData; // Cache the parsed data
        return jsonData;
    }
    throw new Error(`File ${filePath} not found in zip`);
};

// Export the readJsonFromZip function
module.exports = readJsonFromZip;
