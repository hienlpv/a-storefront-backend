# Storefront Backend Udacity Project

## 1 Install Package
1. npm install
2. npm install -g db-migrate

## 2 Setup ENV
1. Create .env file

   - ENV=dev
   - PORT=3000

   - PG_HOST=<DEV_HOST>

   - PG_DEV_DB=<DEV_DATABASE>
   - PG_DEV_USER=<DEV_USER>
   - PG_DEV_PWD=<DEV_PASSWORD>

   - PG_TEST_DB=<TEST_DATABASE>
   - PG_TEST_USER=<TEST_USER>
   - PG_TEST_PWD=<TEST_PASSWORD>

   - PWD_HASH_KEY=<PASSWORD_HASH_KEY>
   - PWD_SALT_ROUND=10

   - JWT_TOKEN_SECRET=<TOKEN_SECRET>

2. Local Postgres Port: 5432

## 3 Migrate Database
- db-migrate up

## 4 Run Server
- npm run dev

## 5 Run Test

1. npm run test
2. create first user: [POST] /user
3. login with: [POST] /user/login
