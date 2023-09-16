import { Request, Response, Router } from 'express';

import { Product } from '../model';
import ProductService from '../service/product.service';

const productRoute = Router();
const productService = new ProductService();

productRoute.get('/', async (req: Request, res: Response) => {
    res.json(await productService.index());
});

productRoute.get('/:id', async (req: Request, res: Response) => {
    res.json(await productService.show(req.params.id));
});

productRoute.post('/', async (req: Request, res: Response) => {
    res.json(await productService.create(req.body as Product));
});

export default productRoute;
