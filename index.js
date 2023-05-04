const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");
const generateTeam = require('./src/template');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const team = [];
addToTeam();

function addToTeam() {
inquirer
    .prompt([
        {
            type: 'list',
            message: 'What kind of employee would you like to add?',
            name: 'employeeStart',
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "I'm finished"
            ]
        },
    ]).then(function(data) {
        const employeeRole = data.employeeStart;
        if (employeeRole === "Manager") {
            managerInfo();
        }
        else if (employeeRole === "Engineer") {
            engineerInfo();
        }
        else if (employeeRole === "Intern") {
            internInfo();
        }
        else if (employeeRole === "I'm finished") {
            renderTeam();
        }
    })
}

function managerInfo() {
    inquirer
        .prompt([
          {
            type: "input",
            name: "managerName",
            message: "What is the Manager's name: "
          },
          {
            type: "input",
            name: "managerId",
            message: "What is the manager's ID: "
          },
          {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's Email: "
          },
          {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the manager's office number: "
          }
        ]).then(function(data) {
            const manager = new Manager(
              data.managerName, 
              data.managerId, 
              data.managerEmail, 
              data.managerOfficeNumber);
            team.push(manager);
            addToTeam();
        })
}

function engineerInfo() {
    inquirer
        .prompt([
          {
            type: "input",
            name: "engineerName",
            message: "What is the Engineer's name: "
          },
          {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's ID: "
          },
          {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's Email: "
          },
          {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's GitHub: "
          }
        ]).then(function(data) {
            const engineer = new Engineer(
              data.engineerName, 
              data.engineerId, 
              data.engineerEmail, 
              data.engineerGithub);
            team.push(engineer);
            addToTeam();
        })
}

function internInfo() {
    inquirer
        .prompt([
          {
            type: "input",
            name: "internName",
            message: "What is the Intern's name: "
          },
          {
            type: "input",
            name: "internId",
            message: "What is the intern's ID: "
          },
          {
            type: "input",
            name: "internEmail",
            message: "What is the intern's Email: "
          },
          {
            type: "input",
            name: "internSchool",
            message: "What is the intern's school: "
          }
        ]).then(function(data) {
            const intern = new Intern(
              data.internName, 
              data.internId, 
              data.internEmail, 
              data.internSchool);
            team.push(intern);
            addToTeam();
        })
}

function renderTeam(){
  fs.writeFileSync(outputPath, generateTeam(team))
}
