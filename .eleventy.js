
//add in the ability to add files via file structure and node
const fs = require('fs');
const path = require('path');

function getFilesInFolder(folderPath) {
    try {
        //get all file names in the folder path
        const files = fs.readdirSync(folderPath);

        //for each file reformat to the path
        return files.map(file => path.join(folderPath, file));
    } catch (err) {
        console.log("Error in finding files within " + folderPath);
    }
};











//assign the module exports
module.exports = function (eleventyConfig) {

    //add all css files to the passthrough
    getFilesInFolder("./src/css/").forEach(element => {
        eleventyConfig.addPassthroughCopy(element);
    });

    //add all fonts to the passthrough
    getFilesInFolder("./src/fonts/").forEach(element => {
        eleventyConfig.addPassthroughCopy(element);
    });

    //add all javascript files to the passthrough
    getFilesInFolder("./src/js/").forEach(element => {
        eleventyConfig.addPassthroughCopy(element);
    });
    

    return {
        dir: {
            input: "src",
            output: "docs",
        }
    };
};