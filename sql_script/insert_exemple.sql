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
INSERT INTO User(email, firstname, lastname, password, city, zip_code, street, phone_number) VALUES ("frmglande@gmail.com", "Joseph", "Moulin", "root", "Sabres", 40630, "6 Avenue des rouleux", "0999999999");
INSERT INTO User(email, firstname, lastname, password, city, zip_code, street, phone_number) VALUES ("brebis@gmail.com", "Arnaud", "Langlé", "arnolang", "Bordeaux", 33000, "42 allée des brailels", "0999999999");
INSERT INTO User(email, firstname, lastname, password, city, zip_code, street, phone_number) VALUES ("frmgbordeaux@gmail.com", "Angèle", "Renaud", "root", "Sabres", 40630, "63 Avenue des peupliers", "0999999999");
INSERT INTO User(email, firstname, lastname, password, city, zip_code, street, phone_number) VALUES ("vachelaitiere@gmail.com", "Miguel", "Do Santos", "ferrari3000","Bordeaux", 33000, "25 impasse de rené", "0999999999");
INSERT INTO User(email, firstname, lastname, password, city, zip_code, street, phone_number) VALUES ("pompom@yahoo.com", "Paul", "Boquet", "paul33", "Bordeaux", 33000, "22 allée des cochons sauvages", "0999999999");
INSERT INTO User(email, firstname, lastname, password, city, zip_code, street, phone_number) VALUES ("arnoval@free.fr", "Arnaud", "Valutier", "ano", "Bordeaux", 33000, "3 allée des coquelicots", "0999999999");
INSERT INTO User(email, firstname, lastname, password, city, zip_code, street, phone_number) VALUES ("richardupo@hotmail.fr", "Richard", "Dupo", "riri", "Bordeaux", 33000, "8 allée des petits pots", "0999999999");
INSERT INTO User(email, firstname, lastname, password, city, zip_code, street, phone_number) VALUES ("bigornotBella@outlook.fr", "Bigornot", "Bellamon", "Bella33", "Bordeaux", 33000, "35 allée des souliers", "0999999999");
INSERT INTO User(email, firstname, lastname, password, city, zip_code, street, phone_number) VALUES ("mariepaul@potier.fr", "Marie-paul", "Sousi", "paupauldu33", "Bordeaux", 33000, "29 avenue des trois cardinots", "0999999999");
INSERT INTO User(email, firstname, lastname, password, city, zip_code, street, phone_number) VALUES ("giovanni.richemon@gmail.com", "Giovanni", "Richemond", "sachadubourgpalette", "Bordeaux", 33000, "15 impasse des vergers", "0999999999");
INSERT INTO User(email, firstname, lastname, password, city, zip_code, street, phone_number) VALUES ("josiannedupres@gmail.com", "Josianne", "Duprès", "jojodup", "Bordeaux", 33000, "1 allée des gros pots", "0999999999");
INSERT INTO User(email, firstname, lastname, password, city, zip_code, street, phone_number) VALUES ("pablomormont@gmail.com", "Pablo", "Mormont", "pabeau33", "Bordeaux", 33000, "19 allée chauves", "0999999999");
INSERT INTO Producer(description, category_id, user_id) VALUES ("Nous produisons du fromage de chèvres et de brebis.", 1, 1);
INSERT INTO Producer(description, category_id, user_id) VALUES ("Nous produisons essentiellement du fromage de brebis.", 1, 2);
INSERT INTO Producer(description, category_id, user_id) VALUES ("Nous produisons du fromage de vache et de brebis.", 1, 3);
INSERT INTO Producer(description, category_id, user_id) VALUES ("Nous produisons du fromage et du lait de vache.", 1, 4);
INSERT INTO Producer(description, category_id, user_id) VALUES ("Nous ne produisons que du lait de vache.", 1, 5);
INSERT INTO Producer(description, category_id, user_id) VALUES ("Nous pouvons vendre des pommes, poires et orange. Nos arbes fruitiers sont sous serres.", 2, 6);
INSERT INTO Producer(description, category_id, user_id) VALUES ("Nous pouvons vendre des raisins et des fraises. Les fraisiers se situent sous serres.", 2, 7);
INSERT INTO Producer(description, category_id, user_id) VALUES ("Notre serre posséde essentiellement des pommiers.", 2, 8);
INSERT INTO Producer(description, category_id, user_id) VALUES ("Notre ferme fruitière vous propose toutes sortes d'agrumes. Orange, pamplemousse, citron, mandarine, clémentine.", 2, 9);
INSERT INTO Producer(description, category_id, user_id) VALUES ("Notre proposons des concombres, courgettes, pommes de terre.", 3, 10);
INSERT INTO Producer(description, category_id, user_id) VALUES ("Notre vendons des haricots vert, choux fleurs et salades.", 3, 11);
INSERT INTO Producer(description, category_id, user_id) VALUES ("Notre avons des petits pois, des carottes.", 3, 12);
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