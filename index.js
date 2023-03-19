const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");

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

// View all employees
function viewEmployees() {
  db.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    console.table(res);
    start();
  });
}

// View all departments
function viewDepartments() {
  db.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    console.table(res);
    start();
  });
}

// View all roles
function viewRoles() {
  db.query("SELECT * FROM role", (err, res) => {
    if (err) throw err;
    console.table(res);
    start();
  });
}

// Add employee
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "What is the employee's first name?",
      },
      {
        type: "input",
        name: "lastName",
        message: "What is the employee's last name?",
      },
      {
        type: "input",
        name: "role",
        message: "What is the employee's role?",
      },
      {
        type: "input",
        name: "manager",
        message: "Who is the employee's manager?",
      },
    ])
    .then((answer) => {
      db.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answer.firstName,
          last_name: answer.lastName,
          role_id: answer.role,
          manager_id: answer.manager,
        },
        (err) => {
          if (err) throw err;
          console.log("Employee added!");
          start();
        }
      );
    });
}

// Add department
function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "department",
        message: "What is the name of the department?",
      },
    ])
    .then((answer) => {
      db.query(
        "INSERT INTO department SET ?",
        {
          name: answer.department,
        },
        (err) => {
          if (err) throw err;
          console.log("Department added!");
          start();
        }
      );
    });
}

// Add role
function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of the role?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary of the role?",
      },
      {
        type: "input",
        name: "department",
        message: "What is the department of the role?",
      },
    ])
    .then((answer) => {
      db.query(
        "INSERT INTO role SET ?",
        {
          title: answer.title,
          salary: answer.salary,
          department_id: answer.department,
        },
        (err) => {
          if (err) throw err;
          console.log("Role added!");
          start();
        }
      );
    });
}
