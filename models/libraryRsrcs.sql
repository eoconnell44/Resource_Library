DROP DATABASE IF EXISTS library_resources;
CREATE DATABASE library_resources;

\c library_resources;

CREATE TABLE resources (
	ID SERIAL PRIMARY KEY,
	title VARCHAR,
	subject VARCHAR,
	link VARCHAR,
	likes INTEGER
);

INSERT INTO resources (title, subject, link, likes)
	VALUES('SQL DATE', 'SQL', 'https://www.w3schools.com/sql/sql_dates.asp', 0);
	