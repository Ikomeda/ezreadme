// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./utils/questions');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fileData = generateMarkdown(data);
    fs.writeFile(fileName, fileData, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log(`Successfully generated README file`)
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => writeToFile('README.md', answers));
}

// Function call to initialize app
init();
