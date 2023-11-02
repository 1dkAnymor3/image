// only run this in codespaces using 'node getImg.js' in the terminal

function getFileNamesFromFolder(folderName)
{
    const fs = require("fs"); //import fs library
    return fs.readdirSync(folderName, {withFileTypes: true})
    .filter(item => !item.isDirectory())
    .map(item => item.name);
}

function writeJsonFile(jsonFileName, modifiedJson)
{
    const fs = require("fs");
    fs.writeFile(jsonFileName, JSON.stringify(modifiedJson, null, 2), function writeJSON(err) {
        if (err) return console.log(err);
        console.log(JSON.stringify(modifiedJson, null, 2));
        console.log('writing to ' + jsonFileName);
      });
}

const imgFolder = "./img/";
const jsonFile = "./allImg.json";
const saidJson = require(jsonFile);
let imgFiles = getFileNamesFromFolder(imgFolder);

saidJson.key = imgFiles;
    
writeJsonFile(jsonFile, saidJson);