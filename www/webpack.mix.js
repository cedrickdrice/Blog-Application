const mix = require('laravel-mix');
const fs = require("fs");
const path = require("path");
const RESOURCE_JS = 'resources/js/';
const RESOURCE_SASS = 'resources/sass/';
    const RESOURCE_CSS = 'resources/css/';
    const PUBLIC_JS = 'public/js/';
    const PUBLIC_CSS = 'public/css/';

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

/**
 * Webpack
 * @info Use "\\" when running npm run production/development on Local PC
 * @info Use "/" when running npm run production/development on Docker
 */
// Function to fetch resource file name and directory
const getAllFiles = function(sDirPath, aArrayOfFiles) {
    let aFiles = fs.readdirSync(sDirPath);

    aArrayOfFiles = aArrayOfFiles || [];

    aFiles.forEach(function(sFile) {
        if (fs.statSync(sDirPath + path.sep + sFile).isDirectory()) {
            aArrayOfFiles = getAllFiles(sDirPath + path.sep + sFile, aArrayOfFiles);
        } else {
            let sFilteredDir = sDirPath.substring(sDirPath.indexOf('main'));
            aArrayOfFiles.push(path.join(sFilteredDir, sFile));
        }
    });
    return aArrayOfFiles;
};


// Compile default scripts and style
mix.vue()
    .js(RESOURCE_JS + 'app.js', PUBLIC_JS)
    .sass(RESOURCE_SASS + 'app.scss', PUBLIC_CSS);

// Compile internal scripts and styles
const resourceJS = getAllFiles(path.join(__dirname, RESOURCE_JS, 'main'));
const resourceSASS = getAllFiles(path.join(__dirname, RESOURCE_SASS, 'main'));
const resourceCSS = getAllFiles(path.join(__dirname, RESOURCE_CSS, 'main'));

resourceJS.forEach(function(sFile){
    mix.js(RESOURCE_JS + sFile, PUBLIC_JS + sFile.substring(0, sFile.lastIndexOf(path.sep)));
});
resourceSASS.forEach(function(sFile){
    mix.sass(RESOURCE_SASS + sFile, PUBLIC_CSS + sFile.substring(0, sFile.lastIndexOf(path.sep)));
});
resourceCSS.forEach(function(sFile){
    mix.postCss(RESOURCE_CSS + sFile, PUBLIC_CSS + sFile.substring(0, sFile.lastIndexOf(path.sep)));
});


