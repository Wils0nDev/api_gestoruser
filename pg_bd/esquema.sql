CREATE TABLE users (
	iduser serial PRIMARY KEY,
	name VARCHAR ( 50 ) UNIQUE NOT NULL,
	lastname VARCHAR ( 150 ) UNIQUE NOT NULL,
    email VARCHAR ( 255 ) UNIQUE NOT NULL,
	username VARCHAR ( 50 ) UNIQUE NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
	created_on TIMESTAMP NOT NULL,
    modified_on TIMESTAMP NOT NULL,
    last_login TIMESTAMP  
)

