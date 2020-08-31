var inquirer = require("inquirer");
const fs = require('fs');
// const util = require('util');

// Prompt the user with questions
inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "Title"
            // console.log(response.title)

        },
        {
            type: "input",
            message: "Describe your project and its features.",
            name: "Description"
            // console.log(response.description)



        },
        {
            type: "input",
            message: "Provide detailed instructions for installing your app.",
            name: "Installation"
            // console.log(response.installation)

        },

        {
            type: "input",
            message: "Please provide usage information for your app.",
            name: "Usage"
            // console.log(response.usage)

        },
        {
            type: "input",
            message: "Do you have license info?",
            name: "License"
            // console.log(response.license)

        },
        {
            type: "input",
            message: "Are there any contributors you want to recognize?",
            name: "Contributions"
            // console.log(response.contributions)

        },
        {
            type: "input",
            message: "What tests can be used to run this application?",
            name: "Tests"
            // console.log(response.tests)

        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "GitHubUser",
            default: "jen6one9"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "Email",
            default: "diesta.jeneth@gmail.com"

        }
    ])

    .then(function (response) {
        console.log(response);
        var READMEdata = `
# ${response.Title}

## Developer Profile
https://github.com/${response.GitHubUser}

## Description

${response.Description}
## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributions](#contributions)
5. [Tests](#tests)

## Installation
${response.Installation}

##  Usage
${response.Usage}

##  License
![GitHub license](https://img.shields.io/badge/license-${response.License}-blue.svg)


##  Contributions
${response.Contributions}

##  Tests
${response.Tests}

##  Questions
Please reach out to me with any questions via ${response.Email}`
        console.log(READMEdata);
        fs.writeFileSync("./README.md", READMEdata, function () {
            console.log("READMEgenerated");
        })
    })
    .catch(function (error) {
        console.log('error', error);


        // .then(function({ Title, Description, Installation, Usage, License, Contributions, Tests, GitHubUser,Email}) {

    });


