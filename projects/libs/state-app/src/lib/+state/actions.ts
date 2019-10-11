import { createAction, props } from '@ngrx/store';

import { Order, User, Product } from 'projects/libs/common/src/lib/model';

export const NewUser = createAction('[Users] New user',
    props<{ user: User }>()
);

export const NewOrder = createAction('[Orders] New order',
    props<{ order: Order }>()
);

export const NewProduct = createAction('[Products] New product',
    props<{ product: Product }>()
);

