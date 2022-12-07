// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

// node modules
const inquirer = require("inquirer");
const fs = require("fs");

// employee classes
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const { listenerCount } = require("process");

// team array
const teamArray = [];

// manager prompts
const createManager = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "\u001b[31;1mWhat's your team manager's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("\u001b[34;1m Please enter the manager's name!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: "\u001b[31;1mWhat's your team manager's ID?",
      },
      {
        type: 'input',
        name: 'email',
        message: "\u001b[31;1mWhat's your team manager's email address?",
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "\u001b[31;1mWhat's your team manager's office number?",
      },
      {
        type: 'confirm',
        name: 'role',
        message: "\u001b[31;1mWould you like to add another employee?",
        choices: ['Yes', "Nope, I'm done"],
        validate: roleInput => {
            if (roleInput === "Nope, I'm done") {
                return
            }
        }
    },
    ])
    .then(managerInput => {
        console.log(
`\u001b[34;1m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          \u001b[35;1mAdded to the team!
\u001b[34;1m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);        
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager(name, id, email, officeNumber);
        teamArray.push(manager)
    });
};

const newEmployee = () => {

return inquirer.prompt ([
    {
        type: 'list',
        name: 'role',
        message: "\u001b[31;1mWould you like to add another employee?",
        choices: ['Intern', 'Engineer', "Nope, I'm done"],
        validate: roleInput => {
            if (roleInput === "Nope, I'm done") {
                return
            }
        }
    },
    {
        type: 'input',
        name: 'name',
        message: "\u001b[31;1mWhat's your employees name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "\u001b[31;1mWhat's your employees ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "\u001b[31;1mWhat's your employees email address?",
    },
    {
        type: 'input',
        name: 'school',
        message: "\u001b[31;1mWhere did your employee go to school?",
        when: (input) => input.role === 'Intern'
    },
    {
        type: 'input',
        name: 'github',
        message: "\u001b[31;1mWhat's your employees GitHub username?",
        when: (input) => input.role === 'Engineer'
    }
])
.then(employeeInfo => {
    let { name, id, email, role, github, school, } = employeeInfo
})
}


// write html file




createManager()
    .then(newEmployee)
    // .then(teamArray => {
    //     return generateHTML(teamArray);
    // })
    // .then()