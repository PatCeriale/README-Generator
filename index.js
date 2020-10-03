// npm init
// install dependencies -inquirer

// TODO: require all dependencies (inquirer, fs)
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// Use inquirer to prompt users with questions
inquirer
  .prompt([
    // array of questions for user
    {
      type: "input",
      message: "Enter your project name:",
      name: "title",
    },
    {
      type: "input",
      message: "What is the description for this project?",
      name: "description",
    },
    {
      type: "input",
      message:
        "Describe how to install the programs needed for this application:",
      name: "installation",
    },
    {
      type: "input",
      message: "Describe how the user is to use this application:",
      name: "usage",
    },
    {
      type: "list",
      choices: ["MIT", "GPLv3", "Apache", "Unlicense", "ISC", "None"],
      message: "Please list any licenses associated with this application:",
      name: "license",
    },
    {
      type: "input",
      message: "Describe how you would like to deal with contributions:",
      name: "contributing",
    },
    {
      type: "input",
      message: "Commands needed to run the test suite, if any:",
      name: "tests",
    },
    {
      type: "input",
      message: "GitHub username:",
      name: "gitHub",
    },
    {
      type: "input",
      message: "Email address:",
      name: "email",
    },
    {
      type: "input",
      message: "Please attach a preview of this project",
      name: "preview",
    },
  ])
  // Use answers that come back from inquirer - pass those to generate README function
  .then(function (response) {
    const mdString = generateMarkdown(response);
    console.log(response);
    console.log(mdString);
    // Write file using template generated from README function
    fs.writeFileSync("README.md", mdString, "utf8");
  });

// const questions = [];
// // function to initialize program
// function init() {}

// // function call to initialize program
// init();
