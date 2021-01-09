DROP DATABASE IF EXISTS burgers_bd;

CREATE DATABASE burgers_bd;

USE burgers_bd;

CREATE TABLE burgers(
    id INT AUTO_INCREMENT NOT NULL,
    burger_name CHAR (30) NOT NULL,
    devoured TINYINT(1),
    PRIMARY KEY (id)
);
