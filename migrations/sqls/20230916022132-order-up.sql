CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INT,
    status VARCHAR,
    FOREIGN KEY (user_id) REFERENCES users(id)
);