CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id int AUTO_INCREMENT NOT NULL ,
	name varchar(100) NOT NULL,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);