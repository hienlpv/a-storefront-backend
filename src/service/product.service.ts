import { Product } from '../model';
import ProductStore from '../model/product';

const productStore = new ProductStore();

export default class ProductService {
    index(): Promise<Product[]> {
        return productStore.index();
    }

    show(id: string): Promise<Product | null> {
        return productStore.show(id);
    }

    create(product: Product): Promise<Product> {
        return productStore.create(product);
    }
}
