// includes the fs module for writing files
// includes the inquirer package to capture user input
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
{
type: 'input',
name: 'name',
message: 'Welcome to the perfect README generator! What is your full name:',

}



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init();

