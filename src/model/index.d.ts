import { OrderStatus } from '../enum/order.enum';

export interface User {
    id?: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface Product {
    id?: number;
    name: string;
    price: number;
    category: string;
}

export interface Order {
    id: number;
    product_id: numner;
    user_id: number;
    quantity: number;
    status: OrderStatus;
}
