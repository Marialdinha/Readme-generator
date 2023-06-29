// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
let licenseBadge;

if (license === "MIT" ){
  licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
} else if (license === "Apache") {
  licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
} else if (license === "Mozilla") {
  licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
} else {
   licenseBadge = ""
}

return licenseBadge;
}


// Function to generate markdown for README
function generateMarkdown(answers) {
  console.log(answers)
  return `

  # ${answers.projectName} 

  ## Table of Contents
  - [Project Description](#Description)
  - [License](#License)
  - [Installation Instructions](#Installation)
  - [Questions](#Questions)
 
  ## Description
  ${answers.description}

  ## License
  ${renderLicenseBadge(answers.license)}

  ## Installation
  ${answers.installation}

  ## Questions
  Repoistoy link: https://github.com/${answers.userName}/${answers.repository}
  You can contact me via email: ${answers.email}
`;
}

module.exports = generateMarkdown;
