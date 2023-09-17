import { Request, Response, Router } from 'express';

import { Product } from '../model';
import ProductService from '../service/product.service';

const productRoute = Router();
const productService = new ProductService();

productRoute.get('/', async (req: Request, res: Response) => {
    try {
        res.json(await productService.index());
    } catch (err: any) {
        res.status(500).json(err.message);
    }
});

productRoute.get('/:id', async (req: Request, res: Response) => {
    try {
        res.json(await productService.show(req.params.id));
    } catch (err: any) {
        res.status(500).json(err.message);
    }
});

productRoute.post('/', async (req: Request, res: Response) => {
    try {
        res.json(await productService.create(req.body as Product));
    } catch (err: any) {
        res.status(500).json(err.message);
    }
});

export default productRoute;
