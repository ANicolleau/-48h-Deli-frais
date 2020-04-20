create table IF NOT EXISTS Producer (
    id INTEGER PRIMARY KEY NOT NULL ,
    description VARCHAR(255),
    category_id INTEGER,
    FOREIGN KEY(category_id) REFERENCES ProducerCategory(id)
);