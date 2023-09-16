import { Request, Response, Router } from 'express';

import UserService from '../service/user.service';

const orderRoute = Router();
const userService = new UserService();

orderRoute.get('/', async (req: Request, res: Response) => {
    try {
        const user = req.user;
        if (user.id) {
            res.json(await userService.getOrders(user.id));
        } else {
            res.status(401).send();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

orderRoute.post('/product', async (req: Request, res: Response) => {
    try {
        const user = req.user;
        const { product_id, quantity } = req.body;
        if (user.id) {
            res.json(await userService.order(user.id, product_id, quantity));
        } else {
            res.status(401).send();
        }
    } catch (err: any) {
        res.status(500).json(err.message);
    }
});

export default orderRoute;
