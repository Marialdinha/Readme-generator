// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
    {
      type: 'password',
      message: 'Enter a password',
      name: 'password1',
    },
    {
      type: 'password',
      message: 'Enter a masked password',
      name: 'password2',
      mask: '*',
    },
  ])
  .then((answers) => console.log(JSON.stringify(answers, null, '  ')));
}

// Function call to initialize app
init();


//  import current directory
// import { cwd } from 'node:process';
