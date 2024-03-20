const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

function promptUserInfo(){
    return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "What is your Github user?"
        },
        {
            type: "input",
            name: "description",
            message: "What is your project about?"
        },
        {
            type: "input",
            name: "title",
            message: "What is your project's name?"
        },
        {
            type: "input",
            name: "description",
            message: "Describe your project"
        },
        {
            type: "input",
            name: "installation",
            message: "How can we install your project?"
        },
        {
            type: "input",
            name: "usage",
            message: "How can we use this?"
        },
        {
            type: "input",
            name: "credits",
            message: "If you want to give some credit, list them here."
        },
        {
            type: "list",
            name: "licence",
            message: "Include a license",
            choices: ["MIT", "APACHE 2.0", "GPL v3, BSD 3", "None"]
        },
        {
            type: "input",
            name: "testing",
            message: "How can we run a test?"
        },

    ]);
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, "utf8", function(err){
        if(err) {
            throw err;
        }
        console.log("Now you have a README file :)")
    })
}

async function init() {
    try {
        const userAnswers = await promptUserInfo();
        generateMarkdown(userAnswers);
        writeToFile("README.md", generateMarkdown(userAnswers));
        console.log("SUCCESS!");
    } catch(err) {
        console.log(err);
    }
};

init();