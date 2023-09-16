import { Pool } from 'pg';
import config from '../config';

const { host, database, user, password } = config.server.env == 'dev' ? config.database.dev : config.database.test;

export const client = new Pool({
    host,
    database,
    user,
    password,
});

function connect() {
    client.connect().then(() => console.log('Database is connected'));
}

async function execute(sql: string, param: any[] = []) {
    const conn = await client.connect();
    const result = await conn.query(sql, param);
    conn.release();
    return result;
}

export default { client, connect, execute };
