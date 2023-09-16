import { Request, Response, Router } from 'express';

import UserService from '../service/user.service';

const orderRoute = Router();
const userService = new UserService();

orderRoute.get('/', async (req: Request, res: Response) => {
    const user = req.user;
    res.json(await userService.getOrders(user.id));
});

orderRoute.post('/product', async (req: Request, res: Response) => {
    const user = req.user;
    const { product_id, quantity } = req.body;
    res.json(await userService.order(user.id, product_id, quantity));
});

export default orderRoute;
