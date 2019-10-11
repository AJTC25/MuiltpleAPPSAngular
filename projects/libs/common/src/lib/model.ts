export type ListOrders = Order[];

export interface Order {
    user: string;
    product: string;
}

export type ListUsers = User[];

export interface User {
    name: string;
}
export type ListProducts = Product[];

export interface Product {
    name: string;
}

