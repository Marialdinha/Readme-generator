// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { error } = require('console');


// Array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your project name?',
    name: 'projectName',
  },
  {
  type: 'input',
  message: 'What is your user name?',
  name: 'userName',
},
{
  type: 'input',
  message: 'Give a description of you project',
  name: 'description',
},
{
  type: 'list',
  message: "Choose your license:",
  choices: ["MIT", "Apache"],
  name: 'license',
},
{
  type: 'list',
  message: "Choose your license:",
  choices: ["MIT", "Apache"],
  name: 'license',
}
];


// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err)=>{
        if (err) {
          console.log("Error: ", err)
        }else{
          console.log("Success - File Created")
        }
  })
}

// Function to initialize app
function init() {

return inquirer.prompt(questions)
    .then((answers) => {
      const mark = generateMarkdown(answers)
      writeToFile("README.md",mark)
    })
    .catch((error) => {
      console.log(error)
    })
  }

// Function call to initialize app
init();
