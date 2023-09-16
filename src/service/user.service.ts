import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import config from '../config';
import database from '../database/database';
import { User } from '../model';
import UserStore from '../model/user';

const userStore = new UserStore();

export default class UserService {
    index(): Promise<User[]> {
        return userStore.index();
    }

    show(id: string): Promise<User | null> {
        return userStore.show(id);
    }

    create(user: User): Promise<User> {
        return userStore.create(user);
    }

    async authenticate(username: string, password: string) {
        try {
            const pepper = config.password.pepper;
            const secret = config.jwt.secret as string;
            const sql = `SELECT * FROM users WHERE username=($1)`;
            const result = await database.execute(sql, [username]);
            const valid = !!result.rowCount && bcrypt.compareSync(password + pepper, result.rows[0].password);
            return valid && jwt.sign({ userId: result.rows[0].id }, secret);
        } catch (err) {
            throw new Error(`Cannot authenticate user ${err}`);
        }
    }
}
