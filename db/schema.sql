DROP DATABASE IF EXISTS `employee_db`;

CREATE DATABASE `employee_db`;

USE `employee_db`;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    );

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT primary key,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) 
    REFERENCES department(id) on delete cascade
    );

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT primary key,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    FOREIGN KEY (role_id) 
    REFERENCES role(id) on delete cascade,
    FOREIGN KEY (manager_id) 
    REFERENCES employee(id) on delete cascade
    );