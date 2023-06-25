// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { error } = require('console');


// TODO: Create an array of questions for user input
const questions = [
  {
  type: 'input',
  message: 'What is your name?',
  name: 'userName',
},
{
  type: 'input',
  message: 'What is your project name?',
  name: 'projectName',
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
}
{
  type: 'list',
  message: "Choose your license:",
  choices: ["MIT", "Apache"],
  name: 'license',
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err)=>{
        if (err) {
          console.log("Error: ", err)
        }else{
          console.log("Success - File Created")
        }
  })
}

// TODO: Create a function to initialize app
function init() {

return inquirer.prompt(questions)
    .then((answers) => {
      console.log(answers)
      const mark = generateMarkdown(answers)
      writeToFile("README.md",mark)
      console.log(mark)
      // return answers
    })
    .catch((error) => {
      console.log(error)
    })
  }

// Function call to initialize app
init();
