CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    product_id INT,
    quantity INT,
    user_id INT,
    status VARCHAR,
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);