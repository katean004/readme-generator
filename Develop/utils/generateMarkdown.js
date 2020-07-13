// function to generate markdown for README
function generateMarkdown(data) {
  return `# Project Title: ${data.title}
  ## Project Description: ${data.description}
  ## Installation instructions: ${data.installation}
  ## Usage instructions: ${data.usage}
  ## Contribution Guidelines: ${data.contribution}
  ## Test: ${data.test}
  ## License: ${data.license}
  ## Questions:
  - Github: ${data.github}
  - Email: ${data.email}


  `;
}

module.exports = generateMarkdown;
