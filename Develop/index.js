// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "title",
      message: "What is the title?",
    },
    {
      type: "input",
      name: "description",
      message: "Provide description:",
    },
    {
      type: "list",
      name: "license",
      message: "Licence:",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
      type: "input",
      name: "installation",
      message: "Command to install dependencies:",
    },
    {
      type: "input",
      name:"test",
      message: "Command to run tests:",
    },
    {
      type: "input",
      name: "usage",
      message: "Enter any usage info:",
    },
    {
      type: "input",
      name: "contributing",
      message: "Enter contributing info:",
    },
  ]
  

// TODO: Create a function to write README file
function writeReadme(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data)
  }
  

// TODO: Create a function to initialize app
function start() {
    inquirer.prompt(questions).then((answers) => {
      writeReadme("README.md", generateMarkdown({...answers}))
    });
  }

start();