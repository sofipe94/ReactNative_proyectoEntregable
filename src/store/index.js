import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import addressReducer from './address/addressSlice';
import { authApi } from './auth/api';
import authReducer from './auth/authSlice';
import cartReducer from './cart/cartSlice';
import { categoriesApi } from './categories/api';
import categoriesReducer from './categories/categoriesSlice';
import { mapsApi } from './maps/api';
import { ordersApi } from './orders/api';
import { productsApi } from './products/api';
import productsReducer from './products/productsSlice';
import { settingsApi } from './settings/api';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    auth: authReducer,
    address: addressReducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [settingsApi.reducerPath]: settingsApi.reducer,
    [mapsApi.reducerPath]: mapsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoriesApi.middleware,
      productsApi.middleware,
      ordersApi.middleware,
      authApi.middleware,
      settingsApi.middleware,
      mapsApi.middleware
    ),
});

setupListeners(store.dispatch);
