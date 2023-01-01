
const questions = [

    {
        type: `input`,
        name: `title`,
        question: `What is the title of your project?`,
        validate: (value) => {if(value){return true}else{return `Please provide a title`}}
    },
    {
        type: `input`,
        name: `description`,
        question: `What is the description of your project?`,
        validate: (value) => {if(value){return true}else{return `Please enter a description`}}
    },
    {
        type: `input`,
        name: `installation`,
        question: `What is the installation process?`,
        validate: (value) => {if(value){return true}else{return `Please enter the installation process`}}
    },
    {
        type: `input`,
        name: `usage`,
        question: `How is this project meant to be used?`,
        validate: (value) => {if(value){return true}else{return `Please provide uses`}}
    },
    {
        type: `input`,
        name: `contribution`,
        question: `How is this project meant to be used?`,
        validate: (value) => {if(value){return true}else{return `Please provide uses`}}
    },
    {
        type: `input`,
        name: `tests`,
        question: `How is this project meant to be used?`,
        validate: (value) => {if(value){return true}else{return `Please provide uses`}}
    },
    {
        type: `list`,
        name: `license`,
        question: `Which license are you using?`,
        validate: (value) => {if(value){return true}else{return `Please choose a license`}}
    },
    {
        type: `input`,
        name: `github`,
        question: `What is your github username?`,
        validate: (value) => {if(value){return true}else{return `Please provide your GitHub username`}}
    },
    {
        type: `input`,
        name: `email`,
        question: `What is your email address?`,
        validate: (value) => {if(value){return true}else{return `Please provide your email address`}}
    },    
];

module.exports = questions;