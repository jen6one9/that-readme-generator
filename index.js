var inquirer = require ("inquirer");

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
        message: "What is your Table of Contents?",
        name: "Table of Contents"

    },

    {
        type: "input",
        message: "How do you install your app?",
        name: "Installation"

    },

    {
        type: "input",
        message: "How do you use your app?",
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
    {  type: "input",
        message: "Tests",
        name: "Tests" 

    },
    {
        type: "input",
        message: "Questions",
        name: "Questions"

    },
])