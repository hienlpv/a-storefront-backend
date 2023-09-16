import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import config from '../config';
import database from '../database/database';
import { Order, Product, User } from '../model';
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
            const { pepper } = config.password;
            const secret = config.jwt.secret as string;
            const sql = `SELECT * FROM users WHERE username=($1)`;
            const result = await database.execute(sql, [username]);
            const valid = !!result.rowCount && bcrypt.compareSync(password + pepper, result.rows[0].password);
            return valid && jwt.sign({ userId: result.rows[0].id }, secret);
        } catch (err) {
            throw new Error(`Cannot authenticate user ${err}`);
        }
    }

    async order(user_id: number, product_id: number, quantity: number): Promise<Order> {
        try {
            const sql = `INSERT INTO orders (user_id, product_id, quantity, status) VALUES($1, $2, $3, $4) RETURNING *`;
            const result = await database.execute(sql, [user_id, product_id, quantity, 'active']);
            return result.rows[0];
        } catch (err) {
            throw new Error(`Cannot order product ${err}`);
        }
    }

    async getOrders(user_id: number): Promise<Order[]> {
        try {
            const sql = `SELECT * FROM orders JOIN products ON orders.product_id = products.id WHERE user_id=($1)`;
            const result = await database.execute(sql, [user_id]);
            return result.rows;
        } catch (err) {
            throw new Error(`Cannot authenticate user ${err}`);
        }
    }
}
