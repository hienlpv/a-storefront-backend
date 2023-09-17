import { OrderStatus } from '../enum/order.enum';

export interface User {
    id?: number;
    username: string;
    password: string;
    firstName?: string;
    lastName?: string;
}

export interface Product {
    id?: number;
    name: string;
    price: number;
    category?: string;
}

export interface Order {
    id: number;
    user_id: number;
    status: OrderStatus;
    products?: OrderProduct[];
}

export interface OrderProduct {
    id: number;
    order_id: number;
    product_id: number;
    quantity: number
}