create table IF NOT EXISTS Basket (
    id INTEGER PRIMARY KEY NOT NULL,
    user_id INTEGER,
    price INTEGER,
    date DATE,
    FOREIGN KEY(user_id) REFERENCES User(id)
)