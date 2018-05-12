DROP DATABASE IF EXISTS helping_handsDB;

CREATE DATABASE helping_handsDB;

USE helping_handsDB;

CREATE TABLE volunteers (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(45) NULL,
  last_name VARCHAR(45) NULL,
  phone_num VARCHAR(22) NULL,
  email VARCHAR(50),
  password VARCHAR(50)
  PRIMARY KEY (id)
);
CREATE TABLE organization (
  id INT NOT NULL AUTO_INCREMENT,
  organizer VARCHAR(255) NULL,
  email VARCHAR(50),
  phone_num VARCHAR(22) NULL,
  password VARCHAR(50)
  PRIMARY KEY (id)
);
CREATE TABLE events (
  id INT NOT NULL AUTO_INCREMENT,
  event_name VARCHAR(255) NULL,
  event_desc VARCHAR(1000) NULL,
  event_loc VARCHAR(1000) NULL,
  event_date DATE NOT NULL,
  event_time TIME NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE volunteer_events (
  id INT NOT NULL AUTO_INCREMENT,
  vol_id INT NULL,
  event_id INT NULL
);
