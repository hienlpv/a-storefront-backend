import 'dotenv/config';

import cors from 'cors';
import express from 'express';

import config from './config';
import database from './database';
import userRoute from './routes/user.route';

// variable
const app = express();
const port = config.server.port;

// middleware
app.use(cors());

// connect DB
database.connect();

// routes
app.use('/user', userRoute);

// listen server
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
