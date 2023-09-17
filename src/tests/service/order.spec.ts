import 'dotenv/config';
import OrderService from '../../service/order.service';
import UserService from '../../service/user.service';
import { OrderProductRequest } from '../../types/order.request';
import ProductService from '../../service/product.service';

const orderService = new OrderService();
const userService = new UserService();
const productService = new ProductService();

describe('Order Service', async () => {
    it('Index method should return a list of orders', async () => {
        const user = await userService.create({ username: 'test1', password: 'test' });
        expect(user).toBeTruthy();
        const result = await orderService.index(user.id as number);
        expect(result).toEqual([]);
    });

    it('Order method should return a order', async () => {
        const product = await productService.create({ name: 'test2', price: 1 });
        expect(product).toBeTruthy();
        const order_product: OrderProductRequest[] = [
            {
                product_id: product.id as number,
                quantity: 20,
            },
        ];
        const order = await orderService.order(1, order_product);
        expect(order).toBeTruthy();
    });

    it('Show method should return a order', async () => {
        const result = await orderService.show(1, '1');
        expect(result).toBeTruthy();
    });
});
