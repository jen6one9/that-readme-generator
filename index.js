var inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "Title"

        },
        {
            type: "input",
            message: "Describe your project and its features.",
            name: "Description"

        },
        {
            type: "input",
            message: "Provide detailed instructions for installing your app.",
            name: "Installation"

        },

        {
            type: "input",
            message: "Please provide usage information for your app.",
            name: "Usage"

        },
        {
            type: "input",
            message: "Do you have license info?",
            name: "License"

        },
        {
            type: "input",
            message: "Are there any contributors you want to recognize?",
            name: "Contributions"

        },
        {
            type: "input",
            message: "What tests can be used to run this application?",
            name: "Tests"

        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "GitHubUser",
            default: "github.com/jen6one9"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "Email",
            default: "diesta.jeneth@gmail.com"

        },
    ])