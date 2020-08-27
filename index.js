var inquirer = require ("inquirer");

inquirer
.prompt([
    {
        type: "input",
        message: "What is your title?",
        name: "Title"

    },
    {
        type: "input",
        message: "What is your description?",
        name: "description"

    },

    {
        type: "input",
        message: "What is your Table of Contents?",
        name: "table of contents"

    },

    {
        type: "input",
        message: "How do you install your app?",
        name: "installation"

    },

    {
        type: "input",
        message: "How do you use your app?",
        name: "usage"

    },
    {
        type: "input",
        message: "Do you have license info?",
        name: "usage"

    },
    {
        type: "input",
        message: "Any Contributors you want to document?",
        name: "usage"

    },
    {
        type: "input",
        message: "Tests",
        name: "usage"

    },
    {
        type: "input",
        message: "Questions",
        name: "usage"

    },
])
.then(function(response) {

    console.log(name);
      });