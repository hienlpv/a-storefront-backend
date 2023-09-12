import { Pool } from 'pg';
import config from './config';

const { host, database, user, password } = process.env.ENV == 'dev' ? config.database.dev : config.database.test;

export const client = new Pool({
    host,
    database,
    user,
    password,
});

function connect() {
    client.connect().then(() => console.log('Database is connected'));
}

export default { client, connect };
