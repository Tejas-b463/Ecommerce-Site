import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

const appStore = configureStore({
    reducer: {
        cart: persistedReducer,
    },
});

export const persistor = persistStore(appStore);
export default appStore;