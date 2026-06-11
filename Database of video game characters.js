CREATE DATABASE first_database;
\l
CREATE DATABASE second_database;
\l
\c second_database; 
CREATE TABLE first_table();  
\d
CREATE TABLE second_table();
\d second_table;
ALTER TABLE  second_table ADD COLUMN first_column INT;
ALTER TABLE second_table ADD COLUMN id INT;
ALTER TABLE second_table ADD COLUMN age INT;
ALTER TABLE second_table DROP COLUMN age;
ALTER TABLE second_table ADD COLUMN name VARCHAR(30);
\d second_table;
ALTER TABLE second_table RENAME COLUMN name TO username;
\d second_table;
INSERT INTO second_table(id, username) VALUES(1,'Shivam');
SELECT * FROM second_table;
INSERT INTO second_table(id,username) VALUES(2,'Mario');
INSERT INTO second_table(id, username) VALUES(3, 'Luigi');
SELECT* FROM second_table;
DELETE FROM second_table WHERE username='Luigi';
SELECT * FROM second_table;
DELETE FROM second_table WHERE username='Shivam';
SELECT *FROM second_table;
DELETE FROM second_table WHERE username='Mario';
SELECT *FROM second_table;
ALTER TABLE second_table DROP username;
ALTER TABLE second_table DROP id;
DROP TABLE second_table;
DROP TABLE first_table;
ALTER DATABASE first_database RENAME TO mario_database;
\c mario_database;
CREATE TABLE characters();
ALTER TABLE characters ADD COLUMN character_id INT;
\d characters
