const path = require("path")
const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require("./generateREADME");



const questions = [
    {
    type: 'input',
    name: 'name',
    message: 'What is your full name name?',
    },
    {
    type: 'input',
    name: 'project',
    message: 'What is your project called?',
    },
    {
    type: 'list',
    name: 'license',
    message: 'What licence are you using?',
    choices: ["MIT", "APACHE", "GPL", "None"]
      },
    {
    type: 'input',
    name: 'motivation',
    message: 'What was your motivation?',
    },
    {
    type: 'input',
    name: 'why',
    message: 'Why did you build this project?',
    },
    {
    type: 'input',
    name: 'learn',
    message: 'What did you learn by building this project?',
    },
    {
    type: 'input',
    name: 'standOut',
    message: 'What makes your project stand out?',
    },
    {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    },
    {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username',
    },
    {
    type: 'input',
    name: 'linkedin',
    message: 'Enter your LinkedIn URL.',
    },
  ];

  function writeFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
  }
  
  function create() {
    inquirer.prompt(questions).then((inquirerResponses) => {
      console.log("Your README has been generated!");
      writeFile("README.md", generateREADME({...inquirerResponses}))
    })
  }

  create();
