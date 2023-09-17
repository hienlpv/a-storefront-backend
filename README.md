# Storefront Backend Udacity Project

# How to start
1. npm install
2. create .env file

    - PORT=3000
    - ENV=dev
    #### POSTGRES DATABASE CONNECTION
    #### DEV
    - POSTGRES_HOST_DEV=<DEV_HOST>
    - POSTGRES_DATABASE_DEV=<DEV_DATABASE>
    - POSTGRES_USER_DEV=<DEV_USER>
    - POSTGRES_PASSWORD_DEV=<DEV_PASSWORD>
    #### TEST
    - POSTGRES_HOST_TEST=<TEST_HOST>
    - POSTGRES_DATABASE_TEST=<TEST_DATABASE>
    - POSTGRES_USER_TEST=<TEST_USER>
    - POSTGRES_PASSWORD_TEST=<TEST_PASSWORD>
    #### PASSWORD HASH
    - PASSWORD_PEPPER=<PASSWORD_HASH_KEY>
    - PASSWORD_SALT_ROUND=10
    #### JWT
    - JWT_TOKEN_SECRET=<TOKEN_SECRET>

3. create database.json file

    - {
        - "dev": {
            - "driver": "pg",
            - "host": <DEV_HOST>,
            - "database": <DEV_DATABASE>,
            - "user": <DEV_USER>,
            - "password": <DEV_PASSWORD>
        - },
        - "test": {
            - "driver": "pg",
            - "host": <TEST_HOST>,
            - "database": <TEST_DATABASE>,
            - "user": <TEST_USER>,
            - "password": <TEST_PASSWORD>
        - },
    - }

4. npm install -g db-migrate
5. db-migrate up
6. npm run dev
7. local Postgres port is 5432

#### Test
1. npm run test (jasmine)
2. import "a-storefront-backend.postman_collection" to POSTMAN (API)
3. import "a-storefront-backend-dev.postman_environment" to POSTMAN (ENV)
