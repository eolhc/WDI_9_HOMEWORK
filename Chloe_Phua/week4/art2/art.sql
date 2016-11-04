CREATE DATABASE real_art;

CREATE TABLE artz (
  id SERIAL4 PRIMARY KEY
  name VARCHAR(400),
  artist VARCHAR(400),
  image_url TEXT
);

CREATE TABLE users (
  id SERIAL4 PRIMARY KEY,
  email VARCHAR(300),
  password_digest VARCHAR(400)
)
