// function to generate markdown for README
function generateMarkdown(data) {
  return `# my name is : ${data.title}
  # my last name is ${data.LastName}

`;
}

module.exports = generateMarkdown;
