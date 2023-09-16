import bcrypt from 'bcrypt';

import { User } from '.';
import config from '../config';
import database from '../database/database';

export default class UserStore {
    async index(): Promise<User[]> {
        try {
            const sql = `SELECT * FROM users`;
            const result = await database.execute(sql);
            return result.rows;
        } catch (err) {
            throw new Error(`Cannot index user ${err}`);
        }
    }

    async show(id: string): Promise<User | null> {
        try {
            const sql = `SELECT * FROM users WHERE id=($1)`;
            const result = await database.execute(sql, [id]);
            return result.rowCount ? result.rows[0] : null;
        } catch (err) {
            throw new Error(`Cannot show user ${err}`);
        }
    }

    async create(user: User): Promise<User> {
        try {
            const pepper = config.password.pepper as string;
            const saltRounds = config.password.saltRounds as string;
            const sql = `INSERT INTO users (username, password, firstName, lastName) VALUES($1, $2, $3, $4) RETURNING *`;
            const hash = bcrypt.hashSync(user.password + pepper, parseInt(saltRounds));
            const result = await database.execute(sql, [user.username, hash, user.firstName, user.lastName]);
            return result.rows[0];
        } catch (err) {
            throw new Error(`Cannot create user ${err}`);
        }
    }
}
