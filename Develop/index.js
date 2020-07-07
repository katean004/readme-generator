const inquirer = require("inquirer")
const fs= require("fs")
const generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [
    {
        type:"input",
        name:"title",
        message:"What's your name?"
    },
    {
        type:"input",
        name:"LastName",
        message:"What's your last name?"
    }
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
