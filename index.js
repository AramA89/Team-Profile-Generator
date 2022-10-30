const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const writeToFile = require('./src/createHTML');
let employees = [];

function init() {
    userPick();
}

function getManager() {
    const managerQuest = [
        {
            type: "input",
            name: "name",
            message: "Enter Manager name"
        },
        {
            type: "input",
            name: "id",
            message: "Enter Manager id number"
        },
        {
            type: "input",
            name: "email",
            message: "Enter Manager email"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter Manager office number"
        },
    ];
    inquirer.prompt(managerQuest).then((data) => {
        const newManager = new Manager(
            data.name,
            data.id,
            data.email,
            data.officeNumber
        );
        employees.push(newManager);
        userPick();
    });
}

function getEngineer() {
    const engineerQuest = [
        {
            type: "input",
            name: "name",
            message: "Enter Engineer name"
        },
        {
            type: "input",
            name: "id",
            message: "Enter Engineer id number"
        },
        {
            type: "input",
            name: "email",
            message: "Enter Engineer email"
        },
        {
            type: "input",
            name: "github",
            message: "Enter Engineer github"
        },
    ];
    inquirer.prompt(engineerQuest).then((data) => {
        const newEngineer = new Engineer(
            data.name,
            data.id,
            data.email,
            data.github
        );
        employees.push(newEngineer);
        userPick();
    });
}

function getIntern() {
    const internQuest = [
        {
            type: "input",
            name: "name",
            message: "Enter Intern name"
        },
        {
            type: "input",
            name: "id",
            message: "Enter Intern id number"
        },
        {
            type: "input",
            name: "email",
            message: "Enter Intern email"
        },
        {
            type: "input",
            name: "school",
            message: "Enter Intern school"
        },
    ];
    inquirer.prompt(internQuest).then((data) => {
        const newIntern = new Intern(
            data.name,
            data.id,
            data.email,
            data.school
        );
        employees.push(newIntern);
        userPick();
    });
}

function userPick() {
    const userPick = [
        {
            type: "list",
            name: "newTeamMember",
            message: "Would you like to add a new team member?",
            choices: ["yes", "no"],
            filter(val) {
                return val.toLowerCase();
            },
        },
    ];
    inquirer.prompt(userPick).then((data) => {
        if (data.newTeamMember == "yes") {
            typeOfEmployee();
        } else writeToFile(__dirname + "./dist/team.html", employees);
    });
}

function typeOfEmployee() {
    const employeeType = [
        {
            type: "list",
            name: "employeeType",
            choices: ["Manager", "Engineer", "Intern"],
            filter(val) {
                return val.toLowerCase();
            },
        },
    ];
    inquirer.prompt(employeeType).then((data) => {
        if (data.employeeType == "manager") {
            getManager();
        } else if (data.employeeType == "engineer") {
            getEngineer();
        } else if (data.employeeType == "intern") {
            getIntern();
        } else writeToFile("team.html", employees);
    });
}

init();