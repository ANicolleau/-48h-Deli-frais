CREATE DATABASE delifrais;
USE delifrais;
CREATE TABLE ProducerCategory (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    label VARCHAR(100)
);
CREATE TABLE ProductCategory (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    label VARCHAR(100)
);
create table Producer (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    description VARCHAR(255),
    category_id INTEGER,
    FOREIGN KEY(category_id) REFERENCES ProducerCategory(id)
);
create table Product (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(100),
    description VARCHAR(255),
    price INTEGER,
    category_id INTEGER,
    producer_id INTEGER,
    FOREIGN KEY(category_id) REFERENCES ProductCategory(id),
    FOREIGN KEY(producer_id) REFERENCES Producer(id)
);
create table User (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    producer_id INTEGER,
    email VARCHAR(100),
    firstname VARCHAR(50),
    lastname VARCHAR(50),
    password VARCHAR(50),
    city VARCHAR(50),
    zip_code INTEGER,
    street VARCHAR(255),
    phone_number VARCHAR(14),
    FOREIGN KEY(producer_id) REFERENCES Producer(id)
);
create table Basket (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    user_id INTEGER,
    price INTEGER,
    date DATE,
    FOREIGN KEY(user_id) REFERENCES User(id)
);
CREATE TABLE Contain (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    basket_id INTEGER,
    product_id INTEGER,
    quantity INTEGER,
    FOREIGN KEY(basket_id) REFERENCES Basket(id),
    FOREIGN KEY(product_id) REFERENCES Product(id)
);