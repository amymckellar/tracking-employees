 -- adding departments

INSERT INTO department (name)
VALUES
('Biology'),
('Engineering'),
('Finance'),
('Marketing');
-- inserting roles, salary and department into the database
INSERT INTO role (title, salary, department_id)
VALUES 
('Research Assistant', 50000, 1),
('Research Scientist', 60000, 1),
('Senior Research Scientist', 70000, 1),
('Software Engineer', 80000, 2),
('Senior Software Engineer', 90000, 2),
('Accountant', 100000, 3),
('Senior Accountant', 110000, 3),
('Marketing Manager', 120000, 4),
('Marketing Director', 130000, 4);
-- inserting employees, role and manager into the database
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Amy', 'McKellar', 1, 1),
('George', 'Garagate', 2, 2),
('Samantha', 'Thomas', 3, 3),
('Jazzmin', 'Hernandez', 4, 4),
('Ariel', 'Black', 5, 5),
('Joe', 'Armendez', 6, 6),
('Bert', 'Galvan', 7, 7),
('Asher', 'Millstone', 8, 8),
('Lillian', 'Miller', 9, 9);