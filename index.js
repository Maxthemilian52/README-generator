const path = require("path")
const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require("generateREADME");



const questions = [
    {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
    },
    {
    type: 'input',
    name: 'location',
    message: 'Where are you from?',
    },
    {
    type: 'input',
    name: 'project',
    message: 'What is your project called?',
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
    name: 'github',
    message: 'Enter your GitHub Username',
    },
    {
    type: 'input',
    name: 'linkedin',
    message: 'Enter your LinkedIn URL.',
    },
  ];

  
