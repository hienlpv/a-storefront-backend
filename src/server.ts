import 'dotenv/config';

import express from 'express';

import config from './config';
import database from './database';

const { port } = config.server;

const app = express();

database.connect();

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
