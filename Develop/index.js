// require npm and file
const inquirer = require("inquirer")
const fs= require("fs")
const generateMarkdown = require("./utils/generateMarkdown")

// Array of questions for user
const questions = [
    {
        type:"input",
        name:"title",
        message:"What is the title of your project?"
    },
    {
        type:"input",
        name:"description",
        message:"What is the description of your project?"
    },
    {
        type:"input",
        name:"installation",
        message:"What are the instructions to install your application?"
    },
    {
        type:"input",
        name:"usage",
        message:"How to use your application?"
    },
    {
        type:"input",
        name:"contribution",
        message:"How can people make contributions to your application?"
    },
    {
        type:"input",
        name:"test",
        message:"How to make a test?"
    },
    {
        type:"list",
        name:"license",
        message:"Which license does your application need?",
        choices: ["a","b","c","d"]
    },
    {
        type:"input",
        name:"github",
        message:"What is your Github username?"
    },
    {
        type:"input",
        name:"email",
        message:"What is your email address?"
    },
];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName,data, function(err){
        if (err){
            return console.log(err);
            
        }
        console.log("Done");
        
    })

}

// function to initialize program
function init() {



    inquirer.prompt(questions).then(function(answers){
        console.log(answers);
        writeToFile("readMe1.md",generateMarkdown(answers))
    })
    
}

// function call to initialize program
init();
