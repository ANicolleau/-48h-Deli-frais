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
INSERT INTO ProducerCategory(label) values ("Maraicher");
INSERT INTO ProducerCategory(label) values ("Fromager");
INSERT INTO ProducerCategory(label) values ("Laitier");
INSERT INTO ProducerCategory(label) values ("Arboriculteur");
INSERT INTO ProducerCategory(label) values ("Eleveur");
INSERT INTO ProducerCategory(label) values ("Viticulteur");
INSERT INTO ProductCategory(label) values ("Produit laitier");
INSERT INTO ProductCategory(label) values ("Fruit");
INSERT INTO ProductCategory(label) values ("Légume");
INSERT INTO ProductCategory(label) values ("Viande");
INSERT INTO ProductCategory(label) values ("Vin");
INSERT INTO Producer(description, category_id) VALUES ("Nous produisons du fromage de chèvres et de brebis.", 1);
INSERT INTO Producer(description, category_id) VALUES ("Nous produisons essentiellement du fromage de brebis.", 1);
INSERT INTO Producer(description, category_id) VALUES ("Nous produisons du fromage de vache et de brebis.", 1);
INSERT INTO Producer(description, category_id) VALUES ("Nous produisons du fromage et du lait de vache.", 1);
INSERT INTO Producer(description, category_id) VALUES ("Nous ne produisons que du lait de vache.", 1);
INSERT INTO Producer(description, category_id) VALUES ("Nous pouvons vendre des pommes, poires et orange. Nos arbes fruitiers sont sous serres.", 2);
INSERT INTO Producer(description, category_id) VALUES ("Nous pouvons vendre des raisins et des fraises. Les fraisiers se situent sous serres.", 2);
INSERT INTO Producer(description, category_id) VALUES ("Notre serre posséde essentiellement des pommiers.", 2);
INSERT INTO Producer(description, category_id) VALUES ("Notre ferme fruitière vous propose toutes sortes d'agrumes. Orange, pamplemousse, citron, mandarine, clémentine.", 2);
INSERT INTO Producer(description, category_id) VALUES ("Notre proposons des concombres, courgettes, pommes de terre.", 3);
INSERT INTO Producer(description, category_id) VALUES ("Notre vendons des haricots vert, choux fleurs et salades.", 3);
INSERT INTO Producer(description, category_id) VALUES ("Notre avons des petits pois, des carottes.", 3);
INSERT INTO Product(name, description, price) VALUES ("Fromage de chèvres", "Prix de la buchette", 2.5);
INSERT INTO Product(name, description, price) VALUES ("Fromage de brebis", "Prix de la buchette", 3);
INSERT INTO Product(name, description, price) VALUES ("Fromage de vache", "Prix pour 250 grammes", 7.7);
INSERT INTO Product(name, description, price) VALUES ("Lait de vache", "Prix de la brique", 1.19);
INSERT INTO Product(name, description, price) VALUES ("Pomme", "Prix au kg", 4);
INSERT INTO Product(name, description, price) VALUES ("Poire", "Prix au kg", 3.9);
INSERT INTO Product(name, description, price) VALUES ("Orange", "Prix au kg", 3.2);
INSERT INTO Product(name, description, price) VALUES ("Raisin", "Prix au kg", 7.1);
INSERT INTO Product(name, description, price) VALUES ("Fraise", "Prix au kg", 9.68);
INSERT INTO Product(name, description, price) VALUES ("Pamplemousse", "Prix au kg", 3.39);
INSERT INTO Product(name, description, price) VALUES ("Citron", "Prix au kg", 5.6);
INSERT INTO Product(name, description, price) VALUES ("Mandarine", "Prix au kg", 6.4);
INSERT INTO Product(name, description, price) VALUES ("Clémentine", "Prix au kg", 6.2);
INSERT INTO Product(name, description, price) VALUES ("Concombre", "Prix à la pièce", 0.89);
INSERT INTO Product(name, description, price) VALUES ("Courgette", "Prix à la pièce", 0.92);
INSERT INTO Product(name, description, price) VALUES ("Pommes de terre", "Prix au kg", 4);
INSERT INTO Product(name, description, price) VALUES ("Haricot vert", "Prix au kg", 7);
INSERT INTO Product(name, description, price) VALUES ("Chou fleur", "Prix à la pièce", 0.5);
INSERT INTO Product(name, description, price) VALUES ("Salade", "Prix à la pièce", 0.6);
INSERT INTO Product(name, description, price) VALUES ("Petit poi", "Prix au kg", 3.4);
INSERT INTO Product(name, description, price) VALUES ("Carotte", "Prix au kg", 5.2);
INSERT INTO User(producer_id, email, firstname, lastname, password, city, zip_code, street, phone_number) VALUES (1, "frmglande@gmail.com", "Joseph", "Moulin", "root", "Sabres", 40630, "6 Avenue des rouleux", "0999999999");
INSERT INTO User(producer_id, email, firstname, lastname, password, city, zip_code, street, phone_number) VALUES (2, "brebis@gmail.com", "Arnaud", "Langlé", "arnolang", "Bordeaux", 33000, "42 allée des brailels", "0999999999");
INSERT INTO User(producer_id, email, firstname, lastname, password, city, zip_code, street, phone_number) VALUES (3, "frmgbordeaux@gmail.com", "Angèle", "Renaud", "root", "Sabres", 40630, "63 Avenue des peupliers", "0999999999");
INSERT INTO User(producer_id, email, firstname, lastname, password, city, zip_code, street, phone_number) VALUES (4, "vachelaitiere@gmail.com", "Miguel", "Do Santos", "ferrari3000","Bordeaux", 33000, "25 impasse de rené", "0999999999");
INSERT INTO User(producer_id, email, firstname, lastname, password, city, zip_code, street, phone_number) VALUES (5, "pompom@yahoo.com", "Paul", "Boquet", "paul33", "Bordeaux", 33000, "22 allée des cochons sauvages", "0999999999");
INSERT INTO User(producer_id, email, firstname, lastname, password, city, zip_code, street, phone_number) VALUES (6, "arnoval@free.fr", "Arnaud", "Valutier", "ano", "Bordeaux", 33000, "3 allée des coquelicots", "0999999999");
INSERT INTO User(producer_id, email, firstname, lastname, password, city, zip_code, street, phone_number) VALUES (7, "richardupo@hotmail.fr", "Richard", "Dupo", "riri", "Bordeaux", 33000, "8 allée des petits pots", "0999999999");
INSERT INTO User(producer_id, email, firstname, lastname, password, city, zip_code, street, phone_number) VALUES (8, "bigornotBella@outlook.fr", "Bigornot", "Bellamon", "Bella33", "Bordeaux", 33000, "35 allée des souliers", "0999999999");
INSERT INTO User(producer_id, email, firstname, lastname, password, city, zip_code, street, phone_number) VALUES (9, "mariepaul@potier.fr", "Marie-paul", "Sousi", "paupauldu33", "Bordeaux", 33000, "29 avenue des trois cardinots", "0999999999");
INSERT INTO User(producer_id, email, firstname, lastname, password, city, zip_code, street, phone_number) VALUES (10, "giovanni.richemon@gmail.com", "Giovanni", "Richemond", "sachadubourgpalette", "Bordeaux", 33000, "15 impasse des vergers", "0999999999");
INSERT INTO User(producer_id, email, firstname, lastname, password, city, zip_code, street, phone_number) VALUES (11, "josiannedupres@gmail.com", "Josianne", "Duprès", "jojodup", "Bordeaux", 33000, "1 allée des gros pots", "0999999999")