const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");
const mysql = require("mysql");

require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.db_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database");
  start();
});
// prompt the user to choose from a list of options
function start() {
  inquirer
    .prompt({
      type: "list",
      name: "start",
      message: "What would you like to do?",
      choices: [
        "View all employees",
        "View all departments",
        "View all roles",
        "Add employee",
        "Add department",
        "Add role",
        "Update employee role",
        "Exit",
      ],
    })
    .then((answer) => {
      switch (answer.start) {
        case "View all employees":
          viewEmployees();
          break;

        case "View all departments":
          viewDepartments();
          break;

        case "View all roles":
          viewRoles();
          break;

        case "Add employee":
          addEmployee();
          break;

        case "Add department":
          addDepartment();
          break;

        case "Add role":
          addRole();
          break;

        case "Update employee role":
          updateEmployeeRole();
          break;

        case "Exit":
          db.end();
          break;
      }
    });
}
