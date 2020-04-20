CREATE TABLE IF NOT EXISTS Contain (
    id INTEGER PRIMARY KEY NOT NULL,
    basket_id INTEGER,
    product_id INTEGER,
    quantity INTEGER,
    FOREIGN KEY(basket_id) REFERENCES Basket(id),
    FOREIGN KEY(product_id) REFERENCES Product(id)
)