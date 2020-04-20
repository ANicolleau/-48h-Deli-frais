create table Producer (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    description VARCHAR(255),
    category_id INTEGER,
    FOREIGN KEY(category_id) REFERENCES ProducerCategory(id)
);