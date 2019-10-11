import { createSelector } from '@ngrx/store';
import { feature } from './reducer';

export const getUsers = createSelector(
    feature,
    state => state.users
);

export const getOrders = createSelector(
    feature,
    state => state.orders
);

export const getProducts = createSelector(
    feature,
    state => state.products
);


