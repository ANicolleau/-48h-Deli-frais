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

