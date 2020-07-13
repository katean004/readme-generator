// function to generate markdown for README
function generateMarkdown(data) {
  let license = "";
  const mit = 'MIT License';
  const apache = 'Apache License 2.0';
  const gnu = 'GNU General Public License v3.0';
  const isc = 'ISC License';

  if(data.license = "MIT"){
    license = mit;
  }else if(data.license = "Apache"){
    license = apache;
  }else if(data.license = "GNU GPLv3"){
    license = gnu;
  }else if(data.license = "ISC"){
    license = isc;
  }

  return `

  # Title: ${data.title}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#test)
  - [License](#license)
  - [Questions](#questions)

  ## Description: 
  ${data.description}

  ## Installation: 
  ${data.installation}

  ## Usage: 
  ${data.usage}

  ## Contribution: 
  ${data.contribution}

  ## Test: 
  ${data.test}

  ## License: 
  ${license}

  ## Questions:
  - Github: https://github.com/${data.github}
  - Email: ${data.email}


  `;
}

module.exports = generateMarkdown;

