import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter(item => item.id !== itemId);
        },
        clearCart: (state, action) => {
            state.items.length = 0;
        },
        incrementQuantity: (state, action) => {
            const itemIdToIncrement = action.payload;
            const itemToIncrement = state.cartItems.find(item => item.id === itemIdToIncrement);

            if (itemToIncrement) {
                itemToIncrement.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const itemIdToDecrement = action.payload;
            const itemToDecrement = state.cartItems.find(item => item.id === itemIdToDecrement);

            if (itemToDecrement && itemToDecrement.quantity > 1) {
                itemToDecrement.quantity -= 1;
            }
        },

    }
})

export const { addItem, removeItem, clearCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;