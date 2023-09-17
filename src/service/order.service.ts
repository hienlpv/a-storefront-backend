import database from '../database/database';
import { Order, OrderProduct } from '../model';
import { OrderProductRequest } from '../types/order.request';

export default class OrderService {
    async index(user_id: number): Promise<Order[]> {
        try {
            const sql = `SELECT * FROM orders WHERE user_id=($1)`;
            const result = await database.execute(sql, [user_id]);
            let orders = result.rows as Order[];
            return Promise.all(orders.map(async (order) => ({ ...order, products: await this.getOrderProducts(order.id.toString()) })));
        } catch (err) {
            throw new Error(`Cannot authenticate user ${err}`);
        }
    }

    async show(user_id: number, order_id: string): Promise<Order> {
        try {
            const sql = `SELECT * FROM orders WHERE user_id=($1) AND id=($2)`;
            const result = await database.execute(sql, [user_id, order_id]);
            const order = result.rows[0] as Order;
            order.products = await this.getOrderProducts(order.id.toString());
            return order;
        } catch (err) {
            throw new Error(`Cannot authenticate user ${err}`);
        }
    }

    async getOrderProducts(order_id: string): Promise<OrderProduct[]> {
        try {
            const sql = `SELECT product_id, quantity FROM order_products WHERE order_id=($1)`;
            const result = await database.execute(sql, [order_id]);
            return result.rows;
        } catch (err) {
            throw new Error(`Cannot authenticate user ${err}`);
        }
    }

    async order(user_id: number, products: OrderProductRequest[]): Promise<Order> {
        try {
            const sql = `INSERT INTO orders (user_id, status) VALUES($1, $2) RETURNING *`;
            const result = await database.execute(sql, [user_id, 'active']);
            await Promise.all(products.map(({ product_id, quantity }) => this.orderProduct(result.rows[0].id, product_id, quantity)));
            return result.rows[0];
        } catch (err) {
            throw new Error(`Cannot order ${err}`);
        }
    }

    async orderProduct(order_id: number, product_id: number, quantity: number): Promise<OrderProduct> {
        try {
            const sql = `INSERT INTO order_products (order_id, product_id, quantity) VALUES($1, $2, $3) RETURNING *`;
            const result = await database.execute(sql, [order_id, product_id, quantity]);
            return result.rows[0];
        } catch (err) {
            throw new Error(`Cannot order product ${err}`);
        }
    }
}
