CREATE DATABASE first_database;
\l //to see the list or database
CREATE DATABASE second_database;
\l
\c second_database; // connected to second database.
CREATE TABLE first_table();  
\d // display second database.
CREATE TABLE second_table();
\d second_table;
ALTER TABLE  second_table ADD COLUMN first_column INT;
ALTER TABLE second_table ADD COLUMN id INT;
ALTER TABLE second_table ADD COLUMN age INT;
ALTER TABLE second_table DROP COLUMN age;
ALTER TABLE second_table ADD COLUMN name VARCHAR(30);
\d second_table;
