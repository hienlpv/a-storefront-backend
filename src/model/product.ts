import { Product } from '.';
import database from '../database/database';

export default class ProductStore {
    async index(): Promise<Product[]> {
        try {
            const sql = `SELECT * FROM products`;
            const result = await database.execute(sql);
            return result.rows;
        } catch (err) {
            throw new Error(`Cannot index product ${err}`);
        }
    }

    async show(id: string): Promise<Product | null> {
        try {
            const sql = `SELECT * FROM products WHERE id=($1)`;
            const result = await database.execute(sql, [id]);
            return result.rowCount ? result.rows[0] : null;
        } catch (err) {
            throw new Error(`Cannot show product ${err}`);
        }
    }

    async create(product: Partial<Product>): Promise<Product> {
        try {
            const sql = `INSERT INTO products (name, price, category) VALUES($1, $2, $3) RETURNING *`;
            const result = await database.execute(sql, [product.name, product.price, product.category]);
            return result.rows[0];
        } catch (err) {
            throw new Error(`Cannot create product ${err}`);
        }
    }
}
