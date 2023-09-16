import 'dotenv/config';

import cors from 'cors';
import express, { json } from 'express';

import config from './config';
import database from './database/database';
import { verifyAuthToken } from './middleware/auth.middleware';
import authRoute from './routes/auth.route';
import productRoute from './routes/product.route';
import userRoute from './routes/user.route';

// variable
const app = express();
const port = config.server.port;

// middleware
app.use(json());
app.use(cors());
app.use(verifyAuthToken);

// connect DB
database.connect();

// routes
app.use('/auth', authRoute);
app.use('/user', userRoute);
app.use('/product', productRoute);

// listen server
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
