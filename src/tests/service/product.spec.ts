import 'dotenv/config';
import ProductService from '../../service/product.service';
import { Product } from '../../model';

const productService = new ProductService();

describe('Product Service', () => {
    it('Should be have index method', () => {
        expect(productService.index).toBeDefined();
    });

    it('Index method should return a list of products', async () => {
        const result = await productService.index();
        expect(result).toBeInstanceOf(Array);
    });

    it('Create method should return a product', async () => {
        const product: Product = {
            name: 'test',
            price: 20,
            category: 'test',
        };
        const result = await productService.create(product);
        expect(result.name).toEqual(product.name);
    });
});
