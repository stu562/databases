DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
  id int(11) not null auto_increment, 
  username VARCHAR(50), 
  PRIMARY KEY(id)
);

DROP TABLE IF EXISTS Rooms;

CREATE TABLE Rooms (
  id int(11) not null auto_increment, 
  roomname VARCHAR(50), 
  PRIMARY KEY(id)
  
);

DROP TABLE IF EXISTS Messages;

CREATE TABLE Messages (
  /* Describe your table here.*/
  id int(11) not null auto_increment,
  username VARCHAR(50),
  message VARCHAR(255),
  roomname VARCHAR(50),
  -- foreign key 
  user_id int(11), 
  room_id int(11), 
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES Users(id),
  FOREIGN KEY (room_id) REFERENCES Rooms(id)
);





/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/

