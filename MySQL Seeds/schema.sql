-- Creates the database task_saver_db and specified it for use.
CREATE DATABASE burgers_db;
USE burgers_db;
-- Create the table tasks.
CREATE TABLE burgers
(
    id INT NOT NULL
    AUTO_INCREMENT,
burger_name varchar
    (255) NOT NULL,
devoured BOOLEAN DEFAULT false,
PRIMARY KEY
    (id)
);