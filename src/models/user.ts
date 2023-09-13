import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { User } from '.';
import database from '../database';
import config from '../config';

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
            throw new Error(`Cannot index user ${err}`);
        }
    }

    async create(user: Partial<User>): Promise<User> {
        try {
            const { pepper, saltRounds } = config.password;
            const sql = `INSERT INTO users (username, password) VALUES($1, $2) RETURNING *`;
            const hash = bcrypt.hashSync(user.password + pepper, parseInt(saltRounds));
            const result = await database.execute(sql, [user.username, hash]);
            return result.rows[0];
        } catch (err) {
            throw new Error(`Cannot create user ${err}`);
        }
    }

    async authenticate(username: string, password: string) {
        try {
            const pepper = config.password.pepper;
            const sql = `SELECT * FROM users WHERE username=($1)`;
            const result = await database.execute(sql, [username]);
            const valid = !!result.rowCount && bcrypt.compareSync(password + pepper, result.rows[0].password);
            return valid && jwt.sign({ userId: result.rows[0].id }, config.jwt.secret);
        } catch (err) {
            throw new Error(`Cannot authenticate user ${err}`);
        }
    }
}
