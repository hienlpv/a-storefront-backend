import { client } from '../database';

export default class UserStore {
    async index(): Promise<User[]> {
        try {
            const conn = await client.connect();
            const sql = `SELECT * FROM users`;
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch (err) {
            throw new Error(`Cannot index user ${err}`);
        }
    }
}
