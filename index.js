// npm init
// install dependencies -iquirer
// TODO: ignore package lock?
// TODO: require all dependecies I'll need - inquirer, fs
// TODO: create array of questions
// TODO: *Write a README in markdown file to use as template*
// TODO: function that will generate my readme template
// TODO: Use inquirer to prompt users with questions
// TODO: use answers that come back from inquirer - pass those to generate README function
// TODO: write file using template generated from README function
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// array of questions for user
inquirer
  .prompt([
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
    // {
    //   type: "checkbox",
    //   message:
    //     "Please select the sections you want to include in your table of contents?",
    //   name: "tableOfContents",
    //   choices: [
    //     "title",
    //     "description",
    //     "installation",
    //     "usage",
    //     "license",
    //     "contributing",
    //     "tests",
    //     "questions",
    //     "preview",
    //   ],
    // },
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
      choices: ["MIT", "GPLv3", "Apache", "The Unlicense"],
      message: "Please list any licenses associated with this application:",
      name: "license",
    },
    {
      type: "input",
      message: "Please list any collaborators who took part in this project:",
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
      message: "Please attach the link to your preview picture",
      name: "preview",
    },
  ])
  .then(function (response) {
    const mdString = generateMarkdown(response);
    console.log(response);
    console.log(mdString);
    fs.writeFileSync("README.md", mdString, "utf8");
  });

const questions = [];

// function to write README file
// function writeReadme(response){
//    return "README.md",
//
//     function (err) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(
//           "README complete! Check the folder containing this file to view your new creation."
//         );
//       }
//     }
//   );
// }

// function to initialize program
function init() {}

// function call to initialize program
init();
