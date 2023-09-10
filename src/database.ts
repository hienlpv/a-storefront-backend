import { Pool } from 'pg';
import config from './config';

const { host, database, user, password } = config.database;

const client = new Pool({
    host,
    database,
    user,
    password,
});

export function connectDB() {
    client.connect().then(() => console.log('Database is connected'));
}

export default client;
