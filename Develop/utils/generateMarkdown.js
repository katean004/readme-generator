// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Table of Contents
  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [Contribution](#contribution)
  [Test](#test)
  [License](#license)
  [Questions](#questions)

  
  # Project Title: ${data.title}

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
  ${data.license}

  ## Questions:
  - Github username: ${data.github}
  - Github link: https://github.com/${data.github}
  - Email: ${data.email}


  `;
}

module.exports = generateMarkdown;
