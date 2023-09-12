import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import config from './config';
import database from './database';

// variable
const app = express();
const port = config.server.port;

// middleware
app.use(cors());

// connect DB
database.connect();

// listen server
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
