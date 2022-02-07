// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');

// TODO: Create an array of questions for user input
  const promptProject = projectData => {
    console.log();
    // If there's no 'projects' array property, create one
    if (!projectData.projects) {
      projectData.projects = [];
    }
    return inquirer
      .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter the title of your project.');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'description',
            message: 'What does your project do?',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter a description of your project.');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'installation',
            message: 'How do I install your project?',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter installation instructions.');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'usage',
            message: 'What is the usage information for this project?',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter the usage information for this project.');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'contribution',
            message: 'What are your contribution guidelines?',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter your contribution guidelines.');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'test',
            message: 'How do your test install your project?',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter how to test install your project.');
                return false;
              }
            }
          },
          {
            type: 'checkbox',
            name: 'licenses',
            message: 'What licenses are required for your project?',
            choices: ['Apache License 2.0','GNU GPLv3','MIT', 'ISC']
          },
          {
            type: 'input',
            name: 'gitname',
            message: 'What is your GitHub username?',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter your GitHub username.');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'gitname',
            message: 'What is your GitHub username?',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter your GitHub username.');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter your email address.');
                return false;
              }
            }
          },
      ])
      .then(projectData => {
        projectData.projects.push(projectData);
        if (projectData.confirmAddProject) {
          return promptProject(projectData);
        } else {
          return projectData;
        }
      });
  };



  promptUser()
  .then(projectData => {
    return generatePage(projectData);
  })
  .then(READMEmd => {
    return writeFile(READMEmd);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });