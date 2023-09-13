import 'dotenv/config';

import cors from 'cors';
import express, { json } from 'express';

import config from './config';
import database from './database';
import userRoute from './routes/user.route';
import { verifyAuthToken } from './middlewares/auth.middleware';

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
app.use('/user', userRoute);

// listen server
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
