# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- [API]
    - Index: /product [GET]
    - Show: /product/:id [GET]
    - Crate: /product [POST] [REQUIRED_TOKEN]
        - param: {
            "name": string,
            "price": number,
            "category": string
        }

#### Users
- [API]
    - Index: /user [GET] [REQUIRED_TOKEN]
    - Show: /user/:id [GET] [REQUIRED_TOKEN]
    - Create: /user [POST]
        - param: {
            "username": string,
            "password": string,
            "firstName": string,
            "lastName": string
        }

#### Orders
- [API]
    - Index: /order [GET] [REQUIRED_TOKEN]
    - Add Product: /order/product [POST] [REQUIRED_TOKEN]
        - param: {
            "product_id": number,
            "quantity": number
        }

#### Auth
- [API]
    - Login: /auth/login [POST]
        - param: {
            "username": string,
            "password": string
        }

## Data Shapes
#### Product
- id
- name
- price
- category
- [SQL]
    CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        name VARCHAR,
        price DECIMAL,
        category VARCHAR
    );

#### User
- id
- firstName
- lastName
- password
- [SQL]
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(100),
        firstName VARCHAR,
        lastName VARCHAR,
        password VARCHAR
    );

#### Orders
- id
- user_id
- status of order (active or complete)
- [SQL]
    CREATE TABLE orders (
        id SERIAL PRIMARY KEY,
        user_id INT,
        status VARCHAR,
        FOREIGN KEY (user_id) REFERENCES users(id)
    );

#### Order Products
- id
- id of orders
- id of each product in the order
- quantity of each product in the order
- [SQL] 
    CREATE TABLE order_products (
        id SERIAL PRIMARY KEY,
        order_id INT,
        product_id INT,
        quantity INT,
        FOREIGN KEY (order_id) REFERENCES orders(id),
        FOREIGN KEY (product_id) REFERENCES products(id)
    );

