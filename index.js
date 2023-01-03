// includes the fs module for writing files
// includes the inquirer package to capture user input
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
console.log("Ready to make the perfect README!");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Lets start with the title:",
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
    message:
      "Awesome sauce, so how can others can contribute to this project:",
  },
  {
    type: "input",
    name: "test",
    message: "How can we test this project:",
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
    default: "MIT",
  },
  {
    type: "input",
    name: "user",
    message: "Almost done, so whats your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Last question, whats your email address:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Congrats! The ReadMe file was successfully created!");
  });
}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions).then(function (userInput) {
    console.log(userInput);
    writeToFile("README.md", generateMarkdown(userInput));
  });
}

// Function call to initialize app
init();
