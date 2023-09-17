import { Request, Response, Router } from 'express';
import OrderService from '../service/order.service';

const orderRoute = Router();
const orderService = new OrderService();

orderRoute.get('/', async (req: Request, res: Response) => {
    try {
        if (req.user.id) {
            res.json(await orderService.index(req.user.id));
        } else {
            res.status(401).send();
        }
    } catch (err: any) {
        res.status(500).json(err.message);
    }
});

orderRoute.get('/:id', async (req: Request, res: Response) => {
    try {
        if (req.user.id) {
            res.json(await orderService.show(req.user.id, req.params.id));
        } else {
            res.status(401).send();
        }
    } catch (err: any) {
        res.status(500).json(err.message);
    }
});

orderRoute.post('/product', async (req: Request, res: Response) => {
    try {
        if (req.user.id) {
            res.json(await orderService.order(req.user.id, req.body));
        } else {
            res.status(401).send();
        }
    } catch (err: any) {
        res.status(500).json(err.message);
    }
});

export default orderRoute;
