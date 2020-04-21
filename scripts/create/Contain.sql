CREATE TABLE Contain (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    basket_id INTEGER,
    product_id INTEGER,
    quantity INTEGER,
    FOREIGN KEY(basket_id) REFERENCES Basket(id),
    FOREIGN KEY(product_id) REFERENCES Product(id)
);