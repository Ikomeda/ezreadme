const fs = require('fs');
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./utils/questions');

function writeToFile(fileName, data) {
    const fileData = generateMarkdown(data);
    fs.writeFile(fileName, fileData, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log(`Successfully generated README file`)
    });
}

function init() {
    inquirer.prompt(questions)
    .then((answers) => writeToFile('README.md', answers));
}

// Function call to initialize app
init();
