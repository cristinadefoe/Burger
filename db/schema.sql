CREATE DATABASE burgers_db;
USE burgers_db;
DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers
(
  id INT NOT NULL
  AUTO_INCREMENT,
  burger_name varchar
  (200) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY
  (id)
);