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