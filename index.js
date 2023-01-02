// includes the fs module for writing files
// includes the inquirer package to capture user input
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message:
      "Ready to make the perfect README! Lets start with your full name:",
  },
  {
    type: "input",
    name: "user",
    message: "Nice, so whats your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Cool cool, whats your email address:",
  },
  {
    type: "input",
    name: "title",
    message:
      "Now that we got some basic info, what do you want to title your ReadMe:",
  },
  {
    type: "input",
    name: "description",
    message: "How would you describe your project:",
  },
  {
    type: "input",
    name: "install",
    message: "Tell us how you would install this project:",
  },
  {
    type: "input",
    name: "usage",
    message: "Describe the usage of this project:",
  },
  {
    type: "input",
    name: "contribution",
    message: "Explain how the contribution guidlines work for this project:",
  },
  {
    type: "input",
    name: "test",
    message: "test:",
  },
  {
    type: "list",
    name: "license",
    choices: [
      "Apache",
      "BSD 2-Clause",
      "BSD 3-Clause",
      "Boost",
      "GNU LGPL",
      "GNU AGPL",
      "GNU GPL v2",
      "GNU GPL v3",
      "MIT",
      "Mozilla",
      "Unlicense",
      "none",
    ],
    default: 'MIT'
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions);
}

// Function call to initialize app
init();
