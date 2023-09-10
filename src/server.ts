import express from 'express';
import config from './config';
import { connectDB } from './database';

const { port } = config.server;

const app = express();

connectDB();

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
