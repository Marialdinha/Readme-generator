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
  - [Description](#description)
  - [License](#license)
  - [Installation](#installation)
  - [Usage](#usage)
  - [How to Run](#run)
  - [Who Contributed](#contributed)
  - [Test](#test)
  - [Questions](#questions)
 
  ## Description
  ${answers.description}

  ## License
  ${renderLicenseBadge(answers.license)}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Run
  ${answers.runProg}

  ## Contributed
  ${answers.contributed}

  ## Test
  ${answers.test}

  ## Questions
  Repoistoy link: https://github.com/${answers.userName}/${answers.repository} <br /> 
  Video link: ${answers.video} <br /> 
  You can contact me via email: ${answers.email}
`;
}

module.exports = generateMarkdown;
