import { createReducer, Action, on, createFeatureSelector } from '@ngrx/store';
import * as ActionsState from './actions';
import { ListOrders, ListUsers, ListProducts } from 'projects/libs/common/src/lib/model';

export const KEY_FEATURE = 'STORE_APP';
export const feature = createFeatureSelector<State>(KEY_FEATURE);

export interface State {
    users: ListUsers;
    orders: ListOrders;
    products: ListProducts;
}

export const initialState = {
    users: [] as ListUsers,
    orders: [] as ListOrders,
    products: [] as ListProducts
} as State;

const featureReducer = createReducer(
    initialState,
    on(ActionsState.NewUser, (state, accion) => ({
        ...state,
        users: state.users.concat(accion.user)
    })),
    on(ActionsState.NewOrder, (state, accion) => ({
        ...state,
        orders: state.orders.concat(accion.order)
    })),
    on(ActionsState.NewProduct, (state, accion) => ({
        ...state,
        products: state.products.concat(accion.product)
    }))
);

export function reducer(state: State | undefined, action: Action) {
    return featureReducer(state, action);
}
